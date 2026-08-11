import type { ReactNode } from "react";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function Section({
  eyebrow,
  title,
  children,
  className,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={
        className
          ? `px-6 py-16 md:px-8 md:py-24 ${className}`
          : "px-6 py-16 md:px-8 md:py-24"
      }
    >
      <div className="mx-auto max-w-6xl">
        {eyebrow ? (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-emerald">
            {eyebrow}
          </p>
        ) : null}
        {title ? (
          <h2 className="mb-8 font-[family-name:var(--font-syne)] text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            {title}
          </h2>
        ) : null}
        {children}
      </div>
    </section>
  );
}
