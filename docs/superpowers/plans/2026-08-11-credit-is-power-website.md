# Credit is Power Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ship a CROA-conscious, conversion-focused Next.js marketing site for Credit is Power that books free consultations, with personal credit as the homepage focus and a separate business-credit journey.

**Architecture:** Static-first Next.js App Router site. Shared layout (nav/footer/tokens), page sections as focused components, Calendly on `/book`, legal routes for disclosures. No auth, no payments, no bureau APIs in V1.

**Tech Stack:** Next.js 15 (App Router) + TypeScript + Tailwind CSS 3 + Framer Motion + Vitest (copy/compliance helpers) + next/font (Syne + Source Sans 3)

## Global Constraints

- Palette only: navy `#0B1F3A`, emerald `#0D9488`, emerald-soft `#5EEAD4`, cloud `#F7F9FC`, ink `#0A0F1A`, slate `#64748B`, gold `#C6A75E`, white `#FFFFFF`
- Primary CTA label exact: `Book Free Call` (nav) / page CTAs may say `Book Free Consultation` linking to `/book`
- Forbidden copy: guaranteed score lifts; delete accurate negatives; guaranteed approvals; illegal advance fees; fake scarcity; fabricated testimonials
- Required near claims: results vary; consumers may dispute free themselves (on repair sections)
- “50-Point Proven Plan” = methodology name, never “+50 points guaranteed”
- Home = personal credit focus; business only on `/business-credit` (+ nav link)
- Calendly URL from `process.env.NEXT_PUBLIC_CALENDLY_URL` (fallback placeholder UI if missing)
- Project root: `/Users/i.j.maha/CreditIsPower` (do not modify MedBillCombat app code)
- Prefer focused files; no Inter/Roboto as brand faces
- Respect `prefers-reduced-motion`

## File map

```
CreditIsPower/
  app/
    layout.tsx
    page.tsx                          # Home
    globals.css
    personal-credit/page.tsx
    business-credit/page.tsx
    50-point-plan/page.tsx
    book/page.tsx
    legal/privacy/page.tsx
    legal/terms/page.tsx
    legal/disclosures/page.tsx
  components/
    site-header.tsx
    site-footer.tsx
    cta-button.tsx
    section.tsx
    benefit-grid.tsx
    pathway-cards.tsx
    how-it-works.tsx
    trust-strip.tsx
    hero-home.tsx
    calendly-embed.tsx
    motion.tsx
  lib/
    site.ts                           # nav, brand, env
    copy/compliance.ts                # shared disclaimer strings
    copy/benefits.ts                  # personal + business benefit lists
  tests/
    compliance.test.ts
    site-config.test.ts
  public/
    .gitkeep
  .env.example
  package.json
  tailwind.config.ts
  tsconfig.json
  next.config.mjs
  vitest.config.ts
  postcss.config.mjs
```

---

### Task 1: Scaffold Next.js app + design tokens

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.mjs`, `postcss.config.mjs`, `tailwind.config.ts`, `vitest.config.ts`, `.env.example`, `app/globals.css`, `app/layout.tsx`, `lib/site.ts`, `tests/site-config.test.ts`

**Interfaces:**
- Produces: `siteConfig` from `lib/site.ts` with `{ name, tagline, nav, calendlyUrl }`
- Produces: Tailwind theme colors matching Global Constraints

- [ ] **Step 1: Write failing config test**

Create `tests/site-config.test.ts`:

```ts
import { describe, it, expect } from "vitest";
import { siteConfig } from "../lib/site";

describe("siteConfig", () => {
  it("brands Credit is Power and exposes book path", () => {
    expect(siteConfig.name).toBe("Credit is Power");
    expect(siteConfig.nav.some((n) => n.href === "/book")).toBe(true);
  });
});
```

- [ ] **Step 2: Run test — expect fail**

Run: `npx vitest run tests/site-config.test.ts`
Expected: FAIL (module not found / no package)

- [ ] **Step 3: Scaffold packages and configs**

`package.json` scripts: `dev`, `build`, `start`, `lint`, `test`. Dependencies: `next`, `react`, `react-dom`, `framer-motion`. Dev: `typescript`, `tailwindcss`, `postcss`, `autoprefixer`, `vitest`, `@vitejs/plugin-react`, `eslint`, `eslint-config-next`.

`tailwind.config.ts` extend colors:

```ts
colors: {
  navy: "#0B1F3A",
  emerald: "#0D9488",
  "emerald-soft": "#5EEAD4",
  cloud: "#F7F9FC",
  ink: "#0A0F1A",
  slate: "#64748B",
  gold: "#C6A75E",
}
```

`lib/site.ts`:

```ts
export const siteConfig = {
  name: "Credit is Power",
  tagline: "Build. Repair. Monitor.",
  nav: [
    { label: "Personal", href: "/personal-credit" },
    { label: "Business", href: "/business-credit" },
    { label: "50-Point Plan", href: "/50-point-plan" },
    { label: "Book Free Call", href: "/book", primary: true },
  ],
  get calendlyUrl() {
    return process.env.NEXT_PUBLIC_CALENDLY_URL ?? "";
  },
} as const;
```

`.env.example`:

```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link
```

`app/globals.css`: Tailwind directives + `body { @apply bg-cloud text-ink antialiased; }`

`app/layout.tsx`: load Syne + Source_Sans_3 from `next/font/google`, set metadata title template `%s | Credit is Power`, wrap children.

Minimal `app/page.tsx` placeholder: `<main><h1>Credit is Power</h1></main>` so build works.

- [ ] **Step 4: Install and re-run test**

Run: `npm install && npx vitest run tests/site-config.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "chore: scaffold Next.js app with Credit is Power tokens"
```

---

### Task 2: Compliance copy module + tests

**Files:**
- Create: `lib/copy/compliance.ts`, `lib/copy/benefits.ts`, `tests/compliance.test.ts`

**Interfaces:**
- Produces: `disclaimers.resultsVary`, `disclaimers.selfDispute`, `disclaimers.notLender`, `disclaimers.planNotScorePromise`
- Produces: `personalBenefits: { title, body }[]`, `businessBenefits: { title, body }[]`

- [ ] **Step 1: Write failing compliance tests**

```ts
import { describe, it, expect } from "vitest";
import { disclaimers } from "../lib/copy/compliance";
import { personalBenefits, businessBenefits } from "../lib/copy/benefits";

describe("disclaimers", () => {
  it("states results vary and self-dispute rights", () => {
    expect(disclaimers.resultsVary.toLowerCase()).toContain("results vary");
    expect(disclaimers.selfDispute.toLowerCase()).toMatch(/dispute|free/);
    expect(disclaimers.planNotScorePromise.toLowerCase()).toContain("not a guarantee");
  });

  it("forbids guarantee language inside benefit titles", () => {
    const blob = [...personalBenefits, ...businessBenefits]
      .map((b) => `${b.title} ${b.body}`)
      .join(" ")
      .toLowerCase();
    expect(blob).not.toMatch(/guaranteed|guarantee \+|wipe your|delete all/);
  });
});
```

- [ ] **Step 2: Run — expect fail**

Run: `npx vitest run tests/compliance.test.ts`
Expected: FAIL module not found

- [ ] **Step 3: Implement copy modules**

`lib/copy/compliance.ts` — exact strings:

```ts
export const disclaimers = {
  resultsVary:
    "Individual results vary. Credit is Power does not guarantee score increases or approval for any credit product.",
  selfDispute:
    "You have the right to dispute inaccurate or incomplete information on your credit reports with the credit bureaus at no cost.",
  notLender:
    "Credit is Power is not a credit repair guarantee service in the sense of promising outcomes, not a lender, and not a consumer reporting agency. We are not Experian, Equifax, TransUnion, or FICO.",
  planNotScorePromise:
    "The 50-Point Proven Plan is our structured methodology name — not a promise that your score will rise by 50 points.",
  croAFooter:
    "Important: Federal law gives you rights when dealing with credit repair organizations, including a three-business-day right to cancel covered contracts. See Disclosures for details.",
} as const;
```

`lib/copy/benefits.ts` — personal: lower interest; higher approval odds; housing options; insurance (word as “in many states, insurers may use credit-based insurance scores”); negotiating power; more options / less stress. Business: vendor Net-30 potential; separate business file; reduce reliance on personal guarantees over time; financing capacity; supplier leverage.

- [ ] **Step 4: Run tests — expect pass**

Run: `npx vitest run tests/compliance.test.ts`
Expected: PASS

- [ ] **Step 5: Commit**

```bash
git add lib/copy tests/compliance.test.ts
git commit -m "feat: add compliant benefit and disclaimer copy modules"
```

---

### Task 3: Chrome — header, footer, CTA, section primitives

**Files:**
- Create: `components/cta-button.tsx`, `components/section.tsx`, `components/site-header.tsx`, `components/site-footer.tsx`, `components/trust-strip.tsx`, `components/motion.tsx`
- Modify: `app/layout.tsx` (mount header/footer)

**Interfaces:**
- Produces: `<CtaButton href="/book">`, `<Section eyebrow title children>`, `<SiteHeader />`, `<SiteFooter />`, `<TrustStrip />`, `FadeIn` wrapper using framer-motion with reduced-motion passthrough

- [ ] **Step 1: Implement primitives**

`cta-button.tsx`: Link styled `bg-emerald text-white hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald`.

`site-header.tsx`: sticky, navy on home hero overlay support via `variant?: "solid" | "overlay"`, desktop nav from `siteConfig.nav`, mobile menu button revealing same links. Primary nav item uses CtaButton styles.

`site-footer.tsx`: navy bg, brand, nav mirrors, links to `/legal/privacy`, `/legal/terms`, `/legal/disclosures`, render `disclaimers.croAFooter` + `disclaimers.resultsVary` in small type.

`trust-strip.tsx`: three short trust points (process clarity, education-first, book a human consult) + micro disclaimer.

`motion.tsx`:

```tsx
"use client";
import { motion, useReducedMotion } from "framer-motion";

export function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.div>
  );
}
```

Wire header/footer in `layout.tsx`.

- [ ] **Step 2: Smoke build**

Run: `npm run build`
Expected: success (placeholder home OK)

- [ ] **Step 3: Commit**

```bash
git add components app/layout.tsx
git commit -m "feat: add site chrome, CTA, and motion primitives"
```

---

### Task 4: Home page (personal focus)

**Files:**
- Create: `components/hero-home.tsx`, `components/benefit-grid.tsx`, `components/pathway-cards.tsx`, `components/how-it-works.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `personalBenefits`, `disclaimers`, `FadeIn`, `CtaButton`
- Produces: complete home matching spec section order

- [ ] **Step 1: Implement section components**

Hero (full-bleed navy gradient): brand as H1 “Credit is Power”; eyebrow “50-Point Proven Plan”; headline about unlocking rates/approvals/options; supporting sentence on build/repair/monitor; primary CTA to `/book`; secondary text link to `/50-point-plan`. No benefit cards inside hero.

`BenefitGrid`: map `personalBenefits` with gold/emerald left rule — section title “What’s in it for you”.

`PathwayCards`: three links — Build, Repair, Monitor → `/personal-credit#build` etc.

`HowItWorks`: 4 steps — Share goals → Review priorities → Walk the 50-Point Plan → Ongoing build/repair/monitor support. End CTA.

Home also includes TrustStrip + final CTA band + `disclaimers.resultsVary` visible.

- [ ] **Step 2: Assemble `app/page.tsx`**

Metadata: `title: "Personal Credit Building, Repair & Monitoring"`, description consumer-benefit focused.

- [ ] **Step 3: Build + visual check**

Run: `npm run build && npm run dev` — open `/`
Verify: brand in hero, benefits below fold, CTA → `/book`

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx components
git commit -m "feat: ship personal-credit-focused homepage"
```

---

### Task 5: Personal, business, and 50-point plan pages

**Files:**
- Create: `app/personal-credit/page.tsx`, `app/business-credit/page.tsx`, `app/50-point-plan/page.tsx`

**Interfaces:**
- Anchors on personal: `id="build"`, `id="repair"`, `id="monitor"`
- Each page ends with Book CTA + relevant disclaimers

- [ ] **Step 1: Personal credit page**

Sections: intro WIIFM; Build; Repair (include `disclaimers.selfDispute`); Monitor; debt mediation short callout; FAQ (3–5 compliant Qs); CTA.

- [ ] **Step 2: Business credit page**

Use `businessBenefits`; explain separation from personal; Net-30 / vendor path education (no guarantees); CTA for business consult booking (`/book`).

- [ ] **Step 3: 50-point plan page**

Lead with `disclaimers.planNotScorePromise`; outline phases (Diagnose → Prioritize → Dispute/clean up inaccuracies → Build positive history → Monitor & mediate debt where relevant); CTA to book live walkthrough.

- [ ] **Step 4: Build**

Run: `npm run build`
Expected: all routes compile

- [ ] **Step 5: Commit**

```bash
git add app/personal-credit app/business-credit app/50-point-plan
git commit -m "feat: add personal, business, and 50-point plan pages"
```

---

### Task 6: Book page + Calendly embed

**Files:**
- Create: `components/calendly-embed.tsx`, `app/book/page.tsx`

**Interfaces:**
- Consumes: `siteConfig.calendlyUrl`
- Produces: iframe embed when URL set; else accessible fallback (“Add NEXT_PUBLIC_CALENDLY_URL”) + mailto/phone placeholders from optional env later

- [ ] **Step 1: Implement embed**

```tsx
"use client";
export function CalendlyEmbed({ url }: { url: string }) {
  if (!url) {
    return (
      <div className="rounded-md border border-slate/30 bg-white p-8 text-center">
        <p className="text-ink font-medium">Scheduling calendar coming online.</p>
        <p className="mt-2 text-slate text-sm">Set NEXT_PUBLIC_CALENDLY_URL to enable booking.</p>
      </div>
    );
  }
  return (
    <iframe
      title="Book a free consultation"
      src={url}
      className="w-full min-h-[700px] rounded-md border border-slate/20 bg-white"
    />
  );
}
```

Page copy: what happens next (15–30 min call, goals, plan fit); TrustStrip; `disclaimers.resultsVary`.

- [ ] **Step 2: Manual check**

Run dev server; `/book` shows fallback without env; with env in `.env.local` shows iframe.

- [ ] **Step 3: Commit**

```bash
git add app/book components/calendly-embed.tsx .env.example
git commit -m "feat: add booking page with Calendly embed"
```

---

### Task 7: Legal pages

**Files:**
- Create: `app/legal/privacy/page.tsx`, `app/legal/terms/page.tsx`, `app/legal/disclosures/page.tsx`

**Interfaces:**
- Disclosures must include: results vary; self-dispute rights; plan ≠ score promise; not lender/CRA; CROA three-business-day cancellation summary for covered contracts; no advance fee for credit repair services before services are fully performed (TSR/CROA-aware wording); contact placeholder

- [ ] **Step 1: Write three legal pages** as readable prose sections (not dense walls); last updated date `August 11, 2026`.

- [ ] **Step 2: Verify footer links resolve** — click Privacy/Terms/Disclosures in browser or curl routes.

- [ ] **Step 3: Commit**

```bash
git add app/legal
git commit -m "feat: add privacy, terms, and CROA-aware disclosures"
```

---

### Task 8: Polish, a11y, QA pass

**Files:**
- Modify: any components failing contrast/focus/spacing
- Create: `public/favicon.ico` or SVG favicon via `app/icon.tsx` (simple navy/emerald mark)

- [ ] **Step 1: Run full test + build**

Run: `npm test && npm run build`
Expected: all PASS / compile

- [ ] **Step 2: Checklist QA**

- [ ] Home books in ≤2 clicks  
- [ ] Personal vs business separated  
- [ ] No forbidden claim strings (`rg -i "guaranteed score|delete all|wipe your credit" app components lib`) — expect no matches  
- [ ] Keyboard focus visible on CTA  
- [ ] Legal linked sitewide  
- [ ] Reduced motion path doesn’t crash  

- [ ] **Step 3: Final commit**

```bash
git add -A
git commit -m "chore: a11y polish and launch QA for Credit is Power V1"
```

---

## Spec coverage checklist (self-review)

| Spec requirement | Task |
|------------------|------|
| Home personal focus + benefits | Task 4 |
| Build/Repair/Monitor | Tasks 4–5 |
| Business separate page | Task 5 |
| 50-point plan page | Task 5 |
| Book / Calendly | Task 6 |
| Legal / CROA disclosures | Task 7 |
| Navy+Emerald + fonts | Task 1 |
| Full-bleed hero | Task 4 |
| Motion 2–3 | Tasks 3–4 |
| Compliance copy rules | Task 2 |
| Competitor commons applied | Tasks 3–7 (CTA, trust, education, split personal/business) |

## Placeholder scan

No TBD steps. Owner-supplied Calendly URL handled via env + fallback UI (Task 6).
