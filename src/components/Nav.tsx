"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-[var(--z-sticky)] border-b transition-colors duration-300",
        scrolled
          ? "border-line bg-bg/80 backdrop-blur-md"
          : "border-transparent bg-bg",
      )}
    >
      <nav
        aria-label="Primary"
        className="container-page flex h-16 items-center justify-between gap-6"
      >
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          {site.name}
          <span className="text-accent">.</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-full px-3 py-2 text-[0.95rem] text-ink-muted transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/#contact"
            className="inline-flex h-10 items-center rounded-full bg-ink px-5 text-[0.95rem] font-medium text-bg transition-colors hover:bg-accent"
          >
            Hire me
          </Link>
        </div>

        <button
          type="button"
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="border-t border-line bg-bg md:hidden">
          <ul className="container-page flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-lg px-2 py-3 text-lg text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-ink px-5 font-medium text-bg"
                onClick={() => setOpen(false)}
              >
                Hire me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
