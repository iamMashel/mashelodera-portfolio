"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import {
  WhatsappIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  SubstackIcon,
} from "@/components/icons/Brand";
import { nav, site, whatsappHref } from "@/lib/site";
import { cn } from "@/lib/cn";

const socials = [
  { label: "LinkedIn", href: site.socials.linkedin, Icon: LinkedinIcon },
  { label: "GitHub", href: site.socials.github, Icon: GithubIcon },
  { label: "X", href: site.socials.x, Icon: XIcon },
  { label: "Instagram", href: site.socials.instagram, Icon: InstagramIcon },
  { label: "Substack", href: site.socials.substack, Icon: SubstackIcon },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Active only for page-level routes (/blog, /more); home anchors aren't tracked.
  const isActive = (href: string) => {
    const path = href.split("#")[0] || "/";
    if (path === "/") return false;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header className="surface-deep sticky top-0 z-[var(--z-sticky)]">
      {/* Utility bar, contact + socials. Collapses on scroll; desktop only. */}
      <div
        className={cn(
          "hidden overflow-hidden border-b border-cream/10 bg-ink-invert transition-all duration-300 md:block",
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100",
        )}
      >
        <div className="container-page flex h-10 items-center justify-between text-[0.82rem] text-cream-muted">
          <div className="flex items-center gap-6">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-2 transition-colors hover:text-cream"
            >
              <WhatsappIcon size={14} /> {site.whatsappDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-cream"
            >
              <Mail size={14} /> {site.email}
            </a>
          </div>
          <ul className="flex items-center gap-4">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="block transition-colors hover:text-cream"
                >
                  <Icon size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b bg-ink-invert-2 transition-colors duration-300",
          scrolled ? "border-cream/10 shadow-[0_10px_30px_-20px_rgba(0,0,0,0.8)]" : "border-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="container-page flex h-16 items-center justify-between gap-6"
        >
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-cream"
            onClick={() => setOpen(false)}
          >
            {site.name}
            <span className="text-accent-bright">.</span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative px-3 py-2 text-[0.95rem] transition-colors",
                      active ? "text-cream" : "text-cream/75 hover:text-cream",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-3 -bottom-px h-[2px] origin-left rounded-full bg-accent-bright transition-transform duration-300 ease-[var(--ease-out-quart)]",
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="/#contact"
              className="inline-flex h-10 items-center rounded-full bg-accent px-5 text-[0.95rem] font-medium text-cream transition-colors hover:bg-accent-bright"
            >
              Work with me
            </Link>
          </div>

          <button
            type="button"
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-cream lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="border-t border-cream/10 bg-ink-invert lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-lg px-2 py-3 text-lg",
                    isActive(item.href) ? "text-accent-bright" : "text-cream",
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-accent px-5 font-medium text-cream"
                onClick={() => setOpen(false)}
              >
                Work with me
              </Link>
            </li>
            <li className="mt-4 flex items-center gap-5 border-t border-cream/10 px-2 pt-5">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="text-cream-muted transition-colors hover:text-cream"
                >
                  <Icon size={18} />
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
