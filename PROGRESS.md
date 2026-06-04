# Progress log

A running record of how this site was built, so future-me (and anyone curious)
can see what was done and why. Newest milestones first.

- **Live:** https://mashelodera-portfolio.vercel.app
- **Repo:** https://github.com/iamMashel/mashelodera-portfolio
- **Stack:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Resend · deployed on Vercel (push-to-deploy from `main`).

---

## What the site is now

A personal brand for **Mashel Odera**, an AI specialist in Nairobi who **trains
AI, builds with it, and teaches it**. The front of house sells the work and
proves it with real metrics; the "Off the clock" world keeps it human.

**Design:** "Studio Warm" — a committed clay/terracotta brand on warm neutrals,
with deep espresso-clay drenched bands (hero, contact, footer), Bricolage
Grotesque display + Geist text, and motion that's intentional rather than
decorative.

### Site map
```
/                home — hero, trust strip, Train/Build/Teach, work, services,
                 ways-to-engage table, about, journey, engagement, testimonials,
                 CTA bands, writing, off-the-clock teaser, newsletter, FAQ, contact
/work/[slug]     case studies — Onagi, BizFlow AI, Vibe Coding Snake
/blog · /blog/…  writing (sticky table-of-contents on posts)
/more            "Off the clock" hub, linking to:
/now             what I'm focused on this month
/bookshelf       interactive book grid (genres, search, flip-for-take)
/playground      side projects, podcasts, made-me-laugh, frames gallery, anecdotes
/uses            tools, languages, gear
/lab             interactive experiments (Game of Life, toy tokenizer)
/timeline        the long way round (biology → game dev → AI)
/interesting     curated links
/speaking        talks & workshops, with a "book me" CTA
/recommends      stuff I've tried (verdicts) + friends I vouch for
/colophon        how this site is built
/privacy         privacy policy
```

### Always-on UX
Two-tier nav (utility bar + main bar, active underline), **⌘K command palette**,
scroll-progress bar, back-to-top, toasts, breadcrumbs, a Konami-code easter egg,
and a contact form that emails via Resend.

---

## Milestones (newest first)

### Motion pass (impeccable `animate`)
Replaced the uniform fade-and-rise on every section with a **signature hero
entrance** (headline lines rise from a clipped baseline, the accent glow blooms,
the portrait wipes in, supporting elements cascade), plus FAQ open animation, a
command-palette entrance, and tactile button presses. All reduced-motion safe.

### Real photos
Swapped the stock-feel studio suit shot for **real photos**: a Nairobi portrait
in the hero, a "building toward AGI with friends" photo in About, and a Playground
**gallery** (hike, church grounds, an art/painting afternoon) with a **lightbox**
(prev/next, keyboard, accessible). All EXIF-oriented and optimized with sharp.

### Personality & content
- **Interactive bookshelf** — 28 books across 7 genres, real covers, filter +
  search + flip-for-take.
- **Podcasts** — "In my ears" shelf with real artwork (incl. Dry Bar Comedy).
- **Recommends** — reviews with Loved it / It's fine / Pass verdicts, plus a
  "People I rate" section to promote friends.
- Hobbies woven in (Fez, drawing, hockey), a journey timeline (incl. an honest
  "paying dues at KFC" note), and the motto: *we can all build safe
  superintelligence, one piece at a time.*

### UX patterns (from uxpatterns.dev)
Command palette, FAQ accordion, back-to-top, scroll progress, toasts,
breadcrumbs, a "Ways to engage" comparison table, and a blog reading TOC.

### Creative pages (Chris-Coyier-inspired)
Added `/lab`, `/timeline`, `/interesting`, `/speaking`, `/colophon`, a playful
404 ("This page hallucinated."), the Konami easter egg, and Copy-as
text/Markdown/JSON buttons.

### Contact form
A real form posting to a Next.js **Server Action** that emails via Resend
(client + server validation, honeypot, graceful fallback to WhatsApp/email).

### Nav, footer, privacy
Rebuilt the nav into a two-tier "sells-himself" header, cleaned the footer, and
added a privacy policy. Fixed a blog date bug and duplicate React keys.

### The relaunch
Pivoted from a generic frontend-developer portfolio to the AI-specialist personal
brand: new "Studio Warm" identity, the Train/Build/Teach spike, real CV-backed
metrics, and the full section structure. Docs (README/DESIGN/PRODUCT) updated.

### Foundation
Scaffolded Next.js 16 + Tailwind v4, built the component library and routes,
committed to GitHub, and deployed to Vercel (fixed an "Other"-framework misconfig
and disabled deployment protection so the site is publicly viewable).

---

## Still to do (placeholders to replace)

Items marked `// DRAFT` in the code are seed content to swap for the real thing:
- **Testimonials** (`src/lib/content.ts`) — replace the two placeholder quotes.
- **Friends' shoutouts** (`src/lib/personal.ts` → `shoutouts`) — real names, links,
  and endorsements (links are intentionally empty until then).
- **Book takes & ratings**, **review opinions**, **reels**, and a few **captions** —
  make them truly yours.
- **Booking link** (`src/lib/site.ts` → `bookingUrl`) — paste a Cal.com/Calendly URL
  to light up the "Book a call" button.
- **Resend API key** — add `RESEND_API_KEY` in Vercel to make the contact form
  deliver (see `.env.example`).
- **Custom domain** — point one at Vercel and update `url` in `src/lib/site.ts`.

## Where to edit content
`src/lib/site.ts` (identity, contact, nav), `src/lib/content.ts` (pillars,
metrics, services, journey, FAQ, tiers), `src/lib/projects.ts` (case studies),
`src/lib/personal.ts` (now, bookshelf, podcasts, frames, reviews, shoutouts,
uses), `src/lib/extras.ts` (links, speaking, colophon), `content/blog/*.md`.
