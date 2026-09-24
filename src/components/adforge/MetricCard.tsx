"use client";

import React from "react";

export interface MetricCardProps {
  value: React.ReactNode;
  label: string;
  subtext?: string;
  trend?: string;
  icon?: React.ReactNode;
  surface?: "white" | "muted" | "dark";
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  subtext,
  trend,
  icon,
  surface = "white",
  className = "",
}) => {
  const surfaceClasses = {
    white: "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100",
    muted: "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100",
    dark: "bg-slate-900 dark:bg-slate-950 border-slate-800 text-white",
  };
  return (
    <div
      className={`rounded-xl border p-6 sm:p-7 flex flex-col justify-between text-left hover:border-slate-300 dark:hover:border-slate-700 transition-colors ${surfaceClasses[surface]} ${className}`}
    >
      <div className="flex flex-col gap-1">
        {icon && (
          <div className="text-[#046BD2] dark:text-[#38BDF8] mb-3">
            {icon}
          </div>
        )}
        <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          {value}
        </div>
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">
          {label}
        </p>
        {subtext && (
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
            {subtext}
          </p>
        )}
      </div>

      {trend && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400">
          <span>{trend}</span>
        </div>
      )}
    </div>
  );
};
