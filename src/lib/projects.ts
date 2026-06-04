// Case-study content. Drawn from Mashel's real CV projects. Items marked
// `// DRAFT` are soft claims / links to confirm or add.

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  year: string;
  role: string;
  timeline: string;
  stack: string[];
  image: string | null; // path in /public, or null -> generated preview
  imageAlt: string;
  featured: boolean;
  links: { live?: string; github?: string };
  summary: string;
  outcomes: string[];
  problem: string;
  constraints: string[];
  approach: { title: string; body: string }[];
  results: string[];
  tradeoffs: string;
  previewTheme?: "health" | "studio" | "ai" | "game";
};

export const projects: Project[] = [
  {
    slug: "roadbuck",
    name: "Roadbuck",
    tagline: "A heavy-equipment OEM storefront and lead engine",
    category: "Marketing / Lead-gen",
    year: "2026",
    role: "Design + frontend engineering",
    timeline: "Live",
    stack: ["Next.js", "React 19", "TypeScript", "Tailwind v4"],
    image: "/work/roadbuck.jpg",
    imageAlt:
      "Roadbuck homepage: a dark steel-and-safety-yellow hero reading 'Built to take a beating' over a workshop photo.",
    featured: true,
    links: { live: "https://roadbuck-web.vercel.app/" },
    summary:
      "A marketing and lead-generation site for Roadbuck, a global supplier and manufacturer of automotive garage machinery, that turns a spec-heavy catalogue into quotes over WhatsApp.",
    outcomes: [
      "WhatsApp + 'Get a quote' as the primary conversion",
      "'Find my kit' guided picker across the catalogue",
      "Compare specs across machines side by side",
    ],
    problem:
      "Buying garage equipment (two- and four-post lifts, 3D wheel aligners, tyre changers, balancers, compressors) is spec-heavy and trust-sensitive, and in these markets the deal usually closes over WhatsApp. Roadbuck needed a site that presents a broad, technical catalogue credibly to garage owners across East Africa and beyond, then funnels them to a quote without friction.",
    constraints: [
      "Broad catalogue with dense specs that must stay legible",
      "Buyers are mobile-first and WhatsApp-first",
      "Must signal OEM credibility (CE-certified, factory-built) without a generic template look",
      "Dark, heavy-equipment aesthetic that holds up across many product pages",
    ],
    approach: [
      {
        title: "Look like the machines it sells",
        body: "A dark steel visual system with one safety-yellow accent, oversized industrial type, and real workshop imagery. The hero ('Built to take a beating') sets the tone: this is OEM kit, not a SaaS landing page.",
      },
      {
        title: "A catalogue that helps you choose",
        body: "An Equipment taxonomy, a Compare view that lines specs up side by side, and a 'Find my kit' guided picker so a garage owner lands on the right machine instead of bouncing off a spec sheet.",
      },
      {
        title: "WhatsApp-first conversion",
        body: "Every path ends in a quote request or a WhatsApp chat, matching how these deals actually close in the region. 'Get a quote' is always one tap away.",
      },
      {
        title: "Built for trust and speed",
        body: "CE certification and Guangdong factory provenance are surfaced as credibility, on a fast, accessible Next.js build with a dark/light toggle.",
      },
    ],
    results: [
      "A credible OEM presence that turns a spec-heavy catalogue into quote conversations.", // DRAFT: add real enquiry/quote numbers when available
      "Compare and Find-my-kit cut the back-and-forth before a quote.",
      "Live, with messaging built for 20+ export markets.",
    ],
    tradeoffs:
      "Scoped to lead-gen plus catalogue rather than full transactional checkout; the architecture leaves room for commerce later. I committed hard to the dark industrial look, which I'd defend again for this audience.",
  },
  {
    slug: "onagi",
    name: "Onagi",
    tagline: "A multimodal autonomous reasoning agent",
    category: "Agentic AI",
    year: "2026",
    role: "AI engineering + product",
    timeline: "Gemini 3 Hackathon build",
    stack: ["Gemini 3 Vision", "Playwright", "RAG", "Function Calling", "Python"],
    image: null,
    previewTheme: "ai",
    imageAlt:
      "Onagi agent interface: a reasoning pipeline turning a screen and a user request into grounded actions.",
    featured: true,
    links: { live: "", github: "https://github.com/iamMashel" }, // DRAFT: add the exact repo + live demo
    summary:
      "An autonomous agent that watches the screen, reasons over what it sees with Gemini 3 Vision, and acts, writing to the database and calling APIs based on the user's intent.",
    outcomes: [
      "Real-time multimodal RAG over live screen content",
      "Native function-calling that triggers DB writes and API calls",
      "Sub-millisecond reasoning latency via context caching",
    ],
    problem:
      "Most 'AI assistants' can describe what they'd do but can't actually do it, and the ones that act tend to act blindly. The brief for Onagi was an agent that genuinely understands what's on screen, decides what the user wants, and takes the right action, without losing the plot on large, fast-moving context.",
    constraints: [
      "Hackathon timeline: a working multimodal pipeline, not a slide deck",
      "Vision + retrieval + action had to run fast enough to feel live",
      "Actions touch real data, so intent detection had to be reliable",
    ],
    approach: [
      {
        title: "See, then reason",
        body: "A Playwright + Gemini 3 Vision pipeline captures live screen content and feeds it into a retrieval-augmented reasoning loop, so the agent reasons over what is actually there rather than a stale snapshot.",
      },
      {
        title: "Intent to action via function calling",
        body: "Native function calling maps the user's intent to concrete tools, database writes and API integrations, so the agent doesn't just answer, it executes the right operation.",
      },
      {
        title: "Keep huge context cheap",
        body: "Context caching holds massive datasets in working memory, bringing reasoning latency down to sub-millisecond on repeat queries instead of re-reading everything each turn.",
      },
    ],
    results: [
      "A demoable agent that turns a screen plus a request into a grounded action.", // DRAFT: confirm hackathon outcome/placement
      "Showed that multimodal RAG + function calling can run at interactive speed.",
      "A reusable pattern for vision-grounded agents, not a one-off script.",
    ],
    tradeoffs:
      "Built under hackathon pressure, Onagi prioritized a convincing end-to-end loop over breadth of tools and hardened guardrails. The architecture leaves clear seams to add permissioning and a wider tool registry before anything like production use.",
  },
  {
    slug: "bizflow-ai",
    name: "BizFlow AI",
    tagline: "GenAI document workflows with a human in the loop",
    category: "AI Product",
    year: "2026",
    role: "Product design + frontend engineering",
    timeline: "MVP in 6 weeks",
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "FastAPI", "Supabase", "RAG"],
    image: "/work/bizflow.png",
    imageAlt:
      "BizFlow AI command-center dashboard: dark sidebar navigation beside light stat cards tracking documents, workflows, and AI outputs.",
    featured: true,
    links: { live: "", github: "" }, // DRAFT: add real links
    summary:
      "A command center where small teams upload documents, get grounded AI summaries and drafts, and approve every automation before it runs.",
    outcomes: [
      "Document-to-action in under 2 minutes", // DRAFT
      "Every automation gated by human approval",
      "Answers grounded in your own files via RAG",
    ],
    problem:
      "Small operations teams drown in documents: meeting notes, invoices, client briefs. The information needed to act is in there, but pulling it out is manual and slow, and most 'AI automation' tools either hallucinate or fire off actions no one signed off on. The brief was a tool that turns raw documents into trustworthy, reviewable next steps without handing the keys to a black box.",
    constraints: [
      "MVP timeline measured in weeks, not months",
      "Outputs must be auditable, with no ungrounded AI claims",
      "Non-technical operators are the primary users",
      "Had to feel calm and legible despite dense, stateful data",
    ],
    approach: [
      {
        title: "A command center, not a chat box",
        body: "I anchored the product on a dashboard that answers one question on load: what needs my attention? Status tiles (documents, completed and pending approvals, completed and failed workflows, AI outputs) give an operator the whole state of the workspace in a glance, with recent documents and workflow runs one scroll below.",
      },
      {
        title: "Grounding over generation",
        body: "Every AI answer is retrieved against the user's uploaded files (RAG), so 'Ask AI' returns sourced answers rather than confident guesses. Readiness states make it obvious which documents are enriched and safe to query.",
      },
      {
        title: "Human approval as a first-class step",
        body: "Workflows generate a preview, then wait. Nothing executes until a person reviews it. The design makes the safe path the default path.",
      },
      {
        title: "Quiet, dense, readable UI",
        body: "Dark navigation rail for orientation, bright workspace for focus, generous spacing on data-heavy cards, and strict typographic hierarchy so a screen full of numbers never feels noisy.",
      },
    ],
    results: [
      "Operators go from a stack of files to reviewed, ready-to-run actions in a single session.", // DRAFT
      "Approval-gated automation removed the trust barrier that blocks AI adoption for ops teams.",
      "The dashboard pattern scaled cleanly from a handful of documents to a full workspace without redesign.",
    ],
    tradeoffs:
      "To ship the MVP I deliberately scoped out bulk document ingestion and role-based permissions; the architecture leaves room for both. The dark-sidebar / light-canvas split was a bet on focus over visual flash, and I'd defend it again for a data tool people use all day.",
  },
  {
    slug: "vibe-coding-snake",
    name: "Vibe Coding Snake",
    tagline: "A full-stack agentic take on a classic game",
    category: "Full-stack",
    year: "2025",
    role: "Full-stack engineering",
    timeline: "Personal project",
    stack: ["React 19", "FastAPI", "PostgreSQL", "JWT", "Docker", "GitHub Actions"],
    image: null,
    previewTheme: "game",
    imageAlt:
      "Vibe Coding Snake: a crisp browser game canvas beside a leaderboard backed by an authenticated API.",
    featured: true,
    links: { live: "", github: "https://github.com/iamMashel" }, // DRAFT: add the repo + live link
    summary:
      "A classic game rebuilt as a real product: an authenticated FastAPI + PostgreSQL backend, a 60 FPS React 19 frontend, and a CI/CD pipeline that tests and ships on every push.",
    outcomes: [
      "Zero-latency 60 FPS game loop in React 19",
      "FastAPI + PostgreSQL backend with JWT auth",
      "CI/CD via GitHub Actions and Docker Compose with automated tests",
    ],
    problem:
      "A snake game is trivial. Building it the way a real product is built, with authentication, a database, automated tests, and a deployment pipeline, is the actual exercise. The goal was to practise full-stack discipline end to end on a project small enough to finish but real enough to be honest.",
    constraints: [
      "The game loop has to stay at a smooth 60 FPS",
      "Treat it like production: auth, persistence, tests, CI",
      "Keep it reproducible, clone, compose up, run",
    ],
    approach: [
      {
        title: "A real backend behind a toy",
        body: "FastAPI serves a JWT-authenticated API over PostgreSQL for accounts and scores, so the game has genuine state and identity instead of localStorage.",
      },
      {
        title: "A frontend that never drops a frame",
        body: "The React 19 client runs a tight, zero-latency render loop tuned to hold 60 FPS, with game state cleanly separated from UI.",
      },
      {
        title: "Ship it like you mean it",
        body: "GitHub Actions runs automated tests on every push and Docker Compose makes the whole stack reproducible from a single command.",
      },
    ],
    results: [
      "A small project that exercises the full production loop, not just the fun part.",
      "A reproducible stack anyone can clone and run with one command.",
      "A reference I reuse for wiring auth, persistence, and CI quickly.",
    ],
    tradeoffs:
      "I spent more time on the pipeline and auth than the gameplay, which is the whole point: the discipline transfers, the snake doesn't. Multiplayer and real-time leaderboards were left as obvious next steps.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
