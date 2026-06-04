import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";
import { funProjects, madeMeLaugh, anecdotes, podcasts, frames } from "@/lib/personal";
import { PageHeader } from "@/components/PageHeader";
import { CTABand } from "@/components/CTABand";
import { SectionHeading } from "@/components/SectionHeading";
import { FrameGallery } from "@/components/FrameGallery";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Playground",
  description:
    "Side projects, things that made Mashel laugh, and small bits of wisdom.",
};

export default function PlaygroundPage() {
  return (
    <>
      <PageHeader
        title="Playground"
        intro="Where curiosity goes when it's not on a deadline: side projects, things online that made me laugh, and a couple of stories I keep coming back to."
      />

      <section className="section-pad">
        <div className="container-page">
          {/* Fun projects */}
          <SectionHeading
            title="Built for fun"
            description="No client, no brief, no pressure. Just to see if I could."
          />
          <RevealGroup
            stagger={70}
            className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3"
          >
            {funProjects.map((p) => {
              const Inner = (
                <>
                  <h3 className="flex items-center gap-1.5 font-display text-lg font-semibold text-ink">
                    {p.name}
                    {p.href && (
                      <ArrowUpRight
                        size={16}
                        className="text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-strong"
                      />
                    )}
                  </h3>
                  <p className="mt-2 text-[0.95rem] text-ink-muted">{p.blurb}</p>
                </>
              );
              return (
                <RevealItem key={p.name}>
                  {p.href ? (
                    <Link
                      href={p.href}
                      className="group flex h-full flex-col bg-bg p-7 transition-colors hover:bg-accent-wash/50"
                    >
                      {Inner}
                    </Link>
                  ) : (
                    <div className="group flex h-full flex-col bg-bg p-7">
                      {Inner}
                    </div>
                  )}
                </RevealItem>
              );
            })}
          </RevealGroup>

          {/* In my ears */}
          <div className="mt-20">
            <SectionHeading
              title="In my ears"
              description="The podcasts on rotation right now, from markets to philosophy to a guilty-pleasure dating segment."
            />
            <RevealGroup
              stagger={70}
              className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {podcasts.map((p) => (
                <RevealItem
                  key={p.slug}
                  className="flex gap-4 rounded-2xl border border-line bg-bg p-4 transition-colors hover:bg-accent-wash/40"
                >
                  <Image
                    src={`/podcasts/${p.slug}.jpg`}
                    alt={`${p.name} cover art`}
                    width={72}
                    height={72}
                    className="h-18 w-18 shrink-0 rounded-xl border border-line object-cover"
                    style={{ height: 72, width: 72 }}
                  />
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold leading-tight text-ink">
                      {p.name}
                    </h3>
                    <p className="font-mono text-[0.7rem] uppercase tracking-wider text-accent-strong">
                      {p.network}
                    </p>
                    <p className="mt-1.5 text-sm text-ink-muted">{p.blurb}</p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          {/* Made me laugh */}
          <div className="mt-20">
            <SectionHeading
              title="Made me laugh"
              description="A running list of things online that earned a genuine laugh. Updated when something gets me."
            />
            <RevealGroup stagger={60} className="mt-10 flex flex-col">
              {madeMeLaugh.map((r) => {
                const content = (
                  <>
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent-wash text-accent-strong">
                      <Play size={16} className="translate-x-px" />
                    </span>
                    <span className="text-ink group-hover:text-accent-strong">
                      {r.caption}
                    </span>
                    {r.href && (
                      <ArrowUpRight
                        size={16}
                        className="ml-auto text-ink-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    )}
                  </>
                );
                return (
                  <RevealItem key={r.caption}>
                    {r.href ? (
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group flex items-center gap-4 border-b border-line py-5 transition-colors"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4 border-b border-line py-5">
                        {content}
                      </div>
                    )}
                  </RevealItem>
                );
              })}
            </RevealGroup>
            <p className="mt-4 text-sm text-ink-muted">
              More going up as I save them.
            </p>
          </div>

          {/* A few frames */}
          <div className="mt-20">
            <SectionHeading
              title="A few frames"
              description="Life outside the screen: hikes, Sundays, and the occasional good light. Tap to view."
            />
            <Reveal className="mt-10">
              <FrameGallery frames={frames} />
            </Reveal>
          </div>

          {/* Anecdotes */}
          <div className="mt-20">
            <SectionHeading
              title="Stories I keep telling"
              description="Small things that shaped how I work."
            />
            <RevealGroup stagger={80} className="mt-10 grid gap-10 md:grid-cols-2">
              {anecdotes.map((a) => (
                <RevealItem key={a.title}>
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {a.title}
                  </h3>
                  <p className="measure mt-3 text-ink-muted">{a.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>
      <CTABand className="pb-24" />
    </>
  );
}
