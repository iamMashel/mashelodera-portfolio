import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { personalPages } from "@/lib/site";
import { PageHeader } from "@/components/PageHeader";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Off the clock",
  description:
    "The personal side: what Mashel is reading, building for fun, listening to, and thinking about.",
};

export default function MorePage() {
  return (
    <>
      <PageHeader
        title="Off the clock"
        intro="The work is only half of it. This is the rest, what I'm reading, what I'm tinkering with, and what's rattling around my head when no one's paying me."
        back={{ href: "/", label: "Home" }}
      />
      <section className="section-pad">
        <div className="container-page">
          <RevealGroup
            stagger={80}
            className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2"
          >
            {personalPages.map((p) => (
              <RevealItem key={p.href}>
                <Link
                  href={p.href}
                  className="group flex h-full flex-col gap-3 bg-bg p-8 transition-colors hover:bg-accent-wash/50"
                >
                  <span className="text-3xl" aria-hidden="true">
                    {p.emoji}
                  </span>
                  <h2 className="flex items-center gap-1.5 font-display text-2xl font-semibold text-ink">
                    {p.label}
                    <ArrowUpRight
                      size={20}
                      className="text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                    />
                  </h2>
                  <p className="text-ink-muted">{p.blurb}</p>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
