"use client";

import { CheckCircle } from "lucide-react";

export default function BusinessStats() {
  const stats = [
    {
      value: "2.4k+",
      label: "Performance Campaigns Launched",
    },
    {
      value: "98.7%",
      label: "Quarter-over-Quarter Retention",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Workspace image */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <img
              src="/assets/images/about-us.jpg"
              alt="ADFORGE Strategy Office Collaboration"
              className="w-full max-w-md rounded-2xl shadow-lg border border-slate-200 object-cover aspect-[4/3]"
            />
          </div>

          {/* Right Column: Copy & Stats */}
          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6a00] font-mono">
              WHO WE ARE
            </span>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight font-sans">
              We translate marketing investments into commercial pipeline growth
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#ff6a00] flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-600 font-light">
                  ADFORGE bridges the gap between digital media spend and net bottom-line revenue. We build custom-engineered funnels that turn cold search clicks into verified transactions.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#ff6a00] flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-600 font-light">
                  From search campaigns on Google to custom Next.js landing pages, our systems focus on high-intent buyer acquisition with complete attribution tracking.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#ff6a00] tracking-tight font-sans">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-semibold leading-normal">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
