import React from "react";
import Link from "next/link";

const GoogleBadge = () => (
  <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mx-auto text-2xl font-black text-[#1a73e8]">
    G
  </div>
);

const MetaBadge = () => (
  <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center mx-auto text-2xl font-black text-[#0866ff]">
    M
  </div>
);

interface PartnerCardProps {
  badge: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
}

const PartnerCard = ({ badge, title, subtitle, description, accentColor }: PartnerCardProps) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-7 flex flex-col items-center text-center gap-4">
    <div className="mb-1">{badge}</div>
    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full ${accentColor}`}>{subtitle}</span>
    <h3 className="text-base font-bold text-slate-900 leading-tight">{title}</h3>
    <div className="w-8 h-0.5 bg-slate-200 rounded-full" />
    <p className="text-xs text-slate-600 leading-relaxed flex-1">{description}</p>
    <Link href="/#contact" className="mt-1 inline-block bg-slate-900 !text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-slate-700 transition-colors duration-200 uppercase tracking-wider">
      Talk to Us
    </Link>
  </div>
);

export default function Partners() {
  return (
    <section className="py-12 sm:py-14 px-4 sm:px-6 lg:px-12 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">Our Official Partnerships</h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-blue-500 rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <PartnerCard
            badge={<GoogleBadge />}
            title="LEADING GOOGLE PARTNER"
            subtitle="Google Official Partners"
            description="Our Google-certified, award-winning specialists will strategically plan and execute your campaigns for maximum ROI."
            accentColor="bg-blue-100 text-blue-700"
          />
          <PartnerCard
            badge={<MetaBadge />}
            title="LEADING META BUSINESS PARTNER"
            subtitle="Meta Official Partner"
            description="Get your account in the hands of the people who spend big and are recognised by Meta as official Business Partner."
            accentColor="bg-indigo-100 text-indigo-700"
          />
        </div>
      </div>
    </section>
  );
}

