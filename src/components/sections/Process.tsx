import { process } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export function Process() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeading
          title="How I work"
          description="A short, honest loop. No big-reveal theatrics. You see the work as it takes shape."
        />

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {process.map((step, i) => (
            <RevealItem
              key={step.title}
              className="flex flex-col gap-3 bg-bg p-7"
            >
              <span className="font-mono text-sm text-accent-strong">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
              <p className="text-[0.95rem] text-ink-muted">{step.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
