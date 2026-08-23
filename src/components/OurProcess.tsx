"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const steps = [
  { number: 1, title: "Defining Objective", desc: "KPIs, CPA targets & revenue milestones" },
  { number: 2, title: "Understanding Target Group", desc: "Audience personas & intent mapping" },
  { number: 3, title: "Competitor Analysis", desc: "Deconstruct top market leader ad funnels" },
  { number: 4, title: "Defining KPIs for Tracking", desc: "CAPI, GA4 & server-side attribution" },
  { number: 5, title: "Executing the Plan", desc: "Launch Google & Meta scale campaigns" },
  { number: 6, title: "Analyzing / Adjusting & Reporting", desc: "Daily bid optimization & transparent scale" },
];

const nodes = [
  { stepNum: 1, x: 180, y: 32, label: "Define Objective", short: "01", labelPos: "bottom" },
  { stepNum: 2, x: 315, y: 92, label: "Target Group", short: "02", labelPos: "left" },
  { stepNum: 3, x: 190, y: 158, label: "Competitor Analysis", short: "03", labelPos: "bottom" },
  { stepNum: 4, x: 75, y: 224, label: "Define KPIs", short: "04", labelPos: "right" },
  { stepNum: 5, x: 190, y: 290, label: "Execute Plan", short: "05", labelPos: "bottom" },
  { stepNum: 6, x: 315, y: 350, label: "Analyze & Report", short: "06", labelPos: "left" },
];

function ProcessFlowchart({
  activeStep,
  setActiveStep,
}: {
  activeStep: number;
  setActiveStep: (step: number) => void;
}) {
  return (
    <div className="w-full max-w-md mx-auto bg-slate-50/90 border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs relative">
      {/* Progress pill header */}
      <div className="flex items-center justify-between mb-2 px-1">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
          Live Flow Pipeline
        </span>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <button
              key={num}
              onClick={() => setActiveStep(num)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeStep === num
                  ? "w-6 bg-[#046BD2]"
                  : activeStep > num
                  ? "bg-[#046BD2]/50"
                  : "bg-slate-300"
              }`}
              aria-label={`Jump to step ${num}`}
            />
          ))}
        </div>
      </div>

      <svg
        viewBox="0 0 390 390"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto select-none"
      >
        <defs>
          <marker
            id="processArrowActive"
            markerWidth="7"
            markerHeight="5"
            refX="6"
            refY="2.5"
            orient="auto"
          >
            <polygon points="0 0, 7 2.5, 0 5" fill="#046BD2" />
          </marker>
          <marker
            id="processArrowInactive"
            markerWidth="7"
            markerHeight="5"
            refX="6"
            refY="2.5"
            orient="auto"
          >
            <polygon points="0 0, 7 2.5, 0 5" fill="#94A3B8" />
          </marker>
        </defs>

        {/* Connecting Lines */}
        {nodes.slice(0, -1).map((node, i) => {
          const next = nodes[i + 1];
          const isPassed = activeStep > node.stepNum;
          const isCurrentConnecting = activeStep === node.stepNum;

          return (
            <g key={i}>
              <line
                x1={node.x}
                y1={node.y + 16}
                x2={next.x}
                y2={next.y - 16}
                stroke={isPassed || isCurrentConnecting ? "#046BD2" : "#CBD5E1"}
                strokeWidth={isPassed || isCurrentConnecting ? "2.5" : "1.5"}
                strokeDasharray={isPassed ? "none" : "5 3"}
                markerEnd={
                  isPassed || isCurrentConnecting
                    ? "url(#processArrowActive)"
                    : "url(#processArrowInactive)"
                }
                className="transition-all duration-500"
              />
            </g>
          );
        })}

        {/* Return loop dotted curve */}
        <path
          d={`M ${nodes[5].x + 18} ${nodes[5].y} C 380 350, 380 32, ${nodes[0].x + 20} ${nodes[0].y}`}
          fill="none"
          stroke="#046BD2"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity={activeStep === 6 ? "0.8" : "0.25"}
          className="transition-opacity duration-500"
        />

        {/* Nodes and Labels */}
        {nodes.map((node) => {
          const isActive = activeStep === node.stepNum;
          const isPassed = activeStep > node.stepNum;

          return (
            <g
              key={node.stepNum}
              transform={`translate(${node.x}, ${node.y})`}
              className="cursor-pointer transition-transform duration-300"
              onClick={() => setActiveStep(node.stepNum)}
            >
              {/* Outer Ripple effect on active */}
              {isActive && (
                <circle
                  r="28"
                  fill="#046BD2"
                  opacity="0.2"
                  className="animate-ping"
                />
              )}

              {/* Outer Ring */}
              <circle
                r={isActive ? "25" : "21"}
                fill={isActive ? "#E0F2FE" : isPassed ? "#EFF6FF" : "#F1F5F9"}
                className="transition-all duration-300"
              />
              <circle
                r={isActive ? "22" : "18"}
                fill="none"
                stroke={isActive || isPassed ? "#046BD2" : "#94A3B8"}
                strokeWidth={isActive ? "2.5" : "1.5"}
                strokeOpacity={isActive ? "1" : "0.4"}
                className="transition-all duration-300"
              />

              {/* Inner Circle */}
              <circle
                r={isActive ? "16" : "14"}
                fill={isActive ? "#046BD2" : isPassed ? "#046BD2" : "#94A3B8"}
                className="transition-all duration-300"
              />

              {/* Step Number */}
              <text
                x="0"
                y={isActive ? "5" : "4"}
                textAnchor="middle"
                fill="#FFFFFF"
                fontSize={isActive ? "11" : "10"}
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                {node.short}
              </text>

              {/* Step Label Text */}
              <text
                x={node.labelPos === "left" ? -28 : node.labelPos === "right" ? 28 : 0}
                y={node.labelPos === "bottom" ? 36 : 4}
                textAnchor={
                  node.labelPos === "left"
                    ? "end"
                    : node.labelPos === "right"
                    ? "start"
                    : "middle"
                }
                fill={isActive ? "#046BD2" : isPassed ? "#1E293B" : "#64748B"}
                fontSize={isActive ? "12" : "11"}
                fontWeight={isActive ? "800" : "600"}
                fontFamily="sans-serif"
                className="transition-all duration-300"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play interval cycling 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 1
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev % 6) + 1);
    }, 2200);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="py-10 sm:py-12 px-4 sm:px-6 lg:px-12 bg-white border-t border-slate-100 select-none"
      id="process"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Title */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our <span className="text-[#046BD2]">Process:</span>
          </h2>
          <div className="mt-2 mx-auto w-12 h-1 bg-[#046BD2] rounded-full" />
        </div>

        {/* 2-Column Synchronized Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Interactive Numbered List & CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-col gap-2">
              {steps.map((step) => {
                const isActive = activeStep === step.number;
                const isPassed = activeStep > step.number;

                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStep(step.number)}
                    className={`flex items-center justify-between p-2.5 sm:p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-blue-50/90 border border-blue-200 shadow-sm translate-x-1"
                        : "hover:bg-slate-50/80 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      {/* Step Number Badge */}
                      <div
                        className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-extrabold text-sm transition-all duration-300 ${
                          isActive
                            ? "bg-[#046BD2] text-white ring-4 ring-blue-100 shadow-md scale-105"
                            : isPassed
                            ? "bg-[#046BD2]/80 text-white"
                            : "bg-slate-200 text-slate-600"
                        }`}
                      >
                        {isPassed && !isActive ? "✓" : step.number}
                      </div>

                      {/* Title & Description */}
                      <div>
                        <p
                          className={`text-sm sm:text-base lg:text-lg font-bold tracking-tight transition-colors duration-300 ${
                            isActive
                              ? "text-[#046BD2]"
                              : isPassed
                              ? "text-slate-800"
                              : "text-slate-600"
                          }`}
                        >
                          {step.title}
                        </p>
                        {isActive && (
                          <p className="text-[11px] sm:text-xs text-slate-500 font-medium animate-fadeIn">
                            {step.desc}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Active pulse icon */}
                    {isActive && (
                      <span className="text-[#046BD2] font-extrabold text-xs hidden sm:inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded-md shadow-xs border border-blue-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#046BD2] animate-ping" />
                        Active
                      </span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-4 sm:mt-5 pl-2.5 flex items-center gap-4">
              <Link
                href="/#contact"
                className="inline-block bg-[#D82C5E] hover:bg-[#bf204d] !text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-7 py-3 rounded-md shadow-md transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
              >
                GET A FREE QUOTE NOW
              </Link>
              <span className="text-[11px] text-slate-400 font-medium">
                Auto-advancing • Hover to pause
              </span>
            </div>
          </div>

          {/* Right Column: Synchronized Visual Flowchart */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <ProcessFlowchart
              activeStep={activeStep}
              setActiveStep={setActiveStep}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

