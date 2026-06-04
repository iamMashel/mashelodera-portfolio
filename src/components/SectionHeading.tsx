import { Reveal } from "@/components/Reveal";

export function SectionHeading({
  title,
  description,
  id,
}: {
  title: string;
  description?: string;
  id?: string;
}) {
  return (
    <Reveal>
      <div
        id={id}
        className="flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-end md:justify-between md:gap-12"
      >
        <h2 className="h2 max-w-xl text-ink">{title}</h2>
        {description && (
          <p className="measure text-ink-muted md:max-w-sm md:text-right">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
