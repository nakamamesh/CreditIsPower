import type { Metadata } from "next";
import { BenefitGrid } from "@/components/benefit-grid";
import { CtaButton } from "@/components/cta-button";
import { HeroHome } from "@/components/hero-home";
import { HowItWorks } from "@/components/how-it-works";
import { PathwayCards } from "@/components/pathway-cards";
import { Section } from "@/components/section";
import { TrustStrip } from "@/components/trust-strip";
import { personalBenefits } from "@/lib/copy/benefits";
import { disclaimers } from "@/lib/copy/compliance";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Personal Credit Building, Repair & Monitoring",
  description:
    "Build, repair, and monitor personal credit with Credit is Power. See the consumer benefits of stronger scores and book a free consultation.",
};

export default function Home() {
  return (
    <main>
      <HeroHome />
      <BenefitGrid benefits={personalBenefits} />
      <PathwayCards />
      <Section
        eyebrow="Methodology"
        title="The 50-Point Proven Plan"
        className="bg-cloud"
      >
        <p className="max-w-2xl text-base leading-relaxed text-slate">
          A structured approach to diagnose priorities, clean up inaccuracies,
          build positive history, and monitor what matters — with clarity at
          every step.
        </p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate">
          {disclaimers.planNotScorePromise}
        </p>
        <div className="mt-8">
          <Link
            href="/50-point-plan"
            className="text-sm font-semibold text-emerald underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
          >
            Explore the full plan →
          </Link>
        </div>
      </Section>
      <HowItWorks />
      <TrustStrip />
      <Section className="bg-navy" tone="dark">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Ready for more options?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Book a free consultation. We&apos;ll map your goals to a clear next
            step — no score guarantees, just a plan.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/book">Book Free Consultation</CtaButton>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-xs leading-relaxed text-white/60">
            {disclaimers.resultsVary}
          </p>
        </div>
      </Section>
    </main>
  );
}
