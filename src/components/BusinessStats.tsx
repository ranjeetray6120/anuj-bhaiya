"use client";

import { CheckCircle } from "lucide-react";

export default function BusinessStats() {
  const stats = [
    {
      value: "2k+",
      label: "Websites & Campaigns Delivered",
    },
    {
      value: "99%",
      label: "Client Satisfaction Rate",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Copy & Stats */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#517082]">
              WELCOME TO AETHERIS DIGITAL
            </span>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
              We're delivering high converting digital marketing & SEO solutions for your business
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#4eb46f] flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-600 font-light">
                  Trusted by 2000+ businesses globally for PPC, SEO, and social media strategies that drive real results.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-[#4eb46f] flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-slate-600 font-light">
                  Not just an agency, we also train the next-gen digital marketers through hands-on courses & placements.
                </p>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-slate-100">
              {stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#4eb46f] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-semibold leading-normal">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Real image */}
          <div className="lg:col-span-6 flex justify-center">
            <img
              src="/assets/images/about-us.jpg"
              alt="About Aetheris Digital Workspace"
              className="w-full max-w-md rounded-2xl shadow-lg object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
