import Link from "next/link";
import { FadeIn } from "@/components/motion";
import { Section } from "@/components/section";

const pathways = [
  {
    href: "/personal-credit#build",
    title: "Build",
    body: "Establish positive history, healthy utilization habits, and long-term score strength.",
  },
  {
    href: "/personal-credit#repair",
    title: "Repair",
    body: "Identify and dispute inaccurate or incomplete items that may be holding you back.",
  },
  {
    href: "/personal-credit#monitor",
    title: "Monitor",
    body: "Stay ahead of changes, new inquiries, and surprises before you apply.",
  },
] as const;

export function PathwayCards() {
  return (
    <Section
      eyebrow="Personal credit"
      title="Build. Repair. Monitor."
      className="bg-white"
    >
      <ul className="grid gap-6 md:grid-cols-3">
        {pathways.map((item, index) => (
          <FadeIn key={item.href} delay={index * 0.06}>
            <li>
              <Link
                href={item.href}
                className="group block h-full rounded-md border border-navy/10 bg-cloud p-6 transition hover:border-emerald focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald"
              >
                <h3 className="font-[family-name:var(--font-syne)] text-xl font-semibold text-navy group-hover:text-emerald">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  {item.body}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-emerald">
                  Learn more →
                </span>
              </Link>
            </li>
          </FadeIn>
        ))}
      </ul>
    </Section>
  );
}
