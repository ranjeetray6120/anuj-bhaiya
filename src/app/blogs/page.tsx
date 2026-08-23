"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const categories = [
  "All",
  "Google Ads",
  "Meta Ads",
  "SEO & Organic",
  "D2C Growth",
  "Conversion Rate",
  "AI Marketing",
];

const blogPosts = [
  {
    id: "scaling-pmax-google-ads",
    title: "The Ultimate Blueprint to Scaling Google PMax Campaigns Past ₹50L/mo",
    excerpt:
      "Discover the exact audience signal framework, asset group structuring, and negative keyword strategies we use to scale Google Ads profitably.",
    category: "Google Ads",
    author: "AdForge Growth Team",
    date: "Oct 18, 2024",
    readTime: "6 min read",
    featured: true,
    gradient: "from-blue-600 via-indigo-600 to-sky-500",
    badge: "Case Study",
    stats: "+320% ROAS",
  },
  {
    id: "advantage-plus-meta-ads",
    title: "How We Cut CPA by 45% for a D2C Fashion Brand Using Meta ASC+",
    excerpt:
      "Stop micro-managing ad sets. Learn how broad targeting and creative diversification in Meta Advantage+ Shopping Campaigns unlock unprecedented scale.",
    category: "Meta Ads",
    author: "Performance Lead",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    gradient: "from-purple-600 to-indigo-700",
    badge: "Strategy",
    stats: "-45% CPA",
  },
  {
    id: "seo-in-ai-search-era",
    title: "SEO in the Age of AI: How to Rank in Google SGE & ChatGPT Search",
    excerpt:
      "Traditional keyword stuffing is dead. Here is how entity-based optimization and topical authority capture top spots in modern AI-assisted search engines.",
    category: "SEO & Organic",
    author: "SEO Director",
    date: "Sep 28, 2024",
    readTime: "8 min read",
    gradient: "from-emerald-600 to-teal-700",
    badge: "SEO Guide",
    stats: "7.6M Clicks",
  },
  {
    id: "creative-testing-matrix-roas",
    title: "The 10x Creative Testing Matrix: Hook, Body & CTA Variations",
    excerpt:
      "Creative fatigue kills ad accounts. Use this systematic sprint system to test 30+ UGC and motion design variations every single week.",
    category: "Meta Ads",
    author: "Creative Director",
    date: "Sep 20, 2024",
    readTime: "4 min read",
    gradient: "from-rose-500 to-pink-600",
    badge: "Creatives",
    stats: "4.8x ROAS",
  },
  {
    id: "landing-page-cro-framework",
    title: "7 Landing Page Teardowns: Why These Pages Convert at 8.4%",
    excerpt:
      "A deep dive into above-the-fold value propositions, social proof placement, sticky mobile CTAs, and frictionless one-page checkouts.",
    category: "Conversion Rate",
    author: "CRO Specialist",
    date: "Sep 15, 2024",
    readTime: "7 min read",
    gradient: "from-amber-500 to-orange-600",
    badge: "CRO",
    stats: "8.4% Conv. Rate",
  },
  {
    id: "d2c-retention-email-whatsapp",
    title: "From First Purchase to 40% Repeat Rate: The D2C Retention Engine",
    excerpt:
      "Acquisition brings the customer; retention prints the profit. Build automated WhatsApp & Email flows that drive consistent 90-day LTV expansion.",
    category: "D2C Growth",
    author: "Retention Lead",
    date: "Sep 08, 2024",
    readTime: "5 min read",
    gradient: "from-cyan-600 to-blue-700",
    badge: "Retention",
    stats: "40% Repeat Rate",
  },
  {
    id: "ai-marketing-workflows-2024",
    title: "Automating B2B Lead Gen with AI Agents and Custom Scraping",
    excerpt:
      "How forward-thinking agencies are leveraging custom AI pipelines to enrich lead lists, write hyper-personalized pitches, and book qualified demos.",
    category: "AI Marketing",
    author: "AdForge Tech",
    date: "Aug 30, 2024",
    readTime: "6 min read",
    gradient: "from-violet-600 to-purple-800",
    badge: "AI & Automation",
    stats: "45,000+ Leads",
  },
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((p) => p.featured) || blogPosts[0];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hero Header */}
        <section
          className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, #168ed3 0%, #1a97db 50%, #1f9fe3 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30">
              AdForge Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Insights, Strategies &amp;{" "}
              <span className="text-[#FFDE59]">Growth Guides</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              Actionable digital marketing blueprints, Google &amp; Meta Ads
              breakdowns, and real case studies from the performance marketing trenches.
            </p>

            {/* Search Input */}
            <div className="w-full max-w-lg mt-4">
              <input
                type="text"
                placeholder="Search guides, strategies, or topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-slate-800 placeholder-slate-400 px-5 py-3.5 rounded-xl shadow-lg border-0 focus:ring-2 focus:ring-[#FFDE59] text-sm outline-none"
              />
            </div>
          </div>
        </section>

        {/* Category Pills Bar */}
        <section className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#046BD2] text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Article Card */}
          {selectedCategory === "All" && !searchQuery && (
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-[#D82C5E]" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Featured Breakdown
                </h2>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
                {/* Visual side */}
                <div
                  className={`lg:col-span-6 bg-gradient-to-br ${featuredPost.gradient} p-8 sm:p-12 flex flex-col justify-between text-white relative overflow-hidden min-h-[280px]`}
                >
                  <div className="flex justify-between items-start z-10">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-md border border-white/30">
                      {featuredPost.badge}
                    </span>
                    <span className="bg-[#FFDE59] text-slate-900 text-xs font-extrabold px-3 py-1.5 rounded-md shadow-sm">
                      {featuredPost.stats}
                    </span>
                  </div>

                  <div className="z-10 mt-12">
                    <span className="text-white/80 text-xs font-semibold tracking-wider uppercase block mb-1">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight drop-shadow-sm">
                      {featuredPost.title}
                    </h3>
                  </div>

                  {/* Decorative background glow */}
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                </div>

                {/* Content side */}
                <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                        <span className="w-6 h-6 rounded-full bg-[#168ed3] text-white flex items-center justify-center text-[10px] font-bold">
                          AF
                        </span>
                        {featuredPost.author}
                      </span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-[#046BD2] hover:text-[#045CB4] font-bold text-sm group-hover:translate-x-1 transition-all duration-200"
                    >
                      Read Full Case Study →
                    </Link>

                    <span className="text-xs text-slate-400 font-medium">
                      Proven Framework
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Articles */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                {selectedCategory === "All"
                  ? "All Growth Articles"
                  : `${selectedCategory} Articles`}
              </h2>
              <span className="text-xs sm:text-sm font-semibold text-slate-500">
                Showing {filteredPosts.length} guides
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center my-8">
                <p className="text-slate-500 text-lg mb-4">
                  No articles found matching &quot;{searchQuery}&quot; in {selectedCategory}.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="bg-[#046BD2] hover:bg-[#045CB4] text-white text-xs font-bold uppercase tracking-wider px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden group"
                  >
                    {/* Top graphic block */}
                    <div
                      className={`h-48 bg-gradient-to-br ${post.gradient} p-6 flex flex-col justify-between text-white relative overflow-hidden`}
                    >
                      <div className="flex justify-between items-start z-10">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-white/20">
                          {post.badge}
                        </span>
                        <span className="bg-[#FFDE59] text-slate-900 text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow-xs">
                          {post.stats}
                        </span>
                      </div>

                      <div className="z-10">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                          {post.category}
                        </span>
                      </div>

                      {/* Subtle pattern */}
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
                    </div>

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#046BD2] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-700">
                            {post.author}
                          </span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <span className="text-[#046BD2] font-bold group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Newsletter / Free Growth Audit CTA Box */}
          <section className="mt-20 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 sm:p-14 relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-5">
              <span className="bg-[#D82C5E] !text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full">
                Stay Ahead of Algorithms
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Get Weekly Performance Marketing Playbooks in Your Inbox
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Join 15,000+ Founders &amp; Media Buyers. No spam. Only tested ROAS
                hacks, creative templates, and Google/Meta policy updates.
              </p>

              {subscribed ? (
                <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-6 py-4 rounded-xl text-sm font-semibold mt-4">
                  Thank you for subscribing! Check your inbox for our Top 10 High-ROAS Ad Templates.
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="w-full flex flex-col sm:flex-row gap-3 mt-4"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your business email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-slate-800/90 text-white placeholder-slate-400 px-5 py-3.5 rounded-xl border border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#168ed3] text-sm"
                  />
                  <button
                    type="submit"
                    className="bg-[#D82C5E] hover:bg-[#bf204d] !text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
                  >
                    Subscribe Free
                  </button>
                </form>
              )}

              <p className="text-[11px] text-slate-400 mt-1">
                Zero spam. Unsubscribe with 1-click anytime.
              </p>
            </div>

            {/* Ambient background glows */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#168ed3]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D82C5E]/20 rounded-full blur-3xl pointer-events-none" />
          </section>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
