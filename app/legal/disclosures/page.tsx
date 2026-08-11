import type { Metadata } from "next";
import { disclaimers } from "@/lib/copy/compliance";

export const metadata: Metadata = {
  title: "Important Disclosures",
  description:
    "CROA-aware disclosures for Credit is Power: results vary, consumer rights, cancellation, and fees.",
};

export default function DisclosuresPage() {
  return (
    <main className="bg-cloud px-6 py-16 md:px-8 md:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald">
          Legal
        </p>
        <h1 className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-navy md:text-4xl">
          Important Disclosures
        </h1>
        <p className="mt-3 text-sm text-slate">Last updated: August 11, 2026</p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate">
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Results vary
            </h2>
            <p className="mt-3">{disclaimers.resultsVary}</p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Your right to dispute for free
            </h2>
            <p className="mt-3">{disclaimers.selfDispute}</p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              50-Point Proven Plan
            </h2>
            <p className="mt-3">{disclaimers.planNotScorePromise}</p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Not a lender or consumer reporting agency
            </h2>
            <p className="mt-3">{disclaimers.notLender}</p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Credit Repair Organizations Act (CROA) — cancellation
            </h2>
            <p className="mt-3">
              If you enter a covered contract with a credit repair organization,
              federal law generally gives you the right to cancel within three
              business days of signing, without penalty. Cancel instructions and
              required notices will be provided with any covered written
              agreement. {disclaimers.croAFooter}
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Fees and advance payments
            </h2>
            <p className="mt-3">
              Where the Credit Repair Organizations Act and applicable
              Telemarketing Sales Rule provisions apply, we do not require you
              to pay for credit repair services in advance of those services
              being fully performed. Exact fee terms, if any, appear only in
              your written service agreement.
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Accurate information
            </h2>
            <p className="mt-3">
              We do not claim we can remove accurate, properly reported negative
              information merely because it is unfavorable.
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Contact
            </h2>
            <p className="mt-3">
              Questions:{" "}
              <span className="text-ink">compliance@creditispower.example</span>{" "}
              (replace with your operating email / mailing address).
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
