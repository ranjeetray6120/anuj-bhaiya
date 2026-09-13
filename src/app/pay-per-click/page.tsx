"use client";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/adforge/HeroSection";
import { MetricCard } from "@/components/adforge/MetricCard";
import { ServiceCard } from "@/components/adforge/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Award, Users, TrendingDown, DollarSign } from "lucide-react";

const ppcCampaigns = [
  {
    tag: "Search",
    title: "High-Intent Google Search Ads",
    desc: "Capture ready-to-buy prospects at the exact moment they search for your products or high-ticket services with hyper-focused ad copy and match types.",
    bullets: ["SKAGs & Intent Match Clustering", "Negative Keyword Sculpting", "Dayparting & Bid Adjustments"],
  },
  {
    tag: "AI Scale",
    title: "Performance Max (PMax) Excellence",
    desc: "Structure multi-asset groups, clean audience signals, and proprietary negative keyword lists to train Google's AI for maximum conversion volume.",
    bullets: ["Audience Signal Segmentation", "Asset Group Optimization", "Feed-Only PMax Options"],
  },
  {
    tag: "Video",
    title: "High-Converting YouTube Ads",
    desc: "Drive massive brand awareness and direct-response conversions using custom video creative hooks, demand gen campaigns, and in-stream funnels.",
    bullets: ["Hook-Hold-CTA Framework", "Demand Gen Placement", "Viewer Retargeting"],
  },
  {
    tag: "E-Commerce",
    title: "Google Shopping & Feed Optimization",
    desc: "Optimize Merchant Center product titles, descriptions, and custom labels to claim top real estate on Google Shopping tab with low CPCs.",
    bullets: ["Title & Attribute Enrichment", "Custom Label ROAS Tiers", "Merchant Center Health"],
  },
  {
    tag: "Attribution",
    title: "Server-Side Tracking & Enhanced Conversions",
    desc: "Eliminate attribution blindness with GA4, Google Tag Manager Server-Side setup, and First-Party data pipelines for precise ROAS tracking.",
    bullets: ["First-Party Data Integration", "GTM Server Container", "Enhanced Conversion Signals"],
  },
  {
    tag: "Lead Gen",
    title: "High-Ticket B2B & Call-Only Ads",
    desc: "Generate qualified inbound calls and verified lead form submissions for education institutes, real estate, and high-ticket service brands.",
    bullets: ["Direct-Dial Click-to-Call", "Landing Page CRO", "CRM Lead Validation"],
  },
];

const ppcAdvantages = [
  {
    metric: "100%",
    label: "Google Certified Account Managers",
    subtext: "Senior media buyers only",
    icon: <Award className="w-5 h-5" />,
  },
  {
    metric: "45k+",
    label: "Leads Generated in Education & D2C",
    subtext: "Verified high intent inquiries",
    icon: <Users className="w-5 h-5" />,
  },
  {
    metric: "-35%",
    label: "Average Reduction in Client CPA",
    subtext: "Within 60 days of audit",
    icon: <TrendingDown className="w-5 h-5" />,
  },
  {
    metric: "₹50Cr+",
    label: "Annual Google Ads Spend Managed",
    subtext: "Enterprise media buying scale",
    icon: <DollarSign className="w-5 h-5" />,
  },
];

export default function PayPerClickPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <HeroSection
          badge="GOOGLE PREMIER PARTNER AGENCY"
          title="Work with a Google Ads Agency Where Success Is Guaranteed"
          highlight="Success Is Guaranteed"
          subtitle="We structure, optimize, and scale profitable Google Ads campaigns that lower your cost-per-acquisition (CPA) and maximize your bottom-line return on ad spend."
          primaryCtaText="Claim Free Google Ads Audit"
          primaryCtaHref="/#contact"
          secondaryCtaText="View Client Results"
          secondaryCtaHref="/#stats"
          trustPoints={[
            "100% Certified Account Specialists",
            "₹50Cr+ Annual Media Spend Managed",
            "Strict ROAS Performance Guarantees",
          ]}
        />

        {/* Stats Grid with Standardized MetricCards */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-slate-50 border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ppcAdvantages.map((stat, idx) => (
              <MetricCard
                key={idx}
                value={<AnimatedCounter value={stat.metric} duration={2} />}
                label={stat.label}
                subtext={stat.subtext}
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
              badge="CAPABILITIES"
              badgeVariant="primary"
              title="Full-Funnel Google Ads Management"
              highlight="Google Ads Management"
              description="From hyper-focused search queries to multi-channel Performance Max campaigns, we turn Google's traffic into predictable revenue."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {ppcCampaigns.map((campaign, idx) => (
                <ServiceCard
                  key={idx}
                  tag={campaign.tag}
                  title={campaign.title}
                  description={campaign.desc}
                  bullets={campaign.bullets}
                  href="/#contact"
                  ctaText="Schedule Campaign Audit"
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
