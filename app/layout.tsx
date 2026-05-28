import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
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
    <html lang="en" className={geist.variable}>
      <body>{children}</body>
    </html>
  );
}
