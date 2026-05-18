import { NextResponse } from "next/server";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

type RateLimitEntry = { readonly count: number; readonly resetAt: number };
const rateLimitMap = new Map<string, RateLimitEntry>();

setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (entry.resetAt <= now) rateLimitMap.delete(ip);
  }
}, WINDOW_MS);

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || entry.resetAt <= now) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_REQUESTS) return true;
  rateLimitMap.set(ip, { ...entry, count: entry.count + 1 });
  return false;
}

export async function POST(request: Request) {
  const requestId =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: "Too many requests", requestId },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { name, company, email, source, budget, goals } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required", requestId },
        { status: 400 }
      );
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Telegram credentials not configured", {
        requestId,
        hasToken: Boolean(TELEGRAM_BOT_TOKEN),
        hasChatId: Boolean(TELEGRAM_CHAT_ID),
      });
      return NextResponse.json(
        { error: "Telegram not configured", requestId },
        { status: 500 }
      );
    }

    const receivedAt = new Date().toISOString();
    const budgetLine = budget ? `\n💶 <b>Budget:</b> ${budget}` : "";
    const goalsLine = goals
      ? `\n\n🎯 <b>Goals:</b>\n${String(goals).slice(0, 2000)}`
      : "";
    const message = `
🎮 <b>New Lead from TrapPlan</b>

👤 <b>Name:</b> ${name}
🏢 <b>Company:</b> ${company || "Not provided"}
📧 <b>Email:</b> ${email}${budgetLine}
📍 <b>Source:</b> ${source || "Website"}${goalsLine}

<i>Received at ${receivedAt}</i>
    `.trim();

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "HTML",
      }),
    });

    if (!response.ok) {
      let errorData: unknown = null;
      try {
        errorData = await response.json();
      } catch {
        errorData = null;
      }

      console.error("Telegram API error", {
        requestId,
        status: response.status,
        errorData,
      });

      const description =
        typeof errorData === "object" &&
        errorData !== null &&
        "description" in errorData &&
        typeof (errorData as { description?: unknown }).description === "string"
          ? (errorData as { description: string }).description
          : undefined;

      return NextResponse.json(
        {
          error: "Failed to send to Telegram",
          ...(description ? { details: description } : {}),
          status: response.status,
          requestId,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, requestId });
  } catch (error) {
    console.error("Error sending to Telegram", { requestId, error });
    return NextResponse.json(
      { error: "Internal server error", requestId },
      { status: 500 }
    );
  }
}
