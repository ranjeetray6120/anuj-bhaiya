"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Search, ArrowRight, BookOpen } from "lucide-react";

const categories = [
  "All",
  "Google Ads",
  "Meta Ads",
  "SEO & Organic",
  "D2C Growth",
  "Conversion Rate",
  "AI Marketing",
];

import { blogPosts } from "@/data/blogPosts";

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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Hero Header */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center bg-slate-50 border-b border-slate-200">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto flex flex-col items-center gap-4"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
              GROWTH STRATEGY VAULT
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
              Insights, Frameworks &amp;{" "}
              <span className="text-[#046BD2]">
                Growth Playbooks
              </span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Actionable performance marketing blueprints, Google &amp; Meta Ads breakdowns, and real case studies from the growth trenches.
            </p>

            {/* Search Input */}
            <div className="w-full max-w-md mt-2 relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                placeholder="Search guides, strategies, or channels..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white text-slate-900 placeholder:text-slate-400 pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-[#046BD2] focus:ring-2 focus:ring-[#046BD2]/15 text-sm outline-none transition-colors shadow-xs"
              />
            </div>
          </motion.div>
        </section>

        {/* Category Filter Bar */}
        <section className="bg-white border-b border-slate-200 sticky top-16 z-20 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl whitespace-nowrap transition-all duration-150 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#046BD2] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Featured Article Card */}
          {selectedCategory === "All" && !searchQuery && (
            <div className="mb-14">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Featured Case Study
                </h2>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 group">
                {/* Visual side */}
                <div
                  className={`lg:col-span-6 bg-gradient-to-br ${featuredPost.gradient} p-8 sm:p-12 flex flex-col justify-between text-white relative min-h-[280px]`}
                >
                  <div className="flex justify-between items-start z-10">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white/15 text-white border border-white/20">
                      {featuredPost.badge}
                    </span>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                      {featuredPost.stats}
                    </span>
                  </div>

                  <div className="z-10 mt-12">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/80">
                      {featuredPost.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug mt-2">
                      {featuredPost.title}
                    </h3>
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1.5 text-slate-800 font-semibold">
                        <span className="w-6 h-6 rounded-full bg-[#046BD2] text-white flex items-center justify-center text-[10px] font-bold">
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
                    <Button
                      href={`/blogs/${featuredPost.id}`}
                      variant="primary"
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Read Full Case Study
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Articles */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                {selectedCategory === "All"
                  ? "All Growth Articles"
                  : `${selectedCategory} Articles`}
              </h2>
              <span className="text-xs font-semibold text-slate-500">
                Showing {filteredPosts.length} Guides
              </span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-xl border border-slate-200">
                <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-800 mb-1">No guides match your search</h3>
                <p className="text-sm text-slate-500">Try searching for keywords like &quot;Google Ads&quot;, &quot;ROAS&quot;, or &quot;CPA&quot;.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                <AnimatePresence>
                  {filteredPosts.map((post) => (
                    <motion.article
                      key={post.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between transition-colors hover:border-[#046BD2] group"
                    >
                      <Link href={`/blogs/${post.id}`} className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#046BD2]">
                              {post.category}
                            </span>
                            {post.stats && (
                              <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                                {post.stats}
                              </span>
                            )}
                          </div>
                          <h3 className="text-base font-bold text-slate-900 leading-snug mb-2.5 group-hover:text-[#046BD2] transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
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
                            Read →
                          </span>
                        </div>
                      </Link>
                    </motion.article>
                  ))}
                </AnimatePresence>
              </div>
            )}
          </div>

          {/* Newsletter Box */}
          <div className="mt-20 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 p-8 sm:p-14 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
                WEEKLY INSIGHTS
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                Get Weekly Performance Marketing Playbooks in Your Inbox
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed">
                Join 15,000+ Founders &amp; Media Buyers. No fluff. Only tested ROAS
                frameworks, creative tear-downs, and algorithmic updates.
              </p>

              {subscribed ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-6 py-4 rounded-xl text-sm font-semibold mt-4">
                  ✓ Thank you for subscribing! Check your inbox for our Top 10 High-ROAS Ad Templates.
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
                    className="flex-1 bg-white text-slate-900 placeholder:text-slate-400 px-4 py-2.5 rounded-lg border border-slate-200 focus:border-[#046BD2] focus:ring-2 focus:ring-[#046BD2]/15 text-sm outline-none shadow-xs"
                  />
                  <Button type="submit" variant="primary" size="md">
                    Subscribe Free
                  </Button>
                </form>
              )}

              <p className="text-xs text-slate-400 mt-1">
                Zero spam. Unsubscribe with 1-click anytime.
              </p>
            </div>
          </div>
        </div>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
