import { ArrowRight, Plus } from "lucide-react";
import { CAPABILITIES } from "@/lib/data";
import { SectionHeader } from "../section-header";
import { Reveal } from "../reveal";

export function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Capabilities"
            title={
              <>
                Six disciplines.
                <br />
                One engineering organization.
              </>
            }
            description="Most engagements draw on several of these at once. The advantage: strategy, design, engineering and operations sit in the same room — and the same accountability."
          />
          <Reveal delay={120} className="shrink-0">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-md border border-ink/15 px-5 py-3 text-sm font-medium transition-colors hover:border-ink hover:bg-ink hover:text-white"
            >
              Discuss your project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.id} delay={(i % 3) * 80} className="h-full">
              <article className="group flex h-full flex-col bg-background p-7 transition-colors duration-300 hover:bg-card sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-jade-soft text-jade-strong transition-colors duration-300 group-hover:bg-ink group-hover:text-jade-bright">
                  <cap.icon className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight">{cap.title}</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {cap.summary}
                </p>

                <ul className="mt-5 space-y-2">
                  {cap.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <Plus className="mt-0.5 h-3.5 w-3.5 shrink-0 text-jade" aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {cap.technologies.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-line bg-paper-2 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-1.5 border-t border-line pt-5 text-sm font-medium text-foreground transition-colors group-hover:text-jade-strong"
                  aria-label={`Discuss ${cap.title} with our team`}
                >
                  Talk to an engineer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
