import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CASE_STUDIES } from "@/lib/data";
import { SectionHeader } from "../section-header";
import { Reveal } from "../reveal";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section id="work" className="scroll-mt-20 bg-ink py-24 text-ink-foreground sm:py-32">
      <div className="container-site">
        <SectionHeader
          inverted
          eyebrow="Selected Work"
          title={
            <>
              Systems in production.
              <br />
              Results on record.
            </>
          }
          description="A sample of engagements across industries. Client identities are anonymized out of respect for confidentiality — the engineering and the numbers are real."
        />

        <div className="mt-16 space-y-16 sm:space-y-24">
          {CASE_STUDIES.map((cs, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={cs.id}>
                <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  {/* Visual */}
                  <div className={cn("relative", flipped && "lg:order-2")}>
                    <div className="overflow-hidden rounded-xl border border-white/10">
                      <Image
                        src={cs.image}
                        alt={`Abstract visualization for ${cs.name} — ${cs.industry}`}
                        width={1344}
                        height={768}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="h-auto w-full transition-transform duration-700 hover:scale-[1.02]"
                      />
                    </div>
                    <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-muted">
                      {cs.industry} · Case {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>

                  {/* Content */}
                  <div className={cn(flipped && "lg:order-1")}>
                    <h3 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
                      {cs.name}
                    </h3>

                    <div className="mt-6 space-y-5">
                      <div>
                        <p className="eyebrow text-white/40">Problem</p>
                        <p className="mt-2 text-[0.95rem] leading-relaxed text-white/75">{cs.problem}</p>
                      </div>
                      <div>
                        <p className="eyebrow text-jade-bright">Solution</p>
                        <p className="mt-2 text-[0.95rem] leading-relaxed text-white/75">{cs.solution}</p>
                      </div>
                    </div>

                    {/* Impact metrics */}
                    <dl className="mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10">
                      {cs.impact.map((m) => (
                        <div key={m.label} className="bg-ink-2 px-4 py-4">
                          <dt className="sr-only">{m.label}</dt>
                          <dd>
                            <span className="font-display block whitespace-nowrap text-xl text-jade-bright sm:text-2xl">
                              {m.value}
                            </span>
                            <span className="mt-1 block text-[0.7rem] leading-snug text-ink-muted">
                              {m.label}
                            </span>
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {cs.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-white/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-jade-bright transition-colors hover:text-white"
                      aria-label={`Discuss a project similar to ${cs.name}`}
                    >
                      Discuss a similar project
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
