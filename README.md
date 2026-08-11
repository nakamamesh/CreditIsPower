# Credit is Power

Conversion website for personal & business credit building, repair, monitoring, and debt mediation.

## Quick start

```bash
npm install
cp .env.example .env.local   # then set NEXT_PUBLIC_CALENDLY_URL
npm run dev                  # http://localhost:3000
```

## Owner setup (required before ads / enrollment)

1. **Calendly** — Set `NEXT_PUBLIC_CALENDLY_URL` in `.env.local` and production hosting.
2. **Email domain** — Verify ownership of `creditispower.com` and create deliverable inboxes:
   - `hello@creditispower.com` (general / booking fallback)
   - `privacy@creditispower.com`
   - `legal@creditispower.com`
   - `compliance@creditispower.com`
3. **Physical address** — Do not invent an HQ. When the registered entity mailing address is confirmed, add it to legal pages and the footer contact block.
4. **Counsel review** — Have an attorney review Privacy, Terms, and Disclosures before paid acquisition or enrollments.
5. **Deploy** — Vercel (or similar) with the Calendly env var set.

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local server |
| `npm test` | Vitest |
| `npm run build` | Production build |
