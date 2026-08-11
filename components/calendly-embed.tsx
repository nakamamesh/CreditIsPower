"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function CalendlyEmbed({ url }: { url: string }) {
  if (!url) {
    return (
      <div
        className="rounded-md border border-slate/30 bg-white p-8 text-center"
        role="status"
      >
        <p className="font-[family-name:var(--font-syne)] text-lg font-semibold text-navy">
          Prefer email or a call-back?
        </p>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate">
          Online scheduling is being connected. Reach us anytime at{" "}
          <a
            href={`mailto:${siteConfig.contact.hello}`}
            className="font-semibold text-emerald underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
          >
            {siteConfig.contact.hello}
          </a>
          , or use the button below and we&apos;ll follow up.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${siteConfig.contact.hello}?subject=${encodeURIComponent("Free consultation request")}`}
            className="inline-flex items-center justify-center rounded-md bg-emerald px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
          >
            Email {siteConfig.contact.hello}
          </a>
          <Link
            href="/personal-credit"
            className="text-sm font-semibold text-emerald underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
          >
            Explore personal credit
          </Link>
        </div>
      </div>
    );
  }

  return (
    <iframe
      title="Book a free consultation"
      src={url}
      className="min-h-[700px] w-full rounded-md border border-slate/20 bg-white"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
