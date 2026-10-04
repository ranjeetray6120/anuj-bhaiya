"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { PhoneCall, Menu, X } from "lucide-react";

const servicesList = [
  {
    title: "SEO Services",
    href: "/seo",
    desc: "Technical SEO, topical authority & organic revenue growth",
  },
  {
    title: "Google Ads (PPC)",
    href: "/pay-per-click",
    desc: "Performance Max, Search ads & high-converting YouTube funnels",
  },
  {
    title: "Meta Ads (FB & IG)",
    href: "/meta-ads",
    desc: "Advantage+ Shopping, creative testing & ROAS scaling",
  },
  {
    title: "Web & CRO Development",
    href: "/development",
    desc: "High-converting landing pages & SEO-friendly custom websites",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800/80 shadow-xs transition-colors duration-200">
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Mobile Left: Hamburger Button */}
        <div className="flex items-center lg:hidden w-10">
          <button
            className="p-2 -ml-2 text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] focus:outline-none focus:ring-2 focus:ring-[#046BD2] rounded-lg cursor-pointer flex items-center justify-center transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Logo: Centered on mobile (< lg), left-aligned on desktop (lg:) */}
        <div className="flex-1 flex justify-center lg:flex-initial lg:justify-start">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group py-1 select-none">
            {/* Light Mode Logo */}
            <Image
              src="/logo-icon-light.png"
              alt="AdForge Tech Logo"
              width={44}
              height={44}
              className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl object-contain shadow-xs transition-transform duration-200 group-hover:scale-105 dark:hidden"
              priority
            />
            {/* Dark Mode Logo */}
            <Image
              src="/logo-icon.jpeg"
              alt="AdForge Tech Logo"
              width={44}
              height={44}
              className="h-9 w-9 sm:h-11 sm:w-11 rounded-xl object-contain shadow-xs transition-transform duration-200 group-hover:scale-105 hidden dark:block"
              priority
            />
            <div className="flex flex-col">
              <span className="text-lg sm:text-2xl font-black tracking-tight text-slate-900 dark:text-white leading-none">
                AdForge <span className="text-[#046BD2] dark:text-[#168ED3]">Tech</span>
              </span>
              <span className="text-[8px] sm:text-[10px] font-bold text-slate-500 dark:text-slate-400 tracking-wider uppercase mt-0.5 sm:mt-1">
                Ads that forge growth
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className="text-xs font-bold tracking-wider text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] transition-colors uppercase"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-xs font-bold tracking-wider text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] transition-colors uppercase"
          >
            About
          </Link>

          {/* Services Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] transition-colors uppercase py-2 cursor-pointer"
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            >
              Services
              <span
                className={`text-[10px] transition-transform duration-200 ${
                  servicesDropdownOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {/* Dropdown Menu */}
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 w-80 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-3 px-2 flex flex-col gap-1 transition-all duration-200 animate-fadeIn">
                {servicesList.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={() => setServicesDropdownOpen(false)}
                    className="p-3 rounded-xl hover:bg-blue-50/80 dark:hover:bg-slate-800/80 group transition-colors"
                  >
                    <p className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#046BD2] dark:group-hover:text-[#168ED3] transition-colors">
                      {service.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5 leading-snug">
                      {service.desc}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/clients"
            className="text-xs font-bold tracking-wider text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] transition-colors uppercase"
          >
            Clients
          </Link>

          <Link
            href="/blogs"
            className="text-xs font-bold tracking-wider text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] transition-colors uppercase"
          >
            Blogs
          </Link>

          <Link
            href="/contact-us"
            className="text-xs font-bold tracking-wider text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] transition-colors uppercase"
          >
            Contact Us
          </Link>
        </div>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center">
          <Button
            href="/contact-us"
            variant="primary"
            size="sm"
            aria-label="Request a free growth quote"
          >
            Get Free Quote
          </Button>
        </div>

        {/* Mobile Right: Phone Call Button */}
        <div className="flex items-center justify-end lg:hidden w-10">
          <a
            href="tel:+918178802368"
            className="p-2 -mr-2 text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] transition-colors rounded-lg flex items-center justify-center cursor-pointer"
            aria-label="Call AdForge Tech"
            title="Call +91 81788 02368"
          >
            <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] uppercase"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] uppercase"
          >
            About
          </Link>

          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] uppercase cursor-pointer"
            >
              Services
              <span className={`text-xs transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 space-y-2 py-2 border-l border-slate-100 dark:border-slate-800 ml-2">
                {servicesList.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-[#046BD2] dark:hover:text-[#168ED3]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/clients"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] uppercase"
          >
            Clients &amp; Portfolio
          </Link>

          <Link
            href="/blogs"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] uppercase"
          >
            Blogs
          </Link>

          <Link
            href="/contact-us"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-[#046BD2] dark:hover:text-[#168ED3] uppercase"
          >
            Contact Us
          </Link>


          <div className="pt-2">
            <Button
              href="/contact-us"
              variant="primary"
              size="md"
              fullWidth
              onClick={() => setMenuOpen(false)}
              aria-label="Request a free growth quote"
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
