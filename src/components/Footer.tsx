"use client";

import { Phone, TrendingUp } from "lucide-react";

export default function Footer() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#eeeeee] border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-6">
        {/* Logo */}
        <a href="#" className="inline-flex items-center gap-1.5 justify-center group">
          <div className="w-8 h-8 rounded-lg bg-[#4eb46f] flex items-center justify-center transition-transform group-hover:scale-105">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-extrabold tracking-tight text-slate-900">
            Aetheris<span className="text-[#4eb46f]">Digital</span>
          </span>
        </a>

        {/* Tagline */}
        <p className="text-sm text-slate-650 max-w-md mx-auto leading-relaxed font-light">
          We build high-performance websites & digital campaigns that get results.
          <br />
          Based in Delhi, serving businesses globally.
        </p>

        {/* Action Button */}
        <div>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-[#4eb46f] hover:bg-[#3d9e5c] text-white font-bold rounded-lg transition-colors cursor-pointer shadow-md"
          >
            Get a Free Consultation
          </button>
        </div>

        {/* Phone */}
        <div>
          <a
            href="tel:7888910945"
            className="inline-flex items-center gap-2 font-bold text-slate-800 hover:text-[#4eb46f] transition-colors text-sm sm:text-base"
          >
            <Phone className="w-4 h-4 fill-current" />
            78889-10945
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-slate-250 text-xs text-slate-450 font-semibold flex flex-col sm:flex-row items-center justify-center gap-4">
          <span>© 2026 Aetheris Digital LLC. All rights reserved.</span>
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
