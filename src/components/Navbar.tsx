"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#home", active: true },
    { name: "SERVICES", href: "#services" },
    { name: "ABOUT US", href: "#about" },
    { name: "FEATURES", href: "#features" },
    { name: "TESTIMONIALS", href: "#testimonials" },
    { name: "FAQs", href: "#faq" },
    { name: "CONTACT US", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "py-3 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo - ADFORGE */}
          <a href="#" className="flex items-center gap-3">
            <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 80L45 15L55 15L35 80H15Z" fill="#1e293b" />
              <path d="M50 48L62 20L72 20L58 48H50Z" fill="#475569" fillOpacity="0.8" />
              <path d="M45 45H85V55H49.5L45 45Z" fill="#ff6a00" />
              <path d="M52 30H80V37H55L52 30Z" fill="#ff8533" />
            </svg>

            <div className="flex flex-col text-left leading-none">
              <span className="text-lg font-black tracking-tight text-slate-900 font-sans">
                AD<span className="text-[#ff6a00]">FORGE</span>
              </span>
              <span className="text-[6.5px] font-bold tracking-[0.25em] text-[#ff6a00] mt-0.5 font-mono">
                FORGE YOUR GROWTH.
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs font-bold tracking-wider hover:text-[#ff6a00] transition-colors relative py-1.5 ${
                  link.active ? "text-[#ff6a00]" : "text-slate-655"
                }`}
              >
                {link.name}
                {link.active && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff6a00]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4.5 py-2 bg-[#ff6a00] hover:bg-[#e05d00] text-white text-xs font-extrabold tracking-wider rounded transition-colors cursor-pointer"
            >
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
              GET A FREE STRATEGY CALL
            </a>
          </div>

          {/* Mobile menu toggler */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-550 hover:text-[#ff6a00] focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu dropdown - Light theme layout */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-3 shadow-inner">
          <div className="px-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-xs font-bold tracking-wider hover:bg-slate-50 ${
                  link.active ? "text-[#ff6a00]" : "text-slate-600"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#ff6a00] hover:bg-[#e05d00] text-white text-xs font-extrabold rounded"
              >
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[3]" />
                GET A FREE STRATEGY CALL
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
