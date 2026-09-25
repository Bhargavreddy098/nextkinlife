import type { Metadata } from "next";
import { Button } from "@/components/site/Button";
import { Eyebrow } from "@/components/site/Section";
import { EMPLOYEE_LOGIN_URL, JOBS_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Browse open roles from organizations hiring through OneClickHR. No account needed to apply.",
};

export default function CareersPage() {
  return (
    <div className="mx-auto w-full max-w-[1180px] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow>Careers</Eyebrow>
        <h1 className="text-[32px] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[44px]">
          Find your next role.
        </h1>
        <p className="mt-5 text-[17px] leading-[1.6] text-ink-soft">
          Open positions from organizations hiring through OneClickHR. You do not
          need an account to apply &mdash; just a CV and a few minutes.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href={JOBS_URL} size="lg" className="w-full sm:w-auto">
            Browse Open Roles
          </Button>
          <Button
            href="/signup"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Post a role
          </Button>
        </div>
      </div>

      <div className="mt-16 grid gap-4 lg:grid-cols-2 lg:gap-5">
        <div className="rounded-panel border border-line bg-surface p-6 shadow-card sm:p-7">
          <h2 className="text-[17px] font-bold tracking-[-0.01em] text-ink">
            Looking for a job?
          </h2>
          <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
            Every open role from every organization on OneClickHR is listed on
            the public job board. Filter by location, experience and role type,
            then apply directly &mdash; no account required.
          </p>
          <Button href={JOBS_URL} variant="secondary" className="mt-5">
            Open the job board
          </Button>
        </div>

        <div className="rounded-panel border border-line bg-surface p-6 shadow-card sm:p-7">
          <h2 className="text-[17px] font-bold tracking-[-0.01em] text-ink">
            Already part of a team?
          </h2>
          <p className="mt-2 text-[14px] leading-[1.6] text-ink-soft">
            If your organization created your account, sign in through the
            employee portal rather than creating a workspace. Employees cannot
            self-sign up into an organization.
          </p>
          <Button href={EMPLOYEE_LOGIN_URL} variant="secondary" className="mt-5">
            Go to the employee portal
          </Button>
        </div>
      </div>

      <div className="mt-6 rounded-panel border border-line bg-surface p-6 shadow-card sm:p-7">
        <h2 className="text-[17px] font-bold tracking-[-0.01em] text-ink">
          Hiring for your own team?
        </h2>
        <p className="mt-2 max-w-2xl text-[14px] leading-[1.6] text-ink-soft">
          Create a workspace and publish your roles to the same board, alongside
          the HR operations you already run in OneClickHR.
        </p>
        <Button href="/signup" className="mt-5">
          Get Started
        </Button>
      </div>
    </div>
  );
}
