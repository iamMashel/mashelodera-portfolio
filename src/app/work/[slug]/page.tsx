import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/Brand";
import { projects, getProject } from "@/lib/projects";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Tag } from "@/components/Tag";
import { Button } from "@/components/Button";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.name} · ${project.category}`,
    description: project.summary,
    openGraph: {
      title: `${project.name} · ${project.category}`,
      description: project.summary,
      images: project.image ? [project.image] : undefined,
    },
  };
}

export default async function CaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="container-page section-pad">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-sm text-ink-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={16} /> All work
      </Link>

      {/* Header */}
      <header className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-ink-muted">
            <span className="text-accent-strong">{project.category}</span>
            <span aria-hidden>·</span>
            <span>{project.year}</span>
          </div>
          <h1 className="mt-4 font-display text-[clamp(2.4rem,6vw,4.25rem)] font-semibold leading-[1.02] tracking-tight text-ink">
            {project.name}
          </h1>
          <p className="mt-4 max-w-xl text-xl text-ink-muted">
            {project.tagline}
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-line pt-6 text-sm">
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              Role
            </dt>
            <dd className="mt-1 text-ink">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs uppercase tracking-wider text-ink-muted">
              Timeline
            </dt>
            <dd className="mt-1 text-ink">{project.timeline}</dd>
          </div>
          {(project.links.live || project.links.github) && (
            <div className="col-span-2 flex flex-wrap gap-3 pt-1">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-accent-strong hover:underline"
                >
                  <ExternalLink size={15} /> Live site
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 text-accent-strong hover:underline"
                >
                  <GithubIcon size={15} /> Source
                </a>
              )}
            </div>
          )}
        </dl>
      </header>

      {/* Hero visual */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_30px_80px_-50px_rgba(15,15,15,0.5)]">
        <div className="aspect-[16/9] w-full">
          <ProjectVisual project={project} priority />
        </div>
      </div>

      {/* Outcomes */}
      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {project.outcomes.map((o) => (
          <div key={o} className="bg-bg p-6">
            <p className="font-medium text-ink">{o}</p>
          </div>
        ))}
      </div>

      {/* Narrative */}
      <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-display text-2xl font-semibold text-ink">
            The problem
          </h2>
        </div>
        <p className="measure text-lg text-ink-muted">{project.problem}</p>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Constraints
          </h2>
        </div>
        <ul className="space-y-3">
          {project.constraints.map((c) => (
            <li key={c} className="flex items-start gap-3 text-ink">
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-display text-2xl font-semibold text-ink">
            The approach
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          {project.approach.map((step, i) => (
            <div key={step.title} className="border-t border-line pt-5">
              <span className="font-mono text-sm text-accent-strong">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="measure mt-2 text-ink-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Results
          </h2>
        </div>
        <ul className="space-y-3">
          {project.results.map((r) => (
            <li key={r} className="flex items-start gap-3 text-ink">
              <span
                aria-hidden
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {r}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Tradeoffs
          </h2>
        </div>
        <p className="measure text-lg text-ink-muted">{project.tradeoffs}</p>
      </div>

      {/* Stack */}
      <div className="mt-14 border-t border-line pt-6">
        <h2 className="eyebrow mb-4">Built with</h2>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>

      {/* Next + CTA */}
      <div className="mt-16 grid gap-6 border-t border-line pt-10 sm:grid-cols-2 sm:items-center">
        <Link href={`/work/${next.slug}`} className="group">
          <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
            Next project
          </span>
          <p className="mt-1 inline-flex items-center gap-2 font-display text-2xl font-semibold text-ink transition-colors group-hover:text-accent-strong">
            {next.name}
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </p>
        </Link>
        <div className="sm:justify-self-end">
          <Button href={`mailto:${site.email}`} size="lg">
            Start a project
          </Button>
        </div>
      </div>
    </div>
  );
}
