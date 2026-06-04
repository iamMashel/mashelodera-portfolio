import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { tierColumns, tierRows, type TierKey } from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

const ctaHref: Record<TierKey, string> = {
  project: whatsappHref,
  retainer: "/#contact",
  workshop: "/speaking",
};

function Cell({ value }: { value: boolean | string }) {
  if (value === true)
    return (
      <span className="inline-grid h-6 w-6 place-items-center rounded-full bg-accent-wash text-accent-strong">
        <Check size={14} />
      </span>
    );
  if (value === false)
    return <Minus size={16} className="text-line" aria-label="Not included" />;
  return (
    <span className="rounded-full border border-line px-2 py-0.5 text-xs text-ink-muted">
      {value}
    </span>
  );
}

export function ServiceTiers() {
  return (
    <section className="section-pad scroll-mt-20">
      <div className="container-page">
        <SectionHeading
          title="Ways to engage"
          description="Three shapes the work usually takes. Price follows scope, so there are no fixed tiers, just a clear starting point."
        />

        <Reveal>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0">
              <caption className="sr-only">
                Comparison of project, ongoing, and workshop engagements
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[34%] p-4 text-left align-bottom" />
                  {tierColumns.map((c) => (
                    <th
                      key={c.key}
                      scope="col"
                      className={
                        "p-5 text-left align-top " +
                        (c.featured ? "rounded-t-2xl bg-accent-wash/60" : "")
                      }
                    >
                      <span className="font-display text-xl font-semibold text-ink">
                        {c.name}
                      </span>
                      <p className="mt-1 text-sm font-normal text-ink-muted">
                        {c.tagline}
                      </p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tierRows.map((row) => (
                  <tr key={row.label}>
                    <th
                      scope="row"
                      className="border-t border-line p-4 text-left text-[0.95rem] font-medium text-ink"
                    >
                      {row.label}
                    </th>
                    {tierColumns.map((c) => (
                      <td
                        key={c.key}
                        className={
                          "border-t border-line p-4 " +
                          (c.featured ? "bg-accent-wash/60" : "")
                        }
                      >
                        <Cell value={row[c.key]} />
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="p-4" />
                  {tierColumns.map((c) => (
                    <td
                      key={c.key}
                      className={
                        "p-4 align-top " +
                        (c.featured ? "rounded-b-2xl bg-accent-wash/60" : "")
                      }
                    >
                      <Link
                        href={ctaHref[c.key]}
                        {...(ctaHref[c.key].startsWith("http")
                          ? { target: "_blank", rel: "noreferrer noopener" }
                          : {})}
                        className={
                          "inline-flex h-10 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors " +
                          (c.featured
                            ? "bg-accent text-cream hover:bg-accent-strong"
                            : "border border-ink/20 text-ink hover:border-ink hover:bg-surface")
                        }
                      >
                        {c.cta}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
