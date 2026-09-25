const WORKSPACE_ITEMS = ["Employees", "Attendance", "Leave", "Payroll"];

function Workspace({
  name,
  code,
  accent,
}: {
  name: string;
  code: string;
  accent: string;
}) {
  return (
    <div className="rounded-card border border-line bg-elevated p-4">
      <div className="flex items-center gap-2.5">
        <span
          className={`grid size-7 shrink-0 place-items-center rounded-lg text-[11px] font-bold text-white ${accent}`}
        >
          {name.charAt(0)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[12px] font-semibold text-ink">
            {name}
          </span>
          <span className="block text-[10px] text-muted">Org code {code}</span>
        </span>
        <span className="ml-auto rounded-full bg-canvas px-2 py-0.5 text-[9px] font-bold tracking-wide text-muted uppercase">
          Isolated
        </span>
      </div>

      <ul className="mt-3 space-y-1.5 border-t border-line pt-3">
        {WORKSPACE_ITEMS.map((item) => (
          <li key={item} className="flex items-center gap-2 text-[11px] text-ink-soft">
            <span className="size-1.5 shrink-0 rounded-full bg-line-strong" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Two organizations side by side, each with its own self-contained workspace. */
export function IsolationMock() {
  return (
    <div aria-hidden="true" className="grid gap-3 sm:grid-cols-2">
      <Workspace name="Organization A" code="NKL-0001" accent="bg-brand" />
      <Workspace name="Organization B" code="VBL-0002" accent="bg-ink" />
    </div>
  );
}
