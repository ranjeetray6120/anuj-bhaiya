"use client";

import { useState } from "react";
import { Search, PenTool, Rocket, BarChart3, ArrowRight } from "lucide-react";

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Search,
      phase: "01",
      title: "Deep Discovery & Audit Sprint",
      timeline: "Days 1 - 7",
      shortDesc: "Auditing pixels, baseline tracking APIs, CRM pipelines, and competitor marketing channels.",
      detailedDesc: "We perform a thorough structural audit of your conversion pixels, Google Tag Manager layers, and CRM attribution loops. We isolate exactly where leakages occur, analyze competitor ads using custom scraper models, and lay down the performance metrics baseline.",
    },
    {
      icon: PenTool,
      title: "Creative Sprint & Funnel Build",
      phase: "02",
      timeline: "Days 8 - 15",
      shortDesc: "Designing high-converting mobile-first landing pages and writing psychology-backed copy scripts.",
      detailedDesc: "Our internal team of copywriters and UI designers sprints to engineer high-converting landing pages. We set up dynamic text replacement systems and produce 15+ ad creatives (hooks, assets, and angles) to populate our initial testing sandbox.",
    },
    {
      icon: Rocket,
      title: "Campaign Orchestration & Launch",
      phase: "03",
      timeline: "Days 16 - 21",
      shortDesc: "Launching structured search, social, and remarketing grids using automated target rules.",
      detailedDesc: "We build out your search, social, and account-based campaign grids. We configure CAPI (Conversion API), negative audience exclusions, offline conversions, and launch campaigns in a controlled 'sandbox state' to gather data without burning ad spend.",
    },
    {
      icon: BarChart3,
      title: "Scale Optimization & Live Reports",
      phase: "04",
      timeline: "Days 22+",
      shortDesc: "Launching Looker Studio dashboards, bi-weekly creative refreshes, and constant split testing.",
      detailedDesc: "We launch your interactive real-time reporting dashboard. We run A/B split testing on checkout flow elements, review video scroll-stop rates, and conduct weekly creative refreshes to stay ahead of ad fatigue and predictably scale.",
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Strategy Execution Process
          </h3>
          <p className="text-slate-550 text-sm sm:text-base">
            A systematic, risk-reduced timeline designed to take your campaigns from discovery to scale in under 30 days.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Navigation Steps */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-white border-[#4eb46f] shadow-md"
                      : "bg-white/40 border-slate-200 hover:bg-white hover:border-slate-350"
                  }`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4eb46f]" />
                  )}

                  <div className={`p-2 rounded-lg border flex-shrink-0 ${
                    isActive ? "bg-[#4eb46f]/10 border-[#4eb46f]/20 text-[#4eb46f]" : "bg-slate-50 border-slate-200 text-slate-450"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-[#4eb46f] uppercase tracking-wider">{step.timeline}</span>
                      <span className="text-[10px] font-semibold text-slate-400">• Phase {step.phase}</span>
                    </div>
                    <h4 className="font-bold text-slate-800 text-sm sm:text-base">
                      {step.title}
                    </h4>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Detailed View */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#4eb46f] uppercase tracking-widest">Stage Overview</span>
                  <span className="text-4xl font-black text-slate-100 select-none">PHASE {steps[activeStep].phase}</span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-slate-400 px-2 py-0.5 rounded bg-slate-100 border border-slate-200">{steps[activeStep].timeline}</span>
                  <h4 className="text-xl font-bold text-slate-850">{steps[activeStep].title}</h4>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  {steps[activeStep].detailedDesc}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">Step {activeStep + 1} of {steps.length}</span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#4eb46f] hover:text-[#3d9e5c] transition-colors group"
                >
                  Request Strategy Breakdown
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
