import {
  AttendanceVisual,
  EmployeesVisual,
  InvoiceVisual,
  LeaveVisual,
  PayrollVisual,
  TasksVisual,
  WorkAuthVisual,
} from "@/components/mock/FeatureMocks";
import { Eyebrow, Lead, Section, SectionHeading } from "@/components/site/Section";
import type { ReactNode } from "react";

const FEATURES: {
  title: string;
  body: string;
  visual: ReactNode;
  /** Spans the full row as a brand-tinted spotlight card. */
  highlight?: boolean;
}[] = [
  {
    title: "Attendance & Time",
    body: "Track clock-ins, shifts, and working hours.",
    visual: <AttendanceVisual />,
  },
  {
    title: "Leave Management",
    body: "Manage requests, approvals, balances, and employee availability.",
    visual: <LeaveVisual />,
  },
  {
    title: "Payroll",
    body: "Keep payroll-related workforce information organized in the HR workspace.",
    visual: <PayrollVisual />,
  },
  {
    title: "Work Authorization",
    body: "Track important authorization dates and receive reminders before expiration.",
    visual: <WorkAuthVisual />,
  },
  {
    title: "Tasks & Operations",
    body: "Assign and track HR and employee tasks.",
    visual: <TasksVisual />,
  },
  {
    title: "Employee Operations",
    body: "Keep workforce information and everyday HR activities organized.",
    visual: <EmployeesVisual />,
  },
  {
    title: "Invoicing",
    body: "Bill clients from the same workspace — totals, pending and overdue amounts stay visible so cash position is never a guess.",
    visual: <InvoiceVisual />,
    highlight: true,
  },
];

export function FeatureGrid() {
  return (
    <Section id="features">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Features</Eyebrow>
        <SectionHeading>Every HR workflow, in one system.</SectionHeading>
        <Lead className="mt-5">
          The day-to-day work of running a team &mdash; time, leave, pay,
          invoicing, deadlines, and tasks &mdash; without switching between
          tools.
        </Lead>
      </div>

      <ul className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <li
            key={feature.title}
            className={
              feature.highlight
                ? "reveal flex flex-col rounded-panel border border-brand-line bg-surface p-5 shadow-card transition duration-300 hover:shadow-lift sm:col-span-2 sm:flex-row sm:items-center sm:gap-8 sm:p-6 lg:col-span-3"
                : "reveal flex flex-col rounded-panel border border-line bg-surface p-5 shadow-card transition duration-300 hover:border-brand-line hover:shadow-lift"
            }
          >
            <div className={feature.highlight ? "min-w-0 flex-1" : undefined}>
              <h3 className="text-[17px] font-bold tracking-[-0.01em] text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
                {feature.body}
              </p>
            </div>
            <div
              className={
                feature.highlight ? "mt-5 shrink-0 sm:mt-0 sm:w-[360px]" : "mt-5"
              }
            >
              {feature.visual}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
