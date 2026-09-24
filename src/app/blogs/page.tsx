import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BlogListing from "@/components/BlogListing";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adforgetech.com";

export const metadata: Metadata = {
  title: "Growth Playbooks & Marketing Insights | AdForge Tech",
  description:
    "Actionable performance marketing blueprints, Google & Meta Ads breakdowns, and real case studies from the growth trenches.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Growth Playbooks & Marketing Insights | AdForge Tech",
    description:
      "Actionable performance marketing blueprints, Google & Meta Ads breakdowns, and real case studies from the growth trenches.",
    url: `${siteUrl}/blogs`,
    type: "website",
    siteName: "AdForge Tech",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "AdForge Tech Growth Playbooks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Playbooks & Marketing Insights | AdForge Tech",
    description:
      "Actionable performance marketing blueprints, Google & Meta Ads breakdowns, and case studies.",
  },
};

export default function BlogsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Growth Playbooks",
            item: `${siteUrl}/blogs`,
          },
        ],
      },
      {
        "@type": "Blog",
        name: "AdForge Tech Growth Playbooks",
        description:
          "Actionable performance marketing blueprints, Google & Meta Ads breakdowns, and case studies.",
        url: `${siteUrl}/blogs`,
        publisher: {
          "@type": "Organization",
          name: "AdForge Tech",
          url: siteUrl,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pt-20">
        <BlogListing />
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
