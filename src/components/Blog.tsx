"use client";

import { ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";

export default function Blog() {
  const articles = [
    {
      title: "How to Scale Meta Ad Account Budgets by 3x Without Tanking ROAS",
      desc: "Learn the dynamic creative sandbox configurations, event sync thresholds, and creative hook rotation timelines we employ to scale DTC ad spend profitably.",
      category: "Paid Social",
      readTime: "6 min read",
      date: "July 15, 2026",
      slug: "scale-meta-ads-roas",
      iconColor: "text-blue-600 bg-blue-50",
    },
    {
      title: "The Death of the Pixel: Why You Need Meta Conversions API (CAPI) Today",
      desc: "How ad-blockers and iOS tracking restrictions hide up to 30% of your customer conversion data, and how to reclaim accurate attribution using GTM server-side tagging.",
      category: "Attribution",
      readTime: "8 min read",
      date: "July 10, 2026",
      slug: "meta-conversions-api-guide",
      iconColor: "text-green-650 bg-green-50",
    },
    {
      title: "Programmatic Keyword Maps: How to Outrank Enterprise Competitors",
      desc: "A step-by-step technical SEO framework to cluster commercial intent search terms and architect high-authority semantic hubs that capture organic traffic.",
      category: "Search SEO",
      readTime: "7 min read",
      date: "July 05, 2026",
      slug: "programmatic-seo-keyword-maps",
      iconColor: "text-orange-600 bg-orange-50",
    },
  ];

  return (
    <section id="blog" className="py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ff6a00] font-mono">
            AGENCY INSIGHTS
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
            Performance Marketing & SEO Insights
          </h3>
          <p className="text-slate-555 text-sm sm:text-base font-light">
            Read our actionable blueprints on scaling paid acquisitions, optimizing search rankings, and engineering high-converting customer funnels.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((post, idx) => (
            <article
              key={idx}
              className="flex flex-col justify-between p-6 rounded-xl border border-slate-200 hover:border-[#ff6a00]/30 transition-all bg-white hover:shadow-md group text-left"
            >
              <div className="space-y-4">
                {/* Meta details */}
                <div className="flex items-center justify-between">
                  <span className={`px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider font-mono ${
                    post.category === "Paid Social" ? "bg-blue-50 text-blue-600" :
                    post.category === "Attribution" ? "bg-green-50 text-green-600" : "bg-orange-50 text-[#ff6a00]"
                  }`}>
                    {post.category}
                  </span>
                  
                  <div className="flex items-center gap-3 text-[10px] font-semibold text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug group-hover:text-[#ff6a00] transition-colors font-sans">
                  {post.title}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-light">
                  {post.desc}
                </p>
              </div>

              {/* Action Link */}
              <div className="border-t border-slate-100 pt-4 mt-6 flex items-center justify-between">
                <span className="text-xs font-bold text-[#ff6a00] group-hover:underline inline-flex items-center gap-1.5 cursor-pointer">
                  Read Blueprint
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                
                <span className="text-[10px] font-bold text-slate-400 font-mono">
                  ADFORGE LABS
                </span>
              </div>

            </article>
          ))}
        </div>

        {/* View All Callout */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-black text-slate-900 hover:text-[#ff6a00] uppercase tracking-wider transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#ff6a00]" />
            Request a custom marketing blueprint for your site
          </a>
        </div>

      </div>
    </section>
  );
}
