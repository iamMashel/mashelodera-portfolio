import type { Metadata } from "next";
import { Star } from "lucide-react";
import { currentlyReading, haveRead, type Book } from "@/lib/personal";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Bookshelf",
  description:
    "What Mashel Odera is reading, what he's read, and his honest one-line takes.",
};

function Rating({ value }: { value?: number }) {
  if (!value) return null;
  return (
    <span className="flex gap-0.5" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < value ? "fill-accent text-accent" : "text-line"
          }
        />
      ))}
    </span>
  );
}

function Shelf({ books }: { books: Book[] }) {
  return (
    <RevealGroup
      stagger={70}
      className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2"
    >
      {books.map((b) => (
        <RevealItem key={b.title} className="flex flex-col gap-2 bg-bg p-7">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold text-ink">
              {b.title}
            </h3>
            <Rating value={b.rating} />
          </div>
          <p className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            {b.author}
          </p>
          <p className="mt-1 text-[0.95rem] text-ink-muted">{b.take}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

export default function BookshelfPage() {
  return (
    <>
      <PageHeader
        title="Bookshelf"
        intro="I read across AI, biology, and how people think, the three things I can't stop connecting. Takes are mine and deliberately short."
      />
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading title="Currently reading" />
          <Shelf books={currentlyReading} />

          <div className="mt-20">
            <SectionHeading title="Read & rated" />
            <Shelf books={haveRead} />
          </div>
        </div>
      </section>
      <CTABand className="pb-24" />
    </>
  );
}
