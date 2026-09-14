"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Pause,
  Play,
  Grid3X3,
  SlidersHorizontal,
} from "lucide-react";
import { CAPABILITIES } from "@/lib/data";
import { SectionHeader } from "../section-header";
import { cn } from "@/lib/utils";

export function Capabilities() {
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [nudge, setNudge] = useState(0);
  const [viewMode, setViewMode] = useState<"scroll" | "grid">("scroll");
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-linked translation boost from left to right as the user scrolls the page
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scrollOffset = useTransform(scrollYProgress, [0, 1], [-80, 260]);
  const smoothScrollX = useSpring(scrollOffset, { stiffness: 85, damping: 26 });

  // Double the list for infinite seamless left-to-right looping
  const repeated = [...CAPABILITIES, ...CAPABILITIES];

  const handlePrev = () => {
    setNudge((prev) => prev - 360);
  };

  const handleNext = () => {
    setNudge((prev) => prev + 360);
  };

  return (
    <section
      id="capabilities"
      ref={sectionRef}
      className="scroll-mt-20 overflow-hidden bg-background py-24 sm:py-32"
    >
      <div className="container-site">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Services & Capabilities"
            title={
              <>
                How can we help you?
                <br />
                <span className="italic text-jade">Six services, one team.</span>
              </>
            }
            description="From custom software to AI integration and cloud solutions, our services cover every stage of your digital journey — designed, built and supported by the same accountable team."
          />

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle (Scroll vs Grid) */}
            <div className="flex items-center rounded-lg border border-line bg-paper p-1">
              <button
                type="button"
                onClick={() => setViewMode("scroll")}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                  viewMode === "scroll"
                    ? "bg-ink text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Carousel Scroll View"
              >
                <SlidersHorizontal className="h-3.5 w-3.5" />
                <span>Scroll</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                  viewMode === "grid"
                    ? "bg-ink text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label="Grid View"
              >
                <Grid3X3 className="h-3.5 w-3.5" />
                <span>Grid</span>
              </button>
            </div>

            {/* Scroll Controls (Play/Pause & Nudge) */}
            {viewMode === "scroll" && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-card text-muted-foreground transition-colors hover:border-ink/30 hover:text-foreground"
                  aria-label={isAutoPlay ? "Pause scrolling" : "Resume scrolling"}
                  title={isAutoPlay ? "Pause scrolling" : "Resume scrolling"}
                >
                  {isAutoPlay ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                </button>

                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-card text-foreground transition-all hover:bg-ink hover:text-white"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={handleNext}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-card text-foreground transition-all hover:bg-ink hover:text-white"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}

            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-jade-strong"
            >
              Discuss your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Service Cards Presentation */}
        <div className="relative mt-12">
          {viewMode === "scroll" ? (
            /* INFINITE LEFT-TO-RIGHT MARQUEE CAROUSEL */
            <div
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative -mx-4 overflow-hidden px-4 py-3 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            >
              {/* Fade Edges */}
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-background via-background/80 to-transparent sm:w-28"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-background via-background/80 to-transparent sm:w-28"
                aria-hidden="true"
              />

              {/* Scroll-boosted motion container */}
              <motion.div style={{ x: smoothScrollX }} className="w-full">
                {/* Nudge wrapper */}
                <div
                  style={{ transform: `translate3d(${nudge}px, 0, 0)` }}
                  className="transition-transform duration-300 ease-out"
                >
                  {/* Continuous Left-to-Right Scrolling Track */}
                  <div
                    className="flex w-max animate-marquee-cards-ltr items-stretch gap-6 py-4 will-change-transform"
                    style={{
                      animationPlayState: isAutoPlay && !isHovered ? "running" : "paused",
                    }}
                  >
                    {repeated.map((cap, i) => {
                      const Icon = cap.icon;
                      const cardIndex = (i % CAPABILITIES.length) + 1;

                      return (
                        <article
                          key={`${cap.id}-${i}`}
                          className="group relative flex w-[330px] shrink-0 flex-col rounded-2xl border border-line bg-card/90 p-7 sm:w-[380px] sm:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-jade/40 hover:bg-card hover:shadow-[0_20px_45px_-15px_rgba(16,185,129,0.18)]"
                        >
                          {/* Top index & icon */}
                          <div className="flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-jade-soft text-jade-strong transition-colors duration-300 group-hover:bg-ink group-hover:text-jade-bright">
                              <Icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <span className="font-mono text-xs font-semibold tracking-widest text-jade">
                              0{cardIndex}
                            </span>
                          </div>

                          {/* Title & Summary */}
                          <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-jade-strong">
                            {cap.title}
                          </h3>
                          <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                            {cap.summary}
                          </p>

                          {/* Outcomes with Jade Checks */}
                          <ul className="mt-6 space-y-2.5 border-t border-line/60 pt-5">
                            {cap.outcomes.map((o) => (
                              <li
                                key={o}
                                className="flex items-start gap-2.5 text-xs text-foreground/85 sm:text-sm"
                              >
                                <Check
                                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-jade"
                                  aria-hidden="true"
                                />
                                <span>{o}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Technology tags */}
                          <div className="mt-6 flex flex-wrap gap-1.5">
                            {cap.technologies.map((t) => (
                              <span
                                key={t}
                                className="rounded-md border border-line bg-paper-2 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-muted-foreground"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Link to Contact */}
                          <a
                            href="#contact"
                            className="group/link mt-7 inline-flex items-center gap-1.5 border-t border-line pt-4 text-sm font-medium text-foreground transition-colors hover:text-jade-strong"
                            aria-label={`Discuss ${cap.title} with our team`}
                          >
                            Talk to an engineer
                            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                          </a>
                        </article>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          ) : (
            /* GRID VIEW ALTERNATIVE */
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map((cap, i) => {
                const Icon = cap.icon;
                return (
                  <article
                    key={cap.id}
                    className="flex flex-col rounded-2xl border border-line bg-card p-7 sm:p-8 transition-all hover:-translate-y-1 hover:border-jade/30 hover:shadow-xl"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-jade-soft text-jade-strong">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-xs font-semibold tracking-widest text-jade">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{cap.title}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {cap.summary}
                    </p>

                    <ul className="mt-6 space-y-2 border-t border-line/60 pt-5">
                      {cap.outcomes.map((o) => (
                        <li key={o} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                          <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-jade" aria-hidden="true" />
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {cap.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-line bg-paper-2 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="mt-7 inline-flex items-center gap-1.5 border-t border-line pt-4 text-sm font-medium text-foreground transition-colors hover:text-jade-strong"
                    >
                      Talk to an engineer
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
