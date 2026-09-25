import { Button } from "@/components/site/Button";
import { DEMO_URL } from "@/lib/site";

/**
 * The close is the one solid accent field on the page: flat brand colour, white
 * type, technical hairline grid. A solid field reads stronger than any gradient
 * — and it spends the accent exactly once, at the moment of decision.
 */
export function FinalCta() {
  return (
    <section
      id="cta"
      className="scroll-mt-24 bg-canvas px-5 pb-16 sm:px-8 sm:pb-24 lg:pb-28"
    >
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="relative overflow-hidden rounded-panel bg-brand px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="hairline-grid-invert pointer-events-none absolute inset-0"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-[30px] leading-[1.12] font-bold tracking-[-0.025em] text-white sm:text-[40px]">
              Put HR operations in one place.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.65] text-white sm:text-[18px]">
              Less switching. Fewer scattered workflows. One workspace for your
              team.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                href="/signup"
                variant="on-accent"
                size="lg"
                className="w-full sm:w-auto"
              >
                Get Started
              </Button>
              <Button
                href={DEMO_URL}
                variant="invert"
                size="lg"
                className="w-full sm:w-auto"
              >
                Book a Demo
              </Button>
            </div>

            <p className="mt-5 text-[13px] text-white">
              Create a workspace for your organization in a few minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
