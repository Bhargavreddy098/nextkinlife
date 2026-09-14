import { ArrowUpRight, ArrowRight, Briefcase, Sprout } from "lucide-react";
import { CAREER_TRACKS, CAREER_PERKS } from "@/lib/data";
import { SITE } from "@/lib/site";
import { Reveal } from "../reveal";

const TRACK_ICONS = [Sprout, Briefcase];

export function Careers() {
  return (
    <section id="careers" className="scroll-mt-20 bg-paper-2 py-24 sm:py-32">
      <div className="container-site">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left — pitch */}
          <div>
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-jade">
                <span aria-hidden="true" className="inline-block h-px w-8 bg-jade/60" />
                Careers
              </p>
              <h2 className="font-display mt-4 text-4xl leading-[1.06] tracking-tight sm:text-5xl">
                Your journey
                <br />
                starts here.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                At NextKinLife, we&apos;re looking for more than employees — we&apos;re building a
                team of innovators, thinkers and learners who want to create something that lasts.
                Join us, and you&apos;re not taking a job; you&apos;re taking the first step in a
                shared journey.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
                {CAREER_PERKS.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5 text-sm leading-snug text-foreground/85">
                    <span className="mt-[0.4rem] h-1.5 w-1.5 shrink-0 rounded-full bg-jade" aria-hidden="true" />
                    {perk}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <a
                href={`mailto:${SITE.careersEmail}?subject=Open%20Positions`}
                className="group mt-10 inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-jade-strong"
              >
                Explore Career Opportunities
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          {/* Right — tracks */}
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-xl border border-line bg-card">
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <p className="text-sm font-semibold">An opportunity to reinvent your world</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  2 tracks
                </p>
              </div>
              <ul className="divide-y divide-line">
                {CAREER_TRACKS.map((track, i) => {
                  const Icon = TRACK_ICONS[i % TRACK_ICONS.length];
                  return (
                    <li key={track.id} className="px-6 py-7">
                      <div className="flex items-center gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-jade-soft text-jade-strong">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight">{track.title}</h3>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {track.description}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {track.points.map((pt) => (
                          <li
                            key={pt}
                            className="rounded border border-line bg-paper-2 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wide text-muted-foreground"
                          >
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={`mailto:${SITE.careersEmail}?subject=${encodeURIComponent(`Application: ${track.title}`)}`}
                        className="group/link mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-jade-strong transition-colors hover:text-ink"
                        aria-label={`Apply via email — ${track.title}`}
                      >
                        Apply via email
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="border-t border-line bg-paper px-6 py-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Work with diverse, driven people on global projects that are shaping the world —{" "}
                  <a
                    href={`mailto:${SITE.careersEmail}`}
                    className="font-medium text-jade-strong link-underline"
                  >
                    {SITE.careersEmail}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
