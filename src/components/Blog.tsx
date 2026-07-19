"use client";

import { useState } from "react";
import { ArrowRight, BookOpen, Clock, Calendar, X, CalendarDays } from "lucide-react";

interface Article {
  title: string;
  desc: string;
  category: string;
  readTime: string;
  date: string;
  slug: string;
  iconColor: string;
  content: string[]; // Structured paragraphs for the modal pop-up detail
}

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      title: "How to Scale Meta Ad Account Budgets by 3x Without Tanking ROAS",
      desc: "Learn the dynamic creative sandbox configurations, event sync thresholds, and creative hook rotation timelines we employ to scale DTC ad spend profitably.",
      category: "Paid Social",
      readTime: "6 min read",
      date: "July 15, 2026",
      slug: "scale-meta-ads-roas",
      iconColor: "text-blue-600 bg-blue-50",
      content: [
        "Scaling Meta campaigns is not as simple as increasing your budget slider. Doing so resets Meta's learning phase, which causes ad performance and ROAS to tank. To scale profitably, we use a structured dynamic sandbox framework.",
        "1. The Creative Testing Sandbox: We run dedicated ad sets with small budgets (10% of total spend) to test new visual hooks, headline angles, and formats. We never edit existing active ads to protect active tracking parameters.",
        "2. Identifying Winners: Once a creative angle achieves a low Cost-Per-Lead (CPA) and high CTR in the sandbox for 72 consecutive hours, we graduate it to the scaling campaign.",
        "3. Incremental Budget Scaling: We increase the main campaign's budget by exactly 20% every 48 hours. This allows Meta's bidding model to adjust without resetting the learning phase, keeping your ROAS stable."
      ]
    },
    {
      title: "The Death of the Pixel: Why You Need Meta Conversions API (CAPI) Today",
      desc: "How ad-blockers and iOS tracking restrictions hide up to 30% of your customer conversion data, and how to reclaim accurate attribution using GTM server-side tagging.",
      category: "Attribution",
      readTime: "8 min read",
      date: "July 10, 2026",
      slug: "meta-conversions-api-guide",
      iconColor: "text-green-650 bg-green-50",
      content: [
        "Browser-based tracking pixels are dying. iOS 14+ permissions, Safari Intelligent Tracking Prevention, and modern browser ad-blockers hide up to 30% of purchase data. If Meta cannot see who purchased, its algorithm cannot optimize ads.",
        "Why CAPI is Critical: Conversions API does not rely on web browsers. It sends purchase events directly from our cloud server to Meta's servers. This guarantees 100% data match rates.",
        "The Bottom Line: Implementing GTM server-side tracking maps customer emails and phones directly to active campaigns. By restoring lost conversion data, ad platforms optimize better, lowering your cost-per-lead immediately."
      ]
    },
    {
      title: "Programmatic Keyword Maps: How to Outrank Enterprise Competitors",
      desc: "A step-by-step technical SEO framework to cluster commercial intent search terms and architect high-authority semantic hubs that capture organic traffic.",
      category: "Search SEO",
      readTime: "7 min read",
      date: "July 05, 2026",
      slug: "programmatic-seo-keyword-maps",
      iconColor: "text-orange-600 bg-orange-50",
      content: [
        "Enterprise brands dominate high-volume general keywords because they have massive domain authority. If you try to rank for general terms like 'marketing agency', you will fail. Instead, you need our semantic keyword map strategy.",
        "1. Target Commercial Long-Tails: We identify search terms your competitors are paying $10+/click for in PPC (e.g. 'best CRO agency for ecommerce brands').",
        "2. Semantic Content Hubs: We build helpful, detailed pages answering these exact transactional queries. We interlink them inside a clean crawl structure.",
        "3. Technical Site Speed: Spiders prioritize sites that load in under 1 second. We audit and rebuild crawl patterns to secure first-page placements for free traffic that converts."
      ]
    },
  ];

  const handleCloseModal = () => {
    setActiveArticle(null);
  };

  const handleBookCall = () => {
    setActiveArticle(null);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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

              {/* Action Link - Triggers pop-up modal */}
              <div className="border-t border-slate-100 pt-4 mt-6 flex items-center justify-between">
                <button
                  onClick={() => setActiveArticle(post)}
                  className="text-xs font-bold text-[#ff6a00] group-hover:underline inline-flex items-center gap-1.5 cursor-pointer bg-transparent border-none outline-none focus:outline-none"
                >
                  Read Blueprint
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
                
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

      {/* Pop-up Modal Window */}
      {activeArticle && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-fade-in text-left">
            
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-2.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider font-mono bg-slate-900 text-white">
                  {activeArticle.category}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
                  <Clock className="w-3 h-3" />
                  {activeArticle.readTime}
                </span>
              </div>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-slate-800 transition-colors cursor-pointer focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content Area */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-grow">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight font-sans">
                {activeArticle.title}
              </h3>
              
              <div className="space-y-4 text-xs sm:text-sm text-slate-655 leading-relaxed font-light">
                {activeArticle.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Modal Action Footer */}
            <div className="px-6 py-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <span className="text-[10px] font-bold text-slate-400 font-mono inline-flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5 text-[#ff6a00]" />
                Published on {activeArticle.date}
              </span>
              
              <div className="flex gap-2.5 w-full sm:w-auto">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 border border-slate-200 hover:bg-slate-100 rounded text-xs font-bold text-slate-700 w-full sm:w-auto cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={handleBookCall}
                  className="px-5 py-2.5 bg-[#ff6a00] hover:bg-[#e05d00] text-white rounded text-xs font-bold w-full sm:w-auto shadow shadow-orange-500/10 cursor-pointer"
                >
                  Book Strategy Call
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
