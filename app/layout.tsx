import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klaf·Project · A scribe at your door. No charge, no catch.",
  description:
    "A certified scribe comes to your home, checks every mezuzah on the spot, and fixes what can be fixed, right there at your door. A nonprofit initiative.",
  openGraph: {
    title: "Klaf·Project · A scribe at your door",
    description:
      "Your mezuzah watches over you. Let us watch over it. Free home visits by a certified scribe.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
