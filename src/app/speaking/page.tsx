import type { Metadata } from "next";
import { Mic } from "lucide-react";
import { speakingTopics, speakingFormats } from "@/lib/extras";
import { site, whatsappHref } from "@/lib/site";
import { WhatsappIcon } from "@/components/icons/Brand";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Speaking",
  description:
    "Mashel Odera speaks and runs workshops on training, building with, and trusting AI. Book a talk.",
};

export default function SpeakingPage() {
  return (
    <>
      <PageHeader
        title="Speaking & workshops"
        intro="I talk about what it actually takes to train, build with, and trust AI, without the hype and without dumbing it down. Conferences, teams, and cohorts."
      />
      <section className="section-pad">
        <div className="container-page">
          <div className="flex flex-wrap gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-cream transition-colors hover:bg-accent-bright"
            >
              <WhatsappIcon size={18} /> Book me to speak
            </a>
            <a
              href={`mailto:${site.email}?subject=Speaking%20enquiry`}
              className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/20 px-6 font-medium text-ink transition-colors hover:border-ink hover:bg-surface"
            >
              <Mic size={18} /> Email an enquiry
            </a>
          </div>

          <div className="mt-16">
            <SectionHeading
              title="Talks I give"
              description="Each can be a 20-minute spark or a half-day deep dive. Always tuned to your audience."
            />
            <RevealGroup
              stagger={80}
              className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2"
            >
              {speakingTopics.map((t) => (
                <RevealItem key={t.title} className="flex flex-col gap-2 bg-bg p-7">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {t.title}
                  </h3>
                  <p className="text-[0.95rem] text-ink-muted">{t.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div className="mt-16">
            <SectionHeading title="Formats" />
            <RevealGroup stagger={80} className="mt-12 grid gap-8 sm:grid-cols-3">
              {speakingFormats.map((f) => (
                <RevealItem key={f.label}>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {f.label}
                  </h3>
                  <p className="mt-1 text-ink-muted">{f.note}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>
      <CTABand
        className="pb-24"
        title="Got a stage, a team, or a cohort?"
        subtitle="Tell me the audience and the date. I'll tailor a talk that lands."
      />
    </>
  );
}
