"use client";

export default function ClientLogos() {
  const logos = [
    { name: "VortexSaaS", text: "VORTEX" },
    { name: "OmniRetail", text: "OMNI" },
    { name: "ApexFintech", text: "APEX" },
    { name: "CloudScale", text: "CLOUDSCALE" },
    { name: "PrimeBio", text: "PRIMEBIO" },
    { name: "NexaEnergy", text: "NEXA" },
    { name: "Aethera", text: "AETHERA" },
    { name: "StellarCo", text: "STELLARCO" },
  ];

  const doubleLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-8 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 mb-4">
        <h4 className="text-center text-xs font-bold text-slate-450 uppercase tracking-widest">
          Trusted by 2000+ Businesses Globally
        </h4>
      </div>

      <div className="w-full flex relative overflow-hidden">
        {/* Left Fade */}
        <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll whitespace-nowrap gap-16 py-2">
          {doubleLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center gap-2 group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-xs text-slate-400 group-hover:text-[#4eb46f] group-hover:border-[#4eb46f] transition-colors">
                {logo.text[0]}
              </div>
              <span className="text-base font-extrabold tracking-wider text-slate-400 group-hover:text-slate-700 transition-colors font-mono">
                {logo.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
