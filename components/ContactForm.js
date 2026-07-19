"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending"); setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(form.get("name") ?? ""),
          email: String(form.get("email") ?? ""),
          phone: String(form.get("phone") ?? ""),
          message: String(form.get("message") ?? ""),
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
     e.target.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Fehler");
    }
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-4">
        <input name="name" required placeholder="Name" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
        <div className="grid gap-4 sm:grid-cols-2">
          <input name="email" type="email" required placeholder="E-Mail" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
          <input name="phone" type="tel" placeholder="Telefon (optional)" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
        </div>
        <textarea name="message" required rows={5} placeholder="Nachricht" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
        <button type="submit" disabled={status === "sending"} className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-60">
          {status === "sending" ? "Wird gesendet…" : "Anfrage senden"}
        </button>
        {status === "ok" && <p className="text-sm text-green-700">Vielen Dank! Wir melden uns in Kürze.</p>}
        {status === "error" && <p className="text-sm text-red-700">{error ?? "Fehler"}</p>}
      </div>
    </form>
  );
}
