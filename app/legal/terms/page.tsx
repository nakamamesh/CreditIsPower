import type { Metadata } from "next";
import { LegalDoc, LegalLink, LegalSection } from "@/components/legal-doc";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for the Credit is Power website, consultations, and related services.",
};

const toc = [
  { id: "acceptance", label: "Acceptance" },
  { id: "eligibility", label: "Eligibility" },
  { id: "content", label: "Educational content" },
  { id: "no-guarantees", label: "No guarantees" },
  { id: "services", label: "Services & contracts" },
  { id: "third-parties", label: "Third-party products" },
  { id: "affiliate", label: "Affiliate links" },
  { id: "ip", label: "Intellectual property" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Indemnity" },
  { id: "governing-law", label: "Governing law" },
  { id: "changes", label: "Changes" },
  { id: "contact", label: "Contact" },
];

export default function TermsPage() {
  return (
    <LegalDoc
      title="Terms of Use"
      lastUpdated="August 20, 2026"
      toc={toc}
      intro={
        <p>
          These Terms of Use (&quot;Terms&quot;) govern your access to and use
          of the Credit is Power website and related online materials. Paid
          client services are governed by a separate written agreement when you
          enroll.
        </p>
      }
    >
      <LegalSection id="acceptance" title="1. Acceptance">
        <p>
          By using this website, you agree to these Terms and our{" "}
          <LegalLink href="/legal/privacy">Privacy Policy</LegalLink>. If you
          do not agree, do not use the site.
        </p>
      </LegalSection>

      <LegalSection id="eligibility" title="2. Eligibility">
        <p>
          The Website is intended for individuals 18 years of age or older
          located in the United States. By using the site, you represent that
          you meet these requirements.
        </p>
      </LegalSection>

      <LegalSection id="content" title="3. Educational and marketing content">
        <p>
          Site content is for general information and marketing. It is not
          legal, tax, accounting, or personalized financial advice. Credit
          outcomes depend on many factors outside our control, including lender
          underwriting, bureau data, and your payment history.
        </p>
      </LegalSection>

      <LegalSection id="no-guarantees" title="4. No guarantees">
        <p>
          Individual results vary. We do not guarantee score increases, removal
          of accurate information, loan or card approvals, debt settlements, or
          any specific financial outcome. See{" "}
          <LegalLink href="/legal/disclosures">Important Disclosures</LegalLink>
          .
        </p>
      </LegalSection>

      <LegalSection id="services" title="5. Services and contracts">
        <p>
          Booking a free consultation does not create a paid service contract.
          Paid services (if any) — including analysis, monitoring coordination,
          education, and case management — are governed only by a written
          agreement you sign, including any required consumer-rights notices and
          cancellation forms under applicable law (including CROA where it
          applies).
        </p>
        <p>
          You may cancel covered credit-repair contracts within three business
          days of signing as described in federal law and your agreement.
        </p>
      </LegalSection>

      <LegalSection id="third-parties" title="6. Third-party products">
        <p>
          We may recommend third-party monitoring (including IdentityIQ), mail
          vendors, or credit products. Those providers have their own terms,
          privacy policies, and billing. You are responsible for reviewing them
          before you enroll or apply. We are not those companies and are not
          responsible for their acts or omissions.
        </p>
        <p>
          Our current IdentityIQ trial offer link (when provided):{" "}
          <LegalLink href={siteConfig.identityIqOfferUrl}>
            IdentityIQ SecureMax offer
          </LegalLink>
          . Trial pricing converts to the provider&apos;s regular rate unless
          you cancel with them.
        </p>
      </LegalSection>

      <LegalSection id="affiliate" title="7. Affiliate and referral links">
        <p>
          We may receive compensation when you use our referral links or offer
          codes (including monitoring or credit-card applications). Compensation
          does not change your price with the third party and does not guarantee
          approval.
        </p>
      </LegalSection>

      <LegalSection id="ip" title="8. Intellectual property">
        <p>
          Website content, branding, and the &quot;50-Point Proven Plan&quot;
          methodology name are owned by Credit is Power or its licensors. You
          may not copy, scrape, or reuse materials for commercial purposes
          without written permission, except for personal, non-commercial use of
          publicly available pages.
        </p>
      </LegalSection>

      <LegalSection id="acceptable-use" title="9. Acceptable use">
        <p>You agree not to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Use the site for unlawful purposes</li>
          <li>
            Provide false information or encourage others to make false
            statements to credit bureaus or creditors
          </li>
          <li>
            Attempt to gain unauthorized access to systems, scrape at abusive
            volume, or disrupt the site
          </li>
          <li>Misrepresent your affiliation with Credit is Power</li>
        </ul>
      </LegalSection>

      <LegalSection id="disclaimers" title="10. Disclaimers">
        <p>
          THE WEBSITE AND CONTENT ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
          AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
          INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT, TO THE FULLEST EXTENT PERMITTED BY LAW.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="11. Limitation of liability">
        <p>
          To the fullest extent permitted by law, Credit is Power and its
          owners, employees, and agents are not liable for indirect, incidental,
          special, consequential, or punitive damages, or for lost profits,
          arising from your use of the Website or reliance on its content. Our
          total liability for claims relating to the Website shall not exceed
          one hundred dollars (US $100) or the amount you paid us for Website
          access in the prior twelve months (if any), whichever is greater. Some
          jurisdictions do not allow certain limitations; in those cases our
          liability is limited to the maximum extent permitted.
        </p>
      </LegalSection>

      <LegalSection id="indemnity" title="12. Indemnity">
        <p>
          You agree to indemnify and hold harmless Credit is Power from claims,
          losses, and expenses (including reasonable attorneys&apos; fees)
          arising from your misuse of the Website, your violation of these
          Terms, or your violation of any law or third-party right.
        </p>
      </LegalSection>

      <LegalSection id="governing-law" title="13. Governing law">
        <p>
          These Terms are governed by the laws of the United States and the
          state in which Credit is Power maintains its principal place of
          business once established, without regard to conflict-of-law rules.
          Until a principal address is published, disputes will be resolved in a
          mutually agreed U.S. venue. Mandatory consumer protections in your
          state of residence still apply where they cannot be waived.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="14. Changes">
        <p>
          We may update these Terms by posting a revised version with a new
          &quot;Last updated&quot; date. Continued use after posting constitutes
          acceptance where permitted by law.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="15. Contact">
        <p>
          Questions about these Terms:{" "}
          <LegalLink href={`mailto:${siteConfig.contact.legal}`}>
            {siteConfig.contact.legal}
          </LegalLink>
          . General:{" "}
          <LegalLink href={`mailto:${siteConfig.contact.hello}`}>
            {siteConfig.contact.hello}
          </LegalLink>{" "}
          or <LegalLink href="/book">book a call</LegalLink>.
        </p>
        <p className="text-xs">{siteConfig.mailingAddressNote}</p>
      </LegalSection>
    </LegalDoc>
  );
}
