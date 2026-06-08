import { NextRequest, NextResponse } from "next/server";

type DonatePayload = {
  name?: string;
  phone?: string;
  amount?: string;
};

const TO_EMAIL = process.env.LEAD_TO_EMAIL || "Info@klafproject.com";
const FROM_EMAIL = process.env.RESEND_FROM || "Klaf Project <noreply@klafproject.com>";

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(body: DonatePayload, meta: { timestamp: string; source: string }): string {
  const row = (label: string, value?: string) =>
    value
      ? `<tr><td style="padding:8px 12px;background:#faf7f0;border:1px solid #e7dfd0;font-size:12px;color:#6b5544;text-transform:uppercase;letter-spacing:1px;width:160px;vertical-align:top">${label}</td><td style="padding:8px 12px;border:1px solid #e7dfd0;font-size:14px;color:#2e2218">${escapeHtml(value)}</td></tr>`
      : "";

  return `
<div style="font-family:system-ui,-apple-system,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#fff">
  <h2 style="margin:0 0 6px;font-size:22px;color:#2e2218">New donation pledge</h2>
  <p style="margin:0 0 24px;font-size:13px;color:#6b5544">Submitted via klafproject.com</p>
  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%">
    ${row("Name", body.name)}
    ${row("Phone", body.phone)}
    ${row("Amount (USD)", body.amount ? `$${body.amount}` : undefined)}
    ${row("Submitted at", meta.timestamp)}
    ${row("Source", meta.source)}
  </table>
</div>`.trim();
}

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as DonatePayload | null;

  if (!body || !body.name || !body.phone || !body.amount) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  const meta = {
    timestamp: new Date().toISOString(),
    source: req.headers.get("referer") ?? "direct",
  };

  const resendKey = process.env.RESEND_API_KEY;

  if (!resendKey) {
    console.log("[donate] No RESEND_API_KEY configured. Pledge:", { ...body, ...meta });
    return NextResponse.json({ ok: true, queued: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject: `New donation pledge — ${body.name} ($${body.amount})`,
        html: buildEmailHtml(body, meta),
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      console.error("[donate] Resend failed", res.status, errText);
      return NextResponse.json(
        { ok: false, error: "Email send failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[donate] Resend error", err);
    return NextResponse.json(
      { ok: false, error: "Email send error" },
      { status: 500 }
    );
  }
}
