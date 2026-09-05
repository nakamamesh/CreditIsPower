import type { Metadata } from "next";
import { LegalDoc, LegalLink, LegalSection } from "@/components/legal-doc";
import { disclaimers } from "@/lib/copy/compliance";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Important Disclosures",
  description:
    "CROA-aware disclosures for Credit is Power: results vary, consumer rights, cancellation, fees, affiliates, and monitoring partners.",
};

export default function DisclosuresPage() {
  return (
    <LegalDoc
      title="Important Disclosures"
      lastUpdated="August 20, 2026"
      toc={[
        { id: "results", label: "Results vary" },
        { id: "self-dispute", label: "Dispute for free" },
        { id: "plan", label: "50-Point Plan" },
        { id: "not-lender", label: "Not a lender/CRA" },
        { id: "croa", label: "CROA cancellation" },
        { id: "fees", label: "Fees" },
        { id: "accurate", label: "Accurate information" },
        { id: "monitoring", label: "Monitoring partners" },
        { id: "affiliates", label: "Affiliate links" },
        { id: "privacy", label: "Privacy" },
        { id: "contact", label: "Contact" },
      ]}
    >
      <LegalSection id="results" title="Results vary">
        <p>{disclaimers.resultsVary}</p>
      </LegalSection>

      <LegalSection id="self-dispute" title="Your right to dispute for free">
        <p>{disclaimers.selfDispute}</p>
      </LegalSection>

      <LegalSection id="plan" title="50-Point Proven Plan">
        <p>{disclaimers.planNotScorePromise}</p>
      </LegalSection>

      <LegalSection id="not-lender" title="Not a lender or consumer reporting agency">
        <p>{disclaimers.notLender}</p>
      </LegalSection>

      <LegalSection id="croa" title="Credit Repair Organizations Act (CROA) — cancellation">
        <p>
          If you enter a covered contract with a credit repair organization,
          federal law generally gives you the right to cancel within three
          business days of signing, without penalty. Cancel instructions and
          required notices will be provided with any covered written agreement.{" "}
          {disclaimers.croAFooter}
        </p>
      </LegalSection>

      <LegalSection id="fees" title="Fees and advance payments">
        <p>
          Where the Credit Repair Organizations Act and applicable Telemarketing
          Sales Rule provisions apply, we do not require you to pay for credit
          repair services in advance of those services being fully performed.
          Exact fee terms, if any, appear only in your written service
          agreement. Analysis, education, and monitoring products may be
          described separately in that agreement.
        </p>
      </LegalSection>

      <LegalSection id="accurate" title="Accurate information">
        <p>
          We do not claim we can remove accurate, properly reported negative
          information merely because it is unfavorable.
        </p>
      </LegalSection>

      <LegalSection id="monitoring" title="Credit monitoring partners">
        <p>
          When we recommend IdentityIQ or similar monitoring, you enroll with
          that provider under their terms and privacy policy. Our current trial
          offer (when used):{" "}
          <LegalLink href={siteConfig.identityIqOfferUrl}>
            IdentityIQ SecureMax — $1 for 7 days
          </LegalLink>
          . After the trial, the provider bills their regular rate unless you
          cancel with them. Free weekly reports remain available at{" "}
          <LegalLink href="https://www.annualcreditreport.com">
            AnnualCreditReport.com
          </LegalLink>
          .
        </p>
      </LegalSection>

      <LegalSection id="affiliates" title="Affiliate and referral compensation">
        <p>
          We may receive compensation when you use our links or offer codes to
          enroll in monitoring or apply for credit products. Approval is never
          guaranteed. We are not the lender, issuer, or consumer reporting
          agency.
        </p>
      </LegalSection>

      <LegalSection id="privacy" title="Privacy">
        <p>
          How we handle personal information is described in our{" "}
          <LegalLink href="/legal/privacy">Privacy Policy</LegalLink>. California
          residents may also visit{" "}
          <LegalLink href="/legal/do-not-sell">
            Do Not Sell or Share My Personal Information
          </LegalLink>
          .
        </p>
      </LegalSection>

      <LegalSection id="contact" title="Contact">
        <p>
          Compliance questions:{" "}
          <LegalLink href={`mailto:${siteConfig.contact.compliance}`}>
            {siteConfig.contact.compliance}
          </LegalLink>
          . General:{" "}
          <LegalLink href={`mailto:${siteConfig.contact.hello}`}>
            {siteConfig.contact.hello}
          </LegalLink>{" "}
          or <LegalLink href="/book">book a free call</LegalLink>.
        </p>
        <p className="text-xs">{siteConfig.mailingAddressNote}</p>
      </LegalSection>
    </LegalDoc>
  );
}
