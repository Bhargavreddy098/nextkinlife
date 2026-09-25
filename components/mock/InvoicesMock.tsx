import { Chip } from "@/components/site/Section";

const STATS = [
  { label: "Total earned", value: "$48,250", meta: "This quarter", tone: "text-ink" },
  { label: "Pending", value: "$12,400", meta: "4 invoices", tone: "text-brand-ink" },
  { label: "Overdue", value: "$3,150", meta: "1 invoice", tone: "text-warn-ink" },
];

const FILTERS = ["All", "Paid", "Pending", "Overdue"] as const;

const INVOICES = [
  {
    id: "INV-1042",
    client: "Northwind Clinics",
    issued: "12 Sep 2026",
    amount: "$6,400",
    status: "Paid",
    tone: "positive" as const,
  },
  {
    id: "INV-1041",
    client: "Harbor Logistics",
    issued: "10 Sep 2026",
    amount: "$4,850",
    status: "Pending",
    tone: "brand" as const,
  },
  {
    id: "INV-1040",
    client: "Cedar & Co Studios",
    issued: "04 Sep 2026",
    amount: "$3,150",
    status: "Overdue",
    tone: "warn" as const,
  },
  {
    id: "INV-1039",
    client: "Brightpath Schools",
    issued: "29 Aug 2026",
    amount: "$9,200",
    status: "Paid",
    tone: "positive" as const,
  },
  {
    id: "INV-1038",
    client: "Ridgeline Retail",
    issued: "24 Aug 2026",
    amount: "$2,700",
    status: "Pending",
    tone: "brand" as const,
  },
];

export function InvoicesMock() {
  return (
    <div className="bg-surface p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-3">
        <div>
          <p className="text-[13px] font-bold tracking-[-0.01em] text-ink">
            Invoices
          </p>
          <p className="mt-0.5 text-[11px] text-muted">September 2026</p>
        </div>
        <span className="ml-auto rounded-md bg-brand px-3 py-1.5 text-[11px] font-semibold text-white">
          New invoice
        </span>
      </div>

      {/* The three numbers a business checks first. */}
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-card border border-line bg-elevated p-3"
          >
            <p className="text-[9px] font-semibold tracking-wide text-faint uppercase">
              {stat.label}
            </p>
            <p className={`mt-1 text-[17px] font-bold tracking-[-0.02em] ${stat.tone}`}>
              {stat.value}
            </p>
            <p className="mt-0.5 text-[10px] text-muted">{stat.meta}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md border border-line bg-canvas px-2.5 py-1.5">
          <svg
            viewBox="0 0 16 16"
            className="size-3.5 shrink-0 text-muted"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          >
            <circle cx="7" cy="7" r="4.5" />
            <path d="M10.5 10.5L14 14" />
          </svg>
          <span className="truncate text-[11px] text-muted">
            Search invoices or clients
          </span>
        </div>
        <div className="flex items-center gap-1">
          {FILTERS.map((filter, index) => (
            <span
              key={filter}
              className={`rounded-md px-2 py-1 text-[10px] font-semibold ${
                index === 0
                  ? "bg-brand-soft text-brand-ink"
                  : "border border-line text-muted"
              }`}
            >
              {filter}
            </span>
          ))}
        </div>
      </div>

      <ul className="mt-3 divide-y divide-line overflow-hidden rounded-card border border-line">
        {INVOICES.map((invoice) => (
          <li
            key={invoice.id}
            className="flex items-center gap-3 bg-elevated px-3 py-2.5"
          >
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-ink">
              <svg
                viewBox="0 0 16 16"
                className="size-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 2.5h8v11l-2-1.2-2 1.2-2-1.2-2 1.2z" />
                <path d="M6 6h4M6 8.5h4" />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="truncate text-[11px] font-semibold text-ink">
                {invoice.id}
                <span className="ml-1.5 font-normal text-muted">
                  {invoice.client}
                </span>
              </p>
              <p className="text-[10px] text-muted">Issued {invoice.issued}</p>
            </div>
            <div className="ml-auto flex shrink-0 items-center gap-3">
              <span className="text-[11px] font-bold tracking-[-0.01em] text-ink">
                {invoice.amount}
              </span>
              <Chip tone={invoice.tone}>{invoice.status}</Chip>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
