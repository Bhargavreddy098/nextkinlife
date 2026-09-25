import type { ReactNode } from "react";

/**
 * Two surfaces, banded: the ink canvas and a barely-lighter band. That is the
 * entire section rhythm — no tinted panels, no colour-blocked sections, so the
 * single accent keeps all of its meaning.
 */
export type SectionTone = "canvas" | "band";

const TONES: Record<SectionTone, string> = {
  canvas: "bg-canvas",
  band: "bg-canvas-band",
};

export function Section({
  id,
  children,
  className = "",
  bordered = false,
  tone = "canvas",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
  tone?: SectionTone;
}) {
  // Spacious by design: 64px mobile → 96px tablet → 128px desktop.
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-16 sm:py-24 lg:py-32 ${TONES[tone]} ${
        bordered ? "border-t border-line" : ""
      } ${className}`}
    >
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">{children}</div>
    </section>
  );
}

/**
 * Technical eyebrow: mono, letterspaced, with an accent slash marker. The slash
 * is the only accent here — ten sections of accent-coloured labels would spend
 * the colour before any call to action got to use it.
 */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 font-mono text-[11px] font-medium tracking-[0.18em] text-muted uppercase">
      <span aria-hidden className="text-brand-ink">
        /&nbsp;
      </span>
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[28px] leading-[1.15] font-bold tracking-[-0.02em] text-ink sm:text-[34px] lg:text-[40px] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-[16px] leading-[1.65] text-ink-soft sm:text-[17px] ${className}`}>
      {children}
    </p>
  );
}

/**
 * Emphasis inside body copy — the Verdent trick: keep the sentence muted and
 * lift only the phrase that carries the point.
 */
export function Mark({ children }: { children: ReactNode }) {
  return <span className="font-medium text-ink">{children}</span>;
}

/** Small label chip used across the mock product UI. */
export function Chip({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: "neutral" | "brand" | "positive" | "warn" | "info" | "danger";
}) {
  const tones = {
    neutral: "bg-elevated text-ink-soft",
    brand: "bg-brand-soft text-brand-ink",
    positive: "bg-positive-soft text-positive-ink",
    warn: "bg-warn-soft text-warn-ink",
    info: "bg-info-soft text-info-ink",
    danger: "bg-danger-soft text-danger-ink",
  } as const;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
