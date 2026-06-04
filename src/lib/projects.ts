// Case-study content. BizFlow details are drawn from the real product screenshot.
// Metrics/outcomes marked `// DRAFT` are realistic placeholders — Mashel to confirm
// real numbers and add live/repo links.

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
  // Card summary
  summary: string;
  // 2-3 headline outcomes (shown on card + top of case study)
  outcomes: string[];
  // Long-form case study, Problem -> Constraints -> Approach -> Solution -> Results -> Tradeoffs
  problem: string;
  constraints: string[];
  approach: { title: string; body: string }[];
  results: string[];
  tradeoffs: string;
  // Visual accent seed for the generated preview (when image is null)
  previewTheme?: "health" | "studio";
};

export const projects: Project[] = [
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
        body: "I anchored the product on a dashboard that answers one question on load: what needs my attention? Six status tiles (documents, completed, pending approvals, completed and failed workflows, AI outputs) give an operator the whole state of the workspace in a glance, with recent documents and workflow runs one scroll below.",
      },
      {
        title: "Grounding over generation",
        body: "Every AI answer is retrieved against the user's uploaded files (RAG), so 'Ask AI' returns sourced answers rather than confident guesses. Readiness states (Completed / Pending) make it obvious which documents are enriched and safe to query.",
      },
      {
        title: "Human approval as a first-class step",
        body: "Workflows generate a preview, then wait. The Workflow Approvals surface exists so nothing executes until a person reviews it. The design makes the safe path the default path.",
      },
      {
        title: "Quiet, dense, readable UI",
        body: "Dark navigation rail for orientation, bright workspace for focus, generous spacing on data-heavy cards, and strict typographic hierarchy so a screen full of numbers never feels noisy.",
      },
    ],
    results: [
      "Operators go from a stack of files to reviewed, ready-to-run actions in a single session.", // DRAFT
      "Approval-gated automation removed the trust barrier that blocks AI adoption for ops teams.",
      "The dashboard pattern scaled cleanly from 3 documents to a full workspace without redesign.",
    ],
    tradeoffs:
      "To ship the MVP I deliberately scoped out bulk document ingestion and role-based permissions; the architecture leaves room for both. The dark-sidebar / light-canvas split was a bet on focus over visual flash, and I'd defend it again for a data tool people use all day.",
  },
  {
    slug: "scd-warriors",
    name: "SCD Warriors",
    tagline: "A calm companion for sickle cell warriors and caregivers",
    category: "HealthTech",
    year: "2025",
    role: "UI/UX design + frontend",
    timeline: "Ongoing",
    stack: ["Next.js", "React", "Tailwind", "Supabase", "PWA"],
    image: null,
    previewTheme: "health",
    imageAlt: "SCD Warriors app preview: crisis log, medication reminders, and a support feed.",
    featured: true,
    links: { live: "", github: "" }, // DRAFT
    summary:
      "A supportive app for people living with sickle cell disease: log crises, track medication, and stay connected to a community that gets it.",
    outcomes: [
      "Crisis & symptom logging in seconds", // DRAFT
      "Medication and hydration reminders",
      "Peer support without the noise",
    ],
    problem:
      "Sickle cell disease means living with unpredictable pain crises, complex medication schedules, and a lot of isolation. Most health apps are built for fitness, not for chronic conditions: they're loud, gamified, and exhausting to use on a bad day. SCD Warriors needed to be the opposite: gentle, fast, and genuinely useful in the middle of a crisis.",
    constraints: [
      "Must be usable one-handed, in pain, on a low-end phone",
      "Accessibility is non-negotiable, not a nice-to-have",
      "Sensitive health data: privacy and trust by design",
      "Emotional tone matters as much as features",
    ],
    approach: [
      {
        title: "Design for the worst day, not the best",
        body: "I designed the core flows assuming the user is in pain and tired: large touch targets, a one-tap crisis log, minimal typing, and a layout that never punishes a mistake. Calm color, soft contrast within AA limits, and zero gamification.",
      },
      {
        title: "Track what actually helps",
        body: "Crisis intensity, triggers, hydration, and medication, captured fast and surfaced back as patterns the user can show a clinician. Reminders are supportive nudges, never nagging alarms.",
      },
      {
        title: "Community that supports, not overwhelms",
        body: "A moderated feed designed for encouragement and shared experience, deliberately free of the engagement-bait patterns that make social feeds draining.",
      },
    ],
    results: [
      "A health tool that respects the user's energy instead of demanding it.", // DRAFT
      "Logging flows fast enough to complete during an actual crisis.",
      "An interface that families and caregivers can navigate too.",
    ],
    tradeoffs:
      "I kept the v1 feature set narrow on purpose (logging, reminders, community) rather than chasing clinical integrations early. Trust and ease had to be proven before depth. Native push and offline-first were prioritized over a broad feature list.",
  },
  {
    slug: "onagi-ai-labs",
    name: "Onagi AI Labs",
    tagline: "Brand and site for an AI research & development studio",
    category: "Brand / Marketing site",
    year: "2025",
    role: "Design + build",
    timeline: "3 weeks",
    stack: ["Next.js", "Tailwind", "Motion", "TypeScript"],
    image: null,
    previewTheme: "studio",
    imageAlt: "Onagi AI Labs marketing site preview: bold hero, capability grid, and motion-led layout.",
    featured: true,
    links: { live: "", github: "" }, // DRAFT
    summary:
      "A marketing site that makes a young AI R&D studio look as serious as its work: confident type, purposeful motion, and a clear story.",
    outcomes: [
      "A credible, fundable first impression", // DRAFT
      "Story-first structure, not a feature dump",
      "Motion that earns attention, then gets out of the way",
    ],
    problem:
      "A new AI R&D studio had real technical depth but a presence that undersold it. They needed a site that signalled credibility to potential clients and partners in the first few seconds, without the generic, template look that makes every AI startup blur together.",
    constraints: [
      "Pre-product: the brand had to carry the weight",
      "Differentiate in a sea of identical AI landing pages",
      "Fast to ship, easy for the team to extend",
    ],
    approach: [
      {
        title: "A point of view, not a template",
        body: "I led with a committed typographic hero and a tightly art-directed narrative (what the studio works on, how it thinks, and why it's worth a conversation) instead of the usual gradient-blob-and-three-cards layout.",
      },
      {
        title: "Motion as choreography",
        body: "Entrance and scroll motion were composed as one sequence, tuned with exponential easing and full reduced-motion fallbacks, so the site feels alive without becoming a distraction.",
      },
      {
        title: "Built to extend",
        body: "Componentized in Next.js so the team could add case studies and posts themselves without breaking the system.",
      },
    ],
    results: [
      "A first impression that matches the studio's technical ambition.", // DRAFT
      "A structure the team can grow without a redesign.",
      "Clear differentiation from the AI-startup template crowd.",
    ],
    tradeoffs:
      "With no product to show yet, I leaned the design into brand and narrative rather than screenshots. That's the right call pre-launch; the system is ready to fold in product imagery the moment it exists.",
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
