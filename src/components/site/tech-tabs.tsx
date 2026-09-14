"use client";

import { useState } from "react";
import { TECH_CATEGORIES } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TechTabs() {
  const [active, setActive] = useState(TECH_CATEGORIES[0].id);
  const current = TECH_CATEGORIES.find((c) => c.id === active) ?? TECH_CATEGORIES[0];

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[240px_1fr] lg:gap-14">
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
                "group flex shrink-0 items-center justify-between gap-6 rounded-md border px-4 py-3 text-left text-sm transition-all lg:w-full",
                selected
                  ? "border-ink bg-ink text-white"
                  : "border-line bg-transparent text-muted-foreground hover:border-ink/25 hover:text-foreground"
              )}
            >
              <span className="font-medium">{cat.label}</span>
              <span
                className={cn(
                  "hidden h-1.5 w-1.5 rounded-full lg:block",
                  selected ? "bg-jade-bright" : "bg-line group-hover:bg-ink/30"
                )}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>

      {/* Panel */}
      <div
        role="tabpanel"
        id={`tech-panel-${current.id}`}
        aria-labelledby={`tech-tab-${current.id}`}
        className="min-h-[22rem] rounded-xl border border-line bg-card p-6 sm:p-10"
      >
        <p className="eyebrow text-jade">{current.label}</p>
        <h3 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">{current.headline}</h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {current.description}
        </p>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 xl:grid-cols-3">
          {current.items.map((item) => (
            <li key={item.name} className="bg-card p-4 transition-colors hover:bg-paper-2">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.use}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
