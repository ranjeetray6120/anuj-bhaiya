"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Sparkles, PhoneCall } from "lucide-react";

export default function Hero() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-40 pb-16 flex items-center justify-center overflow-hidden">
      {/* Fallback dark background gradient if video fails */}
      <div className="absolute inset-0 bg-slate-950 z-0" />

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-10 opacity-70"
        autoPlay
        muted
        loop
        playsInline
        src="/assets/videos/hero.mp4"
        poster="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80"
      />

      {/* Dark Mask Overlay */}
      <div className="absolute inset-0 bg-black/75 z-20" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-8 text-white space-y-6 text-left">
            <motion.h4
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4eb46f]"
            >
              Boost Visibility, Drive Sales & Dominate Online
            </motion.h4>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              Struggling to Get Leads or ROI from Your Ads?
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
            >
              Our data-driven digital marketing and PPC strategies are built to scale your business, not drain it. From increasing visibility to turning traffic into real leads, we do it all.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-2"
            >
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#4eb46f] hover:bg-[#3d9e5c] text-white font-bold rounded-lg transition-colors cursor-pointer shadow-lg shadow-green-500/20 active:scale-98"
              >
                <PhoneCall className="w-4 h-4 fill-current" />
                Get Free Consultancy Call
              </button>
            </motion.div>
          </div>

          {/* Hero Right Content (Lead Gen Form) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-4 w-full"
          >
            <div className="bg-white rounded-lg p-5 sm:p-6 text-slate-900 shadow-2xl border border-slate-100">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="text-center space-y-1">
                    <h3 className="text-sm sm:text-base font-extrabold leading-tight text-slate-950">
                      Get 40% OFF + Free Expert Marketing Call{" "}
                      <span className="text-red-650 italic block text-xs mt-1">
                        (Only 10 Bookings Left!)
                      </span>
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold">
                      Enter Your Info Below to Grab the Deal!
                    </p>
                  </div>

                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Enter Name here"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#4eb46f] rounded-md px-3.5 py-2 text-sm text-slate-950 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4eb46f]"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Enter Email here"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#4eb46f] rounded-md px-3.5 py-2 text-sm text-slate-950 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4eb46f]"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      required
                      pattern="\d{10}"
                      minLength={10}
                      maxLength={10}
                      placeholder="Enter Mobile here (998877XXXX)"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#4eb46f] rounded-md px-3.5 py-2 text-sm text-slate-950 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4eb46f]"
                      value={formState.mobile}
                      onChange={(e) => setFormState({ ...formState, mobile: e.target.value })}
                    />
                  </div>

                  <div>
                    <textarea
                      required
                      rows={3}
                      placeholder="Enter Message here"
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#4eb46f] rounded-md px-3.5 py-2 text-sm text-slate-950 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#4eb46f] resize-none"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-[#4eb46f] hover:bg-[#3d9e5c] text-white font-bold rounded-md transition-colors cursor-pointer shadow flex items-center justify-center gap-1.5"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#4eb46f]/10 text-[#4eb46f] flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-slate-950">Thank You!</h4>
                    <p className="text-xs text-slate-550">
                      Your 40% discount coupon has been reserved. Our consultants will contact you shortly on {formState.mobile}.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
