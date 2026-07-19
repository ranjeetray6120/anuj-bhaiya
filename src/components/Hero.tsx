"use client";

import { useState } from "react";
import { Rocket, Check, Mail } from "lucide-react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => {
        const contactForm = document.getElementById("contact");
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: "smooth" });
        }
      }, 1000);
    }
  };

  const bullets = [
    "Certified Google & Meta Specialists",
    "No Long-Term Contracts",
    "Focus on Leads & Revenue",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-16 flex items-center bg-white text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content - Conversational copy */}
          <div className="lg:col-span-7 space-y-8 text-left z-10">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight uppercase text-slate-900 font-sans">
                We scale Google & Meta ads <span className="text-[#ff6a00]">without wasting</span> your budget.
              </h1>
              <p className="text-base sm:text-lg text-slate-655 font-light leading-relaxed max-w-2xl font-sans">
                Tired of agencies reporting on "clicks" and "impressions" while your phone isn't ringing? We focus on what actually moves the needle: high-quality leads, real sales, and profitable campaigns.
              </p>
            </div>

            {/* Quick Email capture to contact form */}
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-xl">
                <div className="relative flex-grow">
                  <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-250 focus:border-[#ff6a00] rounded px-10 py-3.5 text-xs text-slate-950 placeholder-slate-450 focus:outline-none focus:ring-1 focus:ring-[#ff6a00]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#ff6a00] hover:bg-[#e05d00] text-white font-extrabold text-xs tracking-wider rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-md shadow-orange-500/10 whitespace-nowrap"
                >
                  <Rocket className="w-4 h-4 fill-current" />
                  GET MY GROWTH STRATEGY
                </button>
              </form>
            ) : (
              <div className="bg-[#ff6a00]/10 border border-[#ff6a00]/20 rounded p-4 max-w-xl text-slate-800 text-xs font-bold flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#ff6a00] text-white flex items-center justify-center font-mono">✓</span>
                <span>Thank you! Directing you to the project scheduler below...</span>
              </div>
            )}

            {/* Simple value bullets */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
              {bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs font-semibold text-slate-600">
                  <Check className="w-4 h-4 text-[#ff6a00] stroke-[3]" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Content - Showcases a large clean client analytics metrics card */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center z-10">
            <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xl space-y-6 text-left">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Campaign Scaling Performance</h3>
                  <p className="text-[10px] text-slate-450 font-semibold uppercase tracking-wider mt-0.5">Rolling Live Account Audits</p>
                </div>
                <span className="px-2.5 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">
                  +184% Growth
                </span>
              </div>

              {/* Stat grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-slate-200 p-4 rounded-xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Total Ad Spend</span>
                  <span className="text-xl font-extrabold text-slate-900 mt-1 block">$48,290</span>
                </div>
                <div className="bg-white border border-slate-200 p-4 rounded-xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Sales Revenue</span>
                  <span className="text-xl font-extrabold text-slate-900 mt-1 block">$231,792</span>
                </div>
              </div>

              {/* Progress visual bar */}
              <div className="space-y-2 bg-white border border-slate-200 p-4 rounded-xl">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-555">Return on Ad Spend (ROAS)</span>
                  <span className="text-[#ff6a00]">4.8x ROAS</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#ff6a00] h-full w-[85%] rounded-full" />
                </div>
              </div>

              <div className="text-[10px] text-slate-500 font-light flex items-center justify-center gap-1">
                <span>Verified client data audited via Looker Studio dashboard.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
