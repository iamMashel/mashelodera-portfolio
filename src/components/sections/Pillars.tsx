import { Brain, Boxes, GraduationCap, type LucideIcon } from "lucide-react";
import { pillars } from "@/lib/content";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const icons: Record<string, LucideIcon> = { Brain, Boxes, GraduationCap };

export function Pillars() {
  return (
    <section className="section-pad scroll-mt-20">
      <div className="container-page">
        <Reveal>
          <p className="measure text-pretty font-display text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight text-ink">
            Most people in AI do one of these. The interesting work happens where
            all three meet.
          </p>
        </Reveal>

        <RevealGroup
          stagger={110}
          className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3"
        >
          {pillars.map((p) => {
            const Icon = icons[p.icon];
            return (
              <RevealItem
                key={p.key}
                className="flex flex-col gap-5 bg-bg p-8"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-wash text-accent-strong">
                    {Icon && <Icon size={20} strokeWidth={1.75} />}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent-strong">
                    {p.kicker}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="text-ink-muted">{p.body}</p>
                <p className="mt-auto border-t border-line pt-4 text-sm text-ink">
                  {p.proof}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
