# Design

Visual system for the Mashel Odera portfolio. Aesthetic lane: **Confident Light / Swiss-product** — bright white canvas, oversized confident typography, one saturated magenta accent, generous space, precise motion. Verified WCAG 2.2 AA throughout.

## Theme

Light, single theme (no dark mode for v1; the brand IS bright white). The mood lives in the magenta accent and the typography, not in a tinted surface. Pure `#ffffff` canvas, near-black ink, one hot magenta doing all the brand work — a "creative-tool" hue (Figma/Linear-adjacent energy) that separates this from every navy/green dev portfolio.

## Color

All values OKLCH. Strategy: **Restrained-with-a-loud-accent** — neutral architecture, magenta used with intent (CTAs, links, marks, one hero accent), never sprinkled.

| Role | Token | OKLCH | Hex | Use |
|---|---|---|---|---|
| Canvas | `--bg` | `oklch(1 0 0)` | `#ffffff` | Page background. Pure white, no hidden warmth. |
| Surface | `--surface` | `oklch(0.975 0 0)` | `#f7f7f7` | Subtle panels, alternating sections. |
| Surface-2 | `--surface-2` | `oklch(0.955 0 0)` | `#f1f1f1` | Nested/hover surfaces. |
| Ink | `--ink` | `oklch(0.17 0 0)` | `#0f0f0f` | Headings + body. 19:1 on white. |
| Ink-muted | `--ink-muted` | `oklch(0.44 0 0)` | `#525252` | Secondary text. 7.8:1 on white (comfortably AA). |
| Line | `--line` | `oklch(0.90 0 0)` | `#dedede` | Hairline borders, dividers. |
| Accent | `--accent` | `oklch(0.55 0.235 351)` | `#cb0082` | Primary magenta. Buttons (white text 5.4:1), active states. |
| Accent-strong | `--accent-strong` | `oklch(0.50 0.22 351)` | `#b50072` | Text links / accent text on white (6.6:1). |
| Accent-bright | `--accent-bright` | `oklch(0.65 0.24 350)` | `#f034a3` | Decorative only (marks, gradients-as-fill, hero block) — never text. |
| Accent-wash | `--accent-wash` | `oklch(0.965 0.03 351)` | `#ffecf6` | Tinted highlight backgrounds, selection. |

Contrast rule: muted text never lighter than `--ink-muted`; accent-as-text always uses `--accent-strong` or darker.

## Typography

Three families, paired on a contrast axis (idiosyncratic display vs neutral body), mono reserved for genuine technical labels (Mashel is technical — it's signal, not costume).

- **Display** — *Bricolage Grotesque* (variable, 400–800). Headlines, hero, section titles. Characterful humanist grotesque with ink traps; carries the "confident" voice.
- **Body / UI** — *Geist Sans*. Neutral, highly legible workhorse for all running text and interface. Coherent with the Next.js/Vercel build story.
- **Mono** — *Geist Mono*. Small technical labels only: tech tags, metadata, kbd-style accents. Used sparingly per impeccable brand bans.

Type scale (fluid `clamp()`, ≥1.25 ratio; display ceiling ≤ 6rem; letter-spacing floor ≥ -0.04em):

| Step | Size | Notes |
|---|---|---|
| Hero | `clamp(2.75rem, 6vw, 5.25rem)` | Bricolage 600–700, tracking -0.03em, `text-wrap: balance` |
| H2 | `clamp(2rem, 4vw, 3.25rem)` | Bricolage 600, balance |
| H3 | `clamp(1.35rem, 2.2vw, 1.8rem)` | Bricolage 600 |
| Body-lg | `1.125rem` | Geist, lh 1.6, intro paragraphs |
| Body | `1.0625rem` (17px) | Geist, lh 1.6, measure ≤ 72ch |
| Small | `0.875rem` | Captions, meta |
| Label | `0.75rem` | Geist Mono, uppercase, tracking 0.08em, sparing |

`text-wrap: balance` on h1–h3; `text-wrap: pretty` on long prose.

## Layout

- Container max `1180px`, gutter `clamp(1.25rem, 5vw, 2.5rem)`.
- Prose measure capped `~72ch`.
- Section rhythm via fluid vertical padding `clamp(4rem, 10vw, 8rem)`, varied (not uniform) for cadence.
- Grid for 2D (work grid `repeat(auto-fit, minmax(300px, 1fr))`), flex for 1D rows. Asymmetric hero (text-left, accent element offset).
- Semantic z-index scale: `--z-dropdown:10; --z-sticky:20; --z-backdrop:30; --z-modal:40; --z-toast:50`.
- Cards used only where they're the right affordance (work grid, blog list). No nested cards, no side-stripe borders.

## Motion

Library: `motion` (Framer Motion). Easing: ease-out-expo `cubic-bezier(0.16, 1, 0.3, 1)`; no bounce/elastic.

- **Hero**: orchestrated load — headline lines stagger up + fade, accent element scales/clips in. One signature moment.
- **Sections**: reveal-on-scroll as *enhancement* of an already-visible default (no visibility gating). Staggered children where a list earns it; not a uniform fade on every block.
- **Interactive**: buttons/links — accent underline grow, subtle lift; magnetic CTA optional. Focus-visible always present.
- **Reduced motion**: every animation has a `prefers-reduced-motion: reduce` path (crossfade or instant). Content never depends on a transition to appear.

## Components

Nav (sticky, condenses on scroll), Button (primary magenta / secondary outline / ghost), Tag (mono pill), WorkCard (letterbox image + outcome line + tags), CaseStudy layout (problem/constraints/solution/results/tradeoffs), StatPair, Testimonial, BlogCard, PostLayout (prose), Footer (nav + socials + availability), AvailabilityBadge (dot + "open to work").

## Iconography

`lucide-react`, single set, 1.5px stroke. No mixing sets, no large rounded-corner icon tiles above every heading.
