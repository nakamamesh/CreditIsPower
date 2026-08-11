import { CtaButton } from "@/components/cta-button";
import { FadeIn } from "@/components/motion";
import { Section } from "@/components/section";

const steps = [
  {
    title: "Share your goals",
    body: "Tell us what matters — better rates, housing, business growth, or peace of mind.",
  },
  {
    title: "Review priorities",
    body: "We help you see what to tackle first across build, repair, and monitoring.",
  },
  {
    title: "Walk the 50-Point Plan",
    body: "A structured methodology tailored to your situation — not a score guarantee.",
  },
  {
    title: "Ongoing support",
    body: "Keep building, repairing where appropriate, and monitoring progress over time.",
  },
] as const;

export function HowItWorks() {
  return (
    <Section eyebrow="How it works" title="From first call to clear next steps">
      <ol className="grid gap-8 md:grid-cols-2">
        {steps.map((step, index) => (
          <FadeIn key={step.title} delay={index * 0.05}>
            <li className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy font-[family-name:var(--font-syne)] text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-syne)] text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  {step.body}
                </p>
              </div>
            </li>
          </FadeIn>
        ))}
      </ol>
      <div className="mt-12">
        <CtaButton href="/book">Book Free Consultation</CtaButton>
      </div>
    </Section>
  );
}
