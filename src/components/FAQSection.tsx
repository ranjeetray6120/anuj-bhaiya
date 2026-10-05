"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

export const defaultFaqs: FAQItem[] = [
  {
    q: "What services do you offer at AdForge Tech?",
    a: "We offer complete digital marketing services like SEO, Google Ads, Facebook and Instagram Ads, LinkedIn Ads, Social Media Management, and Website Designing. Everything is planned and engineered according to your specific business goals.",
  },
  {
    q: "How can digital marketing help my business?",
    a: "Digital marketing connects your business directly with high-intent buyers at the exact moment they are looking for your services or products. By combining targeted paid ads (Google & Meta) with sustainable organic search (SEO), we build scalable customer acquisition funnels that lower your Customer Acquisition Cost (CAC) and increase customer Lifetime Value (LTV).",
  },
  {
    q: "How do you determine the right marketing strategy for my business?",
    a: "We begin with a comprehensive Growth Audit where our senior team analyzes your unit economics, current conversion funnel, competitor landscape, and historical ad performance. Based on your margins and growth targets, we engineer a tailored 90-day scaling roadmap that prioritizes the highest ROI channels first.",
  },
  {
    q: "How long does it take to see results from digital marketing?",
    a: "Paid acquisition channels like Google Ads and Meta Ads typically start generating qualified traffic and conversions within the first 7 to 14 days as we optimize creative hooks and audience signals. Organic SEO and authority building usually demonstrate significant traction within 60 to 90 days. We provide transparent weekly sprint reports so you always know your exact trajectory.",
  },
  {
    q: "What makes your agency different from others?",
    a: "Unlike traditional agencies that pass client accounts to junior interns and report on vanity impressions, AdForge Tech assigns senior growth engineers and certified media buyers directly to your business. We focus 100% on net revenue growth, verified unit economics, and transparent server-side attribution.",
  },
  {
    q: "What budget do I need for digital marketing?",
    a: "Budgets are customized based on your business stage, industry competition, and target revenue milestones. We typically work with scaling brands investing anywhere from ₹50,000 to ₹25,00,000+ per month in media spend. More importantly, we establish strict target ROAS (Return on Ad Spend) and contribution margin thresholds before increasing budgets.",
  },
  {
    q: "How do I track the success of my campaigns?",
    a: "We provide full attribution transparency. We set up server-side Meta Conversions API (CAPI), Google Analytics 4 (GA4), and live 24/7 custom Looker Studio dashboards. You will have real-time visibility into ad spend, cost per lead (CPL), blended customer acquisition cost (CAC), return on ad spend (ROAS), and net revenue generated.",
  },
];

interface FAQSectionProps {
  faqs?: FAQItem[];
  id?: string;
  badge?: string;
  title?: string;
  description?: string;
  className?: string;
}

export default function FAQSection({
  faqs = defaultFaqs,
  id = "faqs",
  badge = "FREQUENTLY ASKED QUESTIONS",
  title = "Frequently Asked Questions",
  description = "Find Clear Answers To The Most Common Questions About Our Digital Marketing Services, Process, And How We Help Your Business Grow Online.",
  className = "",
}: FAQSectionProps) {
  // First item open by default as shown in reference design
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id={id}
      aria-label="Frequently Asked Questions"
      className={`py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white dark:bg-slate-950 transition-colors border-t border-slate-200/70 dark:border-slate-800/80 ${className}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <SectionHeader
          badge={badge}
          title={title}
          highlight="Questions"
          description={description}
        />

        {/* Accordion List */}
        <div className="divide-y divide-slate-200 dark:divide-slate-800 border-t border-b border-slate-200 dark:border-slate-800">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <div
                key={faq.q}
                className="py-5 sm:py-6 transition-colors duration-150"
              >
                <button
                  id={headerId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-start gap-4 text-left group cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-[#046BD2] rounded-lg"
                >
                  {/* Left Indicator (+ / -) */}
                  <span
                    className={`mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-md text-slate-700 dark:text-slate-300 font-bold shrink-0 transition-colors duration-200 ${
                      isOpen
                        ? "text-[#046BD2] dark:text-[#38BDF8]"
                        : "group-hover:text-[#046BD2] dark:group-hover:text-[#38BDF8]"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
                    ) : (
                      <Plus className="w-5 h-5 stroke-[2.5]" aria-hidden="true" />
                    )}
                  </span>

                  {/* Question Text */}
                  <span
                    className={`text-base sm:text-lg font-bold transition-colors duration-150 leading-snug flex-1 ${
                      isOpen
                        ? "text-[#046BD2] dark:text-[#38BDF8]"
                        : "text-slate-900 dark:text-white group-hover:text-[#046BD2] dark:group-hover:text-[#38BDF8]"
                    }`}
                  >
                    {faq.q}
                  </span>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="mt-3 pl-10 sm:pl-10 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed animate-fadeIn"
                  >
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
