import { Eyebrow, Lead, Section, SectionHeading } from "@/components/site/Section";

/**
 * Deliberately limited to what the product actually does. No certifications,
 * customer logos, uptime figures or compliance badges are claimed anywhere
 * here, because none could be verified.
 */
const PILLARS = [
  {
    title: "Organization-level workspace isolation",
    body: "Every organization operates inside its own workspace. Employee records, attendance, leave and payroll belong to that workspace alone.",
    icon: (
      <>
        <rect x="3" y="7" width="14" height="9.5" rx="2.2" />
        <path d="M6.8 7V5.6a3.2 3.2 0 016.4 0V7" />
        <path d="M10 11v2.4" />
      </>
    ),
  },
  {
    title: "Centralized HR operations",
    body: "Attendance, leave, payroll information, tasks and authorization dates live in one workspace instead of being spread across disconnected tools.",
    icon: (
      <>
        <rect x="2.8" y="3.2" width="14.4" height="13.6" rx="2.2" />
        <path d="M6.6 7.4h6.8M6.6 10.4h6.8M6.6 13.4h3.6" />
      </>
    ),
  },
  {
    title: "Controlled access to workforce information",
    body: "Administrators run the workspace, while employees reach their own information through the employee portal using accounts their organization creates.",
    icon: (
      <>
        <circle cx="10" cy="7.4" r="2.8" />
        <path d="M4.6 16.6c0-2.6 2.4-4.2 5.4-4.2s5.4 1.6 5.4 4.2" />
      </>
    ),
  },
];

export function TrustSecurity() {
  return (
    <Section id="security">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Trust &amp; access</Eyebrow>
        <SectionHeading>Built around separation and control.</SectionHeading>
        <Lead className="mt-5">
          How OneClickHR handles your workforce information, described plainly.
        </Lead>
      </div>

      <ul className="mt-14 grid gap-4 lg:grid-cols-3 lg:gap-5">
        {PILLARS.map((pillar) => (
          <li
            key={pillar.title}
            className="reveal rounded-panel border border-line bg-surface p-6 shadow-card"
          >
            <span
              aria-hidden
              className="grid size-10 place-items-center rounded-card bg-brand-soft text-brand-ink"
            >
              <svg
                viewBox="0 0 20 20"
                className="size-[19px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {pillar.icon}
              </svg>
            </span>
            <h3 className="mt-4 text-[16px] font-bold tracking-[-0.01em] text-ink">
              {pillar.title}
            </h3>
            <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
              {pillar.body}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
