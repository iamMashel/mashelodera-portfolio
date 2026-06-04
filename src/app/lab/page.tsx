import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { Reveal } from "@/components/Reveal";
import { GameOfLife } from "@/components/lab/GameOfLife";
import { Tokenizer } from "@/components/lab/Tokenizer";

export const metadata: Metadata = {
  title: "Lab",
  description:
    "Small interactive experiments by Mashel Odera, things to play with, not just look at.",
};

function Experiment({
  title,
  blurb,
  children,
}: {
  title: string;
  blurb: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <article className="rounded-2xl border border-line bg-bg p-6 sm:p-8">
        <h2 className="font-display text-2xl font-semibold text-ink">{title}</h2>
        <p className="measure mt-2 text-ink-muted">{blurb}</p>
        <div className="mt-6">{children}</div>
      </article>
    </Reveal>
  );
}

export default function LabPage() {
  return (
    <>
      <PageHeader
        title="Lab"
        intro="A corner for small interactive experiments. The best way to understand a thing is to poke at it, so these are made to be played with, not just read."
      />
      <section className="section-pad">
        <div className="container-page flex flex-col gap-10">
          <Experiment
            title="Game of Life"
            blurb="Three rules, run on a grid, and complexity appears from nowhere. It's the cleanest intuition I know for emergence, and a quiet reminder that big things are built one small piece at a time. Click to draw, then press play."
          >
            <GameOfLife />
          </Experiment>

          <Experiment
            title="Toy tokenizer"
            blurb="Language models don't read words, they read tokens. This is the friendly cartoon version: type anything and watch it get chopped into pieces, with a rough characters-per-token count."
          >
            <Tokenizer />
          </Experiment>
        </div>
      </section>
      <CTABand
        className="pb-24"
        title="Want something like this built for real?"
        subtitle="Interactive demos, agents, dashboards, I build the working version, not just the toy."
      />
    </>
  );
}
