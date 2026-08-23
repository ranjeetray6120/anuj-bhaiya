"use client";

import { useState } from "react";
import Link from "next/link";

export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <aside aria-label="Quick Support and Contact" className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 select-none">
      {/* Quick Chat Popup Card when user clicks Chat Button */}
      {chatOpen && (
        <div className="w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 mb-1 animate-fadeIn text-slate-800">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-slate-800">AdForge Growth Team</span>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1 cursor-pointer"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          <div className="py-3 text-xs text-slate-600 leading-relaxed">
            <p className="font-semibold text-slate-900 mb-1">👋 Hi there!</p>
            <p>
              Looking to scale your Google Ads, Meta Ads, or SEO revenue? Talk directly with our senior growth strategist.
            </p>
          </div>

          <div className="flex flex-col gap-2 pt-2 border-t border-slate-100">
            <a
              href="https://wa.me/918178802368?text=Hello%20AdForge,%20I%20want%20to%20scale%20my%20business%20growth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#25D366] hover:bg-[#20bd5a] !text-white text-xs font-bold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 shadow-xs transition-all"
            >
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/#contact"
              onClick={() => setChatOpen(false)}
              className="w-full bg-slate-900 hover:bg-slate-800 !text-white text-xs font-bold py-2 px-3 rounded-xl text-center shadow-xs transition-all"
            >
              Request Free Growth Audit
            </Link>
          </div>
        </div>
      )}

      {/* WhatsApp Green Floating Action Button */}
      <a
        href="https://wa.me/918178802368?text=Hello%20AdForge,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer ring-2 ring-white/80"
      >
        <svg
          className="w-7 h-7 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c4.55 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.84a8.188 8.188 0 0 1-5.83 2.41c-1.47 0-2.91-.39-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.188 8.188 0 0 1-1.26-4.38c0-4.54 3.7-8.25 8.23-8.25zm4.52 11.59c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.43.06-.66.31-.22.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.65 4.2 3.71.59.25 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.07-.1-.23-.17-.48-.29z" />
        </svg>
      </a>

      {/* Blue Chat Floating Action Button with Red "1" Badge */}
      <button
        onClick={() => setChatOpen(!chatOpen)}
        aria-label="Open support chat"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#1877F2] hover:bg-[#046BD2] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative ring-2 ring-white/80"
      >
        <svg
          className="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>

        {/* Red "1" Notification Badge (as in image copy 4.png) */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#EF4444] text-white text-[11px] font-black flex items-center justify-center ring-2 ring-white shadow-md">
          1
        </span>
      </button>
    </aside>
  );
}
