"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import AnimatedCounter from "@/components/AnimatedCounter";
import { HeroSection } from "@/components/adforge/HeroSection";
import { MetricCard } from "@/components/adforge/MetricCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TrendingUp, Users, Target, Zap } from "lucide-react";

const milestones = [
  {
    metric: "₹300Cr+",
    label: "Client Revenue Generated",
    subtext: "Tracked across e-commerce & B2B",
    icon: <TrendingUp className="w-5 h-5" />,
    trend: "Verified",
  },
  {
    metric: "500K+",
    label: "High-Intent Inquiries Captured",
    subtext: "Education, real estate & SaaS",
    icon: <Users className="w-5 h-5" />,
  },
  {
    metric: "100+",
    label: "Active Enterprise & D2C Brands",
    subtext: "Retained long-term partnerships",
    icon: <Target className="w-5 h-5" />,
  },
  {
    metric: "4.6x",
    label: "Average Portfolio Blended ROAS",
    subtext: "Across Google & Meta spend",
    icon: <Zap className="w-5 h-5" />,
    trend: "+120% YoY",
  },
];

const coreValues = [
  {
    number: "01",
    title: "Data-Backed Precision",
    desc: "We don't guess or rely on intuition. Every budget allocation, bid adjustment, and creative iteration is driven by GA4, CAPI, and verifiable unit economics.",
  },
  {
    number: "02",
    title: "Radical Transparency",
    desc: "Zero hidden markups. You own 100% of your ad accounts, pixel data, and creative assets. Real-time dashboards keep you in full control 24/7.",
  },
  {
    number: "03",
    title: "Creative Meets Conversion",
    desc: "Aesthetic visuals without conversion psychology don't drive revenue. We engineer high-CTR video hooks, direct-response UGC, and conversion copy.",
  },
  {
    number: "04",
    title: "Speed to Execution",
    desc: "In digital marketing, speed wins. We launch campaigns in 3–5 business days and test fresh creative variations weekly to combat ad fatigue.",
  },
];

export default function WhoWeArePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <HeroSection
          badge="THE PERFORMANCE MARKETING COLLECTIVE"
          title="We Don't Just Run Ads — We Build Scalable Growth Engines."
          highlight="Scalable Growth Engines"
          subtitle="AdForge is a performance marketing agency composed of veteran media buyers, data engineers, technical SEOs, and conversion architects aligned around your bottom line."
          primaryCtaText="Book a Strategy Call"
          primaryCtaHref="/#contact"
          secondaryCtaText="Our Core Principles"
          secondaryCtaHref="#principles"
          trustPoints={[
            "100% In-House Senior Specialists",
            "Google Premier & Meta Business Partners",
            "Strict Milestone-Based Accountability",
          ]}
        />

        {/* Agency Story Section with Real Photography */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Real Team Photography Stack */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200">
                <Image
                  src="/images/about/team-planning.jpg"
                  alt="AdForge Marketing Team Planning Campaigns"
                  width={700}
                  height={450}
                  className="w-full h-80 sm:h-96 object-cover"
                />
              </div>

              {/* Floating Secondary Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-36 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/images/about/analytics-dashboard.jpg"
                  alt="Performance Marketing Data Analysis"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute top-6 left-6 bg-white rounded-xl p-3.5 shadow-md border border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#046BD2] flex items-center justify-center font-extrabold text-lg border border-blue-100">
                  8+
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Years Live</p>
                  <p className="text-[10px] text-slate-500 font-medium">Scaling High-Growth Brands</p>
                </div>
              </div>
            </div>

            {/* Right: Copy & Philosophy */}
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2] block mb-2">
                  OUR PHILOSOPHY
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                  A Team Passionate About Delivering Real Results
                </h2>
              </div>

              <p className="text-slate-600 text-base leading-relaxed">
                In an industry full of vanity metrics and generic playbook tactics, AdForge was founded on a simple premise: <strong className="text-slate-900 font-bold">revenue growth and profitability are the only metrics that matter.</strong>
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether scaling Google Performance Max campaigns, optimizing Meta Advantage+ funnels, or dominating competitive organic keywords through technical SEO, we act as an extension of your in-house leadership team.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card surface="muted" className="p-4 border-slate-200">
                  <p className="text-2xl font-extrabold text-[#046BD2]">
                    <AnimatedCounter value="100%" />
                  </p>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">
                    In-House Specialists Only
                  </p>
                </Card>
                <Card surface="muted" className="p-4 border-slate-200">
                  <p className="text-2xl font-extrabold text-slate-900">
                    Official
                  </p>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">
                    Google &amp; Meta Partners
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones Metrics Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 border-y border-slate-200">
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
        <section id="principles" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
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
                    <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#046BD2] font-black text-sm flex items-center justify-center border border-blue-100">
                      {val.number}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {val.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {val.desc}
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
