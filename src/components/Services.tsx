"use client";

import { ArrowRight, Target, Search, PenTool } from "lucide-react";

export default function Services() {
  const pillars = [
    {
      icon: Target,
      title: "Paid Media Acceleration",
      desc: "Architecting intent-based paid media campaigns across search and social channels to capture high-value buyers.",
      bullets: [
        "Structured Google Search & Shopping campaigns",
        "Meta Dynamic Creative (DCT) sandboxes",
        "LinkedIn account-based target modeling",
      ],
      iconBg: "bg-orange-50 text-[#ff6a00]",
    },
    {
      icon: Search,
      title: "Search Dominance (SEO)",
      desc: "Establishing organic dominance for commercially viable search terms to capture non-paid transactional traffic.",
      bullets: [
        "Semantic keyword clustering & roadmap",
        "Technical site speed & index optimizations",
        "Local Map Pack authority scaling",
      ],
      iconBg: "bg-blue-50 text-blue-600",
    },
    {
      icon: PenTool,
      title: "Conversion Architecture",
      desc: "Designing custom mobile-first landing pages and checkout flows engineered to maximize ROAS efficiency.",
      bullets: [
        "High-converting static landing page layouts",
        "A/B heading and field split tests",
        "Dynamic content matches matching ad groups",
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
            CORE SERVICES
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
            Scale-Focused Acquisition Frameworks
          </h3>
          <p className="text-slate-555 text-sm sm:text-base font-light">
            We build direct customer acquisition engines that align with your exact cost-per-lead and revenue goals.
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
                    ACQUISITION DEPLOYMENT
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
