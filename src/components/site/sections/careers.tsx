import { ArrowUpRight, ArrowRight, Globe2, GraduationCap, Home, HeartHandshake } from "lucide-react";
import { OPEN_ROLES } from "@/lib/data";
import { Reveal } from "../reveal";

const PERKS = [
  { icon: Globe2, text: "Remote-first across three continents" },
  { icon: GraduationCap, text: "Annual learning & certification budget" },
  { icon: Home, text: "Home-office setup allowance" },
  { icon: HeartHandshake, text: "Health cover & flexible time off" },
];

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
                Do the best work
                <br />
                of your career.
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                Small teams, serious problems, no delivery-theater. Kaidron engineers work directly
                with clients, ship weekly, and own what they build — from architecture to the 3 a.m.
                pager (rarely).
              </p>
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {PERKS.map((p) => (
                  <li key={p.text} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-background text-jade-strong">
                      <p.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <span className="pt-1.5 text-sm leading-snug text-foreground/85">{p.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={200}>
              <a
                href="mailto:careers@kaidron.com?subject=Open%20Positions"
                className="group mt-10 inline-flex items-center gap-2 rounded-md bg-ink px-6 py-3.5 text-base font-medium text-white transition-colors hover:bg-jade-strong"
              >
                View Open Positions
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>

          {/* Right — roles */}
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-xl border border-line bg-card">
              <div className="flex items-center justify-between border-b border-line px-6 py-4">
                <p className="text-sm font-semibold">Open positions</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {OPEN_ROLES.length} roles
                </p>
              </div>
              <ul className="divide-y divide-line">
                {OPEN_ROLES.map((role) => (
                  <li key={role.id}>
                    <a
                      href={`mailto:careers@kaidron.com?subject=Application:%20${encodeURIComponent(role.title)}`}
                      className="group flex items-center gap-4 px-6 py-5 transition-colors hover:bg-paper"
                      aria-label={`Apply for ${role.title}`}
                    >
                      <div className="min-w-0 flex-1">
                        <p className="font-medium leading-snug">{role.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          <span className="font-mono uppercase tracking-wide text-jade-strong">{role.department}</span>
                          {" · "}
                          {role.location} · {role.type} · {role.level}
                        </p>
                      </div>
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-muted-foreground transition-all group-hover:border-jade group-hover:bg-jade group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="border-t border-line bg-paper px-6 py-4">
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Don&apos;t see your role? We hire exceptional people ahead of openings —{" "}
                  <a href="mailto:careers@kaidron.com" className="font-medium text-jade-strong link-underline">
                    careers@kaidron.com
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
