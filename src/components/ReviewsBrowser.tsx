"use client";

import { useMemo, useState } from "react";
import { ThumbsUp, ThumbsDown, Minus, type LucideIcon } from "lucide-react";
import { reviews, type Verdict } from "@/lib/personal";

const verdictMeta: Record<
  Verdict,
  { label: string; Icon: LucideIcon; cls: string }
> = {
  loved: { label: "Loved it", Icon: ThumbsUp, cls: "border-accent/30 bg-accent-wash text-accent-strong" },
  fine: { label: "It's fine", Icon: Minus, cls: "border-line bg-surface text-ink-muted" },
  pass: { label: "Pass", Icon: ThumbsDown, cls: "border-line bg-surface-2 text-ink-muted" },
};

const filters: { key: Verdict | "all"; label: string }[] = [
  { key: "all", label: "Everything" },
  { key: "loved", label: "Loved it" },
  { key: "fine", label: "It's fine" },
  { key: "pass", label: "Pass" },
];

export function ReviewsBrowser() {
  const [filter, setFilter] = useState<Verdict | "all">("all");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: reviews.length };
    for (const r of reviews) c[r.verdict] = (c[r.verdict] ?? 0) + 1;
    return c;
  }, []);

  const shown = filter === "all" ? reviews : reviews.filter((r) => r.verdict === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const active = filter === f.key;
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={active}
              className={
                "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors " +
                (active
                  ? "border-accent bg-accent text-cream"
                  : "border-line bg-surface text-ink hover:border-accent/40 hover:text-accent-strong")
              }
            >
              {f.label}
              <span className={active ? "text-cream/70" : "text-ink-muted"}>
                {counts[f.key] ?? 0}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((r) => {
          const v = verdictMeta[r.verdict];
          return (
            <li key={r.name} className="flex flex-col gap-3 bg-bg p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {r.name}
                  </h3>
                  <p className="font-mono text-[0.7rem] uppercase tracking-wider text-ink-muted">
                    {r.category}
                  </p>
                </div>
                <span
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${v.cls}`}
                >
                  <v.Icon size={13} /> {v.label}
                </span>
              </div>
              <p className="text-[0.95rem] text-ink-muted">{r.take}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
