import { NextResponse, type NextRequest } from "next/server";

// Visitor counter backed by Upstash Redis (free, via the Vercel Marketplace).
// One first-party cookie ("mv") means a returning visitor is counted once, so
// the number reads as "visitors", not raw page loads. If the store isn't
// configured, we return { total: null } and the UI hides itself — never a fake.

const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;
const KEY = "visits";
const COOKIE = "mv";

async function redis(command: string): Promise<number | null> {
  if (!url || !token) return null;
  try {
    const res = await fetch(`${url}/${command}/${KEY}`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { result?: number | string | null };
    const n = Number(data.result ?? 0);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

export async function POST(req: NextRequest) {
  const seen = req.cookies.get(COOKIE)?.value === "1";
  // New visitor -> increment; returning visitor -> just read the current total.
  const total = await redis(seen ? "get" : "incr");

  const res = NextResponse.json({ total }, { headers: { "cache-control": "no-store" } });
  if (!seen && total !== null) {
    res.cookies.set(COOKIE, "1", {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      path: "/",
    });
  }
  return res;
}
