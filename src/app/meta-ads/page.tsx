import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Meta Ads Agency | Facebook & Instagram Ads Scaling | AdForge",
  description:
    "Scale your D2C brand and lead generation with official Meta Business Partner agency. Advantage+ Shopping Campaigns, creative testing matrices, and high-ROAS funnels.",
};

const metaSolutions = [
  {
    tag: "Scale",
    title: "Meta Advantage+ Shopping Campaigns (ASC+)",
    desc: "Leverage Meta's machine learning with broad targeting, dynamic creative combinations, and multi-tier budget scaling that beats rising CPMs.",
  },
  {
    tag: "Creative",
    title: "High-ROAS Creative Sprint Matrix",
    desc: "We design and test 20+ static hooks, UGC videos, and motion graphics every week to find break-through winning creatives that scale spend profitably.",
  },
  {
    tag: "Tracking",
    title: "Meta Conversions API (CAPI) & Gateway",
    desc: "Bypass iOS 14.5+ privacy drops with 100% server-side event tracking, offline conversion uploads, and 9.0+ Event Match Quality (EMQ) scores.",
  },
  {
    tag: "Lead Gen",
    title: "High-Intent Instant Forms & WhatsApp Funnels",
    desc: "Generate qualified leads with conditional logic instant forms, WhatsApp direct chat ads, and automated CRM webhook syncs.",
  },
  {
    tag: "Retargeting",
    title: "Dynamic Product Ads (DPA) & Catalog Sales",
    desc: "Re-engage abandoned cart visitors with automated dynamic product feeds, customized seasonal overlays, and urgency messaging.",
  },
  {
    tag: "Defense",
    title: "Account Structure & Policy Protection",
    desc: "Protect your ad spend with enterprise business manager architecture, backup assets, and dedicated Meta partner representative support.",
  },
];

export default function MetaAdsPage() {
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
              Official Meta Business Partner
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Scale with a Leading{" "}
              <span className="text-[#FFDE59]">Facebook &amp; Instagram Ads</span> Agency
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              We turn Facebook &amp; Instagram Ads into high-margin revenue engines for D2C brands, lead-gen businesses, and service providers.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-block bg-[#D82C5E] hover:bg-[#bf204d] !text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md shadow-lg transition-all duration-200 hover:scale-105"
              >
                CLAIM FREE META ADS AUDIT
              </Link>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-12 px-4 sm:px-6 lg:px-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
              <p className="text-2xl sm:text-3xl font-black text-[#046BD2]">4.8x</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Average D2C Blended ROAS</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
              <p className="text-2xl sm:text-3xl font-black text-[#046BD2]">-45%</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Reduction in Customer CPA</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
              <p className="text-2xl sm:text-3xl font-black text-[#046BD2]">200M+</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Monthly Ad Impressions</p>
            </div>
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
              <p className="text-2xl sm:text-3xl font-black text-[#046BD2]">Meta</p>
              <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Official Scale Partner</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
                Our Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Engineered for High-ROAS Performance
              </h2>
              <div className="mt-3 mx-auto w-14 h-1 bg-[#046BD2] rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {metaSolutions.map((sol, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-[#046BD2]/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#046BD2] border border-blue-100 mb-4">
                      {sol.tag}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{sol.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{sol.desc}</p>
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
