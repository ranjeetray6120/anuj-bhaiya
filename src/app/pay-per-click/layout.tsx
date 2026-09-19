import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Ads & PPC Management Agency | AdForge Tech",
  description:
    "Data-driven Google Ads and PPC management. Google Search, Performance Max, Shopping Ads, and server-side tracking engineered for maximum ROI.",
  alternates: {
    canonical: "/pay-per-click",
  },
  openGraph: {
    title: "Google Ads & PPC Management Agency | AdForge Tech",
    description:
      "Dominate search results and capture high-intent buyers with high-performance Google Ads and PPC campaigns.",
  },
};

export default function PayPerClickLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
