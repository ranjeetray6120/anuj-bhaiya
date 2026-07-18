"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // Open first by default

  const faqs = [
    {
      q: "What services do you offer at Aetheris Digital?",
      a: "We offer complete digital marketing services like SEO, Google Ads, Facebook and Instagram Ads, LinkedIn Ads, Social Media Management, and Website Designing. Everything is planned according to your business goals.",
    },
    {
      q: "How can digital marketing help my business?",
      a: "Businesses can increase their audience visibility with the use of digital marketing. A seasoned digital marketing agency constantly ensures that the correct people see your brand in order to obtain high-quality leads.",
    },
    {
      q: "How do you determine the right marketing strategy for my business?",
      a: "In order to create a proper marketing statistic, we must do market research. We will begin targeting and businessing your custom audience after studying your competitors’ techniques. We will also use our advanced digital marketing technologies to leverage your competitors’ custom audiences.",
    },
    {
      q: "How long does it take to see results from digital marketing?",
      a: "It is entirely dependent on the services you choose. SEO typically takes three to six months, although it may take longer or shorter depending on the competition for the keyword. While social networking takes time and effort, paid advertisements yield results instantly.",
    },
    {
      q: "What makes your agency different from others?",
      a: "We have every option: a company, a training institution, and a freelance digital marketer. These services are all incredibly affordable. We work with businesses of all sizes, concentrating on giving them a strong return on investment.",
    },
    {
      q: "What budget do I need for digital marketing?",
      a: "The purpose and niche of the firm determine the budget. What precisely are you looking for? We work with companies of all sizes, thus the budget should be adjusted appropriately.",
    },
    {
      q: "How do I track the success of my campaigns?",
      a: "To make our campaign effective, we concentrate on the KPI, and these matrices aid in campaign optimisation, retargeting, funnel creation, and user data collection.",
    },
  ];

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h3>
          <p className="text-slate-500 text-sm font-light">
            Find clear answers to the most common questions about our digital marketing services, process, and how we help your business grow online.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-1.5 border-t border-slate-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-b border-slate-200 overflow-hidden text-left"
              >
                <button
                  onClick={() => handleToggle(idx)}
                  className="w-full text-left py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-800 group-hover:text-[#4eb46f] transition-colors leading-tight">
                    {faq.q}
                  </span>
                  <div className="text-[#4eb46f] flex-shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="pb-4 text-xs sm:text-sm text-slate-500 leading-relaxed font-light pl-1">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Footer Contact Trigger */}
        <div className="text-center mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-300 hover:border-[#4eb46f] hover:text-[#4eb46f] text-xs font-bold text-slate-600 rounded-lg transition-colors cursor-pointer"
          >
            Have More Questions?
          </a>
        </div>

      </div>
    </section>
  );
}
