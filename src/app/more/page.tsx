import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { personalPages } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Off the clock",
  description:
    "The personal side: what Mashel is reading, building for fun, listening to, and thinking about.",
};

const byHref = Object.fromEntries(personalPages.map((p) => [p.href, p]));

// Group the pages so a growing list stays navigable, instead of one flat grid.
const groups: { label: string; blurb: string; hrefs: string[] }[] = [
  {
    label: "What I'm into",
    blurb: "Current focus, reading, and the good stuff I find online.",
    hrefs: ["/now", "/bookshelf", "/interesting"],
  },
  {
    label: "Tinkering",
    blurb: "Where curiosity goes when it's off the clock.",
    hrefs: ["/lab", "/playground", "/toolkit"],
  },
  {
    label: "Me & the work",
    blurb: "The longer story, the talks, the recommendations, the build.",
    hrefs: ["/timeline", "/speaking", "/recommends", "/colophon"],
  },
];

export default function MorePage() {
  return (
    <>
      <PageHeader
        title="Off the clock"
        intro="The work is only half of it. This is the rest, what I'm reading, what I'm tinkering with, and what's rattling around my head when no one's paying me."
        back={{ href: "/", label: "Home" }}
      />
      <section className="section-pad">
        <div className="container-page flex flex-col gap-16">
          {groups.map((group) => (
            <div key={group.label}>
              <div className="flex flex-col gap-1 border-t border-line pt-6">
                <h2 className="font-display text-2xl font-semibold text-ink">
                  {group.label}
                </h2>
                <p className="text-ink-muted">{group.blurb}</p>
              </div>
              <RevealGroup
                stagger={70}
                className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
              >
                {group.hrefs.map((href) => {
                  const p = byHref[href];
                  if (!p) return null;
                  return (
                    <RevealItem key={href}>
                      <Link
                        href={p.href}
                        className="group flex h-full flex-col gap-3 bg-bg p-7 transition-colors hover:bg-accent-wash/50"
                      >
                        <span className="text-3xl" aria-hidden="true">
                          {p.emoji}
                        </span>
                        <h3 className="flex items-center gap-1.5 font-display text-xl font-semibold text-ink">
                          {p.label}
                          <ArrowUpRight
                            size={18}
                            className="text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                          />
                        </h3>
                        <p className="text-[0.95rem] text-ink-muted">{p.blurb}</p>
                      </Link>
                    </RevealItem>
                  );
                })}
              </RevealGroup>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
