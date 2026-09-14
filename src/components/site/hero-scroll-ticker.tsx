"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  Cloud,
  Layers,
  Database,
  BrainCircuit,
  Code2,
  Compass,
  Palette,
  Sparkles,
} from "lucide-react";

const PILLARS = [
  { label: "Cloud Infrastructure", icon: Cloud, highlight: true },
  { label: "Enterprise Systems", icon: Layers, highlight: true },
  { label: "Applied AI", icon: BrainCircuit, highlight: false },
  { label: "Data Platforms", icon: Database, highlight: false },
  { label: "Custom Software", icon: Code2, highlight: false },
  { label: "Strategic IT Consulting", icon: Compass, highlight: false },
  { label: "UI/UX Engineering", icon: Palette, highlight: false },
  { label: "Digital Transformation", icon: Sparkles, highlight: false },
];

export function HeroScrollTicker() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Bind to page scroll for scroll-driven left-to-right translation boost
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Translates to the right (left-to-right) as user scrolls down the page
  const scrollOffset = useTransform(scrollYProgress, [0, 1], [-60, 240]);
  const smoothX = useSpring(scrollOffset, { stiffness: 90, damping: 24 });

  // Quadruple the list so infinite continuous loop has zero gap
  const repeated = [...PILLARS, ...PILLARS, ...PILLARS, ...PILLARS];

  return (
    <div
      ref={containerRef}
      className="relative mt-12 w-full overflow-hidden border-y border-white/[0.09] bg-white/[0.015] py-4 backdrop-blur-sm sm:mt-16 sm:py-4.5"
    >
      {/* Left and right gradient fade masks */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-ink via-ink/80 to-transparent sm:w-36"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-ink via-ink/80 to-transparent sm:w-36"
        aria-hidden="true"
      />

      {/* Outer scroll-reactive motion container */}
      <motion.div style={{ x: smoothX }} className="w-full">
        {/* Inner infinite left-to-right marquee track */}
        <div
          className="flex w-max animate-marquee-ltr items-center gap-8 sm:gap-10"
          aria-hidden="true"
        >
          {repeated.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group/item flex items-center gap-3 whitespace-nowrap rounded-full border px-4 py-1.5 transition-colors duration-300 ${
                  item.highlight
                    ? "border-jade-bright/35 bg-jade-bright/[0.08] text-jade-bright hover:border-jade-bright/60 hover:bg-jade-bright/[0.14]"
                    : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/25 hover:text-white"
                }`}
              >
                <Icon
                  className={`h-3.5 w-3.5 ${
                    item.highlight ? "text-jade-bright" : "text-white/50 group-hover/item:text-jade-bright"
                  }`}
                />
                <span className="font-mono text-[0.78rem] font-medium uppercase tracking-[0.16em] sm:text-xs">
                  {item.label}
                </span>
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    item.highlight ? "bg-jade-bright shadow-[0_0_8px_rgba(67,217,163,0.8)]" : "bg-white/30"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
