"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, Pause, Shuffle, Eraser } from "lucide-react";
import { useReducedMotion } from "@/lib/useReducedMotion";

// Conway's Game of Life. Three rules, endless emergence, a small nod to
// "build safe superintelligence one piece at a time." Click cells to draw.
const COLS = 48;
const ROWS = 26;
const CELL = 12;

type Grid = Uint8Array;

function makeGrid(fill: (i: number) => number): Grid {
  const g = new Uint8Array(COLS * ROWS);
  for (let i = 0; i < g.length; i++) g[i] = fill(i);
  return g;
}

export function GameOfLife() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gridRef = useRef<Grid>(makeGrid(() => 0));
  const [running, setRunning] = useState(false);
  const reduced = useReducedMotion();

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const styles = getComputedStyle(document.documentElement);
    const live = styles.getPropertyValue("--color-accent").trim() || "#bf4318";
    const dead = styles.getPropertyValue("--color-surface-2").trim() || "#eee";
    const g = gridRef.current;
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        ctx.fillStyle = g[y * COLS + x] ? live : dead;
        ctx.fillRect(x * CELL + 1, y * CELL + 1, CELL - 2, CELL - 2);
      }
    }
  }, []);

  const step = useCallback(() => {
    const g = gridRef.current;
    const next = new Uint8Array(g.length);
    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        let n = 0;
        for (let dy = -1; dy <= 1; dy++) {
          for (let dx = -1; dx <= 1; dx++) {
            if (dx === 0 && dy === 0) continue;
            const nx = (x + dx + COLS) % COLS;
            const ny = (y + dy + ROWS) % ROWS;
            n += g[ny * COLS + nx];
          }
        }
        const alive = g[y * COLS + x];
        next[y * COLS + x] = alive ? (n === 2 || n === 3 ? 1 : 0) : n === 3 ? 1 : 0;
      }
    }
    gridRef.current = next;
    draw();
  }, [draw]);

  useEffect(() => {
    gridRef.current = makeGrid(() => (Math.random() > 0.78 ? 1 : 0));
    draw();
  }, [draw]);

  useEffect(() => {
    if (!running) return;
    const id = setInterval(step, 110);
    return () => clearInterval(id);
  }, [running, step]);

  const toggleCell = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * COLS);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * ROWS);
    if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return;
    const g = gridRef.current;
    g[y * COLS + x] = g[y * COLS + x] ? 0 : 1;
    draw();
  };

  const btn =
    "inline-flex h-10 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent-strong";

  return (
    <div>
      <div className="overflow-hidden rounded-xl border border-line bg-surface-2">
        <canvas
          ref={canvasRef}
          width={COLS * CELL}
          height={ROWS * CELL}
          onClick={toggleCell}
          aria-label="Conway's Game of Life grid. Click cells to toggle them alive."
          className="block h-auto w-full cursor-crosshair"
        />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" className={btn} onClick={() => setRunning((r) => !r)}>
          {running ? <Pause size={15} /> : <Play size={15} />}
          {running ? "Pause" : "Play"}
        </button>
        <button
          type="button"
          className={btn}
          onClick={() => {
            gridRef.current = makeGrid(() => (Math.random() > 0.78 ? 1 : 0));
            draw();
          }}
        >
          <Shuffle size={15} /> Randomize
        </button>
        <button
          type="button"
          className={btn}
          onClick={() => {
            gridRef.current = makeGrid(() => 0);
            draw();
          }}
        >
          <Eraser size={15} /> Clear
        </button>
        {!running && (
          <button type="button" className={btn} onClick={step}>
            Step
          </button>
        )}
      </div>
      {reduced && (
        <p className="mt-3 text-sm text-ink-muted">
          You have reduced motion on, so it won&apos;t auto-run. Use Step, or hit
          Play when you want it to move.
        </p>
      )}
    </div>
  );
}
