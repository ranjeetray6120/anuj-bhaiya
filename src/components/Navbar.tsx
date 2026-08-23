"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100 shadow-xs transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 sm:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group py-2">
          <Image
            src="/logo.jpeg"
            alt="AdForge Logo"
            width={260}
            height={80}
            className="h-14 sm:h-16 md:h-18 w-auto object-contain transition-transform duration-200 group-hover:scale-105 drop-shadow-xs"
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
              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-3 px-2 flex flex-col gap-1 transition-all duration-200 animate-fadeIn">
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
          <Link
            href="/#contact"
            className="bg-[#D82C5E] hover:bg-[#bf204d] !text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-md shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            GET A FREE QUOTE
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden p-2 text-slate-800 hover:text-slate-600 focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
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

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-5 flex flex-col gap-3 shadow-lg max-h-[85vh] overflow-y-auto">
          <Link
            href="/"
            className="text-sm font-bold text-slate-800 hover:text-[#046BD2] transition-colors py-1.5"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/who-we-are"
            className="text-sm font-bold text-slate-800 hover:text-[#046BD2] transition-colors py-1.5"
            onClick={() => setMenuOpen(false)}
          >
            Who We Are
          </Link>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between text-sm font-bold text-slate-800 hover:text-[#046BD2] transition-colors py-1.5 cursor-pointer"
            >
              <span>Services</span>
              <span className="text-xs">{mobileServicesOpen ? "▲" : "▼"}</span>
            </button>

            {mobileServicesOpen && (
              <div className="pl-4 py-2 flex flex-col gap-2 border-l-2 border-blue-100 ml-1">
                {servicesList.map((service) => (
                  <Link
                    key={service.title}
                    href={service.href}
                    onClick={() => {
                      setMenuOpen(false);
                      setMobileServicesOpen(false);
                    }}
                    className="text-xs font-semibold text-slate-700 hover:text-[#046BD2] py-1"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/#process"
            className="text-sm font-bold text-slate-800 hover:text-[#046BD2] transition-colors py-1.5"
            onClick={() => setMenuOpen(false)}
          >
            Process
          </Link>

          <Link
            href="/blogs"
            className="text-sm font-bold text-slate-800 hover:text-[#046BD2] transition-colors py-1.5"
            onClick={() => setMenuOpen(false)}
          >
            Blogs
          </Link>

          <Link
            href="/contact-us"
            className="text-sm font-bold text-slate-800 hover:text-[#046BD2] transition-colors py-1.5"
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>

          <Link
            href="/#contact"
            className="bg-[#D82C5E] hover:bg-[#bf204d] !text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-md text-center mt-2 shadow-sm"
            onClick={() => setMenuOpen(false)}
          >
            GET A FREE QUOTE
          </Link>
        </div>
      )}
    </nav>
  );
}

