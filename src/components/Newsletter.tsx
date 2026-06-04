import { site } from "@/lib/site";
import { SubstackIcon } from "@/components/icons/Brand";
import { Reveal } from "@/components/Reveal";

// Newsletter lives on Substack, we link out rather than collect emails here,
// so there's no backend to run and Substack handles delivery.
export function Newsletter() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-line bg-surface p-8 sm:flex-row sm:items-center md:p-10">
            <div className="max-w-md">
              <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                Notes on building safe, useful AI
              </h2>
              <p className="mt-3 text-ink-muted">
                I write about what I&apos;m learning training and building with
                AI: practical, honest, no hype. One piece at a time.
              </p>
            </div>
            <a
              href={site.newsletterUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-ink px-6 font-medium text-bg transition-colors hover:bg-accent-strong"
            >
              <SubstackIcon size={17} /> Read on Substack
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
