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
    body: "The Alignment Problem by Brian Christian. (See the full shelf for what's next.)",
  },
  {
    emoji: "🎧",
    label: "Listening",
    body: "A rotation of WSJ, No Stupid Questions, Philosophize This, TED Talks Daily, Tim Keller sermons, and a lot of Dry Bar Comedy. The full set lives on my Playground.",
  },
  {
    emoji: "🏑",
    label: "Off-screen",
    body: "Striker in weekend hockey, replaying Fez for the hundredth time, drawing when I can, and losing to friends on HackerRank.",
  },
] as const;

// ---- /bookshelf -------------------------------------------------------------
// Covers live in /public/books/<slug>.jpg (fetched from Open Library). Takes are
// seed text in Mashel's voice — edit them, and add/remove titles freely.
export const bookCategories = [
  "Philosophy",
  "Science fiction",
  "Biographies",
  "Business & tech",
  "Comics",
  "Self-help",
  "Non-fiction",
] as const;

export type BookCategory = (typeof bookCategories)[number];

export type Book = {
  slug: string; // matches /public/books/<slug>.jpg
  title: string;
  author: string;
  category: BookCategory;
  take: string;
  rating?: number; // out of 5
  current?: boolean; // currently reading
};

export const books: Book[] = [
  // Philosophy
  { slug: "meditations", title: "Meditations", author: "Marcus Aurelius", category: "Philosophy", rating: 5, take: "The original note-to-self. I re-read a few pages whenever the noise gets loud." },
  { slug: "letters-from-a-stoic", title: "Letters from a Stoic", author: "Seneca", category: "Philosophy", rating: 5, take: "Practical Stoicism, letter by letter. Ages better than most modern self-help." },
  { slug: "beyond-good-and-evil", title: "Beyond Good and Evil", author: "Friedrich Nietzsche", category: "Philosophy", rating: 4, take: "Uncomfortable in the best way. Made me argue with the page." },
  { slug: "mans-search-for-meaning", title: "Man's Search for Meaning", author: "Viktor E. Frankl", category: "Philosophy", rating: 5, take: "Meaning as a choice, written by someone who earned the right to say it." },

  // Science fiction
  { slug: "dune", title: "Dune", author: "Frank Herbert", category: "Science fiction", rating: 5, take: "Ecology, power, and prophecy. The world-building bar everything else is measured against." },
  { slug: "foundation", title: "Foundation", author: "Isaac Asimov", category: "Science fiction", rating: 5, take: "Predicting the future with math, then watching the math meet people." },
  { slug: "neuromancer", title: "Neuromancer", author: "William Gibson", category: "Science fiction", rating: 4, take: "Invented the vibe of the internet before the internet. Still feels ahead." },
  { slug: "snow-crash", title: "Snow Crash", author: "Neal Stephenson", category: "Science fiction", rating: 4, take: "Ridiculous and brilliant. Language as a virus, delivered at full speed." },

  // Biographies
  { slug: "elon-musk", title: "Elon Musk", author: "Walter Isaacson", category: "Biographies", rating: 4, take: "An unvarnished look at relentless drive and its collateral. Isaacson lets you decide." },
  { slug: "steve-jobs", title: "Steve Jobs", author: "Walter Isaacson", category: "Biographies", rating: 5, take: "Taste, cruelty, and the reality distortion field. A study in caring about the unseen details." },
  { slug: "the-code-breaker", title: "The Code Breaker", author: "Walter Isaacson", category: "Biographies", rating: 5, take: "Doudna, CRISPR, and the ethics of editing life. Hits home given my biology background." },
  { slug: "einstein", title: "Einstein", author: "Walter Isaacson", category: "Biographies", rating: 4, take: "Curiosity as a superpower. The rebel who questioned the obvious." },

  // Business & tech
  { slug: "zero-to-one", title: "Zero to One", author: "Peter Thiel", category: "Business & tech", rating: 4, take: "Contrarian, sharp, occasionally infuriating. Good questions outlast the answers." },
  { slug: "the-lean-startup", title: "The Lean Startup", author: "Eric Ries", category: "Business & tech", rating: 4, take: "Build, measure, learn. Obvious now because this book made it so." },
  { slug: "the-hard-thing-about-hard-things", title: "The Hard Thing About Hard Things", author: "Ben Horowitz", category: "Business & tech", rating: 5, take: "The honest book about the parts of building no one frames nicely." },
  { slug: "the-innovators", title: "The Innovators", author: "Walter Isaacson", category: "Business & tech", rating: 4, take: "How the digital revolution was a team sport. Great context for where AI sits now." },

  // Comics
  { slug: "watchmen", title: "Watchmen", author: "Alan Moore", category: "Comics", rating: 5, take: "The one that proved comics could carry real weight. Still unmatched." },
  { slug: "the-sandman", title: "The Sandman", author: "Neil Gaiman", category: "Comics", rating: 5, take: "Myth, dreams, and beautiful melancholy. A masterclass in scope." },
  { slug: "maus", title: "Maus", author: "Art Spiegelman", category: "Comics", rating: 5, take: "Proof that the form can hold the heaviest stories. Unforgettable." },
  { slug: "v-for-vendetta", title: "V for Vendetta", author: "Alan Moore", category: "Comics", rating: 4, take: "Ideas as weapons. More relevant every year." },

  // Self-help
  { slug: "atomic-habits", title: "Atomic Habits", author: "James Clear", category: "Self-help", rating: 4, take: "Systems over goals. The 1% framing actually changed how I build routines." },
  { slug: "deep-work", title: "Deep Work", author: "Cal Newport", category: "Self-help", rating: 5, take: "Focus is the skill of the decade. This is the manual." },
  { slug: "cant-hurt-me", title: "Can't Hurt Me", author: "David Goggins", category: "Self-help", rating: 4, take: "Intense, not for everyone, but the chapter on the 40% rule stuck." },
  { slug: "the-7-habits", title: "The 7 Habits of Highly Effective People", author: "Stephen R. Covey", category: "Self-help", rating: 4, take: "Dated examples, durable principles. Begin with the end in mind." },

  // Non-fiction
  { slug: "sapiens", title: "Sapiens", author: "Yuval Noah Harari", category: "Non-fiction", rating: 4, take: "A confident, sweeping story of us. Argue with it and you'll learn more." },
  { slug: "thinking-fast-and-slow", title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Non-fiction", rating: 5, take: "Why your brain fools you, from the person who proved it. Required reading for anyone who trains models." },
  { slug: "the-selfish-gene", title: "The Selfish Gene", author: "Richard Dawkins", category: "Non-fiction", rating: 5, take: "The biology book that quietly shaped how I see systems and incentives." },
  { slug: "the-alignment-problem", title: "The Alignment Problem", author: "Brian Christian", category: "Non-fiction", current: true, take: "Currently reading. The clearest bridge between ML practice and the safety questions I care about." },
];

// To-read queue (no covers yet, these are new titles). DRAFT: edit the notes.
export const readingListSource =
  "A selection from JP Morgan's Summer Reading List 2026";

export const readingList: { title: string; author: string; note: string }[] = [
  { title: "The Infinity Machine", author: "Demis Hassabis", note: "DeepMind's founder on where AI goes next. I watched The Thinking Game, so this is the obvious next read." },
  { title: "AI for Good", author: "Josh Tyrangiel", note: "The grounded, optimistic case for AI that actually helps. Right up my alley." },
  { title: "How Great Ideas Happen", author: "George Newman", note: "What separates a good idea from a great one. Useful for the work and the writing." },
  { title: "The Stimulated Mind", author: "Dr. Tommy Wood", note: "A neuroscientist on attention and staying sharp. Relevant to anyone who lives in deep focus." },
  { title: "Coachable", author: "Ric Bucher", note: "On staying coachable, the trait that quietly compounds over a career." },
  { title: "Crisis Engineering", author: "Marina Nitze", note: "Fixing things when everything is on fire. Transferable to shipping under pressure." },
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

// Podcasts — cover art in /public/podcasts/<slug>.jpg (from the iTunes API).
export const podcasts = [
  { slug: "wsj", name: "WSJ What's News", network: "The Wall Street Journal", blurb: "My morning download on markets and the world." },
  { slug: "no-stupid-questions", name: "No Stupid Questions", network: "Freakonomics Radio Network", blurb: "Curiosity as a sport. Angela Duckworth and Mike Maughan turning over everyday questions." },
  { slug: "philosophize-this", name: "Philosophize This!", network: "Stephen West", blurb: "The history of ideas, explained like a friend who actually read the books." },
  { slug: "ted-talks-daily", name: "TED Talks Daily", network: "TED", blurb: "A daily hit of someone smart, excited about one thing." },
  { slug: "second-date-update", name: "Second Date Update", network: "Brooke and Jeffrey", blurb: "My guilty pleasure. Messy, funny, very human." },
  { slug: "timothy-keller", name: "Timothy Keller Sermons", network: "Gospel in Life", blurb: "Thoughtful, generous sermons I come back to for the quieter questions." },
  { slug: "dry-bar-comedy", name: "Dry Bar Comedy", network: "Angel Studios", blurb: "Clean stand-up I can laugh at without bracing. My reset button after a long build." },
] as const;

// A few real photos for the Playground gallery. Captions are editable.
export const frames = [
  {
    src: "/photos/hike.jpg",
    alt: "Hikers on a green hillside trail looking out over a misty valley",
    caption: "A hike in November. A lot happened that day; I'll tell that story another time.",
  },
  {
    src: "/photos/church-1.jpg",
    alt: "Mashel standing on green church grounds with the city behind",
    caption: "Church grounds. The kind of quiet that resets you.",
  },
  {
    src: "/photos/church-2.jpg",
    alt: "Mashel at a church compound",
    caption: "Sundays, mostly.",
  },
  {
    src: "/photos/church-3.jpg",
    alt: "Mashel at a church compound",
    caption: "Somewhere worth standing still.",
  },
  {
    src: "/photos/art.jpg",
    alt: "Mashel painting on a canvas at an outdoor art event",
    caption: "A singles event that turned into an afternoon of painting. Turns out I needed the brush more than the small talk.",
  },
  {
    src: "/photos/counsel.jpg",
    alt: "Mashel standing outside a building in Nairobi",
    caption: "Good light, good day. Nairobi.",
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
      { name: "Fez", note: "The puzzle-platformer I keep coming back to." },
      { name: "A sketchbook", note: "Drawing and making art to think with my hands." },
      { name: "HackerRank", note: "Competitive programming to stay sharp." },
    ],
  },
] as const;

// ---- /recommends ------------------------------------------------------------
// Honest takes on things I've used. DRAFT: these are starter opinions — swap in
// your real ones (and add/remove freely).
export type Verdict = "loved" | "fine" | "pass";

export const reviews: {
  name: string;
  category: string;
  verdict: Verdict;
  take: string;
}[] = [
  { name: "Claude", category: "AI", verdict: "loved", take: "My default thinking partner. The one I reach for when the problem is still fuzzy." },
  { name: "Obsidian", category: "Apps", verdict: "loved", take: "Where my notes actually compound. Plain files I'll still own in ten years." },
  { name: "Docker", category: "Dev tools", verdict: "loved", take: "Reproducibility in a box. 'Works on my machine' finally stopped being a problem." },
  { name: "Tailwind CSS", category: "Dev tools", verdict: "loved", take: "Once it clicks, you stop naming things and start shipping. This site runs on it." },
  { name: "Linux (Ubuntu)", category: "Dev tools", verdict: "loved", take: "Full control, no nonsense. The OS gets out of my way." },
  { name: "Notion", category: "Apps", verdict: "fine", take: "Lovely for docs, fights you the moment you treat it like a real database." },
  { name: "Wireless earbuds (budget pair)", category: "Hardware", verdict: "fine", take: "Good enough for podcasts and calls; I stopped pretending I'm an audiophile." },
  { name: "AI 'agent' browser extensions", category: "AI", verdict: "pass", take: "Most are a demo wearing a product's clothes. I'd rather build the real thing." },
];

// Friends and businesses whose work I'll vouch for.
export const shoutouts: {
  name: string;
  what: string;
  blurb: string;
  href: string;
  handle?: string;
  location?: string;
}[] = [
  {
    name: "JJ Enterprise",
    what: "Home, car & electronics",
    handle: "@jj_enterprises_ltd",
    blurb: "Makes home, shop, and car upgrades easier and more accessible: smart door locks, CCTV cameras, curtains, car tints, watches, shower heads, electronics and gaming accessories, VR headsets, smart glasses, and more. Countrywide delivery; DM or WhatsApp to order.",
    location: "Royal Palms Mall, Wing A, 3rd Floor, Shop AS7 · Ronald Ngala St, Nairobi",
    href: "https://www.instagram.com/jj_enterprises_ltd/",
  },
  {
    name: "Scentholic",
    what: "Fragrance",
    handle: "@scentholic_ke",
    blurb: "Picked up a perfume here and genuinely loved it. If you're after a good scent in Nairobi, start here.",
    href: "https://www.instagram.com/scentholic_ke/",
  },
];
