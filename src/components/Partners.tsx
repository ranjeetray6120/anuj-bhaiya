"use client";

import React from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

interface PartnerCardProps {
  logoSrc: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  description: string;
}

const PartnerCard = ({ logoSrc, logoAlt, title, subtitle, description }: PartnerCardProps) => (
  <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 flex flex-col items-center text-center justify-between hover:border-slate-300 transition-colors">
    <div className="flex flex-col items-center gap-4">
      {/* Partner Logo */}
      <div className="h-14 flex items-center justify-center">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={180}
          height={48}
          className="h-10 w-auto object-contain"
        />
      </div>

      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-[#046BD2]">
          {subtitle}
        </p>
        <h3 className="text-base font-bold text-slate-900 mt-1">
          {title}
        </h3>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        {description}
      </p>
    </div>

    <div className="pt-6 mt-4 border-t border-slate-100 w-full flex justify-center">
      <Button
        href="/#contact"
        variant="outline"
        size="sm"
      >
        Talk to Certified Specialist
      </Button>
    </div>
  </div>
);

export default function Partners() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          badge="OFFICIAL AGENCY CREDENTIALS"
          title="Certified Partner Status Across Primary Ad Networks"
          highlight="Primary Ad Networks"
          description="We maintain direct partner tier status with Google, Meta, and Shopify for advanced beta features, representative support, and verified tracking."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <PartnerCard
            logoSrc="/images/partners/google-partner.svg"
            logoAlt="Official Google Partner"
            title="Google Premier Partner"
            subtitle="Google Certified Agency"
            description="Certified specialists strategically managing search, Performance Max, and YouTube ad funnels with direct partner representative support."
          />
          <PartnerCard
            logoSrc="/images/partners/meta-partner.svg"
            logoAlt="Official Meta Business Partner"
            title="Meta Business Partner"
            subtitle="Meta Certified Agency"
            description="Recognized media buyers deploying multi-lakh Advantage+ shopping campaigns, CAPI server gateways, and creative sprint systems."
          />
          <PartnerCard
            logoSrc="/images/partners/shopify-partner.svg"
            logoAlt="Shopify Official Partner"
            title="Shopify Partner"
            subtitle="E-Commerce Ecosystem"
            description="Accelerate direct-to-consumer sales with custom high-converting themes, speed optimization, and CRO checkouts."
          />
        </div>
      </div>
    </section>
  );
}
