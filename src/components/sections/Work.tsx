import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { WorkCard } from "@/components/WorkCard";
import { SectionHeading } from "@/components/SectionHeading";

export function Work() {
  return (
    <section id="work" className="section-pad scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          title="Selected work"
          description="A few products I designed and built end to end. Each one starts with a real problem and ends with shipped, working software."
        />

        <div className="mt-16 flex flex-col gap-20 md:gap-28">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <WorkCard key={project.slug} project={project} index={i} />
            ))}
        </div>

        <div className="mt-16 border-t border-line pt-6">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
          >
            Want to see something specific? Ask me about it
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
