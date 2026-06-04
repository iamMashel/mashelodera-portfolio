import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal } from "@/components/Reveal";

export function PageHeader({
  title,
  intro,
  meta,
}: {
  title: string;
  intro?: string;
  meta?: string;
  // `back` is accepted for backwards-compat but breadcrumbs supersede it.
  back?: { href: string; label: string } | null;
}) {
  return (
    <header className="border-b border-line">
      <div className="container-page pb-12 pt-12 md:pt-16">
        <Reveal>
          <div className="mb-7">
            <Breadcrumbs />
          </div>
        </Reveal>
        <Reveal>
          <h1 className="h-hero text-[clamp(2.25rem,5vw,3.75rem)] text-ink">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal>
            <p className="measure mt-5 text-lg text-ink-muted">{intro}</p>
          </Reveal>
        )}
        {meta && (
          <Reveal>
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-accent-strong">
              {meta}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
