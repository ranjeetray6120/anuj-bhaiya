import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import { HeroSection } from "@/components/adforge/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/adforge/ServiceCard";
import { Card } from "@/components/ui/Card";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adforgetech.com";

export const metadata: Metadata = {
  title: "SEO Services | Technical, Topical Authority & Enterprise SEO | AdForge Tech",
  description:
    "Data-driven SEO strategies engineered to rank #1, outrank tough competitors, and generate high-intent organic leads and revenue with measurable ROI.",
  alternates: {
    canonical: "/seo",
  },
  openGraph: {
    title: "SEO Services | Technical, Topical Authority & Enterprise SEO | AdForge Tech",
    description:
      "Data-driven SEO strategies engineered to rank #1, outrank tough competitors, and generate high-intent organic leads and revenue.",
    url: `${siteUrl}/seo`,
    type: "website",
    siteName: "AdForge Tech",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "SEO Services by AdForge Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Services | AdForge Tech",
    description:
      "Technical SEO, topical authority architecture, and revenue-focused organic growth.",
  },
};

const seoServices = [
  {
    tag: "TECHNICAL EXCELLENCE",
    title: "Technical SEO & Core Web Vitals",
    desc: "Fix site architecture, crawl bloat, JavaScript rendering issues, schema markup, and speed metrics to ensure search spiders index every high-value page.",
    bullets: [
      "Server-side rendering & JS hydration audits",
      "Dynamic XML sitemaps & robots directives",
      "LCP, INP, and CLS performance tuning",
    ],
  },
  {
    tag: "CONTENT ARCHITECTURE",
    title: "Topical Authority & Content Clusters",
    desc: "Build comprehensive semantic content clusters that establish undeniable search engine trust across competitive high-intent keyword groups.",
    bullets: [
      "Competitor content gap analysis",
      "Intent-mapped keyword clusters",
      "Structured internal link graphs",
    ],
  },
  {
    tag: "OFF-PAGE DOMINANCE",
    title: "High-Authority Digital PR & Backlinks",
    desc: "Acquire Tier-1 editorial backlinks through original research, industry data studies, and journalist media outreach to skyrocket domain authority.",
    bullets: [
      "100% white-hat editorial outreach",
      "Data-led digital PR campaigns",
      "Toxic link profile cleanup & disavow",
    ],
  },
  {
    tag: "LOCAL & REGIONAL",
    title: "Local SEO & Multi-Location Strategy",
    desc: "Dominate Google Maps local packs and high-converting 'near me' queries with synchronized Google Business Profiles and localized content silos.",
    bullets: [
      "Google Business Profile optimization",
      "NAP consistency & local citation scaling",
      "Geo-targeted landing page networks",
    ],
  },
  {
    tag: "TRANSACTIONAL REVENUE",
    title: "E-Commerce Category & Product SEO",
    desc: "Scale organic revenue for Shopify, WooCommerce, and Magento stores by capturing buyers actively searching for products in high transactional volume.",
    bullets: [
      "Faceted navigation & duplicate canonicals",
      "Product schema JSON-LD with review stars",
      "High-converting collection hierarchy design",
    ],
  },
  {
    tag: "GROWTH REPORTING",
    title: "Real-Time Ranking & Revenue Analytics",
    desc: "Full attribution tracking connecting keyword movements directly to sales, conversion values, and pipeline revenue in Google Analytics 4.",
    bullets: [
      "Custom Looker Studio attribution dashboards",
      "Daily rank tracking with SERP feature alerts",
      "Direct commercial value modeling",
    ],
  },
];

const seoProcess = [
  {
    step: "01",
    title: "Discovery & Technical Audit",
    desc: "Deep crawl diagnostics of logs, indexing status, Core Web Vitals, and competitor topical gaps.",
  },
  {
    step: "02",
    title: "Architecture & Strategy",
    desc: "Building the master content roadmap, site hierarchy corrections, and schema specifications.",
  },
  {
    step: "03",
    title: "Execution & Optimization",
    desc: "Rolling out optimized metadata, cluster content, internal linking, and digital PR campaigns.",
  },
  {
    step: "04",
    title: "Analysis & Scale",
    desc: "Continuous monitoring of keyword velocity, SERP shifts, and revenue attribution to double down on winners.",
  },
];

export default function SEOPage() {
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
            name: "SEO Services",
            item: `${siteUrl}/seo`,
          },
        ],
      },
      {
        "@type": "Service",
        name: "Search Engine Optimization (SEO) Services",
        description:
          "Technical SEO audits, Core Web Vitals optimization, topical authority architecture, and enterprise organic revenue growth.",
        provider: {
          "@type": "Organization",
          name: "AdForge Tech",
          url: siteUrl,
        },
        areaServed: "Worldwide",
        serviceType: "Search Engine Optimization",
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
          badge="DATA-DRIVEN ORGANIC GROWTH"
          title="Scale Your Organic Traffic & Revenue with Predictable ROI"
          highlight="Predictable ROI"
          subtitle="We engineer revenue-focused SEO campaigns that outrank competitors, build defensible domain authority, and turn organic search into your highest margin acquisition channel."
          primaryCtaText="Claim Free SEO Audit"
          primaryCtaHref="/contact-us"
          secondaryCtaText="See Proven Case Studies"
          secondaryCtaHref="/clients"
          trustPoints={[
            "Full Technical & Core Web Vitals Audit",
            "100% White-Hat Editorial Authority",
            "Keyword Rankings Tied to Tracked Revenue",
          ]}
        />

        {/* Services Grid */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
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
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
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
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-[#046BD2] dark:text-[#38BDF8] font-black text-sm flex items-center justify-center border border-blue-100/80 dark:border-blue-900/80">
                      {p.step}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
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
