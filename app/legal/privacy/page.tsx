import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Credit is Power.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-cloud px-6 py-16 md:px-8 md:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald">
          Legal
        </p>
        <h1 className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-navy md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate">Last updated: August 11, 2026</p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate">
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Who we are
            </h2>
            <p className="mt-3">
              Credit is Power (&quot;we,&quot; &quot;us&quot;) operates this marketing website and
              related consultation booking experience. Privacy inquiries:{" "}
              <a
                href={`mailto:${siteConfig.contact.privacy}`}
                className="font-medium text-ink underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
              >
                {siteConfig.contact.privacy}
              </a>
              . General contact:{" "}
              <a
                href={`mailto:${siteConfig.contact.hello}`}
                className="font-medium text-ink underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
              >
                {siteConfig.contact.hello}
              </a>
              , or{" "}
              <a
                href="/book"
                className="font-medium text-ink underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
              >
                book a call
              </a>
              .
            </p>
            <p className="mt-3 text-xs text-slate">{siteConfig.mailingAddressNote}</p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Information we collect
            </h2>
            <p className="mt-3">
              When you book a consultation or contact us, we may collect name,
              email, phone, and information you choose to share about your goals.
              Our scheduling provider (for example Calendly) may process booking
              data under their own privacy terms. Server logs and analytics (if
              enabled) may collect technical data such as IP address and browser
              type.
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              How we use information
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to inquiries and schedule consultations</li>
              <li>Provide requested services and customer support</li>
              <li>Improve this website and prevent abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Sharing
            </h2>
            <p className="mt-3">
              We do not sell your personal information. We may share data with
              service providers who help us operate (hosting, scheduling, email)
              under appropriate agreements, or when required by law.
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Your choices
            </h2>
            <p className="mt-3">
              You may request access, correction, or deletion of personal
              information we hold about you, subject to applicable law. Contact
              us using the email addresses above.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
