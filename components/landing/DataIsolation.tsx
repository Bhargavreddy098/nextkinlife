import { IsolationMock } from "@/components/mock/IsolationMock";
import { Eyebrow, Lead, Section, SectionHeading } from "@/components/site/Section";

const POINTS = [
  {
    title: "Separate by default",
    body: "Each organization works inside its own workspace, with its own employees, attendance, leave and payroll.",
  },
  {
    title: "Employees join by invite",
    body: "People sign in through the employee portal using the account their organization created — employees cannot self-sign up into a workspace.",
  },
  {
    title: "One workspace per company",
    body: "A workspace is created per organization, so two companies never share a record or a report.",
  },
];

export function DataIsolation() {
  return (
    <Section id="solutions" tone="band">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-14">
        <div className="order-2 lg:order-1">
          <IsolationMock />
          <p className="mt-4 text-center text-[12px] text-muted">
            Keep each organization&rsquo;s HR data separated inside its own
            workspace.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <Eyebrow>Organization isolation</Eyebrow>
          <SectionHeading>
            Every organization gets its own workspace.
          </SectionHeading>
          <Lead className="mt-5">
            Isolation is built into how OneClickHR is structured, not bolted on
            afterwards. Each workspace holds its own people and its own
            operations.
          </Lead>

          <ul className="mt-8 space-y-5">
            {POINTS.map((point) => (
              <li key={point.title} className="border-l-2 border-brand-line pl-4">
                <span className="block text-[15px] font-bold tracking-[-0.01em] text-ink">
                  {point.title}
                </span>
                <span className="mt-1 block text-[14px] leading-[1.6] text-ink-soft">
                  {point.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
