import { testimonials } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

export function Testimonials() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-2 md:gap-14">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col">
                <blockquote className="font-display text-2xl font-medium leading-snug text-ink sm:text-[1.7rem]">
                  <span className="text-accent">“</span>
                  {t.quote}
                  <span className="text-accent">”</span>
                </blockquote>
                <figcaption className="mt-6 text-sm text-ink-muted">
                  <span className="font-medium text-ink">{t.name}</span> ·{" "}
                  {t.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
