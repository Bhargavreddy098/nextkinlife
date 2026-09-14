"use client";

import { useState } from "react";
import { TECH_CATEGORIES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TechTabs() {
  const [active, setActive] = useState(TECH_CATEGORIES[0].id);
  const current = TECH_CATEGORIES.find((c) => c.id === active) ?? TECH_CATEGORIES[0];

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-14">
      {/* Tab list */}
      <div
        role="tablist"
        aria-label="Technology categories"
        className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin lg:flex-col lg:overflow-visible lg:pb-0"
      >
        {TECH_CATEGORIES.map((cat) => {
          const selected = cat.id === active;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={selected}
              aria-controls={`tech-panel-${cat.id}`}
              id={`tech-tab-${cat.id}`}
              onClick={() => setActive(cat.id)}
              className={cn(
                "relative group flex shrink-0 items-center justify-between gap-6 rounded-xl border px-4 py-3.5 text-left text-sm transition-colors lg:w-full",
                selected
                  ? "border-ink bg-ink text-white font-medium shadow-sm"
                  : "border-line bg-card/60 text-muted-foreground hover:border-ink/30 hover:text-foreground"
              )}
            >
              <span className="relative z-10">{cat.label}</span>
              <span
                className={cn(
                  "relative z-10 hidden h-2 w-2 rounded-full transition-colors lg:block",
                  selected ? "bg-jade-bright" : "bg-line group-hover:bg-ink/30"
                )}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      {/* Static Panel */}
      <div
        role="tabpanel"
        id={`tech-panel-${current.id}`}
        aria-labelledby={`tech-tab-${current.id}`}
        className="min-h-[22rem] rounded-2xl border border-line bg-card p-7 sm:p-10 shadow-sm"
      >
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-jade" />
          <p className="eyebrow text-jade font-semibold">{current.label}</p>
        </div>
        <h3 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">
          {current.headline}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {current.description}
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {current.items.map((item) => (
            <li
              key={item.name}
              className="rounded-xl border border-line bg-paper p-4.5 transition-colors hover:border-jade/30"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{item.name}</p>
                <span className="h-1.5 w-1.5 rounded-full bg-jade/40" />
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{item.use}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

