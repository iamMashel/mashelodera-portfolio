// Central site config. Update socials / contact here — everything reads from this.
// NOTE: values marked TODO are best-guess placeholders — confirm with Mashel.

export const site = {
  name: "Mashel Odera",
  role: "Frontend developer & UI/UX designer",
  // One-line value prop used in metadata + hero subline.
  tagline:
    "I design and build AI-ready web experiences: production frontends, SaaS dashboards, and AI product prototypes.",
  location: "Nairobi, Kenya",
  available: true,
  availabilityNote: "Open to work · available worldwide",
  // Used for absolute URLs (OpenGraph, sitemap). Update to your real domain.
  url: "https://mashelodera.com",
  email: "hello@mashelodera.com",
  // TODO: confirm these handles/URLs with Mashel.
  socials: {
    github: "https://github.com/iamMashel",
    linkedin: "https://www.linkedin.com/in/mashelodera",
    x: "https://x.com/mashelodera",
  },
  // Optional: a Calendly / cal.com link for booking, and a resume file in /public.
  bookingUrl: "", // e.g. "https://cal.com/mashelodera/intro"
  resumeUrl: "/Mashel-Odera-CV.pdf", // drop the PDF into /public with this name
} as const;

export const nav = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Writing", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;
