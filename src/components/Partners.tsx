"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";


interface PartnerCardProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  delay: number;
}

const PartnerCard = ({ logoSrc, logoAlt, title, subtitle, description, accentColor, delay }: PartnerCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -6, scale: 1.02 }}
    className="bg-white rounded-3xl border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 flex flex-col items-center text-center gap-4 group relative overflow-hidden"
  >
    {/* Partner Logo Badge */}
    <div className="h-16 flex items-center justify-center p-2 bg-slate-50 border border-slate-100 rounded-2xl w-full max-w-[200px] shadow-xs group-hover:scale-105 transition-transform">
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={180}
        height={50}
        className="h-10 w-auto object-contain"
      />
    </div>

    <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${accentColor}`}>
      {subtitle}
    </span>
    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight group-hover:text-[#168ed3] transition-colors">
      {title}
    </h3>
    <div className="w-10 h-0.5 bg-slate-200 rounded-full group-hover:w-16 group-hover:bg-[#168ed3] transition-all duration-300" />
    <p className="text-xs text-slate-600 leading-relaxed flex-1">{description}</p>
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full">
      <Link
        href="/#contact"
        className="mt-1 inline-block w-full sm:w-auto bg-slate-900 !text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#168ed3] transition-colors duration-200 uppercase tracking-wider shadow-sm cursor-pointer text-center"
      >
        Talk to Us
      </Link>
    </motion.div>
  </motion.div>
);

export default function Partners() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold text-slate-900 tracking-tight">Our Official Partnerships</h2>
          <div className="mt-3 mx-auto w-12 h-1 bg-[#168ed3] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <PartnerCard
            logoSrc="/images/partners/google-partner.svg"
            logoAlt="Official Google Partner"
            title="LEADING GOOGLE PARTNER"
            subtitle="Google Official Partner"
            description="Our Google-certified, award-winning specialists strategically plan and execute your PMax & Search campaigns for maximum ROI."
            accentColor="bg-blue-100 text-blue-700"
            delay={0.1}
          />
          <PartnerCard
            logoSrc="/images/partners/meta-partner.svg"
            logoAlt="Official Meta Business Partner"
            title="LEADING META PARTNER"
            subtitle="Meta Business Partner"
            description="Get your accounts managed by recognized media buyers who spend big and deploy high-converting Advantage+ funnels."
            accentColor="bg-indigo-100 text-indigo-700"
            delay={0.2}
          />
          <PartnerCard
            logoSrc="/images/partners/shopify-partner.svg"
            logoAlt="Shopify Official Partner"
            title="SHOPIFY COMMERCE PARTNER"
            subtitle="Shopify Growth Partner"
            description="Accelerate direct-to-consumer sales with custom high-converting themes, speed optimization, and CRO checkouts."
            accentColor="bg-emerald-100 text-emerald-800"
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
