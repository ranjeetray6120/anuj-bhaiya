import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/adforge/HeroSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adforgetech.com";

export const metadata: Metadata = {
  title: "Testimonials & Verified Client Reviews | AdForge Tech",
  description:
    "Explore verified customer reviews and performance marketing testimonials. See how AdForge Tech scaled brands across e-commerce, D2C, education, and consulting.",
  alternates: {
    canonical: "/testimonials",
  },
  openGraph: {
    title: "Testimonials & Verified Client Reviews | AdForge Tech",
    description:
      "Explore verified customer reviews and performance marketing testimonials.",
    url: `${siteUrl}/testimonials`,
    type: "website",
    siteName: "AdForge Tech",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "AdForge Tech Customer Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Testimonials & Verified Client Reviews | AdForge Tech",
    description:
      "Explore verified customer reviews and performance marketing testimonials.",
  },
};

export default function TestimonialsPage() {
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
            name: "Testimonials",
            item: `${siteUrl}/testimonials`,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "AdForge Tech Verified Customer Testimonials & Reviews",
        description:
          "Verified customer reviews and brand partnerships scaled by AdForge Tech across e-commerce, education, and enterprise consulting.",
        url: `${siteUrl}/testimonials`,
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
        <HeroSection
          badge="CUSTOMER TESTIMONIALS"
          title="Brands That Trust AdForge Tech to Scale Revenue"
          highlight="Scale Revenue"
          subtitle="From UK e-commerce fitness stores to Indian financial consulting leaders, explore real verified customer reviews and performance marketing results."
          primaryCtaText="Claim Free Growth Audit"
          primaryCtaHref="/contact-us"
          secondaryCtaText="Explore Google Reviews"
          secondaryCtaHref="#testimonials"
          trustPoints={[
            "100% Verified Performance Accounts",
            "₹300Cr+ Client Revenue Generated",
            "UK & India Enterprise Scale",
          ]}
        />

        <TestimonialsSection />
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
