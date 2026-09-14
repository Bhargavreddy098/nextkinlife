import { Check } from "lucide-react";
import { APPROACH_PILLARS, DEV_STRENGTHS } from "@/lib/data";
import { SectionHeader } from "../section-header";
import { Reveal } from "../reveal";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 bg-ink py-24 text-ink-foreground sm:py-32">
      <div className="container-site">
        <SectionHeader
          inverted
          eyebrow="How We Deliver"
          title={
            <>
              Best-in-class custom software,
              <br />
              delivered <em className="italic text-jade-bright">deliberately.</em>
            </>
          }
          description="Insightful strategy, intentional design and resourceful development — one continuous model that takes your product from first sketch to global scale, and stays accountable for it after launch."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-5">
          {APPROACH_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.id} delay={i * 70} className="h-full">
              <article className="flex h-full flex-col bg-ink p-7 transition-colors duration-300 hover:bg-ink-2">
                <span className="font-mono text-xs tracking-[0.2em] text-jade-bright">
                  {pillar.step}
                </span>
                <h3 className="font-display mt-3 text-2xl tracking-tight text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                  {pillar.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/[0.07] pt-5">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.8rem] leading-snug text-white/75">
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-jade-bright" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Development strengths */}
        <Reveal delay={120}>
          <div className="mt-10 rounded-xl border border-white/10 bg-ink-2/60 px-7 py-6">
            <p className="eyebrow text-white/50">Engineering standards in every build</p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
              {DEV_STRENGTHS.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2.5 text-sm font-medium text-white/85"
                >
                  <span className="h-1 w-1 rounded-full bg-jade-bright" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
