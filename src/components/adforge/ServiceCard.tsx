"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export interface ServiceCardProps {
  tag?: string;
  number?: string;
  title: string;
  description: string;
  bullets?: string[];
  icon?: React.ReactNode;
  href?: string;
  ctaText?: string;
  className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  tag,
  number,
  title,
  description,
  bullets,
  icon,
  href,
  ctaText = "Explore Strategy",
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-[#046BD2] transition-colors duration-150 ${className}`}
    >
      <div className="flex flex-col gap-3.5">
        {/* Header: Tag and optional Number/Icon */}
        <div className="flex items-center justify-between gap-3">
          {tag && (
            <span className="text-xs font-bold uppercase tracking-wider text-[#046BD2]">
              {tag}
            </span>
          )}
          {number && (
            <span className="text-xs font-bold text-slate-400 font-mono">
              {number}
            </span>
          )}
          {icon && !number && (
            <div className="text-[#046BD2]">
              {icon}
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>

        {/* Deliverables / Capabilities */}
        {bullets && bullets.length > 0 && (
          <ul className="space-y-2 pt-3 border-t border-slate-100">
            {bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                <Check className="w-3.5 h-3.5 text-[#046BD2] shrink-0 mt-0.5" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer / Text Link */}
      {href && (
        <div className="pt-4 mt-4 border-t border-slate-100">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#046BD2] hover:text-[#0356A8] transition-colors"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
};
