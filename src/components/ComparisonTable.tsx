"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

const utAdvantages = [
  "Guaranteed ROAS milestones & SLA commitments",
  "Dedicated Senior Media Buyer & Technical Strategist",
  "Zero long-term lock-in contracts (performance based)",
  "Full Google Ads, Meta Ads & GA4 transparency & ownership",
  "Weekly live revenue reporting & Slack/WhatsApp support",
  "In-house CRO & high-converting landing page engineers",
];

const otherNegatives = [
  "No contractual performance guarantees or accountability",
  "Junior account managers juggling 30+ ad accounts",
  "Rigid 6-to-12 month lock-in contracts with heavy penalties",
  "Opaque reporting dashboards hiding true blended CPA",
  "Monthly automated PDF email reports with zero context",
  "Outsourced design and non-technical CRO advice",
];

export default function ComparisonTable() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="THE ADFORGE TECH ADVANTAGE"
          title="Why Scaling Brands Choose Us Over Traditional Agencies"
          highlight="Traditional Agencies"
          description="We align our incentives with your profitability. Here is how our operational model differs from conventional marketing vendors."
        />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
          {/* AdForge Column */}
          <div className="bg-white dark:bg-slate-900 p-6 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2] dark:text-[#38BDF8]">
                    Our Standard
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                    AdForge Tech
                  </h3>
                </div>
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-2.5 py-1 rounded-md">
                  Guaranteed Milestones
                </span>
              </div>

              <ul className="space-y-3.5">
                {utAdvantages.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* VS Divider */}
          <div className="bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center px-5 py-3 md:py-0 border-y md:border-y-0 md:border-x border-slate-200 dark:border-slate-700">
            <span className="text-slate-400 dark:text-slate-500 font-bold text-xs uppercase tracking-widest select-none">
              VS
            </span>
          </div>

          {/* Other Agencies Column */}
          <div className="bg-slate-50/60 dark:bg-slate-900/50 p-6 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/80 dark:border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Industry Typical
                  </span>
                  <h3 className="text-xl font-bold text-slate-600 dark:text-slate-400 mt-0.5">
                    Traditional Agencies
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                  Standard Vendor
                </span>
              </div>

              <ul className="space-y-3.5">
                {otherNegatives.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
