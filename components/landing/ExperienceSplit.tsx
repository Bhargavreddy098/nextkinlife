import { Button } from "@/components/site/Button";
import { Eyebrow, Lead, Section, SectionHeading } from "@/components/site/Section";
import { JOBS_URL } from "@/lib/site";

const SIDES = [
  {
    label: "HR / Admin",
    brand: true,
    actions: ["Manage", "Approve", "Track", "Organize"],
    body: "Run the workforce: set up people, approve requests, keep records current and stay on top of deadlines.",
  },
  {
    label: "Employee",
    brand: false,
    actions: ["View", "Request", "Complete", "Stay informed"],
    body: "See schedules and balances, request leave, complete assigned tasks and keep up with what matters.",
  },
];

export function ExperienceSplit() {
  return (
    <Section id="experience">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Employee experience</Eyebrow>
        <SectionHeading>One platform, two points of view.</SectionHeading>
        <Lead className="mt-5">
          HR administers the workspace. Employees work inside it. Both sides see
          the same information, scoped to what they need.
        </Lead>
      </div>

      <div className="mt-14 grid gap-4 lg:grid-cols-2 lg:gap-5">
        {SIDES.map((side) => (
          <div
            key={side.label}
            className="reveal relative overflow-hidden rounded-panel border border-line bg-surface p-6 shadow-card sm:p-7"
          >
            {/* A single accent rule marks the administering side — no second hue. */}
            {side.brand && (
              <span aria-hidden className="absolute inset-y-0 left-0 w-px bg-brand" />
            )}

            <span
              className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[11px] font-medium tracking-[0.14em] uppercase ${
                side.brand ? "bg-brand-soft text-brand-ink" : "bg-elevated text-ink-soft"
              }`}
            >
              {side.label}
            </span>

            <p className="mt-4 text-[15px] leading-[1.6] text-ink-soft">
              {side.body}
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-2.5">
              {side.actions.map((action) => (
                <li
                  key={action}
                  className="flex items-center gap-2 rounded-card border border-line bg-canvas px-3.5 py-2.5 text-[13px] font-semibold text-ink"
                >
                  <span
                    aria-hidden
                    className={`size-1.5 shrink-0 rounded-full ${
                      side.brand ? "bg-brand" : "bg-line-strong"
                    }`}
                  />
                  {action}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-5 rounded-panel border border-line bg-surface p-6 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <h3 className="text-[17px] font-bold tracking-[-0.01em] text-ink">
            Hiring? Candidates can browse open roles without an account.
          </h3>
          <p className="mt-1.5 text-[14px] leading-[1.6] text-ink-soft">
            Every open role from organizations hiring through OneClickHR is
            publicly listed. Applying takes a CV and a few minutes.
          </p>
        </div>
        <Button href={JOBS_URL} variant="secondary" className="shrink-0">
          Browse Open Roles
        </Button>
      </div>
    </Section>
  );
}
