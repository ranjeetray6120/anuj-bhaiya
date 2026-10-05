import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import MarqueeTicker from "@/components/MarqueeTicker";

// Dynamic imports for below-fold components — reduces TBT dramatically
const PerformanceStats = dynamic(() => import("@/components/PerformanceStats"));
const AgencyResults = dynamic(() => import("@/components/AgencyResults"));
const ClientsSection = dynamic(() => import("@/components/ClientsSection"));
const ComparisonTable = dynamic(() => import("@/components/ComparisonTable"));
const Partners = dynamic(() => import("@/components/Partners"));
const ToolsSection = dynamic(() => import("@/components/ToolsSection"));
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "AdForge Tech",
  description:
    "AdForge Tech engineers high-converting campaigns, Google Ads, Meta Ads, and SEO strategies that deliver measurable ROI for your business.",
  alternates: {
    canonical: "/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services do you offer at AdForge Tech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer complete digital marketing services like SEO, Google Ads, Facebook and Instagram Ads, LinkedIn Ads, Social Media Management, and Website Designing. Everything is planned and engineered according to your specific business goals.",
      },
    },
    {
      "@type": "Question",
      name: "How can digital marketing help my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital marketing connects your business directly with high-intent buyers at the exact moment they are looking for your services or products. By combining targeted paid ads with sustainable organic search (SEO), we build scalable customer acquisition funnels.",
      },
    },
    {
      "@type": "Question",
      name: "How do you determine the right marketing strategy for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We begin with a comprehensive Growth Audit where our senior team analyzes your unit economics, current conversion funnel, competitor landscape, and historical ad performance.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Paid acquisition channels like Google Ads and Meta Ads typically start generating qualified traffic and conversions within the first 7 to 14 days. Organic SEO and authority building usually demonstrate significant traction within 60 to 90 days.",
      },
    },
    {
      "@type": "Question",
      name: "What makes your agency different from others?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike traditional agencies that pass client accounts to junior interns and report on vanity impressions, AdForge Tech assigns senior growth engineers and certified media buyers directly to your business.",
      },
    },
    {
      "@type": "Question",
      name: "What budget do I need for digital marketing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Budgets are customized based on your business stage, industry competition, and target revenue milestones. We establish strict target ROAS and contribution margin thresholds before increasing budgets.",
      },
    },
    {
      "@type": "Question",
      name: "How do I track the success of my campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide full attribution transparency with server-side Meta Conversions API (CAPI), Google Analytics 4 (GA4), and live 24/7 custom Looker Studio dashboards.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main id="main-content" className="flex-1">
        <HeroBanner />
        <MarqueeTicker />
        <PerformanceStats />
        <AgencyResults />
        <ClientsSection />
        <ComparisonTable />
        <Partners />
        <ToolsSection />
        <FAQSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
