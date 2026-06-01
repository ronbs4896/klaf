import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You · Klaf Project",
};

export default function ThankYou() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-6 py-20">
      <div className="max-w-xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-forest">
          Request received
        </p>
        <h1 className="h-display mt-4 text-4xl text-ink sm:text-5xl">
          Thank you. We&apos;ll be in touch shortly.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-ink/70">
          Our team will reach out within a day or two to confirm your area and
          find a convenient time for the Sofer to visit your home.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-sm text-ink transition hover:border-ink/60"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
