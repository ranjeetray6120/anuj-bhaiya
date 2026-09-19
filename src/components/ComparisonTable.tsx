"use client";

import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, X } from "lucide-react";

const utAdvantages = [
  "Total In-House Team & Dedicated Account Strategists",
  "Extensive Pre-Campaign Research & Unit Economics Analysis",
  "Official Google Premier & Meta Business Partner Credentials",
  "Tailored Strategy for Individual Brand Requirements — Zero Templates",
  "Senior Media Buyers Managing Multi-Lakh Monthly Media Spend",
  "Strict Performance Milestones Tied to Tracked ROAS and CPA",
  "100% Data & Ad Account Ownership Remains Yours Forever",
  "Proactive Weekly Strategic Calls & Real-Time Performance Dashboards",
];

const otherNegatives = [
  "Outsourcing Client Work to Inexperienced Freelancers",
  "Generic 'One Size Fits All' Package Approach",
  "High-Churn Model Focused on Quick Retainers",
  "Automated Surface Audits with Zero Strategic Context",
  "Junior Intern-Level Account Management",
  "Slow, Disorganized Communication and Reactive Reporting",
  "Zero Accountability for Target Metrics or Lost Budget",
  "Hidden Markups and Holding Account Access Hostage",
];

export default function ComparisonTable() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="THE ADFORGE TECH ADVANTAGE"
          title="Why Scaling Brands Choose Us Over Traditional Agencies"
          highlight="Traditional Agencies"
          description="We align our incentives with your profitability. Here is how our operational model differs from conventional marketing vendors."
        />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 rounded-xl overflow-hidden border border-slate-200 bg-white">
          {/* AdForge Column */}
          <div className="bg-white p-6 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
                    Our Standard
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                    AdForge Tech
                  </h3>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  Guaranteed Milestones
                </span>
              </div>

              <ul className="space-y-3.5">
                {utAdvantages.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* VS Divider */}
          <div className="bg-slate-100 flex items-center justify-center px-5 py-3 md:py-0 border-y md:border-y-0 md:border-x border-slate-200">
            <span className="text-slate-400 font-bold text-xs uppercase tracking-widest select-none">
              VS
            </span>
          </div>

          {/* Other Agencies Column */}
          <div className="bg-slate-50/60 p-6 sm:p-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200/80">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Industry Typical
                  </span>
                  <h3 className="text-xl font-bold text-slate-600 mt-0.5">
                    Traditional Agencies
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-200/60 px-2.5 py-1 rounded-md">
                  Standard Vendor
                </span>
              </div>

              <ul className="space-y-3.5">
                {otherNegatives.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-600 leading-snug">
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
