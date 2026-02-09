import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, source } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error("Telegram credentials not configured", {
        hasToken: Boolean(TELEGRAM_BOT_TOKEN),
        hasChatId: Boolean(TELEGRAM_CHAT_ID),
      });
      return NextResponse.json(
        { error: "Telegram not configured" },
        { status: 500 }
      );
    }

    const receivedAt = new Date().toISOString();
    const message = `
🎮 <b>New Lead from TrapPlan</b>

👤 <b>Name:</b> ${name}
🏢 <b>Company:</b> ${company || "Not provided"}
📧 <b>Email:</b> ${email}
📍 <b>Source:</b> ${source || "Website"}

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
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending to Telegram", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
