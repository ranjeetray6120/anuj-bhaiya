import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ClientsSection from "@/components/ClientsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/adforge/HeroSection";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adforgetech.com";

export const metadata: Metadata = {
  title: "Client Case Studies & Portfolio | AdForge Tech",
  description:
    "Explore verified client partnerships and performance marketing case studies. See how AdForge Tech scaled brands across e-commerce, D2C, education, and consulting.",
  alternates: {
    canonical: "/clients",
  },
  openGraph: {
    title: "Client Case Studies & Portfolio | AdForge Tech",
    description:
      "Explore verified client partnerships and performance marketing case studies. See how AdForge Tech scaled brands across e-commerce, D2C, education, and consulting.",
    url: `${siteUrl}/clients`,
    type: "website",
    siteName: "AdForge Tech",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "AdForge Tech Client Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies & Portfolio | AdForge Tech",
    description:
      "Explore verified client partnerships and performance marketing case studies.",
  },
};

export default function ClientsPage() {
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
            name: "Client Portfolio",
            item: `${siteUrl}/clients`,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        name: "AdForge Tech Client Case Studies & Portfolio",
        description:
          "Verified brand partnerships scaled by AdForge Tech across e-commerce, education, and enterprise consulting.",
        url: `${siteUrl}/clients`,
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
          badge="VERIFIED PARTNERSHIPS"
          title="Brands That Trust AdForge Tech to Scale Revenue"
          highlight="Scale Revenue"
          subtitle="From UK e-commerce fitness stores to Indian financial consulting leaders, explore how our performance marketing systems drive measurable customer acquisition."
          primaryCtaText="Claim Free Growth Audit"
          primaryCtaHref="/contact-us"
          secondaryCtaText="Explore Client List"
          secondaryCtaHref="#clients"
          trustPoints={[
            "100% Verified Performance Accounts",
            "₹300Cr+ Client Revenue Generated",
            "UK & India Enterprise Scale",
          ]}
        />

        <ClientsSection />
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
