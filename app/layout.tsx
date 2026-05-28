import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Klaf — Free Mezuzah Inspection by a Certified Sofer",
  description:
    "A certified Sofer STaM comes to your home and inspects every mezuzah scroll. The visit is free. No pressure, no obligation.",
  openGraph: {
    title: "Klaf — Free Mezuzah Inspection",
    description:
      "A certified Sofer STaM comes to your home and inspects every mezuzah scroll. Free visit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>{children}</body>
    </html>
  );
}
