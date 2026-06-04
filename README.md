# Mashel Odera — Portfolio

The personal portfolio of **Mashel Odera**, a frontend developer & UI/UX designer
building AI, SaaS, healthtech, and fintech products. It showcases selected case
studies, services, and writing.

**Tech:** Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · deployed on Vercel.

**Design:** a bright Swiss-product aesthetic — pure-white canvas, near-black ink,
and a single magenta accent — verified to WCAG 2.2 AA. The full visual system and
product strategy live in [`DESIGN.md`](./DESIGN.md) and [`PRODUCT.md`](./PRODUCT.md).

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
```

## Project structure

```
src/
  app/                       # routes (App Router)
    page.tsx                 # home — hero, work, services, about, process, testimonials, writing, contact
    work/[slug]/page.tsx     # case studies — Problem → Constraints → Approach → Results → Tradeoffs
    blog/                    # writing index + markdown-driven post template
    sitemap.ts · robots.ts   # SEO
    icon.svg                 # favicon (monogram)
  components/                # Nav, Footer, Button, Reveal, WorkCard, sections/*, icons/Brand
  lib/
    site.ts                  # name, socials, email, résumé, domain
    projects.ts              # case-study content
    content.ts               # services, skills, process, testimonials
    posts.ts                 # blog markdown loader
content/blog/*.md            # blog posts (markdown + frontmatter)
public/                      # images and the résumé PDF
```

Site-wide details (name, links, email, résumé, domain) are centralized in
[`src/lib/site.ts`](./src/lib/site.ts) — everything else reads from there.

## Content

- **Case studies** are defined in [`src/lib/projects.ts`](./src/lib/projects.ts).
- **Services, skills, process, and testimonials** live in [`src/lib/content.ts`](./src/lib/content.ts).
- **Blog posts** are markdown files in [`content/blog/`](./content/blog); add one by
  creating a new `.md` file with the same frontmatter shape.

## Deployment

Deployed to **Vercel** with push-to-deploy from this repository — every push to
`main` ships to production, and pull requests get preview URLs automatically.

Security headers (CSP, HSTS, X-Frame-Options, and friends) are configured in
[`next.config.ts`](./next.config.ts) and apply on every response.

## License

© Mashel Odera. All rights reserved.
