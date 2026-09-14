import { TRUST_MARKERS, SERVICE_KEYWORDS } from "@/lib/data";
import { Reveal } from "../reveal";
import { HeroVisual } from "../hero-visual";
import { HeroCopy } from "../hero-copy";

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
          {/* Copy — Motion-powered staggered entrance */}
          <div>
            <HeroCopy />
          </div>

          {/* Visual — free-floating service orbit, no card */}
          <Reveal delay={200} className="relative">
            <div className="relative h-[420px] w-full [-webkit-mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] sm:h-[500px] lg:-mr-16 lg:h-[560px]">
              <HeroVisual />
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
