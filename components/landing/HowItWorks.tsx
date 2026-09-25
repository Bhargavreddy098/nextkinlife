import { Icon, type IconName } from "@/components/site/icons";
import { Eyebrow, Lead, Section, SectionHeading } from "@/components/site/Section";

/**
 * Process orbit. At lg and up the six stages ride one large ellipse — clockwise
 * from the upper left — with a handwritten margin note in two corners. Below lg
 * the same stages drop into a numbered dot rail, notes included, so nothing of
 * the voice is lost on small screens.
 *
 * Stage positions are centre-relative offsets in px (the ellipse is 720×480),
 * which keeps the layout intact whether the container is 960 or 1040 wide.
 */
type Stage = {
  number: string;
  icon: IconName;
  label: string;
  body: string;
  x: number;
  y: number;
  /** Margin note — handwritten in the orbit, inline beside the rail step. */
  note?: string;
};

const STAGES: Stage[] = [
  {
    number: "01",
    icon: "settings",
    label: "Set up your workspace",
    body: "Create your workspace and configure how HR runs for your team.",
    x: -312,
    y: -120,
    note: "no migration project, no consultants!",
  },
  {
    number: "02",
    icon: "employees",
    label: "Add your team",
    body: "Bring employee information into one place and give people access.",
    x: 0,
    y: -240,
  },
  {
    number: "03",
    icon: "attendance",
    label: "Track time & leave",
    body: "Clock-ins, shifts and hours, plus leave requests and approvals.",
    x: 312,
    y: -120,
  },
  {
    number: "04",
    icon: "payroll",
    label: "Pay & compliance",
    body: "Organize payroll and track authorization dates before they expire.",
    x: 312,
    y: 120,
    note: "reminders before the deadline",
  },
  {
    number: "05",
    icon: "tasks",
    label: "Assign tasks",
    body: "Assign and track HR and employee tasks.",
    x: 0,
    y: 240,
  },
  {
    number: "06",
    icon: "overview",
    label: "One dashboard",
    body: "One dashboard for pending work and upcoming events.",
    x: -312,
    y: 120,
  },
];

/** Shared header — centred copy lives in the orbit middle on lg, above the rail below. */
function Header() {
  return (
    <>
      <Eyebrow>How it works</Eyebrow>
      <SectionHeading>Up and running in six steps.</SectionHeading>
      <Lead className="mt-5">
        Set up a workspace, add your people, and run HR from one place.
      </Lead>
    </>
  );
}

function StageIcon({ name }: { name: IconName }) {
  return (
    <span className="grid size-7 shrink-0 place-items-center rounded-control bg-brand-soft text-brand-ink">
      <Icon name={name} className="size-4" />
    </span>
  );
}

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="band">
      {/* Below lg: centred header, then a numbered dot rail. */}
      <div className="lg:hidden">
        <div className="mx-auto max-w-2xl text-center">
          <Header />
        </div>

        <ol className="mx-auto mt-12 max-w-[520px]">
          {STAGES.map((stage, index) => (
            <li key={stage.number} className="relative flex gap-4 pb-8 last:pb-0">
              {index < STAGES.length - 1 && (
                <span
                  aria-hidden
                  className="absolute top-9 bottom-0 left-[17px] w-px bg-line-strong"
                />
              )}
              <span className="relative z-10 grid size-9 shrink-0 place-items-center rounded-full border border-line bg-surface font-mono text-[11px] font-medium text-muted">
                {stage.number}
              </span>

              <div className="min-w-0 flex-1">
                <div className="reveal rounded-panel border border-line bg-surface p-4 shadow-card">
                  <div className="flex items-center gap-2.5">
                    <StageIcon name={stage.icon} />
                    <h3 className="text-[15px] font-bold tracking-[-0.01em] text-ink">
                      {stage.label}
                    </h3>
                  </div>
                  <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
                    {stage.body}
                  </p>
                </div>
                {stage.note && (
                  <p className="mt-3 ml-1 rotate-[-2deg] font-hand text-[18px] leading-[1.3] text-ink-soft">
                    {stage.note}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* lg+: the orbit. */}
      <div className="relative mx-auto hidden h-[700px] max-w-[1040px] lg:block">
        <svg
          width={740}
          height={500}
          viewBox="0 0 740 500"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-hidden
        >
          <ellipse
            cx="370"
            cy="250"
            rx="360"
            ry="240"
            fill="none"
            stroke="var(--color-line-strong)"
            strokeWidth="1.5"
          />
          {/* Direction markers: at the right end the flow runs down, at the left end up. */}
          <polygon points="730,264 722,250 738,250" fill="var(--color-brand)" />
          <polygon points="10,236 2,250 18,250" fill="var(--color-brand)" />
        </svg>

        <div className="absolute inset-0 grid place-items-center">
          <div className="w-full max-w-[380px] text-center">
            <Header />
          </div>
        </div>

        <ol className="absolute inset-0">
          {STAGES.map((stage) => (
            <li
              key={stage.number}
              style={{
                left: `calc(50% + ${stage.x}px)`,
                top: `calc(50% + ${stage.y}px)`,
              }}
              className="absolute w-[176px] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="reveal rounded-card border border-line bg-surface p-4 shadow-card transition-shadow duration-300 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <StageIcon name={stage.icon} />
                  <span className="font-mono text-[11px] font-medium tracking-[0.1em] text-muted">
                    [{stage.number}]
                  </span>
                </div>
                <h3 className="mt-3 text-[15px] font-bold tracking-[-0.01em] text-ink">
                  {stage.label}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-ink-soft">
                  {stage.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* Handwritten margin notes — the only place the hand voice appears. */}
        <div
          style={{ left: "calc(50% - 375px)", top: "calc(50% - 300px)" }}
          className="absolute w-[196px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="reveal">
            <p className="rotate-[-4deg] text-center font-hand text-[19px] leading-[1.3] text-ink-soft">
              {STAGES[0].note}
            </p>
          </div>
        </div>
        <svg
          width={76}
          height={64}
          viewBox="0 0 76 64"
          style={{ left: "calc(50% - 355px)", top: "calc(50% - 230px)" }}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-ink-soft"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M4 6C28 14 40 30 62 54" />
          <path d="M51 52L62 54L61 43" />
        </svg>

        <div
          style={{ left: "calc(50% + 375px)", top: "calc(50% + 300px)" }}
          className="absolute w-[196px] -translate-x-1/2 -translate-y-1/2"
        >
          <div className="reveal">
            <p className="rotate-[3deg] text-center font-hand text-[19px] leading-[1.3] text-ink-soft">
              {STAGES[3].note}
            </p>
          </div>
        </div>
        <svg
          width={80}
          height={70}
          viewBox="0 0 80 70"
          style={{ left: "calc(50% + 345px)", top: "calc(50% + 240px)" }}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-ink-soft"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M35 67C28 44 30 22 40 5" />
          <path d="M41 15L40 5L31 9" />
        </svg>
      </div>
    </Section>
  );
}
