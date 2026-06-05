"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { personalPages } from "@/lib/site";
import { cn } from "@/lib/cn";

// "Off the clock" navigation dropdown. Lives in the main bar (no overflow-hidden
// ancestor), so the absolutely-positioned panel isn't clipped. Opens on hover
// and on click/keyboard; closes on outside click, Escape, blur, or selection.
export function NavDropdown() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const ref = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const active =
    pathname === "/more" ||
    personalPages.some((p) => pathname === p.href || pathname.startsWith(`${p.href}/`));

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const openNow = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 130);
  };

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "group relative inline-flex items-center gap-1 px-3 py-2 text-[0.95rem] transition-colors",
          active || open ? "text-cream" : "text-cream/75 hover:text-cream",
        )}
      >
        Off the clock
        <ChevronDown
          size={15}
          className={cn("transition-transform duration-300", open && "rotate-180")}
        />
        <span
          aria-hidden
          className={cn(
            "absolute inset-x-3 -bottom-px h-[2px] origin-left rounded-full bg-accent-bright transition-transform duration-300 ease-[var(--ease-out-quart)]",
            active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
          )}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-[var(--z-dropdown)] mt-2 w-[34rem] max-w-[88vw] overflow-hidden rounded-2xl border border-cream/15 bg-ink-invert p-2 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)] [animation:cmdk-panel_0.22s_var(--ease-out-quint)_both] motion-reduce:[animation:none]">
          <div className="grid grid-cols-2 gap-1">
            {personalPages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setOpen(false)}
                className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-cream/5"
              >
                <span className="text-lg leading-none" aria-hidden>
                  {p.emoji}
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-cream">
                    {p.label}
                  </span>
                  <span className="block text-xs leading-snug text-cream-muted">
                    {p.blurb}
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/more"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-accent-bright transition-colors hover:bg-cream/5"
          >
            See everything off the clock
            <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </li>
  );
}
