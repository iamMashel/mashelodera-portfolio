import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/Brand";
import { nav, site } from "@/lib/site";

export function Footer() {
  const year = 2026; // build-time constant; bump as needed

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="max-w-sm">
          <Link href="/" className="font-display text-xl font-semibold">
            {site.name}
            <span className="text-accent">.</span>
          </Link>
          <p className="mt-3 text-ink-muted">
            {site.role} based in {site.location}. Building production frontends
            and AI product interfaces for teams worldwide.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow mb-3">Navigate</h2>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow mb-3">Elsewhere</h2>
          <ul className="space-y-2">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
              >
                <Mail size={16} /> Email
              </a>
            </li>
            <li>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
              >
                <GithubIcon size={16} /> GitHub
              </a>
            </li>
            <li>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 text-ink-muted transition-colors hover:text-ink"
              >
                <LinkedinIcon size={16} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-sm text-ink-muted sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. Built with Next.js, deployed on Vercel.
          </p>
          <p>Designed &amp; coded from {site.location}.</p>
        </div>
      </div>
    </footer>
  );
}
