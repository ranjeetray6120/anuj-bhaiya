"use client";

import React from "react";
import { motion } from "framer-motion";

const marqueeItems = [
  "Google Ads (PMax & Search)",
  "Meta Advantage+ (FB & IG)",
  "4.8x Average Blended ROAS",
  "Conversion Rate Optimization",
  "Topical & Technical SEO",
  "D2C Revenue Scaling",
  "Server-Side GA4 & CAPI",
  "B2B High-Intent Lead Gen",
  "Official Google & Meta Partner",
  "₹300Cr+ Client Revenue Generated",
];

export default function MarqueeTicker() {
  // Duplicate array for seamless infinite loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full bg-slate-50/90 dark:bg-slate-900/90 border-y border-slate-200 dark:border-slate-800 py-3.5 sm:py-4 overflow-hidden select-none z-20 transition-colors">
      {/* Left and Right Fade Gradients */}
      <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
          className="flex items-center gap-4 sm:gap-6 flex-nowrap whitespace-nowrap cursor-default"
        >
          {duplicatedItems.map((label, idx) => (
            <div
              key={idx}
              className="flex items-center px-3.5 py-1 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-[#046BD2] dark:hover:border-[#168ED3] hover:text-[#046BD2] dark:hover:text-[#168ED3] transition-colors shadow-xs"
            >
              <span className="text-xs sm:text-sm font-semibold tracking-tight">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
