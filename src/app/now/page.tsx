import type { Metadata } from "next";
import { now, nowUpdated } from "@/lib/personal";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Now",
  description: "What Mashel Odera is focused on right now.",
};

export default function NowPage() {
  return (
    <>
      <PageHeader
        title="Now"
        intro="A snapshot of what I'm actually doing at the moment, the honest version, not the highlight reel. Inspired by Derek Sivers' /now movement."
        meta={`Last updated · ${nowUpdated}`}
      />
      <section className="section-pad">
        <div className="container-page">
          {/* A vertical feed: each item anchored by a clay emoji badge on a
              hairline rail. Deliberately not the boxed card grid used elsewhere. */}
          <RevealGroup stagger={90} className="mx-auto max-w-2xl">
            <ol className="relative ml-3 border-l border-line">
              {now.map((item) => (
                <RevealItem
                  as="li"
                  key={item.label}
                  className="relative pb-9 pl-9 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[1.1rem] top-0 grid h-9 w-9 place-items-center rounded-full border border-line bg-accent-wash text-lg shadow-[0_1px_2px_rgba(28,17,7,0.06)]"
                  >
                    {item.emoji}
                  </span>
                  <h2 className="font-display text-xl font-semibold text-ink">
                    {item.label}
                  </h2>
                  <p className="mt-1.5 text-lg text-ink-muted">{item.body}</p>
                </RevealItem>
              ))}
            </ol>
          </RevealGroup>
        </div>
      </section>
      <CTABand className="pb-24" />
    </>
  );
}
