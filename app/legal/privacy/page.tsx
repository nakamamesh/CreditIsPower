import type { Metadata } from "next";
import {
  LegalDoc,
  LegalLink,
  LegalSection,
} from "@/components/legal-doc";
import {
  privacyCategories,
  privacyLastUpdated,
  privacyToc,
} from "@/lib/copy/privacy";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Credit is Power collects, uses, shares, and protects personal information — including CCPA-style rights, cookies, credit reports, and affiliate disclosures.",
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      title="Privacy Policy"
      lastUpdated={privacyLastUpdated}
      toc={[...privacyToc]}
      intro={
        <>
          <p>
            Credit is Power (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            protect personal information when you use{" "}
            <LegalLink href="https://creditispower.com">creditispower.com</LegalLink>
            , book a consultation, email us, or otherwise interact with our
            marketing and consulting services.
          </p>
          <p>
            This page is a structural privacy notice for our current website and
            consult workflow. It is not a substitute for advice from your own
            counsel. Practices may be updated as we add products; the
            &quot;Last updated&quot; date will change when we do.
          </p>
        </>
      }
    >
      <LegalSection id="who-we-are" title="1. Who we are">
        <p>
          Credit is Power operates this website and related consultation booking
          and client education / monitoring / case-management services described
          on the site and in any written agreement you sign.
        </p>
        <p>
          Privacy requests:{" "}
          <LegalLink href={`mailto:${siteConfig.contact.privacy}`}>
            {siteConfig.contact.privacy}
          </LegalLink>
          . Compliance:{" "}
          <LegalLink href={`mailto:${siteConfig.contact.compliance}`}>
            {siteConfig.contact.compliance}
          </LegalLink>
          . General:{" "}
          <LegalLink href={`mailto:${siteConfig.contact.hello}`}>
            {siteConfig.contact.hello}
          </LegalLink>{" "}
          or <LegalLink href="/book">book a call</LegalLink>.
        </p>
        <p className="text-xs">{siteConfig.mailingAddressNote}</p>
      </LegalSection>

      <LegalSection id="scope" title="2. Scope">
        <p>This Policy applies to personal information we collect:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Through this Website and booking tools linked from it</li>
          <li>When you email, text, or call us</li>
          <li>
            When you send us credit reports, IdentityIQ (or similar) exports, or
            other documents for analysis or ongoing case management
          </li>
          <li>
            From service providers that help us operate (hosting, email,
            scheduling, payments, print-and-mail)
          </li>
        </ul>
        <p>
          It does <strong>not</strong> control the privacy practices of
          independent third parties such as Equifax, Experian, TransUnion,
          IdentityIQ, Calendly, card issuers, or LetterStream. Their sites and
          apps have their own policies.
        </p>
        <p>
          Use of the Website is also subject to our{" "}
          <LegalLink href="/legal/terms">Terms of Use</LegalLink> and{" "}
          <LegalLink href="/legal/disclosures">Important Disclosures</LegalLink>
          .
        </p>
      </LegalSection>

      <LegalSection
        id="notice-at-collection"
        title="3. Notice at collection"
      >
        <p>
          At or before we collect personal information (for example when you
          book a call or email a report), please know:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Categories collected:</strong> identifiers and contact
            data; commercial/service data; internet activity; coarse location;
            and, if you choose to send them, sensitive financial/credit-file
            contents.
          </li>
          <li>
            <strong>Purposes:</strong> schedule and run consultations; deliver
            analysis, education, monitoring coordination, and case management
            you request; operate and secure the Website; comply with law;
            improve our services.
          </li>
          <li>
            <strong>Sale / share:</strong> We do{" "}
            <strong>not sell</strong> personal information for money. We do not
            knowingly share personal information for cross-context behavioral
            advertising. If we enable advertising cookies later, we will update
            this Policy and provide an opt-out. See{" "}
            <LegalLink href="/legal/do-not-sell">
              Do Not Sell or Share My Personal Information
            </LegalLink>
            .
          </li>
          <li>
            <strong>Retention:</strong> See the category table in Section 4 and
            Section 13.
          </li>
        </ul>
      </LegalSection>

      <LegalSection
        id="information-we-collect"
        title="4. Information we collect"
      >
        <h3 className="font-[family-name:var(--font-syne)] text-base font-semibold text-navy">
          A. Information you provide
        </h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Contact and identity information (name, email, phone, mailing
            address if you provide it)
          </li>
          <li>
            Goals and context you share on a consult (housing, debt stress,
            business credit, etc.)
          </li>
          <li>
            Documents you send — including credit reports, dispute letters,
            ID/proof of address you attach for bureau correspondence, and
            monitoring portal screenshots
          </li>
          <li>
            Payment and billing details when you enroll in paid services
            (processed by our payment provider; we aim not to store full card
            numbers)
          </li>
          <li>Communications with us (email, SMS, call notes)</li>
        </ul>

        <h3 className="mt-6 font-[family-name:var(--font-syne)] text-base font-semibold text-navy">
          B. Information from third parties
        </h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Scheduling platforms (e.g., Calendly) when you book a consult
          </li>
          <li>
            Monitoring products you enroll in yourself (e.g., IdentityIQ) — we
            receive data only if you grant access or forward reports
          </li>
          <li>
            Print-and-mail vendors (tracking numbers, delivery confirmations)
            when we mail letters you authorized
          </li>
        </ul>

        <h3 className="mt-6 font-[family-name:var(--font-syne)] text-base font-semibold text-navy">
          C. Information collected automatically
        </h3>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            Device and log data: IP address, browser type, OS, pages visited,
            timestamps, referrer
          </li>
          <li>
            Cookies and similar technologies (see Section 11)
          </li>
        </ul>

        <h3 className="mt-6 font-[family-name:var(--font-syne)] text-base font-semibold text-navy">
          D. Categories (last 12 months — expected practices)
        </h3>
        <div className="mt-3 overflow-x-auto rounded-md border border-navy/10 bg-white">
          <table className="min-w-full text-left text-xs">
            <thead className="border-b border-navy/10 bg-cloud text-navy">
              <tr>
                <th className="px-3 py-2 font-semibold">Category</th>
                <th className="px-3 py-2 font-semibold">Examples</th>
                <th className="px-3 py-2 font-semibold">Sold / shared?</th>
              </tr>
            </thead>
            <tbody>
              {privacyCategories.map((row) => (
                <tr
                  key={row.category}
                  className="border-b border-navy/5 align-top last:border-0"
                >
                  <td className="px-3 py-2 font-medium text-ink">
                    {row.category}
                  </td>
                  <td className="px-3 py-2">{row.examples}</td>
                  <td className="px-3 py-2">{row.soldOrShared}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs">
          Full purpose / source / retention detail for each category is
          available on request at{" "}
          <LegalLink href={`mailto:${siteConfig.contact.privacy}`}>
            {siteConfig.contact.privacy}
          </LegalLink>
          .
        </p>
      </LegalSection>

      <LegalSection id="how-we-use" title="5. How we use information">
        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to inquiries and schedule consultations</li>
          <li>
            Provide analysis, education, monitoring coordination, dispute
            support, and case management you request under a written agreement
          </li>
          <li>Operate, secure, and improve the Website</li>
          <li>Process payments and prevent fraud or abuse</li>
          <li>
            Send service-related messages (appointment reminders, status
            updates). Marketing emails only with consent or as permitted by law,
            with unsubscribe
          </li>
          <li>Comply with law, including CROA recordkeeping where applicable</li>
          <li>
            Create de-identified or aggregated insights that cannot reasonably
            identify you
          </li>
        </ul>
        <p>
          We do <strong>not</strong> use credit report contents you send us for
          advertising or to sell to data brokers.
        </p>
      </LegalSection>

      <LegalSection id="sharing" title="6. How we share information">
        <p>
          We share personal information only as described here, not for
          unrelated commercial sale:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Service providers</strong> — hosting, email, scheduling,
            payments, e-signature, dispute software, print-and-mail (e.g.,
            LetterStream), under contracts limiting use to providing services
            for us
          </li>
          <li>
            <strong>Professional advisors</strong> — lawyers, accountants,
            insurers as needed
          </li>
          <li>
            <strong>Legal / safety</strong> — when required by law, legal
            process, or to protect rights, safety, or security
          </li>
          <li>
            <strong>Business transfers</strong> — merger, acquisition, or asset
            sale, with reasonable efforts to require the recipient to honor this
            Policy
          </li>
          <li>
            <strong>With your direction</strong> — for example, mailing a letter
            you authorized to a credit bureau or furnisher
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="sale-share" title="7. Sale and sharing of personal information">
        <p>
          <strong>
            We do not sell your personal information for monetary consideration.
          </strong>
        </p>
        <p>
          Under California law, &quot;share&quot; can include disclosing personal
          information for cross-context behavioral advertising. We do not
          currently operate that type of advertising on this Website. If that
          changes, we will update this Policy, disclose it in our notice at
          collection, and provide a clear opt-out.
        </p>
        <p>
          Exercise requests:{" "}
          <LegalLink href="/legal/do-not-sell">
            Do Not Sell or Share My Personal Information
          </LegalLink>{" "}
          or email{" "}
          <LegalLink href={`mailto:${siteConfig.contact.privacy}`}>
            {siteConfig.contact.privacy}
          </LegalLink>
          .
        </p>
      </LegalSection>

      <LegalSection id="third-parties" title="8. Third-party sites and services">
        <p>
          Links to third parties (IdentityIQ, Calendly, card issuers, bureaus,
          social platforms) are not endorsements. Their privacy practices are
          their own. Transactions on those sites are between you and that
          provider.
        </p>
      </LegalSection>

      <LegalSection
        id="credit-reports"
        title="9. Credit reports and monitoring products"
      >
        <p>
          When you pull reports through our recommended IdentityIQ offer (
          <LegalLink href={siteConfig.identityIqOfferUrl}>
            $1 / 7-day trial link
          </LegalLink>
          ), you create an account with{" "}
          <strong>IdentityIQ / its partners</strong>, not with Credit is Power.
          Their privacy policy, terms, and billing (including conversion after
          the trial) govern that product.
        </p>
        <p>
          If you email us PDFs or grant portal access for imports, you authorize
          us to view and use that information solely to provide the services you
          requested. We treat credit-file data as confidential and sensitive.
        </p>
        <p>
          You can obtain free weekly credit reports directly from the federal
          source{" "}
          <LegalLink href="https://www.annualcreditreport.com">
            AnnualCreditReport.com
          </LegalLink>{" "}
          without using IdentityIQ.
        </p>
      </LegalSection>

      <LegalSection
        id="affiliates"
        title="10. Affiliate and referral links"
      >
        <p>
          We may earn a commission or partner credit when you enroll in
          monitoring (including via our IdentityIQ offer code) or apply for
          credit products through our referral links. That does not change the
          price you pay the third party. We disclose this relationship so you
          can make an informed choice. See also our{" "}
          <LegalLink href="/legal/disclosures">Disclosures</LegalLink>.
        </p>
      </LegalSection>

      <LegalSection id="cookies" title="11. Cookies and similar technologies">
        <p>
          We and our providers may use cookies, pixels, and similar tools to
          operate the site, remember preferences, measure traffic, and (if
          enabled) support advertising.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Essential</strong> — security, load balancing, booking
            embeds
          </li>
          <li>
            <strong>Analytics</strong> — understand how the site is used
            (enabled only if we configure them)
          </li>
          <li>
            <strong>Advertising</strong> — not currently a core practice; if
            added, opt-outs will be available here and via{" "}
            <LegalLink href="https://www.aboutads.info/choices">
              aboutads.info/choices
            </LegalLink>{" "}
            and{" "}
            <LegalLink href="https://optout.networkadvertising.org/">
              Network Advertising Initiative
            </LegalLink>
          </li>
        </ul>
        <p>
          Browser settings can block cookies; some features may not work.
        </p>
      </LegalSection>

      <LegalSection id="security" title="12. Security">
        <p>
          We use reasonable administrative, technical, and physical safeguards
          appropriate to the sensitivity of the data — including HTTPS/TLS in
          transit, access limitation, and vendor selection for hosting and mail.
          No method of transmission or storage is 100% secure. Please do not
          send Social Security numbers or full credit-card numbers by unencrypted
          email when another channel is available.
        </p>
        <p>
          If we become aware of a breach affecting your personal information, we
          will notify you and regulators as required by applicable law.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="13. Retention">
        <p>
          We keep personal information only as long as needed for the purposes
          described above, including:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Active client relationship and dispute cycles</li>
          <li>
            CROA and consumer-protection record requirements (often at least two
            years for certain acknowledgments)
          </li>
          <li>Tax, accounting, and legal holds</li>
        </ul>
        <p>
          When no longer needed, we delete or de-identify information in a
          reasonable timeframe, subject to backup cycles.
        </p>
      </LegalSection>

      <LegalSection id="your-choices" title="14. Your choices and rights">
        <p>Depending on where you live, you may have the right to:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Access / know what personal information we hold</li>
          <li>Correct inaccurate personal information</li>
          <li>Delete personal information (subject to legal exceptions)</li>
          <li>Receive a portable copy of certain information</li>
          <li>Opt out of sale or sharing (see Section 7 — we do not sell)</li>
          <li>Limit use of sensitive personal information where required</li>
          <li>Opt out of marketing emails via the unsubscribe link</li>
        </ul>
        <p>
          To exercise rights, email{" "}
          <LegalLink href={`mailto:${siteConfig.contact.privacy}`}>
            {siteConfig.contact.privacy}
          </LegalLink>{" "}
          with &quot;Privacy Request&quot; in the subject. We may need to verify
          your identity. You may use an authorized agent where law allows; we
          will require proof of authority.
        </p>
        <p>
          We will not discriminate against you for exercising privacy rights.
        </p>
      </LegalSection>

      <LegalSection
        id="california"
        title="15. Additional notice for California residents"
      >
        <p>
          This section supplements the Policy for California residents under the
          CCPA/CPRA. Whether we are a &quot;business&quot; under those statutes
          depends on statutory thresholds; we provide these rights as a matter
          of practice for Website users and clients.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Right to know / access / portability</strong> — categories
            and specific pieces collected, sources, purposes, and disclosures
          </li>
          <li>
            <strong>Right to delete</strong> — subject to exceptions (e.g.,
            complete a transaction, detect security incidents, comply with law)
          </li>
          <li>
            <strong>Right to correct</strong> — inaccurate personal information
          </li>
          <li>
            <strong>Right to opt out of sale / share</strong> — we do not sell;
            see{" "}
            <LegalLink href="/legal/do-not-sell">Do Not Sell or Share</LegalLink>
          </li>
          <li>
            <strong>Right to limit use of sensitive PI</strong> — we use
            sensitive credit-file data only to provide requested services, not
            for advertising
          </li>
          <li>
            <strong>Non-discrimination</strong>
          </li>
        </ul>
        <p>
          Submit requests to{" "}
          <LegalLink href={`mailto:${siteConfig.contact.privacy}`}>
            {siteConfig.contact.privacy}
          </LegalLink>
          . We will respond within the timeframes required by law (generally 45
          days, extendable once where permitted).
        </p>
        <p>
          <strong>Shine the Light:</strong> California residents may request
          information about disclosure of personal information to third parties
          for their direct marketing. We do not disclose personal information to
          third parties for their own direct marketing in that manner. Requests:{" "}
          <LegalLink href={`mailto:${siteConfig.contact.privacy}`}>
            {siteConfig.contact.privacy}
          </LegalLink>
          .
        </p>
      </LegalSection>

      <LegalSection
        id="other-states"
        title="16. Other U.S. state privacy rights"
      >
        <p>
          Residents of states with comprehensive privacy laws (including, where
          applicable, Virginia, Colorado, Connecticut, Utah, Texas, Oregon, and
          others) may have similar rights to access, delete, correct, and opt
          out of certain processing. Contact{" "}
          <LegalLink href={`mailto:${siteConfig.contact.privacy}`}>
            {siteConfig.contact.privacy}
          </LegalLink>
          . If we deny a request, you may appeal by replying to our decision
          email; we will explain our reasoning.
        </p>
      </LegalSection>

      <LegalSection id="children" title="17. Children">
        <p>
          The Website and services are directed to adults. We do not knowingly
          collect personal information from children under 16. If you believe a
          child provided information, contact{" "}
          <LegalLink href={`mailto:${siteConfig.contact.privacy}`}>
            {siteConfig.contact.privacy}
          </LegalLink>{" "}
          and we will delete it promptly.
        </p>
      </LegalSection>

      <LegalSection id="international" title="18. International visitors">
        <p>
          We operate in the United States. If you access the Website from
          outside the U.S., you understand that information may be processed in
          the United States, where privacy laws may differ from those in your
          country.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="19. Changes to this Policy">
        <p>
          We may update this Privacy Policy from time to time. The &quot;Last
          updated&quot; date will change when we post revisions. Material
          changes may also be highlighted on the Website or by email if
          appropriate. Continued use after posting constitutes acceptance of the
          updated Policy where permitted by law.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="20. Contact us">
        <p>
          Privacy Officer / privacy requests:{" "}
          <LegalLink href={`mailto:${siteConfig.contact.privacy}`}>
            {siteConfig.contact.privacy}
          </LegalLink>
        </p>
        <p>
          Compliance:{" "}
          <LegalLink href={`mailto:${siteConfig.contact.compliance}`}>
            {siteConfig.contact.compliance}
          </LegalLink>
        </p>
        <p>
          Legal:{" "}
          <LegalLink href={`mailto:${siteConfig.contact.legal}`}>
            {siteConfig.contact.legal}
          </LegalLink>
        </p>
        <p className="text-xs">{siteConfig.mailingAddressNote}</p>
      </LegalSection>
    </LegalDoc>
  );
}
