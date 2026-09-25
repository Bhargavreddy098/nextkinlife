import { AppFrame } from "@/components/mock/AppFrame";
import { DashboardMock } from "@/components/mock/DashboardMock";
import { Button } from "@/components/site/Button";
import { DEMO_URL, MODULES } from "@/lib/site";

const HERO_MODULES = MODULES.slice(0, 5);

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-canvas pt-14 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24"
    >
      {/* One accent, one glow — never a multi-hue gradient. */}
      <div
        aria-hidden
        className="ambient-accent pointer-events-none absolute inset-x-0 top-0 h-[560px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.16em] text-ink-soft uppercase">
            <span aria-hidden className="size-1.5 rounded-full bg-brand" />
            One workspace for HR
          </p>

          <h1 className="mt-7 text-[38px] leading-[1.04] font-bold tracking-[-0.035em] text-ink sm:text-[56px] lg:text-[66px]">
            HR operations, finally in{" "}
            <span className="text-brand-ink">one calm place.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-[1.62] text-ink-soft sm:text-[19px]">
            Manage attendance, leave, payroll, invoicing, work authorization,
            tasks, and employee operations from one secure HR workspace.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/signup" size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button
              href={DEMO_URL}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Book a Demo
            </Button>
          </div>

          {/* The module list as one technical caption line. */}
          <div className="mt-9 flex items-start justify-center gap-2 font-mono text-[12px] text-muted">
            <span aria-hidden className="text-line-strong">
              [
            </span>
            <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2">
              {HERO_MODULES.map((module, index) => (
                <li key={module} className="flex items-center gap-2">
                  {index > 0 && (
                    <span aria-hidden className="text-line-strong">
                      &middot;
                    </span>
                  )}
                  {module}
                </li>
              ))}
            </ul>
            <span aria-hidden className="text-line-strong">
              ]
            </span>
          </div>
        </div>

        {/* The product is the hero: a real frame on a technical stage, allowed to
            run wider than the text column. */}
        <div className="halo-product relative mt-14 sm:mt-16 lg:-mx-6 xl:-mx-10">
          <div
            aria-hidden
            className="hairline-grid pointer-events-none absolute -inset-x-6 -top-10 -bottom-6"
          />
          <AppFrame
            className="relative z-10"
            label="OneClickHR dashboard overview showing 248 employees, 231 present today, 12 on leave, 5 pending leave requests, 3 tasks due and 4 work authorizations expiring soon, with today's attendance breakdown and an upcoming items list."
            url="app.oneclickhr.app/overview"
          >
            <DashboardMock />
          </AppFrame>
        </div>
      </div>
    </section>
  );
}
