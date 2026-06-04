"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

// Easter egg: the Konami code (↑ ↑ ↓ ↓ ← → ← → B A) rains hockey pucks and
// shows the motto. Pure delight, costs nothing until triggered.
const CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function KonamiEgg() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    let pos = 0;
    const onKey = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      pos = key === CODE[pos] ? pos + 1 : key === CODE[0] ? 1 : 0;
      if (pos === CODE.length) {
        pos = 0;
        setActive(true);
        setTimeout(() => setActive(false), 4200);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!active) return null;

  const pucks = Array.from({ length: 24 });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[var(--z-toast)] overflow-hidden"
    >
      {pucks.map((_, i) => (
        <span
          key={i}
          className="absolute -top-10 text-3xl motion-reduce:hidden"
          style={{
            left: `${(i * 37) % 100}%`,
            animation: `puck-fall ${2 + (i % 5) * 0.4}s var(--ease-out-quart) ${(i % 7) * 0.12}s forwards`,
          }}
        >
          🏑
        </span>
      ))}
      <div className="absolute inset-x-0 bottom-10 flex justify-center px-4">
        <p className="rounded-full bg-ink-invert px-6 py-3 text-center font-display text-cream shadow-2xl">
          {site.motto} 🥅
        </p>
      </div>
      <style>{`
        @keyframes puck-fall {
          to { transform: translateY(110vh) rotate(540deg); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
