import { Brain, Boxes, GraduationCap, type LucideIcon } from "lucide-react";
import { pillars } from "@/lib/content";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";

const icons: Record<string, LucideIcon> = { Brain, Boxes, GraduationCap };

// Deliberately NOT the boxed hairline-card grid used elsewhere: three columns
// led by an oversized clay verb, split by hairline dividers. This is the spike,
// so it should read differently from the services menu.
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
          className="mt-14 grid gap-y-12 md:grid-cols-3 md:gap-y-0 md:divide-x md:divide-line"
        >
          {pillars.map((p) => {
            const Icon = icons[p.icon];
            return (
              <RevealItem
                key={p.key}
                className="flex flex-col gap-4 md:px-9 md:first:pl-0 md:last:pr-0"
              >
                <span className="flex items-center gap-3">
                  <span className="font-display text-[2.75rem] font-semibold leading-none tracking-tight text-accent">
                    {p.kicker}
                  </span>
                  {Icon && (
                    <Icon size={22} strokeWidth={1.75} className="text-accent-strong/70" />
                  )}
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">
                  {p.title}
                </h3>
                <p className="text-ink-muted">{p.body}</p>
                <p className="mt-auto pt-2 text-sm text-ink">{p.proof}</p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
