"use client";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/adforge/HeroSection";
import { ServiceCard } from "@/components/adforge/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";

const seoServices = [
  {
    tag: "Technical",
    title: "Technical SEO & Core Web Vitals",
    desc: "Complete crawl budget optimization, server log analysis, site speed acceleration, and JavaScript rendering fixes to dominate Google indexing.",
    bullets: ["Crawl Budget & Server Logs", "Core Web Vitals Optimization", "Faceted Navigation Architecture"],
  },
  {
    tag: "Content",
    title: "Entity & Topical Authority Optimization",
    desc: "Move beyond basic keywords. We build comprehensive semantic content clusters that establish undeniable subject matter authority.",
    bullets: ["Semantic Cluster Mapping", "Content Gap Analysis", "Search Intent Matching"],
  },
  {
    tag: "Authority",
    title: "High-Tier Digital PR & Link Acquisition",
    desc: "Earn contextual backlinks from authoritative niche publications and media outlets that drive real referral traffic and trust.",
    bullets: ["Editorial Media Placements", "Unlinked Brand Mention Reclaim", "Data-Driven Research Reports"],
  },
  {
    tag: "E-Commerce",
    title: "E-Commerce Category & Product SEO",
    desc: "Optimize high-intent product collection pages, structured schema markup, and faceted navigation to capture buyers ready to convert.",
    bullets: ["Rich Product Schema", "PLP Keyword Optimization", "Internal Linking Ladders"],
  },
  {
    tag: "Local",
    title: "Local SEO & Multi-Location Scaling",
    desc: "Dominate Google Maps 3-Pack rankings, localize landing pages, and optimize GMB profiles for maximum high-converting local walk-ins and inquiries.",
    bullets: ["Google Business Profile Dominance", "Local Citation Consistency", "Geo-Targeted Landing Pages"],
  },
  {
    tag: "Next-Gen",
    title: "AI Search Optimization (GEO & SGE)",
    desc: "Position your brand to be cited and recommended in Google AI Overviews, Perplexity AI, and conversational search engines.",
    bullets: ["Generative Engine Optimization", "LLM Citation Structuring", "Information Gain Content"],
  },
];

const seoProcess = [
  {
    step: "01",
    title: "Comprehensive Deep Audit",
    desc: "Uncover technical blockers, indexing traps, and hidden keyword opportunities in your current architecture.",
  },
  {
    step: "02",
    title: "Intent & Architecture Blueprint",
    desc: "Map transactional and high-commercial search intent to scalable URL funnels and content silos.",
  },
  {
    step: "03",
    title: "Content Sprint & Link Velocity",
    desc: "Deploy high-grade semantic content and execute white-hat editorial outreach campaigns.",
  },
  {
    step: "04",
    title: "Revenue Tracking & CRO",
    desc: "Track keyword surge in GA4 and GSC while continuously improving on-page conversion rates.",
  },
];

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <HeroSection
          badge="DATA-DRIVEN ORGANIC GROWTH"
          title="Scale Your Organic Traffic & Revenue with Predictable ROI"
          highlight="Predictable ROI"
          subtitle="We engineer revenue-focused SEO campaigns that outrank competitors, build defensible domain authority, and turn organic search into your highest margin acquisition channel."
          primaryCtaText="Claim Free SEO Audit"
          primaryCtaHref="/#contact"
          secondaryCtaText="See Proven Case Studies"
          secondaryCtaHref="/#stats"
          trustPoints={[
            "Full Technical & Core Web Vitals Audit",
            "100% White-Hat Editorial Authority",
            "Keyword Rankings Tied to Tracked Revenue",
          ]}
        />

        {/* Services Grid */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="SERVICES"
              badgeVariant="primary"
              title="Full-Stack Search Engine Optimization"
              highlight="Search Engine Optimization"
              description="From deep technical foundations to high-authority media PR, every facet of your organic growth is handled under one roof."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {seoServices.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  tag={service.tag}
                  title={service.title}
                  description={service.desc}
                  bullets={service.bullets}
                  href="/#contact"
                  ctaText="Schedule SEO Consultation"
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="EXECUTION FRAMEWORK"
              badgeVariant="secondary"
              title="Our 4-Phase Organic Growth Framework"
              highlight="Organic Growth Framework"
              description="A systematic, reproducible methodology that transforms search traffic into measurable revenue."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {seoProcess.map((p) => (
                <Card
                  key={p.step}
                  interactive
                  surface="white"
                  className="p-6 sm:p-7 flex flex-col gap-4 justify-between"
                >
                  <div className="flex flex-col gap-3">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#046BD2] font-black text-sm flex items-center justify-center border border-blue-100/80">
                      {p.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
