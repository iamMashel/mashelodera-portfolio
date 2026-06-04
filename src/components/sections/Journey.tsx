import { journey } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export function Journey() {
  return (
    <section className="section-pad bg-surface">
      <div className="container-page">
        <SectionHeading
          title="The long way round"
          description="Biology to game dev to training frontier AI. The detours are the point, each one taught me something the straight line wouldn't have."
        />

        <RevealGroup stagger={90} className="mt-14">
          <ol className="relative ml-3 border-l border-line">
            {journey.map((step) => (
              <RevealItem
                as="li"
                key={step.title}
                className="relative pb-10 pl-8 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent"
                />
                <span className="font-mono text-xs uppercase tracking-wider text-accent-strong">
                  {step.period}
                </span>
                <h3 className="mt-1 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="measure mt-2 text-ink-muted">{step.body}</p>
              </RevealItem>
            ))}
          </ol>
        </RevealGroup>
      </div>
    </section>
  );
}
