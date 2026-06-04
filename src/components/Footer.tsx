import Link from "next/link";
import { Mail } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  SubstackIcon,
  WhatsappIcon,
} from "@/components/icons/Brand";
import { RotatingWisdom } from "@/components/RotatingWisdom";
import { VisitCount } from "@/components/VisitCount";
import { nav, personalPages, site, whatsappHref } from "@/lib/site";

const elsewhere = [
  { label: "Email", href: `mailto:${site.email}`, Icon: Mail },
  { label: "WhatsApp", href: whatsappHref, Icon: WhatsappIcon },
  { label: "GitHub", href: site.socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedinIcon },
  { label: "X", href: site.socials.x, Icon: XIcon },
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "Substack", href: site.socials.substack, Icon: SubstackIcon },
];

export function Footer() {
  const year = 2026; // build-time constant; bump as needed

  return (
    <footer className="surface-deep">
      <div className="container-page grid gap-10 py-16 md:grid-cols-[1.6fr_1fr_1fr_1.1fr]">
        <div className="max-w-xs">
          <Link href="/" className="font-display text-xl font-semibold text-cream">
            {site.name}
            <span className="text-accent-bright">.</span>
          </Link>
          <p className="mt-3 text-cream-muted">
            AI specialist in {site.location}. I train models, build with them,
            and teach the craft, with teams worldwide.
          </p>
          <RotatingWisdom className="mt-5 font-display text-base text-cream/90" />
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-accent-bright">
            Navigate
          </h2>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-cream-muted transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Off the clock">
          <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-accent-bright">
            Off the clock
          </h2>
          <ul className="space-y-2">
            {personalPages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-cream-muted transition-colors hover:text-cream"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-accent-bright">
            Elsewhere
          </h2>
          <ul className="space-y-2">
            {elsewhere.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer noopener" }
                    : {})}
                  className="inline-flex items-center gap-2 text-cream-muted transition-colors hover:text-cream"
                >
                  <Icon size={15} /> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-sm text-cream-muted sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}
          </p>
          <VisitCount />
          <Link href="/privacy" className="transition-colors hover:text-cream">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
