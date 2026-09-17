import type { Metadata } from "next";
import { Fraunces, Manrope, Great_Vibes } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elite Group | Premium Wedding & Event Catering in Kerala",
  description:
    "Elite Group Catering and Events — premium wedding and event catering in Kottayam, Kerala. Customised menus and luxury service since 2015.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${greatVibes.variable}`}>
      <body className="font-body antialiased bg-linen text-ink">{children}</body>
    </html>
  );
}
