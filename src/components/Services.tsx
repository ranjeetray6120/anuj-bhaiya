"use client";

import { ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: "/assets/icons/seo.png",
      title: "Search Engine Optimization (SEO)",
      description: "We optimize your website for high-performing keywords, strengthen your online reputation, and build authority to help you rank higher on Google and other search engines. Trust, traffic, and top positions, we deliver all three.",
    },
    {
      icon: "/assets/icons/google-ads.png",
      title: "Google Ads (PPC Management)",
      description: "Our customized Google Ads campaigns are built around your business goals, whether it’s increasing website traffic, generating leads, or driving sales. We manage every click to ensure a maximum return on ad spend (ROAS).",
    },
    {
      icon: "/assets/icons/meta.png",
      title: "Meta Ads (Facebook & Instagram Advertising)",
      description: "We design high-converting ad creatives and run smart targeting strategies on Facebook and Instagram to drive engagement, boost awareness, and bring you quality leads that convert.",
    },
    {
      icon: "/assets/icons/linkedin.png",
      title: "LinkedIn Ads",
      description: "Perfect for B2B growth, our LinkedIn ad strategies help you build a professional presence, connect with decision-makers, and generate qualified leads from your niche industry.",
    },
    {
      icon: "/assets/icons/instagram.png",
      title: "Social Media Handling",
      description: "From Instagram and Facebook to YouTube, X, and TikTok, we manage it all. We create engaging content, grow your audience, and maintain consistent brand visibility for both Indian and international clients (USA, UK, Canada, etc.).",
    },
    {
      icon: "/assets/icons/web.png",
      title: "Website Designing & Landing Pages",
      description: "Whether you need a full business website or a PPC landing page, our design team creates mobile-friendly, SEO-optimized pages tailored to your goals built after understanding your business inside-out.",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Expert Digital Marketing Services
          </h3>
          <p className="text-slate-500 text-sm sm:text-base">
            Boost visibility, drive targeted traffic & convert leads into loyal customers
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors group"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-slate-100/80 border border-slate-200/50 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4eb46f]/10 group-hover:border-[#4eb46f]/20 transition-colors">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#4eb46f] transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic bottom CTA for services */}
        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-slate-900 hover:bg-[#4eb46f] px-6 py-3 rounded-lg transition-colors group shadow-lg cursor-pointer"
          >
            Claim 40% Off & Consultation Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
