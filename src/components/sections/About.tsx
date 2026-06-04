import Image from "next/image";
import { skillGroups, stats } from "@/lib/content";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="section-pad scroll-mt-20">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="h2 text-ink">
              A scientist who trains AI, and an engineer who ships it.
            </h2>
            <p className="mt-4 font-display text-xl text-accent-strong">
              {site.motto}
            </p>
            <figure className="mt-8">
              <div className="overflow-hidden rounded-2xl border border-line">
                <Image
                  src="/photos/building.jpg"
                  alt="Mashel and friends in front of a multi-monitor coding setup"
                  width={1500}
                  height={1125}
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 text-sm text-ink-muted">
                Building toward AGI with friends, one piece at a time. Nairobi.
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <div className="measure space-y-4 text-lg text-ink-muted">
                <p>
                  I started in a molecular biology lab, where a 98% sample
                  success rate isn&apos;t a brag, it&apos;s the price of being
                  trusted. That training, evidence over vibes and precision
                  under pressure, turned out to be exactly what modern AI is
                  missing.
                </p>
                <p>
                  So I brought it to the models. I evaluate and train LLMs
                  (RLHF, SFT, multimodal), catching the failures reward models
                  miss. I build agentic products that use those models well. And
                  I teach the craft, because the bottleneck on good AI is people
                  who understand it, not GPUs.
                </p>
                <p>
                  The throughline is trust: making AI legible, grounded, and
                  safe enough that a real person would stake a decision on it.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-y border-line py-7 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-2xl font-semibold text-ink sm:text-3xl">
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
