import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for the Credit is Power website.",
};

export default function TermsPage() {
  return (
    <main className="bg-cloud px-6 py-16 md:px-8 md:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald">
          Legal
        </p>
        <h1 className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-navy md:text-4xl">
          Terms of Use
        </h1>
        <p className="mt-3 text-sm text-slate">Last updated: August 11, 2026</p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate">
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Acceptance
            </h2>
            <p className="mt-3">
              By using this website, you agree to these Terms. If you do not
              agree, do not use the site.
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Educational and marketing content
            </h2>
            <p className="mt-3">
              Site content is for general information and marketing. It is not
              legal, tax, or financial advice tailored to your situation. Credit
              outcomes depend on many factors outside our control.
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              No guarantees
            </h2>
            <p className="mt-3">
              Individual results vary. We do not guarantee score increases,
              removals of accurate information, loan approvals, or specific
              financial outcomes.
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Services
            </h2>
            <p className="mt-3">
              Paid services, if any, are governed by a written agreement
              provided at enrollment. Website booking alone does not create a
              service contract.
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Limitation of liability
            </h2>
            <p className="mt-3">
              To the fullest extent permitted by law, Credit is Power is not
              liable for indirect, incidental, or consequential damages arising
              from use of this site. Some jurisdictions do not allow certain
              limitations; in those cases our liability is limited to the
              maximum extent permitted.
            </p>
          </section>
          <section>
            <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
              Contact
            </h2>
            <p className="mt-3">
              Questions about these Terms:{" "}
              <span className="text-ink">legal@creditispower.example</span>{" "}
              (replace with your operating email).
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
