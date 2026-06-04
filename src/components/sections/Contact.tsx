import { ArrowUpRight, Mail, Calendar, FileText } from "lucide-react";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink text-bg">
      <div className="container-page section-pad">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="font-mono text-sm text-accent-bright">
                {site.availabilityNote}
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight">
                Let&apos;s build
                <br />
                something useful.
              </h2>
              <p className="mt-6 max-w-md text-lg text-bg/70">
                Have an AI product, dashboard, or marketing site in mind? Tell me
                what you&apos;re working on. I usually reply within a day.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-bg transition-colors hover:bg-accent-bright"
                >
                  <Mail size={18} /> Email me
                </a>
                {site.bookingUrl ? (
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-bg/25 px-6 font-medium text-bg transition-colors hover:bg-bg/10"
                  >
                    <Calendar size={18} /> Book a call
                  </a>
                ) : (
                  <a
                    href={site.socials.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-bg/25 px-6 font-medium text-bg transition-colors hover:bg-bg/10"
                  >
                    Message on LinkedIn
                  </a>
                )}
              </div>
            </div>

            <ul className="flex flex-col gap-1 lg:items-end">
              {[
                { label: "Email", value: site.email, href: `mailto:${site.email}` },
                { label: "GitHub", value: "@iamMashel", href: site.socials.github },
                { label: "LinkedIn", value: "Mashel Odera", href: site.socials.linkedin },
                { label: "Résumé", value: "Download PDF", href: site.resumeUrl, icon: true },
              ].map((row) => (
                <li key={row.label} className="w-full border-t border-bg/15 py-4">
                  <a
                    href={row.href}
                    {...(row.href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="group flex items-center justify-between gap-6 text-bg/70 transition-colors hover:text-bg"
                  >
                    <span className="font-mono text-xs uppercase tracking-wider">
                      {row.label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-bg">
                      {row.icon && <FileText size={15} />}
                      {row.value}
                      <ArrowUpRight
                        size={15}
                        className="opacity-50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
