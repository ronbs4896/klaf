"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Status = "idle" | "submitting" | "error";

const inputClass =
  "w-full rounded-lg border border-line bg-cream/40 px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-forest/40 focus:bg-white focus:outline-none focus:ring-1 focus:ring-forest/30";
const labelClass =
  "mb-1.5 block text-[11px] uppercase tracking-[0.18em] text-forest";

export default function LeadForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Submit failed");
      router.push("/thank-you");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or call us.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-line bg-white p-6 shadow-[0_30px_80px_-40px_rgba(91,70,54,0.25)] sm:p-8"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="name">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Yaakov Cohen"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="(555) 123-4567"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="address">
            Address
          </label>
          <input
            id="address"
            name="address"
            required
            autoComplete="street-address"
            className={inputClass}
            placeholder="123 Main St"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="city">
            City
          </label>
          <input
            id="city"
            name="city"
            required
            autoComplete="address-level2"
            className={inputClass}
            placeholder="Brooklyn"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="state">
            State
          </label>
          <input
            id="state"
            name="state"
            required
            autoComplete="address-level1"
            className={inputClass}
            placeholder="NY"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="mezuzot">
            How many mezuzot do you have?
          </label>
          <input
            id="mezuzot"
            name="mezuzot"
            type="number"
            min={1}
            className={inputClass}
            placeholder="e.g. 8"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="preferredTime">
            Preferred time to be contacted
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Choose one
            </option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
            <option value="Anytime">Anytime</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="note">
            Optional note
          </label>
          <textarea
            id="note"
            name="note"
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="Anything we should know before the visit?"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-forest px-6 py-3.5 text-sm font-medium text-cream transition hover:bg-forest-hover disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Request My Free Visit"}
      </button>

      {error && (
        <p className="mt-3 text-sm text-red-600">{error}</p>
      )}

      <p className="mt-4 text-xs text-ink/50">
        No payment required. No obligation. We&apos;ll contact you before
        scheduling anything.
      </p>
    </form>
  );
}
