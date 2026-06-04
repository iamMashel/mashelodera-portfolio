"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type Frame = { src: string; alt: string; caption: string };

export function FrameGallery({ frames }: { frames: readonly Frame[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const isOpen = open !== null;
  const count = frames.length;

  const show = useCallback(
    (i: number, trigger?: HTMLButtonElement | null) => {
      if (trigger) triggerRef.current = trigger;
      setOpen(((i % count) + count) % count);
    },
    [count],
  );
  const close = useCallback(() => {
    setOpen(null);
    triggerRef.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setOpen((o) => (o === null ? o : (((o + d) % count) + count) % count)),
    [count],
  );

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, close, step]);

  const current = open !== null ? frames[open] : null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {frames.map((f, i) => (
          <li key={f.src}>
            <figure className="group">
              <button
                type="button"
                onClick={(e) => show(i, e.currentTarget)}
                aria-label={`View photo: ${f.caption}`}
                className="block w-full overflow-hidden rounded-2xl border border-line focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  width={1300}
                  height={1733}
                  sizes="(max-width: 640px) 45vw, 22vw"
                  className="aspect-[3/4] w-full cursor-zoom-in object-cover transition-transform duration-500 ease-[var(--ease-out-quart)] group-hover:scale-[1.03]"
                />
              </button>
              <figcaption className="mt-2.5 text-sm text-ink-muted">
                {f.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 sm:p-8"
        >
          <button
            aria-label="Close"
            onClick={close}
            className="absolute inset-0 z-[var(--z-backdrop)] cursor-zoom-out bg-ink-invert/90 backdrop-blur-sm"
          />

          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-4 top-4 z-[var(--z-modal)] grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <X size={20} />
          </button>

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 z-[var(--z-modal)] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:left-6"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 z-[var(--z-modal)] grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:right-6"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <figure className="relative z-[var(--z-modal)] flex max-h-full max-w-3xl flex-col items-center">
            <Image
              src={current.src}
              alt={current.alt}
              width={1300}
              height={1733}
              sizes="(max-width: 768px) 92vw, 768px"
              className="h-auto max-h-[78vh] w-auto rounded-xl object-contain shadow-2xl [animation:fade-zoom_0.3s_var(--ease-out-quart)] motion-reduce:[animation:none]"
            />
            <figcaption className="mt-4 max-w-xl text-center text-sm text-cream-muted">
              {current.caption}
              {count > 1 && (
                <span className="ml-2 font-mono text-cream/50">
                  {open! + 1} / {count}
                </span>
              )}
            </figcaption>
          </figure>
          <style>{`@keyframes fade-zoom { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: none; } }`}</style>
        </div>
      )}
    </>
  );
}
