import { AppFrame } from "@/components/mock/AppFrame";
import { InvoicesMock } from "@/components/mock/InvoicesMock";
import { Eyebrow, Lead, Section, SectionHeading } from "@/components/site/Section";

const POINTS = [
  {
    title: "Send an invoice in minutes",
    body: "Start from a client, pick unbilled work or a flat fee, and issue a branded invoice without leaving the platform.",
  },
  {
    title: "Know what is owed",
    body: "Totals, pending and overdue amounts sit at the top of the screen, so cash position is the first thing you see.",
  },
  {
    title: "Chase payment on time",
    body: "Paid, pending and overdue statuses stay visible on every invoice, so follow-ups happen before they hurt cash flow.",
  },
];

export function Invoices() {
  return (
    <Section id="invoicing">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-14">
        <div>
          <Eyebrow>Invoicing</Eyebrow>
          <SectionHeading>Bill clients and get paid faster.</SectionHeading>
          <Lead className="mt-5">
            Create, send and track invoices alongside the rest of your
            operations &mdash; so revenue never lives in a separate tool.
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
            Invoices, clients and payment statuses shown here are illustrative
            examples for demonstration.
          </p>
        </div>

        <div>
          <AppFrame
            label="OneClickHR invoices screen showing total earned, pending and overdue totals, search and status filters, and a list of invoices with number, client, issue date, amount and paid, pending or overdue status."
            url="app.oneclickhr.app/invoices"
          >
            <InvoicesMock />
          </AppFrame>
        </div>
      </div>
    </Section>
  );
}
