"use client";

import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Partnering with ADFORGE completely changed our customer acquisition cost. They redesigned our PPC landing page and structured our search ad groups. Within the first quarter, we saw lead conversion lift by 60%. Their communication and reports are transparent.",
      author: "Ryan Zaritsky",
      role: "E-Commerce Director",
      location: "Verified Google Review",
    },
    {
      quote: "The strategy team at ADFORGE is incredibly diligent. They manage our Meta ad creatives and retargeting setup. Our brand visibility and customer interaction rates have steadily increased, keeping our pipeline warm.",
      author: "Sarah Matthews",
      role: "SaaS Marketing VP",
      location: "Verified Google Review",
    },
    {
      quote: "ADFORGE delivered a highly responsive Next.js landing page system that resolved our mobile speed issues. They integrated conversion tags and schema perfectly. Our ads now convert traffic at almost double the previous rate.",
      author: "Jonathan Lee",
      role: "Product Operations Lead",
      location: "Verified Google Review",
    },
    {
      quote: "We engaged them for localized search optimization to capture high-value loan queries. Their SEO roadmap is structural, and we are ranking on page one for commercial terms we previously paid high CPCs for.",
      author: "Priya Verma",
      role: "FinTech SEO Director",
      location: "Verified Google Review",
    },
    {
      quote: "Having ADFORGE handle our Google Ads, Meta accounts, and content strategy is like having a fully aligned performance division. They focus entirely on pipeline and ROAS, not fluffy clicks.",
      author: "David Connor",
      role: "Brand Scaling Lead",
      location: "Verified Google Review",
    },
    {
      quote: "Their social media creative sandbox structured our channel campaigns beautifully. We started seeing consistent lead quality and growth in organic referral traffic.",
      author: "Sunita Heda",
      role: "Marketing Manager",
      location: "Verified Google Review",
    },
  ];

  // Double the testimonials array to construct a seamless infinite marquee scroll
  const doubleTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
            Client Transformations
          </h3>
          <p className="text-slate-550 text-sm font-semibold uppercase tracking-wider">
            Verified Customer Outcomes
          </p>
          
          <div className="flex justify-center pt-2">
            <img
              width="120"
              src="/assets/icons/google.svg"
              alt="Google Rating"
              className="object-contain"
            />
          </div>
        </div>

        {/* Infinite marquee scroller container */}
        <div className="w-full overflow-hidden relative py-4">
          
          {/* Fading gradient masks for premium marquee edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling flex row */}
          <div className="flex gap-6 w-max animate-scroll">
            {doubleTestimonials.map((item, idx) => (
              <div
                key={idx}
                className="w-[285px] sm:w-[340px] flex-shrink-0 bg-white border border-slate-200 rounded-xl p-5 relative flex flex-col justify-between text-left hover:border-[#ff6a00]/30 transition-colors shadow-sm select-none"
              >
                {/* Quote icon indicator */}
                <div className="absolute top-4 right-4 opacity-5 pointer-events-none">
                  <img
                    src="/assets/images/left-quote.png"
                    alt="Quote"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <div className="space-y-4 relative z-10 flex-grow pointer-events-none">
                  {/* Author Information */}
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/icons/google-icon.svg"
                      alt="Google review author"
                      className="w-8 h-8 rounded-full object-contain shadow-sm border border-slate-200 bg-slate-50"
                    />
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-sm leading-tight font-sans">
                        {item.author}
                      </h5>
                      <span className="text-[10px] text-[#ff6a00] font-bold block mt-0.5 font-mono">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Card footer */}
                <div className="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between text-[10px] font-semibold text-slate-450 pointer-events-none">
                  <span>{item.location}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Scroll Helper note */}
        <div className="text-center mt-4">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Hover over reviews to pause scrolling
          </span>
        </div>

      </div>
    </section>
  );
}
