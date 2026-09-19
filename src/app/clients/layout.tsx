import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Clients & Portfolio | Verified Performance Growth | AdForge Tech",
  description:
    "Explore the brands and companies that trust AdForge Tech to scale their revenue through Google Ads, Meta Ads, SEO, and full-funnel performance marketing.",
  alternates: {
    canonical: "/clients",
  },
  openGraph: {
    title: "Our Clients & Portfolio | AdForge Tech",
    description:
      "Trusted by e-commerce brands and businesses across the UK and India to drive predictable, profitable growth.",
    url: "https://adforgetech.com/clients",
    siteName: "AdForge Tech",
  },
};

export default function ClientsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
