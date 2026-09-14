import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";
import { OFFICES } from "@/lib/data";
import { SITE } from "@/lib/site";
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
            <p className="eyebrow text-jade-bright">Free consultation</p>
            <h2 className="font-display mt-5 text-4xl leading-[1.05] tracking-tight text-white sm:text-6xl">
              Would you like to start
              <br />
              <em className="italic text-jade-bright">a project with us?</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
              Whether you&apos;re building something new or enhancing an existing project, our team
              is here to help at every step. Reach out — let&apos;s create something exceptional
              together.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${SITE.email}?subject=Project%20inquiry`}
                className="group inline-flex items-center gap-2 rounded-md bg-jade-bright px-7 py-4 text-base font-medium text-ink transition-colors hover:bg-white"
              >
                <Mail className="h-4.5 w-4.5" aria-hidden="true" />
                Book a Call
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-md border border-white/15 px-7 py-4 text-base font-medium text-white transition-colors hover:border-white/40"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {SITE.phone}
              </a>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-ink-muted">
              {SITE.email} · USA · India · South Africa
            </p>
          </Reveal>
        </div>

        {/* Offices */}
        <Reveal delay={180}>
          <div className="mx-auto mt-20 grid max-w-5xl gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-3">
            {OFFICES.map((o) => (
              <div key={o.city} className="group bg-ink px-6 py-6 text-left transition-colors hover:bg-ink-2">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-lg font-semibold text-white">{o.city}</p>
                  <p className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted">{o.timezone}</p>
                </div>
                <p className="mt-1 text-xs text-ink-muted">
                  {o.city !== o.country ? o.country : ""}
                </p>
                <p className="mt-4 text-sm font-medium text-white/85">{o.role}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted">{o.address}</p>
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

        {/* Department emails */}
        <Reveal delay={220}>
          <div className="mx-auto mt-8 max-w-5xl">
            <p className="eyebrow text-center text-white/40">Direct lines</p>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm">
              {[
                ["US Operations", "us@nextkinlife.com"],
                ["India Operations", "india@nextkinlife.com"],
                ["Careers", "careers@nextkinlife.com"],
                ["Support", "support@nextkinlife.com"],
                ["Feedback & General", "feedback@nextkinlife.com"],
              ].map(([label, email]) => (
                <li key={email}>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-1.5 text-white/70 transition-colors hover:text-jade-bright"
                  >
                    <span className="font-mono text-[0.65rem] uppercase tracking-widest text-white/40">
                      {label}
                    </span>
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
