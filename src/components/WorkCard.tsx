import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Tag } from "@/components/Tag";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/cn";

export function WorkCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const flip = index % 2 === 1;
  const href = `/work/${project.slug}`;

  return (
    <Reveal>
      <article className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        <Link
          href={href}
          aria-label={`Open the ${project.name} case study`}
          className={cn(
            "group relative block overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_20px_60px_-45px_rgba(15,15,15,0.5)] transition-all duration-500 ease-[var(--ease-out-quart)] hover:-translate-y-1 hover:shadow-[0_30px_70px_-40px_rgba(15,15,15,0.5)]",
            flip && "lg:order-2",
          )}
        >
          <div className="aspect-[16/10] w-full overflow-hidden">
            <div className="h-full w-full transition-transform duration-700 ease-[var(--ease-out-quart)] group-hover:scale-[1.02]">
              <ProjectVisual project={project} priority={index === 0} />
            </div>
          </div>
        </Link>

        <div className={cn(flip && "lg:order-1")}>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-ink-muted">
            <span className="text-accent-strong">{project.category}</span>
            <span aria-hidden>·</span>
            <span>{project.year}</span>
          </div>

          <h3 className="h3 mt-3 text-ink">
            <Link href={href} className="transition-colors hover:text-accent-strong">
              {project.name}
            </Link>
          </h3>

          <p className="mt-3 max-w-md text-ink-muted">{project.summary}</p>

          <ul className="mt-5 space-y-2">
            {project.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2.5 text-[0.95rem]">
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <span className="text-ink">{o}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <Link
            href={href}
            className="mt-6 inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-accent-strong"
          >
            Read case study
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
