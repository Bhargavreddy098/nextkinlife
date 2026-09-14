"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useMounted } from "@/lib/use-mounted";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/* fade-and-rise block */
function Up({
  children,
  delay,
  className,
  mounted,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
  mounted: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial={mounted ? { opacity: 0, y: 24 } : false}
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
  mounted,
}: {
  children: ReactNode;
  delay: number;
  className?: string;
  mounted: boolean;
}) {
  return (
    <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
      <motion.span
        className={`inline-block ${className ?? ""}`}
        initial={mounted ? { y: "115%" } : false}
        animate={{ y: "0%" }}
        transition={{ duration: 0.95, ease: EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function HeroCopy() {
  const mounted = useMounted();

  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
      <Up delay={0.05} mounted={mounted}>
        <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/80 shadow-[0_0_24px_rgba(67,217,163,0.12)]">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jade-bright opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-jade-bright" />
          </span>
          Global IT services &amp; consulting — USA · India · South Africa
        </p>
      </Up>

      <h1 className="font-display mt-8 text-center text-4xl leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[5.2rem] xl:text-[5.8rem]">
        <Word delay={0.15} mounted={mounted}>
          Ideas
        </Word>{" "}
        <Word delay={0.22} mounted={mounted}>
          in.
        </Word>{" "}
        <br className="hidden sm:inline" />
        <Word delay={0.32} className="italic text-jade-bright" mounted={mounted}>
          Impact
        </Word>{" "}
        <Word delay={0.4} className="italic text-jade-bright" mounted={mounted}>
          out.
        </Word>
      </h1>

      <Up delay={0.5} mounted={mounted}>
        <p className="mx-auto mt-7 max-w-2xl text-center text-lg leading-relaxed text-white/75 sm:text-xl">
          NextKinLife designs, builds and runs the technology ambitious companies depend on —
          custom software, data platforms, AI and cloud — taken from first sketch to global scale
          by one team across three continents.
        </p>
      </Up>

      <Up delay={0.62} mounted={mounted}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-jade-bright px-7 py-4 text-base font-semibold text-ink shadow-[0_12px_36px_-10px_rgba(67,217,163,0.45)] transition-all duration-300 hover:scale-[1.04] hover:bg-white active:scale-[0.97]"
          >
            Schedule a Consultation
            <ArrowUpRight className="h-[1.15rem] w-[1.15rem] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#careers"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.02] px-7 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.04] hover:border-white/40 hover:bg-white/[0.06] active:scale-[0.97]"
          >
            Explore Careers
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </Up>
    </div>
  );
}
