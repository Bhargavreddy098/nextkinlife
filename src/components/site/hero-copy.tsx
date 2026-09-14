import { ArrowRight, ArrowUpRight } from "lucide-react";

export function HeroCopy() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
      <div>
        <p className="eyebrow inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-white/80 shadow-[0_0_24px_rgba(67,217,163,0.12)]">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-jade-bright" />
          </span>
          Global IT services &amp; consulting — USA · India · South Africa
        </p>
      </div>

      <h1 className="font-display mt-8 text-center text-4xl leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-[5.2rem] xl:text-[5.8rem]">
        Ideas in. <br className="hidden sm:inline" />
        <span className="italic text-jade-bright">Impact out.</span>
      </h1>

      <p className="mx-auto mt-7 max-w-2xl text-center text-lg leading-relaxed text-white/75 sm:text-xl">
        NextKinLife designs, builds and runs the technology ambitious companies depend on —
        custom software, data platforms, AI and cloud — taken from first sketch to global scale
        by one team across three continents.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-xl bg-jade-bright px-7 py-4 text-base font-semibold text-ink shadow-[0_12px_36px_-10px_rgba(67,217,163,0.45)] transition-all duration-300 hover:scale-[1.04] hover:bg-white active:scale-[0.97]"
        >
          Schedule a Consultation
          <ArrowUpRight className="h-[1.15rem] w-[1.15rem] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <a
          href="#careers"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.02] px-7 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-[1.04] hover:border-white/40 hover:bg-white/[0.06] active:scale-[0.97]"
        >
          Explore Careers
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

