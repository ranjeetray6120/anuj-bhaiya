"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, Check } from "lucide-react";

const resultsData = [
  {
    brand: "Doon Defence Dreamers",
    industry: "Education & Coaching",
    conversions: "+644%",
    cost: "-45%",
  },
  {
    brand: "Urban Pitara",
    industry: "E-Commerce & D2C",
    conversions: "+458%",
    cost: "-33%",
  },
  {
    brand: "Coorg Wilderness",
    industry: "Luxury Hospitality",
    conversions: "+482%",
    cost: "-28%",
  },
];

const heroSentences = [
  {
    prefix: "Scale Profitable Revenue with ",
    highlight: "Predictable ROAS.",
  },
  {
    prefix: "We Structure Google & Meta Ads That ",
    highlight: "Lower Customer CPA.",
  },
  {
    prefix: "Data-Driven Performance Marketing for ",
    highlight: "Ambitious Brands.",
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
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 90);
    } else if (!isDeleting && charIndex === totalLength) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 3500);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setSentenceIndex((prev) => (prev + 1) % heroSentences.length);
      }, 500);
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
      className="relative min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-12 pt-24 sm:pt-28 pb-16 bg-white border-b border-slate-200 overflow-hidden"
      id="home"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Heading, Supporting Message, CTAs, Proof */}
        <div className="lg:col-span-6 flex flex-col gap-6 text-left">
          <p className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
            PERFORMANCE MARKETING &amp; DIGITAL GROWTH
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 leading-[1.12] tracking-tight min-h-[5.5rem] sm:min-h-[6.5rem]">
            <span>{currentPrefix}</span>
            {currentHighlight && (
              <span className="text-[#046BD2]">
                {currentHighlight}
              </span>
            )}
            <span className="inline-block w-[2.5px] h-[0.9em] bg-[#046BD2] ml-1 align-baseline animate-pulse" />
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
            AdForge Tech engineers high-converting paid media funnels across Google Ads, Meta Ads, and Technical SEO with one primary objective: <strong className="text-slate-900 font-semibold">measurable unit economics and bottom-line return on ad spend.</strong>
          </p>

          {/* Action Buttons */}
          <div className="pt-1 flex flex-wrap items-center gap-3.5">
            <Button
              href="/#contact"
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Claim Free Growth Audit
            </Button>

            <Button
              href="#services"
              variant="outline"
              size="lg"
            >
              Explore Services
            </Button>
          </div>

          {/* Social Proof Trust Row with Avatars */}
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex -space-x-2 overflow-hidden">
                <Image
                  src="/images/avatars/avatar-1.jpg"
                  alt="Client Founder"
                  width={34}
                  height={34}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                />
                <Image
                  src="/images/avatars/avatar-2.jpg"
                  alt="Client Founder"
                  width={34}
                  height={34}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                />
                <Image
                  src="/images/avatars/avatar-3.jpg"
                  alt="Client Founder"
                  width={34}
                  height={34}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                />
                <Image
                  src="/images/avatars/avatar-4.jpg"
                  alt="Client Founder"
                  width={34}
                  height={34}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-white"
                />
              </div>

              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-500 leading-snug max-w-xs">
              Trusted by <strong className="text-slate-800">100+ scaling brands</strong> for verified attribution and profitable ROAS.
            </p>
          </div>

          {/* 3 Quick Hero Stats */}
          <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-100 max-w-lg">
            <div>
              <p className="text-2xl font-black text-slate-900">
                <AnimatedCounter value="8+" duration={2} />
              </p>
              <p className="text-xs text-slate-500 font-medium">Years Active</p>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900">
                <AnimatedCounter value="1000+" duration={2} />
              </p>
              <p className="text-xs text-slate-500 font-medium">Campaigns Run</p>
            </div>
            <div>
              <p className="text-2xl font-black text-[#046BD2]">
                <AnimatedCounter value="92%" duration={2} />
              </p>
              <p className="text-xs text-slate-500 font-medium">Client Retention</p>
            </div>
          </div>
        </div>

        {/* Right Column: Grounded Verified Performance Card */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-lg bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-7 text-left">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#046BD2]">
                  Verified Account Benchmarks
                </span>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Real Performance Metrics
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                  Avg. 4.8x ROAS
                </span>
              </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-12 gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mt-4 mb-2 px-3">
              <span className="col-span-5">Client / Industry</span>
              <span className="col-span-4 text-right">Conversions</span>
              <span className="col-span-3 text-right">Cost / CPA</span>
            </div>

            {/* Rows */}
            <div className="space-y-2">
              {resultsData.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 gap-2 items-center bg-white p-3.5 rounded-lg border border-slate-200/80 text-sm"
                >
                  <div className="col-span-5">
                    <p className="font-bold text-slate-900 truncate text-xs sm:text-sm">
                      {item.brand}
                    </p>
                    <p className="text-[11px] text-slate-500 truncate">
                      {item.industry}
                    </p>
                  </div>
                  <div className="col-span-4 text-right">
                    <span className="font-bold text-emerald-700 text-xs sm:text-sm">
                      {item.conversions}
                    </span>
                  </div>
                  <div className="col-span-3 text-right">
                    <span className="font-bold text-[#046BD2] text-xs sm:text-sm">
                      {item.cost}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Trust Note */}
            <div className="mt-4 pt-3.5 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified GA4 &amp; Server-Side CAPI</span>
              </span>
              <span className="font-medium text-slate-700">60-Day Scaling Period</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
