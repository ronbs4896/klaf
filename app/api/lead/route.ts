import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  city?: string;
  state?: string;
  mezuzot?: string;
  preferredTime?: string;
  note?: string;
};

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as LeadPayload | null;

  if (!body || !body.name || !body.phone || !body.city || !body.state) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  const webhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  const payload = {
    timestamp: new Date().toISOString(),
    ...body,
    source: req.headers.get("referer") ?? "direct",
    userAgent: req.headers.get("user-agent") ?? "",
  };

  if (!webhook) {
    console.log("[lead] No GOOGLE_SHEETS_WEBHOOK_URL configured. Lead:", payload);
    return NextResponse.json({ ok: true, queued: true });
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      console.error("[lead] Sheets webhook failed", res.status);
      return NextResponse.json(
        { ok: false, error: "Webhook failed" },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] Sheets webhook error", err);
    return NextResponse.json(
      { ok: false, error: "Webhook error" },
      { status: 500 }
    );
  }
}
