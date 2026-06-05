import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { SectionHeading } from "@/components/SectionHeading";
import { BookshelfBrowser } from "@/components/bookshelf/BookshelfBrowser";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { readingList, readingListSource } from "@/lib/personal";

export const metadata: Metadata = {
  title: "Bookshelf",
  description:
    "What Mashel Odera reads, grouped by genre, with honest one-line takes. Philosophy, sci-fi, biographies, business, comics, self-help, and more.",
};

export default function BookshelfPage() {
  return (
    <>
      <PageHeader
        title="Bookshelf"
        intro="Philosophy, science fiction, biographies, business, comics, and the odd self-help book. Filter by genre, search for a title, and tap any cover to flip it for my take."
      />
      <section className="section-pad">
        <div className="container-page">
          <BookshelfBrowser />

          <div className="mt-20">
            <SectionHeading
              title="On my list"
              description={`${readingListSource}. Picking my next few.`}
            />
            <RevealGroup
              stagger={70}
              className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
            >
              {readingList.map((b) => (
                <RevealItem key={b.title} className="flex flex-col gap-2 bg-bg p-6">
                  <span className="w-fit rounded-full border border-line bg-surface px-2.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-ink-muted">
                    Want to read
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                    {b.title}
                  </h3>
                  <p className="font-mono text-[0.7rem] uppercase tracking-wider text-accent-strong">
                    {b.author}
                  </p>
                  <p className="mt-1 text-[0.95rem] text-ink-muted">{b.note}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>
      <CTABand className="pb-24" />
    </>
  );
}
