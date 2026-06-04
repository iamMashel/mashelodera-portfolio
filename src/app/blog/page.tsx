import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";
import { BlogRow } from "@/components/BlogRow";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Notes on building AI products, design, and shipping software, by Mashel Odera.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="container-page section-pad">
      <header className="max-w-2xl">
        <h1 className="h-hero text-ink">Writing</h1>
        <p className="mt-5 text-lg text-ink-muted">
          Notes on building AI products, design decisions, and what it takes to
          ship. Less hot takes, more things I learned by doing the work.
        </p>
      </header>

      <div className="mt-14">
        {posts.length === 0 ? (
          <p className="border-t border-line py-10 text-ink-muted">
            First posts are on the way.
          </p>
        ) : (
          posts.map((post) => <BlogRow key={post.slug} post={post} />)
        )}
      </div>
    </div>
  );
}
