import type { ReactNode } from "react";
import { Chip } from "@/components/site/Section";

/**
 * Compact UI visualisations for the feature grid — a small piece of the real
 * product instead of a generic icon. Marked decorative: the card's own heading
 * and copy carry the meaning.
 */
function VisualShell({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden="true" className="rounded-card border border-line bg-elevated p-3">
      {children}
    </div>
  );
}

function Avatar({ initials, tone = "bg-brand-soft text-brand-ink" }: { initials: string; tone?: string }) {
  return (
    <span
      className={`grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-bold ${tone}`}
    >
      {initials}
    </span>
  );
}

function Tick() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="size-3 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.5 8.4l3 3 6-6.4" />
    </svg>
  );
}

export function AttendanceVisual() {
  return (
    <VisualShell>
      <div className="flex items-center gap-2.5">
        <Avatar initials="AK" />
        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold text-ink">Amara Khan</p>
          <p className="text-[10px] text-muted">Clocked in 08:57 · Shift A</p>
        </div>
        <span className="ml-auto shrink-0 text-[11px] font-bold text-ink">
          8h 12m
        </span>
      </div>
      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        <Chip tone="positive">On time</Chip>
        <Chip>Hours auto-calculated</Chip>
      </div>
    </VisualShell>
  );
}

export function LeaveVisual() {
  return (
    <VisualShell>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-semibold text-ink">Annual leave</p>
        <Chip tone="brand">3 days</Chip>
      </div>
      <p className="mt-1 text-[10px] text-muted">12 – 16 Oct · Amara Khan</p>
      <div className="mt-2.5 flex gap-1.5">
        <span className="rounded-md bg-brand px-2.5 py-1 text-[10px] font-semibold text-white">
          Approve
        </span>
        <span className="rounded-md border border-line px-2.5 py-1 text-[10px] font-semibold text-muted">
          Decline
        </span>
      </div>
    </VisualShell>
  );
}

export function PayrollVisual() {
  return (
    <VisualShell>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-semibold text-ink">September payroll</p>
        <Chip tone="info">In review</Chip>
      </div>
      <dl className="mt-2 space-y-1.5">
        {[
          ["Processed", "218"],
          ["Pending", "30"],
        ].map(([label, value]) => (
          <div key={label} className="flex items-center justify-between">
            <dt className="text-[10px] text-muted">{label}</dt>
            <dd className="text-[11px] font-semibold text-ink">{value}</dd>
          </div>
        ))}
      </dl>
      <span className="mt-2.5 block h-1 w-full overflow-hidden rounded-full bg-canvas">
        <span className="block h-full w-[88%] rounded-full bg-brand" />
      </span>
    </VisualShell>
  );
}

export function WorkAuthVisual() {
  return (
    <VisualShell>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-semibold text-ink">H-1B authorization</p>
        <Chip tone="warn">80 days left</Chip>
      </div>
      <p className="mt-1 text-[10px] text-muted">Expires 14 Dec 2026</p>
      <ul className="mt-2.5 space-y-1.5">
        <li className="flex items-center gap-1.5 text-[10px] font-medium text-positive-ink">
          <Tick />
          90-day reminder sent
        </li>
        <li className="flex items-center gap-1.5 text-[10px] font-medium text-muted">
          <span className="size-3 shrink-0 rounded-full border border-line" />
          60-day reminder scheduled
        </li>
      </ul>
    </VisualShell>
  );
}

export function TasksVisual() {
  const tasks = [
    { label: "Collect signed I-9 forms", done: true },
    { label: "Approve September timesheets", done: true },
    { label: "Publish October rota", done: false },
  ];

  return (
    <VisualShell>
      <div className="flex items-center justify-between gap-2">
        <p className="text-[11px] font-semibold text-ink">HR tasks</p>
        <Chip tone="warn">1 open</Chip>
      </div>
      <ul className="mt-2 space-y-2">
        {tasks.map((task) => (
          <li key={task.label} className="flex items-center gap-2">
            <span
              className={`grid size-3.5 shrink-0 place-items-center rounded-[4px] border ${
                task.done
                  ? "border-brand bg-brand text-white"
                  : "border-line-strong bg-elevated"
              }`}
            >
              {task.done && (
                <svg
                  viewBox="0 0 16 16"
                  className="size-2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3.5 8.4l3 3 6-6.4" />
                </svg>
              )}
            </span>
            <span
              className={`truncate text-[10px] ${
                task.done ? "text-faint line-through" : "font-medium text-ink"
              }`}
            >
              {task.label}
            </span>
          </li>
        ))}
      </ul>
    </VisualShell>
  );
}

export function EmployeesVisual() {
  return (
    <VisualShell>
      <div className="flex items-center gap-2.5">
        <Avatar initials="RS" tone="bg-info-soft text-info" />
        <div className="min-w-0">
          <p className="truncate text-[11px] font-semibold text-ink">Rahul Sharma</p>
          <p className="text-[10px] text-muted">Senior Data Engineer</p>
        </div>
        <Chip tone="positive">Active</Chip>
      </div>
      <div className="mt-2.5 grid grid-cols-2 gap-2 border-t border-line pt-2.5">
        <div>
          <p className="text-[9px] font-semibold tracking-wide text-faint uppercase">
            Department
          </p>
          <p className="mt-0.5 text-[10px] font-medium text-ink">Engineering</p>
        </div>
        <div>
          <p className="text-[9px] font-semibold tracking-wide text-faint uppercase">
            Joined
          </p>
          <p className="mt-0.5 text-[10px] font-medium text-ink">Mar 2024</p>
        </div>
      </div>
    </VisualShell>
  );
}
