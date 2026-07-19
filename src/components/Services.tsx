"use client";

import { ArrowRight, Target, Search, PenTool } from "lucide-react";

export default function Services() {
  const pillars = [
    {
      icon: Target,
      title: "Google & Meta Ads",
      desc: "We plan, build, and manage high-performing paid campaigns across Search, Shopping, and Social to capture customers who are ready to buy today.",
      bullets: [
        "High-intent Google Search campaigns",
        "Meta ad testing & creative rotation",
        "LinkedIn account-based campaigns",
      ],
      iconBg: "bg-orange-50 text-[#ff6a00]",
    },
    {
      icon: Search,
      title: "SEO & Google Maps",
      desc: "We rank your website and Google Maps profile for commercially valuable keywords, driving free, high-intent traffic that actually converts.",
      bullets: [
        "Targeting buyer-intent keywords",
        "Speeding up site page loads for rankings",
        "Optimizing Google Business Profile ranking",
      ],
      iconBg: "bg-blue-50 text-blue-600",
    },
    {
      icon: PenTool,
      title: "High-Converting Pages",
      desc: "Great ads are useless if your website is slow or confusing. We build clean, mobile-first landing pages engineered to convert clicks into customers.",
      bullets: [
        "Fast, mobile-friendly landing page designs",
        "Form optimization and A/B split testing",
        "Matching page copy directly to search queries",
      ],
      iconBg: "bg-green-50 text-green-600",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff6a00] font-mono">
            WHAT WE DO
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
            How we help you acquire customers
          </h3>
          <p className="text-slate-555 text-sm sm:text-base font-light">
            We focus on building campaigns that deliver real bottom-line revenue, aligned with your target cost-per-lead and acquisition goals.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:border-[#ff6a00]/30 transition-colors text-left"
              >
                <div className="space-y-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pillar.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-slate-900 font-sans">{pillar.title}</h4>
                    <p className="text-xs text-slate-550 leading-relaxed font-light">{pillar.desc}</p>
                  </div>

                  <ul className="space-y-2.5 pt-2 border-t border-slate-200">
                    {pillar.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <span className="text-[#ff6a00] font-extrabold select-none">•</span>
                        <span className="font-light">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff6a00] hover:text-[#e05d00] transition-colors font-mono"
                  >
                    LEARN OUR WORKFLOW
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#ff6a00] hover:bg-[#e05d00] px-6 py-3 rounded-lg transition-colors shadow-lg cursor-pointer"
          >
            Claim 40% Off & Consultation Call
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
