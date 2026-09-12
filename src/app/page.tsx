import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";

// Dynamic imports for below-fold components — reduces TBT dramatically
const PerformanceStats = dynamic(() => import("@/components/PerformanceStats"));
const AgencyResults = dynamic(() => import("@/components/AgencyResults"));
const ComparisonTable = dynamic(() => import("@/components/ComparisonTable"));
const Partners = dynamic(() => import("@/components/Partners"));
const ToolsSection = dynamic(() => import("@/components/ToolsSection"));
const OurProcess = dynamic(() => import("@/components/OurProcess"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "AdForge | Ads that forge growth",
  description:
    "AdForge engineers high-converting campaigns, Google Ads, Meta Ads, and SEO strategies that deliver measurable ROI for your business.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <PerformanceStats />
      <AgencyResults />
      <ComparisonTable />
      <Partners />
      <ToolsSection />
      <OurProcess />
      <CTA />
      <Footer />
    </main>
  );
}
