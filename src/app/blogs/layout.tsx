import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growth Insights & Case Studies | Performance Marketing Blog | AdForge Tech",
  description:
    "Explore actionable playbooks, case studies, and advanced strategies on Google Ads, Meta Ads (Facebook & Instagram), SEO, and conversion optimization.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Growth Insights & Case Studies | AdForge Tech Blog",
    description:
      "Deep-dive into proven performance marketing strategies, ROAS frameworks, and e-commerce scaling case studies.",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
