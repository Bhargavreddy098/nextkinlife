import Image from "next/image";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { PRODUCTS, RESEARCH_ITEMS, type Innovation } from "@/lib/data";
import { SectionHeader } from "../section-header";
import { Reveal } from "../reveal";
import { cn } from "@/lib/utils";

export function StatusBadge({ status, className }: { status: Innovation["status"]; className?: string }) {
  const styles: Record<Innovation["status"], string> = {
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
          eyebrow="Innovation"
          title={
            <>
              Products we build
              <br />
              the way we build yours.
            </>
          }
          description="Kaidron invests a portion of every engagement into internal products and applied research — the same standards, the same engineering discipline, aimed at problems we can't stop thinking about."
        />

        {/* Products */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(12,15,14,0.25)]">
                <div className="relative aspect-[16/9] overflow-hidden bg-ink">
                  <Image
                    src={p.image ?? "/images/hero-visual.png"}
                    alt={`Abstract illustration for ${p.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <StatusBadge status={p.status} className="absolute right-4 top-4 backdrop-blur-md" />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-jade">{p.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground/80">Problem — </span>
                    {p.problem}
                  </p>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground/80">Approach — </span>
                    {p.solution}
                  </p>
                  <div className="mt-6 flex-1" />
                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-mono uppercase tracking-widest text-foreground/50">For — </span>
                      {p.targetUsers}
                    </p>
                    <a
                      href="mailto:hello@kaidron.com?subject=Partnership%20inquiry"
                      className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-jade-strong transition-colors hover:text-ink"
                      aria-label={`Partner with us on ${p.name}`}
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

        {/* Research & patents */}
        <Reveal delay={100}>
          <div className="mt-16">
            <div className="flex items-center gap-3">
              <FlaskConical className="h-4 w-4 text-jade" aria-hidden="true" />
              <h3 className="text-lg font-semibold tracking-tight">Research &amp; patents</h3>
            </div>
            <ul className="mt-5 divide-y divide-line rounded-xl border border-line bg-card">
              {RESEARCH_ITEMS.map((r) => (
                <li key={r.id} className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:gap-6">
                  <span
                    className={cn(
                      "inline-flex w-fit shrink-0 items-center gap-1.5 rounded border px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-widest",
                      r.kind === "Patent" ? "border-jade/40 bg-jade-soft text-jade-strong" : "border-line text-muted-foreground"
                    )}
                  >
                    {r.kind}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium">{r.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.summary}</p>
                  </div>
                  <StatusBadge status={r.status} className="shrink-0" />
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Product and research statuses reflect internal program state and are updated as initiatives mature.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
