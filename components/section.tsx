import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "light" | "dark";
};

export function Section({
  eyebrow,
  title,
  children,
  className,
  id,
  tone = "light",
}: SectionProps) {
  const eyebrowClass =
    tone === "dark"
      ? "mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-soft"
      : "mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-emerald";
  const titleClass =
    tone === "dark"
      ? "mb-8 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-white md:text-4xl"
      : "mb-8 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-navy md:text-4xl";

  return (
    <section
      id={id}
      className={
        className
          ? `scroll-mt-24 px-6 py-16 md:px-8 md:py-24 ${className}`
          : "scroll-mt-24 px-6 py-16 md:px-8 md:py-24"
      }
    >
      <div className="mx-auto max-w-6xl">
        {eyebrow ? <p className={eyebrowClass}>{eyebrow}</p> : null}
        {title ? <h2 className={titleClass}>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}
