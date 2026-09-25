import { Section, SectionHeading, Lead } from "@/components/site/Section";
import { LogoMark } from "@/components/site/Logo";

const FRAGMENTED = [
  { label: "Attendance", meta: "Spreadsheet" },
  { label: "Leave", meta: "Email threads" },
  { label: "Payroll", meta: "Payroll tool" },
  { label: "Compliance", meta: "Calendar reminders" },
  { label: "Tasks", meta: "Chat messages" },
];

const UNIFIED = ["Attendance", "Leave", "Payroll", "Compliance", "Tasks"];

export function ProductFragmentation() {
  return (
    <Section id="product" tone="band">
      <div className="mx-auto max-w-2xl text-center">
        <SectionHeading>
          Your HR team shouldn&rsquo;t need five different systems.
        </SectionHeading>
        <Lead className="mt-5">
          Attendance lives in one tool, leave in an inbox, payroll in another,
          compliance in a calendar reminder, and tasks in chat. Every handoff is
          a chance to lose track of something that matters.
        </Lead>
      </div>

      <div className="mt-16 grid items-center gap-6 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-8">
        <div className="rounded-panel border border-line bg-canvas p-5 shadow-card sm:p-6">
          <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-muted uppercase">
            Today
          </p>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
            {FRAGMENTED.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-3 rounded-card border border-dashed border-line-strong bg-surface px-3.5 py-3"
              >
                <span
                  aria-hidden
                  className="grid size-7 shrink-0 place-items-center rounded-lg bg-elevated text-[11px] font-bold text-faint"
                >
                  {item.label.charAt(0)}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-semibold text-ink">
                    {item.label}
                  </span>
                  <span className="block truncate text-[11px] text-muted">
                    {item.meta}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[12px] text-muted">
            5 logins &middot; 5 exports &middot; 5 versions of the truth
          </p>
        </div>

        <div
          aria-hidden
          className="mx-auto flex size-10 items-center justify-center rounded-full border border-line bg-surface text-brand-ink shadow-card"
        >
          <svg
            viewBox="0 0 20 20"
            className="size-4 rotate-90 lg:rotate-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 10h12M11 5l5 5-5 5" />
          </svg>
        </div>

        <div className="rounded-panel border border-brand-line bg-surface p-5 shadow-lift sm:p-6">
          <p className="font-mono text-[11px] font-medium tracking-[0.18em] text-brand-ink uppercase">
            With OneClickHR
          </p>
          <div className="mt-4 flex items-center gap-2.5 rounded-card bg-brand-soft px-3.5 py-3">
            <LogoMark className="size-7" />
            <span className="text-[13px] font-bold text-brand-ink">
              OneClickHR
            </span>
          </div>
          <ul className="mt-3 space-y-2">
            {UNIFIED.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[13px] font-medium text-ink-soft"
              >
                <svg
                  viewBox="0 0 16 16"
                  aria-hidden
                  className="size-3.5 shrink-0 text-brand-ink"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.5 8.4l3 3 6-6.4" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[12px] font-semibold text-brand-ink">
            One unified workspace.
          </p>
        </div>
      </div>
    </Section>
  );
}
