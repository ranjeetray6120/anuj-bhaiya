import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Testimonials & Reviews | Verified Performance Growth | AdForge Tech",
  description:
    "Explore the brands and companies that trust AdForge Tech to scale their revenue through Google Ads, Meta Ads, SEO, and full-funnel performance marketing.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Customer Testimonials & Reviews | AdForge Tech",
    description:
      "Trusted by e-commerce brands and businesses across the UK and India to drive predictable, profitable growth.",
    url: "https://adforgetech.com/testimonials",
    siteName: "AdForge Tech",
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
