import Link from "next/link";
import type { ReactNode } from "react";

export type LegalTocItem = {
  id: string;
  label: string;
};

type LegalDocProps = {
  eyebrow?: string;
  title: string;
  lastUpdated: string;
  intro?: ReactNode;
  toc?: LegalTocItem[];
  children: ReactNode;
};

export function LegalDoc({
  eyebrow = "Legal",
  title,
  lastUpdated,
  intro,
  toc,
  children,
}: LegalDocProps) {
  return (
    <main className="bg-cloud px-6 py-16 md:px-8 md:py-24">
      <article className="mx-auto max-w-3xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-emerald">
          {eyebrow}
        </p>
        <h1 className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-navy md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-slate">Last updated: {lastUpdated}</p>
        {intro ? (
          <div className="mt-6 space-y-3 text-sm leading-relaxed text-slate">
            {intro}
          </div>
        ) : null}
        {toc && toc.length > 0 ? (
          <nav
            aria-label="On this page"
            className="mt-8 rounded-md border border-navy/10 bg-white p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy">
              On this page
            </p>
            <ol className="mt-3 grid gap-2 text-sm text-slate sm:grid-cols-2">
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="font-medium text-ink underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-slate">
          {children}
        </div>
      </article>
    </main>
  );
}

type LegalSectionProps = {
  id: string;
  title: string;
  children: ReactNode;
};

export function LegalSection({ id, title, children }: LegalSectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
        {title}
      </h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

type LegalLinkProps = {
  href: string;
  children: ReactNode;
};

export function LegalLink({ href, children }: LegalLinkProps) {
  const className =
    "font-medium text-ink underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald";
  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
