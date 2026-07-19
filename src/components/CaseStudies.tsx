"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp, Target, Landmark, ArrowRight, Sparkles } from "lucide-react";

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState(0);

  const studies = [
    {
      icon: Target,
      tag: "E-Commerce / Direct-to-Consumer",
      title: "Zenith Apparel Predictable Scaling to $4.2M Run-Rate",
      challenge: "Zenith suffered from rising Meta acquisition costs (CPA) and a generic theme landing page converting at a low 1.8%, putting their ad budget underwater.",
      strategy: "We built high-speed bespoke landing pages with dynamic variant selectors, set up automated Conversion APIs (CAPI) for better attribution, and structured a creative testing sandbox running 15 variations weekly.",
      results: [
        { label: "Return on Ad Spend", value: "4.8x ROAS" },
        { label: "Conversion Rate Lift", value: "+160%" },
        { label: "Revenue Growth", value: "$4.2M / mo" },
      ],
      color: "from-[#ff6a00]/5 to-[#1e6ecc]/5 border-[#ff6a00]/10",
    },
    {
      icon: TrendingUp,
      tag: "B2B SaaS / Enterprise",
      title: "SentrySec Enterprise Lead Generation System",
      challenge: "SentrySec spent thousands targeting general IT keywords on Google, receiving low-quality sign-ups and paying over $280 per Marketing Qualified Lead (MQL).",
      strategy: "We shifted campaigns to high-intent competitor terms and LinkedIn Account-Based Marketing (ABM) targeting VP & Director personas. We designed dedicated resource download funnels with automated data enrichment fields.",
      results: [
        { label: "Cost Per Qualified MQL", value: "-48% CPA" },
        { label: "Sales Qualified Leads", value: "+210%" },
        { label: "Marketing Pipeline", value: "$12.4M" },
      ],
      color: "from-[#1e6ecc]/5 to-[#ff6a00]/5 border-[#1e6ecc]/10",
    },
    {
      icon: Landmark,
      tag: "FinTech / Financial Services",
      title: "Equinox Financing Search Dominance Campaign",
      challenge: "Equinox faced high competitive pressure on PPC ads, with CPCs exceeding $45 per click. They lacked organic search visibility for commercial loan queries.",
      strategy: "We mapped out 30 semantic keyword clusters and rolled out programmatic content hubs. We resolved technical SEO errors, implemented custom schema layers, and secured authority backlink placements.",
      results: [
        { label: "Organic Monthly Traffic", value: "+540%" },
        { label: "Equivalent PPC Ad Value", value: "$1.2M Saved" },
        { label: "Top-3 Keyword Ranks", value: "42 Terms" },
      ],
      color: "from-[#ff6a00]/5 to-slate-50 border-slate-200",
    },
  ];

  const handleNext = () => {
    setActiveStudy((prev) => (prev === studies.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveStudy((prev) => (prev === 0 ? studies.length - 1 : prev - 1));
  };

  return (
    <section id="case-studies" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6a00] font-mono">
              Proof of Performance
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
              Data-Backed Case Studies
            </h3>
            <p className="text-slate-550 text-sm font-light">
              Actual results achieved for clients. We don't hide behind fluffy statistics—we showcase verified revenue metrics and performance enhancements.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-350 transition-colors cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-350 transition-colors cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Case Study Card Display */}
        <div className="relative w-full">
          <div className={`bg-white border rounded-2xl p-6 sm:p-10 bg-gradient-to-br ${studies[activeStudy].color} border-slate-250 relative overflow-hidden shadow-sm`}>
            {/* Quote badge icon */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded bg-white border border-slate-200 flex items-center justify-center shadow-sm">
              <Sparkles className="w-5 h-5 text-[#ff6a00]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left side: Content description */}
              <div className="lg:col-span-8 space-y-6 text-left">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#1e6ecc] tracking-wider uppercase block font-mono">
                    {studies[activeStudy].tag}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight font-sans">
                    {studies[activeStudy].title}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                  <div className="space-y-1.5">
                    <h5 className="text-xs font-bold text-red-500 uppercase tracking-widest font-mono">The Challenge:</h5>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      {studies[activeStudy].challenge}
                    </p>
                  </div>
                  <div className="space-y-1.5">
                    <h5 className="text-xs font-bold text-[#ff6a00] uppercase tracking-widest font-mono">The Strategy:</h5>
                    <p className="text-sm text-slate-600 leading-relaxed font-light">
                      {studies[activeStudy].strategy}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right side: Outcomes panel */}
              <div className="lg:col-span-4 w-full h-full flex flex-col gap-4">
                <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 lg:text-right font-mono">Verified Outcomes:</h5>
                {studies[activeStudy].results.map((res, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col justify-center shadow-sm text-left lg:text-right"
                  >
                    <span className="text-2xl font-black text-[#ff6a00] tracking-tight">
                      {res.value}
                    </span>
                    <span className="text-xs text-slate-450 mt-1 font-semibold">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Detail action */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">Case Study {activeStudy + 1} of {studies.length}</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-[#ff6a00] transition-colors group"
              >
                Request Full PDF Breakdown
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
