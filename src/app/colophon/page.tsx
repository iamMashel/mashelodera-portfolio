import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { colophon } from "@/lib/extras";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { CopyButtons } from "@/components/CopyButtons";
import { CTABand } from "@/components/CTABand";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Colophon",
  description: "How this website is built, and the choices behind it.",
};

// Build copy-able representations of the colophon, Chris-Coyier style.
const payload = {
  json: Object.fromEntries(colophon.map((c) => [c.label.toLowerCase(), c.value])),
  markdown:
    `## How ${site.name}'s site is built\n\n` +
    colophon.map((c) => `- **${c.label}:** ${c.value}`).join("\n"),
  text: colophon.map((c) => `${c.label}: ${c.value}`).join("\n"),
};

export default function ColophonPage() {
  return (
    <>
      <PageHeader
        title="Colophon"
        intro="A site about building things should say how it's built. No secrets here, just the choices and the why."
      />
      <section className="section-pad">
        <div className="container-page">
          <Reveal>
            <CopyButtons payload={payload} />
          </Reveal>

          <RevealGroup stagger={70} className="mt-10">
            <dl className="divide-y divide-line border-y border-line">
              {colophon.map((c) => (
                <RevealItem
                  key={c.label}
                  className="grid gap-1 py-5 sm:grid-cols-[12rem_1fr] sm:items-baseline"
                >
                  <dt className="font-mono text-xs uppercase tracking-wider text-accent-strong">
                    {c.label}
                  </dt>
                  <dd className="text-ink">{c.value}</dd>
                </RevealItem>
              ))}
            </dl>
          </RevealGroup>

          <Reveal>
            <div className="measure mt-10 space-y-4 text-ink-muted">
              <p>
                The whole thing is static where it can be and dynamic only where
                it must be (the contact form). It loads no third-party scripts,
                sets no tracking cookies, and ships a strict content-security
                policy. Practising what I preach: fast, accessible, and honest.
              </p>
              <p>
                The source is on{" "}
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline inline-flex items-center gap-1"
                >
                  GitHub <ArrowUpRight size={14} />
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
      <CTABand
        className="pb-24"
        title="Want a site that's this considered?"
        subtitle="Fast, accessible, on-brand, and built to last. That's the default, not the upsell."
      />
    </>
  );
}
