import { Chip } from "@/components/site/Section";

const STOPS = [
  { label: "Today", meta: "25 Sep 2026", dot: "border-brand bg-brand" },
  { label: "90 days", meta: "Reminder sent", dot: "border-brand bg-brand" },
  { label: "60 days", meta: "Scheduled", dot: "border-brand bg-elevated" },
  { label: "30 days", meta: "Scheduled", dot: "border-line-strong bg-elevated" },
  { label: "7 days", meta: "Scheduled", dot: "border-line-strong bg-elevated" },
  { label: "Expiration", meta: "14 Dec 2026", dot: "border-line-strong bg-elevated" },
];

const ROWS = [
  {
    name: "Rahul Sharma",
    type: "H-1B",
    expires: "14 Dec 2026",
    days: 80,
    daysTone: "text-warn-ink",
    status: "90-day sent",
    tone: "positive" as const,
  },
  {
    name: "Amara Khan",
    type: "H-1B",
    expires: "02 Jan 2027",
    days: 99,
    daysTone: "text-muted",
    status: "90-day sent",
    tone: "positive" as const,
  },
  {
    name: "Diego Alvarez",
    type: "OPT / EAD",
    expires: "21 Nov 2026",
    days: 57,
    daysTone: "text-brand-ink",
    status: "60-day due",
    tone: "brand" as const,
  },
  {
    name: "Mei Lin",
    type: "H-1B",
    expires: "09 Feb 2027",
    days: 137,
    daysTone: "text-muted",
    status: "Scheduled",
    tone: "neutral" as const,
  },
];

export function WorkAuthMock() {
  return (
    <div className="bg-surface p-4 sm:p-5">
      <div className="flex flex-wrap items-center gap-3">
        <div>
          <p className="text-[13px] font-bold tracking-[-0.01em] text-ink">
            Work authorization
          </p>
          <p className="mt-0.5 text-[11px] text-muted">
            4 authorizations expiring within 90 days
          </p>
        </div>
        <Chip tone="warn">4 need attention</Chip>
      </div>

      <div className="mt-4 rounded-card border border-line bg-elevated p-4">
        <p className="text-[12px] font-bold text-ink">Reminder timeline</p>
        <p className="mt-0.5 text-[10px] text-muted">
          Every milestone fires once — reminders never double-send.
        </p>

        <ol className="mt-5 grid gap-4 sm:grid-cols-6 sm:gap-2">
          {STOPS.map((stop) => (
            <li key={stop.label} className="relative pl-6 sm:pl-0 sm:pt-6">
              <span
                className="absolute top-0 left-[5px] h-full w-px bg-line sm:hidden"
                aria-hidden
              />
              <span
                className="absolute top-[5px] left-0 hidden h-px w-full bg-line sm:block"
                aria-hidden
              />
              <span
                className={`absolute top-0 left-0 size-[11px] rounded-full border-2 ${stop.dot}`}
                aria-hidden
              />
              <p className="text-[11px] font-semibold text-ink">{stop.label}</p>
              <p className="mt-0.5 text-[10px] text-muted">{stop.meta}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-3 rounded-card border border-line bg-elevated px-4">
        <ul className="divide-y divide-line">
          {ROWS.map((row) => (
            <li
              key={row.name}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 py-3"
            >
              <span className="min-w-0 flex-1 basis-[170px]">
                <span className="block truncate text-[12px] font-semibold text-ink">
                  {row.name}
                </span>
                <span className="block text-[10px] text-muted">{row.type}</span>
              </span>

              <span className="basis-[104px]">
                <span className="block text-[9px] font-semibold tracking-wide text-faint uppercase">
                  Expires
                </span>
                <span className="block text-[11px] font-medium text-ink">
                  {row.expires}
                </span>
              </span>

              <span className="basis-[84px]">
                <span className="block text-[9px] font-semibold tracking-wide text-faint uppercase">
                  Remaining
                </span>
                <span className={`block text-[11px] font-semibold ${row.daysTone}`}>
                  {row.days} days
                </span>
              </span>

              <span className="ml-auto">
                <Chip tone={row.tone}>{row.status}</Chip>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
