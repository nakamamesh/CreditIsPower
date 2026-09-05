import Link from "next/link";
import { disclaimers } from "@/lib/copy/compliance";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 md:px-8">
        <div>
          <p className="font-[family-name:var(--font-syne)] text-xl font-semibold">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/75">
            {siteConfig.tagline} Personal and business credit education with a
            clear path to book a free consult.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-soft">
            Explore
          </p>
          <ul className="space-y-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/85 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-soft">
            Legal
          </p>
          <ul className="space-y-2">
            {siteConfig.legalNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/85 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-soft"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-soft">
            Contact
          </p>
          <ul className="space-y-2 text-sm text-white/85">
            <li>
              <Link
                href="/book"
                className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-soft"
              >
                Book a free call
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.hello}`}
                className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-soft"
              >
                {siteConfig.contact.hello}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.contact.privacy}`}
                className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-soft"
              >
                {siteConfig.contact.privacy}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs leading-relaxed text-white/55">
            {siteConfig.mailingAddressNote}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 md:px-8">
        <div className="mx-auto max-w-6xl space-y-3 text-xs leading-relaxed text-white/60">
          <p>{disclaimers.croAFooter}</p>
          <p>{disclaimers.resultsVary}</p>
          <p>
            We do not sell your personal information.{" "}
            <Link
              href="/legal/do-not-sell"
              className="text-white/80 underline-offset-2 hover:underline"
            >
              Do Not Sell or Share
            </Link>
            {" · "}
            <Link
              href="/legal/privacy"
              className="text-white/80 underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
