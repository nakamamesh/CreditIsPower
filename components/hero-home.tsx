import Image from "next/image";
import Link from "next/link";
import { CtaButton } from "@/components/cta-button";
import { FadeIn } from "@/components/motion";
import { siteConfig } from "@/lib/site";

export function HeroHome() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden bg-navy text-white md:min-h-[88vh]">
      <Image
        src="/images/theme-05-relief.png"
        alt="Man stepping outside after a consultation, looking calm and ready for the next step"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_30%]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(115deg,rgba(11,31,58,0.92)_0%,rgba(11,31,58,0.78)_42%,rgba(13,148,136,0.35)_140%)]"
      />
      <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-6 pb-20 pt-16 md:min-h-[88vh] md:justify-center md:px-8 md:pb-28 md:pt-24">
        <FadeIn>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-soft">
            50-Point Proven Plan
          </p>
          <h1 className="font-[family-name:var(--font-syne)] text-4xl font-bold tracking-tight md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mt-6 max-w-2xl font-[family-name:var(--font-syne)] text-2xl font-semibold leading-snug text-white md:text-3xl">
            Credit that unlocks lower rates, better approvals, and real
            options.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Build, repair, and monitor your personal credit — with a clear
            plan you can act on.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <CtaButton href="/book">Book Free Consultation</CtaButton>
            <Link
              href="/50-point-plan"
              className="text-sm font-semibold text-emerald-soft underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-soft"
            >
              See the 50-Point Plan
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
