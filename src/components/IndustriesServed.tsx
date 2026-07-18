"use client";

import { ShoppingBag, Cloud, HeartPulse, Building2, Landmark, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function IndustriesServed() {
  const industries = [
    {
      icon: ShoppingBag,
      name: "E-Commerce & DTC",
      benefit: "Scaling Transactions & ROAS",
      desc: "Optimizing transaction value, cart values, dynamic remarketing, and visual landing pages to drive recurring customer lifetime value.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Cloud,
      name: "B2B SaaS & Tech",
      benefit: "Lowering Demo SQL costs",
      desc: "Architecting automated pipelines targeting director and C-level decision makers with educational resources and demo sequences.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: HeartPulse,
      name: "Healthcare & Biotech",
      benefit: "HIPAA-Compliant Lead Gen",
      desc: "Scaling patient acquisitions through search-intent and local maps optimization while fully maintaining user privacy protocols.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Building2,
      name: "Real Estate & Development",
      benefit: "High-Ticket Pipeline Scale",
      desc: "Geo-targeted ad strategies optimized for booking physical tours, high-value buyer list enrichment, and brochure downloads.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Landmark,
      name: "FinTech & Funding",
      benefit: "Driving High-Trust Leads",
      desc: "Establishing authority and trust through cluster search networks, financial calculators, and high-CTR search campaigns.",
      color: "from-rose-500 to-cyan-500",
    },
    {
      icon: GraduationCap,
      name: "Education & EdTech",
      benefit: "Enrollment Volume",
      desc: "Targeting student inquiries and course sign-ups with automated lead nurturing workflows and dynamic retargeting paths.",
      color: "from-cyan-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#517082]">
            Market Expertise
          </h2>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Industries We Scale
          </h3>
          <p className="text-slate-500 text-sm">
            We don't believe in generic marketing. We construct channel solutions engineered for the specific purchasing behavior of your sector.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                className="bg-slate-50 border border-slate-200 hover:border-slate-300 rounded-xl p-5 transition-all duration-300 flex flex-col justify-between"
                whileHover={{ y: -2 }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#4eb46f]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                        {ind.name}
                      </h4>
                      <span className="text-[10px] font-bold text-[#1e6ecc] uppercase tracking-wide">
                        {ind.benefit}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 leading-relaxed font-light text-left">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
                  <span>Strategy Blueprint</span>
                  <a href="#contact" className="text-[#4eb46f] hover:underline font-semibold">
                    View Plan
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
