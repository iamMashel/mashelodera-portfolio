import Image from "next/image";
import type { Project } from "@/lib/projects";
import { cn } from "@/lib/cn";

/**
 * Renders a real screenshot when the project has one, otherwise a tasteful
 * generated preview (browser chrome + abstract UI) so cards never show an
 * empty placeholder. Replace generated previews by dropping a screenshot into
 * /public/work/<slug>.png and setting `image` in projects.ts.
 */
export function ProjectVisual({
  project,
  priority = false,
  className,
}: {
  project: Project;
  priority?: boolean;
  className?: string;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.imageAlt}
        width={1599}
        height={781}
        priority={priority}
        sizes="(max-width: 768px) 100vw, 720px"
        className={cn("h-full w-full object-cover object-top", className)}
      />
    );
  }
  return (
    <div className={cn("h-full w-full", className)} aria-hidden="true">
      <GeneratedPreview theme={project.previewTheme ?? "studio"} />
    </div>
  );
}

type PreviewTheme = "health" | "studio" | "ai" | "game";

function GeneratedPreview({ theme }: { theme: PreviewTheme }) {
  return (
    <div className="flex h-full w-full flex-col bg-bg p-3">
      {/* window chrome */}
      <div className="mb-3 flex items-center gap-1.5 px-1">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
      </div>
      {theme === "health" && <HealthMock />}
      {theme === "studio" && <StudioMock />}
      {theme === "ai" && <AiMock />}
      {theme === "game" && <GameMock />}
    </div>
  );
}

/* Agentic AI: a see -> reason -> act pipeline. */
function AiMock() {
  return (
    <div className="grid flex-1 grid-cols-[1fr_1.3fr] gap-3">
      <div className="flex flex-col gap-2.5 rounded-xl bg-surface p-4">
        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-muted">
          screen
        </span>
        <div className="grid flex-1 grid-cols-3 gap-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className={cn(
                "rounded-md",
                i === 4 ? "bg-accent" : "bg-line/70",
              )}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2.5 rounded-xl border border-line p-4">
        {["reason", "retrieve", "act"].map((step, i) => (
          <div key={step} className="flex items-center gap-2.5">
            <span
              className={cn(
                "grid h-6 w-6 shrink-0 place-items-center rounded-full font-mono text-[0.6rem]",
                i === 2 ? "bg-accent text-bg" : "bg-surface-2 text-ink-muted",
              )}
            >
              {i + 1}
            </span>
            <Bar w={i === 2 ? "70%" : "90%"} accent={i === 2} />
          </div>
        ))}
        <div className="mt-1 flex items-center gap-2 rounded-lg bg-accent-wash px-2.5 py-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <Bar w="55%" />
        </div>
      </div>
    </div>
  );
}

/* Game: a crisp play canvas beside a leaderboard. */
function GameMock() {
  return (
    <div className="grid flex-1 grid-cols-[1.4fr_1fr] gap-3">
      <div className="relative overflow-hidden rounded-xl bg-ink p-3">
        <div className="grid h-full grid-cols-8 grid-rows-6 gap-1 opacity-90">
          {Array.from({ length: 48 }).map((_, i) => {
            const snake = [18, 19, 20, 21, 29].includes(i);
            const food = i === 13;
            return (
              <span
                key={i}
                className={cn(
                  "rounded-[3px]",
                  snake ? "bg-accent" : food ? "bg-ochre" : "bg-cream/5",
                )}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2 rounded-xl bg-surface p-4">
        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-ink-muted">
          leaderboard
        </span>
        {["1", "2", "3", "4"].map((n, i) => (
          <div key={n} className="flex items-center gap-2">
            <span className="font-mono text-[0.65rem] text-accent-strong">
              {n}
            </span>
            <Bar w={`${85 - i * 16}%`} accent={i === 0} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Bar({ w, accent = false }: { w: string; accent?: boolean }) {
  return (
    <span
      className={cn("block h-2.5 rounded-full", accent ? "bg-accent" : "bg-line")}
      style={{ width: w }}
    />
  );
}

function HealthMock() {
  return (
    <div className="grid flex-1 grid-cols-[1fr_1.4fr] gap-3">
      <div className="flex flex-col gap-3 rounded-xl bg-surface p-4">
        <span className="h-9 w-9 rounded-full bg-accent-wash" />
        <Bar w="80%" />
        <Bar w="55%" accent />
        <div className="mt-auto flex flex-col gap-2">
          <Bar w="90%" />
          <Bar w="70%" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="rounded-xl border border-line p-4">
          <Bar w="40%" accent />
          <div className="mt-3 flex flex-col gap-2">
            <Bar w="92%" />
            <Bar w="78%" />
          </div>
        </div>
        <div className="flex flex-1 gap-3">
          <div className="flex-1 rounded-xl border border-line p-4">
            <Bar w="60%" />
            <div className="mt-3">
              <Bar w="85%" />
            </div>
          </div>
          <div className="flex-1 rounded-xl bg-surface p-4">
            <Bar w="50%" />
            <div className="mt-3">
              <Bar w="80%" accent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StudioMock() {
  return (
    <div className="flex flex-1 flex-col justify-center gap-4 rounded-xl bg-surface p-6">
      <div className="flex flex-col gap-2.5">
        <span className="block h-5 rounded-md bg-ink" style={{ width: "75%" }} />
        <span className="block h-5 rounded-md bg-ink" style={{ width: "55%" }} />
        <span className="block h-5 rounded-md bg-accent" style={{ width: "35%" }} />
      </div>
      <div className="mt-2 grid grid-cols-3 gap-2.5">
        <div className="h-12 rounded-lg border border-line" />
        <div className="h-12 rounded-lg border border-line" />
        <div className="h-12 rounded-lg border border-line" />
      </div>
    </div>
  );
}
