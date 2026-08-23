import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Who We Are | AdForge Performance Marketing Agency",
  description:
    "Learn about AdForge's mission, team of certified performance specialists, and data-driven approach to scaling Google Ads, Meta Ads, and SEO.",
};

const coreValues = [
  {
    number: "01",
    title: "Data Over Guesswork",
    desc: "Every campaign decision is backed by real unit economics, cohort analytics, and statistical significance — not hunches.",
  },
  {
    number: "02",
    title: "Total In-House Execution",
    desc: "Zero outsourcing. Your accounts are managed directly by senior certified media buyers and seasoned SEO strategists.",
  },
  {
    number: "03",
    title: "Transparent Attribution",
    desc: "Full client ownership of accounts, pixels, and data. Clear real-time dashboards with no hidden markups.",
  },
  {
    number: "04",
    title: "Relentless Focus on ROI",
    desc: "We prioritize bottom-line profit, MER (Marketing Efficiency Ratio), and scalable customer acquisition over vanity metrics.",
  },
];

const milestones = [
  { metric: "₹300Cr+", label: "Client Revenue Generated" },
  { metric: "500k+", label: "High-Intent Leads Delivered" },
  { metric: "100+", label: "Global Brands Scaled" },
  { metric: "4.6x", label: "Average Client Blended ROAS" },
];

export default function WhoWeArePage() {
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
              About AdForge
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              We Are Your Dedicated{" "}
              <span className="text-[#FFDE59]">Growth Partners</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              AdForge is a high-performance digital marketing agency built for ambitious brands that demand predictable scale and superior ROI.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-block bg-[#D82C5E] hover:bg-[#bf204d] !text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md shadow-lg transition-all duration-200 hover:scale-105"
              >
                BOOK A STRATEGY CALL
              </Link>
            </div>
          </div>
        </section>

        {/* Agency Story Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col gap-6 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
                Our Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                A Team Passionate About Delivering Real Results
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                In an industry full of vanity metrics and generic playbook tactics, AdForge was founded on a simple premise: <strong>revenue growth is the only metric that matters.</strong>
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether scaling Google Performance Max campaigns, optimizing Meta Advantage+ funnels, or dominating competitive organic keywords through technical SEO, we act as an extension of your in-house growth team.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex-1 min-w-[200px]">
                  <p className="text-2xl font-black text-[#046BD2]">100%</p>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">In-House Specialists</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex-1 min-w-[200px]">
                  <p className="text-2xl font-black text-slate-900">Official</p>
                  <p className="text-xs font-bold text-slate-700 uppercase tracking-wide mt-1">Google &amp; Meta Partners</p>
                </div>
              </div>
            </div>

            {/* Right Card / Metrics Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              {milestones.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200/80 rounded-2xl p-6 text-center shadow-xs flex flex-col justify-center gap-1 hover:border-[#046BD2]/50 transition-colors"
                >
                  <p className="text-3xl sm:text-4xl font-black text-[#046BD2] tracking-tight">{item.metric}</p>
                  <p className="text-xs sm:text-sm font-bold text-slate-700">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
                Our Standard
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                The Principles That Drive Our Work
              </h2>
              <div className="mt-3 mx-auto w-14 h-1 bg-[#046BD2] rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val) => (
                <div
                  key={val.number}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col gap-3"
                >
                  <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#046BD2] font-black text-sm flex items-center justify-center border border-blue-100">
                    {val.number}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{val.desc}</p>
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
