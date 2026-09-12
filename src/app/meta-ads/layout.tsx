import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meta Ads Agency | Facebook & Instagram Performance Marketing | AdForge",
  description:
    "High-converting Meta Ads management engineered for high ROAS. Creative strategy, DPA catalog sales, high-intent lead generation, and conversion rate optimization.",
  alternates: {
    canonical: "/meta-ads",
  },
  openGraph: {
    title: "Meta Ads Agency | Facebook & Instagram Ads | AdForge",
    description:
      "Scale profitably with data-driven Facebook & Instagram advertising, creative testing frameworks, and advanced tracking.",
  },
};

export default function MetaAdsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
