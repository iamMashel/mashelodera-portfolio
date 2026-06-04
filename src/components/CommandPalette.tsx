"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, CornerDownLeft, Home, FileText, Copy, Mail } from "lucide-react";
import {
  WhatsappIcon,
  GithubIcon,
  LinkedinIcon,
  XIcon,
  InstagramIcon,
  SubstackIcon,
} from "@/components/icons/Brand";
import { nav, personalPages, site, whatsappHref } from "@/lib/site";
import { toast } from "@/lib/toast";

type Item = {
  id: string;
  label: string;
  group: "Pages" | "Off the clock" | "Actions";
  keywords?: string;
  icon?: React.ComponentType<{ size?: number }>;
  run: (router: ReturnType<typeof useRouter>) => void;
};

const go = (href: string) => (router: ReturnType<typeof useRouter>) => {
  if (href.startsWith("http")) window.open(href, "_blank", "noopener");
  else if (href.startsWith("mailto:")) window.location.href = href;
  else router.push(href);
};

const items: Item[] = [
  { id: "home", label: "Home", group: "Pages", icon: Home, run: go("/") },
  ...nav
    .filter((n) => n.href !== "/more")
    .map<Item>((n) => ({
      id: `nav-${n.href}`,
      label: n.label,
      group: "Pages",
      run: go(n.href),
    })),
  ...personalPages.map<Item>((p) => ({
    id: `pp-${p.href}`,
    label: p.label,
    group: "Off the clock",
    keywords: p.blurb,
    run: go(p.href),
  })),
  { id: "privacy", label: "Privacy policy", group: "Pages", icon: FileText, run: go("/privacy") },
  {
    id: "resume",
    label: "Download résumé",
    group: "Actions",
    icon: FileText,
    keywords: "cv pdf",
    run: () => window.open(site.resumeUrl, "_blank", "noopener"),
  },
  { id: "whatsapp", label: "Message on WhatsApp", group: "Actions", keywords: "contact chat", icon: WhatsappIcon, run: go(whatsappHref) },
  { id: "email", label: "Email me", group: "Actions", keywords: "contact mail", icon: Mail, run: go(`mailto:${site.email}`) },
  {
    id: "copy-email",
    label: "Copy email address",
    group: "Actions",
    icon: Copy,
    run: () => {
      navigator.clipboard?.writeText(site.email);
      toast("Email address copied");
    },
  },
  { id: "github", label: "GitHub", group: "Actions", icon: GithubIcon, run: go(site.socials.github) },
  { id: "linkedin", label: "LinkedIn", group: "Actions", icon: LinkedinIcon, run: go(site.socials.linkedin) },
  { id: "x", label: "X (Twitter)", group: "Actions", icon: XIcon, run: go(site.socials.x) },
  { id: "instagram", label: "Instagram", group: "Actions", icon: InstagramIcon, run: go(site.socials.instagram) },
  { id: "substack", label: "Substack", group: "Actions", icon: SubstackIcon, run: go(site.socials.substack) },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    setQ("");
    setActive(0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) setTimeout(() => inputRef.current?.focus(), 20);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter((i) =>
      `${i.label} ${i.group} ${i.keywords ?? ""}`.toLowerCase().includes(term),
    );
  }, [q]);

  useEffect(() => {
    setActive(0);
  }, [q]);

  const run = useCallback(
    (item: Item) => {
      close();
      item.run(router);
    },
    [close, router],
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter" && filtered[active]) {
      e.preventDefault();
      run(filtered[active]);
    }
  };

  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-idx="${active}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [active]);

  if (!open) return null;

  let flatIdx = -1;
  const groups = ["Pages", "Off the clock", "Actions"] as const;

  return (
    <div
      className="fixed inset-0 z-[var(--z-modal)] flex items-start justify-center px-4 pt-[12vh]"
      role="dialog"
      aria-modal="true"
      aria-label="Command menu"
    >
      <button
        aria-label="Close command menu"
        onClick={close}
        className="cmdk-backdrop absolute inset-0 z-[var(--z-backdrop)] cursor-default bg-ink-invert/50 backdrop-blur-sm"
      />
      <div
        className="cmdk-panel relative z-[var(--z-modal)] w-full max-w-xl overflow-hidden rounded-2xl border border-line bg-bg shadow-[0_40px_90px_-30px_rgba(28,17,7,0.5)]"
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-3 border-b border-line px-4">
          <Search size={18} className="text-ink-muted" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Jump to a page or action…"
            aria-label="Search pages and actions"
            className="h-14 w-full bg-transparent text-ink placeholder:text-ink-muted focus:outline-none"
          />
          <kbd className="hidden rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[0.7rem] text-ink-muted sm:block">
            esc
          </kbd>
        </div>

        <div ref={listRef} className="max-h-[50vh] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-3 py-6 text-center text-sm text-ink-muted">
              Nothing matches “{q}”.
            </p>
          )}
          {groups.map((group) => {
            const inGroup = filtered.filter((i) => i.group === group);
            if (inGroup.length === 0) return null;
            return (
              <div key={group} className="mb-1">
                <p className="px-3 pb-1 pt-2 font-mono text-[0.65rem] uppercase tracking-wider text-ink-muted">
                  {group}
                </p>
                {inGroup.map((item) => {
                  flatIdx += 1;
                  const idx = flatIdx;
                  const isActive = idx === active;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      data-idx={idx}
                      onMouseEnter={() => setActive(idx)}
                      onClick={() => run(item)}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[0.95rem] transition-colors ${
                        isActive ? "bg-accent-wash text-accent-strong" : "text-ink"
                      }`}
                    >
                      <span className="grid h-5 w-5 shrink-0 place-items-center text-ink-muted">
                        {Icon ? <Icon size={16} /> : <span className="h-1.5 w-1.5 rounded-full bg-accent" />}
                      </span>
                      <span className="grow">{item.label}</span>
                      {isActive && (
                        <CornerDownLeft size={14} className="text-ink-muted" />
                      )}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
