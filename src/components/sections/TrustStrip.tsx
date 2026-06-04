import { clients } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

// Thin credibility band. Real orgs Mashel has done remote AI work for. Rendered
// as wordmarks (no logo assets), swap in real SVG logos later if you get them.
export function TrustStrip() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="container-page py-8">
        <Reveal className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <p className="max-w-xs text-center font-mono text-xs uppercase tracking-wider text-ink-muted sm:text-left">
            Trusted with frontier-AI training &amp; evaluation
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-9 gap-y-3">
            {clients.map((c) => (
              <li
                key={c}
                className="font-display text-lg font-semibold text-ink/70 transition-colors hover:text-ink"
              >
                {c}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
