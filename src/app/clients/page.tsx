"use client";

import Navbar from "@/components/Navbar";
import ClientsSection from "@/components/ClientsSection";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/adforge/HeroSection";

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <HeroSection
          badge="VERIFIED PARTNERSHIPS"
          title="Brands That Trust AdForge Tech to Scale Revenue"
          highlight="Scale Revenue"
          subtitle="From UK e-commerce fitness stores to Indian financial consulting leaders, explore how our performance marketing systems drive measurable customer acquisition."
          primaryCtaText="Claim Free Growth Audit"
          primaryCtaHref="/#contact"
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
