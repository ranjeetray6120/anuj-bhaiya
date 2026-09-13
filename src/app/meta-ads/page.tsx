"use client";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/adforge/HeroSection";
import { MetricCard } from "@/components/adforge/MetricCard";
import { ServiceCard } from "@/components/adforge/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Zap, TrendingDown, Eye, ShieldCheck } from "lucide-react";

const metaSolutions = [
  {
    tag: "Scale",
    title: "Meta Advantage+ Shopping Campaigns (ASC+)",
    desc: "Leverage Meta's machine learning with broad targeting, dynamic creative combinations, and multi-tier budget scaling that beats rising CPMs.",
    bullets: ["Broad Audience Clustering", "Dynamic Creative Iterations", "Automated Budget Scaling"],
  },
  {
    tag: "Creative",
    title: "High-ROAS Creative Sprint Matrix",
    desc: "We design and test 20+ static hooks, UGC videos, and motion graphics every week to find break-through winning creatives that scale spend profitably.",
    bullets: ["UGC & Direct-Response Hooks", "Weekly Creative Testing Cadence", "Iteration on Top 5% Winners"],
  },
  {
    tag: "Tracking",
    title: "Meta Conversions API (CAPI) & Gateway",
    desc: "Bypass iOS 14.5+ privacy drops with 100% server-side event tracking, offline conversion uploads, and 9.0+ Event Match Quality (EMQ) scores.",
    bullets: ["Server-Side Gateway Setup", "High EMQ Score Optimization", "Offline CRM Purchase Sync"],
  },
  {
    tag: "Lead Gen",
    title: "High-Intent Instant Forms & WhatsApp Funnels",
    desc: "Generate qualified leads with conditional logic instant forms, WhatsApp direct chat ads, and automated CRM webhook syncs.",
    bullets: ["Conditional Lead Filtering", "Instant WhatsApp Follow-ups", "Real-Time CRM Integration"],
  },
  {
    tag: "Retargeting",
    title: "Dynamic Product Ads (DPA) & Catalog Sales",
    desc: "Re-engage abandoned cart visitors with automated dynamic product feeds, customized seasonal overlays, and urgency messaging.",
    bullets: ["Dynamic Catalog Overlays", "Segmented Time-Delay Ladders", "Margin-Weighted Promotion"],
  },
  {
    tag: "Defense",
    title: "Account Structure & Policy Protection",
    desc: "Protect your ad spend with enterprise business manager architecture, backup assets, and dedicated Meta partner representative support.",
    bullets: ["Enterprise BM Hierarchy", "Emergency Asset Backups", "Policy Compliance Pre-Screening"],
  },
];

const metaAdvantages = [
  {
    metric: "4.8x",
    label: "Average D2C Blended ROAS",
    subtext: "Across portfolio ad accounts",
    icon: <Zap className="w-5 h-5" />,
    trend: "+140% YoY",
  },
  {
    metric: "-45%",
    label: "Reduction in Customer CPA",
    subtext: "Through creative angle testing",
    icon: <TrendingDown className="w-5 h-5" />,
    trend: "-45% CPA",
  },
  {
    metric: "200M+",
    label: "Monthly Ad Impressions",
    subtext: "High-intent audience reach",
    icon: <Eye className="w-5 h-5" />,
  },
  {
    metric: "Official",
    label: "Meta Business Partner",
    subtext: "Direct partner rep support",
    icon: <ShieldCheck className="w-5 h-5" />,
  },
];

export default function MetaAdsPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <HeroSection
          badge="OFFICIAL META BUSINESS PARTNER"
          title="Scale with a Leading Facebook & Instagram Ads Agency"
          highlight="Facebook & Instagram Ads"
          subtitle="We turn Facebook & Instagram Ads into high-margin revenue engines for D2C brands, lead-gen businesses, and service providers through scientific creative testing and server-side tracking."
          primaryCtaText="Claim Free Meta Ads Audit"
          primaryCtaHref="/#contact"
          secondaryCtaText="See Growth Metrics"
          secondaryCtaHref="/#stats"
          trustPoints={[
            "Meta Certified Media Buyers",
            "9.0+ Conversions API Event Quality",
            "Weekly Direct-Response Creative Sprints",
          ]}
        />

        {/* Stats Grid with Standardized MetricCards */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-slate-50 border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metaAdvantages.map((stat, idx) => (
              <MetricCard
                key={idx}
                value={<AnimatedCounter value={stat.metric} duration={2} />}
                label={stat.label}
                subtext={stat.subtext}
                trend={stat.trend}
                icon={stat.icon}
                surface="white"
              />
            ))}
          </div>
        </section>

        {/* Services Grid with SectionHeader & ServiceCards */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="METHODOLOGY"
              badgeVariant="primary"
              title="Engineered for High-ROAS Performance"
              highlight="High-ROAS Performance"
              description="A battle-tested framework combining creative volume, machine learning signal optimization, and unit economics rigor."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {metaSolutions.map((sol, idx) => (
                <ServiceCard
                  key={idx}
                  tag={sol.tag}
                  title={sol.title}
                  description={sol.desc}
                  bullets={sol.bullets}
                  href="/#contact"
                  ctaText="Claim Free Meta Audit"
                />
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
