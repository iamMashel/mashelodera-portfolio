"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { personalPages } from "@/lib/site";

const labels: Record<string, string> = {
  "/privacy": "Privacy",
  "/blog": "Writing",
  "/more": "Off the clock",
};

function labelFor(href: string) {
  const pp = personalPages.find((p) => p.href === href);
  if (pp) return pp.label;
  if (labels[href]) return labels[href];
  return href
    .replace(/^\//, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

// Auto-derives a breadcrumb trail from the current route. Personal pages get a
// "Off the clock" parent (linking to /more); everything else sits under Home.
export function Breadcrumbs() {
  const pathname = usePathname() || "/";
  const isPersonal = personalPages.some((p) => p.href === pathname);

  const crumbs: { label: string; href: string }[] = [{ label: "Home", href: "/" }];
  if (isPersonal && pathname !== "/more") {
    crumbs.push({ label: "Off the clock", href: "/more" });
  }
  crumbs.push({ label: labelFor(pathname), href: pathname });

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1 font-mono text-xs uppercase tracking-wider text-ink-muted">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.href} className="flex items-center gap-1">
              {last ? (
                <span aria-current="page" className="text-accent-strong">
                  {c.label}
                </span>
              ) : (
                <>
                  <Link href={c.href} className="transition-colors hover:text-ink">
                    {c.label}
                  </Link>
                  <ChevronRight size={13} className="opacity-50" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
