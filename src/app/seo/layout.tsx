import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Services & Organic Growth | AdForge Tech",
  description:
    "Scale your organic traffic and revenue with predictable ROI. Enterprise technical SEO, topical authority clusters, digital PR, and AI search optimization (GEO & SGE).",
  alternates: {
    canonical: "/seo",
  },
  openGraph: {
    title: "SEO Services & Organic Growth Agency | AdForge Tech",
    description:
      "Revenue-focused SEO campaigns engineered to outrank competitors and turn organic search into your most profitable acquisition channel.",
  },
};

export default function SEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
