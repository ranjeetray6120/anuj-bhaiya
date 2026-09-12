"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";


const servicesData = [
  {
    icon: (
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-white border border-slate-200/80 shadow-md group-hover:shadow-lg transition-all">
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
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-white border border-slate-200/80 shadow-md group-hover:shadow-lg transition-all">
        {/* Official Google Ads Logo */}
        <svg className="w-9 h-9" viewBox="0 0 192 192" fill="none" aria-hidden="true">
          <path d="M33.88 120.47 78.43 43.3c7.22-12.5 23.23-16.78 35.73-9.56 12.5 7.22 16.78 23.23 9.56 35.73L79.17 146.64c-7.22 12.5-23.23 16.78-35.73 9.56-12.5-7.22-16.78-23.23-9.56-35.73z" fill="#FBBC04"/>
          <path d="M149.88 43.3c12.5-7.22 28.51-2.94 35.73 9.56 7.22 12.5 2.94 28.51-9.56 35.73l-44.55 77.17c-7.22 12.5-23.23 16.78-35.73 9.56-12.5-7.22-16.78-23.23-9.56-35.73L149.88 43.3z" fill="#4285F4"/>
          <circle cx="56.57" cy="133.58" r="26.15" fill="#34A853"/>
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
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-white border border-slate-200/80 shadow-md group-hover:shadow-lg transition-all">
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
      <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-white border border-slate-200/80 shadow-md group-hover:shadow-lg transition-all">
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
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden" id="services">
      {/* Decorative background horizontal gradient strip */}
      <div
        className="absolute top-1/2 left-0 right-0 h-48 -translate-y-1/2 pointer-events-none -z-0 opacity-90 hidden lg:block"
        style={{
          background: "linear-gradient(90deg, #168ed3 0%, #1a97db 50%, #1f9fe3 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading with Framer Motion reveal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 leading-tight">
            Our ROI driven Services for both Ecommerce as well as{" "}
            <span className="text-[#046BD2]">Lead Generation Businesses!</span>
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 font-medium mt-3">
            Honest, 100% transparency and Data Driven Approach is how we operate.
          </p>
        </motion.div>

        {/* 4 Cards Grid with Staggered Entrance & 3D Hover Lift */}
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
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl border border-slate-200/80 p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              {/* Top Accent Gradient Line on Hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div>
                {/* Icon Container */}
                <div className="mb-5 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-extrabold text-slate-900 text-center mb-3 group-hover:text-[#046BD2] transition-colors">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-600 text-center leading-relaxed mb-6">
                  {s.desc}
                </p>

                {/* Checklist Section */}
                <div className="border-t border-slate-100 pt-4 mb-6">
                  <p className="text-xs font-bold text-slate-800 mb-3 text-left">
                    Start with...
                  </p>
                  <ul className="space-y-2">
                    {s.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                      >
                        <span className="w-4 h-4 rounded-full bg-blue-100 text-[#046BD2] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link with Animated Arrow */}
              <div className="text-center pt-2 border-t border-slate-100">
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-900 hover:text-[#046BD2] uppercase tracking-wider transition-colors py-1 group/link"
                >
                  Learn More
                  <span className="transition-transform group-hover/link:translate-x-1 duration-200">
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
