import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TRUST_MARKERS, SERVICE_KEYWORDS } from "@/lib/data";
import { Reveal } from "../reveal";
import { HeroVisual } from "../hero-visual";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-ink-foreground">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-lines-dark" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-jade/10 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-[-15%] h-[26rem] w-[26rem] rounded-full bg-jade/[0.06] blur-[100px]"
        aria-hidden="true"
      />

      <div className="container-site relative pb-0 pt-32 sm:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Copy */}
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/80">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-jade-bright opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-jade-bright" />
                </span>
                Global IT services &amp; consulting — USA · India · South Africa
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display mt-7 text-[2.75rem] leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
                Ideas in.
                <br />
                <em className="italic text-jade-bright">Impact out.</em>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
                NextKinLife designs, builds and runs the technology ambitious companies depend on —
                custom software, data platforms, AI and cloud — taken from first sketch to global
                scale by one team across three continents.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-md bg-jade-bright px-6 py-3.5 text-base font-medium text-ink transition-colors hover:bg-white"
                >
                  Schedule a Consultation
                  <ArrowUpRight className="h-[1.1rem] w-[1.1rem] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#careers"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3.5 text-base font-medium text-white transition-colors hover:border-white/40"
                >
                  Explore Careers
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-10 max-w-xl font-mono text-xs uppercase tracking-widest text-ink-muted">
                Custom software · Data · AI · Cloud · Enterprise systems · Consulting
              </p>
            </Reveal>
          </div>

          {/* Visual — interactive 3D delivery engine */}
          <Reveal delay={200} className="relative">
            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-ink-2/70 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              <div
                className="pointer-events-none absolute inset-0 grid-lines-dark opacity-70"
                aria-hidden="true"
              />
              <div className="aspect-[5/4] w-full sm:aspect-[16/10] lg:aspect-[8/5]">
                <HeroVisual />
              </div>
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink/60 to-transparent"
                aria-hidden="true"
              />
              <p className="pointer-events-none absolute left-4 top-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink-muted">
                The NextKinLife delivery engine
              </p>
            </div>
          </Reveal>
        </div>

        {/* Trust markers */}
        <Reveal delay={140}>
          <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-4">
            {TRUST_MARKERS.map((m) => (
              <div key={m.label} className="bg-ink px-6 py-6">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="font-display block text-3xl text-white">{m.value}</span>
                  <span className="mt-1.5 block text-[0.8rem] leading-snug text-ink-muted">{m.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Industries marquee */}
      <div className="relative mt-14 border-t border-white/[0.07] py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" aria-hidden="true" />
        <p className="sr-only">Services and expertise</p>
        <div className="flex w-max animate-marquee items-center gap-10 pl-4" aria-hidden="true">
          {[...SERVICE_KEYWORDS, ...SERVICE_KEYWORDS].map((ind, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-white/35">
              {ind}
              <span className="h-1 w-1 rounded-full bg-jade-bright/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
