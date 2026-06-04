"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type Payload = { json: unknown; markdown: string; text: string };

export function CopyButtons({ payload }: { payload: Payload }) {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = async (kind: keyof Payload) => {
    const value =
      kind === "json" ? JSON.stringify(payload.json, null, 2) : payload[kind];
    try {
      await navigator.clipboard.writeText(String(value));
      setCopied(kind);
      setTimeout(() => setCopied(null), 1600);
    } catch {
      setCopied(null);
    }
  };

  const kinds: { key: keyof Payload; label: string }[] = [
    { key: "text", label: "text" },
    { key: "markdown", label: "Markdown" },
    { key: "json", label: "JSON" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
        Copy as
      </span>
      {kinds.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => copy(key)}
          className="inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-strong"
        >
          {copied === key ? <Check size={14} /> : <Copy size={14} />}
          {copied === key ? "Copied" : label}
        </button>
      ))}
    </div>
  );
}
