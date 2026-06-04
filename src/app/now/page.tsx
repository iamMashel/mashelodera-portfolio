import type { Metadata } from "next";
import { now, nowUpdated } from "@/lib/personal";
import { PageHeader } from "@/components/PageHeader";
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
          <RevealGroup stagger={80} className="mx-auto max-w-2xl">
            <ul className="flex flex-col">
              {now.map((item) => (
                <RevealItem
                  as="li"
                  key={item.label}
                  className="flex gap-5 border-b border-line py-7 first:pt-0 last:border-b-0"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {item.emoji}
                  </span>
                  <div>
                    <h2 className="font-display text-lg font-semibold text-ink">
                      {item.label}
                    </h2>
                    <p className="mt-1 text-ink-muted">{item.body}</p>
                  </div>
                </RevealItem>
              ))}
            </ul>
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
