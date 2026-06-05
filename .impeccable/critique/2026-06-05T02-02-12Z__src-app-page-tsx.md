---
target: the homepage
total_score: 32
p0_count: 0
p1_count: 2
timestamp: 2026-06-05T02-02-12Z
slug: src-app-page-tsx
---
# Critique — Homepage (src/app/page.tsx)

## Design Health: 32/40 (Good)

| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of status | 3 | Strong (hover, active nav, form pending, toasts, scroll bar); visitor counter hidden until store connected |
| 2 | Match real world | 4 | Plain language, WhatsApp-first matches audience |
| 3 | User control | 3 | Nav, ⌘K, dropdown, back-to-top; n/a undo on marketing |
| 4 | Consistency | 3 | Very consistent tokens; the hairline card-grid is *over*-reused |
| 5 | Error prevention | 3 | Contact form validated; little else to guard |
| 6 | Recognition | 4 | Everything visible; ⌘K + dropdown aid discovery |
| 7 | Flexibility | 4 | ⌘K palette, dropdown, multiple paths |
| 8 | Aesthetic/minimalist | 2 | Weakest: 13+ sections, repeated card grids, multiple CTAs; page does a lot |
| 9 | Error recovery | 3 | Form errors clear, playful 404 |
| 10 | Help/docs | 3 | FAQ section, clear copy |

## AI-slop verdict
Passes. Committed clay identity (not generic-dark-dev, not beige-AI, not editorial-serif), real photos + real metrics, bespoke hero motion. Detector: 0 hits. Residual tells: page length + repeated hairline card-grid rhetoric across pillars/services/teaser/engagement/comparison.

## Priority issues
- [P1] Section sprawl / aesthetic-minimalist. 13+ sections (~13000px). Homepage = hero+trust+pillars+work+CTA+services+tiers+about+journey+engagement+testimonials+CTA+writing+personal+newsletter+FAQ+contact. The spike risks dilution; visitors may not reach contact. Fix: distill/merge (journey lives on /timeline; engagement vs ways-to-engage overlap; one of the two CTA bands is redundant). → /impeccable distill
- [P1] Repeated card-grid pattern. Pillars, services, personal teaser, engagement, comparison all use the same gap-px hairline-bordered grid → monotony, borderline "identical card grids". Fix: vary 1-2 sections' composition. → /impeccable layout
- [P2] CTA repetition. "Start a project / Message me" appears ~5x (hero ×2, work CTA band, services cell, testimonials CTA band, contact). CTA fatigue. Fix: cut to 2-3 placed beats. → /impeccable distill
- [P2] Placeholder testimonials live ("Client name"). Fabricated-looking social proof on a public page undercuts trust. Fix: hide section until real quotes exist. → content
- [P2] Stats row borderline hero-metric template (Top 10% / −25% / 200+ / 2 degrees). Restrained, but closest to the banned cliché. → keep, watch
- [P3] Uniform section-heading cadence (every section = h2 + right-aligned description). → /impeccable typeset

## What's working
- Distinctive committed clay identity; genuinely not AI-slop.
- Show-don't-claim: real photos + real CV metrics + a live client case study.
- Hero spike ("train/build/teach") with bespoke mask-rise motion.
- WhatsApp-first conversion matches the Africa-rooted SMB audience.

## Persona flags
- Riley (stress): placeholder testimonials read as fake; counter hidden (intended); form needs key (fails gracefully).
- Casey (mobile): long scroll; comparison table horizontal-scrolls; WhatsApp CTAs are thumb-friendly.
- Jordan (first-timer): spike + CTA obvious in 5s; good.
