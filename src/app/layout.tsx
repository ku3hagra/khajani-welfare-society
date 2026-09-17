import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://khajaniwelfaresociety.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Khajani Welfare Society | Mathura", template: "%s | Khajani Welfare Society" },
  description: "Khajani Welfare Society is a Mathura-based grassroots institution connecting skills, livelihoods, heritage, education and community development.",
  alternates: { canonical: "/" },
  openGraph: { title: "Khajani Welfare Society", description: "Skills, livelihoods and living heritage from Mathura.", url: siteUrl, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
