import type { Metadata } from "next";
import { journey } from "@/lib/content";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "Mashel Odera's path: molecular biology, game development, training frontier AI, and building.",
};

export default function TimelinePage() {
  return (
    <>
      <PageHeader
        title="The long way round"
        intro="I did not take the straight line into AI, and I'm glad. Biology taught me precision, games taught me to build, and the rest taught me to trust the work. Here's the path."
      />
      <section className="section-pad">
        <div className="container-page">
          <RevealGroup stagger={110}>
            <ol className="relative mx-auto max-w-3xl border-l-2 border-line">
              {journey.map((step, i) => (
                <RevealItem
                  as="li"
                  key={step.title}
                  className="relative pb-14 pl-10 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="absolute -left-[11px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-bg bg-accent text-[0.6rem] font-semibold text-cream"
                  >
                    {i + 1}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-accent-strong">
                    {step.period}
                  </span>
                  <h2 className="mt-1 font-display text-2xl font-semibold text-ink">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-lg text-ink-muted">{step.body}</p>
                </RevealItem>
              ))}
            </ol>
          </RevealGroup>
        </div>
      </section>
      <CTABand
        className="pb-24"
        title="Like how that turned out? Let's add a chapter together."
        subtitle="I'm open for projects, training work, and workshops."
      />
    </>
  );
}
