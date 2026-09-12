"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import AnimatedCounter from "@/components/AnimatedCounter";

const resultsChecklist = [
  "234 to 7,64,000 Clicks using SEO (in 6 Months)",
  "45000+ Leads for an Education Institute using Google Ads",
  "Ecommerce SEO & High-Intent Funnels",
  "0 to 30Lakh/Month in Revenue for a D2C Brand",
];

export default function AgencyResults() {
  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start lg:items-center">
        {/* Left Column: Heading, Checklist, Button */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col gap-5 text-left"
        >
          <div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 leading-[1.2] tracking-tight">
              We are Performance <br />
              Driven <span className="text-[#168ed3]">Agency</span>
            </h2>
            <p className="mt-2.5 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
              We believe in Data driven Decisions not Guess-work. <br className="hidden sm:block" />
              Look at the results we can achieve –
            </p>
          </div>

          {/* Checklist with staggered items */}
          <div className="space-y-3 pt-1">
            {resultsChecklist.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 * idx }}
                className="flex items-start gap-2.5"
              >
                <div className="w-4 h-4 rounded-full bg-[#168ed3] flex items-center justify-center flex-shrink-0 text-white shadow-xs mt-0.5">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Pink CTA Button */}
          <div className="pt-2">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
              <Link
                href="/#contact"
                className="inline-block bg-[#D82C5E] hover:bg-[#bf204d] !text-white font-extrabold text-xs uppercase tracking-wider px-7 py-3 rounded-md shadow-md transition-all duration-200 hover:shadow-lg cursor-pointer"
              >
                GET A FREE QUOTE NOW
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Multi-Layered Analytics Proof Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col gap-4 select-none"
        >
          {/* Top Callout: Badge + Text */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3 self-start pl-1 transition-transform"
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#168ed3] text-white flex flex-col items-center justify-center text-center shadow-lg ring-3 ring-blue-100 flex-shrink-0 animate-pulse">
              <span className="text-xs sm:text-sm font-black leading-none">
                <AnimatedCounter value="764K" duration={2} />
              </span>
              <span className="text-[7px] sm:text-[8px] font-bold leading-tight mt-0.5">Clicks / 6 Mo</span>
            </div>
            <p className="text-xs sm:text-[13px] font-bold text-slate-700 leading-snug">
              For an Education Brand : <br />
              <span className="font-extrabold text-slate-900">
                From 234 Clicks/Month to 7,64,000 Clicks in 6 Months
              </span>
            </p>
          </motion.div>

          {/* Main GSC Analytics Card */}
          <motion.div
            whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl p-4 sm:p-5 relative transition-all duration-300"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 flex-wrap gap-2">
              <span className="text-xs sm:text-sm font-bold text-slate-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Performance on Search results
              </span>
              <span className="text-[10px] font-semibold bg-slate-100 px-2 py-0.5 rounded-sm text-slate-600">
                Last 6 months
              </span>
            </div>

            {/* GSC 4 Metric Tabs with Animated Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-3 text-center">
              <motion.div whileHover={{ scale: 1.04 }} className="bg-[#168ed3] text-white rounded-xl p-2.5 shadow-sm transition-transform">
                <p className="text-[9px] uppercase font-bold opacity-80">Total clicks</p>
                <p className="text-base sm:text-lg font-black leading-tight mt-0.5">
                  <AnimatedCounter value="764K" duration={2.2} />
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-indigo-600 text-white rounded-xl p-2.5 shadow-sm transition-transform">
                <p className="text-[9px] uppercase font-bold opacity-80">Total impressions</p>
                <p className="text-base sm:text-lg font-black leading-tight mt-0.5">
                  <AnimatedCounter value="45M" duration={2.2} />
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-slate-50 border border-slate-200 text-slate-700 rounded-xl p-2.5 transition-transform">
                <p className="text-[9px] uppercase font-bold text-slate-400">Average CTR</p>
                <p className="text-base sm:text-lg font-black text-slate-800 leading-tight mt-0.5">
                  <AnimatedCounter value="1.7%" duration={2.0} />
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.04 }} className="bg-slate-50 border border-slate-200 text-slate-700 rounded-xl p-2.5 transition-transform">
                <p className="text-[9px] uppercase font-bold text-slate-400">Average position</p>
                <p className="text-base sm:text-lg font-black text-slate-800 leading-tight mt-0.5">
                  <AnimatedCounter value="11.2" duration={2.0} />
                </p>
              </motion.div>
            </div>

            {/* Organic Growth SVG Wave Chart */}
            <div className="mt-3 pt-2">
              <svg viewBox="0 0 400 65" className="w-full h-16 text-[#168ed3]" fill="none" aria-hidden="true">
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  d="M0 60 Q 40 55, 80 45 T 160 35 T 240 22 T 320 12 T 400 5"
                  stroke="#168ed3"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 60 Q 40 55, 80 45 T 160 35 T 240 22 T 320 12 T 400 5 L 400 65 L 0 65 Z"
                  fill="url(#gscGradientClean)"
                  opacity="0.15"
                />
                <defs>
                  <linearGradient id="gscGradientClean" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#168ed3" />
                    <stop offset="100%" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Campaign Table Card */}
          <motion.div
            whileHover={{ y: -4, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
            className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl p-4 sm:p-5 relative z-10 transition-all duration-300"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 text-[11px] font-bold text-slate-600">
              <span>Campaigns Performance</span>
              <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-sm">● Live Active</span>
            </div>

            {/* Table Mockup Rows with Hover Animation & Counters */}
            <div className="overflow-x-auto -mx-1 px-1">
              <div className="space-y-1.5 text-[10px] sm:text-[11px] min-w-[320px]">
                <motion.div whileHover={{ scale: 1.01, backgroundColor: "#f1f5f9" }} className="grid grid-cols-12 gap-1 py-1.5 px-2 bg-slate-50 rounded-md font-semibold text-slate-700 items-center transition-colors">
                  <span className="col-span-5 truncate font-bold text-slate-900">Search - Admission Scale</span>
                  <span className="col-span-2 text-emerald-600 font-bold">Eligible</span>
                  <span className="col-span-2 text-right">
                    <AnimatedCounter value="88,145" />
                  </span>
                  <span className="col-span-3 text-right font-black text-[#168ed3]">
                    <AnimatedCounter value="₹42,311" />
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.01, backgroundColor: "#f8fafc" }} className="grid grid-cols-12 gap-1 py-1.5 px-2 bg-white rounded-md font-semibold text-slate-700 items-center border border-slate-100 transition-colors">
                  <span className="col-span-5 truncate font-bold text-slate-900">PMax - Pan India Funnel</span>
                  <span className="col-span-2 text-emerald-600 font-bold">Eligible</span>
                  <span className="col-span-2 text-right">
                    <AnimatedCounter value="189,678" />
                  </span>
                  <span className="col-span-3 text-right font-black text-[#168ed3]">
                    <AnimatedCounter value="₹99,734" />
                  </span>
                </motion.div>
                <motion.div whileHover={{ scale: 1.01, backgroundColor: "#f1f5f9" }} className="grid grid-cols-12 gap-1 py-1.5 px-2 bg-slate-50 rounded-md font-semibold text-slate-700 items-center transition-colors">
                  <span className="col-span-5 truncate font-bold text-slate-900">Call Only - Direct Leads</span>
                  <span className="col-span-2 text-emerald-600 font-bold">Eligible</span>
                  <span className="col-span-2 text-right">
                    <AnimatedCounter value="28,439" />
                  </span>
                  <span className="col-span-3 text-right font-black text-[#168ed3]">
                    <AnimatedCounter value="₹14,608" />
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Callout Info Row Below Table */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 flex-wrap">
              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#0d9488] text-white flex flex-col items-center justify-center text-center flex-shrink-0 shadow-xs">
                  <span className="text-[10px] font-black leading-none">
                    <AnimatedCounter value="16K+" />
                  </span>
                  <span className="text-[6px] font-bold">Leads</span>
                </div>
                <p className="text-[10px] font-bold text-slate-700 leading-tight">
                  Generated 16,000 Call Leads &amp; <br />
                  <span className="text-slate-900 font-black">
                    <AnimatedCounter value="₹11Cr" /> Revenue
                  </span>
                </p>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-[#168ed3] text-white flex flex-col items-center justify-center text-center flex-shrink-0 shadow-xs">
                  <span className="text-[10px] font-black leading-none">
                    <AnimatedCounter value="45K+" />
                  </span>
                  <span className="text-[6px] font-bold">Leads</span>
                </div>
                <p className="text-[10px] font-bold text-slate-700 leading-tight">
                  CPL <AnimatedCounter value="₹210/-" /> <br />
                  <span className="text-slate-900 font-black">Scalable Flow</span>
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
