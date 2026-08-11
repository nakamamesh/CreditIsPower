import type { Metadata } from "next";
import { BenefitGrid } from "@/components/benefit-grid";
import { CtaButton } from "@/components/cta-button";
import { FadeIn } from "@/components/motion";
import { SceneImage } from "@/components/scene-image";
import { Section } from "@/components/section";
import { businessBenefits } from "@/lib/copy/benefits";
import { disclaimers } from "@/lib/copy/compliance";

export const metadata: Metadata = {
  title: "Business Credit Building",
  description:
    "Build business credit separate from personal. Vendor Net-30 potential, financing capacity, and a free consult with Credit is Power.",
};

export default function BusinessCreditPage() {
  return (
    <main>
      <Section
        eyebrow="Business credit"
        title="Grow capacity without treating personal credit as your only file"
        className="bg-navy"
        tone="dark"
      >
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="max-w-2xl text-base leading-relaxed text-white/80">
              Business credit is a separate journey. Done thoughtfully, it can
              support vendor terms, financing conversations, and less reliance on
              personal guarantees over time.
            </p>
            <p className="mt-4 max-w-2xl text-sm text-white/65">
              Business credit is not an overnight fix for personal scores.
            </p>
            <div className="mt-8">
              <CtaButton href="/book">Book Free Consultation</CtaButton>
            </div>
          </div>
          <FadeIn>
            <SceneImage
              src="/images/theme-04-business.png"
              alt="Small-business owner reviewing vendor paperwork at a shop counter"
              className="ring-1 ring-white/10"
              sizes="(max-width: 768px) 100vw, 560px"
            />
          </FadeIn>
        </div>
      </Section>

      <BenefitGrid
        benefits={businessBenefits}
        eyebrow="Business benefits"
        title="What's in it for your company"
      />

      <Section eyebrow="Path" title="How business credit typically forms">
        <ol className="max-w-2xl list-decimal space-y-4 pl-5 text-sm leading-relaxed text-slate">
          <li>
            Form and document the business properly (EIN, registrations, and
            consistent entity details).
          </li>
          <li>
            Establish vendor relationships that may report — including Net-30
            trade lines where you qualify. Approvals are never guaranteed.
          </li>
          <li>
            Use credit responsibly and pay on time so the business file can
            mature separately from personal history.
          </li>
          <li>
            Monitor business files and align financing asks with demonstrated
            capacity.
          </li>
        </ol>
      </Section>

      <Section className="bg-navy" tone="dark">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-white">
            Book a business credit consult
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            We&apos;ll discuss vendor paths, separation from personal credit,
            and realistic next steps.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/book">Book Free Consultation</CtaButton>
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-xs text-white/55">
            {disclaimers.resultsVary} {disclaimers.notLender}
          </p>
        </div>
      </Section>
    </main>
  );
}
