"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

// Records a visit and shows the running total. Renders nothing until the count
// is known (and nothing at all if the counter store isn't configured), so it
// never shows a placeholder or a fabricated number.
export function VisitCount() {
  const [total, setTotal] = useState<number | null>(null);
  const [display, setDisplay] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    let cancelled = false;
    fetch("/api/visit", { method: "POST" })
      .then((r) => r.json())
      .then((d) => {
        if (!cancelled && typeof d.total === "number") setTotal(d.total);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Count up to the total (skipped under reduced motion, which shows it directly).
  useEffect(() => {
    if (total === null || reduced) return;
    let raf = 0;
    let startTs = 0;
    const dur = 1100;
    const tick = (t: number) => {
      if (!startTs) startTs = t;
      const p = Math.min(1, (t - startTs) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(total * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [total, reduced]);

  if (total === null) return null;
  const shown = reduced ? total : display;

  return (
    <span className="tabular-nums" aria-label={`${total.toLocaleString()} visitors`}>
      {shown.toLocaleString()} visitors
    </span>
  );
}
