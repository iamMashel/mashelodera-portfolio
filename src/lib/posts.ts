import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  tags: string[];
  readingMinutes: number;
};

export type Heading = { id: string; text: string; level: 2 | 3 };
export type Post = PostMeta & { html: string; headings: Heading[] };

function readingTime(text: string) {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function slugify(s: string) {
  return (
    s
      .toLowerCase()
      .replace(/<[^>]+>/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "section"
  );
}

// Add stable ids to h2/h3 in the rendered HTML and collect them for a TOC.
function withHeadingIds(html: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const seen = new Map<string, number>();
  const out = html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_m, lvl, inner) => {
    const level = Number(lvl) as 2 | 3;
    const text = inner.replace(/<[^>]+>/g, "").trim();
    let id = slugify(text);
    const n = seen.get(id) ?? 0;
    seen.set(id, n + 1);
    if (n > 0) id = `${id}-${n + 1}`;
    headings.push({ id, text, level });
    return `<h${lvl} id="${id}">${inner}</h${lvl}>`;
  });
  return { html: out, headings };
}

// YAML auto-parses an unquoted `date: 2026-04-08` into a Date object, so we
// can't assume a string. Normalize both forms to an ISO yyyy-mm-dd string.
function toISODate(value: unknown): string {
  if (!value) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).slice(0, 10);
}

function fileToMeta(file: string): PostMeta {
  const slug = file.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    date: toISODate(data.date),
    tags: data.tags ?? [],
    readingMinutes: readingTime(content),
  };
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(fileToMeta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  // Markdown here is author-controlled and rendered at build time, so marked's
  // output is trusted. If this ever renders user-submitted content, sanitize
  // the HTML (e.g. isomorphic-dompurify) before passing it to the DOM.
  const parsed = await marked.parse(content);
  const { html, headings } = withHeadingIds(parsed);
  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    date: toISODate(data.date),
    tags: data.tags ?? [],
    readingMinutes: readingTime(content),
    html,
    headings,
  };
}

export function formatDate(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[m - 1]} ${d}, ${y}`;
}
