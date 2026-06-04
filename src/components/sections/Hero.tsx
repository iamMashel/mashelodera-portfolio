import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";
import { WhatsappIcon } from "@/components/icons/Brand";

const Verb = ({ children }: { children: React.ReactNode }) => (
  <span className="text-accent-bright">{children}</span>
);

// Headline line: rises from a clipped baseline. `i` staggers the lines.
function Line({ i, children }: { i: number; children: React.ReactNode }) {
  return (
    <span className="hero-line">
      <span style={{ "--i": i } as CSSProperties}>{children}</span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="surface-deep surface-deep-tex relative overflow-hidden">
      <div className="container-page relative grid items-center gap-12 pb-16 pt-14 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          {site.available && (
            <p
              className="hero-rise mb-7"
              style={{ "--i": 0 } as CSSProperties}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-3 py-1.5 text-sm text-cream-muted">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-bright opacity-70 motion-reduce:hidden" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-bright" />
                </span>
                {site.availabilityNote}
              </span>
            </p>
          )}

          <h1 className="h-hero text-cream">
            <Line i={0}>
              I <Verb>train</Verb> AI,
            </Line>
            <Line i={1}>
              <Verb>build</Verb> with it,
            </Line>
            <Line i={2}>
              and <Verb>teach</Verb> it.
            </Line>
          </h1>

          <p
            className="hero-rise measure mt-7 text-lg text-cream-muted"
            style={{ "--i": 6 } as CSSProperties}
          >
            I&apos;m {site.name.split(" ")[0]}, an AI specialist in{" "}
            {site.location}. I&apos;ve trained frontier models for Turing,
            Outlier and iMerit, shipped agentic AI products, and taught 200+
            people the craft, with a scientist&apos;s precision and dual degrees
            in Computer Science and Molecular Biology.
          </p>

          <div
            className="hero-rise mt-9 flex flex-wrap items-center gap-3"
            style={{ "--i": 7 } as CSSProperties}
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-cream transition-[background-color,transform] duration-200 hover:bg-accent-bright active:scale-[0.98]"
            >
              <WhatsappIcon size={18} /> Start a project
            </a>
            <Link
              href="/#work"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/25 px-6 font-medium text-cream transition-[background-color,transform] duration-200 hover:bg-cream/10 active:scale-[0.98]"
            >
              See the work <ArrowRight size={18} />
            </Link>
          </div>

          <div
            className="hero-rise mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream-muted"
            style={{ "--i": 8 } as CSSProperties}
          >
            <span className="font-mono text-xs uppercase tracking-wider">
              Trained models for
            </span>
            <span className="text-cream">Turing</span>
            <span aria-hidden className="opacity-40">·</span>
            <span className="text-cream">Outlier AI</span>
            <span aria-hidden className="opacity-40">·</span>
            <span className="text-cream">iMerit</span>
            <span aria-hidden className="opacity-40">·</span>
            <span className="text-cream">Handshake AI</span>
            <span aria-hidden className="opacity-40">·</span>
            <span className="text-cream">Fortune 500 teams</span>
          </div>
        </div>

        {/* Portrait */}
        <div className="mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative">
            <div
              aria-hidden="true"
              className="hero-bloom absolute -inset-3 -z-10 rounded-[2rem] bg-accent/25 blur-2xl"
            />
            <div className="hero-portrait overflow-hidden rounded-3xl border border-cream/15 bg-ink-invert-2 shadow-[0_40px_90px_-50px_rgba(0,0,0,0.8)]">
              <Image
                src="/mashel.jpg"
                alt={`${site.name}, AI specialist, in ${site.location}`}
                width={900}
                height={1125}
                priority
                sizes="(max-width: 1024px) 90vw, 460px"
                className="w-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between font-mono text-xs text-cream-muted">
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 transition-colors hover:text-cream"
              >
                {site.name} <ArrowUpRight size={13} />
              </a>
              <span>{site.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
