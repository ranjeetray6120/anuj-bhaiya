"use client";

import { useState } from "react";
import { Send, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function LeadForm({ title = "Accelerate Your Business Growth", subtitle = "Enter your details below to request a comprehensive, data-driven marketing audit and customized scaling strategy." }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    website: "",
    phone: "",
    service: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const services = [
    "Search Engine Optimization (SEO)",
    "PPC & Paid Search Management",
    "Social Media Advertising (Meta/LinkedIn/TikTok)",
    "Conversion Rate Optimization (CRO)",
    "Custom Landing Page & Web Design",
    "Full-Suite Growth Marketing",
  ];

  const budgets = [
    "Under $2,000 / month",
    "$2,000 - $5,000 / month",
    "$5,000 - $15,000 / month",
    "$15,000+ / month",
  ];

  return (
    <div className="w-full relative">
      {/* Background glow behind form card */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 opacity-20 blur-xl z-0" />

      <div className="relative bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-xl z-10">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-left space-y-2 mb-6">
              <h3 className="text-xl font-bold text-white tracking-tight sm:text-2xl">{title}</h3>
              <p className="text-slate-400 text-sm">{subtitle}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="form-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-indigo-400">*</span>
                </label>
                <input
                  id="form-name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm focus:ring-1 focus:ring-indigo-500"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="form-email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Business Email <span className="text-indigo-400">*</span>
                </label>
                <input
                  id="form-email"
                  type="email"
                  required
                  placeholder="john@company.com"
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm focus:ring-1 focus:ring-indigo-500"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="form-website" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Website URL <span className="text-indigo-400">*</span>
                </label>
                <input
                  id="form-website"
                  type="url"
                  required
                  placeholder="https://company.com"
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm focus:ring-1 focus:ring-indigo-500"
                  value={formState.website}
                  onChange={(e) => setFormState({ ...formState, website: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="form-phone" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Phone Number
                </label>
                <input
                  id="form-phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none transition-colors text-sm focus:ring-1 focus:ring-indigo-500"
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="form-service" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Primary Service Needed
                </label>
                <select
                  id="form-service"
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-white focus:outline-none transition-colors text-sm focus:ring-1 focus:ring-indigo-500"
                  value={formState.service}
                  onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                >
                  <option value="" disabled className="bg-slate-950 text-slate-600">Select service...</option>
                  {services.map((s) => (
                    <option key={s} value={s} className="bg-slate-950">{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="form-budget" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Estimated Monthly Ad Budget
                </label>
                <select
                  id="form-budget"
                  className="w-full bg-slate-950/60 border border-slate-800 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-white focus:outline-none transition-colors text-sm focus:ring-1 focus:ring-indigo-500"
                  value={formState.budget}
                  onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                >
                  <option value="" disabled className="bg-slate-950 text-slate-600">Select budget...</option>
                  {budgets.map((b) => (
                    <option key={b} value={b} className="bg-slate-950">{b}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative overflow-hidden group py-3.5 px-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 hover:opacity-95 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-indigo-500/20 active:scale-98 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                    Analyzing Data...
                  </>
                ) : (
                  <>
                    Claim Your Free Strategy & Audit
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-2 border-t border-slate-800/50">
              <ShieldCheck className="w-4 h-4 text-cyan-500" />
              <span>We value your privacy. 100% Secure & Confidential. No spam.</span>
            </div>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center text-center py-12 px-4 space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <CheckCircle2 className="w-8 h-8 text-slate-950" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white">Audit Request Received!</h3>
              <p className="text-slate-300 text-sm max-w-md">
                Thank you for choosing Aetheris. Our analytics team is already compiling your site and campaign data.
              </p>
              <div className="mt-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-left max-w-md mx-auto space-y-2">
                <h4 className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">What happens next:</h4>
                <ol className="list-decimal pl-4 text-xs text-slate-400 space-y-1">
                  <li>We will perform a baseline crawl and PPC audit of your website.</li>
                  <li>Within 24 hours, you'll receive a detailed PDF audit.</li>
                  <li>We'll send a link to schedule your live 30-min strategy session to go over optimization options.</li>
                </ol>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
