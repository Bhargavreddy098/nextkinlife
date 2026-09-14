"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/site";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink-border bg-ink/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-6 sm:h-[4.5rem]">
        <a href="#top" aria-label="Kaidron — back to top" className="shrink-0">
          <Logo inverted />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group hidden items-center gap-1.5 rounded-md bg-jade-bright px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-white sm:inline-flex"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={cn(
          "fixed inset-0 top-16 z-40 flex flex-col bg-ink transition-all duration-300 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <nav aria-label="Mobile" className="container-site flex flex-1 flex-col gap-1 overflow-y-auto py-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center justify-between border-b border-white/[0.06] py-5 text-2xl font-medium text-white/85 transition-all duration-500 hover:text-white",
                open ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
              )}
              style={{ transitionDelay: `${60 + i * 40}ms` }}
            >
              {link.label}
              <ArrowUpRight className="h-5 w-5 text-jade-bright" />
            </a>
          ))}
        </nav>
        <div className="container-site pb-10">
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-jade-bright px-5 py-3.5 text-base font-medium text-ink"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <p className="mt-6 text-center text-sm text-ink-muted">
            hello@kaidron.com · USA · India · South Africa
          </p>
        </div>
      </div>
    </header>
  );
}
