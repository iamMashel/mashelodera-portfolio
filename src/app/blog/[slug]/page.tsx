import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <article className="container-page section-pad">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={16} /> All writing
      </Link>

      <header className="mt-8 max-w-3xl">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wider text-ink-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingMinutes} min read</span>
        </div>
        <h1 className="mt-4 font-display text-[clamp(2.1rem,5vw,3.4rem)] font-semibold leading-[1.05] tracking-tight text-ink">
          {post.title}
        </h1>
        {post.tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}
      </header>

      <div
        className="prose mt-12"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />

      <aside className="mt-16 max-w-3xl rounded-2xl border border-line bg-surface p-8">
        <h2 className="font-display text-2xl font-semibold text-ink">
          Working on something like this?
        </h2>
        <p className="mt-2 max-w-md text-ink-muted">
          I design and build AI products, dashboards, and marketing sites. If
          this resonated, let&apos;s talk.
        </p>
        <div className="mt-5">
          <Button href={`mailto:${site.email}`}>Get in touch</Button>
        </div>
      </aside>
    </article>
  );
}
