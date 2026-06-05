// Central site config. Contact, socials, positioning, everything reads from here.

export const site = {
  name: "Mashel Odera",
  // Short role used in metadata + nav contexts.
  role: "AI Specialist, trainer, builder & educator",
  // The spike, in one line. Used as hero topline + meta description seed.
  tagline:
    "I train AI, build with it, and teach it, with a scientist's precision. AI specialist in Nairobi working with teams worldwide.",
  // The personal "why", threaded through the site as a signature line.
  motto: "We can all build safe superintelligence, one piece at a time.",
  location: "Nairobi, Kenya",
  available: true,
  availabilityNote: "Open for projects · Nairobi & remote worldwide",

  // Absolute URLs (OpenGraph, sitemap). Swap to the custom domain once it's live.
  url: "https://mashelodera-portfolio.vercel.app",

  email: "mashelodera1@gmail.com",
  // Digits only, for wa.me links. Display version below.
  whatsapp: "254791982261",
  whatsappDisplay: "+254 791 982 261",
  // Pre-filled WhatsApp opener.
  whatsappMessage: "Hi Mashel, I found your site and I'd like to talk about a project.",

  socials: {
    github: "https://github.com/iamMashel",
    linkedin: "https://www.linkedin.com/in/mashelodera",
    x: "https://x.com/mashel_odera",
    instagram: "https://www.instagram.com/iam.mashel/",
    substack: "https://substack.com/@mashelodera",
  },

  // Cal.com / Calendly link for "Book a call". Leave "" to hide the booking CTA.
  bookingUrl: "", // TODO: paste your booking link, e.g. "https://cal.com/mashelodera/intro"
  resumeUrl: "/Mashel-Odera-CV.pdf", // PDF lives in /public

  // Newsletter lives on Substack.
  newsletterUrl: "https://substack.com/@mashelodera",
} as const;

// Build a wa.me deep link with the pre-filled opener.
export const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Writing", href: "/blog" },
  { label: "More", href: "/more" },
  { label: "Contact", href: "/#contact" },
] as const;

// Personal "Off the clock" pages, surfaced on /more and in the footer.
export const personalPages = [
  {
    href: "/now",
    label: "Now",
    blurb: "What I'm focused on this month.",
    emoji: "🟢",
  },
  {
    href: "/bookshelf",
    label: "Bookshelf",
    blurb: "What I'm reading, what I've read, and my honest takes.",
    emoji: "📚",
  },
  {
    href: "/playground",
    label: "Playground",
    blurb: "Side projects, things that made me laugh, small wisdom.",
    emoji: "🧪",
  },
  {
    href: "/toolkit",
    label: "Toolkit",
    blurb: "The tools, gear, and stack behind the work.",
    emoji: "🛠️",
  },
  {
    href: "/lab",
    label: "Lab",
    blurb: "Small interactive experiments you can actually play with.",
    emoji: "🔬",
  },
  {
    href: "/timeline",
    label: "Timeline",
    blurb: "The long way round: biology to game dev to frontier AI.",
    emoji: "🧬",
  },
  {
    href: "/interesting",
    label: "Interesting",
    blurb: "A curated stash of things on the internet I love.",
    emoji: "🔗",
  },
  {
    href: "/speaking",
    label: "Speaking",
    blurb: "Talks and workshops I give. Book me for yours.",
    emoji: "🎤",
  },
  {
    href: "/recommends",
    label: "Recommends",
    blurb: "Stuff I've tried and rated, plus friends whose work I vouch for.",
    emoji: "⭐",
  },
  {
    href: "/colophon",
    label: "Colophon",
    blurb: "How this very site is built, and why.",
    emoji: "📐",
  },
] as const;

// Rotating "words of wisdom", the first is the real motto; the rest are
// seed placeholders. DRAFT: swap in your own lines.
export const wisdom = [
  "We can all build safe superintelligence, one piece at a time.",
  "Precision is a kindness. Sloppy work makes other people do the thinking.",
  "Learn the boring fundamentals. They compound while the hype cycles.",
  "Ship the small version. A real thing beats a perfect plan.",
] as const;
