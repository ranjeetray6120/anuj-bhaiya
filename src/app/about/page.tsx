import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import AnimatedCounter from "@/components/AnimatedCounter";
import { HeroSection } from "@/components/adforge/HeroSection";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { MetricCard } from "@/components/adforge/MetricCard";
import { Target, Users, Zap, Award } from "lucide-react";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adforgetech.com";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AdForge Tech — our veteran performance marketers, certified Google Premier & Meta Business specialists, and data engineers dedicated to profitable ROI.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About | AdForge Tech",
    description:
      "Learn about AdForge Tech — our veteran performance marketers, certified Google Premier & Meta Business specialists, and data engineers dedicated to profitable ROI.",
    url: `${siteUrl}/about`,
    type: "website",
    siteName: "AdForge Tech",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "About AdForge Tech Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | AdForge Tech",
    description:
      "Learn about AdForge Tech — veteran performance marketers and certified media buyers.",
  },
};

const milestones = [
  {
    metric: "₹300Cr+",
    label: "Client Revenue Generated",
    subtext: "Verified GA4 and CRM attribution across active partner accounts",
    trend: "+64% YoY Growth",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    metric: "4.8x",
    label: "Average Blended ROAS",
    subtext: "Across active e-commerce and lead-gen campaigns in 2025-2026",
    trend: "Consistently Maintained",
    icon: <Target className="w-6 h-6" />,
  },
  {
    metric: "100+",
    label: "Scaling Brands Managed",
    subtext: "D2C retailers, enterprise services, and education leaders",
    trend: "92% Retention Rate",
    icon: <Users className="w-6 h-6" />,
  },
  {
    metric: "8+",
    label: "Years Growth Engineering",
    subtext: "Continuous optimization through Google & Meta algorithm shifts",
    trend: "Premier Tier",
    icon: <Award className="w-6 h-6" />,
  },
];

const coreValues = [
  {
    number: "01",
    title: "100% Attribution Transparency",
    desc: "No fabricated metrics. We deploy server-side CAPI and GA4 architectures so every rupee spent is transparently attributed to top-line revenue.",
  },
  {
    number: "02",
    title: "Unit Economics First",
    desc: "Scaling ad spend without profitable unit margins burns capital. We model contribution margins, blended CAC, and LTV before scaling campaigns.",
  },
  {
    number: "03",
    title: "Senior Hands on Your Accounts",
    desc: "Your campaigns are built and managed by battle-tested specialists with 5+ years of live media buying experience, not junior interns.",
  },
  {
    number: "04",
    title: "Continuous Creative Velocity",
    desc: "Creative fatigue kills performance. We systematically test ad hooks, angles, video variations, and landing page headlines every single week.",
  },
];

const aboutFaqs = [
  {
    q: "What makes AdForge Tech different from traditional digital marketing agencies?",
    a: "Unlike traditional agencies that pass client accounts to junior interns and report on vanity impressions, AdForge Tech assigns senior growth engineers and certified media buyers directly to your business. We focus 100% on net revenue growth, verified unit economics, and transparent server-side attribution.",
  },
  {
    q: "Where is AdForge Tech based and do you work with global clients?",
    a: "Our headquarters is located in Gurugram, India, and we actively manage performance marketing, SEO, and web engineering for partner brands across India, North America, the UK, the Middle East (UAE), and Southeast Asia.",
  },
  {
    q: "What industries and business verticals does your team specialize in?",
    a: "We have deep domain expertise across High-Growth E-commerce & D2C brands, Real Estate (HNI luxury acquisitions), Healthcare & Multi-specialty Clinics, Higher Education & EdTech, and B2B SaaS lead funnels.",
  },
  {
    q: "Who will manage my campaigns and communicate with our team day-to-day?",
    a: "You get a dedicated Senior Growth Strategist and certified Media Buyer with 5+ years of live experience. We establish a direct Slack/WhatsApp communication channel and conduct weekly transparent video sprint reviews — no junior middlemen.",
  },
  {
    q: "Do I retain full ownership of all ad accounts, pixels, and creative assets?",
    a: "100% Yes. All Meta Business Managers, Google Ads accounts, GA4 properties, server containers, and creative designs remain your company's permanent intellectual property.",
  },
  {
    q: "How do we get started with AdForge Tech?",
    a: "We begin with a complimentary 1-on-1 Growth Strategy & Account Audit. Our senior team analyzes your current funnel, identifies conversion bottlenecks, and presents a customized 90-day scaling roadmap before onboarding.",
  },
];

export default function AboutPage() {
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
            name: "About Us",
            item: `${siteUrl}/about`,
          },
        ],
      },
      {
        "@type": "AboutPage",
        name: "About AdForge Tech",
        description:
          "Learn about AdForge Tech — veteran performance marketers, certified media buyers, and data engineers dedicated to profitable ROI.",
        url: `${siteUrl}/about`,
      },
      {
        "@type": "FAQPage",
        mainEntity: aboutFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.a,
          },
        })),
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
          badge="THE PERFORMANCE MARKETING COLLECTIVE"
          title="We Don't Just Run Ads — We Build Scalable Growth Engines."
          highlight="Scalable Growth Engines"
          subtitle="AdForge Tech is a performance marketing agency composed of veteran media buyers, data engineers, technical SEOs, and conversion architects aligned around your bottom line."
          primaryCtaText="Book a Strategy Call"
          primaryCtaHref="/contact-us"
          secondaryCtaText="Our Core Principles"
          secondaryCtaHref="#principles"
          trustPoints={[
            "100% In-House Senior Specialists",
            "Google Premier & Meta Business Partners",
            "Strict Milestone-Based Accountability",
          ]}
        />

        {/* Agency Story Section with Real Photography */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Real Team Photography Stack */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-800">
                <Image
                  src="/images/about/team-planning.jpg"
                  alt="AdForge Tech Marketing Team Planning Campaigns"
                  width={700}
                  height={450}
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>

              {/* Floating Secondary Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-36 rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-900">
                <Image
                  src="/images/about/analytics-dashboard.jpg"
                  alt="Performance Marketing Data Analysis"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute top-6 left-6 bg-white dark:bg-slate-900 rounded-xl p-3.5 shadow-md border border-slate-200 dark:border-slate-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-[#046BD2] dark:text-[#38BDF8] flex items-center justify-center font-extrabold text-lg border border-blue-100 dark:border-blue-900/70">
                  8+
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">Years Live</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Scaling High-Growth Brands</p>
                </div>
              </div>
            </div>

            {/* Right: Copy & Philosophy */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2] dark:text-[#38BDF8] block mb-2">
                  OUR PHILOSOPHY
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                  A Team Passionate About Delivering Real Results
                </h2>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                In an industry full of vanity metrics and generic playbook tactics, AdForge Tech was founded on a simple premise: <strong className="text-slate-900 dark:text-white font-bold">revenue growth and profitability are the only metrics that matter.</strong>
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Whether scaling Google Performance Max campaigns, optimizing Meta Advantage+ funnels, or dominating competitive organic keywords through technical SEO, we act as an extension of your in-house leadership team.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card surface="muted" className="p-4 border-slate-200 dark:border-slate-800">
                  <p className="text-2xl font-extrabold text-[#046BD2] dark:text-[#38BDF8]">
                    <AnimatedCounter value="100%" />
                  </p>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide mt-1">
                    In-House Specialists Only
                  </p>
                </Card>
                <Card surface="muted" className="p-4 border-slate-200 dark:border-slate-800">
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    Official
                  </p>
                  <p className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide mt-1">
                    Google &amp; Meta Partners
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Metrics Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-slate-900/60 border-y border-slate-200 dark:border-slate-800 transition-colors">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((item, idx) => (
                <MetricCard
                  key={idx}
                  value={<AnimatedCounter value={item.metric} duration={2} />}
                  label={item.label}
                  subtext={item.subtext}
                  icon={item.icon}
                  trend={item.trend}
                  surface="white"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section id="principles" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 transition-colors overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="GUIDING VALUES"
              badgeVariant="primary"
              title="The Principles That Drive Our Work"
              highlight="Principles"
              description="How our team operates every day to ensure world-class performance and accountability."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val) => (
                <Card
                  key={val.number}
                  interactive
                  surface="muted"
                  className="p-6 sm:p-7 flex flex-col gap-4 justify-between"
                >
                  <div className="flex flex-col gap-3">
                    <span className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-[#046BD2] dark:text-[#38BDF8] font-black text-sm flex items-center justify-center border border-blue-100 dark:border-blue-900/70">
                      {val.number}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="FREQUENTLY ASKED QUESTIONS"
              badgeVariant="secondary"
              title="Everything You Need to Know About Us"
              highlight="About Us"
              description="Clear, transparent answers about our team, working methodology, deliverables, and partnership structure."
            />

            <div className="space-y-4">
              {aboutFaqs.map((faq, idx) => (
                <Card
                  key={idx}
                  interactive
                  surface="white"
                  className="p-6 sm:p-7 flex flex-col gap-2 text-left shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {faq.a}
                  </p>
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
