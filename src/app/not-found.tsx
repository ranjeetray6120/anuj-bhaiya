import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Home, PhoneCall, Compass, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description:
    "The page you are looking for doesn't exist or has been moved. Explore AdForge Tech performance marketing services or return to the homepage.",
  robots: {
    index: false,
    follow: true,
  },
};

const quickLinks = [
  { label: "Home", href: "/", desc: "Return to homepage" },
  { label: "About", href: "/about", desc: "Our team & mission" },
  { label: "SEO Services", href: "/seo", desc: "Rank & scale organically" },
  { label: "Google Ads (PPC)", href: "/pay-per-click", desc: "Performance Max & Search" },
  { label: "Meta Ads", href: "/meta-ads", desc: "Facebook & Instagram growth" },
  { label: "Web Development", href: "/development", desc: "CRO & high-converting sites" },
  { label: "Clients & Portfolio", href: "/clients", desc: "Proven results & case studies" },
  { label: "Contact Us", href: "/contact-us", desc: "Get a free growth quote" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full text-center flex flex-col items-center">
          {/* Status Badge */}
          <Badge variant="primary" size="md" dot className="mb-6">
            Error 404 • Page Not Found
          </Badge>

          {/* Large Gradient Numeral */}
          <h1 className="text-8xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#046BD2] via-[#168ED3] to-sky-400 select-none leading-none">
            404
          </h1>

          {/* Headline */}
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mt-4 mb-3">
            Looking for Growth? This Page Doesn&apos;t Exist.
          </h2>

          {/* Descriptive Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg mb-8">
            The link you clicked may be broken or the page has been moved. Let&apos;s get you back on track to scale your business.
          </p>

          {/* Centered Primary CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            <Button
              href="/"
              variant="primary"
              size="lg"
              leftIcon={<Home className="w-4 h-4" />}
            >
              Back to Home
            </Button>
            <Button
              href="/contact-us"
              variant="outline"
              size="lg"
              leftIcon={<PhoneCall className="w-4 h-4" />}
            >
              Contact Support
            </Button>
          </div>

          {/* Quick Core Links Card */}
          <div className="w-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 text-left">
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-4 h-4 text-[#046BD2] dark:text-[#38BDF8]" />
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Popular Destinations:
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-[#046BD2]/50 dark:hover:border-[#168ED3]/50 hover:shadow-xs transition-all duration-150 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#046BD2] dark:group-hover:text-[#168ED3] transition-colors">
                      {link.label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#046BD2] dark:group-hover:text-[#168ED3] transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <span className="block text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                    {link.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
