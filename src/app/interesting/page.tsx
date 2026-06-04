import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { linkGroups } from "@/lib/extras";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Interesting",
  description:
    "A curated stash of people, ideas, and things on the internet Mashel Odera loves.",
};

export default function InterestingPage() {
  return (
    <>
      <PageHeader
        title="Interesting"
        intro="The internet is still mostly wonderful if you know where to look. This is a living stash of people I learn from and things worth your attention."
      />
      <section className="section-pad">
        <div className="container-page flex flex-col gap-14">
          {linkGroups.map((group) => (
            <div key={group.label}>
              <h2 className="mb-6 border-b border-line pb-4 font-display text-2xl font-semibold text-ink">
                {group.label}
              </h2>
              <RevealGroup stagger={60} className="flex flex-col">
                {group.links.map((l) => (
                  <RevealItem key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group grid gap-1 border-b border-line py-5 transition-colors sm:grid-cols-[14rem_1fr] sm:items-baseline"
                    >
                      <span className="inline-flex items-center gap-1.5 font-medium text-ink group-hover:text-accent-strong">
                        {l.name}
                        <ArrowUpRight
                          size={15}
                          className="text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                        />
                      </span>
                      <span className="text-ink-muted">{l.note}</span>
                    </a>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ))}
          <p className="text-sm text-ink-muted">
            A starting set, growing over time. Got something I&apos;d love? Send it
            my way.
          </p>
        </div>
      </section>
      <CTABand className="pb-24" />
    </>
  );
}
