import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

import FloatingWidgets from "@/components/FloatingWidgets";

export const metadata: Metadata = {
  title: "AdForge | Ads that forge growth",
  description:
    "AdForge engineers high-converting campaigns, Google Ads, Meta Ads, and SEO strategies that deliver measurable ROI for your business.",
  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
        <FloatingWidgets />
      </body>
    </html>
  );
}

