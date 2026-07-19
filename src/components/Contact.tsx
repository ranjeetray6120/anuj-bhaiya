"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.mobile,
          details: formState.message,
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setIsSubmitted(true);
      } else {
        alert(result.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff6a00] font-mono">
                Contact Strategy
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans">
                Let's Engineer Your Scaling Plan
              </h3>
              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Connect with our performance marketing strategists. We'll run a baseline audit on your channels and layout a roadmap to scaling.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#ff6a00] flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-450 uppercase tracking-wide">Email Us</h4>
                  <a href="mailto:growth@adforge.com" className="text-sm font-bold text-slate-800 hover:text-[#ff6a00] transition-colors">
                    growth@adforge.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#ff6a00] flex-shrink-0">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-450 uppercase tracking-wide">Call Strategy Desk</h4>
                  <a href="tel:7888910945" className="text-sm font-bold text-slate-800 hover:text-[#ff6a00] transition-colors">
                    +91 78889 10945
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#ff6a00] flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-450 uppercase tracking-wide">Global Headquarters</h4>
                  <p className="text-sm font-bold text-slate-800">
                    Level 34, One World Trade, New York, NY 10007
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 w-full">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="space-y-1 mb-4">
                    <h4 className="text-lg font-bold text-slate-900 font-sans">Inquire for Scaling Proposals</h4>
                    <p className="text-xs text-slate-450">Fill in the options below and our strategy directors will follow up.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 font-mono">
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#ff6a00] rounded-lg px-3.5 py-2.5 text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#ff6a00]"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 font-mono">
                        Work Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#ff6a00] rounded-lg px-3.5 py-2.5 text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#ff6a00]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-mobile" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 font-mono">
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
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#ff6a00] rounded-lg px-3.5 py-2.5 text-xs text-slate-950 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#ff6a00]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1.5 font-mono">
                      What are your scaling hurdles?
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={3}
                      placeholder="E.g., high CPCs on Meta, poor landing page conversion rates..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#ff6a00] rounded-lg px-3.5 py-2.5 text-xs text-slate-955 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#ff6a00] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#ff6a00] hover:bg-[#e05d00] text-white font-extrabold text-xs tracking-wider rounded flex items-center justify-center gap-2 cursor-pointer shadow shadow-orange-500/10 hover:opacity-95 transition-opacity"
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
                  <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-[#ff6a00]">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-900 font-sans">Request Submitted!</h4>
                    <p className="text-xs text-slate-500 max-w-sm font-light">
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
