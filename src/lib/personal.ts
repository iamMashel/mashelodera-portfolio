// "Off the clock" content for /now, /bookshelf, /playground, /uses.
// Most of this is SEED placeholder content (marked DRAFT) so the pages feel
// alive now, swap in your real books, links, and notes any time.

// ---- /now -------------------------------------------------------------------
export const nowUpdated = "June 2026"; // DRAFT: bump when you update this page

export const now = [
  {
    emoji: "🛠️",
    label: "Building",
    body: "Agentic AI experiments and follow-ups to Onagi, vision-grounded agents that can actually take actions, not just talk.",
  },
  {
    emoji: "🎓",
    label: "Learning",
    body: "Finishing my B.Sc. in Computer Science at University of the People, and going deeper on reinforcement learning and eval methodology.",
  },
  {
    emoji: "🧪",
    label: "Working on",
    body: "Contract LLM training and evaluation, RLHF, multimodal audits, and trajectory validation for frontier-model teams.",
  },
  {
    emoji: "📚",
    label: "Reading",
    body: "The Alignment Problem by Brian Christian. (See the full shelf for what's next.)", // DRAFT
  },
  {
    emoji: "🏑",
    label: "Off-screen",
    body: "Playing striker in weekend hockey, and slowly losing to friends at competitive programming on HackerRank.",
  },
] as const;

// ---- /bookshelf -------------------------------------------------------------
// DRAFT: these are example titles that fit the brief. Replace takes with your
// own words and the list with what you're actually reading.
export type Book = {
  title: string;
  author: string;
  take: string;
  rating?: number; // out of 5
};

export const currentlyReading: Book[] = [
  {
    title: "The Alignment Problem",
    author: "Brian Christian",
    take: "DRAFT: your take, the bridge between ML practice and the safety questions I care about.",
  },
  {
    title: "Superintelligence",
    author: "Nick Bostrom",
    take: "DRAFT: your take, dense, but it set the vocabulary for how I think about the stakes.",
  },
];

export const haveRead: Book[] = [
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    take: "DRAFT: your one-line verdict.",
    rating: 5,
  },
  {
    title: "The Selfish Gene",
    author: "Richard Dawkins",
    take: "DRAFT: the biology book that quietly shaped how I see systems and incentives.",
    rating: 5,
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    take: "DRAFT: your one-line verdict.",
    rating: 4,
  },
  {
    title: "Deep Learning",
    author: "Goodfellow, Bengio & Courville",
    take: "DRAFT: a reference more than a read, but the chapters that clicked, really clicked.",
    rating: 4,
  },
];

// ---- /playground ------------------------------------------------------------
export const funProjects = [
  {
    name: "Vibe Coding Snake",
    blurb: "A classic game rebuilt like a real product: auth, a database, tests, and CI/CD. Overkill on purpose.",
    href: "/work/vibe-coding-snake",
  },
  {
    name: "Blender experiments", // DRAFT
    blurb: "Low-poly models and textures from my game-dev days. Occasionally I still open it just to make something.",
    href: "",
  },
  {
    name: "Prompt golf", // DRAFT
    blurb: "Seeing how short a prompt can get and still hold a model to the task. Harder than it sounds.",
    href: "",
  },
] as const;

// DRAFT: paste links to reels/videos you've actually saved.
export const madeMeLaugh = [
  { caption: "The one about debugging at 2am that's a little too accurate.", href: "" },
  { caption: "Every standup meeting, summarised in nine seconds.", href: "" },
  { caption: "AI demo vs AI in production.", href: "" },
] as const;

export const anecdotes = [
  {
    title: "The 98% rule", // DRAFT
    body: "In the lab, a 98% sample-processing rate wasn't a flex, it was the line between trusted and ignored. I think about that number every time I'm tempted to ship something half-checked.",
  },
  {
    title: "From cells to tokens", // DRAFT
    body: "I spent years studying how tiny molecular machines follow rules to produce something alive. Training language models feels stranger than it should because, some days, it rhymes.",
  },
] as const;

// ---- /uses ------------------------------------------------------------------
export const uses = [
  {
    category: "Editor & environment",
    items: [
      { name: "Linux / Ubuntu", note: "Daily driver. Everything runs here." },
      { name: "VS Code", note: "With the extensions kept to a sane minimum." },
      { name: "Git & GitHub", note: "Version control and CI via Actions." },
      { name: "Docker", note: "Reproducible stacks, one compose up away." },
    ],
  },
  {
    category: "Languages & frameworks",
    items: [
      { name: "Python", note: "FastAPI, pandas, scikit-learn, my default for AI work." },
      { name: "React 19 + Next.js", note: "For interfaces and full-stack apps." },
      { name: "SQL / PostgreSQL", note: "Where the real state lives." },
      { name: "Bash", note: "Glue for everything else." },
    ],
  },
  {
    category: "AI & data",
    items: [
      { name: "Playwright", note: "Automation and the eyes of vision agents." },
      { name: "RAG + vector retrieval", note: "Grounding answers in real sources." },
      { name: "Tableau / Power BI", note: "When the data needs to be seen." },
      { name: "Postman", note: "Poking APIs until they behave." },
    ],
  },
  {
    category: "Off-screen",
    items: [
      { name: "Blender", note: "Leftover from game-dev days; still fun." },
      { name: "A hockey stick", note: "Striker. Weekends only." },
      { name: "HackerRank", note: "Competitive programming to stay sharp." },
    ],
  },
] as const;
