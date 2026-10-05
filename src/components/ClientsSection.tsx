"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Quote, Grid, SlidersHorizontal } from "lucide-react";
import clientsData from "@/data/clients.json";

interface ClientItem {
  id: string;
  name: string;
  domain?: string;
  website?: string;
  featured?: boolean;
}

interface GoogleReview {
  id: string;
  name: string;
  service: string;
  timeAgo: string;
  rating: number;
  review: string;
  avatarBg: string;
  initials: string;
}

const googleReviews: GoogleReview[] = [
  {
    id: "review-1",
    name: "Priya Verma",
    service: "SEO Services",
    timeAgo: "2 weeks ago",
    rating: 5,
    review:
      "I wanted to improve my website's ranking and visibility, and AdForge Tech helped me do just that. Their SEO work is solid from keyword research to backlinking, everything is handled professionally. My website has started to rank higher, and organic traffic is increasing.",
    avatarBg: "bg-purple-600",
    initials: "PV",
  },
  {
    id: "review-2",
    name: "David Connor",
    service: "Full Digital Marketing Package",
    timeAgo: "1 month ago",
    rating: 5,
    review:
      "AdForge Tech is managing everything for my brand from SEO, social media, paid ads, to content and web design. It's like having a full in-house marketing team. The communication is smooth, results are consistent, and I finally feel like my business is heading in the right direction.",
    avatarBg: "bg-blue-600",
    initials: "DC",
  },
  {
    id: "review-3",
    name: "Rohan Mehta",
    service: "Google Ads (PPC)",
    timeAgo: "3 weeks ago",
    rating: 5,
    review:
      "Our Google Ads blended ROAS jumped from 1.8x to over 4.4x within two months of onboarding with AdForge Tech. Their Performance Max campaign structure, negative keyword sculpting, and conversion tracking are genuinely enterprise-grade.",
    avatarBg: "bg-emerald-600",
    initials: "RM",
  },
  {
    id: "review-4",
    name: "Ananya Patel",
    service: "Meta Ads (FB & IG)",
    timeAgo: "1 month ago",
    rating: 5,
    review:
      "The creative testing framework they implemented for our Meta Ads scaled our D2C brand's monthly revenue past ₹45 Lakhs while cutting our blended customer acquisition cost (CAC) by 32%. Highly recommend their growth team.",
    avatarBg: "bg-rose-600",
    initials: "AP",
  },
  {
    id: "review-5",
    name: "Marcus Sterling",
    service: "Web & CRO Development",
    timeAgo: "2 months ago",
    rating: 5,
    review:
      "Not only did they redesign our landing pages with lightning-fast load speeds, but our lead form conversion rate increased from 2.1% to 5.8%. The team delivers transparent weekly reporting and true performance marketing engineering.",
    avatarBg: "bg-amber-600",
    initials: "MS",
  },
  {
    id: "review-6",
    name: "Neha Kapoor",
    service: "E-Commerce Growth",
    timeAgo: "2 months ago",
    rating: 5,
    review:
      "No vanity metrics or fluff. Every weekly sprint review is packed with actionable GA4 and server-side CAPI attribution data. The most professional agency partnership we have experienced in 6 years of business.",
    avatarBg: "bg-teal-600",
    initials: "NK",
  },
];

// Official Google Wordmark SVG with authentic multi-colored paths
function GoogleWordmark({ className = "h-6 sm:h-7 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 272 92" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.33 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        fill="#EA4335"
      />
      <path
        d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.33 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
        fill="#FBBC05"
      />
      <path
        d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.62h9.45zm-8.99 21.01c0-7.81-5.21-13.44-11.84-13.44-6.72 0-12.35 5.63-12.35 13.44 0 7.72 5.63 13.44 12.35 13.44 6.63 0 11.84-5.72 11.84-13.44z"
        fill="#4285F4"
      />
      <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853" />
      <path
        d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.24c-1.09-2.77-4.37-4.7-8.23-4.7-4.96 0-11.84 4.37-11.59 12.94z"
        fill="#EA4335"
      />
      <path
        d="M35.29 41.41V32.2h33.68c.34 1.76.5 3.7.5 5.96 0 7.39-2.02 16.55-8.57 23.1-6.47 6.64-15.12 10.25-25.61 10.25C16.05 71.51 0 55.46 0 36.21 0 16.96 16.05.91 35.29.91c9.74 0 16.97 3.78 22.18 8.82l-6.22 6.22c-3.78-3.53-8.82-6.22-15.96-6.22-14.7 0-26.29 11.93-26.29 26.46 0 14.54 11.59 26.46 26.29 26.46 9.49 0 14.87-3.78 18.31-7.22 2.86-2.86 4.79-6.97 5.54-12.77H35.29v-1.25z"
        fill="#4285F4"
      />
    </svg>
  );
}

// Multi-color Google "G" SVG Icon
function GoogleGIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
        fill="#EA4335"
      />
    </svg>
  );
}

// Client Logo renderer with Google Favicon Service fallback
function ClientLogo({ name, domain }: { name: string; domain?: string }) {
  const [hasError, setHasError] = useState(false);

  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (!domain || hasError) {
    return (
      <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/70 border border-blue-200/80 dark:border-blue-900/80 text-[#046BD2] dark:text-[#38BDF8] font-black text-xs flex items-center justify-center shrink-0 select-none shadow-2xs">
        {initials}
      </div>
    );
  }

  return (
    <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 p-1 flex items-center justify-center shrink-0 overflow-hidden group-hover:border-blue-200 dark:group-hover:border-blue-700 transition-colors shadow-2xs">
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt={`${name} logo`}
        width={24}
        height={24}
        loading="lazy"
        onError={() => setHasError(true)}
        className="w-5 h-5 object-contain"
      />
    </div>
  );
}

export default function ClientsSection() {
  const clientsList = clientsData as ClientItem[];
  const displayClients = [...clientsList, ...clientsList, ...clientsList];

  // Responsive items-per-page state
  const [cardsPerPage, setCardsPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [viewMode, setViewMode] = useState<"slider" | "grid">("slider");

  // Adjust cards per page dynamically based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1); // Mobile: 1 full card
      } else if (window.innerWidth < 1024) {
        setCardsPerPage(2); // Tablet: 2 cards
      } else {
        setCardsPerPage(3); // Desktop: 3 cards
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(googleReviews.length / cardsPerPage);

  // Keep currentPage within bounds when screen resizes
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(Math.max(0, totalPages - 1));
    }
  }, [totalPages, currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Slice visible reviews for current slide
  const startIndex = currentPage * cardsPerPage;
  const visibleReviews = googleReviews.slice(startIndex, startIndex + cardsPerPage);

  return (
    <section
      id="clients"
      className="py-20 sm:py-24 bg-white dark:bg-slate-950 border-t border-slate-200/80 dark:border-slate-800 transition-colors overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header Matching Reference */}
        <div className="text-center flex flex-col items-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">
            EXCELLENT SERVICES
          </h2>
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 font-medium mt-2">
            Based On Our Customer Reviews
          </p>

          {/* Official Google Brand Graphic & Rating Summary */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-slate-50 dark:bg-slate-900/90 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
            {/* Google Wordmark SVG with authentic multi-colored paths */}
            <div className="flex items-center">
              <GoogleWordmark className="h-6 sm:h-7 w-auto" />
            </div>

            <div className="hidden sm:block w-px h-5 bg-slate-300 dark:bg-slate-700" />

            {/* Solid Golden Stars with explicit inline fill & stroke */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill="#F59E0B"
                    stroke="#F59E0B"
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                5.0 / 5.0
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                (120+ Verified Reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Sub-header Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Verified Google Customer Testimonials
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Switcher (Grid vs Slider) */}
            <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setViewMode("slider")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "slider"
                    ? "bg-white dark:bg-slate-800 text-[#046BD2] dark:text-[#38BDF8] shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Slider
              </button>
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-white dark:bg-slate-800 text-[#046BD2] dark:text-[#38BDF8] shadow-xs"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                All (6)
              </button>
            </div>

            {/* Slider Navigation Arrows (when in slider mode) */}
            {viewMode === "slider" && (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevPage}
                  aria-label="Previous reviews"
                  className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#046BD2] dark:hover:text-[#168ED3] transition-colors shadow-xs active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextPage}
                  aria-label="Next reviews"
                  className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[#046BD2] dark:hover:text-[#168ED3] transition-colors shadow-xs active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Reviews Container: Responsive Grid Layout */}
        <div
          className={`grid gap-6 transition-all duration-300 ${
            viewMode === "grid"
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : cardsPerPage === 1
              ? "grid-cols-1"
              : cardsPerPage === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {(viewMode === "grid" ? googleReviews : visibleReviews).map((rev) => (
            <div
              key={rev.id}
              className="w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#046BD2]/50 dark:hover:border-[#168ED3]/50 transition-all duration-200 flex flex-col justify-between relative group animate-fadeIn"
            >
              <div>
                {/* Header: Google Icon + Name + Service */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="shrink-0 p-2 rounded-full bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/60 shadow-2xs">
                    <GoogleGIcon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                        {rev.name}
                      </h3>
                      <span title="Verified Google Review" className="inline-flex shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium truncate mt-0.5">
                      {rev.service}
                    </p>
                  </div>
                </div>

                {/* Star Rating & Time */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        fill="#F59E0B"
                        stroke="#F59E0B"
                      />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {rev.timeAgo}
                  </span>
                </div>

                {/* Quotation Mark Watermark & Review Text */}
                <div className="relative pt-1">
                  <Quote
                    className="w-8 h-8 text-blue-100 dark:text-slate-800 mb-1 transform -scale-x-100 opacity-90"
                    aria-hidden="true"
                  />
                  <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed break-words relative z-10">
                    &ldquo;{rev.review}&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Subtle Trust Indicator */}
              <div className="mt-6 pt-3.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Verified Google Customer
                </span>
                <span className="text-[#4285F4] font-semibold flex items-center gap-1">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots (when in slider mode) */}
        {viewMode === "slider" && totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentPage(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`transition-all duration-200 rounded-full cursor-pointer ${
                  currentPage === idx
                    ? "w-8 h-2.5 bg-[#046BD2] dark:bg-[#38BDF8]"
                    : "w-2.5 h-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                }`}
              />
            ))}
          </div>
        )}

        {/* Brands We Have Scaled - Continuous Logo Track */}
        <div className="mt-16 pt-10 border-t border-slate-200/80 dark:border-slate-800">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-6">
            BRANDS SCALED BY OUR GROWTH ENGINEERS
          </p>

          <div className="relative w-full overflow-hidden py-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-white dark:from-slate-950 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-white dark:from-slate-950 to-transparent z-10" />

            <div className="animate-slide-ltr flex items-center gap-4">
              {displayClients.map((client, idx) => {
                const hasWebsite = Boolean(client.website);

                const content = (
                  <>
                    <ClientLogo name={client.name} domain={client.domain} />
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200 group-hover:text-[#046BD2] dark:group-hover:text-[#168ED3] transition-colors whitespace-nowrap">
                      {client.name}
                    </span>
                  </>
                );

                if (hasWebsite) {
                  return (
                    <a
                      key={`${client.id}-${idx}`}
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Visit ${client.name}`}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-[#046BD2]/50 dark:hover:border-[#168ED3]/50 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 shrink-0 group select-none cursor-pointer"
                    >
                      {content}
                    </a>
                  );
                }

                return (
                  <div
                    key={`${client.id}-${idx}`}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-2xs hover:border-[#046BD2]/50 dark:hover:border-[#168ED3]/50 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 shrink-0 group select-none"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
