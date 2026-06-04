import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { SectionHeading } from "@/components/SectionHeading";
import { BlogRow } from "@/components/BlogRow";
import { Reveal } from "@/components/Reveal";

export function WritingTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          title="Writing"
          description="Notes on building AI products, design, and shipping. The thinking behind the work."
        />
        <Reveal>
          <div className="mt-12">
            {posts.map((post) => (
              <BlogRow key={post.slug} post={post} />
            ))}
          </div>
        </Reveal>
        <div className="mt-8 border-t border-line pt-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-accent-strong"
          >
            Read all writing <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
