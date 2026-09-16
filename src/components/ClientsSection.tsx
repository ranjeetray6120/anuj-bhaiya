"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import clientsData from "@/data/clients.json";
import { ShieldCheck } from "lucide-react";

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  work: string[];
  tools?: string[];
  website?: string;
  domain?: string;
  description?: string;
}

const clients: ClientItem[] = clientsData as ClientItem[];

// Quadruple clients list for a seamless, unbroken infinite loop
const displayClients = [...clients, ...clients, ...clients, ...clients];

function ClientLogo({ name, domain }: { name: string; domain?: string }) {
  const [hasError, setHasError] = useState(false);
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (!domain || hasError) {
    return (
      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/80 text-[#046BD2] font-black text-xs flex items-center justify-center shrink-0 select-none shadow-2xs">
        {initials}
      </div>
    );
  }

  return (
    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center shrink-0 overflow-hidden group-hover:border-blue-200 transition-colors shadow-2xs">
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt={`${name} logo`}
        width={24}
        height={24}
        loading="lazy"
        onError={() => setHasError(true)}
        className="w-5 h-5 object-contain"
      />
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="py-16 sm:py-20 bg-slate-50/70 border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-8">
        <SectionHeader
          eyebrow="PROVEN PARTNERSHIPS"
          title="Brands We Have Scaled"
          highlight="Scaled"
          subtitle="Trusted by fast-growing e-commerce and enterprise leaders across the UK and India."
          align="center"
        />
      </div>

      {/* Infinite Marquee Slider: Sliding continuously from Left to Right */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right Smooth Edge Fade Overlays */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-10" />

        {/* Sliding Track */}
        <div className="animate-slide-ltr flex items-center gap-4">
          {displayClients.map((client, idx) => {
            const hasWebsite = Boolean(client.website);

            const content = (
              <>
                <ClientLogo name={client.name} domain={client.domain} />
                <span className="text-sm font-bold text-slate-800 group-hover:text-[#046BD2] transition-colors whitespace-nowrap">
                  {client.name}
                </span>
              </>
            );

            if (hasWebsite) {
              return (
                <a
                  key={`${client.id}-${idx}`}
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Visit ${client.name}`}
                  className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#046BD2]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 shrink-0 group select-none cursor-pointer"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={`${client.id}-${idx}`}
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#046BD2]/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 shrink-0 group select-none"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle Trust Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-10">
        <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-slate-700">
              100% Verified Performance Partnerships
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 font-medium text-slate-500">
            <span>UK &amp; India E-Commerce</span>
            <span>•</span>
            <span>B2B Lead Generation</span>
            <span>•</span>
            <span>Google &amp; Meta Ad Accounts</span>
          </div>
        </div>
      </div>
    </section>
  );
}
