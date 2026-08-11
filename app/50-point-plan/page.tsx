import type { Metadata } from "next";
import { CtaButton } from "@/components/cta-button";
import { Section } from "@/components/section";
import { disclaimers } from "@/lib/copy/compliance";

export const metadata: Metadata = {
  title: "50-Point Proven Plan",
  description:
    "The Credit is Power 50-Point Proven Plan methodology — diagnose, prioritize, repair inaccuracies, build, and monitor. Not a +50 score promise.",
};

const phases = [
  {
    title: "Diagnose",
    body: "Clarify goals and review what’s on the reports that matter most to your next application or life step.",
  },
  {
    title: "Prioritize",
    body: "Sequence work so high-impact, compliant actions come first — not random disputes or guesswork.",
  },
  {
    title: "Dispute / clean up inaccuracies",
    body: "Address inaccurate, incomplete, or unverifiable items under applicable consumer rights. Accurate negatives are not “wiped.”",
  },
  {
    title: "Build positive history",
    body: "Strengthen the profile with sustainable habits: on-time activity, utilization awareness, and constructive tradelines where appropriate.",
  },
  {
    title: "Monitor & mediate debt where relevant",
    body: "Track changes, stay alert to new risks, and discuss debt mediation when balances block progress.",
  },
] as const;

export default function FiftyPointPlanPage() {
  return (
    <main>
      <Section
        eyebrow="Methodology"
        title="The 50-Point Proven Plan"
        className="bg-navy"
        tone="dark"
      >
        <p className="max-w-2xl text-base leading-relaxed text-white/80">
          A structured playbook across personal credit build, repair, monitoring,
          and — when needed — debt mediation.
        </p>
        <p className="mt-4 max-w-2xl rounded-md border border-emerald-soft/30 bg-white/5 p-4 text-sm leading-relaxed text-emerald-soft">
          {disclaimers.planNotScorePromise}
        </p>
        <div className="mt-8">
          <CtaButton href="/book">Book a live plan walkthrough</CtaButton>
        </div>
      </Section>

      <Section title="How the plan moves">
        <ol className="space-y-8">
          {phases.map((phase, index) => (
            <li key={phase.title} className="flex gap-5 border-l-[3px] border-gold pl-5">
              <span className="font-[family-name:var(--font-syne)] text-sm font-bold text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy">
                  {phase.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate">
                  {phase.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-2xl text-sm text-slate">{disclaimers.selfDispute}</p>
        <p className="mt-3 max-w-2xl text-sm text-slate">{disclaimers.resultsVary}</p>
      </Section>

      <Section className="bg-cloud">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-syne)] text-3xl font-semibold text-navy">
            Walk the plan with us
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate">
            Book a free consultation and we&apos;ll apply the methodology to your
            situation.
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="/book">Book Free Consultation</CtaButton>
          </div>
        </div>
      </Section>
    </main>
  );
}
