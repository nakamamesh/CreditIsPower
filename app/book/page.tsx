import type { Metadata } from "next";
import { CalendlyEmbed } from "@/components/calendly-embed";
import { Section } from "@/components/section";
import { TrustStrip } from "@/components/trust-strip";
import { disclaimers } from "@/lib/copy/compliance";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free Credit is Power consultation. 15–30 minutes to clarify goals and plan fit.",
};

export default function BookPage() {
  return (
    <main>
      <Section
        eyebrow="Book"
        title="Free consultation"
        className="bg-navy"
        tone="dark"
      >
        <p className="max-w-2xl text-base leading-relaxed text-white/80">
          A 15–30 minute call to understand your goals, discuss build / repair /
          monitor priorities (or business credit), and see whether the 50-Point
          Proven Plan is a fit.
        </p>
        <ul className="mt-6 max-w-xl list-disc space-y-2 pl-5 text-sm text-white/75">
          <li>What happens next after you book</li>
          <li>Questions to bring: goals, timeline, any open denials</li>
          <li>No obligation — and we never promise score outcomes</li>
        </ul>
      </Section>

      <Section title="Pick a time">
        <CalendlyEmbed url={siteConfig.calendlyUrl} />
        <p className="mt-6 text-xs leading-relaxed text-slate">
          {disclaimers.resultsVary}
        </p>
      </Section>

      <TrustStrip />
    </main>
  );
}
