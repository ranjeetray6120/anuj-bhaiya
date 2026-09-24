import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/adforge/HeroSection";
import { MetricCard } from "@/components/adforge/MetricCard";
import { ServiceCard } from "@/components/adforge/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Award, Users, TrendingDown, DollarSign } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adforgetech.com";

export const metadata: Metadata = {
  title: "Google Ads & PPC Management Agency | AdForge Tech",
  description:
    "Scale profitable revenue with Google Premier Partner account managers. We engineer high-intent Search Ads, Performance Max, and Shopping campaigns that lower CPA.",
  alternates: {
    canonical: "/pay-per-click",
  },
  openGraph: {
    title: "Google Ads & PPC Management Agency | AdForge Tech",
    description:
      "Scale profitable revenue with Google Premier Partner account managers. We engineer high-intent Search Ads, Performance Max, and Shopping campaigns that lower CPA.",
    url: `${siteUrl}/pay-per-click`,
    type: "website",
    siteName: "AdForge Tech",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Google Ads Management by AdForge Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads & PPC Management Agency | AdForge Tech",
    description:
      "Scale profitable revenue with Google Premier Partner account managers. High-intent Search Ads and Performance Max.",
  },
};

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
            name: "Pay Per Click (PPC)",
            item: `${siteUrl}/pay-per-click`,
          },
        ],
      },
      {
        "@type": "Service",
        name: "Google Ads & PPC Management Services",
        description:
          "Full-funnel Google Ads management, Performance Max, Search ads, and high-converting YouTube funnels engineered for scalable ROAS.",
        provider: {
          "@type": "Organization",
          name: "AdForge Tech",
          url: siteUrl,
        },
        areaServed: "Worldwide",
        serviceType: "Pay Per Click Advertising",
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
        {/* Hero Section */}
        <HeroSection
          badge="GOOGLE PREMIER PARTNER AGENCY"
          title="Work with a Google Ads Agency Where Success Is Guaranteed"
          highlight="Success Is Guaranteed"
          subtitle="We structure, optimize, and scale profitable Google Ads campaigns that lower your cost-per-acquisition (CPA) and maximize your bottom-line return on ad spend."
          primaryCtaText="Claim Free Google Ads Audit"
          primaryCtaHref="/contact-us"
          secondaryCtaText="View Client Results"
          secondaryCtaHref="/clients"
          trustPoints={[
            "100% Certified Account Specialists",
            "₹50Cr+ Annual Media Spend Managed",
            "Strict ROAS Performance Guarantees",
          ]}
        />

        {/* Stats Grid with Standardized MetricCards */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
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
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
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
                  href="/contact-us"
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
