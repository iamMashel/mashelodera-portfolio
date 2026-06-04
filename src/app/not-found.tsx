import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="font-mono text-sm text-accent-strong">404</p>
      <h1 className="h-hero mt-3 text-ink">This page wandered off.</h1>
      <p className="mt-4 max-w-md text-lg text-ink-muted">
        The link may be broken or the page moved. Let&apos;s get you back to
        something real.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium text-bg transition-colors hover:bg-accent-strong"
      >
        <ArrowLeft size={18} /> Back home
      </Link>
    </div>
  );
}
