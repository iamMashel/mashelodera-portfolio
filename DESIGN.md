# Design

Visual system for the Mashel Odera personal site. Aesthetic lane: **Studio Warm /
Africa-rooted** — a committed clay/terracotta brand on warm neutrals, deep
espresso-clay drenched bands (hero, contact, footer), oversized confident type,
precise motion. Warm and human, but precise. Verified toward WCAG 2.2 AA.

Anti-slop posture: deliberately *not* the generic dark dev-portfolio, *not*
editorial-serif restraint, and *not* a beige AI body. The page background sits
above the cream band (L > 0.97) so it reads clean-white; warmth is carried by the
clay accent, the drenched dark sections, and the copy.

## Theme

Single light theme with deep-clay drenched accent bands. Body is a clean warm-white,
ink is a warm near-black, and clay does the brand work. The dark hero/contact/footer
("surface-deep") give the clay real surface area without tinting the reading canvas.

## Color

All values OKLCH. Strategy: **Committed** — one saturated clay carries the hero,
contact, and footer; neutrals are warm; the accent is used with intent.

| Role | Token | OKLCH | Use |
|---|---|---|---|
| Canvas | `--color-bg` | `oklch(0.992 0.004 72)` | Page background. Clean warm-white, above the beige band. |
| Surface | `--color-surface` | `oklch(0.971 0.008 66)` | Alternating panels. |
| Surface-2 | `--color-surface-2` | `oklch(0.948 0.012 60)` | Nested/hover surfaces. |
| Ink | `--color-ink` | `oklch(0.225 0.015 48)` | Headings + body. Warm near-black. |
| Ink-muted | `--color-ink-muted` | `oklch(0.468 0.019 46)` | Secondary text (AA on canvas). |
| Line | `--color-line` | `oklch(0.888 0.013 62)` | Hairline borders, grid gaps. |
| Ink-invert | `--color-ink-invert` | `oklch(0.252 0.05 40)` | Drenched dark bands (hero, contact, footer). |
| Ink-invert-2 | `--color-ink-invert-2` | `oklch(0.31 0.052 42)` | Raised surfaces on dark. |
| Cream | `--color-cream` | `oklch(0.955 0.013 80)` | Text on dark bands. |
| Cream-muted | `--color-cream-muted` | `oklch(0.795 0.024 72)` | Secondary text on dark. |
| Accent | `--color-accent` | `oklch(0.575 0.158 43)` | Clay brand: buttons, fills, marks. |
| Accent-strong | `--color-accent-strong` | `oklch(0.472 0.146 40)` | Accent-as-text on light (AA), button bg. |
| Accent-bright | `--color-accent-bright` | `oklch(0.66 0.176 47)` | Highlights on dark (e.g. hero verbs), hovers. |
| Accent-wash | `--color-accent-wash` | `oklch(0.948 0.038 52)` | Tinted highlight backgrounds, selection. |
| Ochre | `--color-ochre` | `oklch(0.8 0.116 78)` | Supporting warm tone, sparing, dark surfaces only. |

Contrast rule: muted text never lighter than `--color-ink-muted`; accent-as-text on
light always uses `--color-accent-strong` or darker; `--color-accent-bright` is for
dark surfaces and decoration, never small text on white.

## Typography

Three families (display + body + mono). Identity preserved from the original build.

- **Display** — *Bricolage Grotesque* (variable, 400–800). Headlines, hero, section
  titles. Characterful humanist grotesque; carries the warm, confident voice.
- **Body / UI** — *Geist Sans*. Neutral, highly legible workhorse.
- **Mono** — *Geist Mono*. Small technical labels, kickers, metadata. Sparing.

Fluid `clamp()` scale, ≥1.25 ratio, display ceiling ≤ ~5.25rem, letter-spacing
floor ≥ -0.035em. `text-wrap: balance` on h1–h3; `text-wrap: pretty` on prose.

## Layout

- Container max `1180px`, gutter `clamp(1.25rem, 5vw, 2.5rem)`, prose ≤ ~72ch.
- Section rhythm via fluid padding `clamp(4rem, 10vw, 8rem)`; alternate canvas /
  surface / drenched-dark for cadence.
- Hairline grids (`gap-px` over `bg-line`) for pillars, services, personal cards.
- No side-stripe borders, no nested cards. Numbered markers only where a section is a
  genuine sequence (the 3-step engagement).

## Motion

Library: the in-repo `Reveal` / `RevealGroup` (IntersectionObserver). Easing
ease-out-expo `cubic-bezier(0.16, 1, 0.3, 1)`; no bounce.

- Content is visible by default; JS arms it hidden before paint only when motion is
  allowed, then reveals on scroll. Safe for no-JS, crawlers, reduced-motion.
- Hero: staggered headline lines + portrait. One signature load.
- Every animation has a `prefers-reduced-motion: reduce` path; the rotating footer
  wisdom holds still under reduced motion.

## Sections / components

Hero (drenched, spike + portrait + WhatsApp CTA), TrustStrip (client wordmarks),
Pillars (Train/Build/Teach), WorkCard + ProjectVisual (real screenshot or generated
health/studio/ai/game preview), Services menu, About (story + stats + skills),
Journey (timeline), Engagement (3 steps), Testimonials, WritingTeaser, PersonalTeaser,
Newsletter (Substack), Contact (drenched, all channels), Footer (drenched, rotating
wisdom + socials). Personal pages: /now, /bookshelf, /playground, /uses, /more.

## Iconography

`lucide-react`, 1.5–1.75px stroke. Brand marks (GitHub, LinkedIn, X, WhatsApp,
Instagram, Substack) as inline single-color SVG in `components/icons/Brand`.
