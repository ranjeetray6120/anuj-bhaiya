"use client";
import Link from "next/link";

const resultsData = [
  {
    brand: "DOON DEFENCE DREAMERS",
    sub: "Pvt. Ltd.",
    conversions: "+ 644%",
    cost: "- 45%",
  },
  {
    brand: "URBAN PITARA",
    sub: "E-Commerce",
    conversions: "+ 458%",
    cost: "- 33%",
  },
  {
    brand: "COORG WILDERNESS",
    sub: "Resort & Spa",
    conversions: "+ 482%",
    cost: "- 69%",
  },
  {
    brand: "EduQuadz",
    sub: "EdTech Platform",
    conversions: "+ 950%",
    cost: "- 42%",
  },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-[92vh] flex items-center px-4 sm:px-6 lg:px-12 pt-28 sm:pt-32 pb-16 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #168ed3 0%, #1a97db 50%, #1f9fe3 100%)",
      }}
      id="home"
    >
      {/* Background subtle diagonal gradient rays */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Headings & CTA */}
        <div className="lg:col-span-6 flex flex-col gap-5 text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-[2.4rem] font-extrabold text-white leading-[1.2] tracking-tight">
            Grow your Business &amp; Revenue with the champions of{" "}
            <span className="text-[#FFDE59] inline-block font-extrabold drop-shadow-xs">
              Digital Marketing.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal max-w-xl">
            From leads to Sales we are here to deliver the transformative Results.
          </p>

          <div className="pt-2">
            <Link
              href="/#contact"
              className="inline-block bg-[#D82C5E] hover:bg-[#c02250] !text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 rounded-md shadow-lg transition-all duration-200 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            >
              GET A FREE QUOTE NOW
            </Link>
          </div>
        </div>

        {/* Right Column: Real Results Card with Growth Arrow */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-xl">
            {/* Upward 3D Golden Growth Arrow (SVG) */}
            <div className="absolute -top-12 -right-4 sm:-right-8 w-72 sm:w-96 h-96 pointer-events-none select-none z-0 opacity-95">
              <svg
                viewBox="0 0 300 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-2xl"
              >
                {/* 3D Arrow Shadow/Bevel */}
                <path
                  d="M100 320 L270 40 L230 40 L285 20 L295 80 L260 60 L140 330 Z"
                  fill="#D4A017"
                  opacity="0.6"
                />
                {/* Main Arrow Body */}
                <path
                  d="M110 310 L260 50 L220 50 L280 25 L290 85 L250 65 L130 320 Z"
                  fill="url(#goldGradient)"
                />
                <defs>
                  <linearGradient id="goldGradient" x1="100" y1="320" x2="280" y2="25" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F5D061" />
                    <stop offset="0.5" stopColor="#E6B800" />
                    <stop offset="1" stopColor="#FFDE59" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* "Real Client Results" cursive badge */}
            <div className="relative z-10 mb-3 flex items-center justify-start sm:justify-center lg:justify-start">
              <span
                className="text-2xl sm:text-3xl text-white font-serif italic font-bold tracking-wide drop-shadow-md"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Real Client Results
              </span>
            </div>

            {/* Results Table Card */}
            <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-2 sm:p-3 border border-white/20 shadow-2xl">
              {/* Header Row */}
              <div className="grid grid-cols-12 gap-2 mb-2">
                <div className="col-span-5" />
                <div className="col-span-3 bg-white rounded-lg py-2.5 px-1 text-center shadow-sm">
                  <span className="text-[11px] sm:text-xs font-extrabold text-slate-900 tracking-tight block">
                    Conversions
                  </span>
                </div>
                <div className="col-span-4 bg-white rounded-lg py-2.5 px-1 text-center shadow-sm">
                  <span className="text-[11px] sm:text-xs font-extrabold text-slate-900 tracking-tight block">
                    Cost-Per-Conversion
                  </span>
                </div>
              </div>

              {/* Data Rows */}
              <div className="flex flex-col gap-2">
                {resultsData.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                    {/* Brand Badge */}
                    <div className="col-span-5 bg-white rounded-lg p-2.5 shadow-sm border border-slate-100 min-h-[56px] flex flex-col justify-center">
                      <p className="text-[11px] sm:text-xs font-extrabold text-slate-800 uppercase tracking-tight truncate leading-tight">
                        {item.brand}
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-slate-500 font-medium truncate">
                        {item.sub}
                      </p>
                    </div>

                    {/* Conversion Increase Badge */}
                    <div className="col-span-3 bg-white rounded-lg py-3 px-1 text-center shadow-sm border border-slate-100 min-h-[56px] flex items-center justify-center">
                      <span className="text-sm sm:text-base font-extrabold text-[#16a34a] tracking-tight">
                        {item.conversions}
                      </span>
                    </div>

                    {/* Cost Reduction Badge */}
                    <div className="col-span-4 bg-white rounded-lg py-3 px-1 text-center shadow-sm border border-slate-100 min-h-[56px] flex items-center justify-center">
                      <span className="text-sm sm:text-base font-extrabold text-[#dc2626] tracking-tight">
                        {item.cost}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


