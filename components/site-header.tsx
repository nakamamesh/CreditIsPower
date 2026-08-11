"use client";

import Link from "next/link";
import { useState } from "react";
import { CtaButton } from "@/components/cta-button";
import { siteConfig } from "@/lib/site";

type SiteHeaderProps = {
  variant?: "solid" | "overlay";
};

export function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const primary = siteConfig.nav.find((item) => "primary" in item && item.primary);
  const links = siteConfig.nav.filter((item) => !("primary" in item && item.primary));

  const shell =
    variant === "overlay"
      ? "sticky top-0 z-50 border-b border-white/10 bg-navy/70 text-white backdrop-blur-md"
      : "sticky top-0 z-50 border-b border-white/10 bg-navy text-white";

  return (
    <header className={shell}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-syne)] text-lg font-semibold tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-soft"
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/85 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-soft"
            >
              {item.label}
            </Link>
          ))}
          {primary ? (
            <CtaButton href={primary.href}>{primary.label}</CtaButton>
          ) : null}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-white/25 px-3 py-2 text-sm font-medium text-white md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-soft"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {links.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-1 text-sm font-medium text-white/90"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {primary ? (
              <li className="pt-2">
                <CtaButton href={primary.href} className="w-full">
                  {primary.label}
                </CtaButton>
              </li>
            ) : null}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
