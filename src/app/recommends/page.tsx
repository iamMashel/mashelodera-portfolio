import type { Metadata } from "next";
import { ArrowUpRight, MapPin } from "lucide-react";
import { shoutouts } from "@/lib/personal";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { ReviewsBrowser } from "@/components/ReviewsBrowser";
import { CTABand } from "@/components/CTABand";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Recommends",
  description:
    "Honest takes on tools and things Mashel Odera has used, plus friends and work worth your attention.",
};

export default function RecommendsPage() {
  return (
    <>
      <PageHeader
        title="Recommends"
        intro="Things I've actually used, rated honestly, and people whose work I'll happily put my name behind. No affiliate links, no favours owed."
      />
      <section className="section-pad">
        <div className="container-page">
          <SectionHeading
            title="Stuff I've tried"
            description="Tools, apps, and gear I've lived with. Filter by how I really feel about them."
          />
          <Reveal className="mt-10">
            <ReviewsBrowser />
          </Reveal>

          <div className="mt-20">
            <SectionHeading
              title="People I rate"
              description="Friends and folks doing genuinely good work. If I'm pointing at them, it's because I mean it."
            />
            <RevealGroup
              stagger={80}
              className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2"
            >
              {shoutouts.map((s) => {
                const Inner = (
                  <>
                    <h3 className="flex items-center gap-1.5 font-display text-lg font-semibold text-ink">
                      {s.name}
                      {s.href && (
                        <ArrowUpRight
                          size={16}
                          className="text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                        />
                      )}
                    </h3>
                    <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-wider text-accent-strong">
                      {s.what}
                      {s.handle && (
                        <span className="text-ink-muted"> · {s.handle}</span>
                      )}
                    </p>
                    <p className="mt-2 text-[0.95rem] text-ink-muted">{s.blurb}</p>
                    {s.location && (
                      <p className="mt-3 flex items-start gap-1.5 text-sm text-ink-muted">
                        <MapPin size={14} className="mt-0.5 shrink-0 text-accent-strong" />
                        {s.location}
                      </p>
                    )}
                  </>
                );
                return (
                  <RevealItem key={s.name}>
                    {s.href ? (
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group flex h-full flex-col bg-bg p-6 transition-colors hover:bg-accent-wash/50"
                      >
                        {Inner}
                      </a>
                    ) : (
                      <div className="group flex h-full flex-col bg-bg p-6">{Inner}</div>
                    )}
                  </RevealItem>
                );
              })}
            </RevealGroup>
            <p className="mt-4 text-sm text-ink-muted">
              Want a shoutout here? If we&apos;ve worked together and I rate what
              you do, ask.
            </p>
          </div>
        </div>
      </section>
      <CTABand className="pb-24" />
    </>
  );
}
