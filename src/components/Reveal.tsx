"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { cn } from "@/lib/cn";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function motionAllowed() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: no-preference)").matches
  );
}

type Tag = "div" | "section" | "article" | "ul" | "li" | "span";

/**
 * Reveal: content is always rendered and visible by default. With JS + motion
 * allowed, it is armed (hidden) before first paint via a layout effect, then
 * fades/rises in when it scrolls into view. No SSR/client tree swap, so it can
 * never ship blank in headless renderers, crawlers, or reduced-motion mode.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement>(null);
  const Comp = as as React.ElementType;

  useIso(() => {
    const el = ref.current;
    if (!el || !motionAllowed()) return;
    el.classList.add("reveal-armed");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("reveal-in");
            io.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <Comp ref={ref} className={cn("reveal", className)}>
      {children}
    </Comp>
  );
}

/**
 * RevealGroup: staggers its [data-reveal-item] descendants when the group
 * enters view. Items are visible by default; armed only when motion is allowed.
 */
export function RevealGroup({
  children,
  className,
  stagger = 80,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  as?: Tag;
}) {
  const ref = useRef<HTMLElement>(null);
  const Comp = as as React.ElementType;

  useIso(() => {
    const el = ref.current;
    if (!el || !motionAllowed()) return;
    const items = Array.from(
      el.querySelectorAll<HTMLElement>("[data-reveal-item]"),
    );
    items.forEach((it) => it.classList.add("reveal-armed"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            items.forEach((it, i) => {
              it.style.transitionDelay = `${i * stagger}ms`;
              it.classList.add("reveal-in");
            });
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stagger]);

  return <Comp ref={ref} className={className}>{children}</Comp>;
}

export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
}) {
  const Comp = as as React.ElementType;
  return (
    <Comp data-reveal-item className={cn("reveal", className)}>
      {children}
    </Comp>
  );
}
