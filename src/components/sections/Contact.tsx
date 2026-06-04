import { ArrowUpRight, Mail, Calendar, FileText } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";
import {
  WhatsappIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  SubstackIcon,
} from "@/components/icons/Brand";
import { Reveal } from "@/components/Reveal";

const channels = [
  { label: "WhatsApp", value: site.whatsappDisplay, href: whatsappHref, Icon: WhatsappIcon },
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "LinkedIn", value: "Mashel Odera", href: site.socials.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", value: "@iamMashel", href: site.socials.github, Icon: GithubIcon },
  { label: "X", value: "@mashel_odera", href: site.socials.x, Icon: XIcon },
  { label: "Instagram", value: "@iam.mashel", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "Substack", value: "Read & subscribe", href: site.socials.substack, Icon: SubstackIcon },
  { label: "Résumé", value: "Download PDF", href: site.resumeUrl, Icon: FileText },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="surface-deep surface-deep-tex scroll-mt-20"
    >
      <div className="container-page section-pad">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div>
              <p className="font-mono text-sm text-accent-bright">
                {site.availabilityNote}
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tight">
                Let&apos;s build
                <br />
                something useful.
              </h2>
              <p className="mt-6 max-w-md text-lg text-cream-muted">
                An AI feature, an agent, a dashboard, a model-eval pipeline, or a
                team that wants to level up. Tell me what you&apos;re working on.
                I usually reply within a day.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-cream transition-colors hover:bg-accent-bright"
                >
                  <WhatsappIcon size={18} /> Message on WhatsApp
                </a>
                {site.bookingUrl ? (
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/25 px-6 font-medium text-cream transition-colors hover:bg-cream/10"
                  >
                    <Calendar size={18} /> Book a call
                  </a>
                ) : (
                  <a
                    href={`mailto:${site.email}`}
                    className="inline-flex h-12 items-center gap-2 rounded-full border border-cream/25 px-6 font-medium text-cream transition-colors hover:bg-cream/10"
                  >
                    <Mail size={18} /> Email me
                  </a>
                )}
              </div>
            </div>

            <ul className="flex flex-col">
              {channels.map(({ label, value, href, Icon }) => (
                <li key={label} className="w-full border-t border-cream/15 first:border-t-0">
                  <a
                    href={href}
                    {...(href.startsWith("http")
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    className="group flex items-center justify-between gap-6 py-3.5 text-cream-muted transition-colors hover:text-cream"
                  >
                    <span className="inline-flex items-center gap-2.5 font-mono text-xs uppercase tracking-wider">
                      <Icon size={15} /> {label}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-cream">
                      {value}
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
