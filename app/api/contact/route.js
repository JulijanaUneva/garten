import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().max(50).optional().default(""),
  email: z.string().trim().email().max(200),
  message: z.string().trim().min(5).max(4000),
});

export async function POST(req) {
  const parsed = schema.safeParse(await req.json());
  if (!parsed.success) return new NextResponse("Invalid input", { status: 400 });
  const data = parsed.data;

  const escape = (s) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const html = `
    <div style="font-family:Arial,sans-serif;color:#1e293b;">
      <h2 style="color:#1e3a5f;">Neue Anfrage über K&amp;D Website</h2>
      <p><strong>Name:</strong> ${escape(data.name)}</p>
      <p><strong>E-Mail:</strong> ${escape(data.email)}</p>
      <p><strong>Telefon:</strong> ${escape(data.phone || "—")}</p>
      <p><strong>Nachricht:</strong></p>
      <div style="white-space:pre-wrap;border-left:3px solid #2d5016;padding:8px 12px;background:#faf7f1;">${escape(data.message)}</div>
    </div>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "K&D Website <onboarding@resend.dev>",
      // to: ["kd.dienstleistungen@gmx.de"],
      to: ["julijana3uneva@gmail.com"],
      reply_to: data.email,
      subject: `Neue Anfrage von ${data.name}`,
      html,
    }),
  });

  if (!res.ok) return new NextResponse(await res.text(), { status: 500 });
  return NextResponse.json({ ok: true });
}
