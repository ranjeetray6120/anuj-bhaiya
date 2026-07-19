"use client";

import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";

export default function Features() {
  const [activeTab, setActiveTab] = useState("ppc");

  const tabs = [
    {
      id: "ppc",
      label: "Paid Search & Social Campaigns",
    },
    {
      id: "social",
      label: "Retargeting & Brand Nurturing",
    },
    {
      id: "seo",
      label: "SEO Authority Optimization",
    },
  ];

  const content = {
    ppc: {
      title: "Scale Acquisition Safely with Paid Campaign Funnels",
      desc: "Target active buyer intent on search engines and social feeds. We design matching landing pages directly to campaign ad sets to reduce cost-per-lead.",
      image: "/assets/images/pay-per-click.jpg",
      bullets: [
        {
          title: "Attribution Syncing",
          text: "Configuring server-side tracking (CAPI) and Google Tag Manager variables for exact pixel measurement.",
        },
        {
          title: "Creative sandboxing",
          text: "Deploying weekly ad variations (images, headlines, and angles) to identify high-performing targets without wasting ad budget.",
        },
      ],
      ctaStyle: "bg-[#ff6a00] hover:bg-[#e05d00] text-white shadow-sm",
    },
    social: {
      title: "Build Retargeting Channels to Capture Drop-off Traffic",
      desc: "Re-engage past website visitors and warm up cold prospects. We manage social assets to keep your brand visible and lower total customer acquisition costs.",
      image: "/assets/images/social-media-marketing.png",
      bullets: [
        {
          title: "Custom Audience Segments",
          text: "Structuring multi-tier remarketing ads on Meta and LinkedIn based on specific landing page views.",
        },
        {
          title: "Content Authority",
          text: "Publishing clean visual assets, customer review formats, and feature charts to establish brand trust.",
        },
      ],
      ctaStyle: "bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 shadow-sm",
    },
    seo: {
      title: "Rank For Commercial Search Queries Organically",
      desc: "Establish stable, non-paid customer pipelines. We optimize technical core web vitals and write search-optimized content to rank for commercial intent keywords.",
      image: "/assets/images/search-engine-optimization.png",
      bullets: [
        {
          title: "Programmatic Keyword Maps",
          text: "Structuring comprehensive semantic hubs targeting keywords your competitors are paying for in PPC.",
        },
        {
          title: "Local Map Dominance",
          text: "Optimizing Google Business profiles and directory citations to capture local search map pack positions.",
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
