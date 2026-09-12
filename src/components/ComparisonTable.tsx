"use client";

import React from "react";
import { motion } from "framer-motion";


const utAdvantages = [
  "Total Inhouse Team & Dedicated Strategists",
  "Strategy session & extensive pre-campaign research",
  "Official Google & Meta Partner agency credentials",
  "In depth customisation for individual client requirements – no 'one size fits all' approach",
  "Top, Certified Team that understands scalable unit economics",
  "Unbeatable performance milestones",
  "No hidden fees. 100% data & account ownership is yours",
  "Let us focus on what we do best, so you can focus on scale",
];

const otherNegatives = [
  "Outsourcing of work to third-party freelancers",
  "Standard 'package' approach with every service",
  "Churn & burn approach to client acquisition",
  "Basic template audit and generic implementation",
  "Untrained and intern level execution",
  "Slow or confusing communication with clients",
  "No performance milestone model when it comes to SEO",
  "Hidden fees and holding data hostage on their own accounts",
  "No strategic level implementation – old school tactics",
];

const CheckIcon = () => (
  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
    ✓
  </span>
);

const XIcon = () => (
  <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5 shadow-xs">
    ✕
  </span>
);

export default function ComparisonTable() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 tracking-tight">Why Choose Us?</h2>
          <div className="mt-3 mx-auto w-12 h-1 bg-[#168ed3] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white">
          {/* AdForge Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 sm:p-9 relative"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <span className="inline-block w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-xl font-black text-slate-900 tracking-tight">AdForge Agency</h3>
              <span className="ml-auto text-[10px] font-extrabold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                Guaranteed
              </span>
            </div>
            <ul className="space-y-3.5">
              {utAdvantages.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckIcon />
                  <span className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug group-hover:text-[#168ed3] transition-colors">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* VS Divider */}
          <div className="bg-slate-900 flex items-center justify-center px-6 py-4 md:py-0 relative">
            <span className="text-white font-black text-2xl tracking-widest select-none drop-shadow-md">vs.</span>
          </div>

          {/* Other Agencies Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-rose-50/40 p-6 sm:p-9"
          >
            <div className="flex items-center gap-2.5 mb-6">
              <span className="inline-block w-3 h-3 rounded-full bg-rose-400" />
              <h3 className="text-xl font-bold text-slate-700 tracking-tight">Other Agencies</h3>
            </div>
            <ul className="space-y-3.5">
              {otherNegatives.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <XIcon />
                  <span className="text-xs sm:text-[13px] text-slate-600 leading-snug">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
