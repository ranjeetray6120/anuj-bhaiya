"use client";

import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";

export default function Features() {
  const [activeTab, setActiveTab] = useState("ppc");

  const tabs = [
    {
      id: "ppc",
      label: "Google & Meta Ads",
    },
    {
      id: "social",
      label: "Retargeting Past Traffic",
    },
    {
      id: "seo",
      label: "SEO Authority Optimization",
    },
  ];

  const content = {
    ppc: {
      title: "Launch campaigns targeting buyers who are ready to purchase",
      desc: "We don't waste budget guessing. We target active search terms and social demographics, sending them directly to custom landing pages built for conversions.",
      image: "/assets/images/pay-per-click.jpg",
      bullets: [
        {
          title: "Server-Side Tracking",
          text: "We configure Conversions API (CAPI) and Google Tag Manager server streams so you have exact numbers, bypassing ad-blockers and iOS tracking limits.",
        },
        {
          title: "Ad Creative Sandbox",
          text: "We test multiple hook angles, headlines, and visuals in small budget tests first to identify the winner before scaling.",
        },
      ],
      ctaStyle: "bg-[#ff6a00] hover:bg-[#e05d00] text-white shadow-sm",
    },
    social: {
      title: "Re-engage past visitors who left without purchasing",
      desc: "Nearly 96% of website visitors leave without buying. We build custom retargeting campaigns to stay top-of-mind and bring them back to finish their transaction.",
      image: "/assets/images/social-media-marketing.png",
      bullets: [
        {
          title: "Custom Audience Funnels",
          text: "We set up multi-tiered retargeting on Meta and LinkedIn based on specific pages your prospects visited.",
        },
        {
          title: "Social Proof Assets",
          text: "We retarget prospects with customer video reviews, comparison charts, and security trust badges to build authority.",
        },
      ],
      ctaStyle: "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm",
    },
    seo: {
      title: "Rank organically for search terms your competitors pay for",
      desc: "Stop paying for every single click. We audit site speed, resolve technical crawl blocks, and write helpful guides to get you ranked on page one.",
      image: "/assets/images/search-engine-optimization.png",
      bullets: [
        {
          title: "Keyword Mapping",
          text: "We identify transactional keywords with high search volumes and low ranking barriers, mapping out a plan to rank above your competitors.",
        },
        {
          title: "Google Maps Domination",
          text: "We optimize your Google Business profile and listing citations to rank in local search Map Pack listings.",
        },
      ],
      ctaStyle: "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm",
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  const handleDownload = () => {
    alert("Your PDF marketing blueprint download has been queued!");
  };

  return (
    <section id="features" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-3 rounded text-xs sm:text-sm font-bold border transition-colors cursor-pointer w-full sm:w-auto sm:min-w-[200px] text-center ${
                activeTab === tab.id
                  ? "bg-[#ff6a00] border-[#ff6a00] text-white shadow-sm"
                  : "bg-white border-slate-200 text-slate-600 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-slate-200 bg-white flex items-center justify-center">
                <img
                  src={currentContent.image}
                  alt={currentContent.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight font-sans">
                {currentContent.title}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                {currentContent.desc}
              </p>

              <ul className="space-y-4">
                {currentContent.bullets.map((bullet, idx) => (
                  <li key={idx} className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#ff6a00] stroke-[3]" />
                      <h5 className="text-sm font-bold text-slate-900">{bullet.title}:</h5>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-550 font-light pl-6 leading-relaxed">
                      {bullet.text}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <button
                  onClick={handleDownload}
                  className={`px-5 py-2.5 rounded text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-2 ${currentContent.ctaStyle}`}
                >
                  <ShieldCheck className="w-4.5 h-4.5" />
                  Download Marketing Blueprint
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
