import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
import { AvailabilityBadge } from "@/components/AvailabilityBadge";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* soft accent glow, decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent-wash blur-3xl"
      />
      <div className="container-page relative grid items-center gap-12 pb-16 pt-12 md:pb-24 md:pt-20 lg:grid-cols-[1.05fr_0.95fr]">
        <RevealGroup stagger={90}>
          <RevealItem className="mb-6">
            <AvailabilityBadge />
          </RevealItem>

          <h1 className="h-hero text-ink">
            <RevealItem as="span" className="block">
              I design and build
            </RevealItem>
            <RevealItem as="span" className="block">
              <span className="relative whitespace-nowrap">
                <span className="relative z-10">AI-ready</span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-0.1em] bottom-[0.08em] z-0 h-[0.42em] -rotate-1 rounded-sm bg-accent-wash"
                />
              </span>{" "}
              web
            </RevealItem>
            <RevealItem as="span" className="block">
              experiences.
            </RevealItem>
          </h1>

          <RevealItem>
            <p className="measure mt-6 text-lg text-ink-muted">
              I&apos;m {site.name.split(" ")[0]}, a frontend developer &amp;
              UI/UX designer in {site.location}. I take products from Figma to
              production (marketing sites, SaaS dashboards, AI interfaces) in
              React, Next.js, and Tailwind.
            </p>
          </RevealItem>

          <RevealItem className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#work"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-bg transition-colors hover:bg-accent-strong"
            >
              See the work <ArrowRight size={18} />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-ink/20 px-6 font-medium text-ink transition-colors hover:border-ink hover:bg-surface"
            >
              Start a project
            </Link>
          </RevealItem>

          <RevealItem className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-muted">
            <a
              href={site.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 transition-colors hover:text-ink"
            >
              GitHub <ArrowUpRight size={14} />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 transition-colors hover:text-ink"
            >
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1 transition-colors hover:text-ink"
            >
              {site.email}
            </a>
          </RevealItem>
        </RevealGroup>

        {/* Hero visual: real product screenshot in a browser frame */}
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-line bg-bg shadow-[0_30px_80px_-40px_rgba(15,15,15,0.45)]">
            <div className="flex items-center gap-1.5 border-b border-line bg-surface px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="h-2.5 w-2.5 rounded-full bg-line" />
              <span className="ml-3 font-mono text-xs text-ink-muted">
                bizflow-ai · dashboard
              </span>
            </div>
            <Image
              src="/work/bizflow.png"
              alt="BizFlow AI dashboard, designed and built by Mashel Odera"
              width={1599}
              height={781}
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
              className="w-full"
            />
          </div>
          <div className="mt-3 text-right font-mono text-xs text-ink-muted">
            BizFlow AI · a GenAI document workflow tool
          </div>
        </Reveal>
      </div>
    </section>
  );
}
