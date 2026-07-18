"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-white transition-all duration-300 ${
          scrolled ? "py-2 shadow-md bg-white/95 backdrop-blur-sm" : "py-4 border-b border-slate-100"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Call Button (Left on mobile) */}
            <a
              href="tel:7888910945"
              className="lg:hidden p-2 rounded-xl text-slate-800 hover:text-[#4eb46f] transition-colors"
              aria-label="Call Strategy Desk"
            >
              <Phone className="w-5 h-5 fill-current" />
            </a>

            {/* Logo */}
            <a href="#" className="flex items-center gap-1.5 group">
              <div className="w-8 h-8 rounded-lg bg-[#4eb46f] flex items-center justify-center transition-transform group-hover:scale-105">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                Aetheris<span className="text-[#4eb46f]">Digital</span>
              </span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-semibold text-slate-700 hover:text-[#4eb46f] transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:7888910945"
                className="flex items-center gap-1 text-sm font-bold text-slate-900 hover:text-[#4eb46f] transition-colors border-l border-slate-200 pl-4 py-2"
              >
                <Phone className="w-4 h-4 fill-current" />
                78889 10945
              </a>
            </nav>

            {/* Mobile menu toggler (Right on mobile) */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-[#4eb46f] hover:bg-slate-50 focus:outline-none transition-colors"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu drop-down */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-inner"
            >
              <div className="px-4 pt-2 pb-6 space-y-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-base font-semibold text-slate-700 hover:text-[#4eb46f] hover:bg-slate-50 transition-all"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-3 border-t border-slate-100">
                  <a
                    href="tel:7888910945"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-slate-900 text-white font-bold text-center hover:bg-[#4eb46f] transition-colors"
                  >
                    <Phone className="w-4 h-4 fill-current" />
                    Call: 78889 10945
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Floating WhatsApp Chat Button - matching Manik Digital exactly */}
      <a
        href="https://wa.me/917888910945?text=Hi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-white text-slate-900 hover:text-green-600 font-bold rounded-full shadow-lg border border-slate-100 cursor-pointer hover:shadow-xl transition-all"
      >
        <svg className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.335-3.434l.381.227c1.561.928 3.478 1.417 5.284 1.418 5.624 0 10.203-4.579 10.206-10.205.001-2.726-1.059-5.289-2.987-7.22-1.927-1.93-4.49-2.993-7.21-2.994-5.632 0-10.21 4.579-10.213 10.206-.002 1.848.485 3.655 1.413 5.234l.249.423-1.002 3.66 3.754-.984z" />
          <path d="M17.368 14.282c-.3-.15-1.782-.879-2.057-.979-.275-.1-.475-.15-.675.15-.2.3-.775.979-.95 1.179-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.413-1.488-.891-.796-1.493-1.78-1.668-2.08-.175-.3-.018-.462.132-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C9.762 9.177 9.162 7.7 8.912 7.1c-.244-.587-.492-.507-.675-.516-.175-.008-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.31 1.272.496 1.707.635.717.228 1.37.196 1.887.119.577-.087 1.782-.729 2.032-1.432.25-.704.25-1.304.175-1.43-.075-.125-.275-.2-.575-.35z" />
        </svg>
        Chat with Us
      </a>
    </>
  );
}
