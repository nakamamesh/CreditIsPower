import type { Metadata } from "next";
import { LegalDoc, LegalLink, LegalSection } from "@/components/legal-doc";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information",
  description:
    "Credit is Power does not sell personal information. Opt-out and California privacy request instructions.",
};

export default function DoNotSellPage() {
  return (
    <LegalDoc
      title="Do Not Sell or Share My Personal Information"
      lastUpdated="August 20, 2026"
      intro={
        <p>
          This page is our California-style notice of the right to opt out of
          the sale or sharing of personal information, and how to submit related
          privacy requests.
        </p>
      }
    >
      <LegalSection id="status" title="Our current practices">
        <p>
          <strong>
            Credit is Power does not sell personal information for money.
          </strong>{" "}
          We also do not currently share personal information for cross-context
          behavioral advertising.
        </p>
        <p>
          You may still submit an opt-out request. We will record it and honor
          it if our practices change or if a vendor configuration could be
          interpreted as a &quot;sale&quot; or &quot;share&quot; under
          California law.
        </p>
      </LegalSection>

      <LegalSection id="how" title="How to submit a request">
        <p>Email us with the subject line &quot;Do Not Sell or Share&quot;:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <LegalLink href={`mailto:${siteConfig.contact.privacy}`}>
              {siteConfig.contact.privacy}
            </LegalLink>
          </li>
          <li>
            Or compliance:{" "}
            <LegalLink href={`mailto:${siteConfig.contact.compliance}`}>
              {siteConfig.contact.compliance}
            </LegalLink>
          </li>
        </ul>
        <p>
          Include your full name, the email/phone you used with us, and whether
          you are a California resident. We may verify your identity before
          processing.
        </p>
        <p>
          Full details:{" "}
          <LegalLink href="/legal/privacy">Privacy Policy</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection id="gpc" title="Global Privacy Control">
        <p>
          If we deploy advertising or analytics technologies that recognize the
          Global Privacy Control (GPC) browser signal, we will treat an enabled
          GPC signal as a valid opt-out of sale/sharing for that browser where
          required by law.
        </p>
      </LegalSection>
    </LegalDoc>
  );
}
