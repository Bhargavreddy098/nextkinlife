"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* fade-and-rise block */
function Up({
  children,
  delay,
  className,
  reduced,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
  reduced: boolean | null;
}) {
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/* single word rising out of a mask */
function Word({
  children,
  delay,
  className,
  reduced,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
  reduced: boolean | null;
}) {
  return (
    <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
      <motion.span
        className={`inline-block ${className ?? ""}`}
        initial={reduced ? false : { y: "115%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroCopy() {
  const reduced = useReducedMotion();

  return (
    <div className="max-w-xl">
      <Up delay={0.05} reduced={reduced}>
        <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/80">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jade-bright opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-jade-bright" />
          </span>
          Global IT services &amp; consulting — USA · India · South Africa
        </p>
      </Up>

      <h1 className="font-display mt-7 text-[2.75rem] leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
        <Word delay={0.15} reduced={reduced}>
          Ideas
        </Word>{" "}
        <Word delay={0.22} reduced={reduced}>
          in.
        </Word>
        <br />
        <Word delay={0.32} className="italic text-jade-bright" reduced={reduced}>
          Impact
        </Word>{" "}
        <Word delay={0.4} className="italic text-jade-bright" reduced={reduced}>
          out.
        </Word>
      </h1>

      <Up delay={0.5} reduced={reduced}>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
          NextKinLife designs, builds and runs the technology ambitious companies depend on —
          custom software, data platforms, AI and cloud — taken from first sketch to global scale
          by one team across three continents.
        </p>
      </Up>

      <Up delay={0.62} reduced={reduced}>
        <div className="mt-9 flex flex-wrap items-center gap-4">
          <motion.a
            href="#contact"
            whileHover={reduced ? undefined : { scale: 1.035 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="group inline-flex items-center gap-2 rounded-md bg-jade-bright px-6 py-3.5 text-base font-medium text-ink shadow-[0_12px_36px_-10px_rgba(67,217,163,0.45)] transition-colors hover:bg-white"
          >
            Schedule a Consultation
            <ArrowUpRight className="h-[1.1rem] w-[1.1rem] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
          <motion.a
            href="#careers"
            whileHover={reduced ? undefined : { scale: 1.035 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 320, damping: 18 }}
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3.5 text-base font-medium text-white transition-colors hover:border-white/40"
          >
            Explore Careers
            <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>
      </Up>

      <Up delay={0.74} reduced={reduced}>
        <p className="mt-10 max-w-xl font-mono text-xs uppercase tracking-widest text-ink-muted">
          Custom software · Data · AI · Cloud · Enterprise systems · Consulting
        </p>
      </Up>
    </div>
  );
}
