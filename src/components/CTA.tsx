"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

import ReCAPTCHA from "react-google-recaptcha";

export default function CTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    monthlySpend: "< ₹1 Lakh",
  });
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [captchaLoaded, setCaptchaLoaded] = useState(false);

  // Only load reCAPTCHA when user starts interacting with form
  const handleFormFocus = useCallback(() => {
    if (!captchaLoaded) setCaptchaLoaded(true);
  }, [captchaLoaded]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    try {
      let token = "";
      if (recaptchaRef.current) {
        try {
          token = (await recaptchaRef.current.executeAsync()) || "";
        } catch (cErr) {
          console.warn("reCAPTCHA execute error:", cErr);
        }
      }

      await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          website: formData.website,
          monthlyBudget: formData.monthlySpend,
          service: "Growth Audit & Paid Media Roadmap",
          source: "Homepage CTA Form",
          recaptchaToken: token,
        }),
      });
      recaptchaRef.current?.reset();
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column – Value Proposition & Trust Badges */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col gap-6 text-left"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight tracking-tight">
              Ready to Scale Your Brand with{" "}
              <span className="text-[#046BD2]">Predictable ROI?</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Get a comprehensive 1-on-1 Growth Audit &amp; Paid Media Roadmap from
              our certified performance specialists. We analyze your ads, funnels,
              and unit economics — completely free.
            </p>

            {/* Checklist of what you get */}
            <div className="space-y-3 pt-1">
              {[
                "Full Google Ads & Meta Ads Account Audit",
                "Competitor Ad Spy & Creative Benchmark Report",
                "Conversion Rate Optimization (CRO) Quick Wins",
                "Custom 90-Day Scalability Roadmap",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-[#046BD2] flex-shrink-0 shadow-xs" />
                  <span className="text-sm font-semibold text-slate-800">{item}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Right Column – Instant Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200/90 relative">
              <div className="text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Claim Your Free Growth Audit
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill in your details below and our team will get back to you within 2 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center flex flex-col items-center gap-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold shadow-md">
                    ✓
                  </div>
                  <h4 className="text-lg font-bold">Audit Request Received!</h4>
                  <p className="text-xs sm:text-sm text-emerald-700">
                    Thank you, <span className="font-bold">{formData.name}</span>. Our growth strategist will review your brand ({formData.website || "your site"}) and contact you at {formData.phone} shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} onFocus={handleFormFocus} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cta-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name / Brand Name *
                      </label>
                      <input
                        id="cta-name"
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#046BD2] focus:bg-white text-slate-900 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="cta-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#046BD2] focus:bg-white text-slate-900 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cta-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        id="cta-phone"
                        type="tel"
                        required
                        placeholder="+91 81788 02368"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#046BD2] focus:bg-white text-slate-900 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="cta-website" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Website / Store Link
                      </label>
                      <input
                        id="cta-website"
                        type="text"
                        placeholder="yourbrand.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-[#046BD2] focus:bg-white text-slate-900 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cta-budget" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Current Monthly Ad Spend
                    </label>
                    <select
                      id="cta-budget"
                      value={formData.monthlySpend}
                      onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#046BD2] focus:bg-white text-slate-900 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    >
                      <option value="< ₹1 Lakh">&lt; ₹1 Lakh / month</option>
                      <option value="₹1 Lakh – ₹5 Lakh">₹1 Lakh – ₹5 Lakh / month</option>
                      <option value="₹5 Lakh – ₹20 Lakh">₹5 Lakh – ₹20 Lakh / month</option>
                      <option value="₹20 Lakh+">₹20 Lakh+ / month (Enterprise)</option>
                    </select>
                  </div>

                  {/* Google reCAPTCHA v2 Invisible — lazy loaded on form focus */}
                  {captchaLoaded && (
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      size="invisible"
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Lc0BVstAAAAAO2_FNzwyuFZ-aUgivoGJLFkXW8f"}
                    />
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#D82C5E] hover:bg-[#bf204d] disabled:opacity-75 !text-white font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg shadow-pink-500/20 transition-all duration-200 hover:shadow-xl cursor-pointer mt-2"
                  >
                    {loading ? "SENDING AUDIT REQUEST..." : "GET FREE GROWTH AUDIT NOW →"}
                  </motion.button>

                  <p className="text-[10px] text-center text-slate-500">
                    🔒 100% Privacy Protected. We respect your data confidentiality.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
