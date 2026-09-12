"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";

const resultsData = [
  {
    brand: "DOON DEFENCE DREAMERS",
    sub: "Pvt. Ltd.",
    conversions: "+ 644%",
    cost: "- 45%",
  },
  {
    brand: "URBAN PITARA",
    sub: "E-Commerce",
    conversions: "+ 458%",
    cost: "- 33%",
  },
  {
    brand: "COORG WILDERNESS",
    sub: "Resort & Spa",
    conversions: "+ 482%",
    cost: "- 69%",
  },
  {
    brand: "EduQuadz",
    sub: "EdTech Platform",
    conversions: "+ 950%",
    cost: "- 42%",
  },
];

const heroSentences = [
  {
    prefix: "Campaigns designed to turn clicks into ",
    highlight: "profitable growth.",
  },
  {
    prefix: "Data-driven strategies built to maximize your ",
    highlight: "marketing ROI.",
  },
  {
    prefix: "Scale your business with high-converting ",
    highlight: "paid ad campaigns.",
  },
  {
    prefix: "Transform website visitors into ",
    highlight: "loyal paying customers.",
  },
  {
    prefix: "Performance marketing engineered for ",
    highlight: "predictable scaling.",
  },
];

export default function Hero() {
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentSentence = heroSentences[sentenceIndex];
  const totalLength =
    currentSentence.prefix.length + currentSentence.highlight.length;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < totalLength) {
      // Much slower, very deliberate and clear typing
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 125);
    } else if (!isDeleting && charIndex === totalLength) {
      // Long pause to read comfortably
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 4500);
    } else if (isDeleting && charIndex > 0) {
      // Smooth, slower backspacing
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (isDeleting && charIndex === 0) {
      // Pause before starting the next sentence
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setSentenceIndex((prev) => (prev + 1) % heroSentences.length);
      }, 800);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, totalLength]);

  const currentPrefix = currentSentence.prefix.slice(
    0,
    Math.min(charIndex, currentSentence.prefix.length)
  );
  const currentHighlight =
    charIndex > currentSentence.prefix.length
      ? currentSentence.highlight.slice(
          0,
          charIndex - currentSentence.prefix.length
        )
      : "";

  return (
    <section
      className="relative min-h-[92vh] flex items-center px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 pb-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #168ed3 0%, #1a97db 50%, #1f9fe3 100%)",
      }}
      id="home"
    >
      {/* Background subtle diagonal gradient rays & glowing orbs */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#FFDE59]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
        {/* Left Column: Headings, Trust Social Proof, Stats & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-6 flex flex-col gap-6 text-center sm:text-left"
        >
       

          <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-extrabold text-white leading-[1.18] tracking-tight min-h-[4.5rem] sm:min-h-[6rem] lg:min-h-[7rem]">
            <span>{currentPrefix}</span>
            {currentHighlight && (
              <span className="text-[#FFDE59] inline font-extrabold drop-shadow-xs">
                {currentHighlight}
              </span>
            )}
            <span className="inline-block w-[3px] h-[0.95em] bg-[#FFDE59] ml-1 align-baseline animate-pulse shadow-[0_0_8px_#FFDE59]" />
          </h1>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-xl mx-auto sm:mx-0">
            AdForge is a high-performance marketing agency for Google Ads, Meta Ads, SEO, and CRO funnels. We plan, launch, track, and scale campaigns with one single objective: <strong>maximum ROI on every rupee spent.</strong>
          </p>

          {/* Action Buttons */}
          <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/#contact"
                className="inline-block bg-[#D82C5E] hover:bg-[#c02250] !text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200 hover:shadow-xl cursor-pointer"
              >
                GET A FREE AUDIT →
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="#services"
                className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-xl backdrop-blur-md border border-white/30 transition-all duration-200 cursor-pointer"
              >
                EXPLORE SERVICES
              </Link>
            </motion.div>
          </div>

          {/* Social Proof Trust Row with Avatars */}
          <div className="pt-2 flex flex-col sm:flex-row items-center sm:items-center gap-3 text-center sm:text-left">
            {/* Avatar Stack */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex -space-x-2.5 overflow-hidden">
                <Image
                  src="/images/avatars/avatar-1.jpg"
                  alt="Client Founder"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-white/90 shadow-md"
                />
                <Image
                  src="/images/avatars/avatar-2.jpg"
                  alt="Client Founder"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-white/90 shadow-md"
                />
                <Image
                  src="/images/avatars/avatar-3.jpg"
                  alt="Client Founder"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-white/90 shadow-md"
                />
                <Image
                  src="/images/avatars/avatar-4.jpg"
                  alt="Client Founder"
                  width={36}
                  height={36}
                  className="w-9 h-9 rounded-full object-cover ring-2 ring-white/90 shadow-md"
                />
              </div>

              {/* Divider */}
              <div className="w-px h-7 bg-white/30 mx-1" />

              {/* Star Rating */}
              <div className="flex flex-col items-center gap-0.5">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-[#FFDE59]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-[10px] font-extrabold text-white leading-none">5.0 Rating</span>
              </div>
            </div>

            <p className="text-xs text-white/90 font-medium leading-snug max-w-xs">
              Trusted by <strong>100+ Growth Brands</strong> for clear reporting, sharper targeting &amp; verified attribution.
            </p>
          </div>

          {/* 3 Quick Hero Stats */}
          <div className="pt-3 grid grid-cols-3 gap-3 border-t border-white/20 max-w-lg">
            <div className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-black text-white">
                <AnimatedCounter value="8+" duration={2} />
              </p>
              <p className="text-[10px] sm:text-xs text-white/80 font-medium">Years Active</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-black text-white">
                <AnimatedCounter value="1000+" duration={2.2} />
              </p>
              <p className="text-[10px] sm:text-xs text-white/80 font-medium">Campaigns Run</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-xl sm:text-2xl font-black text-white">
                <AnimatedCounter value="92%" duration={2} />
              </p>
              <p className="text-[10px] sm:text-xs text-white/80 font-medium">Retention Rate</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Real Results Card + Floating Live Dashboard Widgets */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-md sm:max-w-xl">
            {/* Upward 3D Golden Growth Arrow with Floating Animation */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:block absolute -top-10 -right-6 w-52 sm:w-80 h-72 sm:h-88 pointer-events-none select-none z-0 opacity-90"
              aria-hidden="true"
            >
              <svg
                viewBox="0 0 300 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-2xl"
                aria-hidden="true"
              >
                {/* 3D Arrow Shadow/Bevel */}
                <path
                  d="M100 320 L270 40 L230 40 L285 20 L295 80 L260 60 L140 330 Z"
                  fill="#D4A017"
                  opacity="0.6"
                />
                {/* Main Arrow Body */}
                <path
                  d="M110 310 L260 50 L220 50 L280 25 L290 85 L250 65 L130 320 Z"
                  fill="url(#goldGradientHeroRefined)"
                />
                <defs>
                  <linearGradient id="goldGradientHeroRefined" x1="100" y1="320" x2="280" y2="25" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5D061" />
                    <stop offset="0.5" stopColor="#E6B800" />
                    <stop offset="1" stopColor="#FFDE59" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>

            {/* Results Table Card with Framer Motion Glass Entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 bg-white/20 backdrop-blur-xl rounded-3xl p-4 sm:p-6 border border-white/35 shadow-2xl"
            >
              {/* Card Header with Real Client Results and Live KPI Badge */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/20">
                <span
                  className="text-lg sm:text-xl text-white font-serif italic font-bold tracking-wide drop-shadow-sm"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  Real Client Results
                </span>

                {/* KPI Pill */}
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold text-slate-800">
                    Avg. <strong className="text-emerald-600 font-extrabold"><AnimatedCounter value="4.8x ROAS" duration={2} /></strong>
                  </span>
                </div>
              </div>

              {/* Table Column Headers */}
              <div className="grid grid-cols-12 gap-1.5 sm:gap-2.5 mb-2.5">
                <div className="col-span-5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-white/80 pl-1 block">
                    Brand / Industry
                  </span>
                </div>
                <div className="col-span-3 bg-white/95 backdrop-blur-sm rounded-xl py-1.5 px-1 text-center shadow-xs">
                  <span className="text-[9px] sm:text-xs font-extrabold text-slate-900 tracking-tight block">
                    Conversions
                  </span>
                </div>
                <div className="col-span-4 bg-white/95 backdrop-blur-sm rounded-xl py-1.5 px-1 text-center shadow-xs">
                  <span className="text-[9px] sm:text-xs font-extrabold text-slate-900 tracking-tight block">
                    Cost/Conv.
                  </span>
                </div>
              </div>

              {/* Data Rows with Stagger & Card Hover Animation */}
              <div className="flex flex-col gap-2">
                {resultsData.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 + idx * 0.12 }}
                    whileHover={{ scale: 1.025, y: -2 }}
                    className="grid grid-cols-12 gap-1.5 sm:gap-2.5 items-center transition-all cursor-default"
                  >
                    {/* Brand Badge */}
                    <div className="col-span-5 bg-white rounded-xl p-2 sm:p-2.5 shadow-sm border border-slate-100 min-h-[46px] sm:min-h-[54px] flex flex-col justify-center transition-all hover:shadow-md">
                      <p className="text-[8px] sm:text-[11px] font-extrabold text-slate-800 uppercase tracking-tight truncate leading-tight">
                        {item.brand}
                      </p>
                      <p className="text-[7px] sm:text-[9px] text-slate-500 font-medium truncate">
                        {item.sub}
                      </p>
                    </div>

                    {/* Conversion Increase Badge with Animated Number */}
                    <div className="col-span-3 bg-white rounded-xl py-2 sm:py-2.5 px-1 text-center shadow-sm border border-slate-100 min-h-[46px] sm:min-h-[54px] flex items-center justify-center hover:border-emerald-200 transition-all">
                      <span className="text-xs sm:text-base font-extrabold text-[#16a34a] tracking-tight">
                        <AnimatedCounter value={item.conversions} delay={0.4 + idx * 0.1} duration={1.8} />
                      </span>
                    </div>

                    {/* Cost Reduction Badge with Animated Number */}
                    <div className="col-span-4 bg-white rounded-xl py-2 sm:py-2.5 px-1 text-center shadow-sm border border-slate-100 min-h-[46px] sm:min-h-[54px] flex items-center justify-center hover:border-rose-200 transition-all">
                      <span className="text-xs sm:text-base font-extrabold text-[#dc2626] tracking-tight">
                        <AnimatedCounter value={item.cost} delay={0.4 + idx * 0.1} duration={1.8} />
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Live Growth Status Bar */}
              <div className="mt-3 pt-3 border-t border-white/20 flex items-center justify-between text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <div className="flex items-end gap-0.5 h-3.5">
                    <span className="w-1 bg-emerald-400 rounded-full h-2 animate-pulse" />
                    <span className="w-1 bg-emerald-400 rounded-full h-3 animate-pulse delay-75" />
                    <span className="w-1 bg-[#FFDE59] rounded-full h-2.5 animate-pulse delay-150" />
                    <span className="w-1 bg-emerald-400 rounded-full h-3.5 animate-pulse delay-300" />
                  </div>
                  <span className="text-[11px] font-bold text-white tracking-wide">
                    Live Active Scaling
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-white/80">
                  Verified GA4 &amp; CAPI Data
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
