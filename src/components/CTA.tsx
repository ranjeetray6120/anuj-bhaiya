"use client";

import React from "react";
import { motion } from "framer-motion";
import { LeadForm } from "@/components/adforge/LeadForm";
import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export default function CTA() {
  const deliverables = [
    "Full Google Ads & Meta Ads Account Audit",
    "Competitor Ad Spy & Creative Benchmark Report",
    "Conversion Rate Optimization (CRO) Quick Wins",
    "Custom 90-Day Scalability Roadmap",
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column – Value Proposition & Trust Badges */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6 text-left"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
              CONFIDENTIAL GROWTH AUDIT
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Ready to Scale Your Brand with{" "}
              <span className="text-[#046BD2]">Predictable ROI?</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Get a comprehensive 1-on-1 Growth Audit &amp; Paid Media Roadmap from
              our certified performance specialists. We analyze your ads, funnels,
              and unit economics — completely free.
            </p>

            {/* Checklist of deliverables */}
            <div className="space-y-3.5 pt-1">
              {deliverables.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-100 text-[#046BD2] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-800">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>No pushy sales reps. Direct discussion with a senior media buyer.</span>
            </div>
          </motion.div>

          {/* Right Column – Instant Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <LeadForm
              source="Homepage Free Audit"
              title="Claim Your Free Growth Audit"
              subtitle="Fill in your details below and our team will get back to you within 2 hours."
              variant="compact"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
