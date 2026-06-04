import {
  Code2,
  PenTool,
  Sparkles,
  LayoutDashboard,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/content";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const icons: Record<string, LucideIcon> = {
  Code2,
  PenTool,
  Sparkles,
  LayoutDashboard,
  Rocket,
};

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-20 bg-surface">
      <div className="container-page">
        <SectionHeading
          title="What I do"
          description="One person who can sit in the design review and the code review, and add something in both."
        />

        <Reveal>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {services.map((s) => {
              const Icon = icons[s.icon];
              return (
                <div
                  key={s.title}
                  className="group flex flex-col gap-4 bg-bg p-7 transition-colors hover:bg-accent-wash/40"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface text-accent-strong transition-colors group-hover:border-accent/40">
                    {Icon && <Icon size={20} strokeWidth={1.75} />}
                  </span>
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="text-[0.95rem] text-ink-muted">{s.body}</p>
                </div>
              );
            })}
            {/* trailing cell keeps the grid even on desktop */}
            <div className="hidden flex-col justify-center gap-2 bg-ink p-7 text-bg sm:flex">
              <p className="font-display text-xl font-semibold">
                Have something in mind?
              </p>
              <a
                href="/#contact"
                className="inline-flex w-fit items-center gap-2 text-bg/80 transition-colors hover:text-bg"
              >
                Let&apos;s scope it together →
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
