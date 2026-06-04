import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";

// Native <details>/<summary>: keyboard-operable and screen-reader friendly with
// zero JS, and it still works if scripts fail. The chevron rotates via the
// group-open variant.
export function FAQ() {
  return (
    <section className="section-pad scroll-mt-20 bg-surface">
      <div className="container-page">
        <SectionHeading
          title="Questions, answered"
          description="The things people usually ask before reaching out. If yours isn't here, just send it."
        />
        <RevealGroup
          stagger={70}
          className="mx-auto mt-12 max-w-3xl divide-y divide-line overflow-hidden rounded-2xl border border-line bg-bg"
        >
          {faqs.map((f) => (
            <RevealItem key={f.q}>
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-display text-lg font-semibold text-ink transition-colors hover:text-accent-strong [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-ink-muted transition-transform duration-300 ease-[var(--ease-out-quart)] group-open:rotate-45 group-open:border-accent/40 group-open:text-accent-strong">
                    <Plus size={16} />
                  </span>
                </summary>
                <div className="faq-answer px-6 pb-6">
                  <p className="measure text-ink-muted">{f.a}</p>
                </div>
              </details>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
