import { Icon, type IconName } from "@/components/site/icons";
import { LogoMark } from "@/components/site/Logo";

const NAV: { key: IconName; label: string; active?: boolean; badge?: string }[] = [
  { key: "overview", label: "Overview", active: true },
  { key: "employees", label: "Employees" },
  { key: "attendance", label: "Attendance" },
  { key: "leave", label: "Leave", badge: "5" },
  { key: "payroll", label: "Payroll" },
  { key: "tasks", label: "Tasks", badge: "3" },
  { key: "compliance", label: "Compliance", badge: "4" },
  { key: "settings", label: "Settings" },
];

const STATS = [
  { label: "Employees", value: "248", note: "+6 this month", tone: "text-muted" },
  { label: "Present today", value: "231", note: "93% of the team", tone: "text-positive-ink" },
  { label: "On leave", value: "12", note: "4 return Monday", tone: "text-muted" },
  { label: "Pending leave", value: "05", note: "Awaiting approval", tone: "text-brand-ink" },
  { label: "Tasks due", value: "03", note: "2 need attention", tone: "text-warn-ink" },
  { label: "Expiring soon", value: "04", note: "Within 90 days", tone: "text-warn-ink" },
];

const ATTENDANCE = [
  { label: "Present", value: 231, share: 93, bar: "bg-brand" },
  { label: "Late", value: 9, share: 8, bar: "bg-warn" },
  { label: "Absent", value: 5, share: 6, bar: "bg-line-strong" },
  { label: "Remote", value: 4, share: 5, bar: "bg-info" },
];

const UPCOMING = [
  {
    title: "H-1B / Work authorization",
    meta: "4 expiring within 90 days",
    count: "4",
    tone: "bg-warn-soft text-warn-ink",
  },
  {
    title: "Leave requests",
    meta: "5 awaiting approval",
    count: "5",
    tone: "bg-brand-soft text-brand-ink",
  },
  {
    title: "Payroll tasks",
    meta: "Cycle closes on the 25th",
    count: "2",
    tone: "bg-info-soft text-info",
  },
  {
    title: "HR tasks",
    meta: "3 due this week",
    count: "3",
    tone: "bg-canvas text-muted",
  },
];

const WEEK = [64, 78, 71, 88, 82, 46, 22];

export function DashboardMock() {
  return (
    <div className="flex bg-surface">
      <aside className="hidden w-[168px] shrink-0 flex-col border-r border-line bg-canvas p-3 sm:flex">
        <div className="mb-4 flex items-center gap-2 px-1.5 pt-1">
          <LogoMark className="size-6" />
          <span className="text-[12px] font-bold tracking-[-0.01em] text-ink">
            OneClickHR
          </span>
        </div>

        <ul className="flex flex-col gap-0.5">
          {NAV.map((item) => (
            <li key={item.label}>
              <span
                className={`flex items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-[12px] font-medium ${
                  item.active
                    ? "bg-brand-soft text-brand-ink"
                    : "text-muted"
                }`}
              >
                <Icon name={item.key} />
                <span className="truncate">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto rounded-full bg-elevated px-1.5 text-[10px] font-bold text-brand-ink">
                    {item.badge}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto rounded-card border border-line bg-elevated p-2.5">
          <p className="text-[10px] font-semibold tracking-wide text-faint uppercase">
            Workspace
          </p>
          <p className="mt-1 truncate text-[11px] font-semibold text-ink">
            NextKinLIfe LLC
          </p>
        </div>
      </aside>

      <div className="min-w-0 flex-1 p-3.5 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <div className="min-w-0">
            <p className="text-[13px] font-bold tracking-[-0.01em] text-ink sm:text-[15px]">
              Good morning, HR Team
            </p>
            <p className="mt-0.5 text-[11px] text-muted">
              Thursday, 25 September · 3 things need your attention
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="hidden rounded-full border border-line bg-elevated px-3 py-1.5 text-[11px] font-semibold text-ink-soft sm:inline-flex">
              This week
            </span>
            <span className="rounded-full bg-brand px-3 py-1.5 text-[11px] font-semibold text-white">
              + Add employee
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-card border border-line bg-elevated p-3"
            >
              <p className="text-[10px] font-semibold tracking-wide text-faint uppercase">
                {stat.label}
              </p>
              <p className="mt-1.5 text-[19px] leading-none font-bold tracking-[-0.02em] text-ink">
                {stat.value}
              </p>
              <p className={`mt-1.5 text-[10px] font-medium ${stat.tone}`}>
                {stat.note}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div className="rounded-card border border-line bg-elevated p-3.5">
            <div className="flex items-baseline justify-between">
              <p className="text-[12px] font-bold text-ink">Attendance today</p>
              <span className="text-[10px] text-faint">Live</span>
            </div>

            {/* Bars use percentage heights, so the track needs a definite height. */}
            <div className="mt-3 flex h-14 items-end gap-1.5">
              {WEEK.map((height, index) => (
                <span
                  key={index}
                  style={{ height: `${height}%` }}
                  className={`w-full rounded-sm ${
                    index === WEEK.length - 1 ? "bg-brand" : "bg-brand/20"
                  }`}
                />
              ))}
            </div>
            <p className="mt-2 text-[10px] text-faint">Last 7 days</p>

            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {ATTENDANCE.map((item) => (
                <div key={item.label}>
                  <p className="text-[15px] leading-none font-bold text-ink">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[10px] text-muted">{item.label}</p>
                  <span className="mt-1.5 block h-1 w-full overflow-hidden rounded-full bg-canvas">
                    <span
                      style={{ width: `${item.share}%` }}
                      className={`block h-full rounded-full ${item.bar}`}
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-card border border-line bg-elevated p-3.5">
            <div className="flex items-baseline justify-between">
              <p className="text-[12px] font-bold text-ink">Upcoming</p>
              <span className="text-[10px] font-semibold text-brand-ink">
                View all
              </span>
            </div>

            <ul className="mt-2.5 divide-y divide-line">
              {UPCOMING.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-3 py-2.5 first:pt-1 last:pb-0"
                >
                  <span
                    className={`grid size-6 shrink-0 place-items-center rounded-lg text-[11px] font-bold ${item.tone}`}
                  >
                    {item.count}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-[12px] font-semibold text-ink">
                      {item.title}
                    </span>
                    <span className="block truncate text-[10px] text-muted">
                      {item.meta}
                    </span>
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
