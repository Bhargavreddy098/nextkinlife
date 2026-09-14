import { TRUST_MARKERS, SERVICE_KEYWORDS } from "@/lib/data";
import { Reveal } from "../reveal";
import { HeroCopy } from "../hero-copy";
import { HeroScrollTicker } from "../hero-scroll-ticker";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink text-ink-foreground">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0 grid-lines-dark" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[38rem] w-[50rem] -translate-x-1/2 rounded-full bg-jade/10 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 h-[22rem] w-[40rem] -translate-x-1/2 rounded-full bg-jade/[0.05] blur-[110px]"
        aria-hidden="true"
      />

      <div className="container-site relative pb-0 pt-32 sm:pt-40">
        {/* Centered Hero Copy — Complete hero section in middle */}
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <HeroCopy />
        </div>

        {/* Scroll-boosted & continuous marquee ticker (Left to Right) */}
        <HeroScrollTicker />

        {/* Clean trust markers without card box */}
        <Reveal delay={140}>
          <dl className="mx-auto mt-12 grid w-full max-w-4xl grid-cols-2 gap-6 py-6 sm:grid-cols-4 sm:gap-8 lg:mt-16">
            {TRUST_MARKERS.map((m) => (
              <div key={m.label} className="flex flex-col items-center px-4 text-center">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="font-display block text-3xl font-medium text-white sm:text-4xl">{m.value}</span>
                  <span className="mt-1.5 block text-xs leading-snug text-ink-muted sm:text-[0.8rem]">{m.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      {/* Full-width bottom services marquee (Left to Right) */}
      {/* <div className="relative mt-8 border-t border-white/[0.07] py-5 sm:mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" aria-hidden="true" />
        <p className="sr-only">Services and expertise</p>
        <div className="flex w-max animate-marquee-ltr items-center gap-10" aria-hidden="true">
          {[...SERVICE_KEYWORDS, ...SERVICE_KEYWORDS, ...SERVICE_KEYWORDS, ...SERVICE_KEYWORDS].map((ind, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.18em] text-white/40">
              {ind}
              <span className="h-1 w-1 rounded-full bg-jade-bright/60" />
            </span>
          ))}
        </div>
      </div> */}
    </section>
  );
}
