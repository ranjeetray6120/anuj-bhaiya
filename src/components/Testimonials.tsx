"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const testimonials = [
    {
      quote: "I took digital marketing services from Aetheris Digital, including a landing page and PPC campaigns for both Google and Meta Ads. Everything is going great so far! The campaigns are well-optimized, and I'm already seeing positive results. Highly recommend them for anyone looking for real performance.",
      author: "Ryan Zaritsky",
      role: "PPC & Landing Page Client",
      location: "Verified Google Review",
    },
    {
      quote: "It’s been great connecting with the team. Their approach to handling business is very impressive. The team at Aetheris Digital is managing all my social media platforms, and I can already see better engagement and a more professional online presence.",
      author: "Sarah Matthews",
      role: "Social Media Management",
      location: "Verified Google Review",
    },
    {
      quote: "I reached out to Aetheris Digital for website development, and they did an excellent job. They understood my business requirements and delivered a fast, responsive, and SEO-friendly website. I’m very satisfied with the result and their support throughout the process.",
      author: "Jonathan Lee",
      role: "Website Development",
      location: "Verified Google Review",
    },
    {
      quote: "I wanted to improve my website’s ranking and visibility, and Aetheris Digital helped me do just that. Their SEO work is solid from keyword research to backlinking, everything is handled professionally. My website has started to rank higher, and organic traffic is increasing.",
      author: "Priya Verma",
      role: "SEO Services",
      location: "Verified Google Review",
    },
    {
      quote: "Aetheris Digital is managing everything for my brand from SEO, social media, paid ads, to content and web design. It’s like having a full in-house marketing team. The communication is smooth, results are consistent, and I finally feel like my business is heading in the right direction.",
      author: "David Connor",
      role: "Full Digital Marketing Package",
      location: "Verified Google Review",
    },
    {
      quote: "I started working with Aetheris Digital to grow my Instagram, and I’m really happy with the results. They manage content, posting, and engagement with care, and my followers and reach have grown.",
      author: "Sunita Heda",
      role: "Instagram Growth",
      location: "Verified Google Review",
    },
  ];

  // Adjust visible count based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get index-wrapped array of items to render
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const idx = (startIndex + i) % testimonials.length;
      items.push({ ...testimonials[idx], keyId: `${idx}-${i}` });
    }
    return items;
  };

  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Excellent Services
          </h3>
          <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider">
            Based on our customer reviews
          </p>
          
          {/* Real Google review trust logo */}
          <div className="flex justify-center pt-2">
            <img
              width="120"
              src="/assets/icons/google.png"
              alt="Google Rating"
              className="object-contain"
            />
          </div>
        </div>

        {/* Carousel Slider Wrapper */}
        <div className="relative w-full overflow-hidden px-1">
          {/* Main cards slider block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {getVisibleItems().map((item) => (
              <motion.div
                key={item.keyId}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-200 rounded-xl p-5 relative shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full"
              >
                {/* Quote Mark background */}
                <div className="absolute top-4 right-4 opacity-10">
                  <img
                    src="/assets/images/left-quote.png"
                    alt="Quote"
                    className="w-10 h-10 object-contain"
                  />
                </div>

                <div className="space-y-4 text-left relative z-10 flex-grow">
                  {/* Author Information */}
                  <div className="flex items-center gap-3">
                    <img
                      src="/assets/icons/google-icon.png"
                      alt="Google review author"
                      className="w-8 h-8 rounded-full object-contain shadow-sm border border-slate-200"
                    />
                    <div>
                      <h5 className="font-extrabold text-slate-900 text-sm leading-tight">
                        {item.author}
                      </h5>
                      <span className="text-[10px] text-[#4eb46f] font-bold block mt-0.5">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {/* Rating (Manik's 6 stars style or 5 gold stars) */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-light italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Card footer */}
                <div className="border-t border-slate-100 pt-3 mt-4 flex items-center justify-between text-[10px] font-semibold text-slate-400">
                  <span>{item.location}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Slider controls (Centered at the bottom of the carousel) */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-450 hover:text-slate-800 hover:border-slate-350 transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold text-slate-450 select-none">
              Scroll Reviews
            </span>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-450 hover:text-slate-800 hover:border-slate-350 transition-all cursor-pointer shadow-sm active:scale-95"
              aria-label="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
