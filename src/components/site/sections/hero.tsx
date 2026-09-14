import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { TRUST_MARKERS, INDUSTRIES } from "@/lib/data";
import { Reveal } from "../reveal";

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
                Global technology &amp; engineering partner
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display mt-7 text-[2.75rem] leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-[4.4rem]">
                Engineering the systems behind{" "}
                <em className="italic text-jade-bright">ambitious</em> businesses.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
                We design, build and run custom software, AI systems, data platforms and cloud
                infrastructure — as one senior engineering organization, accountable end to end.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-md bg-jade-bright px-6 py-3.5 text-base font-medium text-ink transition-colors hover:bg-white"
                >
                  Start a Project
                  <ArrowUpRight className="h-[1.1rem] w-[1.1rem] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3.5 text-base font-medium text-white transition-colors hover:border-white/40"
                >
                  Explore Our Capabilities
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-10 max-w-xl font-mono text-xs uppercase tracking-widest text-ink-muted">
                Custom software · AI · Data · Cloud · Enterprise systems
              </p>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal delay={200} className="relative">
            <div className="relative overflow-hidden rounded-xl border border-white/10 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="/images/hero-visual.png"
                alt="Abstract visualization of layered software architecture connected by flowing data"
                width={1344}
                height={768}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" aria-hidden="true" />
            </div>

            {/* Floating capability chips */}
            <div className="absolute -left-3 top-8 hidden rounded-md border border-white/10 bg-ink-2/90 px-3.5 py-2 backdrop-blur-md sm:block">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-jade-bright">AI Agents</p>
              <p className="mt-0.5 text-xs text-white/70">Orchestrated · Audited</p>
            </div>
            <div className="absolute -right-2 bottom-16 hidden rounded-md border border-white/10 bg-ink-2/90 px-3.5 py-2 backdrop-blur-md sm:block">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-jade-bright">Cloud Native</p>
              <p className="mt-0.5 text-xs text-white/70">Kubernetes · IaC</p>
            </div>
            <div className="absolute -bottom-5 left-10 hidden rounded-md border border-white/10 bg-ink-2/90 px-3.5 py-2 backdrop-blur-md md:block">
              <p className="font-mono text-[0.65rem] uppercase tracking-widest text-jade-bright">Data Platform</p>
              <p className="mt-0.5 text-xs text-white/70">Streaming · Governed</p>
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
        <p className="sr-only">Industries served</p>
        <div className="flex w-max animate-marquee items-center gap-10 pl-4" aria-hidden="true">
          {[...INDUSTRIES, ...INDUSTRIES].map((ind, i) => (
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
