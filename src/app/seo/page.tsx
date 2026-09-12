"use client";

import Navbar from "@/components/Navbar";

import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

const seoServices = [
  {
    tag: "Technical",
    title: "Technical SEO & Architecture",
    desc: "Complete crawl budget optimization, server log analysis, site speed acceleration, and JavaScript rendering fixes to dominate Google indexing.",
  },
  {
    tag: "Content",
    title: "Entity & Topical Authority Optimization",
    desc: "Move beyond basic keywords. We build comprehensive semantic content clusters that establish undeniable subject matter authority.",
  },
  {
    tag: "Authority",
    title: "High-Tier Digital PR & Link Acquisition",
    desc: "Earn contextual backlinks from authoritative niche publications and media outlets that drive real referral traffic and trust.",
  },
  {
    tag: "E-Commerce",
    title: "E-Commerce Category & Product SEO",
    desc: "Optimize high-intent product collection pages, structured schema markup, and faceted navigation to capture buyers ready to convert.",
  },
  {
    tag: "Local",
    title: "Local SEO & Multi-Location Scaling",
    desc: "Dominate Google Maps 3-Pack rankings, localize landing pages, and optimize GMB profiles for maximum high-converting local walk-ins and inquiries.",
  },
  {
    tag: "Next-Gen",
    title: "AI Search Optimization (GEO & SGE)",
    desc: "Position your brand to be cited and recommended in Google AI Overviews, Perplexity AI, and conversational search engines.",
  },
];

const seoProcess = [
  { step: "01", title: "Comprehensive Deep Audit", desc: "Uncover technical blockers, indexing traps, and hidden keyword opportunities." },
  { step: "02", title: "Keyword & Intent Architecture", desc: "Map transactional and high-commercial search intent to scalable URL funnels." },
  { step: "03", title: "Content Sprint & Link Velocity", desc: "Deploy high-grade semantic content and execute white-hat outreach campaigns." },
  { step: "04", title: "Monitoring & Conversion CRO", desc: "Track ranking surges in GA4/GSC while optimizing on-page conversion rates." },
];

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section
          className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #168ed3 0%, #1a97db 50%, #1f9fe3 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto flex flex-col items-center gap-5 relative z-10"
          >

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Scale Your Organic Traffic &amp; Sales with{" "}
              <span className="text-[#FFDE59]">Predictable ROI</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              We engineer revenue-focused SEO campaigns that outrank competitors, build defensible domain authority, and turn organic search into your most profitable acquisition channel.
            </p>
            <div className="pt-2">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#contact"
                  className="inline-block bg-[#D82C5E] hover:bg-[#bf204d] !text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md shadow-lg transition-all duration-200 cursor-pointer"
                >
                  GET FREE SEO AUDIT
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                What Do Our SEO Services Include?
              </h2>
              <div className="mt-3 mx-auto w-14 h-1 bg-[#046BD2] rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {seoServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-slate-50 rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-[#046BD2]/50 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#046BD2] border border-blue-100 mb-4 group-hover:bg-[#046BD2] group-hover:text-white transition-colors">
                      {service.tag}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#046BD2] transition-colors">{service.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Our 4-Phase Organic Growth Framework
              </h2>
              <div className="mt-3 mx-auto w-14 h-1 bg-[#046BD2] rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seoProcess.map((p, idx) => (
                <motion.div
                  key={p.step}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-3 group"
                >
                  <span className="w-10 h-10 rounded-2xl bg-blue-50 text-[#046BD2] font-black text-sm flex items-center justify-center border border-blue-100 group-hover:bg-[#046BD2] group-hover:text-white transition-colors">
                    {p.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#046BD2] transition-colors">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
