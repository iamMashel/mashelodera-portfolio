import type { Metadata } from "next";
import { Terminal, Code2, Database, Gamepad2, type LucideIcon } from "lucide-react";
import { toolkit } from "@/lib/personal";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Toolkit",
  description: "The tools, languages, and gear behind Mashel Odera's work.",
};

const icons: Record<string, LucideIcon> = {
  Terminal,
  Code2,
  Database,
  Gamepad2,
};

export default function ToolkitPage() {
  return (
    <>
      <PageHeader
        title="Toolkit"
        intro="The tools I actually reach for. Not a wishlist, the stack that does the real work, kept deliberately small."
      />
      <section className="section-pad">
        <div className="container-page">
          <RevealGroup stagger={90} className="flex flex-col gap-14">
            {toolkit.map((group) => {
              const Icon = icons[group.icon];
              return (
                <RevealItem key={group.category}>
                  <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-[0.5fr_1.5fr]">
                    <h2 className="flex items-center gap-3 font-display text-xl font-semibold text-ink">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-wash text-accent-strong">
                        {Icon && <Icon size={20} strokeWidth={1.75} />}
                      </span>
                      {group.category}
                    </h2>
                    <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                      {group.items.map((item) => (
                        <li key={item.name}>
                          <p className="font-medium text-ink">{item.name}</p>
                          <p className="mt-0.5 text-[0.95rem] text-ink-muted">
                            {item.note}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </RevealItem>
              );
            })}
          </RevealGroup>
        </div>
      </section>
      <CTABand className="pb-24" />
    </>
  );
}
