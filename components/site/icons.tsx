import type { ReactNode } from "react";

/**
 * Single source of truth for the small line icons (20-unit grid, 1.5 stroke,
 * currentColor). Shared by the dashboard mock and the marketing sections so
 * both stay visually identical.
 */
export const ICONS = {
  overview: (
    <>
      <rect x="3" y="3" width="6" height="6" rx="1.6" />
      <rect x="11" y="3" width="6" height="6" rx="1.6" />
      <rect x="3" y="11" width="6" height="6" rx="1.6" />
      <rect x="11" y="11" width="6" height="6" rx="1.6" />
    </>
  ),
  employees: (
    <>
      <circle cx="7.6" cy="7" r="2.6" />
      <path d="M3 16.4c0-2.3 2.1-3.7 4.6-3.7s4.6 1.4 4.6 3.7" />
      <path d="M13.4 5.9a2.4 2.4 0 010 4.8M14.2 12.9c1.9.4 2.8 1.7 2.8 3.5" />
    </>
  ),
  attendance: (
    <>
      <circle cx="10" cy="10" r="7" />
      <path d="M10 5.9v4.4l2.8 1.7" />
    </>
  ),
  leave: (
    <>
      <rect x="3" y="4.8" width="14" height="12.2" rx="2.2" />
      <path d="M3 9.2h14M7.2 2.9v3.8M12.8 2.9v3.8" />
    </>
  ),
  payroll: (
    <>
      <rect x="2.6" y="5.4" width="14.8" height="9.6" rx="2.2" />
      <path d="M2.6 9h14.8" />
      <circle cx="13.9" cy="12.2" r="1" />
    </>
  ),
  tasks: (
    <>
      <rect x="3" y="3" width="14" height="14" rx="2.6" />
      <path d="M6.9 10.3l2.2 2.2 4.2-4.6" />
    </>
  ),
  compliance: (
    <>
      <path d="M10 2.9l5.9 2.2v5c0 3.3-2.4 6-5.9 6.9-3.5-.9-5.9-3.6-5.9-6.9v-5z" />
      <path d="M7.5 9.9l1.8 1.8 3.3-3.5" />
    </>
  ),
  settings: (
    <>
      <path d="M3 6.4h8.4M15.4 6.4H17M3 13.6h3.4M10.4 13.6H17" />
      <circle cx="13.4" cy="6.4" r="1.9" />
      <circle cx="8.4" cy="13.6" r="1.9" />
    </>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof ICONS;

/** Renders one of the shared icons as a 15px line SVG (size overridable). */
export function Icon({
  name,
  className = "size-[15px] shrink-0",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 20 20"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {ICONS[name]}
    </svg>
  );
}
