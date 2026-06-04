import { engagement } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";

// Numbered markers are deliberate here: this is a real ordered sequence
// (talk -> scope -> build), not decorative section scaffolding.
export function Engagement() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeading
          title="How working together goes"
          description="No big-reveal theatrics and no vague hourly black holes. A short, honest loop you can see as it takes shape."
        />

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {engagement.map((step, i) => (
            <RevealItem key={step.title} className="flex flex-col gap-3 bg-bg p-8">
              <span className="font-display text-3xl font-semibold text-accent">
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
