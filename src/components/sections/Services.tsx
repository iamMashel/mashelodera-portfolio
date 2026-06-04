import {
  Bot,
  Brain,
  Code2,
  GraduationCap,
  LineChart,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { WhatsappIcon } from "@/components/icons/Brand";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const icons: Record<string, LucideIcon> = {
  Bot,
  Brain,
  Code2,
  GraduationCap,
  LineChart,
};

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-20 bg-surface">
      <div className="container-page">
        <SectionHeading
          title="Ways to work with me"
          description="One person across the modern AI stack, from training the model to shipping the product around it."
        />

        <Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {services.map((s) => {
              const Icon = icons[s.icon];
              return (
                <div
                  key={s.title}
                  className="group flex flex-col gap-4 bg-bg p-7 transition-colors hover:bg-accent-wash/50"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-accent-strong transition-colors group-hover:border-accent/40">
                    {Icon && <Icon size={20} strokeWidth={1.75} />}
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="text-[0.95rem] text-ink-muted">{s.body}</p>
                </div>
              );
            })}
            {/* trailing cell keeps the grid even and carries the CTA */}
            <div className="surface-deep flex flex-col justify-center gap-3 p-8">
              <p className="font-display text-xl font-semibold">
                Not sure which one you need?
              </p>
              <p className="text-sm text-cream-muted">
                Tell me the problem. I&apos;ll tell you honestly what would
                actually help.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-1 inline-flex w-fit items-center gap-2 font-medium text-accent-bright transition-colors hover:text-cream"
              >
                <WhatsappIcon size={16} /> Message me
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
