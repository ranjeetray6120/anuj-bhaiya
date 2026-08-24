"use client";

import Link from "next/link";

const servicesData = [
  {
    icon: (
      <div className="flex items-center justify-center font-extrabold text-3xl tracking-tight select-none">
        <span className="text-[#4285F4]">S</span>
        <span className="text-[#EA4335]">E</span>
        <span className="text-[#FBBC05]">O</span>
      </div>
    ),
    title: "SEO",
    desc: "Outperform your biggest rivals with India's leading SEO Company. Generate incredible leads through the power of SEO. We know what GOOGLE wants to get you in SERPs.",
    items: [
      "Local SEO",
      "International SEO",
      "Ecommerce SEO",
      "Enterprise SEO",
    ],
    href: "/seo",
  },
  {
    icon: (
      <svg className="w-14 h-14 mx-auto" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        {/* Google Ads Polygon */}
        <polygon points="50,10 90,80 70,80 40,25" fill="#4285F4" />
        <polygon points="50,10 10,80 30,80 60,25" fill="#FBBC05" />
        <circle cx="70" cy="80" r="14" fill="#34A853" />
      </svg>
    ),
    title: "Google Ads",
    desc: "Let our experts take charge of your PPC campaign. Don't Settle For LESS, Achieve BIG With Our Performance Marketing Strategies",
    items: [
      "Google Ads",
      "PMax Campaigns",
      "Shopping Campaigns",
      "Planning & Strategies",
    ],
    href: "/pay-per-click",
  },
  {
    icon: (
      <svg className="w-14 h-14 mx-auto" viewBox="0 0 100 100" fill="#046BD2" aria-hidden="true">
        {/* Meta Infinity Icon */}
        <path d="M72.2 27.5C64.6 27.5 57.6 32.8 50 41.2C42.4 32.8 35.4 27.5 27.8 27.5C14.7 27.5 5 37.9 5 50.8C5 63.7 14.7 74.1 27.8 74.1C35.4 74.1 42.4 68.8 50 60.4C57.6 68.8 64.6 74.1 72.2 74.1C85.3 74.1 95 63.7 95 50.8C95 37.9 85.3 27.5 72.2 27.5ZM27.8 64.6C19.7 64.6 13.9 58.4 13.9 50.8C13.9 43.2 19.7 37 27.8 37C33.4 37 39.4 42 45.4 50.8C39.4 59.6 33.4 64.6 27.8 64.6ZM72.2 64.6C66.6 64.6 60.6 59.6 54.6 50.8C60.6 42 66.6 37 72.2 37C80.3 37 86.1 43.2 86.1 50.8C86.1 58.4 80.3 64.6 72.2 64.6Z" />
      </svg>
    ),
    title: "Meta Ads",
    desc: "From Generating leads from the businesses to Generating sales at better ROAS for your business. We exactly know how meta ecosystem works now.",
    items: [
      "Ads Creation & Brainstorming",
      "Facebook Ads",
      "Instagram Ads",
    ],
    href: "/meta-ads",
  },
  {
    icon: (
      <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-50 border border-amber-200 flex flex-col items-center justify-center p-2 text-center" aria-hidden="true">
        <div className="flex gap-1 mb-0.5">
          <span className="text-amber-400 text-[10px]">★</span>
          <span className="text-amber-400 text-[10px]">★</span>
          <span className="text-amber-400 text-[10px]">★</span>
        </div>
        <span className="text-xs font-black text-amber-700">CRO</span>
      </div>
    ),
    title: "Development",
    desc: "We understand the Concept of CRO for Landing Pages. We know How to make a webiste SEO Friendly. Get our Web Development Services. We create websites and Landing Pages that can generate ROI.",
    items: [
      "High Converting Landing Page",
      "SEO Friendly Websites.",
      "Custom Coded Websites",
    ],
    href: "/development",
  },
];

export default function PerformanceStats() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden" id="services">
      {/* Horizontal Blue Banner Band behind cards */}
      <div className="absolute top-[40%] left-0 right-0 h-44 sm:h-52 bg-[#168ed3] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-slate-900 tracking-tight leading-tight">
            Our ROI driven Services for both Ecommerce as well as
            <span className="text-[#168ed3] block mt-1 font-black">
              Lead Generation Businesses!
            </span>
          </h2>
          <p className="mt-2.5 text-slate-600 text-xs sm:text-sm max-w-xl mx-auto font-medium">
            Honest, 100% transparency and Data Driven Approach is how we operate.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {servicesData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-slate-100 p-6 flex flex-col justify-between text-center transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Icon Container */}
                <div className="h-14 flex items-center justify-center mb-3">
                  {card.icon}
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-slate-900 tracking-tight mb-2">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed min-h-[85px]">
                  {card.desc}
                </p>

                {/* "Start with..." Subheading */}
                <div className="mt-5 pt-3 border-t border-slate-100 text-left">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-2.5">
                    Start with...
                  </h4>

                  {/* Checklist */}
                  <ul className="space-y-2">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 rounded-full bg-[#168ed3] flex items-center justify-center flex-shrink-0 text-white">
                          <svg className="w-2 h-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-xs font-semibold text-slate-700">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Learn More Link */}
              <div className="mt-6 pt-3">
                <Link
                  href={card.href}
                  aria-label={`Learn more about our ${card.title} services`}
                  className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-slate-900 hover:text-[#168ed3] transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

