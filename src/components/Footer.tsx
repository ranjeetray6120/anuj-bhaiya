"use client";

import { Phone } from "lucide-react";

export default function Footer() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
        
        {/* Logo - ADFORGE */}
        <a href="#" className="inline-flex items-center gap-3 justify-center group">
          {/* Custom geometric logo icon matching image.png (A & F combination) */}
          <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 80L45 15L55 15L35 80H15Z"
              fill="#1e293b"
            />
            <path
              d="M50 48L62 20L72 20L58 48H50Z"
              fill="#475569"
              fillOpacity="0.8"
            />
            <path
              d="M45 45H85V55H49.5L45 45Z"
              fill="#ff6a00"
            />
            <path
              d="M52 30H80V37H55L52 30Z"
              fill="#ff8533"
            />
          </svg>

          {/* Brand text */}
          <div className="flex flex-col text-left leading-none">
            <span className="text-lg font-black tracking-tight text-slate-900 font-sans">
              AD<span className="text-[#ff6a00]">FORGE</span>
            </span>
            <span className="text-[6.5px] font-bold tracking-[0.25em] text-[#ff6a00] mt-0.5 font-mono">
              FORGE YOUR GROWTH.
            </span>
          </div>
        </a>

        {/* Tagline */}
        <p className="text-xs sm:text-sm text-slate-650 max-w-md mx-auto leading-relaxed font-light font-sans">
          We engineer conversion funnels & performance marketing engines to scale commercial pipelines globally.
        </p>

        {/* Action Button */}
        <div>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#ff6a00] hover:bg-[#e05d00] text-white font-extrabold text-xs tracking-wider rounded transition-all cursor-pointer shadow shadow-orange-500/10"
          >
            Get a Free Consultation
          </button>
        </div>

        {/* Phone */}
        <div>
          <a
            href="tel:7888910945"
            className="inline-flex items-center gap-2 font-bold text-slate-800 hover:text-[#ff6a00] transition-colors text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 fill-current" />
            78889-10945
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-200 text-[10px] text-slate-500 font-semibold flex flex-col sm:flex-row items-center justify-center gap-4">
          <span>© 2026 ADFORGE LLC. All rights reserved.</span>
          <span className="hidden sm:inline">•</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-700 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
