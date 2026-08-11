import type { Metadata } from "next";
import Link from "next/link";
import { CtaButton } from "@/components/cta-button";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main className="bg-cloud px-6 py-24 md:px-8">
      <div className="mx-auto max-w-xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald">
          404
        </p>
        <h1 className="mt-3 font-[family-name:var(--font-syne)] text-3xl font-semibold text-navy md:text-4xl">
          That page isn&apos;t here
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate">
          The link may be outdated. Head home or book a free consultation.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <CtaButton href="/book">Book Free Consultation</CtaButton>
          <Link
            href="/"
            className="text-sm font-semibold text-emerald underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
          >
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}
