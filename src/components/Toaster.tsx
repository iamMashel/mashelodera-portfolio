"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { subscribeToast, type ToastItem } from "@/lib/toast";

export function Toaster() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  useEffect(() => {
    return subscribeToast((t) => {
      setToasts((prev) => [...prev, t]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((x) => x.id !== t.id));
      }, 2800);
    });
  }, []);

  return (
    <div
      aria-live="polite"
      role="status"
      className="pointer-events-none fixed inset-x-0 bottom-6 z-[var(--z-toast)] flex flex-col items-center gap-2 px-4"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          className="pointer-events-auto flex items-center gap-2.5 rounded-full bg-ink-invert px-4 py-2.5 text-sm font-medium text-cream shadow-[0_16px_40px_-16px_rgba(0,0,0,0.7)] [animation:toast-in_0.3s_var(--ease-out-quart)] motion-reduce:[animation:none]"
        >
          <span className="grid h-5 w-5 place-items-center rounded-full bg-accent text-cream">
            <Check size={13} />
          </span>
          {t.message}
        </div>
      ))}
      <style>{`@keyframes toast-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }`}</style>
    </div>
  );
}
