import Link from "next/link";
import type { ReactNode } from "react";

const ctaClassName =
  "inline-flex items-center justify-center rounded-md bg-emerald px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function CtaButton({ href, children, className }: CtaButtonProps) {
  return (
    <Link
      href={href}
      className={className ? `${ctaClassName} ${className}` : ctaClassName}
    >
      {children}
    </Link>
  );
}

export { ctaClassName };
