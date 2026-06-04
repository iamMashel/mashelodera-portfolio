# Mashel Odera — Personal site

The personal brand and portfolio of **Mashel Odera**, an AI specialist in Nairobi
who **trains AI, builds with it, and teaches it**. The site sells the work
(AI solutions, AI training & evaluation, frontend, teaching, growth), proves it
with real metrics, and stays human with an "off the clock" world (now, bookshelf,
playground, uses).

**Tech:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · deployed on Vercel.

**Design:** "Studio Warm" — a committed clay/terracotta brand on warm neutrals,
deep espresso-clay drenched hero/footer, Bricolage Grotesque display + Geist text.
Verified toward WCAG 2.2 AA. The full visual system and positioning live in
[`DESIGN.md`](./DESIGN.md) and [`PRODUCT.md`](./PRODUCT.md), and a running log of
what's been built is in [`PROGRESS.md`](./PROGRESS.md).

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
```

## Pages

```
/                  home — hero, trust strip, Train/Build/Teach, work, services,
                   about, journey, engagement, testimonials, writing, contact
/work/[slug]       case studies (Onagi, BizFlow AI, Vibe Coding Snake)
/blog · /blog/...  writing
/more              "Off the clock" index, linking to:
/now               what I'm focused on this month
/bookshelf         reading + honest takes
/playground        side projects, things that made me laugh, anecdotes
/uses              tools, languages, and gear
```

## Editing content

Everything lives in plain data files — no CMS:

- [`src/lib/site.ts`](./src/lib/site.ts) — name, contact (WhatsApp, email,
  booking), socials, the rotating "words of wisdom".
- [`src/lib/content.ts`](./src/lib/content.ts) — pillars, metrics, services,
  skills, journey, testimonials.
- [`src/lib/projects.ts`](./src/lib/projects.ts) — case studies.
- [`src/lib/personal.ts`](./src/lib/personal.ts) — now / bookshelf / playground / uses.
- [`content/blog/*.md`](./content/blog) — blog posts (markdown + frontmatter).

Items marked `// DRAFT` are seed placeholders (example books, testimonials,
some links) to replace with the real thing. Real, CV-backed numbers are not
marked draft.

## Contact form

The contact form posts to a Next.js **Server Action** (`src/app/actions/contact.ts`)
that emails each submission via [Resend](https://resend.com) — same-origin, so the
strict CSP stays intact. It has client + server validation and a honeypot.

To enable sending, set these env vars (locally in `.env.local`, and in Vercel →
Settings → Environment Variables). See [`.env.example`](./.env.example):

- `RESEND_API_KEY` — free key from resend.com.
- `CONTACT_TO` — where submissions land (defaults to the site email).
- `CONTACT_FROM` — sender. `onboarding@resend.dev` works with no domain setup;
  switch to a verified-domain address later.

Until `RESEND_API_KEY` is set, the form validates but politely tells visitors to
use WhatsApp/email instead (it never silently fails).

## Deployment

Deployed to **Vercel** with push-to-deploy from this repository: every push to
`main` ships to production, and pull requests get preview URLs. Security headers
(CSP, HSTS, X-Frame-Options) are configured in [`next.config.ts`](./next.config.ts).

## License

© Mashel Odera. All rights reserved.
