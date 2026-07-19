"use client";

import { useState } from "react";
import { Check, Info } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly">("monthly");

  const plans = [
    {
      name: "Scale Starter",
      desc: "Ideal for growth-stage businesses looking to launch a single high-impact acquisition channel.",
      price: {
        monthly: 1999,
        quarterly: 1699,
      },
      features: [
        "Single Ad Channel Management (Meta or Google)",
        "Standard Keyword & Audience Targeting Matrix",
        "Weekly Optimization & Bid Adjustments",
        "Standard Analytics Dashboard Setup",
        "Bi-weekly Performance Reports (PDF)",
        "Email Support (24-hour turnaround)",
      ],
      cta: "Enquire Scale Starter",
      popular: false,
    },
    {
      name: "Growth Acceleration",
      desc: "Our flagship scaling system. Deploys omnichannel customer acquisition and custom landing pages.",
      price: {
        monthly: 3999,
        quarterly: 3399,
      },
      features: [
        "Dual Ad Channel Management (Meta + Google)",
        "2 Bespoke Conversion-Optimized Landing Pages",
        "Weekly Copywriting & Ad Creative Refreshes",
        "Conversion API (CAPI) & Pixel Setup",
        "Live 24/7 Looker Studio Dashboard",
        "Bi-weekly Strategy Review & Optimization Calls",
        "Dedicated Slack Channel Support",
      ],
      cta: "Secure Growth Strategy",
      popular: true,
    },
    {
      name: "Enterprise Domination",
      desc: "Designed for corporate operations scaling ad spend above $30,000/mo seeking full omnichannel domination.",
      price: {
        monthly: 7499,
        quarterly: 6379,
      },
      features: [
        "Omnichannel Management (Meta + Google + LinkedIn/TikTok)",
        "Unlimited Custom Landing Page Creation & Auditing",
        "Weekly Custom Video & Asset Production Sprints",
        "Offline Conversions CRM Syncing",
        "Advanced CRO & Heatmap A/B Split Testing",
        "Weekly Core Strategy Audits & Priority Alignment",
        "Dedicated Growth Team (Slack & Direct Calls)",
      ],
      cta: "Request Enterprise Consultation",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff6a00] font-mono">
            Investment Structure
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
            Transparent Pricing Models
          </h3>
          <p className="text-slate-550 text-sm font-light">
            No hidden setup fees. No percentage-of-spend markups. We scale with simple fixed monthly commitments backed by performance metrics.
          </p>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center pt-6">
            <div className="bg-slate-105 border border-slate-200 p-1.5 rounded-full inline-flex items-center gap-1">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === "monthly"
                    ? "bg-[#ff6a00] text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("quarterly")}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === "quarterly"
                    ? "bg-[#ff6a00] text-white shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                Quarterly Commit
                <span className="text-[9px] font-bold bg-[#1e6ecc]/10 text-[#1e6ecc] px-1.5 py-0.5 rounded-full font-mono">
                  Save 15%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const currentPrice = billingCycle === "monthly" ? plan.price.monthly : plan.price.quarterly;
            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? "bg-white border-2 border-[#ff6a00] shadow-lg lg:scale-[1.02]"
                    : "bg-slate-50 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-4 right-4 text-[9px] font-extrabold text-[#ff6a00] bg-[#ff6a00]/10 border border-[#ff6a00]/20 px-2.5 py-1 rounded uppercase tracking-wider font-mono">
                    Recommended
                  </span>
                )}

                <div className="space-y-6 text-left">
                  {/* Plan Name & Desc */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-slate-900">{plan.name}</h4>
                    <p className="text-xs text-slate-550 leading-relaxed min-h-[48px] font-light">{plan.desc}</p>
                  </div>

                  {/* Price */}
                  <div className="py-2 border-y border-slate-200 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">${currentPrice}</span>
                    <span className="text-xs font-semibold text-slate-400">/ month</span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3.5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-[#ff6a00] flex-shrink-0 mt-0.5" />
                        <span className="leading-normal font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <a
                    href="#contact"
                    className={`w-full py-3 px-4 rounded text-xs font-bold flex items-center justify-center transition-all cursor-pointer ${
                      plan.popular
                        ? "bg-[#ff6a00] hover:bg-[#e05d00] text-white shadow-md shadow-orange-500/10"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Bottom note */}
        <div className="mt-16 text-center max-w-xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs text-slate-500 justify-center">
            <Info className="w-3.5 h-3.5 text-[#ff6a00]" />
            <span>Looking for custom channel mixes or consulting contracts?</span>
          </div>
          <p className="text-xs text-slate-500 leading-normal font-light">
            All plans require a minimum 30-day notice period. No long term locks except for selected quarterly-rate commits. Ad budgets are paid directly to Google and Meta.
          </p>
        </div>

      </div>
    </section>
  );
}
