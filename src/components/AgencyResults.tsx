"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import AnimatedCounter from "@/components/AnimatedCounter";

const resultsChecklist = [
  "Verified Meta Advantage+ & Google PMax architectures",
  "Server-Side Google Analytics 4 & CAPI attribution",
  "Targeted ROAS optimization with negative keyword cascades",
  "High-converting landing page engineering & CRO testing",
];

export default function AgencyResults() {
  return (
    <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start lg:items-center">
        {/* Left Column: Heading, Checklist, Button */}
        <div className="lg:col-span-5 flex flex-col gap-6 text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#046BD2] dark:text-[#38BDF8]">
              VERIFIED TRACK RECORD
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold text-slate-900 dark:text-white leading-[1.18] tracking-tight mt-2">
              We are a Performance <br />
              Driven <span className="text-[#046BD2] dark:text-[#38BDF8]">Growth Agency</span>
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              We believe in data-driven engineering, not guesswork. Real results from client accounts audited and scaled by our specialists:
            </p>
          </div>

          {/* Checklist */}
          <div className="space-y-3 pt-1">
            {resultsChecklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#046BD2] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 tracking-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Primary CTA Button */}
          <div className="pt-2">
            <Button
              href="/#contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Get Free Growth Audit
            </Button>
          </div>
        </div>

        {/* Right Column: Real Analytics Data Displays */}
        <div className="lg:col-span-7 flex flex-col gap-4 text-left">
          {/* Main GSC Analytics Card */}
          <div className="w-full bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 transition-colors">
            <div className="flex items-center justify-between pb-3.5 border-b border-slate-200 dark:border-slate-800 flex-wrap gap-2">
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                Google Search Console Verified Growth
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-0.5 rounded-md">
                Last 6 Months
              </span>
            </div>

            {/* GSC 4 Metric Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3.5 text-center">
              <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg p-3 transition-colors">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">Total Clicks</p>
                <p className="text-lg sm:text-xl font-extrabold text-[#046BD2] dark:text-[#38BDF8] leading-tight mt-1">
                  <AnimatedCounter value="764K" duration={2} />
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg p-3 transition-colors">
                <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 dark:text-slate-400">Impressions</p>
                <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-tight mt-1">
                  <AnimatedCounter value="45M" duration={2} />
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg p-3 transition-colors">
                <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">Avg CTR</p>
                <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-tight mt-1">
                  <AnimatedCounter value="1.7%" duration={2} />
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-lg p-3 transition-colors">
                <p className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">Avg Position</p>
                <p className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white leading-tight mt-1">
                  <AnimatedCounter value="11.2" duration={2} />
                </p>
              </div>
            </div>

            {/* Organic Growth SVG Line Chart */}
            <div className="mt-4 pt-2">
              <svg viewBox="0 0 400 65" className="w-full h-16 text-[#046BD2] dark:text-[#168ED3]" fill="none" aria-hidden="true">
                <path
                  d="M0 60 Q 40 55, 80 45 T 160 35 T 240 22 T 320 12 T 400 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Campaign Performance Table */}
          <div className="w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 sm:p-6 transition-colors">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300">
              <span>Verified Campaign Breakdown</span>
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                Active Client Data
              </span>
            </div>

            {/* Table Rows */}
            <div className="overflow-x-auto -mx-1 px-1">
              <div className="space-y-1.5 text-xs min-w-[320px]">
                <div className="grid grid-cols-12 gap-2 py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg font-medium text-slate-700 dark:text-slate-300 items-center">
                  <span className="col-span-5 truncate font-bold text-slate-900 dark:text-white">Search - Admission Scale</span>
                  <span className="col-span-2 text-emerald-700 dark:text-emerald-400 font-semibold">Active</span>
                  <span className="col-span-2 text-right text-slate-600 dark:text-slate-400">
                    <AnimatedCounter value="88,145" />
                  </span>
                  <span className="col-span-3 text-right font-extrabold text-[#046BD2] dark:text-[#38BDF8]">
                    <AnimatedCounter value="₹42,311" />
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-2 py-2 px-3 bg-white dark:bg-slate-800/40 rounded-lg font-medium text-slate-700 dark:text-slate-300 items-center border border-slate-100 dark:border-slate-700/80">
                  <span className="col-span-5 truncate font-bold text-slate-900 dark:text-white">PMax - Pan India Funnel</span>
                  <span className="col-span-2 text-emerald-700 dark:text-emerald-400 font-semibold">Active</span>
                  <span className="col-span-2 text-right text-slate-600 dark:text-slate-400">
                    <AnimatedCounter value="189,678" />
                  </span>
                  <span className="col-span-3 text-right font-extrabold text-[#046BD2] dark:text-[#38BDF8]">
                    <AnimatedCounter value="₹99,734" />
                  </span>
                </div>
                <div className="grid grid-cols-12 gap-2 py-2 px-3 bg-slate-50 dark:bg-slate-800/60 rounded-lg font-medium text-slate-700 dark:text-slate-300 items-center">
                  <span className="col-span-5 truncate font-bold text-slate-900 dark:text-white">Call Only - Direct Inbound</span>
                  <span className="col-span-2 text-emerald-700 dark:text-emerald-400 font-semibold">Active</span>
                  <span className="col-span-2 text-right text-slate-600 dark:text-slate-400">
                    <AnimatedCounter value="28,439" />
                  </span>
                  <span className="col-span-3 text-right font-extrabold text-[#046BD2] dark:text-[#38BDF8]">
                    <AnimatedCounter value="₹14,608" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
