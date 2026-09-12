"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import AnimatedCounter from "@/components/AnimatedCounter";

const milestones = [
  { metric: "₹300Cr+", label: "Client Revenue Generated" },
  { metric: "500k+", label: "High-Intent Leads Captured" },
  { metric: "100+", label: "Active Enterprise & D2C Brands" },
  { metric: "4.6x", label: "Average Campaign ROAS" },
];

const coreValues = [
  {
    number: "01",
    title: "Data-Backed Precision",
    desc: "We don't guess or rely on intuition. Every budget allocation, bid adjustment, and creative iteration is driven by GA4, CAPI, and real conversion data.",
  },
  {
    number: "02",
    title: "Radical Transparency",
    desc: "Zero hidden markups. You own 100% of your ad accounts, pixel data, and creative assets. Real-time dashboards keep you in full control 24/7.",
  },
  {
    number: "03",
    title: "Creative Meets Conversion",
    desc: "Aesthetic visuals without conversion psychology don't make sales. We engineer high-CTR video hooks, direct-response UGC, and conversion copy.",
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
        <section
          className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #168ed3 0%, #1a97db 50%, #1f9fe3 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative z-10"
          >

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              We Don&#39;t Just Run Ads —{" "}
              <span className="text-[#FFDE59]">We Build Growth Engines.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              AdForge is a performance marketing collective composed of veteran media buyers, data analysts, technical SEOs, and conversion architects.
            </p>
            <div className="pt-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#contact"
                  className="inline-block bg-[#D82C5E] hover:bg-[#bf204d] !text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
                >
                  BOOK A STRATEGY CALL →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Agency Story Section with Real Photography */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Real Team Photography Stack */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <Image
                  src="/images/about/team-planning.jpg"
                  alt="AdForge Marketing Team Planning Campaigns"
                  width={700}
                  height={450}
                  className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Secondary Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-36 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/about/analytics-dashboard.jpg"
                  alt="Performance Marketing Data Analysis"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#046BD2] flex items-center justify-center font-black text-xl">
                  8+
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900 leading-tight">Years Live</p>
                  <p className="text-[10px] text-slate-500 font-semibold">Scaling High-Growth Brands</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Copy & Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 flex flex-col gap-6 text-left"
            >

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                A Team Passionate About Delivering Real Results
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                In an industry full of vanity metrics and generic playbook tactics, AdForge was founded on a simple premise: <strong>revenue growth is the only metric that matters.</strong>
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether scaling Google Performance Max campaigns, optimizing Meta Advantage+ funnels, or dominating competitive organic keywords through technical SEO, we act as an extension of your in-house growth team.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.02 }} className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex-1 min-w-[200px] shadow-xs">
                  <p className="text-2xl font-black text-[#046BD2]">
                    <AnimatedCounter value="100%" />
                  </p>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">In-House Specialists</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex-1 min-w-[200px] shadow-xs">
                  <p className="text-2xl font-black text-slate-900">Official</p>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">Google &amp; Meta Partners</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Milestones Metrics Grid */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {milestones.map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="bg-white border border-slate-200/80 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl flex flex-col justify-center gap-1.5 hover:border-[#046BD2]/50 transition-all duration-300 group"
                >
                  <p className="text-3xl sm:text-4xl font-black text-[#046BD2] tracking-tight group-hover:scale-105 transition-transform">
                    <AnimatedCounter value={item.metric} duration={2.2} />
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-slate-700">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                The Principles That Drive Our Work
              </h2>
              <div className="mt-3 mx-auto w-14 h-1 bg-[#046BD2] rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => (
                <motion.div
                  key={val.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-3 group"
                >
                  <span className="w-10 h-10 rounded-2xl bg-blue-50 text-[#046BD2] font-black text-sm flex items-center justify-center border border-blue-100 group-hover:bg-[#046BD2] group-hover:text-white transition-colors">
                    {val.number}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#046BD2] transition-colors">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
                </motion.div>
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
