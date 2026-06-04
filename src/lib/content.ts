// Home-page content: services, skills, process, testimonials.
// Testimonials marked DRAFT are placeholders — replace with real quotes + names.

export const services = [
  {
    icon: "Code2",
    title: "Frontend engineering",
    body: "Production React, Next.js, and TypeScript. Accessible, fast, and maintainable. Code a team can build on, not a prototype to throw away.",
  },
  {
    icon: "PenTool",
    title: "UI/UX & product design",
    body: "Wireframes to high-fidelity in Figma, user flows, and design systems. Design decisions I can defend, then ship myself.",
  },
  {
    icon: "Sparkles",
    title: "AI product interfaces",
    body: "Chat UIs, RAG dashboards, document workflows, and human-in-the-loop tools that make AI feel trustworthy instead of magic.",
  },
  {
    icon: "LayoutDashboard",
    title: "SaaS dashboards",
    body: "Data-dense interfaces that stay readable and navigable: clear hierarchy, real empty and loading states, no clutter.",
  },
  {
    icon: "Rocket",
    title: "Landing pages",
    body: "Conversion-focused marketing sites with crisp type and purposeful motion. The kind of first impression that gets a reply.",
  },
] as const;

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion / Framer"],
  },
  {
    label: "Design",
    items: ["UI/UX", "Figma", "Design systems", "Wireframing", "Prototyping"],
  },
  {
    label: "AI products",
    items: ["RAG interfaces", "Chat UIs", "AI dashboards", "Document workflows"],
  },
  {
    label: "Backend",
    items: ["FastAPI", "Supabase", "PostgreSQL", "REST APIs"],
  },
] as const;

export const process = [
  {
    title: "Understand before pixels",
    body: "I start with the actual problem and the people who have it: what they're trying to do, and where it breaks. The brief gets sharper before anything gets designed.",
  },
  {
    title: "Design in the open",
    body: "Wireframes and high-fidelity in Figma, shared early and often. You see decisions and tradeoffs as they happen, not at a big reveal.",
  },
  {
    title: "Build it for real",
    body: "I ship the design as production code (responsive, accessible, fast), so what you approved is what goes live, no handoff gap.",
  },
  {
    title: "Test, then ship",
    body: "Real states, real devices, real edge cases. The work leaves in a state I'd defend in a studio review.",
  },
] as const;

export const testimonials = [
  {
    // DRAFT — replace with a real quote, name, role, company.
    quote:
      "Mashel turned a vague idea into a working product faster than I thought possible, and it actually looked and felt finished. The design judgment and the engineering were both there.",
    name: "Client name",
    role: "Founder, AI startup",
  },
  {
    // DRAFT
    quote:
      "Rare to find someone who can sit in a design review and a code review and add value in both. The dashboard he built stayed clean even as the data got messy.",
    name: "Client name",
    role: "Product lead, SaaS",
  },
] as const;

export const stats = [
  { value: "5+", label: "Years building for the web" },
  { value: "20+", label: "Products shipped" },
  { value: "AI-first", label: "Where I focus now" },
] as const;
