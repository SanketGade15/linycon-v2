import type { Metadata, Viewport } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.linycon.in",
  ),
  title:
    "Linycon Private Limited | Electrical, Illumination & Infrastructure Solutions",
  description:
    "Integrated electrical, illumination and infrastructure solutions. Linycon brings survey, design, execution, testing and commissioning together.",
  alternates: { canonical: "/" },
  icons: { icon: "/assets/linycon_emblem.png" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Linycon Private Limited",
    title:
      "Linycon Private Limited | Electrical, Illumination & Infrastructure Solutions",
    description:
      "Integrated engineering expertise, from concept to commissioning.",
    images: [
      {
        url: "/assets/hero_highway.jpg",
        alt: "Illuminated highway and connected road infrastructure at night",
      },
    ],
  },
};

export const viewport: Viewport = { themeColor: "#073b40" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
