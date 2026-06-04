"use client";

import { useEffect, useState } from "react";
import { wisdom } from "@/lib/site";

// Gently rotates through the "words of wisdom". Holds still for reduced-motion
// users and crossfades otherwise. Purely decorative, the first line always
// renders server-side, so nothing depends on JS to be readable.
export function RotatingWisdom({ className }: { className?: string }) {
  const [i, setI] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (wisdom.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setI((v) => (v + 1) % wisdom.length);
        setShow(true);
      }, 450);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <p
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transition: "opacity 0.45s var(--ease-out-quart)",
      }}
      aria-live="off"
    >
      “{wisdom[i]}”
    </p>
  );
}
