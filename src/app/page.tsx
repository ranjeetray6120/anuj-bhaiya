import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PerformanceStats from "@/components/PerformanceStats";
import AgencyResults from "@/components/AgencyResults";
import ComparisonTable from "@/components/ComparisonTable";
import Partners from "@/components/Partners";
import OurProcess from "@/components/OurProcess";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AdForge | Ads that forge growth",
  description:
    "AdForge engineers high-converting campaigns, Google Ads, Meta Ads, and SEO strategies that deliver measurable ROI for your business.",
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PerformanceStats />
      <AgencyResults />
      <ComparisonTable />
      <Partners />
      <OurProcess />
      <CTA />
      <Footer />
    </main>
  );
}

