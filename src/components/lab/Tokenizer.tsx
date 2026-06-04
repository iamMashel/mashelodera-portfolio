"use client";

import { useMemo, useState } from "react";

// A toy tokenizer. Not a real BPE tokenizer, it splits on words, punctuation,
// and whitespace to give an intuition for how models chop text into pieces.
// Real tokenizers are subword; this is the friendly cartoon version.
function tokenize(text: string): string[] {
  if (!text) return [];
  return text.match(/\s+|[A-Za-z0-9]+|[^\sA-Za-z0-9]/g) ?? [];
}

const sample = "Superintelligence, built one safe piece at a time.";

export function Tokenizer() {
  const [text, setText] = useState(sample);
  const tokens = useMemo(() => tokenize(text), [text]);
  const visible = tokens.filter((t) => t.trim().length > 0);
  // A rough characters-per-token ratio, just for intuition.
  const ratio = visible.length ? (text.length / visible.length).toFixed(1) : "0";

  return (
    <div>
      <label htmlFor="tok" className="mb-1.5 block text-sm text-ink-muted">
        Type something
      </label>
      <textarea
        id="tok"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={3}
        className="w-full resize-y rounded-xl border border-line bg-surface px-4 py-3 text-ink transition-colors focus:outline-none focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30"
      />

      <div className="mt-4 flex flex-wrap gap-1.5" aria-live="polite">
        {tokens.map((t, i) =>
          t.trim().length === 0 ? (
            <span key={i} className="px-0.5" />
          ) : (
            <span
              key={i}
              className="rounded-md border border-accent/20 bg-accent-wash px-2 py-1 font-mono text-sm text-accent-strong"
            >
              {t}
            </span>
          ),
        )}
      </div>

      <dl className="mt-5 flex gap-8 border-t border-line pt-4">
        <div>
          <dt className="text-sm text-ink-muted">Tokens</dt>
          <dd className="font-display text-2xl font-semibold text-ink">
            {visible.length}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-ink-muted">Characters</dt>
          <dd className="font-display text-2xl font-semibold text-ink">
            {text.length}
          </dd>
        </div>
        <div>
          <dt className="text-sm text-ink-muted">Chars / token</dt>
          <dd className="font-display text-2xl font-semibold text-ink">{ratio}</dd>
        </div>
      </dl>
    </div>
  );
}
