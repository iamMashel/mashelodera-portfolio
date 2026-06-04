import { site } from "@/lib/site";

export function AvailabilityBadge() {
  if (!site.available) return null;
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-ink-muted">
      <span className="relative flex h-2 w-2" aria-hidden="true">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      {site.availabilityNote}
    </span>
  );
}
