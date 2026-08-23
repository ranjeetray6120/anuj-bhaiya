import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Google Ads & PPC Agency | Scale Paid Search ROI | AdForge",
  description:
    "Scale your brand profitably with Google Official Partner agency. Performance Max, Search Ads, YouTube Ads, and Shopping campaigns engineered for maximum ROI.",
};

const ppcCampaigns = [
  {
    tag: "Search",
    title: "High-Intent Google Search Ads",
    desc: "Capture ready-to-buy prospects at the exact moment they search for your products or high-ticket services with hyper-focused ad copy and match types.",
  },
  {
    tag: "AI Scale",
    title: "Performance Max (PMax) Excellence",
    desc: "Structure multi-asset groups, clean audience signals, and proprietary negative keyword lists to train Google's AI for maximum conversion volume.",
  },
  {
    tag: "Video",
    title: "High-Converting YouTube Ads",
    desc: "Drive massive brand awareness and direct-response conversions using custom video creative hooks, demand gen campaigns, and in-stream funnels.",
  },
  {
    tag: "E-Commerce",
    title: "Google Shopping & Feed Optimization",
    desc: "Optimize Merchant Center product titles, descriptions, and custom labels to claim top real estate on Google Shopping tab with low CPCs.",
  },
  {
    tag: "Attribution",
    title: "Server-Side Tracking & Enhanced Conversions",
    desc: "Eliminate attribution blindness with GA4, Google Tag Manager Server-Side setup, and First-Party data pipelines for precise ROAS tracking.",
  },
  {
    tag: "Lead Gen",
    title: "High-Ticket B2B & Call-Only Ads",
    desc: "Generate qualified inbound calls and verified lead form submissions for education institutes, real estate, and high-ticket service brands.",
  },
];

const ppcAdvantages = [
  { metric: "100%", label: "Google Certified Account Managers" },
  { metric: "45k+", label: "Leads Generated in Education & D2C" },
  { metric: "-35%", label: "Average Reduction in Client CPA" },
  { metric: "₹50Cr+", label: "Annual Google Ads Spend Managed" },
];

export default function PayPerClickPage() {
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
              Official Google Partner
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Work with a Google Ads Agency Where{" "}
              <span className="text-[#FFDE59]">Success Is Guaranteed</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              We structure, optimize, and scale profitable Google Ads campaigns that lower your cost-per-acquisition (CPA) and maximize your bottom-line return on ad spend.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-block bg-[#D82C5E] hover:bg-[#bf204d] !text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md shadow-lg transition-all duration-200 hover:scale-105"
              >
                GET FREE GOOGLE ADS AUDIT
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-12 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {ppcAdvantages.map((stat, idx) => (
              <div key={idx} className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <p className="text-2xl sm:text-3xl font-black text-[#046BD2]">{stat.metric}</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
                Our PPC Specializations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Full-Funnel Google Ads Management
              </h2>
              <div className="mt-3 mx-auto w-14 h-1 bg-[#046BD2] rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ppcCampaigns.map((campaign, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-[#046BD2]/50 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#046BD2] border border-blue-100 mb-4">
                      {campaign.tag}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{campaign.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{campaign.desc}</p>
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
