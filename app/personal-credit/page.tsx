import type { Metadata } from "next";
import Link from "next/link";
import { BenefitGrid } from "@/components/benefit-grid";
import { CtaButton } from "@/components/cta-button";
import { FadeIn } from "@/components/motion";
import { SceneImage } from "@/components/scene-image";
import { Section } from "@/components/section";
import { personalBenefits } from "@/lib/copy/benefits";
import { disclaimers } from "@/lib/copy/compliance";

export const metadata: Metadata = {
  title: "Personal Credit — Build, Repair & Monitor",
  description:
    "Personal credit building, repair, and monitoring with Credit is Power. Learn benefits and book a free consultation.",
};

const faqs = [
  {
    q: "Can you guarantee my score will go up?",
    a: "No. Individual results vary. We focus on a clear process — build, repair inaccuracies, and monitor — not promised outcomes.",
  },
  {
    q: "Can I dispute errors myself for free?",
    a: disclaimers.selfDispute,
  },
  {
    q: "What is the 50-Point Proven Plan?",
    a: disclaimers.planNotScorePromise + " On a consult we walk the phases that fit your goals.",
  },
  {
    q: "Do you remove accurate negative information?",
    a: "We do not claim to delete accurate, properly reported information. Repair work centers on inaccurate, incomplete, or unverifiable items under applicable law.",
  },
  {
    q: "What happens on the free call?",
    a: "A 15–30 minute conversation about your goals, priorities across build/repair/monitor, and whether our plan is a fit. No obligation.",
  },
] as const;

export default function PersonalCreditPage() {
  return (
    <main>
      <Section
        eyebrow="Personal credit"
        title="Build stronger personal credit — and unlock more options"
        className="bg-navy"
        tone="dark"
      >
        <p className="max-w-2xl text-base leading-relaxed text-white/80">
          High scores aren&apos;t vanity — they&apos;re leverage for rates,
          approvals, housing, and everyday financial flexibility.
        </p>
        <div className="mt-8">
          <CtaButton href="/book">Book Free Consultation</CtaButton>
        </div>
      </Section>

      <BenefitGrid benefits={personalBenefits} />

      <Section id="build" eyebrow="Build" title="Create positive momentum">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="max-w-2xl text-base leading-relaxed text-slate">
              Building means establishing on-time history, thoughtful utilization,
              and durable habits that support stronger profiles over time. We help
              you prioritize the actions that match your goals — without promising
              a specific score.
            </p>
          </div>
          <FadeIn>
            <SceneImage
              src="/images/theme-03-hope.png"
              alt="Hopeful couple planning their financial next steps together at home"
              sizes="(max-width: 768px) 100vw, 560px"
              objectPosition="center 30%"
            />
          </FadeIn>
        </div>
      </Section>

      <Section
        id="repair"
        eyebrow="Repair"
        title="Address inaccurate or incomplete items"
        className="bg-white"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <FadeIn>
            <SceneImage
              src="/images/theme-01-denied.png"
              alt="Woman looking frustrated at a laptop after a difficult credit application moment"
              sizes="(max-width: 768px) 100vw, 560px"
              objectPosition="center 22%"
            />
          </FadeIn>
          <div>
            <p className="max-w-2xl text-base leading-relaxed text-slate">
              Repair focuses on reviewing your reports and disputing information
              that may be inaccurate, incomplete, or unverifiable. Clarity and
              documentation matter more than hype.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate">
              {disclaimers.selfDispute}
            </p>
          </div>
        </div>
      </Section>

      <Section id="monitor" eyebrow="Monitor" title="Catch changes early">
        <p className="max-w-2xl text-base leading-relaxed text-slate">
          Monitoring helps you spot new accounts, hard inquiries, and shifts
          that can affect applications. Stay informed so surprises show up in
          your inbox — not at the loan desk.
        </p>
      </Section>

      <Section
        eyebrow="Also available"
        title="Debt mediation support"
        className="bg-cloud"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="max-w-2xl text-base leading-relaxed text-slate">
              When balances make progress harder, we can discuss debt mediation
              options as part of a broader plan. Outcomes depend on your creditors
              and circumstances — we do not guarantee settlements.
            </p>
          </div>
          <FadeIn>
            <SceneImage
              src="/images/theme-02-bills.png"
              alt="Man sorting through paper statements and bills at a kitchen table"
              sizes="(max-width: 768px) 100vw, 560px"
              objectPosition="center 25%"
            />
          </FadeIn>
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Common questions">
        <dl className="mx-auto max-w-3xl space-y-6">
          {faqs.map((item) => (
            <div key={item.q} className="border-b border-navy/10 pb-6">
              <dt className="font-[family-name:var(--font-syne)] text-lg font-semibold text-navy">
                {item.q}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section className="bg-navy" tone="dark">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-white">
            Start with a free call
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            We&apos;ll map build, repair, and monitor priorities to your goals.
          </p>
          <div className="mt-8 flex justify-center gap-6">
            <CtaButton href="/book">Book Free Consultation</CtaButton>
            <Link
              href="/business-credit"
              className="self-center text-sm font-semibold text-emerald-soft underline-offset-4 hover:underline"
            >
              Looking for business credit?
            </Link>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-xs text-white/55">
            {disclaimers.resultsVary}
          </p>
        </div>
      </Section>
    </main>
  );
}
