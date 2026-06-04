// Content for the creative "interesting pages": /interesting, /colophon,
// /speaking, /lab. Seeded; edit freely. DRAFT marks example content to swap.

// ---- /interesting -----------------------------------------------------------
export const linkGroups = [
  {
    label: "People & sites I learn from",
    links: [
      { name: "Chris Coyier", url: "https://chriscoyier.net/", note: "The patron saint of personal websites. This page owes him." },
      { name: "Simon Willison", url: "https://simonwillison.net/", note: "The clearest writing on actually building with LLMs." },
      { name: "Andrej Karpathy", url: "https://karpathy.ai/", note: "Neural nets from first principles, explained like a human." },
      { name: "CSS-Tricks", url: "https://css-tricks.com/", note: "Where a lot of us learned the web." },
    ],
  },
  {
    label: "AI, alignment & safety",
    links: [
      { name: "Anthropic research", url: "https://www.anthropic.com/research", note: "Interpretability and safety work I keep coming back to." },
      { name: "Distill.pub", url: "https://distill.pub/", note: "Machine learning, made visual. Dormant but timeless." },
      { name: "The Alignment Forum", url: "https://www.alignmentforum.org/", note: "Deep end of the safety conversation." },
    ],
  },
  {
    label: "Build & tinker",
    links: [
      { name: "CodePen", url: "https://codepen.io/", note: "Where front-end ideas go to be tried." },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/", note: "The reference that's always right." },
      { name: "Game of Life (Wikipedia)", url: "https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life", note: "Emergence from three tiny rules. See it on my Lab page." },
    ],
  },
] as const; // DRAFT: a starting set, add the things you actually love.

// ---- /speaking --------------------------------------------------------------
export const speakingTopics = [
  {
    title: "What training a frontier model actually involves",
    body: "RLHF, SFT, and evaluation from the inside, the unglamorous, decisive work that makes a model trustworthy.",
  },
  {
    title: "Shipping with LLMs without getting burned",
    body: "Grounding, guardrails, evals, and the failure modes that bite teams in production. Practical, not hand-wavy.",
  },
  {
    title: "From biology to AI: precision as a discipline",
    body: "What a molecular biology lab taught me about evidence, error rates, and trusting the work, and why it matters for AI.",
  },
  {
    title: "Building safe superintelligence, one piece at a time",
    body: "An optimistic, grounded talk on AI safety for builders who want to help rather than panic.",
  },
] as const;

export const speakingFormats = [
  { label: "Conference talk / keynote", note: "20–45 min, tuned to your audience." },
  { label: "Team workshop", note: "Half or full day, hands-on, your stack and use cases." },
  { label: "Cohort / masterclass", note: "Multi-session, for groups learning to build with AI." },
] as const;

// ---- /colophon --------------------------------------------------------------
export const colophon = [
  { label: "Framework", value: "Next.js 16 (App Router) + React 19" },
  { label: "Language", value: "TypeScript" },
  { label: "Styling", value: "Tailwind CSS v4, OKLCH tokens" },
  { label: "Type", value: "Bricolage Grotesque (display) + Geist (text & mono)" },
  { label: "Color", value: "“Studio Warm”, committed clay on warm neutrals" },
  { label: "Motion", value: "IntersectionObserver reveals, reduced-motion aware" },
  { label: "Email", value: "Resend, via a Next.js Server Action" },
  { label: "Hosting", value: "Vercel, push-to-deploy from GitHub" },
  { label: "Analytics", value: "None. No tracking, no cookies." },
] as const;
