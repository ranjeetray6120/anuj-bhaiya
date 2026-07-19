"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";

interface Message {
  sender: "bot" | "user";
  text: string;
  showWhatsApp?: boolean;
}

interface Suggestion {
  q: string;
  a: string;
  followUps: number[]; // Index offsets of follow-up suggestions
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  
  // Keep track of the active 2 suggestions shown on screen
  const [activeSuggestionIndexes, setActiveSuggestionIndexes] = useState<number[]>([0, 1]);

  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi! I'm the ADFORGE Scaling Assistant. How can I help you grow today? Select one of our common questions below, connect directly on WhatsApp, or type your query!",
      showWhatsApp: true,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestions: Suggestion[] = [
    { q: "What is your average ROAS?", a: "Our clients achieve an average return on ad spend (ROAS) of 3.5x to 4.8x, depending on their industry and conversion funnel maturity.", followUps: [2, 9] },
    { q: "How do I schedule a strategy call?", a: "You can schedule a free strategy call directly by filling out the scaling form in the Contact section at the bottom of the page!", followUps: [5, 4] },
    { q: "How much budget do I need?", a: "We recommend starting with a minimum ad spend of $1,500/month per channel to collect sufficient sandbox data for scaling.", followUps: [0, 3] },
    { q: "Which ad channel is B2B best?", a: "For B2B SaaS and enterprise leads, Google Search Ads (targeting competitor terms) paired with LinkedIn retargeting delivers the lowest cost-per-MQL.", followUps: [4, 7] },
    { q: "Do you offer SEO services?", a: "Yes! We run programmatic SEO campaigns, optimizing technical crawl structures and writing semantic content hubs to drive organic search traffic.", followUps: [14, 6] },
    { q: "How long does onboarding take?", a: "Our scaling sprint onboarding takes exactly 21 days: Week 1 is Auditing, Week 2 is Landing Page design, and Week 3 is sandbox launching.", followUps: [10, 9] },
    { q: "Do you design landing pages?", a: "Yes, bespoke mobile-first React landing pages are included in our Growth and Enterprise scaling plans to maximize ad click conversions.", followUps: [7, 2] },
    { q: "What is server-side tracking (CAPI)?", a: "Conversions API (CAPI) sends web events directly from our servers to Google/Meta, bypassing ad-blockers and iOS tracking limitations for accurate attribution.", followUps: [8, 3] },
    { q: "How do I track my campaign metrics?", a: "We provide all clients with a real-time, interactive Looker Studio dashboard that connects directly to active ad accounts and CRM pipelines.", followUps: [7, 6] },
    { q: "Do you require long-term contracts?", a: "No, we operate on flexible monthly commitments with a standard 30-day notice period. We focus on performance retention.", followUps: [5, 0] },
    { q: "Can you audit my Meta pixel?", a: "Yes! We run a baseline diagnostic audit on your Meta pixels and event triggers during the first week of onboarding.", followUps: [7, 12] },
    { q: "What industries do you serve?", a: "We serve B2B SaaS, E-Commerce/DTC, Healthcare, Real Estate, FinTech, and EdTech brands globally.", followUps: [3, 12] },
    { q: "Do you handle TikTok Ads?", a: "Yes! We set up, script, and manage TikTok campaigns, focus-testing short-form video assets for e-commerce and supplements.", followUps: [0, 13] },
    { q: "What is your target CPA?", a: "We align campaign bids to achieve your targeted Cost-Per-Acquisition (CPA), scaling spend only when CPA target metrics are hit.", followUps: [2, 8] },
    { q: "How long does SEO take to rank?", a: "Commercial SEO optimization typically yields initial rank updates within 90 days. High-competition transactional terms take 6 to 12 months, which is why we run PPC campaigns in parallel to secure immediate lead volumes.", followUps: [4, 11] },
  ];

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Click handler that triggers conversational follow-up questions shift
  const handleSuggestionClick = (q: string, a: string, followUpIndexes: number[]) => {
    setMessages((prev) => [...prev, { sender: "user", text: q }]);
    
    // Switch the active suggestion questions to follow-up questions
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: a }]);
      setActiveSuggestionIndexes(followUpIndexes);
    }, 450);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setInputValue("");

    setTimeout(() => {
      const lowerText = userText.toLowerCase();
      let botResponse = "That's a great question! To discuss this directly with our media buyers, please fill out the strategy form in the Contact section at the bottom of the page.";
      let matchedFollowUps = [0, 1]; // Reset suggestions to initial state on general query

      for (let i = 0; i < suggestions.length; i++) {
        const sug = suggestions[i];
        const keywords = sug.q.toLowerCase().replace(/[?]/g, "").split(" ");
        const matchCount = keywords.filter(kw => kw.length > 2 && lowerText.includes(kw)).length;
        if (matchCount >= 2) {
          botResponse = sug.a;
          matchedFollowUps = sug.followUps;
          break;
        }
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      setActiveSuggestionIndexes(matchedFollowUps);
    }, 650);
  };

  const whatsappUrl = `https://wa.me/917519010642?text=${encodeURIComponent(
    "Hi ADFORGE, I'm interested in getting a free ad account audit and strategy blueprint for my business!"
  )}`;

  // Resolve the 2 active suggestions based on current index pointers
  const firstActiveSug = suggestions[activeSuggestionIndexes[0]];
  const secondActiveSug = suggestions[activeSuggestionIndexes[1]];

  return (
    <div className="font-sans text-xs">
      
      {/* Chat window panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 bg-white border border-slate-200 shadow-2xl rounded-2xl w-[calc(100vw-32px)] sm:w-96 h-[500px] flex flex-col overflow-hidden transition-all duration-300">
          
          {/* Header */}
          <div className="bg-slate-900 text-white px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#ff6a00] flex items-center justify-center font-bold text-sm text-white">
                AF
              </div>
              <div className="text-left leading-none">
                <span className="text-xs font-black tracking-wide block uppercase font-mono">ADFORGE BOT</span>
                <span className="text-[9px] text-green-400 font-semibold inline-flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  Online Strategy Desk
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-grow overflow-y-auto p-4 space-y-3.5 bg-slate-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`p-3 rounded-lg text-xs leading-relaxed max-w-[85%] text-left ${
                    msg.sender === "user"
                      ? "bg-[#ff6a00] text-white rounded-br-none shadow-sm font-semibold"
                      : "bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm font-light"
                  }`}
                >
                  {msg.text}
                </div>

                {/* WhatsApp Direct Action Button */}
                {msg.showWhatsApp && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2.5 inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-extrabold text-[11px] rounded shadow-sm hover:shadow transition-all animate-whatsapp-pulse"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.118-2.905-6.993-1.876-1.875-4.359-2.907-7.004-2.909-5.438 0-9.863 4.42-9.866 9.865-.001 1.716.463 3.39 1.34 4.873l-.997 3.642 3.738-.98zm11.233-6.292c-.3-.15-1.772-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.777.975-.951 1.174-.174.2-.35.225-.65.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C10.744 7.29 10.142 5.81 9.89 5.21c-.244-.596-.49-.515-.677-.525-.175-.01-.375-.01-.576-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.11 4.52.714.31 1.27.494 1.703.63.716.226 1.368.194 1.882.118.573-.085 1.772-.725 2.02-.975.247-.25.247-.475.172-.625-.075-.15-.275-.225-.575-.375z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggestions panel */}
          <div className="px-3 py-2 border-t border-slate-100 bg-white">
            <div className="flex flex-wrap gap-1.5 items-center justify-between mb-1.5">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                {showMore ? "All Suggestions:" : "Conversational Suggestions:"}
              </span>
              <button
                onClick={() => setShowMore(!showMore)}
                className="text-[10px] font-bold text-[#ff6a00] hover:underline cursor-pointer focus:outline-none"
              >
                {showMore ? "Show Less" : "Show All Questions"}
              </button>
            </div>

            <div className={`flex flex-wrap gap-2 ${showMore ? "max-h-24 overflow-y-auto" : ""}`}>
              {/* Show follow-up suggestions dynamically matching active index pointers */}
              {!showMore && (
                <>
                  <button
                    onClick={() => handleSuggestionClick(firstActiveSug.q, firstActiveSug.a, firstActiveSug.followUps)}
                    className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 hover:border-[#ff6a00]/30 hover:text-[#ff6a00] rounded text-[10px] font-bold text-slate-655 transition-colors cursor-pointer text-left"
                  >
                    {firstActiveSug.q}
                  </button>
                  <button
                    onClick={() => handleSuggestionClick(secondActiveSug.q, secondActiveSug.a, secondActiveSug.followUps)}
                    className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 hover:border-[#ff6a00]/30 hover:text-[#ff6a00] rounded text-[10px] font-bold text-slate-655 transition-colors cursor-pointer text-left"
                  >
                    {secondActiveSug.q}
                  </button>
                </>
              )}

              {/* Show static full list of all 15 questions if showMore is true */}
              {showMore &&
                suggestions.map((sug, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSuggestionClick(sug.q, sug.a, sug.followUps)}
                    className="px-2.5 py-1.5 bg-slate-50 border border-slate-200 hover:border-[#ff6a00]/30 hover:text-[#ff6a00] rounded text-[10px] font-bold text-slate-655 transition-colors cursor-pointer text-left"
                  >
                    {sug.q}
                  </button>
                ))}
            </div>
          </div>

          {/* User message input */}
          <form onSubmit={handleSend} className="p-3 border-t border-slate-100 bg-white flex gap-2">
            <input
              type="text"
              placeholder="Ask ADFORGE strategy..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-grow bg-slate-50 border border-slate-200 focus:border-[#ff6a00] rounded px-3 py-2 text-xs text-slate-900 placeholder-slate-450 focus:outline-none focus:ring-1 focus:ring-[#ff6a00]"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded bg-[#ff6a00] hover:bg-[#e05d00] text-white flex items-center justify-center flex-shrink-0 cursor-pointer shadow-sm shadow-orange-500/10 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        
        {/* Pulsing WhatsApp Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 hover:w-44 h-14 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-start pl-[17px] gap-2 shadow-2xl transition-all duration-300 ease-in-out cursor-pointer transform active:scale-95 border border-white/10 animate-whatsapp-pulse group overflow-hidden"
          aria-label="Direct WhatsApp Chat"
        >
          <svg className="w-5 h-5 flex-shrink-0 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.03-5.118-2.905-6.993-1.876-1.875-4.359-2.907-7.004-2.909-5.438 0-9.863 4.42-9.866 9.865-.001 1.716.463 3.39 1.34 4.873l-.997 3.642 3.738-.98zm11.233-6.292c-.3-.15-1.772-.875-2.046-.975-.276-.1-.477-.15-.677.15-.2.3-.777.975-.951 1.174-.174.2-.35.225-.65.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525C10.744 7.29 10.142 5.81 9.89 5.21c-.244-.596-.49-.515-.677-.525-.175-.01-.375-.01-.576-.01s-.525.075-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.22 5.11 4.52.714.31 1.27.494 1.703.63.716.226 1.368.194 1.882.118.573-.085 1.772-.725 2.02-.975.247-.25.247-.475.172-.625-.075-.15-.275-.225-.575-.375z" />
          </svg>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[11px] font-extrabold uppercase tracking-wider whitespace-nowrap pr-2">
            Chat with Expert
          </span>
        </a>

        {/* Floating Chat Toggler Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-[#ff6a00] hover:bg-[#e05d00] text-white flex items-center justify-center shadow-2xl transition-all cursor-pointer transform active:scale-95 border border-white/10"
          aria-label="Open Chat Assistant"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>

      </div>

    </div>
  );
}
