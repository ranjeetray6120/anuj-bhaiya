"use client";

import { X, Check, Users, DollarSign, Paperclip, FileText } from "lucide-react";

export default function WhyChooseUs() {
  const withoutMarketing = [
    "Wasting ad spend on the wrong keywords",
    "No server-side conversion tracking (losing 30% of sales data)",
    "Not showing up in local Google Maps search queries",
    "Paying high CPCs only to send traffic to a generic homepage",
    "Social media accounts that are completely inactive",
    "Leaking warm leads straight to your competitors",
    "Stuck at a plateau with no plan to scale budgets",
  ];

  const withMarketing = [
    "Tracking every conversion accurately using server-side CAPI",
    "Ranking on page one of Google for high-intent keywords",
    "A steady stream of qualified leads sent to your sales team",
    "Bespoke mobile-first landing pages built to convert",
    "Active retargeting showing reviews to past visitors",
    "Clear weekly reports mapping spend directly to revenue",
    "A scalable framework to grow your ad spend profitably",
  ];

  const standOutStats = [
    {
      icon: FileText,
      text: "Landing pages custom designed to convert ad clicks into sales",
    },
    {
      icon: Users,
      text: "Account audits to find where you are currently wasting budget",
    },
    {
      icon: Paperclip,
      text: "New ad creative hooks and headlines tested weekly",
    },
    {
      icon: DollarSign,
      text: "Campaigns run with strict target Cost-Per-Acquisition goals",
    },
  ];

  const teamBenefits = [
    "Google & Meta experts handling tracking setup",
    "Looker Studio real-time dashboards for live metrics",
    "Split tests on landing page headlines and forms",
    "Weekly visual asset design and copyright updates",
  ];

  return (
    <div className="w-full">
      {/* 1. WARNING & Contrast Section */}
      <section className="py-12 sm:py-20 bg-white text-slate-900 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold text-red-500 border-b border-dashed border-red-500/30 inline-flex items-center gap-2 pb-1.5 uppercase font-mono tracking-wider">
              <X className="w-5 h-5 text-red-500 stroke-[3]" />
              Campaign Vulnerabilities
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {/* Static Growth Model */}
            <div className="p-6 rounded-xl border border-red-200 bg-red-500/5 space-y-6">
              <div className="text-center space-y-3">
                <div className="w-full h-44 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="/assets/images/warning-1.png"
                    alt="Unoptimized Marketing Strategy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-bold bg-red-500 text-white rounded-full">
                  Unoptimized Setup
                </span>
                <h4 className="text-lg font-bold text-slate-900 font-sans">The Old Agency Model</h4>
              </div>

              <ul className="space-y-3 text-left">
                {withoutMarketing.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <X className="w-4 h-4 text-red-500 stroke-[3] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Agile Growth Framework */}
            <div className="p-6 rounded-xl border border-[#ff6a00]/20 bg-[#ff6a00]/5 space-y-6">
              <div className="text-center space-y-3">
                <div className="w-full h-44 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                  <img
                    src="/assets/images/warning-2.png"
                    alt="Structured Conversion Setup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-bold bg-[#ff6a00] text-white rounded-full">
                  Optimized Growth
                </span>
                <h4 className="text-lg font-bold text-slate-900 font-sans">The ADFORGE Growth Engine</h4>
              </div>

              <ul className="space-y-3 text-left">
                {withMarketing.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#ff6a00] stroke-[3] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Stand Out Sub-Section */}
          <div className="mt-24 space-y-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-slate-900 tracking-tight font-sans">
              What Drives Our Campaigns
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 flex justify-center">
                <img
                  src="/assets/images/ads-expert.jpg"
                  alt="ADFORGE PPC Strategy Analyst"
                  className="w-full max-w-md rounded-2xl shadow-lg object-cover border border-slate-200"
                />
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {standOutStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#ff6a00]/30 transition-colors flex flex-col justify-start items-start gap-3 h-full"
                    >
                      <div className="w-12 h-12 rounded bg-[#ff6a00] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-slate-800 leading-normal text-left font-sans">
                        {stat.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Gradient Agile Team Banner */}
      <section className="py-20 bg-gradient-to-br from-[#ff6a00] to-[#1e6ecc] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                HOW WE EXECUTE
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Work directly with seasoned media buyers and design specialists
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-white/80 font-light font-sans">
                We focus entirely on the numbers that affect your bottom line: leads, purchases, and cost-per-acquisition. No account managers playing telephone. You communicate directly with the builders.
              </p>

              <div className="space-y-3 pt-2">
                {teamBenefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-white/90">
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Real Image */}
            <div className="lg:col-span-6 flex justify-center">
              <img
                src="/assets/images/team.jpg"
                alt="ADFORGE Strategy Operations Group"
                className="w-full max-w-md rounded-2xl shadow-2xl object-cover border border-white/20"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
