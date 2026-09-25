"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import { Button, PendingLink } from "./Button";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  /** In-page id of the section currently under the reader, e.g. "features". */
  const [activeId, setActiveId] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => setOpen(false), []);

  /** Section ids the navbar can highlight — placeholders have no target. */
  const sectionIds = useMemo(
    () =>
      NAV_LINKS.filter(
        (link) => !link.pending && link.href.startsWith("#") && link.href.length > 1,
      ).map((link) => link.href.slice(1)),
    [],
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active-link tracking: the observer only fires while a section crosses the
  // middle band of the viewport, then the winner is chosen from real geometry.
  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const sync = () => {
      const midline = window.innerHeight * 0.5;
      const current = elements.find((element) => {
        const rect = element.getBoundingClientRect();
        return rect.top <= midline && rect.bottom >= midline;
      });
      setActiveId(current?.id ?? null);
    };

    const observer = new IntersectionObserver(sync, {
      rootMargin: "-45% 0px -45% 0px",
    });

    elements.forEach((element) => observer.observe(element));
    sync();

    return () => observer.disconnect();
  }, [sectionIds]);

  // Close the drawer if the viewport grows to desktop, otherwise the body
  // would stay scroll-locked while the panel is hidden by `lg:hidden`.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Scroll lock, Escape to dismiss, and a focus trap while the drawer is open.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled])',
        ) ?? [],
      );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab") return;

      const items = focusables();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => focusables()[0]?.focus(), 30);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-canvas/80 backdrop-blur-md"
          : "border-transparent bg-canvas"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-[1180px] items-center gap-8 px-5 sm:px-8"
      >
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.startsWith("#") ? link.href.slice(1) : "";
            const active = id.length > 0 && id === activeId;

            return (
              <li key={link.label}>
                {link.pending ? (
                  <PendingLink
                    label={link.label}
                    className="rounded-control px-3 py-2 text-sm font-medium"
                  />
                ) : (
                  <Link
                    href={link.href}
                    aria-current={active ? "true" : undefined}
                    className={`rounded-control px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-brand-soft text-brand-ink"
                        : "text-ink-soft hover:bg-elevated hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Link
            href="/login"
            className="rounded-control px-4 py-2 text-sm font-semibold text-ink-soft transition-colors hover:bg-elevated hover:text-ink"
          >
            Login
          </Link>
          <Button href="/signup">Get Started</Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto grid size-10 place-items-center rounded-control border border-line-strong text-ink transition-colors hover:border-brand-line hover:bg-elevated lg:hidden"
        >
          <svg
            viewBox="0 0 20 20"
            aria-hidden
            className="size-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          ref={panelRef}
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-line bg-canvas px-5 pt-4 pb-10 lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => {
              const id = link.href.startsWith("#") ? link.href.slice(1) : "";
              const active = id.length > 0 && id === activeId;

              return (
                <li key={link.label} className="border-b border-line">
                  {link.pending ? (
                    <span className="flex items-center py-3.5 text-[15px] font-medium">
                      <PendingLink label={link.label} />
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={close}
                      aria-current={active ? "true" : undefined}
                      className={`flex items-center gap-2.5 py-3.5 text-[15px] font-medium transition-colors ${
                        active ? "text-brand-ink" : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      {active && (
                        <span aria-hidden className="size-1.5 rounded-full bg-brand" />
                      )}
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-6 flex flex-col gap-2.5">
            <Button href="/signup" size="lg">
              Get Started
            </Button>
            <Button href="/login" variant="secondary" size="lg">
              Login
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
