import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Web & Landing Page Development | High-Converting CRO | AdForge",
  description:
    "We build ultra-fast, SEO-friendly, and high-converting landing pages and custom websites engineered to turn ad clicks into paying customers.",
};

const devServices = [
  {
    tag: "CRO Funnels",
    title: "High-Converting Landing Pages",
    desc: "Custom-designed, psychology-backed landing pages with compelling value propositions, trust proof, and frictionless checkout funnels that convert traffic at 8%+.",
  },
  {
    tag: "Speed & SEO",
    title: "SEO-Friendly & Core Web Vitals Ready",
    desc: "Clean semantic markup, optimized asset delivery, and sub-second load times that guarantee 90+ Google PageSpeed scores and maximum organic ranking power.",
  },
  {
    tag: "Custom Code",
    title: "Custom Coded Websites & Scalable Web Apps",
    desc: "Built with Next.js, React, and modern full-stack frameworks. Zero bloat, maximum security, and infinite scalability as your traffic grows.",
  },
  {
    tag: "E-Commerce",
    title: "D2C E-Commerce Stores & Headless Architecture",
    desc: "High-margin Shopify and custom e-commerce store development optimized for Average Order Value (AOV) and rapid mobile conversion.",
  },
  {
    tag: "Tracking",
    title: "Advanced Tracking & Attribution Integration",
    desc: "Pre-configured GA4, Meta Conversions API (CAPI), Google Tag Manager, and first-party event tracking directly baked into your code.",
  },
  {
    tag: "A/B Testing",
    title: "Continuous CRO & A/B Split Testing",
    desc: "Iterative headline, layout, and CTA experimentation to constantly drive down your customer acquisition cost (CAC).",
  },
];

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <section
          className="relative py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-center text-white"
          style={{
            background: "linear-gradient(135deg, #168ed3 0%, #1a97db 50%, #1f9fe3 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-5">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30">
              Conversion Rate Optimization
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              High-Converting Websites &amp;{" "}
              <span className="text-[#FFDE59]">CRO Landing Pages</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              We understand the concept of CRO for landing pages. We build SEO-friendly, blazing-fast websites engineered to turn your paid and organic traffic into paying customers.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-block bg-[#D82C5E] hover:bg-[#bf204d] !text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md shadow-lg transition-all duration-200 hover:scale-105"
              >
                REQUEST LANDING PAGE AUDIT
              </Link>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-12 px-4 sm:px-6 lg:px-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
              <p className="text-2xl sm:text-3xl font-black text-[#046BD2]">8.4%</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Average Landing Page Conv. Rate</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
              <p className="text-2xl sm:text-3xl font-black text-[#046BD2]">&lt; 0.8s</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Page Load Time (Core Web Vitals)</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
              <p className="text-2xl sm:text-3xl font-black text-[#046BD2]">100%</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Mobile &amp; Speed Optimized</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
              <p className="text-2xl sm:text-3xl font-black text-[#046BD2]">CRO</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Data-Driven Design</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
                Our Development Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Websites That Generate Measurable ROI
              </h2>
              <div className="mt-3 mx-auto w-14 h-1 bg-[#046BD2] rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-[#046BD2]/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#046BD2] border border-blue-100 mb-4">
                      {service.tag}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
