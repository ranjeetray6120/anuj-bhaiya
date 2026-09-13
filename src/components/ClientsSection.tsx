"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import clientsData from "@/data/clients.json";
import { ExternalLink, CheckCircle2, ShieldCheck, Wrench } from "lucide-react";

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
      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200/80 text-[#046BD2] font-black text-sm flex items-center justify-center shrink-0 select-none shadow-xs">
        {initials}
      </div>
    );
  }

  return (
    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 p-2 flex items-center justify-center shrink-0 overflow-hidden group-hover:border-blue-200 transition-colors shadow-xs">
      <img
        src={`https://www.google.com/s2/favicons?domain=${domain}&sz=128`}
        alt={`${name} logo`}
        width={32}
        height={32}
        loading="lazy"
        onError={() => setHasError(true)}
        className="w-7 h-7 object-contain"
      />
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-slate-50/70 border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <SectionHeader
          eyebrow="PROVEN PARTNERSHIPS"
          title="Our Clients"
          highlight="Clients"
          subtitle="Trusted by businesses to drive growth through performance marketing and digital advertising."
          align="center"
        />

        {/* Client Cards Grid: 4 cols on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {clients.map((client) => {
            const hasWebsite = Boolean(client.website);

            return (
              <div
                key={client.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#046BD2] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
              >
                <div>
                  {/* Top Row: Logo, Name & External Link */}
                  <div className="flex items-start justify-between gap-3 mb-3.5">
                    <div className="flex items-center gap-3">
                      <ClientLogo name={client.name} domain={client.domain} />
                      <div>
                        <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-[#046BD2] transition-colors">
                          {client.name}
                        </h3>
                        <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                          {client.category}
                        </p>
                      </div>
                    </div>

                    {hasWebsite && (
                      <a
                        href={client.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${client.name} official website (opens in new tab)`}
                        className="text-slate-400 hover:text-[#046BD2] p-1.5 rounded-lg hover:bg-blue-50 transition-colors shrink-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>

                  {/* Description (if verified) */}
                  {client.description && (
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                      {client.description}
                    </p>
                  )}

                  {/* Scope of Work Deliverables */}
                  <div className="mb-4">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Scope of Work
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {client.work.map((w, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-50/80 text-[#046BD2] border border-blue-100"
                        >
                          {w}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Stack Deployed */}
                  {client.tools && client.tools.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 mb-2">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                        <Wrench className="w-3 h-3 text-slate-400" />
                        <span>Tools Deployed</span>
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {client.tools.map((tool, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/80"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Action: Verified Link / Status */}
                <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  {hasWebsite ? (
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-[#046BD2] hover:text-[#0356A8] transition-colors py-0.5"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1 font-semibold text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Partner</span>
                    </span>
                  )}

                  <span className="text-[11px] font-medium text-slate-400">
                    Portfolio
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Metric Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-slate-800">
              100% Verified Performance Partnerships
            </span>
          </div>
          <div className="flex items-center gap-6 font-medium">
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
