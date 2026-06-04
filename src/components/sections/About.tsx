import Image from "next/image";
import { skillGroups, stats } from "@/lib/content";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad scroll-mt-20">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/mashel.png"
                  alt={`${site.name}, ${site.role}`}
                  width={1122}
                  height={1402}
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="w-full object-cover"
                />
              </div>
              <div className="mt-4 flex items-center justify-between font-mono text-xs text-ink-muted">
                <span>{site.name}</span>
                <span>{site.location}</span>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <h2 className="h2 text-ink">
                A designer who ships the code, and an engineer who sweats the
                design.
              </h2>
            </Reveal>

            <Reveal>
              <div className="measure mt-6 space-y-4 text-lg text-ink-muted">
                <p>
                  Most projects lose something in the handoff between the person
                  who designs and the person who builds. I&apos;m both, so
                  nothing gets lost. I&apos;ve spent five-plus years moving
                  between Figma and a codebase, and the work is better for living
                  in one head.
                </p>
                <p>
                  Lately that means AI products (RAG dashboards, document
                  workflows, chat interfaces) where the hard part isn&apos;t the
                  model, it&apos;s making it feel trustworthy and clear to a real
                  person. That&apos;s a design problem and an engineering problem
                  at once, which is exactly where I like to work.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-y border-line py-7">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                      {s.value}
                    </dd>
                    <p className="mt-1 text-sm text-ink-muted">{s.label}</p>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {skillGroups.map((g) => (
                  <div key={g.label}>
                    <h3 className="eyebrow mb-3">{g.label}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-ink"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
