"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Star, Search, RotateCw } from "lucide-react";
import { books, bookCategories, type Book } from "@/lib/personal";

function Stars({ value }: { value?: number }) {
  if (!value) return null;
  return (
    <span className="flex gap-0.5" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < value ? "fill-accent-bright text-accent-bright" : "text-cream/25"}
        />
      ))}
    </span>
  );
}

function BookCard({ book }: { book: Book }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <li>
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-pressed={flipped}
        aria-label={`${book.title} by ${book.author}. ${flipped ? "Show cover" : "Read my take"}.`}
        className="group block w-full text-left [perspective:1400px] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <div
          className="relative aspect-[2/3] w-full rounded-xl transition-[transform,box-shadow] duration-500 ease-[var(--ease-out-quart)] [transform-style:preserve-3d] group-hover:-translate-y-1.5 group-hover:[box-shadow:0_24px_50px_-24px_rgba(28,17,7,0.55)]"
          style={flipped ? { transform: "rotateY(180deg)" } : undefined}
        >
          {/* Front: cover */}
          <span className="absolute inset-0 overflow-hidden rounded-xl border border-line bg-surface-2 [backface-visibility:hidden]">
            <Image
              src={`/books/${book.slug}.jpg`}
              alt={`${book.title} cover`}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
              className="object-cover"
            />
            {book.current && (
              <span className="absolute left-2 top-2 rounded-full bg-accent px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-cream">
                Reading now
              </span>
            )}
            <span className="absolute bottom-2 right-2 grid h-7 w-7 place-items-center rounded-full bg-ink-invert/80 text-cream opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              <RotateCw size={13} />
            </span>
          </span>

          {/* Back: the take */}
          <span
            className="absolute inset-0 flex flex-col gap-2 overflow-hidden rounded-xl border border-cream/15 bg-ink-invert p-4 text-cream [backface-visibility:hidden]"
            style={{ transform: "rotateY(180deg)" }}
          >
            <Stars value={book.rating} />
            <p className="grow overflow-hidden text-[0.85rem] leading-snug text-cream/90">
              “{book.take}”
            </p>
            <span className="font-display text-sm font-semibold leading-tight">
              {book.title}
            </span>
          </span>
        </div>
      </button>

      <div className="mt-2.5">
        <p className="truncate text-sm font-medium text-ink" title={book.title}>
          {book.title}
        </p>
        <p className="truncate text-xs text-ink-muted">{book.author}</p>
      </div>
    </li>
  );
}

export function BookshelfBrowser() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: books.length };
    for (const b of books) c[b.category] = (c[b.category] ?? 0) + 1;
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter((b) => {
      const inCat = category === "All" || b.category === category;
      const inQ =
        !q ||
        b.title.toLowerCase().includes(q) ||
        b.author.toLowerCase().includes(q);
      return inCat && inQ;
    });
  }, [category, query]);

  const chips = ["All", ...bookCategories];

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-5">
        <div className="relative max-w-sm">
          <Search
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search title or author"
            aria-label="Search the bookshelf"
            className="w-full rounded-full border border-line bg-surface py-2.5 pl-10 pr-4 text-ink transition-colors focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {chips.map((c) => {
            const active = category === c;
            return (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={active}
                className={
                  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors " +
                  (active
                    ? "border-accent bg-accent text-cream"
                    : "border-line bg-surface text-ink hover:border-accent/40 hover:text-accent-strong")
                }
              >
                {c}
                <span className={active ? "text-cream/70" : "text-ink-muted"}>
                  {counts[c] ?? 0}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <ul className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {filtered.map((b) => (
            <BookCard key={b.slug} book={b} />
          ))}
        </ul>
      ) : (
        <p className="mt-12 text-ink-muted">
          Nothing matches that yet. Try another search.
        </p>
      )}

      <p className="mt-10 text-sm text-ink-muted">
        Tap any cover to flip it and read my take. {books.length} books and
        counting.
      </p>
    </div>
  );
}
