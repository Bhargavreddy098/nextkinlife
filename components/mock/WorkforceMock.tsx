import { Chip } from "@/components/site/Section";

const STATUS = [
  { initials: "AK", name: "Amara Khan", role: "Care Coordinator", state: "Present", tone: "positive" as const, time: "08:57" },
  { initials: "RS", name: "Rahul Sharma", role: "Senior Data Engineer", state: "Present", tone: "positive" as const, time: "09:04" },
  { initials: "DA", name: "Diego Alvarez", role: "Field Supervisor", state: "Remote", tone: "info" as const, time: "09:12" },
  { initials: "ML", name: "Mei Lin", role: "Payroll Analyst", state: "On leave", tone: "neutral" as const, time: "—" },
  { initials: "JT", name: "Joseph Tan", role: "Support Lead", state: "Late", tone: "warn" as const, time: "09:48" },
];

const APPROVALS = [
  { name: "Amara Khan", type: "Annual leave", range: "12 – 16 Oct", days: "3 days" },
  { name: "Joseph Tan", type: "Sick leave", range: "26 – 27 Sep", days: "2 days" },
  { name: "Mei Lin", type: "Unpaid leave", range: "04 – 08 Nov", days: "5 days" },
];

const ALERTS = [
  { label: "Payroll cycle closes on the 25th", tone: "info" as const, meta: "2 tasks outstanding" },
  { label: "4 work authorizations expiring soon", tone: "warn" as const, meta: "Within 90 days" },
  { label: "2 timesheets awaiting approval", tone: "brand" as const, meta: "Before payroll run" },
];

const STRIP = [
  { label: "Present", value: "231" },
  { label: "Late", value: "9" },
  { label: "Absent", value: "5" },
  { label: "Remote", value: "4" },
  { label: "On leave", value: "12" },
];

export function WorkforceMock() {
  return (
    <div className="bg-surface p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-3">
        <div>
          <p className="text-[13px] font-bold tracking-[-0.01em] text-ink">
            Attendance &amp; approvals
          </p>
          <p className="mt-0.5 text-[11px] text-muted">
            Thursday, 25 September · 248 employees
          </p>
        </div>
        <span className="ml-auto rounded-full border border-line bg-elevated px-3 py-1.5 text-[11px] font-semibold text-ink-soft">
          Export
        </span>
      </div>

      <div className="mt-3.5 grid grid-cols-2 gap-2.5 sm:grid-cols-5">
        {STRIP.map((item) => (
          <div key={item.label} className="rounded-card border border-line bg-elevated px-3 py-2.5">
            <p className="text-[17px] leading-none font-bold tracking-[-0.02em] text-ink">
              {item.value}
            </p>
            <p className="mt-1 text-[10px] font-medium text-muted">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
        <div className="rounded-card border border-line bg-elevated p-3.5">
          <p className="text-[12px] font-bold text-ink">Employee status</p>
          <ul className="mt-2.5 divide-y divide-line">
            {STATUS.map((person) => (
              <li key={person.name} className="flex items-center gap-2.5 py-2.5 first:pt-1 last:pb-0">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-canvas text-[10px] font-bold text-ink-soft">
                  {person.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[11px] font-semibold text-ink">
                    {person.name}
                  </span>
                  <span className="block truncate text-[10px] text-muted">
                    {person.role}
                  </span>
                </span>
                <span className="hidden text-[10px] text-muted sm:block">{person.time}</span>
                <Chip tone={person.tone}>{person.state}</Chip>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-card border border-line bg-elevated p-3.5">
            <div className="flex items-baseline justify-between">
              <p className="text-[12px] font-bold text-ink">Pending approvals</p>
              <span className="text-[10px] font-semibold text-brand-ink">5 waiting</span>
            </div>
            <ul className="mt-2.5 space-y-2.5">
              {APPROVALS.map((item) => (
                <li key={item.name} className="flex items-center gap-2.5">
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[11px] font-semibold text-ink">
                      {item.name}
                    </span>
                    <span className="block truncate text-[10px] text-muted">
                      {item.type} · {item.range}
                    </span>
                  </span>
                  <Chip tone="brand">{item.days}</Chip>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-card border border-line bg-elevated p-3.5">
            <p className="text-[12px] font-bold text-ink">Operational alerts</p>
            <ul className="mt-2.5 space-y-2.5">
              {ALERTS.map((alert) => (
                <li key={alert.label} className="flex items-start gap-2.5">
                  <span
                    aria-hidden
                    className={`mt-1.5 size-1.5 shrink-0 rounded-full ${
                      alert.tone === "warn"
                        ? "bg-warn"
                        : alert.tone === "brand"
                          ? "bg-brand"
                          : "bg-info"
                    }`}
                  />
                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium text-ink">
                      {alert.label}
                    </span>
                    <span className="block text-[10px] text-muted">{alert.meta}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
