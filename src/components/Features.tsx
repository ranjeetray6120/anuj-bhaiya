"use client";

import { useState } from "react";
import { Check, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Features() {
  const [activeTab, setActiveTab] = useState("ppc");

  const tabs = [
    {
      id: "ppc",
      label: "Pay-Per-Click Advertising",
    },
    {
      id: "social",
      label: "Social Media Marketing",
    },
    {
      id: "seo",
      label: "Search Engine Optimization",
    },
  ];

  const content = {
    ppc: {
      title: "Grow Your Business with Result Driven PPC Advertising",
      desc: "We help you reach your ideal customers fast through targeted ads on Google, Meta, and more that turn every click into a potential sale.",
      image: "/assets/images/pay-per-click.jpg",
      bullets: [
        {
          title: "ROI Focused Ad Campaigns",
          text: "Strategic keyword targeting, compelling ad copy, and smart bidding to drive high quality leads and boost conversions.",
        },
        {
          title: "Cross Platform Visibility",
          text: "Run and manage ads across Google, Facebook, Instagram, and LinkedIn with campaigns optimized for maximum reach and performance.",
        },
      ],
      ctaStyle: "bg-gradient-to-r from-[#4eb46f] to-[#1e6ecc] text-white hover:opacity-95 shadow-md",
    },
    social: {
      title: "Amplify Your Brand with Smart Social Media Marketing",
      desc: "We help your business stay active, engaging, and visible across all major platforms that helps in building trust, awareness, and loyal customer relationships.",
      image: "/assets/images/social-media-marketing.png",
      bullets: [
        {
          title: "Platform Specific Strategies",
          text: "We create user friendly content and campaigns for Instagram, Facebook, LinkedIn, X, YouTube, and TikTok to connect with your ideal audience where they spend their time.",
        },
        {
          title: "Consistent Growth and Engagement",
          text: "From creatives to captions, we manage everything to grow your followers, increase interactions, and drive real business results through organic and paid efforts.",
        },
      ],
      ctaStyle: "bg-white border border-slate-350 text-slate-700 hover:bg-slate-50 shadow-sm",
    },
    seo: {
      title: "Get Found First with Powerful SEO Strategies",
      desc: "We help your website rank higher on search engines, attract quality traffic, and build long-term trust with both global and local audiences.",
      image: "/assets/images/search-engine-optimization.png",
      bullets: [
        {
          title: "Complete On Page and Off Page SEO",
          text: "From keyword research and content optimization to backlinks and technical fixes, we ensure your website is search engine friendly and ready to rank.",
        },
        {
          title: "Local SEO for Nearby Customers",
          text: "We optimize your business for local searches through Google Business Profile, map listings, and location based keywords to bring in more foot traffic and local leads.",
        },
      ],
      ctaStyle: "bg-white border border-slate-350 text-slate-700 hover:bg-slate-50 shadow-sm",
    },
  };

  const currentContent = content[activeTab as keyof typeof content];

  const handleDownload = () => {
    alert("Your marketing brochure download has been queued. Please check your email shortly!");
  };

  return (
    <section id="features" className="py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 sm:px-6 py-3 rounded-lg text-xs sm:text-sm font-bold border transition-all cursor-pointer w-full sm:w-auto sm:min-w-[200px] text-center ${
                activeTab === tab.id
                  ? "bg-[#4eb46f] border-[#4eb46f] text-white shadow-md shadow-green-500/10"
                  : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Display */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Visual Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="w-full max-w-sm aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-250 bg-slate-50 flex items-center justify-center">
                  <img
                    src={currentContent.image}
                    alt={currentContent.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column: Copywriting content */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                  {currentContent.title}
                </h4>
                <p className="text-sm sm:text-base text-slate-650 font-light leading-relaxed">
                  {currentContent.desc}
                </p>

                <ul className="space-y-4">
                  {currentContent.bullets.map((bullet, idx) => (
                    <li key={idx} className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#4eb46f] stroke-[3]" />
                        <h5 className="text-sm font-bold text-slate-900">{bullet.title}:</h5>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 font-light pl-6 leading-relaxed">
                        {bullet.text}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="pt-2">
                  <button
                    onClick={handleDownload}
                    className={`px-5 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer inline-flex items-center gap-2 ${currentContent.ctaStyle}`}
                  >
                    <ShieldCheck className="w-4.5 h-4.5" />
                    Download Brochure
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
