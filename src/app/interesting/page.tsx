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
        <div className="container-page flex flex-col gap-16">
          {linkGroups.map((group) => (
            <div key={group.label}>
              <div className="flex items-baseline justify-between gap-4 border-b border-line pb-4">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {group.label}
                </h2>
                <span className="font-mono text-xs text-ink-muted">
                  {String(group.links.length).padStart(2, "0")}
                </span>
              </div>
              <RevealGroup stagger={60} className="mt-2 flex flex-col">
                {group.links.map((l) => (
                  <RevealItem key={l.url}>
                    <a
                      href={l.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group -mx-3 grid gap-1 rounded-xl border-b border-line px-3 py-5 transition-colors hover:border-transparent hover:bg-accent-wash/50 sm:grid-cols-[15rem_1fr] sm:items-baseline"
                    >
                      <span className="inline-flex items-center gap-1.5 font-display text-lg font-medium text-ink group-hover:text-accent-strong">
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
