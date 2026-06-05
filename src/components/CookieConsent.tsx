"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const KEY = "cookie-consent";

// One functional cookie (the visitor counter) is only set after the visitor
// accepts here. Choice is remembered in localStorage (not a cookie), and the
// counter listens for the "cookie-consent" event to start once accepted.
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Deferred so the read+show isn't a synchronous setState in the effect body.
    const id = setTimeout(() => {
      try {
        if (!localStorage.getItem(KEY)) setShow(true);
      } catch {
        /* storage blocked; skip the banner */
      }
    }, 0);
    return () => clearTimeout(id);
  }, []);

  const decide = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new CustomEvent("cookie-consent", { detail: value }));
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-[var(--z-backdrop)] mx-auto max-w-md rounded-2xl border border-line bg-bg p-5 shadow-[0_24px_60px_-24px_rgba(28,17,7,0.45)] [animation:fade-in_0.3s_ease-out] motion-reduce:[animation:none]">
      <p className="text-sm text-ink">
        This site sets one functional cookie to count visitors, and uses
        cookieless analytics. No tracking, no profiles.{" "}
        <Link href="/privacy" className="link-underline">
          Privacy policy
        </Link>
        .
      </p>
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => decide("accepted")}
          className="inline-flex h-10 items-center rounded-full bg-accent px-5 text-sm font-medium text-cream transition-colors hover:bg-accent-strong active:scale-[0.98]"
        >
          Accept
        </button>
        <button
          type="button"
          onClick={() => decide("declined")}
          className="inline-flex h-10 items-center rounded-full border border-ink/20 px-5 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-surface active:scale-[0.98]"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
