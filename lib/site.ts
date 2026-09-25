/**
 * Single source of truth for every link the marketing site points at.
 *
 * All destinations below were verified against the live product. Nothing here
 * is invented: the app is the only public surface OneClickHR currently has.
 */

/**
 * The company that owns and operates OneClickHR. Every surface that names the
 * owner (footer credit, page metadata, legal copy) reads from here so the legal
 * name never drifts between pages.
 *
 * `url` stays empty until a public company site exists — the footer renders the
 * credit as plain text rather than inventing a link.
 */
export const COMPANY = {
  /** Brand name, used in sentence case copy: "a NextKinLife company". */
  name: "NextKinLife",
  /** Registered legal name, used wherever the entity is cited formally. */
  legalName: "NextKinLife LLC",
  /** Public company website, e.g. "https://nextkinlife.com". */
  url: "",
} as const;

export const APP_URL = "https://app.oneclickhr.app";

export const LOGIN_URL = `${APP_URL}/login`;
export const SIGNUP_URL = `${APP_URL}/signup`;
export const EMPLOYEE_LOGIN_URL = `${APP_URL}/employee-login`;
export const JOBS_URL = `${APP_URL}/jobs`;

/**
 * "Book a Demo" has no public booking channel to point at yet — the live
 * product exposes sign-in, workspace creation, the employee portal and the
 * job board, and nothing else. It therefore routes to the real signup flow so
 * the CTA is never a dead end.
 *
 * Replace this single value with a Calendly/Cal.com link or a mailto: address
 * when a booking channel exists, and every "Book a Demo" button updates.
 */
export const DEMO_URL = "/signup";

export type NavLink = {
  label: string;
  href: string;
  /** Rendered as an inert, clearly-marked placeholder when no page exists yet. */
  pending?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#", pending: true },
  { label: "Pricing", href: "#", pending: true },
];

export const FOOTER_GROUPS: { title: string; links: NavLink[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#product" },
      { label: "Features", href: "#features" },
      { label: "Work authorization", href: "#compliance" },
      { label: "How it works", href: "#how-it-works" },
      { label: "Pricing", href: "#", pending: true },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Browse open roles", href: "/careers" },
      { label: "Contact", href: "#", pending: true },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Employee portal", href: EMPLOYEE_LOGIN_URL },
      { label: "Job board", href: JOBS_URL },
      { label: "Guides", href: "#", pending: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#", pending: true },
      { label: "Terms", href: "#", pending: true },
    ],
  },
];

/** Product modules confirmed live in the app. Used for copy, not invented. */
export const MODULES = [
  "Attendance",
  "Leave",
  "Payroll",
  "Work authorization",
  "Tasks",
  "Employee records",
  "Invoicing",
  "Job board",
] as const;
