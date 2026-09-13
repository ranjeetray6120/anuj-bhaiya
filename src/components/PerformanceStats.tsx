"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";


const servicesData = [
  {
    icon: (
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 transition-colors">
        {/* Official Google 4-Color G Logo */}
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17Z" fill="#4285F4"/>
          <path d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24Z" fill="#34A853"/>
          <path d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.16 0 9.97 0 12c0 2.03.45 3.84 1.25 5.42l4.03-3.15Z" fill="#FBBC05"/>
          <path d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98Z" fill="#EA4335"/>
        </svg>
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
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    icon: (
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 transition-colors">
        {/* Official Google Ads Logo */}
        <svg className="w-9 h-9" viewBox="0 0 256 230" fill="none" aria-hidden="true">
          <path
            fill="#FBBC04"
            d="M5.888 166.405L90.88 20.9c10.796 6.356 65.236 36.484 74.028 42.214L79.916 208.627c-9.295 12.28-85.804-23.587-74.028-42.23z"
          />
          <path
            fill="#4285F4"
            d="M250.084 166.402L165.092 20.906C153.21 1.132 127.62-6.054 106.601 5.625S79.182 42.462 91.064 63.119l84.992 145.514c11.882 19.765 37.473 26.95 58.492 15.272c20.1-11.68 27.418-37.73 15.536-57.486z"
          />
          <ellipse cx="42.664" cy="187.924" fill="#34A853" rx="42.664" ry="41.604" />
        </svg>
      </div>
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
    gradient: "from-amber-500/10 to-blue-500/10",
  },
  {
    icon: (
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 transition-colors">
        {/* Official Meta Infinity Logo */}
        <svg className="w-9 h-9" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="metaRealGrad" x1="0%" y1="50%" x2="100%" y2="50%">
              <stop offset="0%" stopColor="#0064E0"/>
              <stop offset="45%" stopColor="#0072F5"/>
              <stop offset="85%" stopColor="#0081FB"/>
              <stop offset="100%" stopColor="#0064E0"/>
            </linearGradient>
          </defs>
          <path fill="url(#metaRealGrad)" d="M23.6 7.6c-2.6 0-4.8 1.4-6.4 3.4-1.6-2-3.8-3.4-6.4-3.4C6 7.6 2 11.6 2 16.8c0 5.2 4 9.2 8.8 9.2 2.6 0 4.8-1.4 6.4-3.4 1.6 2 3.8 3.4 6.4 3.4 4.8 0 8.8-4 8.8-9.2 0-5.2-4-9.2-8.8-9.2zm-12.8 15c-3.1 0-5.4-2.5-5.4-5.8s2.3-5.8 5.4-5.8c2.2 0 4.2 1.8 5.4 4.6-1.2 2.8-3.2 7-5.4 7zm12.8 0c-2.2 0-4.2-4.2-5.4-7 1.2-2.8 3.2-4.6 5.4-4.6 3.1 0 5.4 2.5 5.4 5.8s-2.3 5.8-5.4 5.8z"/>
        </svg>
      </div>
    ),
    title: "Meta Ads",
    desc: "From Generating leads from the businesses to Generating sales at better ROAS for your business. We exactly know how meta ecosystem works now.",
    items: [
      "Ads Creation & Brainstorming",
      "Facebook Ads",
      "Instagram Ads",
    ],
    href: "/meta-ads",
    gradient: "from-blue-600/10 to-sky-500/10",
  },
  {
    icon: (
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-xl bg-slate-50 border border-slate-200 transition-colors">
        {/* Full-Stack Web Development & CRO Icon */}
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M16 18L22 12L16 6" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 6L2 12L8 18" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 4L10 20" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    title: "Development",
    desc: "We understand the Concept of CRO for Landing Pages. We know How to make a website SEO Friendly. Get our Web Development Services. We create websites and Landing Pages that can generate ROI.",
    items: [
      "High Converting Landing Page",
      "SEO Friendly Websites.",
      "Custom Coded Websites",
    ],
    href: "/development",
    gradient: "from-amber-500/10 to-orange-500/10",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function PerformanceStats() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-white border-t border-slate-100" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14">
          <SectionHeader
            eyebrow="GROWTH SERVICES"
            title="Engineered for Ecommerce &"
            highlight="Lead Generation"
            subtitle="Honest, 100% transparent, and data-driven performance marketing strategies."
            align="center"
          />
        </div>

        {/* 4 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((s, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between transition-colors hover:border-[#046BD2]"
            >
              <div>
                {/* Icon Container */}
                <div className="mb-5">
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 text-center mb-2 tracking-tight">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 text-center leading-relaxed mb-5">
                  {s.desc}
                </p>

                {/* Deliverables Checklist */}
                <div className="border-t border-slate-100 pt-4 mb-5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 text-left">
                    Capabilities
                  </p>
                  <ul className="space-y-1.5">
                    {s.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                      >
                        <span className="text-[#046BD2] font-bold text-xs">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <div className="text-center pt-3 border-t border-slate-100">
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046BD2] hover:text-[#0356A8] uppercase tracking-wider transition-colors py-1 group/link"
                >
                  Explore Service
                  <span className="transition-transform group-hover/link:translate-x-0.5 duration-150">
                    →
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
