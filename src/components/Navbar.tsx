"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group py-1">
          <Image
            src="/logo.png"
            alt="AdForge Logo"
            width={240}
            height={65}
            className="h-11 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className="text-xs font-bold tracking-wider text-slate-800 hover:text-[#046BD2] transition-colors uppercase"
          >
            Home
          </Link>

          <Link
            href="/who-we-are"
            className="text-xs font-bold tracking-wider text-slate-800 hover:text-[#046BD2] transition-colors uppercase"
          >
            Who We Are
          </Link>

          {/* Services Hover Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              className="flex items-center gap-1.5 text-xs font-bold tracking-wider text-slate-800 hover:text-[#046BD2] transition-colors uppercase py-2 cursor-pointer"
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
              <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-200 py-3 px-2 flex flex-col gap-1 transition-all duration-200 animate-fadeIn">
                {servicesList.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={() => setServicesDropdownOpen(false)}
                    className="p-3 rounded-xl hover:bg-blue-50/80 group transition-colors"
                  >
                    <p className="text-sm font-bold text-slate-900 group-hover:text-[#046BD2] transition-colors">
                      {service.title}
                    </p>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 leading-snug">
                      {service.desc}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>


          <Link
            href="/#process"
            className="text-xs font-bold tracking-wider text-slate-800 hover:text-[#046BD2] transition-colors uppercase"
          >
            Process
          </Link>

          <Link
            href="/blogs"
            className="text-xs font-bold tracking-wider text-slate-800 hover:text-[#046BD2] transition-colors uppercase"
          >
            Blogs
          </Link>

          <Link
            href="/contact-us"
            className="text-xs font-bold tracking-wider text-slate-800 hover:text-[#046BD2] transition-colors uppercase"
          >
            Contact Us
          </Link>
        </div>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center">
          <Button
            href="/#contact"
            variant="primary"
            size="sm"
          >
            Get Free Quote
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden p-2 text-slate-800 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-[#046BD2] focus:ring-offset-2 rounded-md cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-6 flex flex-col gap-1.5" aria-hidden="true">
            <span
              className={`h-0.5 bg-slate-800 transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-slate-800 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 bg-slate-800 transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#046BD2] uppercase"
          >
            Home
          </Link>
          <Link
            href="/who-we-are"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#046BD2] uppercase"
          >
            Who We Are
          </Link>

          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-800 hover:text-[#046BD2] uppercase cursor-pointer"
            >
              Services
              <span className={`text-xs transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 space-y-2 py-2">
                {servicesList.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-1.5 text-xs font-semibold text-slate-600 hover:text-[#046BD2]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>


          <Link
            href="/#process"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#046BD2] uppercase"
          >
            Process
          </Link>

          <Link
            href="/blogs"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#046BD2] uppercase"
          >
            Blogs
          </Link>

          <Link
            href="/contact-us"
            onClick={() => setMenuOpen(false)}
            className="block py-2 text-sm font-bold text-slate-800 hover:text-[#046BD2] uppercase"
          >
            Contact Us
          </Link>

          <div className="pt-2">
            <Button
              href="/#contact"
              variant="primary"
              size="md"
              fullWidth
              onClick={() => setMenuOpen(false)}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
