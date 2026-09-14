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
  return (
    <div className="relative mt-10 w-full border-y border-white/[0.09] bg-white/[0.015] py-5 backdrop-blur-sm sm:mt-14 sm:py-6">
      <div className="container-site">
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`group/item flex items-center gap-2.5 whitespace-nowrap rounded-full border px-4 py-2 transition-colors ${
                  item.highlight
                    ? "border-jade-bright/35 bg-jade-bright/[0.08] text-jade-bright hover:border-jade-bright/60 hover:bg-jade-bright/[0.14]"
                    : "border-white/10 bg-white/[0.03] text-white/75 hover:border-white/25 hover:text-white"
                }`}
              >
                <Icon
                  className={`h-3.5 w-3.5 ${
                    item.highlight ? "text-jade-bright" : "text-white/50 group-hover/item:text-jade-bright"
                  }`}
                />
                <span className="font-mono text-[0.78rem] font-medium uppercase tracking-[0.14em] sm:text-xs">
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
      </div>
    </div>
  );
}

