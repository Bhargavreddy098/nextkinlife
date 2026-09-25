import Link from "next/link";
import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "invert" | "on-accent";
export type ButtonSize = "md" | "lg";

const BASE =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-control font-semibold whitespace-nowrap transition-colors duration-200 active:translate-y-px";

/**
 * Two actions, one colour. The accent is reserved for the single most important
 * action in view; everything else is a hairline outline. That restraint is what
 * keeps the page feeling premium instead of decorated.
 */
const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-brand text-white hover:bg-brand-strong",
  secondary:
    "border border-line-strong bg-transparent text-ink hover:border-brand-line hover:bg-elevated",
  ghost: "text-ink-soft hover:bg-elevated hover:text-ink",
  /** On the accent field: white outline, white text. */
  invert:
    "border border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10",
  /** On the accent field: white fill, accent text — the filled action inverts. */
  "on-accent": "bg-white text-brand-strong hover:bg-white/90",
};

const SIZES: Record<ButtonSize, string> = {
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  ariaLabel?: string;
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  // External destinations open in a new tab so the marketing site stays put.
  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {children}
    </Link>
  );
}

/** A nav/footer entry that has no destination yet — never renders a dead link. */
export function PendingLink({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <span
      aria-disabled="true"
      title={`${label} is coming soon`}
      className={`inline-flex cursor-default items-center gap-1.5 text-muted ${className}`}
    >
      {label}
      <span className="rounded-full border border-line bg-surface px-1.5 py-px text-[10px] font-semibold tracking-wide text-faint uppercase">
        Soon
      </span>
    </span>
  );
}
