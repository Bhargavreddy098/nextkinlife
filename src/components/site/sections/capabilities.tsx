import { ArrowRight, Check } from "lucide-react";
import { CAPABILITIES } from "@/lib/data";
import { SectionHeader } from "../section-header";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-20 bg-background py-24 sm:py-32"
    >
      <div className="container-site">
        {/* Header */}
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

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-jade-strong self-start lg:self-end"
          >
            Discuss your project
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Clean Static Responsive Grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <article
                key={cap.id}
                className="flex flex-col rounded-2xl border border-line bg-card p-7 sm:p-8 transition-colors hover:border-jade/40 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-jade-soft text-jade-strong">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs font-semibold tracking-widest text-jade">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground">
                  {cap.title}
                </h3>
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
    </section>
  );
}
