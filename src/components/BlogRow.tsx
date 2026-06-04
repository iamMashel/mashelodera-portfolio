import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";

export function BlogRow({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block border-t border-line py-7 transition-colors hover:bg-surface/60"
    >
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-ink-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingMinutes} min read</span>
      </div>
      <h3 className="mt-3 flex items-start justify-between gap-4 font-display text-xl font-semibold text-ink sm:text-2xl">
        <span className="transition-colors group-hover:text-accent-strong">
          {post.title}
        </span>
        <ArrowUpRight
          size={22}
          className="mt-1 shrink-0 text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong"
        />
      </h3>
      <p className="mt-2 max-w-2xl text-ink-muted">{post.excerpt}</p>
    </Link>
  );
}
