"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { PROCESS_STAGES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProcessExplorer() {
  const [active, setActive] = useState(0);
  const stage = PROCESS_STAGES[active];

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
      {/* Stage rail */}
      <ol
        className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0"
        aria-label="Delivery process stages"
      >
        {PROCESS_STAGES.map((s, i) => {
          const selected = i === active;
          const done = i < active;

          return (
            <li key={s.step} className="relative shrink-0 lg:shrink">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={selected ? "step" : undefined}
                className={cn(
                  "relative group flex w-full items-center gap-4 rounded-xl px-4 py-3.5 text-left transition-colors lg:rounded-none lg:px-2 lg:py-5",
                  selected ? "bg-card border border-line text-foreground lg:bg-transparent lg:border-none" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "relative z-10 font-mono text-xs tracking-widest transition-colors",
                    selected ? "text-jade font-bold" : done ? "text-jade/70" : "text-muted-foreground/60"
                  )}
                >
                  {s.step}
                </span>

                <span
                  className={cn(
                    "relative z-10 whitespace-nowrap text-lg font-medium lg:text-xl transition-colors",
                    selected && "font-semibold text-foreground"
                  )}
                >
                  {s.title}
                </span>

                <span
                  aria-hidden="true"
                  className={cn(
                    "relative z-10 ml-auto hidden h-px flex-1 transition-colors lg:block lg:mx-5",
                    selected ? "bg-jade/40" : "bg-line group-hover:bg-ink/20"
                  )}
                />

                <ArrowRight
                  className={cn(
                    "relative z-10 hidden h-4 w-4 shrink-0 transition-colors lg:block",
                    selected ? "text-jade" : "opacity-0"
                  )}
                />
              </button>
              <div className={cn("hidden lg:block h-px bg-line", !selected && "opacity-60")} />
            </li>
          );
        })}
      </ol>

      {/* Detail panel */}
      <div
        key={stage.step}
        className="relative overflow-hidden rounded-2xl border border-ink bg-ink p-7 text-ink-foreground shadow-2xl sm:p-10"
        role="status"
        aria-live="polite"
      >
        <div className="pointer-events-none absolute inset-0 dot-grid-dark opacity-60" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-jade/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-5xl font-light tracking-tight text-jade-bright sm:text-6xl">
              {stage.step}
            </span>
            <div>
              <h3 className="font-display text-2xl tracking-tight text-white sm:text-3xl">
                {stage.title}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-muted">
                {stage.tag}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {stage.description}
          </p>

          <div className="mt-8">
            <p className="eyebrow text-white/50">Key Milestones &amp; Deliverables</p>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {stage.focus.map((f) => (
                <li
                  key={f}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm text-white/90 backdrop-blur-sm"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-jade-bright" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

