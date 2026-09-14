import Image from "next/image";
import { ArrowUpRight, Quote } from "lucide-react";
import { PRODUCTS, type Product } from "@/lib/data";
import { SectionHeader } from "../section-header";
import { Reveal } from "../reveal";
import { cn } from "@/lib/utils";

export function StatusBadge({ status, className }: { status: Product["status"]; className?: string }) {
  const styles: Record<Product["status"], string> = {
    Live: "bg-jade-bright text-ink border-transparent",
    Beta: "bg-jade-soft text-jade-strong border-jade/30",
    Development: "bg-background text-foreground border-ink/25",
    Research: "bg-background text-muted-foreground border-line",
    Concept: "bg-transparent text-muted-foreground border-dashed border-line",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-widest",
        styles[status],
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" aria-hidden="true" />
      {status}
    </span>
  );
}

export function Innovation() {
  return (
    <section id="innovation" className="scroll-mt-20 bg-background py-24 sm:py-32">
      <div className="container-site">
        <SectionHeader
          eyebrow="Innovations & Patents"
          title={
            <>
              We don&apos;t follow trends.
              <br />
              We <em className="italic text-jade">invent them.</em>
            </>
          }
          description="By the end of 2026, NextKinLife will launch two products developed from the ground up — built with passion, precision and patented technology. Beyond client work, our team is actively building the internal products that drive what comes next."
        />

        {/* Upcoming products */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(12,15,14,0.25)]">
                <div className="relative aspect-[16/9] overflow-hidden bg-ink">
                  <Image
                    src={p.image}
                    alt={`Abstract illustration for ${p.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <StatusBadge status={p.status} className="absolute right-4 top-4 backdrop-blur-md" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-jade">
                    {p.category}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                    {p.name} <span className="text-muted-foreground">— in development</span>
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.teaser}</p>
                  <div className="mt-6 flex-1" />
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-mono uppercase tracking-widest text-foreground/50">
                        Patented technology
                      </span>{" "}
                      · Details revealed at launch
                    </p>
                    <a
                      href="mailto:contact@nextkinlife.com?subject=Partnership%20inquiry"
                      className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-jade-strong transition-colors hover:text-ink"
                      aria-label="Partner with us on our upcoming products"
                    >
                      Partner with us
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Founder note */}
        <Reveal delay={120}>
          <figure className="relative mt-16 overflow-hidden rounded-xl border border-line bg-ink px-7 py-10 text-ink-foreground sm:px-12 sm:py-14">
            <div className="pointer-events-none absolute inset-0 dot-grid-dark opacity-50" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-jade/15 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <Quote className="h-6 w-6 text-jade-bright" aria-hidden="true" />
              <blockquote className="mt-6 max-w-3xl">
                <p className="font-display text-2xl leading-snug tracking-tight text-white sm:text-3xl">
                  &ldquo;At NextKinLife, we&apos;re not just building products — we&apos;re
                  building <em className="italic text-jade-bright">possibilities.</em>&rdquo;
                </p>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/70">
                  Our vision is bold: to launch innovations that truly matter, to grow with people
                  who share our passion, and to lead not just in technology — but in trust, talent
                  and transformation.
                </p>
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-sm font-semibold text-white">Founder &amp; CEO</p>
                <p className="text-sm text-ink-muted">NextKinLife Team</p>
              </figcaption>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
