"use client";

import { Link2 } from "lucide-react";
import { XIcon, LinkedinIcon } from "@/components/icons/Brand";
import { toast } from "@/lib/toast";

const btn =
  "inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-strong";

export function ShareButtons({ url, title }: { url: string; title: string }) {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast("Link copied");
    } catch {
      /* clipboard blocked; no-op */
    }
  };

  const x = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
  const linkedin = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 font-mono text-xs uppercase tracking-wider text-ink-muted">
        Share
      </span>
      <button type="button" onClick={copy} className={btn}>
        <Link2 size={15} /> Copy link
      </button>
      <a href={x} target="_blank" rel="noreferrer noopener" className={btn}>
        <XIcon size={14} /> X
      </a>
      <a href={linkedin} target="_blank" rel="noreferrer noopener" className={btn}>
        <LinkedinIcon size={14} /> LinkedIn
      </a>
    </div>
  );
}
