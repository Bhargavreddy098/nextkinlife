import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { OFFICES } from "@/lib/data";
import { Reveal } from "../reveal";

export function ContactCta() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-ink py-24 text-ink-foreground sm:py-32">
      <div className="pointer-events-none absolute inset-0 dot-grid-dark opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[28rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-jade/[0.12] blur-[130px]"
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-jade-bright">Start a project</p>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-white sm:text-6xl">
              Have a complex problem
              <br />
              <em className="italic text-jade-bright">worth solving?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Tell us what you&apos;re building — or what&apos;s breaking. A senior engineer (not a
              salesperson) will reply within one business day.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@kaidron.com?subject=Project%20inquiry"
                className="group inline-flex items-center gap-2 rounded-md bg-jade-bright px-7 py-4 text-base font-medium text-ink transition-colors hover:bg-white"
              >
                <Mail className="h-4.5 w-4.5" aria-hidden="true" />
                Talk to Our Team
              </a>
              <a
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-7 py-4 text-base font-medium text-white transition-colors hover:border-white/40"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-ink-muted">
              hello@kaidron.com · NDA-friendly · No obligation
            </p>
          </Reveal>
        </div>

        {/* Offices */}
        <Reveal delay={180}>
          <div className="mx-auto mt-20 grid max-w-4xl gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {OFFICES.map((o) => (
              <div key={o.city} className="group bg-ink px-6 py-6 text-left transition-colors hover:bg-ink-2">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-lg font-semibold text-white">{o.city}</p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted">{o.timezone}</p>
                </div>
                <p className="mt-1 text-xs text-ink-muted">{o.country}</p>
                <p className="mt-4 text-sm leading-snug text-white/75">{o.role}</p>
                <a
                  href={`mailto:${o.email}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-jade-bright transition-colors hover:text-white"
                >
                  {o.email}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
