"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";

export interface HeroSectionProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  trustPoints?: string[];
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  highlight,
  subtitle,
  primaryCtaText = "Claim Free Growth Audit",
  primaryCtaHref = "/#contact",
  secondaryCtaText,
  secondaryCtaHref,
  trustPoints,
}) => {
  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8 text-center bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
        {badge && (
          <p className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
            {badge}
          </p>
        )}

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.14]">
          {highlight && title.includes(highlight) ? (
            <>
              {title.split(highlight)[0]}
              <span className="text-[#046BD2]">{highlight}</span>
              {title.split(highlight)[1]}
            </>
          ) : (
            title
          )}
        </h1>

        <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {primaryCtaText && (
            <Button
              href={primaryCtaHref}
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {primaryCtaText}
            </Button>
          )}

          {secondaryCtaText && secondaryCtaHref && (
            <Button
              href={secondaryCtaHref}
              variant="outline"
              size="lg"
            >
              {secondaryCtaText}
            </Button>
          )}
        </div>

        {/* Trust Points */}
        {trustPoints && trustPoints.length > 0 && (
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#046BD2]" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
