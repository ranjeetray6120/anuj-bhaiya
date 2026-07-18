"use client";

import { X, Check, Users, DollarSign, Paperclip, FileText } from "lucide-react";

export default function WhyChooseUs() {
  const withoutMarketing = [
    "Blind spending on outdated methods",
    "No online visibility or brand recall",
    "Low-quality or no leads",
    "Unoptimized website and zero SEO",
    "Social media presence is scattered",
    "Losing customers to smarter competitors",
    "Stuck in growth frustration",
  ];

  const withMarketing = [
    "Every campaign backed by data",
    "Rank higher & stay visible on search engines",
    "Consistent, qualified leads through SEO & ads",
    "Engaging social media that builds loyalty",
    "Conversion-optimized websites & landing pages",
    "Performance you can track & scale",
    "Outshine your competition locally & globally",
  ];

  const standOutStats = [
    {
      icon: Users,
      text: "Successfully Handled 2000+ Projects Across 15+ Industries",
    },
    {
      icon: DollarSign,
      text: "Helped 500+ Clients Achieve Consistent Growth with Google and Meta Ads",
    },
    {
      icon: Paperclip,
      text: "Created and A/B Tested 10,000+ Ad Creatives",
    },
    {
      icon: FileText,
      text: "Built 1500+ Landing Pages Optimized for Conversions",
    },
  ];

  const teamBenefits = [
    "Trusted by 500+ brands across multiple industries",
    "Delivered 2000+ successful projects",
    "Experts in SEO, PPC, social media, and more",
    "Transparent process and dedicated support",
  ];

  return (
    <div className="w-full">
      {/* 1. WARNING & Contrast Section */}
      <section className="py-20 bg-[#111827] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Warning Header */}
          <div className="text-center mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-red-500 border-b border-dashed border-red-500/40 inline-flex items-center gap-2 pb-1.5 uppercase font-mono tracking-wider">
              <X className="w-5 h-5 text-red-500 stroke-[3]" />
              WARNING
            </h3>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
            {/* Without Digital Marketing */}
            <div className="p-6 rounded-xl border border-red-500/20 bg-red-500/5 backdrop-blur-md space-y-6">
              <div className="text-center space-y-3">
                {/* Real Image */}
                <div className="w-full h-44 rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                  <img
                    src="/assets/images/warning-1.png"
                    alt="Without Digital Marketing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-bold bg-red-500 text-white rounded-full">
                  The Harsh Truth
                </span>
                <h4 className="text-lg font-bold text-white">Without Digital Marketing</h4>
              </div>

              <ul className="space-y-3">
                {withoutMarketing.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-350">
                    <X className="w-4 h-4 text-red-500 stroke-[3] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Strategic Digital Marketing */}
            <div className="p-6 rounded-xl border border-green-500/20 bg-green-500/5 backdrop-blur-md space-y-6">
              <div className="text-center space-y-3">
                {/* Real Image */}
                <div className="w-full h-44 rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                  <img
                    src="/assets/images/warning-2.png"
                    alt="With Strategic Digital Marketing"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-bold bg-[#4eb46f] text-white rounded-full">
                  The Growth Shift
                </span>
                <h4 className="text-lg font-bold text-white">With Strategic Digital Marketing</h4>
              </div>

              <ul className="space-y-3">
                {withMarketing.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-green-400 stroke-[3] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. Stand Out Sub-Section */}
          <div className="mt-24 space-y-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-center text-white tracking-tight">
              What Makes Our Services Stand Out
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column Real Image */}
              <div className="lg:col-span-6 flex justify-center">
                <img
                  src="/assets/images/ads-expert.jpg"
                  alt="Meta Ads Expert at Work"
                  className="w-full max-w-md rounded-2xl shadow-2xl object-cover border border-slate-800"
                />
              </div>

              {/* Right Column Stats Grid */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {standOutStats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-[#4eb46f]/30 transition-colors flex flex-col justify-start items-start gap-3 h-full"
                    >
                      <div className="w-12 h-12 rounded bg-[#4eb46f] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="text-sm font-semibold text-white leading-normal text-left">
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
      <section className="py-20 bg-gradient-to-br from-[#4eb46f] to-[#1e6ecc] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                We're technical and creative
              </span>
              <h4 className="text-2xl sm:text-3xl font-extrabold leading-tight">
                Rely on our experienced and knowledgeable team
              </h4>
              <p className="text-sm sm:text-base leading-relaxed text-white/80 font-light">
                With 6+ years of proven results, our digital marketing experts help Indian and global businesses grow with strategies that actually work. From lead generation to complete online brand building, we focus on delivering visible and measurable growth.
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
                alt="Aetheris Digital Performance Analysts Team"
                className="w-full max-w-md rounded-2xl shadow-2xl object-cover border border-white/20"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
