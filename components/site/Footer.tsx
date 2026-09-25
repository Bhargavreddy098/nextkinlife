import Link from "next/link";
import { FOOTER_GROUPS } from "@/lib/site";
import { PendingLink } from "./Button";
import { Logo } from "./Logo";

function FooterLink({
  href,
  label,
  pending,
}: {
  href: string;
  label: string;
  pending?: boolean;
}) {
  if (pending) {
    return <PendingLink label={label} className="text-sm" />;
  }

  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-ink-soft transition-colors hover:text-brand-ink"
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className="text-sm text-ink-soft transition-colors hover:text-brand-ink"
    >
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto w-full max-w-[1180px] px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))] lg:gap-8">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              One workspace for attendance, leave, payroll, work authorization,
              tasks and employee operations.
            </p>
          </div>

          {FOOTER_GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="mb-4 text-[11px] font-bold tracking-[0.12em] text-ink uppercase">
                {group.title}
              </h2>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink {...link} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} OneClickHR. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              href="/login"
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-brand-ink"
            >
              Login
            </Link>
            <Link
              href="/careers"
              className="text-sm font-semibold text-ink-soft transition-colors hover:text-brand-ink"
            >
              Browse open roles
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
