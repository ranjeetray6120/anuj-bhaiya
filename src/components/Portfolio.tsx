"use client";

import { useState } from "react";
import { ExternalLink, ArrowUpRight, Monitor, Play } from "lucide-react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Works" },
    { id: "ads", label: "Paid Search & Social" },
    { id: "design", label: "Landing Pages" },
    { id: "seo", label: "SEO Growth" },
  ];

  const projects = [
    {
      title: "SolaceSaaS Demo Scaling",
      category: "ads",
      metric: "+180% Bookings",
      meta: "Meta & LinkedIn Ads Integration",
      detail: "Scaled demo booking pipeline by restructuring audience filters and implementing LinkedIn Account-Based Matching.",
      visual: "dashboard",
      color: "from-green-500/10 to-[#ff6a00]/10",
    },
    {
      title: "Apex E-Commerce Funnel Rebuild",
      category: "design",
      metric: "14.8% Conv. Rate",
      meta: "Next.js Mobile-First Landing Pages",
      detail: "Bespoke checkout flow redesign and speed optimizations resulting in 2.5x conversion lift from cold Meta ads.",
      visual: "wireframe",
      color: "from-[#ff6a00]/10 to-[#1e6ecc]/10",
    },
    {
      title: "Equinox FinTech SEO Dominance",
      category: "seo",
      metric: "1.2M Sessions/mo",
      meta: "Keyword Clustering & Core Vitals",
      detail: "Implemented custom programmatic content hubs targeting high-intent commercial terms in B2B finance.",
      visual: "chart",
      color: "from-[#1e6ecc]/10 to-[#ff6a00]/10",
    },
    {
      title: "Prime Supplements Funnel Scale",
      category: "ads",
      metric: "4.8x Avg ROAS",
      meta: "Meta DCT & TikTok Video Campaigns",
      detail: "Deployed dynamic creative sandbox frameworks identifying high-performing hooks for supplements brand.",
      visual: "video",
      color: "from-blue-500/10 to-indigo-500/10",
    },
    {
      title: "Aura Skincare Landing Pages",
      category: "design",
      metric: "11.2% Conv. Rate",
      meta: "High-Speed Dynamic Copy Lander",
      detail: "Implemented dynamic text replacement matching ad headline search terms to landing page headers.",
      visual: "wireframe",
      color: "from-[#ff6a00]/10 to-teal-500/10",
    },
    {
      title: "Zenith Real Estate Funnel",
      category: "seo",
      metric: "4.5x Leads Volume",
      meta: "Local SEO & Map Pack Optimization",
      detail: "Structured localized authority campaigns ranking #1 in high-ticket zip code queries across 14 cities.",
      visual: "chart",
      color: "from-cyan-500/10 to-teal-500/10",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-12 sm:py-20 bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ff6a00] font-mono">
              Verified Outcomes
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
              Featured Scaling Deployments
            </h3>
            <p className="text-slate-550 text-sm font-light">
              A curated selection of our performance marketing systems. We focus entirely on commercial outcomes: pipeline, ROI, and transaction growth.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded text-xs font-bold transition-all cursor-pointer border ${
                  activeFilter === f.id
                    ? "bg-[#ff6a00] border-[#ff6a00] text-white shadow-sm"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-950 hover:border-slate-350"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white border border-slate-200 hover:border-[#ff6a00]/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full text-left"
            >
              {/* Visual Mock Container */}
              <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${project.color} border-b border-slate-200 flex items-center justify-center p-6`}>
                
                {/* Grid overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:12px_12px] opacity-40 pointer-events-none" />

                {/* Render mock UI graphics - kept in dark colors for clean graphical contrast */}
                {project.visual === "dashboard" && (
                  <div className="w-full h-full bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col justify-between shadow-2xl relative text-left">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                      </div>
                      <span className="text-[8px] font-mono text-slate-555">Live API Data</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 py-2">
                      <div className="bg-slate-950 p-1.5 rounded border border-slate-800/50 text-center">
                        <span className="text-[7px] text-slate-500 block uppercase">Spend</span>
                        <span className="text-[10px] font-bold text-white">$14.2K</span>
                      </div>
                      <div className="bg-slate-950 p-1.5 rounded border border-slate-800/50 text-center">
                        <span className="text-[7px] text-slate-500 block uppercase">Leads</span>
                        <span className="text-[10px] font-bold text-[#ff6a00]">894</span>
                      </div>
                      <div className="bg-slate-950 p-1.5 rounded border border-slate-800/50 text-center">
                        <span className="text-[7px] text-slate-555 block uppercase">ROAS</span>
                        <span className="text-[10px] font-bold text-[#1e6ecc]">4.5x</span>
                      </div>
                    </div>
                    <div className="w-full bg-slate-850 h-2 rounded overflow-hidden">
                      <div className="bg-[#ff6a00] h-full w-[70%]" />
                    </div>
                  </div>
                )}

                {project.visual === "wireframe" && (
                  <div className="w-40 h-full bg-slate-900 border border-slate-800 rounded-t-xl p-3 flex flex-col gap-2 shadow-2xl relative top-2 text-left">
                    <div className="w-full h-1 bg-slate-800 rounded" />
                    <div className="flex gap-1.5">
                      <div className="w-full h-10 bg-slate-950 rounded flex items-center justify-center">
                        <Monitor className="w-4 h-4 text-slate-500" />
                      </div>
                      <div className="w-full h-10 bg-slate-950 rounded" />
                    </div>
                    <div className="w-full h-8 bg-gradient-to-r from-[#ff6a00]/20 to-[#1e6ecc]/20 rounded flex items-center justify-center">
                      <span className="text-[8px] font-bold text-[#ff6a00]">14.8% Conversion</span>
                    </div>
                  </div>
                )}

                {project.visual === "chart" && (
                  <div className="w-full h-full bg-slate-900 border border-slate-800 rounded-xl p-3 flex flex-col justify-between shadow-2xl text-left">
                    <div className="flex justify-between items-center">
                      <span className="text-[8px] font-bold text-slate-400">Traffic (Organic)</span>
                      <span className="text-[8px] font-bold text-green-400">+340% YoY</span>
                    </div>
                    <div className="w-full h-16 relative flex items-end">
                      <svg className="w-full h-full" viewBox="0 0 100 40">
                        <path
                          d="M0,40 Q25,30 50,20 T100,5"
                          fill="none"
                          stroke="url(#gradient-chart)"
                          strokeWidth="2.5"
                        />
                        <defs>
                          <linearGradient id="gradient-chart" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ff6a00" />
                            <stop offset="100%" stopColor="#1e6ecc" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="flex justify-between text-[7px] text-slate-555 font-mono">
                      <span>Month 1</span>
                      <span>Month 3</span>
                      <span>Month 6</span>
                    </div>
                  </div>
                )}

                {project.visual === "video" && (
                  <div className="w-full h-full bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden group/vid text-left">
                    <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center bg-slate-950/80 px-2 py-1 rounded border border-slate-800">
                      <span className="text-[8px] font-mono text-slate-400">Ad Creative: Supplements</span>
                      <span className="text-[8px] font-mono text-[#ff6a00]">Scale Ready</span>
                    </div>
                  </div>
                )}

                {/* Absolute visual badge */}
                <span className="absolute top-3 right-3 text-[10px] font-bold text-white bg-[#ff6a00] px-2.5 py-0.5 rounded-full z-20 shadow-sm">
                  {project.metric}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-5 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#1e6ecc] tracking-wider uppercase block font-mono">{project.meta}</span>
                  <h4 className="text-base font-bold text-slate-900 hover:text-[#ff6a00] transition-colors flex items-center gap-1.5 justify-between font-sans">
                    {project.title}
                    <ArrowUpRight className="w-4 h-4 text-[#ff6a00]" />
                  </h4>
                  <p className="text-xs text-slate-550 leading-relaxed font-light">
                    {project.detail}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span className="capitalize">Channel: {project.category === "ads" ? "Paid Ads" : project.category === "design" ? "Landing Pages" : "SEO Search"}</span>
                  <a href="#contact" className="hover:text-[#ff6a00] transition-colors flex items-center gap-0.5">
                    Request Details <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
