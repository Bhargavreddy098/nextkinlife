import { AppFrame } from "@/components/mock/AppFrame";
import { WorkforceMock } from "@/components/mock/WorkforceMock";
import { Eyebrow, Lead, Section, SectionHeading } from "@/components/site/Section";

const POINTS = [
  {
    title: "One operational view",
    body: "See who is in, who is out, and what needs a decision without opening a second tool.",
  },
  {
    title: "Approvals in context",
    body: "Leave requests sit next to attendance and payroll so approvals are informed, not blind.",
  },
  {
    title: "Nothing quietly overdue",
    body: "Deadlines, payroll tasks and expiring authorizations surface as alerts before they bite.",
  },
];

export function DashboardShowcase() {
  return (
    <Section id="showcase" tone="band">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Workforce dashboard</Eyebrow>
        <SectionHeading>See your workforce at a glance.</SectionHeading>
        <Lead className="mt-5">
          Attendance, approvals, payroll tasks and upcoming deadlines on one
          screen &mdash; so HR starts the day knowing exactly what needs
          attention.
        </Lead>
      </div>

      {/* The product is the argument, so the frame runs wider than the text
          column and sits on an accent halo. */}
      <div className="halo-product relative mt-16 lg:-mx-8 xl:-mx-14">
        <div
          aria-hidden
          className="hairline-grid pointer-events-none absolute -inset-x-6 -top-10 bottom-12"
        />
        <AppFrame
          className="relative z-10"
          label="OneClickHR attendance and approvals screen showing 231 present, 9 late, 5 absent, 4 remote and 12 on leave, an employee status list, five pending leave approvals and three operational alerts covering payroll, work authorization and timesheets."
          url="app.oneclickhr.app/attendance"
        >
          <WorkforceMock />
        </AppFrame>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-3 sm:gap-8">
        {POINTS.map((point, index) => (
          <li key={point.title} className="border-t border-line pt-5">
            <p className="font-mono text-[11px] tracking-[0.18em] text-brand-ink">
              [{String(index + 1).padStart(2, "0")}]
            </p>
            <h3 className="mt-2 text-[15px] font-bold tracking-[-0.01em] text-ink">
              {point.title}
            </h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
              {point.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
