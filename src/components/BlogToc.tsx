"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/posts";
import { cn } from "@/lib/cn";

// Sticky table of contents with scrollspy. Highlights the heading nearest the
// top of the viewport as you read.
export function BlogToc({ headings }: { headings: Heading[] }) {
  const [active, setActive] = useState<string>(headings[0]?.id ?? "");

  useEffect(() => {
    const targets = headings
      .map((h) => document.getElementById(h.id))
      .filter((el): el is HTMLElement => !!el);
    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: [0, 1] },
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 font-mono text-xs uppercase tracking-wider text-ink-muted">
        On this page
      </p>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} className={h.level === 3 ? "ml-3" : ""}>
            <a
              href={`#${h.id}`}
              aria-current={active === h.id ? "location" : undefined}
              className={cn(
                "flex items-center gap-2 py-1 transition-colors",
                active === h.id
                  ? "font-medium text-accent-strong"
                  : "text-ink-muted hover:text-ink",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "h-1.5 w-1.5 shrink-0 rounded-full transition-colors",
                  active === h.id ? "bg-accent" : "bg-line",
                )}
              />
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
