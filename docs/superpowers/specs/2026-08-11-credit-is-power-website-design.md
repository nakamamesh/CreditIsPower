# Credit is Power — Website Design Spec

**Date:** 2026-08-11  
**Status:** Awaiting user review before implementation plan  
**Related research:** `docs/research/2026-08-11-top-credit-sites-commons-report.md`

## Decisions locked

| Decision | Choice |
|----------|--------|
| Primary CTA | Book free consultation / discovery call |
| Project home | New Next.js project (`/Users/i.j.maha/CreditIsPower`) |
| V1 scope | Conversion marketing site |
| Market | United States — national (CROA / FTC / TSR compliant copy) |
| Booking | Calendly / Cal.com embed (URL provided later) |
| Approach | A — Conversion site (not product dashboard, not dual-ad funnels) |
| Visual system | A — Navy + Emerald |
| Hero | Full-bleed power hero |
| Extra V1 page | `/50-point-plan` (expanded methodology) |

## Goals

1. Convert visitors → **booked appointments**.  
2. Home focuses on **personal** credit: build, repair, monitor.  
3. Highlight **consumer benefits** of stronger credit.  
4. Own separate **business credit** journey.  
5. Stay **legally cautious** (no illegal promises / advance-fee language).

## Non-goals (V1)

- Member portals, payments, live bureau pulls, login  
- Blog CMS / content hub (phase 2)  
- Interactive score simulator as real product  
- Multi-language

## Information architecture

```
/                      Home (personal focus)
/personal-credit       Build · Repair · Monitor deep dive
/business-credit       Business benefits & path
/50-point-plan         Methodology (not a score guarantee)
/book                  Calendly embed + trust
/legal/privacy
/legal/terms
/legal/disclosures     CROA rights, results vary, not a lender/bureau
```

**Nav:** Personal | Business | 50-Point Plan | Book Free Call (primary, sticky)  
**Footer:** Company blurb, nav mirrors, legal links, compliance strip.

## Conversion flow

Every key page ends with Book CTA → `/book`.  
Header CTA always available.  
Optional later: UTM-aware thank-you microcopy on `/book`.

## Visual design system

### Color

| Token | Hex | Use |
|-------|-----|-----|
| navy | `#0B1F3A` | Authority, hero, footer |
| emerald | `#0D9488` | Primary CTA, growth |
| emerald-soft | `#5EEAD4` | Accents on navy |
| cloud | `#F7F9FC` | Page background |
| ink | `#0A0F1A` | Body text |
| slate | `#64748B` | Secondary text |
| gold | `#C6A75E` | Milestone / plan accents only |
| white | `#FFFFFF` | Surfaces |

Avoid: purple gradients, cream+terracotta AI default, Karma lime clone, dark-mode-only.

### Typography

- **Display:** Syne (or Plus Jakarta Sans) — brand wordmark / headlines  
- **Body:** Source Sans 3 — long-form readability  
- Not Inter / Roboto / Arial as primary brand faces

### Layout signature

Full-bleed navy atmospheric hero with brand as hero-level signal; cool cloud body sections; emerald CTA ribbon. Benefits use calm interaction tiles *below* hero (not in hero).

### Motion (2–3 intentional)

1. Hero text + CTA fade/rise on load  
2. Benefits row stagger on scroll  
3. CTA hover / focus ring polish  

Respect `prefers-reduced-motion`.

## Page specs

### Home `/`

1. **Hero** — “Credit is Power” brand; outcome headline; one support line; Book Free Call; 50-Point Plan eyebrow.  
2. **Benefits of high scores** (consumer WIIFM)  
3. **Build · Repair · Monitor** pathways → personal page anchors  
4. **50-Point Plan teaser** → `/50-point-plan`  
5. **How it works** (3–4 steps → book)  
6. **Trust + compliance** microcopy  
7. **Final Book CTA**

Debt mediation: mentioned as supporting service (not equal-weight home hero).

### Personal `/personal-credit`

- Build: positive history, utilization habits education, builder products framing (no affiliate spam)  
- Repair: dispute inaccurate / unverifiable items; FCRA education; **you can dispute free yourself**  
- Monitor: alerts, early fraud signals, progress tracking (partner/monitor language if third-party)  
- Benefits refresh + FAQ + Book

### Business `/business-credit`

Benefits: vendor Net-30, separate file, protect personal over time, financing capacity, supplier terms.  
Clear: business credit ≠ personal overnight fix. CTA Book (business consult).

### 50-Point Plan `/50-point-plan`

Proprietary methodology narrative: diagnostic → prioritized actions across build/repair/monitor/debt mediation.  
**Explicit:** “50-Point” names the plan framework — **not a promise of +50 score points.**  
CTA Book to walk the plan live.

### Book `/book`

Calendly embed; what happens next; compliance near calendar; phone/email fallback placeholders.

### Legal

Privacy, Terms, Disclosures (CROA cancellation rights summary, no advance fee before services performed where applicable, results vary, not a CRA/lender, equal credit opportunity where relevant).

## Copy rules (compliance)

**Allowed:** educate benefits; describe process; methodology name; “results vary”; consumer self-help rights.  

**Forbidden:** guaranteed score lifts; wipe accurate negatives; guaranteed approvals; illegal advance-fee offers; fake scarcity; fabricated testimonials; real “client score +X” without substantiation + disclaimer.

**Tone:** Direct, empowering, consumer-first. Power through options — not fear/shame.

## Home benefit list (required)

- Lower interest on auto, cards, mortgages  
- Higher approval odds  
- Better apartment / housing options  
- Potential insurance cost benefits (state-dependent; careful wording)  
- Stronger negotiating position  
- More options / less stress  

## Business benefit list (required)

- Establish / strengthen business credit profile  
- Vendor trade lines / Net-30 potential  
- Separate business from personal over time  
- Capacity for financing & growth  
- Stronger supplier / landlord leverage  

## Stack

- Next.js (App Router) + TypeScript + Tailwind  
- Framer Motion for specified motions  
- Static/SSG where possible  
- Calendly embed (env: `NEXT_PUBLIC_CALENDLY_URL`)  
- Deploy: Vercel-ready  

## Content placeholders (owner-supplied later)

- Calendly URL  
- Phone / email / address if any  
- Real logo asset (text wordmark for V1 OK)  
- Any licenses / bonding numbers for display  
- Proof points that are true and documentable  

## Success criteria

- [ ] Visitor can book a call in ≤2 clicks from home  
- [ ] Personal vs business clearly separated  
- [ ] No forbidden claim language in copy review  
- [ ] Mobile Lighthouse-friendly layout; keyboard focus visible  
- [ ] Legal pages linked sitewide  
- [ ] Matches Navy+Emerald tokens and full-bleed hero direction  

## Implementation note

Next step after user approves this spec: invoke **writing-plans** and build in `CreditIsPower` (not MedBillCombat).
