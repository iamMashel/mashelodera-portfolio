import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";
import { WhatsappIcon } from "@/components/icons/Brand";
import { Reveal } from "@/components/Reveal";

// Reusable conversion band. Dropped at the foot of pages and between sections
// so there's always a next step. Deep clay so it reads as a deliberate moment.
export function CTABand({
  title = "Have something you want built, trained, or taught?",
  subtitle = "Tell me what you're working on. Honest take, clear scope, no pressure.",
  className,
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="container-page">
        <Reveal>
          <div className="surface-deep surface-deep-tex flex flex-col items-start gap-6 overflow-hidden rounded-3xl p-8 md:flex-row md:items-center md:justify-between md:p-12">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl font-semibold sm:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-cream-muted">{subtitle}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-cream transition-colors hover:bg-accent-bright"
              >
                <WhatsappIcon size={18} /> Start a project
              </a>
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/25 px-6 font-medium text-cream transition-colors hover:bg-cream/10"
              >
                Send a message <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
