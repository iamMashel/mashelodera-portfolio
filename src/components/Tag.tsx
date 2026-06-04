import { cn } from "@/lib/cn";

export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
