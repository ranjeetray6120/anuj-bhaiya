"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

// Satisfy Turbopack HMR cache
export const _keepSparkles = Sparkles;

// ── SVG LOGOS & BADGES ──

function MetaInfinityLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="metaGradHero" x1="0%" y1="20%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#0064E0" />
          <stop offset="45%" stopColor="#0084FF" />
          <stop offset="100%" stopColor="#00D2FF" />
        </linearGradient>
      </defs>
      <path
        d="M27.2 6.8C15.2 6.8 5.5 17 5.5 32c0 14.9 9.6 25.2 21.7 25.2 9.5 0 16.5-6.5 22.8-16.7 6.3 10.2 13.3 16.7 22.8 16.7 12.1 0 21.7-10.3 21.7-25.2 0-15-9.7-25.2-21.7-25.2-9.5 0-16.5 6.5-22.8 16.7C43.7 13.3 36.7 6.8 27.2 6.8zm0 10.6c4.6 0 8.8 3.5 12.6 11.5-2.2 4.1-4.7 7.9-7.4 11-2.2 2.6-4.5 4.3-6.8 4.3-5.2 0-9.2-5.4-9.2-13.4 0-8 4-13.4 9.2-13.4zm45.6 0c5.2 0 9.2 5.4 9.2 13.4 0 8-4 13.4-9.2 13.4-2.3 0-4.6-1.7-6.8-4.3-2.7-3.1-5.2-6.9-7.4-11 3.8-8 8-11.5 12.6-11.5z"
        fill="url(#metaGradHero)"
      />
    </svg>
  );
}

function GoogleAdsLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 256 230"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        fill="#FBBC04"
        d="M5.888 166.405L90.88 20.9c10.796 6.356 65.236 36.484 74.028 42.214L79.916 208.627c-9.295 12.28-85.804-23.587-74.028-42.23z"
      />
      <path
        fill="#4285F4"
        d="M250.084 166.402L165.092 20.906C153.21 1.132 127.62-6.054 106.601 5.625S79.182 42.462 91.064 63.119l84.992 145.514c11.882 19.765 37.473 26.95 58.492 15.272c20.1-11.68 27.418-37.73 15.536-57.486z"
      />
      <ellipse cx="42.664" cy="187.924" fill="#34A853" rx="42.664" ry="41.604" />
    </svg>
  );
}

function CodeTerminalLogo({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md dark:shadow-[0_0_24px_rgba(6,182,212,0.8)] border border-cyan-400/40 dark:border-cyan-300/40 font-mono font-black text-xl sm:text-2xl ${className}`}
    >
      &lt;/&gt;
    </div>
  );
}

function RealEstateLogo({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-md dark:shadow-[0_0_24px_rgba(16,185,129,0.8)] border border-emerald-400/40 dark:border-emerald-300/40 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[60%] h-[60%]">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    </div>
  );
}

function FacebookBadge({ className }: { className?: string }) {
  return (
    <div className={`rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md dark:shadow-[0_0_22px_rgba(24,119,242,0.85)] border border-blue-200 dark:border-[#38BDF8]/40 ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[58%] h-[58%]">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    </div>
  );
}

function InstagramBadge({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-[16px] flex items-center justify-center p-2 text-white shadow-md dark:shadow-[0_0_24px_rgba(225,48,108,0.75)] border border-pink-200/50 dark:border-white/20 ${className}`}
      style={{ background: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" }}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
      </svg>
    </div>
  );
}

function GoogleSearchBadge({ className }: { className?: string }) {
  return (
    <div className={`rounded-full bg-white flex items-center justify-center text-slate-800 shadow-md dark:shadow-[0_0_22px_rgba(66,133,244,0.75)] border border-slate-200 dark:border-[#4285F4]/50 ${className}`}>
      <svg viewBox="0 0 24 24" className="w-[58%] h-[58%]">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.13C3.26 21.36 7.33 24 12 24z" />
        <path fill="#FBBC05" d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.24C.45 8.15 0 9.92 0 12s.45 3.85 1.24 5.42l4.04-3.13z" />
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.24 6.58l4.04 3.13c.95-2.83 3.6-4.96 6.72-4.96z" />
      </svg>
    </div>
  );
}

function YouTubeBadge({ className }: { className?: string }) {
  return (
    <div className={`rounded-[16px] bg-[#FF0000] flex items-center justify-center text-white shadow-md dark:shadow-[0_0_24px_rgba(255,0,0,0.8)] border border-red-300 dark:border-red-400/40 ${className}`}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-[58%] h-[58%]">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    </div>
  );
}

function ReactNextBadge({ className }: { className?: string }) {
  return (
    <div className={`rounded-full bg-slate-100 dark:bg-[#0F172A] flex items-center justify-center text-[#0284C7] dark:text-[#06B6D4] shadow-md dark:shadow-[0_0_22px_rgba(6,182,212,0.8)] border border-slate-200 dark:border-cyan-400/50 ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[58%] h-[58%]">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    </div>
  );
}

function CloudBadge({ className }: { className?: string }) {
  return (
    <div className={`rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center text-white shadow-md dark:shadow-[0_0_22px_rgba(14,165,233,0.8)] border border-cyan-200 dark:border-cyan-300/40 ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[58%] h-[58%]">
        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        <polyline points="12 12 12 16" />
        <polyline points="9 13 12 16 15 13" />
      </svg>
    </div>
  );
}

function VerifiedBadge({ className }: { className?: string }) {
  return (
    <div className={`rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-md dark:shadow-[0_0_22px_rgba(16,185,129,0.8)] border border-emerald-200 dark:border-emerald-300/40 ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-[58%] h-[58%]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    </div>
  );
}

function SiteVisitBadge({ className }: { className?: string }) {
  return (
    <div className={`rounded-full bg-gradient-to-br from-amber-500 to-emerald-600 flex items-center justify-center text-white shadow-md dark:shadow-[0_0_22px_rgba(245,158,11,0.8)] border border-amber-200 dark:border-amber-300/40 ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-[58%] h-[58%]">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    </div>
  );
}

// ── GENERAL ICONS ──

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function TrendingUpIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function LayoutIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" />
    </svg>
  );
}

function ShoppingBagIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function SmartphoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" />
    </svg>
  );
}

function LayersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.9a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 12.5-9.17 4.16a2 2 0 0 1-1.66 0L2 12.5" />
      <path d="m22 17.5-9.17 4.16a2 2 0 0 1-1.66 0L2 17.5" />
    </svg>
  );
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M8 10h.01" /><path d="M16 10h.01" /><path d="M8 14h.01" /><path d="M16 14h.01" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

// ── INDUSTRY CARD SPECIFIC ICONS ──

function CartIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function StethoscopeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </svg>
  );
}

function GraduationCapIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function PlaneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function ServicesUsersIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// ── SLIDES DATA CONFIGURATION ──

interface CardItem {
  id: string;
  title: string;
  sub1: string;
  sub2: string;
  icon: React.ReactNode;
  adHeadline: string;
  image: string;
  cta: string;
  metric?: string;
}

interface SlideItem {
  id: string;
  title: string;
  tabLabel: string;
  badgeTag: string;
  liveStat: string;
  themeColor: string;
  accentBorder: string;
  glowColor: string;
  bgImage: string;
  bgImageDark: string;
  bgImageLight: string;
  logo: React.ReactNode;
  headingPrefix: string;
  headingHighlight: string;
  headingHighlightColor: string;
  floatingBadges: React.ReactNode;
  bullets: string[];
  accentGradient: string;
  pills: {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
  }[];
  cards: CardItem[];
}

const slides: SlideItem[] = [
  {
    id: "meta-ads",
    title: "Meta Ads Platform",
    tabLabel: "Meta Ads",
    badgeTag: "Meta Performance Marketing",
    liveStat: "Avg. ROAS: 4.8x ↗ (+182%)",
    themeColor: "#1877F2",
    accentBorder: "border-[#168ED3]/40",
    glowColor: "rgba(24,119,242,0.4)",
    bgImage: "/images/hero/hero-background.png",
    bgImageDark: "/images/hero/hero-background.png",
    bgImageLight: "/images/hero/hero-meta-light.jpg",
    logo: <MetaInfinityLogo className="w-12 h-8 sm:w-16 sm:h-11 lg:w-20 lg:h-13 shrink-0" />,
    headingPrefix: "Meta",
    headingHighlight: "Ads",
    headingHighlightColor: "#1877F2",
    floatingBadges: (
      <>
        <FacebookBadge className="w-10 h-10 sm:w-12 sm:h-12" />
        <InstagramBadge className="w-10 h-10 sm:w-12 sm:h-12" />
      </>
    ),
    bullets: [
      "Reach the Right People.",
      "Drive Real Engagement.",
      "Grow Your Business.",
    ],
    accentGradient: "from-[#0064E0] via-[#0084FF] to-[#00C6FF]",
    pills: [
      {
        title: "Precise Targeting",
        subtitle: "Reach the right audience",
        icon: <TargetIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
      {
        title: "Higher Engagement",
        subtitle: "More likes, comments & shares",
        icon: <UsersIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
      {
        title: "Better ROI",
        subtitle: "Turn clicks into customers",
        icon: <TrendingUpIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
    ],
    cards: [
      {
        id: "m-1",
        title: "E-commerce",
        sub1: "More product views.",
        sub2: "More sales.",
        icon: <CartIcon className="w-4 h-4" />,
        adHeadline: "Step into Better Style",
        image: "/images/industries/ecommerce.jpg",
        cta: "Shop Now",
        metric: "1.8K Likes",
      },
      {
        id: "m-2",
        title: "Real Estate",
        sub1: "More inquiries.",
        sub2: "Faster property sales.",
        icon: <HomeIcon className="w-4 h-4" />,
        adHeadline: "Find Your Dream Home",
        image: "/images/industries/realestate.jpg",
        cta: "Learn More",
        metric: "2.4K Likes",
      },
      {
        id: "m-3",
        title: "Healthcare",
        sub1: "More appointments.",
        sub2: "Healthier communities.",
        icon: <StethoscopeIcon className="w-4 h-4" />,
        adHeadline: "Your Health Our Priority",
        image: "/images/industries/healthcare.jpg",
        cta: "Book Now",
        metric: "1.5K Likes",
      },
      {
        id: "m-4",
        title: "Education",
        sub1: "More enrollments.",
        sub2: "Bigger dreams.",
        icon: <GraduationCapIcon className="w-4 h-4" />,
        adHeadline: "Build Your Future",
        image: "/images/industries/education.jpg",
        cta: "Learn More",
        metric: "2.1K Likes",
      },
      {
        id: "m-5",
        title: "Travel & Hospitality",
        sub1: "More bookings.",
        sub2: "More adventures.",
        icon: <PlaneIcon className="w-4 h-4" />,
        adHeadline: "Explore The World",
        image: "/images/industries/travel.jpg",
        cta: "Book Now",
        metric: "3.4K Likes",
      },
      {
        id: "m-6",
        title: "B2B / SaaS",
        sub1: "More calls.",
        sub2: "More customers.",
        icon: <BriefcaseIcon className="w-4 h-4" />,
        adHeadline: "Smarter Tools for Teams",
        image: "/images/industries/saas.jpg",
        cta: "Learn More",
        metric: "1.9K Likes",
      },
    ],
  },
  {
    id: "google-ads",
    title: "Google Ads Growth",
    tabLabel: "Google Ads",
    badgeTag: "Google Performance Marketing",
    liveStat: "High-Intent CTR: 9.4% ↗",
    themeColor: "#4285F4",
    accentBorder: "border-[#4285F4]/40",
    glowColor: "rgba(66,133,244,0.4)",
    bgImage: "/images/hero/google-ads-bg.jpg",
    bgImageDark: "/images/hero/google-ads-bg.jpg",
    bgImageLight: "/images/hero/hero-google-light.jpg",
    logo: <GoogleAdsLogo className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 shrink-0" />,
    headingPrefix: "Google",
    headingHighlight: "Ads",
    headingHighlightColor: "#4285F4",
    floatingBadges: (
      <>
        <GoogleSearchBadge className="w-10 h-10 sm:w-12 sm:h-12" />
        <YouTubeBadge className="w-10 h-10 sm:w-12 sm:h-12" />
      </>
    ),
    bullets: [
      "More Visibility. More Clicks.",
      "More Customers. More Growth.",
    ],
    accentGradient: "from-[#4285F4] via-[#FBBC05] to-[#34A853]",
    pills: [
      {
        title: "Search Ads",
        subtitle: "Capture high intent customers",
        icon: <SearchIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
      {
        title: "YouTube Ads",
        subtitle: "Reach through video campaigns",
        icon: <YouTubeBadge className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
      {
        title: "Display Ads",
        subtitle: "Build omnipresent brand awareness",
        icon: <LayoutIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
      {
        title: "Shopping Ads",
        subtitle: "Showcase products with maximum ROAS",
        icon: <ShoppingBagIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
    ],
    cards: [
      {
        id: "ga-1",
        title: "E-commerce",
        sub1: "More sales.",
        sub2: "Higher revenue ↗",
        icon: <CartIcon className="w-4 h-4" />,
        adHeadline: "Search & Shopping Ads",
        image: "/images/cards/ga-photo-1.jpg",
        cta: "Shop Now",
        metric: "24.8K Clicks",
      },
      {
        id: "ga-2",
        title: "Real Estate",
        sub1: "More leads.",
        sub2: "More closings ↗",
        icon: <HomeIcon className="w-4 h-4" />,
        adHeadline: "High-Intent Buyers",
        image: "/images/cards/ga-photo-2.jpg",
        cta: "Learn More",
        metric: "1.2M Impr.",
      },
      {
        id: "ga-3",
        title: "Healthcare",
        sub1: "More appointments.",
        sub2: "Healthier business ↗",
        icon: <StethoscopeIcon className="w-4 h-4" />,
        adHeadline: "Local Patient Searches",
        image: "/images/cards/ga-photo-3.jpg",
        cta: "Book Now",
        metric: "1.8K Conv.",
      },
      {
        id: "ga-4",
        title: "Education",
        sub1: "More enrollments.",
        sub2: "Bigger reach ↗",
        icon: <GraduationCapIcon className="w-4 h-4" />,
        adHeadline: "Course Registration Ads",
        image: "/images/cards/ga-photo-4.jpg",
        cta: "Learn More",
        metric: "$12.45 CPA",
      },
      {
        id: "ga-5",
        title: "Travel & Hosp.",
        sub1: "More bookings.",
        sub2: "More adventures ↗",
        icon: <PlaneIcon className="w-4 h-4" />,
        adHeadline: "Hotel & Flight Searches",
        image: "/images/cards/ga-photo-5.jpg",
        cta: "Book Now",
        metric: "+72% Growth",
      },
      {
        id: "ga-6",
        title: "B2B / SaaS",
        sub1: "More qualified leads.",
        sub2: "Faster growth ↗",
        icon: <BriefcaseIcon className="w-4 h-4" />,
        adHeadline: "Software Solution Ads",
        image: "/images/cards/ga-photo-7.jpg",
        cta: "Get Demo",
        metric: "+76% ROI",
      },
    ],
  },
  {
    id: "web-dev",
    title: "Web & Software Engineering",
    tabLabel: "Web & App Dev",
    badgeTag: "Conversion Engineering & Web Tech",
    liveStat: "Core Vitals: 100/100 • 0.8s FCP",
    themeColor: "#06B6D4",
    accentBorder: "border-[#06B6D4]/40",
    glowColor: "rgba(6,182,212,0.4)",
    bgImage: "/images/hero/web-dev-bg.jpg",
    bgImageDark: "/images/hero/web-dev-bg.jpg",
    bgImageLight: "/images/hero/hero-tech-light.jpg",
    logo: <CodeTerminalLogo className="w-10 h-10 sm:w-13 sm:h-13 lg:w-15 lg:h-15 shrink-0" />,
    headingPrefix: "Tech &",
    headingHighlight: "Dev",
    headingHighlightColor: "#06B6D4",
    floatingBadges: (
      <>
        <ReactNextBadge className="w-10 h-10 sm:w-12 sm:h-12" />
        <CloudBadge className="w-10 h-10 sm:w-12 sm:h-12" />
      </>
    ),
    bullets: [
      "Custom Code. Modern Architecture.",
      "Lightning Fast. High Conversion.",
      "Scale Your Product.",
    ],
    accentGradient: "from-[#0284C7] via-[#06B6D4] to-[#10B981]",
    pills: [
      {
        title: "Custom Web Apps",
        subtitle: "Next.js, React & Node.js architecture",
        icon: <CodeIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
      {
        title: "Mobile Apps",
        subtitle: "iOS & Android high-performance apps",
        icon: <SmartphoneIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
      {
        title: "UI/UX Engineering",
        subtitle: "Figma to pixel-perfect code",
        icon: <LayersIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
      {
        title: "Cloud & DevOps",
        subtitle: "99.9% uptime with scalable APIs",
        icon: <CloudIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
    ],
    cards: [
      {
        id: "wd-1",
        title: "Responsive Web",
        sub1: "Desktop & Mobile.",
        sub2: "Next.js & Tailwind.",
        icon: <CodeIcon className="w-4 h-4" />,
        adHeadline: "Modern Fast Websites",
        image: "/images/cards/wd-1.jpg",
        cta: "View Stack",
        metric: "100 Perf.",
      },
      {
        id: "wd-2",
        title: "Full-Stack Dev",
        sub1: "Clean architecture.",
        sub2: "TypeScript & APIs.",
        icon: <CodeIcon className="w-4 h-4" />,
        adHeadline: "Scalable Web Engines",
        image: "/images/cards/wd-2.jpg",
        cta: "Explore Code",
        metric: "Modular",
      },
      {
        id: "wd-3",
        title: "Multi-Platform",
        sub1: "iOS & Android.",
        sub2: "Native experience.",
        icon: <SmartphoneIcon className="w-4 h-4" />,
        adHeadline: "Mobile & Tablet Apps",
        image: "/images/cards/wd-3.jpg",
        cta: "See Builds",
        metric: "Cross-OS",
      },
      {
        id: "wd-4",
        title: "Cloud & APIs",
        sub1: "Microservices.",
        sub2: "99.99% uptime.",
        icon: <CloudIcon className="w-4 h-4" />,
        adHeadline: "DevOps & Cloud Server",
        image: "/images/cards/wd-4.jpg",
        cta: "Deploy Now",
        metric: "99.99% Up",
      },
      {
        id: "wd-5",
        title: "System Design",
        sub1: "Enterprise scale.",
        sub2: "High throughput.",
        icon: <LayersIcon className="w-4 h-4" />,
        adHeadline: "Architecture & UI/UX",
        image: "/images/cards/wd-5.jpg",
        cta: "Architecture",
        metric: "Scale",
      },
      {
        id: "wd-6",
        title: "API & Data",
        sub1: "Robust pipelines.",
        sub2: "Instant sync.",
        icon: <CloudIcon className="w-4 h-4" />,
        adHeadline: "Fast Backend Services",
        image: "/images/cards/wd-1.jpg",
        cta: "Integrate",
        metric: "REST/GraphQL",
      },
    ],
  },
  {
    id: "real-estate",
    title: "Real Estate Growth Marketing",
    tabLabel: "Real Estate",
    badgeTag: "Real Estate HNI Acquisition",
    liveStat: "HNI Buyer Pipeline: ₹240Cr+",
    themeColor: "#10B981",
    accentBorder: "border-[#10B981]/40",
    glowColor: "rgba(16,185,129,0.4)",
    bgImage: "/images/hero/real-estate-desk.jpg",
    bgImageDark: "/images/hero/real-estate-desk.jpg",
    bgImageLight: "/images/hero/hero-realestate-light.jpg",
    logo: <RealEstateLogo className="w-10 h-10 sm:w-13 sm:h-13 lg:w-15 lg:h-15 shrink-0" />,
    headingPrefix: "Real Estate",
    headingHighlight: "Ads",
    headingHighlightColor: "#10B981",
    floatingBadges: (
      <>
        <VerifiedBadge className="w-10 h-10 sm:w-12 sm:h-12" />
        <SiteVisitBadge className="w-10 h-10 sm:w-12 sm:h-12" />
      </>
    ),
    bullets: [
      "Target High-Net-Worth Buyers.",
      "Generate Verified Site Visits.",
      "Close Properties Faster.",
    ],
    accentGradient: "from-[#059669] via-[#10B981] to-[#F59E0B]",
    pills: [
      {
        title: "Verified Buyer Leads",
        subtitle: "Pre-qualified high-budget investors",
        icon: <TargetIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
      {
        title: "High-Ticket Conversions",
        subtitle: "Luxury villas & penthouses",
        icon: <BuildingIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
      {
        title: "Site Visit Acceleration",
        subtitle: "Drive direct on-ground footfall",
        icon: <MapPinIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />,
      },
    ],
    cards: [
      {
        id: "re-1",
        title: "Luxury Villas",
        sub1: "Illuminated pools.",
        sub2: "Private estates.",
        icon: <HomeIcon className="w-4 h-4" />,
        adHeadline: "High-Ticket Buyers",
        image: "/images/cards/re-1.jpg",
        cta: "View Villas",
        metric: "HNI Leads",
      },
      {
        id: "re-2",
        title: "High-Rise Towers",
        sub1: "Fast booking.",
        sub2: "Pre-launch ads.",
        icon: <BuildingIcon className="w-4 h-4" />,
        adHeadline: "Urban Skyline Living",
        image: "/images/cards/re-2.jpg",
        cta: "Site Visit",
        metric: "Verified",
      },
      {
        id: "re-3",
        title: "Luxury Interiors",
        sub1: "Architectural styling.",
        sub2: "Modern design.",
        icon: <HomeIcon className="w-4 h-4" />,
        adHeadline: "Showcase Penthouse",
        image: "/images/cards/re-3.jpg",
        cta: "Showcase",
        metric: "Premium",
      },
      {
        id: "re-4",
        title: "Commercial Parks",
        sub1: "Corporate leasing.",
        sub2: "Prime retail.",
        icon: <BuildingIcon className="w-4 h-4" />,
        adHeadline: "Grade-A Office Space",
        image: "/images/cards/re-4.jpg",
        cta: "Get Brochure",
        metric: "Grade A",
      },
      {
        id: "re-5",
        title: "Residential Homes",
        sub1: "Family gated living.",
        sub2: "Green spaces.",
        icon: <HomeIcon className="w-4 h-4" />,
        adHeadline: "Masterplan Communities",
        image: "/images/cards/re-5.jpg",
        cta: "Floorplans",
        metric: "Gated",
      },
      {
        id: "re-6",
        title: "High-ROI Growth",
        sub1: "Capital appreciation.",
        sub2: "Wealth creation.",
        icon: <TrendingUpIcon className="w-4 h-4" />,
        adHeadline: "Strategic Property Deals",
        image: "/images/cards/re-6.jpg",
        cta: "Invest Now",
        metric: "+38% ROI",
      },
    ],
  },
];

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const current = slides[activeSlide];

  // Auto-advance through all 4 slides smoothly every 5 seconds (1 -> 2 -> 3 -> 4 -> 1)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section
      className="relative w-full min-h-screen pt-20 bg-slate-50 dark:bg-[#060D1F] border-b border-slate-200 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between transition-colors duration-300"
      id="home"
      aria-label="AdForge Tech High Performance Hero Carousel"
    >
      {/* Background Image Carousel with Cross-Fade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Dedicated Light Mode Image - 100% Crystal Sharp */}
            <Image
              src={current.bgImageLight}
              alt={`${current.title} Light`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-100 dark:hidden transition-opacity duration-700"
            />
            {/* Dedicated Dark Mode Image */}
            <Image
              src={current.bgImageDark}
              alt={`${current.title} Dark`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center hidden dark:block opacity-100 transition-opacity duration-700"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dynamic Digital Marketing Radial Energy Auras (Dark Mode Only to eliminate blur in Light Mode) */}
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.35, 0.15],
            x: [0, 35, 0],
            y: [0, -25, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden dark:block absolute -top-32 left-1/4 w-[520px] h-[520px] rounded-full blur-[130px] pointer-events-none opacity-70"
          style={{ background: `radial-gradient(circle, ${current.themeColor} 0%, transparent 70%)` }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.28, 0.1],
            x: [0, -35, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="hidden dark:block absolute top-1/3 -right-20 w-[480px] h-[480px] rounded-full blur-[140px] pointer-events-none opacity-60"
          style={{ background: `radial-gradient(circle, ${current.themeColor} 0%, transparent 70%)` }}
        />

        {/* Cyber-Marketing Ambient Grid Watermark (Dark Mode Only) */}
        <div
          className="hidden dark:block absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #38BDF8 1px, transparent 1px), linear-gradient(to bottom, #38BDF8 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          }}
        />

        {/* Cinema Ambient Vignette: Left-edge directional dark gradient for crystal clear white text legibility while preserving 100% image clarity, vibrancy and zero blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 via-50% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* TOP ROW: Left Branding & Right Capability Pills */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative z-20 flex flex-col justify-between lg:flex-row lg:items-start px-4 sm:px-8 lg:px-14 xl:px-20 pt-4 sm:pt-6 lg:pt-8 pb-4 pointer-events-none"
        >
          {/* Left Side: Service Heading & Bullet Points */}
          <div className="flex flex-col items-start max-w-2xl lg:max-w-3xl pointer-events-auto">
            <div className="flex items-center gap-2.5 sm:gap-4 lg:gap-5 flex-nowrap">
              {/* Logo & Heading */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 sm:gap-4 shrink-0"
              >
                <div className="shrink-0 drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                  {current.logo}
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white flex items-center gap-2 whitespace-nowrap drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
                  {current.headingPrefix}{" "}
                  <span
                    style={{ color: current.headingHighlightColor }}
                    className="drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]"
                  >
                    {current.headingHighlight}
                  </span>
                </h1>
              </motion.div>

              {/* Floating Social / Tech Badges with Gentle Levitation Animation */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative flex items-center gap-2 sm:gap-2.5 ml-1 sm:ml-2 shrink-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
              >
                {current.floatingBadges}
              </motion.div>
            </div>

            {/* Bullet Points with Staggered Entrance & Signal Dot */}
            <div className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2 text-base sm:text-2xl lg:text-3xl font-bold tracking-tight leading-snug">
              {current.bullets.map((bullet, idx) => (
                <motion.div
                  key={bullet}
                  initial={{ opacity: 0, x: -25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + idx * 0.12 }}
                  className="flex items-center gap-2.5 sm:gap-3"
                >
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#00C6FF] shadow-[0_0_10px_#00C6FF] shrink-0" />
                  <p className="text-white font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                    {bullet}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Glowing Accent Underline Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "6rem", opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`mt-4 sm:mt-5 h-1 sm:h-1.5 rounded-full bg-gradient-to-r ${current.accentGradient} shadow-[0_0_12px_rgba(56,189,248,0.7)]`}
            />
          </div>

          {/* Right Side: Floating Capability Pills */}
          <div className="flex justify-end pt-3 sm:pt-1 pointer-events-auto">
            <div className="w-full max-w-[270px] sm:max-w-[295px] flex flex-col gap-2 sm:gap-2.5">
              {current.pills.map((pill, idx) => (
                <motion.div
                  key={pill.title}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative flex items-center justify-between gap-3 px-3.5 py-2 sm:py-2.5 rounded-xl bg-white/90 dark:bg-[#0A1A36]/85 backdrop-blur-xl border border-slate-200/90 dark:border-slate-700/60 shadow-[0_4px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_6px_22px_rgba(0,0,0,0.4)] hover:border-[#046BD2] dark:hover:border-[#38BDF8] hover:shadow-[0_8px_24px_rgba(4,107,210,0.2)] dark:hover:shadow-[0_8px_28px_rgba(4,107,210,0.4)] transition-all duration-300"
                >
                  <div className="flex-1 text-left select-none">
                    <h3 className="text-slate-900 dark:text-white font-bold text-xs sm:text-sm tracking-tight leading-snug">
                      {pill.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-[10px] sm:text-[11px] font-normal leading-snug mt-0.5">
                      {pill.subtitle}
                    </p>
                  </div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                    style={{ backgroundColor: current.themeColor }}
                  >
                    {pill.icon}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* BOTTOM ROW: Slide-Specific Showcase Cards with 5s Transition */}
      <div
        className="relative z-20 w-full px-3 sm:px-6 lg:px-8 xl:px-10 pb-5 sm:pb-7 pt-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full flex items-stretch gap-2.5 sm:gap-3 lg:gap-3.5 xl:gap-4 overflow-x-auto lg:overflow-visible pb-3 pt-1 scroll-smooth no-scrollbar select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {current.cards.map((card, idx) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 + idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative flex-1 min-w-[185px] lg:min-w-0 rounded-2xl bg-white/95 dark:bg-[#081528]/85 backdrop-blur-xl border border-slate-200/90 dark:border-slate-700/60 shadow-[0_4px_18px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_26px_rgba(0,0,0,0.4)] hover:border-[#046BD2] dark:hover:border-[#38BDF8] hover:shadow-[0_10px_30px_rgba(4,107,210,0.18)] dark:hover:shadow-[0_12px_36px_rgba(4,107,210,0.5)] transition-all duration-300 flex flex-col p-2.5 overflow-hidden cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start gap-2 pb-2 border-b border-slate-100 dark:border-blue-950/80">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white shadow-sm group-hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: current.themeColor }}
                  >
                    {card.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-slate-900 dark:text-white font-bold text-xs sm:text-sm tracking-tight leading-tight truncate">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-300 text-[10px] leading-tight mt-0.5 truncate">
                      {card.sub1}
                    </p>
                    <p className="text-slate-500 dark:text-slate-300 text-[10px] leading-tight truncate">
                      {card.sub2}
                    </p>
                  </div>
                </div>

                {/* Smartphone / Screen Frame */}
                <div className="mt-2 pt-1.5 pb-1 px-1 rounded-[14px] bg-slate-100/90 dark:bg-[#020612] border border-slate-200/90 dark:border-slate-700/70 shadow-xs dark:shadow-lg flex flex-col transition-transform duration-300 group-hover:scale-[1.02]">
                  <div className="w-7 h-1 rounded-full bg-slate-300 dark:bg-slate-800 mx-auto mb-1 opacity-80" />

                  {/* Inner Content */}
                  <div className="rounded-[10px] overflow-hidden bg-white text-slate-900 flex flex-col shadow-inner">
                    {/* Sponsored Header */}
                    <div className="flex items-center justify-between px-2 py-1 bg-slate-50 border-b border-slate-100">
                      <div className="leading-none">
                        <span className="text-[8.5px] font-bold text-slate-900 block leading-tight">
                          Your Brand
                        </span>
                        <span className="text-[6.5px] text-slate-500 block leading-none mt-0.5">
                          Sponsored
                        </span>
                      </div>
                      <span className="text-slate-400 text-[8px] font-bold">•••</span>
                    </div>

                    {/* Ad Headline Banner */}
                    <div className="px-2 py-0.5 bg-gradient-to-r from-slate-900 to-[#0A1628] text-white">
                      <p className="text-[8.5px] font-semibold tracking-tight truncate">
                        {card.adHeadline}
                      </p>
                    </div>

                    {/* Creative Image — explicitly defined height with public/images/industries/ */}
                    <div
                      className="relative w-full overflow-hidden bg-slate-100 dark:bg-slate-900"
                      style={{ height: "105px", minHeight: "105px" }}
                    >
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 180px, 220px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-400"
                      />
                    </div>

                    {/* Action Bar */}
                    <div className="p-1.5 bg-slate-50 flex items-center justify-between border-t border-slate-100">
                      <span
                        className="px-2 py-0.5 rounded-md text-white text-[8px] font-bold tracking-tight shadow-xs transition-colors"
                        style={{ backgroundColor: current.themeColor }}
                      >
                        {card.cta}
                      </span>
                      {card.metric && (
                        <span className="text-[8px] text-slate-600 font-semibold">
                          {card.metric}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
