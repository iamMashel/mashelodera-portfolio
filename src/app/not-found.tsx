import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { personalPages } from "@/lib/site";

const detours = personalPages.slice(0, 6);

export default function NotFound() {
  return (
    <section className="surface-deep surface-deep-tex">
      <div className="container-page flex min-h-[80vh] flex-col justify-center py-24">
        <p className="font-mono text-sm text-accent-bright">404 · undefined behaviour</p>
        <h1 className="h-hero mt-3 text-cream">
          This page hallucinated.
        </h1>
        <p className="mt-5 max-w-lg text-lg text-cream-muted">
          Even the best models make things up sometimes. This link points to
          something that isn&apos;t there. Let&apos;s ground you back in reality.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-cream transition-colors hover:bg-accent-bright"
          >
            <ArrowLeft size={18} /> Back home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/25 px-6 font-medium text-cream transition-colors hover:bg-cream/10"
          >
            Work with me
          </Link>
        </div>

        <div className="mt-14">
          <p className="font-mono text-xs uppercase tracking-wider text-cream-muted">
            Or take a detour
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {detours.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="inline-flex items-center gap-1 text-cream/80 transition-colors hover:text-cream"
                >
                  {p.emoji} {p.label}
                  <ArrowUpRight size={13} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
