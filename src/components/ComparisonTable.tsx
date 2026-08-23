import React from "react";

const utAdvantages = [
  "Total Inhouse Team",
  "Strategy session & extensive pre-campaign research",
  "Official Google Partner – only professional agencies maintain this title",
  "In depth customisation for individual client requirements – no 'one size fits all' approach",
  "Top, Certified Team that understands agency approach of work",
  "Unbeatable performance milestones",
  "No hidden fees. Plus all the data is yours!",
  "Let us focus on what we do best, so you can focus on what you do best",
];

const otherNegatives = [
  "Outsourcing of work",
  "Standard 'package' approach with every service",
  "Churn & burn approach to client acquisition",
  "Basic template audit and implementation",
  "Untrained and Intern Level Team",
  "Lack in the communication with the client",
  "No performance milestone model when it comes to SEO",
  "Hidden fees and holding data hostage on their own accounts",
  "No Strategic Level Implementation – Relying on old school technical Tactics",
];

const CheckIcon = () => (
  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
    +
  </span>
);

const XIcon = () => (
  <span className="w-4 h-4 rounded-full bg-rose-100 text-rose-700 text-xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
    −
  </span>
);

export default function ComparisonTable() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Why Choose Us?</h2>
          <div className="mt-2.5 mx-auto w-12 h-1 bg-green-500 rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
          <div className="bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500" />
              <h3 className="text-lg font-bold text-slate-900">AdForge</h3>
            </div>
            <ul className="space-y-3">
              {utAdvantages.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-xs sm:text-[13px] text-slate-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 flex items-center justify-center px-5 py-6 md:py-0">
            <span className="text-white font-black text-2xl tracking-widest select-none">vs.</span>
          </div>
          <div className="bg-rose-50/60 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-rose-400" />
              <h3 className="text-lg font-bold text-slate-900">Other Agencies</h3>
            </div>
            <ul className="space-y-3">
              {otherNegatives.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <XIcon />
                  <span className="text-xs sm:text-[13px] text-slate-700 leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

