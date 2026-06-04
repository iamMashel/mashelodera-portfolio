import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { personalPages } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export function PersonalTeaser() {
  return (
    <section className="section-pad scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          title="Off the clock"
          description="The work is only half of it. Here's what I'm reading, building for fun, and thinking about when no one's paying me to."
        />

        <RevealGroup
          stagger={80}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {personalPages.map((p) => (
            <RevealItem key={p.href}>
              <Link
                href={p.href}
                className="group flex h-full flex-col gap-3 bg-bg p-7 transition-colors hover:bg-accent-wash/50"
              >
                <span className="text-2xl" aria-hidden="true">
                  {p.emoji}
                </span>
                <h3 className="flex items-center gap-1.5 font-display text-lg font-semibold text-ink">
                  {p.label}
                  <ArrowUpRight
                    size={16}
                    className="text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                  />
                </h3>
                <p className="text-[0.95rem] text-ink-muted">{p.blurb}</p>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
