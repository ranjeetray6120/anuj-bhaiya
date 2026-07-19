"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Open first by default

  const faqs = [
    {
      q: "How does ADFORGE track conversion attributions accurately?",
      a: "We configure server-side attribution models using Conversions API (CAPI) on Meta and custom Google Tag Manager layers. This allows us to capture offline events and bypass browser tracking restrictions, linking ad spend directly to CRM revenue.",
    },
    {
      q: "What is your onboarding process for new accounts?",
      a: "Our onboarding is completed in a 21-day sprint. Week 1 is dedicated to discovery, pixel audits, and competitor analysis. Week 2 involves landing page layout styling and ad copywriting. Week 3 focuses on campaign configuration and launching targets in a safe sandbox.",
    },
    {
      q: "Do you require long-term contracts?",
      a: "No, we operate under fixed monthly commitments with a standard 30-day notice period. We want our client partnerships to be built on positive campaign ROAS, not structural contract locks.",
    },
    {
      q: "How long does it take for SEO campaigns to rank?",
      a: "Commercial SEO optimization typically yields initial rank updates within 90 days. High-competition transactional terms take 6 to 12 months, which is why we run PPC campaigns in parallel to secure immediate lead volumes.",
    },
    {
      q: "How do you calculate recommended ad budgets?",
      a: "We align ad budgets with your target cost-per-acquisition (CPA) and monthly pipeline goals. We start campaigns inside a controlled spend sandbox to gather baseline data before scaling ad groups.",
    },
    {
      q: "Do you design landing pages as part of your services?",
      a: "Yes, landing page conversion design is included in our Growth and Enterprise plans. We build fast, mobile-optimized React pages that match ad copy directly to increase conversion rates.",
    },
  ];

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
            Acquisition FAQs
          </h3>
          <p className="text-slate-555 text-sm font-light">
            Clear answers to help you understand our performance strategy setups, attribution models, and onboarding timelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-1.5 border-t border-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-b border-slate-200 overflow-hidden text-left"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors leading-tight ${
                    isOpen ? "text-[#ff6a00]" : "text-slate-800 group-hover:text-[#ff6a00]"
                  }`}>
                    {faq.q}
                  </span>
                  <div className="text-[#ff6a00] flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light pl-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Contact Trigger */}
        <div className="text-center mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 hover:border-[#ff6a00] hover:text-[#ff6a00] text-xs font-bold text-slate-500 rounded-lg transition-colors cursor-pointer"
          >
            Have More Questions?
          </a>
        </div>

      </div>
    </section>
  );
}
