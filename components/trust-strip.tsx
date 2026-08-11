import { disclaimers } from "@/lib/copy/compliance";

const points = [
  {
    title: "Process clarity",
    body: "Know what happens next — priorities, timelines, and ownership at each step.",
  },
  {
    title: "Education-first",
    body: "We explain Build, Repair, and Monitor so you can make informed decisions.",
  },
  {
    title: "Book a human consult",
    body: "Talk with a person about your goals before you commit to a plan.",
  },
] as const;

export function TrustStrip() {
  return (
    <aside className="border-y border-navy/10 bg-white px-6 py-12 md:px-8">
      <div className="mx-auto max-w-6xl">
        <ul className="grid gap-8 md:grid-cols-3">
          {points.map((point) => (
            <li key={point.title}>
              <h3 className="mb-2 font-[family-name:var(--font-syne)] text-lg font-semibold text-navy">
                {point.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate">{point.body}</p>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-xs leading-relaxed text-slate">
          {disclaimers.resultsVary}
        </p>
      </div>
    </aside>
  );
}
