// Home-page content. All metrics here are drawn from Mashel's CV, real, not
// invented. Testimonials marked DRAFT are placeholders to swap for real quotes.

// The spike: three things almost nobody combines. Each is backed by proof.
export const pillars = [
  {
    key: "train",
    icon: "Brain",
    kicker: "Train",
    title: "I train the models.",
    body: "RLHF, SFT, and multimodal evaluation for frontier AI. I grade outputs, build task trajectories, and catch the failures reward models miss.",
    proof: "Top 10% QA accuracy at Outlier AI · −25% annotation ambiguity at Turing",
  },
  {
    key: "build",
    icon: "Boxes",
    kicker: "Build",
    title: "I build with them.",
    body: "Agentic apps, RAG pipelines, and full-stack products. Function-calling, vector retrieval, and a frontend that makes AI feel trustworthy.",
    proof: "Onagi: a Gemini 3 vision + RAG agent with sub-millisecond reasoning latency",
  },
  {
    key: "teach",
    icon: "GraduationCap",
    kicker: "Teach",
    title: "I teach the craft.",
    body: "Workshops, cohorts, and one-on-one upskilling. I make the hard parts of AI legible to people who want to actually use them.",
    proof: "200+ students taught across 3 schools · mentored junior annotators",
  },
] as const;

// Trust strip, real organizations Mashel has worked with (remote).
export const clients = [
  "Turing",
  "Outlier AI",
  "iMerit",
  "Handshake AI",
  "Fortune 500 companies",
  "TechUp Africa",
] as const;

// Headline metrics, real, from the CV.
export const stats = [
  { value: "Top 10%", label: "QA accuracy ranking at Outlier AI" },
  { value: "−25%", label: "annotation ambiguity reduced at Turing" },
  { value: "200+", label: "people taught the craft" },
  { value: "2 degrees", label: "Computer Science + Molecular Biology" },
] as const;

// The services menu, breadth, framed as a menu rather than the headline.
export const services = [
  {
    icon: "Bot",
    title: "AI solutions & agents",
    body: "RAG systems, autonomous agents, function-calling pipelines, and AI features wired into your product or workflow.",
  },
  {
    icon: "Brain",
    title: "AI training & evaluation",
    body: "RLHF/SFT data, model evaluation, red-teaming, and annotation pipelines, run with measurable QA discipline.",
  },
  {
    icon: "Code2",
    title: "Frontend & UI/UX",
    body: "Production React, Next.js, and TypeScript. Dashboards, AI interfaces, and marketing sites that are fast and accessible.",
  },
  {
    icon: "GraduationCap",
    title: "Teaching & workshops",
    body: "Team upskilling, cohort-based masterclasses, and talks on practical AI, evaluation, and shipping with LLMs.",
  },
  {
    icon: "LineChart",
    title: "Growth & digital presence",
    body: "Landing pages, content, and the technical side of marketing for founders who need to be found and trusted.",
  },
] as const;

export const skillGroups = [
  {
    label: "AI / ML",
    items: [
      "LLM training (SFT / RLHF)",
      "Prompt engineering",
      "Agentic AI",
      "RAG",
      "Trajectory validation",
      "Model evaluation",
    ],
  },
  {
    label: "Engineering",
    items: ["Python", "FastAPI", "React 19", "Next.js", "SQL", "Docker", "Bash"],
  },
  {
    label: "Data & tools",
    items: ["pandas", "scikit-learn", "Playwright", "Tableau", "Power BI", "Git"],
  },
  {
    label: "Foundations",
    items: ["Computer Science", "Molecular Biology", "AI safety & policy"],
  },
] as const;

// The journey timeline, Mashel's distinctive origin story.
export const journey = [
  {
    period: "Earlier",
    title: "Paying dues (yes, including KFC)",
    body: "Before the lab and the models, there was customer-facing work, a stint at KFC included. It taught me speed, composure, and that the customer's problem is the only problem. Underrated training for shipping.",
  },
  {
    period: "2020–2024",
    title: "A scientist's training",
    body: "B.Sc. in Molecular & Cellular Biology at Kenyatta University. Lab protocols taught me precision under pressure, a 98% sample-processing success rate, and the habit of trusting evidence over vibes.",
  },
  {
    period: "2020–2022",
    title: "Learning to build",
    body: "Built Unity game prototypes in C# with AI behaviour scripting and Blender assets. This is where object-oriented thinking and systems design clicked.",
  },
  {
    period: "2023–2024",
    title: "Teaching the machines",
    body: "Evaluated and trained LLMs at Outlier AI, grading RLHF outputs, annotating 200+ code snippets, ranking top 10% for QA accuracy.",
  },
  {
    period: "2025–2026",
    title: "Frontier work",
    body: "LLM and video-annotation training for Turing and iMerit: structured frameworks that cut annotation ambiguity, and high-fidelity audits of generative media.",
  },
  {
    period: "Now",
    title: "Building & giving back",
    body: "Shipping agentic AI products, finishing a CS degree (University of the People), and helping people build safe superintelligence one piece at a time.",
  },
] as const;

// How an engagement works, short, client-facing.
export const engagement = [
  {
    title: "Talk it through",
    body: "A quick call or WhatsApp chat. You tell me the problem; I tell you honestly whether I'm the right person and how I'd approach it.",
  },
  {
    title: "Scope & agree",
    body: "A clear plan, timeline, and price before any work starts. No surprises, no vague hourly black holes.",
  },
  {
    title: "Build & hand over",
    body: "I ship in the open with regular check-ins, then hand over something documented you (or your team) can actually run with.",
  },
] as const;

export const testimonials = [
  {
    // DRAFT, replace with a real quote, name, role, company.
    quote:
      "Mashel found edge cases in our model outputs the rest of the team kept missing. The QA writeups were precise enough that engineering could act on them the same day.",
    name: "Client name",
    role: "ML lead, AI data company",
  },
  {
    // DRAFT
    quote:
      "He took a half-formed idea and shipped a working agentic prototype in weeks. Rare to find someone who can train the model and build the product around it.",
    name: "Client name",
    role: "Founder, early-stage startup",
  },
] as const;

export const faqs = [
  {
    q: "What kind of work do you take on?",
    a: "AI features and agents, RAG systems, model training and evaluation, full-stack and frontend builds, and the occasional workshop. If it sits between 'understands the model' and 'ships a real product', it's my sweet spot.",
  },
  {
    q: "Do you work with teams outside Kenya?",
    a: "Yes. I'm Nairobi-based and work remotely with teams worldwide. Most of my training work has been remote for US companies, so async collaboration across time zones is normal for me.",
  },
  {
    q: "Can you really both train models and build the product?",
    a: "That's the whole point. I've done RLHF, SFT, and evaluation on frontier models, and I ship agentic apps and frontends. You get one person who understands both sides instead of a handoff that loses the plot.",
  },
  {
    q: "How do you charge?",
    a: "Project-based, scoped and priced before any work starts. For ongoing work I'll set up a simple retainer. No vague hourly black holes; you know the number up front.",
  },
  {
    q: "How quickly can you start?",
    a: "Usually within a week or two, depending on current commitments. Send me the rough shape of the work and I'll be honest about timing and whether I'm the right fit.",
  },
  {
    q: "Do you do talks and workshops?",
    a: "Yes, regularly. Conference talks, team workshops, and cohort-based sessions on training and building with AI. There's a dedicated page with topics and formats.",
  },
] as const;

// Engagement models, compared. No fixed prices: scope decides that. Edit freely.
export type TierKey = "project" | "retainer" | "workshop";

export const tierColumns: {
  key: TierKey;
  name: string;
  tagline: string;
  cta: string;
  featured?: boolean;
}[] = [
  { key: "project", name: "Project", tagline: "A defined build, scoped and shipped.", cta: "Start a project" },
  { key: "retainer", name: "Ongoing", tagline: "A standing AI partner for your team.", cta: "Let's talk", featured: true },
  { key: "workshop", name: "Workshop", tagline: "Level up your team, fast.", cta: "Book a session" },
];

export const tierRows: { label: string; project: boolean | string; retainer: boolean | string; workshop: boolean | string }[] = [
  { label: "Scoped & priced upfront", project: true, retainer: true, workshop: true },
  { label: "Design & build", project: true, retainer: true, workshop: false },
  { label: "AI training & evaluation", project: true, retainer: true, workshop: "add-on" },
  { label: "Ongoing iteration & support", project: false, retainer: true, workshop: false },
  { label: "Team upskilling", project: false, retainer: "optional", workshop: true },
  { label: "Async updates + scheduled calls", project: true, retainer: true, workshop: true },
];
