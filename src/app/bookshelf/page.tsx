import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { BookshelfBrowser } from "@/components/bookshelf/BookshelfBrowser";

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
        </div>
      </section>
      <CTABand className="pb-24" />
    </>
  );
}
