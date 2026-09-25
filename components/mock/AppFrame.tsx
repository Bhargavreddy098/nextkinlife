import type { ReactNode } from "react";

/**
 * Browser-chrome frame for product mockups.
 *
 * The whole mockup is exposed as a single labelled image so screen readers get
 * a concise description instead of a stream of fabricated sample data.
 */
export function AppFrame({
  children,
  label,
  url = "app.oneclickhr.app/overview",
  className = "",
}: {
  children: ReactNode;
  label: string;
  url?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`overflow-hidden rounded-panel border border-line bg-surface shadow-frame ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-canvas px-3.5 py-2.5 sm:px-4">
        <span className="flex shrink-0 gap-1.5">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </span>

        <span className="mx-auto flex h-6 w-full max-w-[300px] items-center justify-center gap-1.5 rounded-md border border-line bg-surface px-3">
          <svg
            viewBox="0 0 12 12"
            className="size-2.5 shrink-0 text-brand-ink"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
          >
            <rect x="2.5" y="5.2" width="7" height="5" rx="1.2" />
            <path d="M4.3 5.2V4a1.7 1.7 0 013.4 0v1.2" />
          </svg>
          <span className="truncate font-mono text-[11px] text-muted">{url}</span>
        </span>

        <span className="hidden w-[46px] shrink-0 sm:block" />
      </div>

      {children}
    </div>
  );
}
