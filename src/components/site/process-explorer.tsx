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
      <ol className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0" aria-label="Delivery process stages">
        {PROCESS_STAGES.map((s, i) => {
          const selected = i === active;
          const done = i < active;
          return (
            <li key={s.step} className="shrink-0 lg:shrink">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-current={selected ? "step" : undefined}
                className={cn(
                  "group flex w-full items-center gap-4 rounded-md px-4 py-3 text-left transition-all lg:rounded-none lg:px-0 lg:py-5",
                  selected ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                )}
              >
                <span
                  className={cn(
                    "font-mono text-xs tracking-widest transition-colors",
                    selected ? "text-jade" : done ? "text-jade/70" : "text-muted-foreground/60"
                  )}
                >
                  {s.step}
                </span>
                <span className={cn("whitespace-nowrap text-lg font-medium lg:text-xl transition-colors", selected && "font-semibold")}>
                  {s.title}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "ml-auto hidden h-px flex-1 transition-all lg:block lg:mx-5",
                    selected ? "bg-ink/30" : "bg-line group-hover:bg-ink/20"
                  )}
                />
                <ArrowRight
                  className={cn(
                    "hidden h-4 w-4 shrink-0 transition-all lg:block",
                    selected ? "translate-x-0 opacity-100 text-jade" : "-translate-x-1 opacity-0"
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
        className="relative overflow-hidden rounded-xl border border-ink bg-ink p-7 text-ink-foreground sm:p-10"
        role="status"
        aria-live="polite"
      >
        <div className="pointer-events-none absolute inset-0 dot-grid-dark opacity-60" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-jade/15 blur-3xl" aria-hidden="true" />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-5xl font-light tracking-tight text-jade-bright sm:text-6xl">
              {stage.step}
            </span>
            <div>
              <h3 className="font-display text-2xl tracking-tight text-white sm:text-3xl">{stage.title}</h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-ink-muted">
                {stage.tag}
              </p>
            </div>
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {stage.description}
          </p>
          <div className="mt-8">
            <p className="eyebrow text-white/50">What happens here</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {stage.focus.map((f) => (
                <li
                  key={f}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-white/85"
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
