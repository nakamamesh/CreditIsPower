import { FadeIn } from "@/components/motion";
import { Section } from "@/components/section";
import type { Benefit } from "@/lib/copy/benefits";

type BenefitGridProps = {
  benefits: Benefit[];
  title?: string;
  eyebrow?: string;
};

export function BenefitGrid({
  benefits,
  title = "What's in it for you",
  eyebrow = "Benefits of stronger credit",
}: BenefitGridProps) {
  return (
    <Section eyebrow={eyebrow} title={title}>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <FadeIn key={benefit.title} delay={index * 0.05}>
            <li className="h-full border-l-[3px] border-emerald bg-white py-1 pl-5 pr-2">
              <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-navy">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">
                {benefit.body}
              </p>
            </li>
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
}
