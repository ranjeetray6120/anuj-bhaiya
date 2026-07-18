"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#517082]">
                Contact Strategy
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Let's Engineer Your Scaling Plan
              </h3>
              <p className="text-slate-500 text-sm font-light">
                Connect with our performance marketing strategists. We'll run a baseline audit on your channels and layout a roadmap to scaling.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#4eb46f] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Email Us</h4>
                  <a href="mailto:growth@aetherisdigital.com" className="text-sm font-bold text-slate-800 hover:text-[#4eb46f] transition-colors">
                    growth@aetherisdigital.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#4eb46f] flex-shrink-0">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Call Strategy Desk</h4>
                  <a href="tel:7888910945" className="text-sm font-bold text-slate-800 hover:text-[#4eb46f] transition-colors">
                    +91 78889 10945
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-[#4eb46f] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide">Global Headquarters</h4>
                  <p className="text-sm font-bold text-slate-800">
                    Level 34, One World Trade, New York, NY 10007
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="space-y-1 mb-4">
                    <h4 className="text-lg font-bold text-slate-900">Inquire for Scaling Proposals</h4>
                    <p className="text-xs text-slate-400">Fill in the options below and our strategy directors will follow up.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-white border border-slate-200 focus:border-[#4eb46f] rounded-lg px-3.5 py-2.5 text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4eb46f]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                        Work Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-white border border-slate-200 focus:border-[#4eb46f] rounded-lg px-3.5 py-2.5 text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4eb46f]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-mobile" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      Mobile Number
                    </label>
                    <input
                      id="contact-mobile"
                      type="tel"
                      required
                      pattern="\d{10}"
                      minLength={10}
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={formState.mobile}
                      onChange={(e) => setFormState({ ...formState, mobile: e.target.value })}
                      className="w-full bg-white border border-slate-200 focus:border-[#4eb46f] rounded-lg px-3.5 py-2.5 text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4eb46f]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                      What are your scaling hurdles?
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={3}
                      placeholder="E.g., high CPCs on Meta, poor landing page conversion rates..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-white border border-slate-200 focus:border-[#4eb46f] rounded-lg px-3.5 py-2.5 text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4eb46f] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#4eb46f] hover:bg-[#3d9e5c] text-white font-bold rounded-lg flex items-center justify-center gap-2 cursor-pointer shadow hover:opacity-95 transition-opacity"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-[#4eb46f]">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-900">Request Submitted!</h4>
                    <p className="text-xs text-slate-500 max-w-sm">
                      We have received your campaign data details. A dedicated performance analyst will review your details and reach out in less than 24 hours.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
