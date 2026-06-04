import type { Metadata } from "next";
import { uses } from "@/lib/personal";
import { PageHeader } from "@/components/PageHeader";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Uses",
  description: "The tools, languages, and gear behind Mashel Odera's work.",
};

export default function UsesPage() {
  return (
    <>
      <PageHeader
        title="Uses"
        intro="The tools I actually reach for. Not a wishlist, the stack that does the real work, kept deliberately small."
      />
      <section className="section-pad">
        <div className="container-page">
          <RevealGroup stagger={90} className="flex flex-col gap-14">
            {uses.map((group) => (
              <RevealItem key={group.category}>
                <div className="grid gap-6 border-t border-line pt-6 md:grid-cols-[0.5fr_1.5fr]">
                  <h2 className="font-display text-xl font-semibold text-ink">
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
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
