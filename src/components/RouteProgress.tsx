"use client";

import { usePathname } from "next/navigation";

// A top progress bar that replays on each navigation. Remounting via `key`
// restarts the CSS fill, so there's no scroll listeners or setState-in-effect.
// App Router navigations to static pages are near-instant, so this reads as a
// quick "page loaded" sweep. Hidden entirely under reduced motion.
export function RouteProgress() {
  const pathname = usePathname();
  return <div key={pathname} className="route-bar" aria-hidden="true" />;
}
