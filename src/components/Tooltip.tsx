"use client";

import { useRef, useState, type ReactNode } from "react";

// Visual tooltip for icon-only controls. Positioned `fixed` so it escapes any
// `overflow: hidden` ancestor (e.g. the collapsing nav bar). The trigger keeps
// its own aria-label, so the bubble is decorative (aria-hidden) and doesn't
// double-announce to screen readers. Hover + keyboard-focus both reveal it.
export function Tooltip({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  const show = () => {
    const r = ref.current?.getBoundingClientRect();
    if (r) setPos({ x: r.left + r.width / 2, y: r.top });
  };
  const hide = () => setPos(null);

  return (
    <span
      ref={ref}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
      className="inline-flex"
    >
      {children}
      {pos && (
        <span
          aria-hidden="true"
          className="pointer-events-none fixed z-[var(--z-tooltip)] -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-ink-invert px-2 py-1 text-xs font-medium text-cream shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] [animation:fade-in_0.15s_ease-out] motion-reduce:[animation:none]"
          style={{ left: pos.x, top: pos.y - 8 }}
        >
          {label}
        </span>
      )}
    </span>
  );
}
