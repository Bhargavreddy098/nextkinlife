import { AppFrame } from "@/components/mock/AppFrame";
import { WorkAuthMock } from "@/components/mock/WorkAuthMock";
import { Eyebrow, Lead, Section, SectionHeading } from "@/components/site/Section";

const POINTS = [
  {
    title: "Dates in one place",
    body: "Record authorization types and expiry dates against the employee record instead of a shared calendar.",
  },
  {
    title: "Milestone reminders",
    body: "Reminders fire at 90, 60, 30 and 7 days before an expiry, so nothing is noticed too late.",
  },
  {
    title: "No duplicate chasing",
    body: "Each milestone fires once — reminders never double-send and clutter the inbox.",
  },
];

export function WorkAuthorization() {
  return (
    <Section id="compliance">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
        <div>
          <Eyebrow>Work authorization</Eyebrow>
          <SectionHeading>
            Stay ahead of critical employee deadlines.
          </SectionHeading>
          <Lead className="mt-5">
            Track important authorization dates and receive reminders before
            expiration, so renewals start with time to spare.
          </Lead>

          <ul className="mt-8 space-y-5">
            {POINTS.map((point) => (
              <li key={point.title} className="flex gap-3.5">
                <span
                  aria-hidden
                  className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-ink"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="size-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.5 8.4l3 3 6-6.4" />
                  </svg>
                </span>
                <span>
                  <span className="block text-[15px] font-bold tracking-[-0.01em] text-ink">
                    {point.title}
                  </span>
                  <span className="mt-1 block text-[14px] leading-[1.6] text-ink-soft">
                    {point.body}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-card border border-line bg-surface px-4 py-3 text-[12px] leading-[1.6] text-muted">
            OneClickHR tracks dates and sends reminders. It is not an immigration
            law service and does not provide legal advice.
          </p>
        </div>

        <div>
          <AppFrame
            label="OneClickHR work authorization screen showing a reminder timeline from today through 90, 60, 30 and 7 day milestones to expiration, and a list of employees with authorization type, expiry date, days remaining and reminder status."
            url="app.oneclickhr.app/compliance"
          >
            <WorkAuthMock />
          </AppFrame>
        </div>
      </div>
    </Section>
  );
}
