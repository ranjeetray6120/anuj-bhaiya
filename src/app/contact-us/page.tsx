"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    q: "How quickly can we launch campaigns once we onboard?",
    a: "Our standard onboarding sprint takes 3–5 business days. This includes full tracking setup (GA4, CAPI), competitor research, creative asset creation, and campaign architecture build-out.",
  },
  {
    q: "Do you require long-term lock-in contracts?",
    a: "No. We believe in earning your business every single month. We operate on flexible monthly retainer agreements with transparent performance milestones.",
  },
  {
    q: "Do I own my ad accounts and data?",
    a: "100% Yes. All ad accounts, pixels, Google Analytics properties, and creative files remain 100% your asset. We never hold your data hostage.",
  },
  {
    q: "What is the minimum monthly ad spend you manage?",
    a: "We work with brands spending anywhere from ₹1 Lakh/month up to ₹50 Lakh+/month across Google Ads, Meta Ads, and omnichannel campaigns.",
  },
];

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "All (Google + Meta + SEO)",
    monthlyBudget: "₹1 Lakh – ₹5 Lakh",
    message: "",
  });
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

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
          service: formData.service,
          monthlyBudget: formData.monthlyBudget,
          message: formData.message,
          source: "Contact Us Dedicated Page",
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
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Hero */}
        <section
          className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center text-white"
          style={{
            background: "linear-gradient(135deg, #168ed3 0%, #1a97db 50%, #1f9fe3 100%)",
          }}
        >
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/30">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Ready to Amplify Your{" "}
              <span className="text-[#FFDE59]">Digital Journey?</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed">
              Book a 1-on-1 growth strategy session with our senior performance specialists. We respond within 2 hours.
            </p>
          </div>
        </section>

        {/* Contact Form & Info Grid */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
                  Let&#39;s Connect
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 mt-1 leading-tight">
                  Speak Directly with a Growth Strategist
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                  No pushy sales reps. You will speak directly with a performance specialist who manages multi-lakh monthly ad budgets.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</span>
                  <a href="mailto:adfordge.marketing@gmail.com" className="text-base font-bold text-[#046BD2] hover:underline">
                    adfordge.marketing@gmail.com
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone / WhatsApp</span>
                  <a href="tel:+918178802368" className="text-base font-bold text-[#046BD2] hover:underline">
                    +91 81788 02368
                  </a>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Official Partnerships</span>
                  <p className="text-sm font-semibold text-slate-800">Google Official Partner • Meta Business Partner</p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-extrabold text-slate-900">Request a Free Growth Audit</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Fill out the form below to receive your custom 90-day scaling roadmap.
                </p>
              </div>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center flex flex-col items-center gap-3">
                  <h4 className="text-xl font-bold">Inquiry Received!</h4>
                  <p className="text-sm text-emerald-700">
                    Thank you, <span className="font-bold">{formData.name}</span>. Our growth team will review your requirements and reach out via email ({formData.email}) or phone ({formData.phone}) within 2 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-300 focus:border-[#046BD2] text-slate-900 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-300 focus:border-[#046BD2] text-slate-900 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-300 focus:border-[#046BD2] text-slate-900 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Primary Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-white border border-slate-300 focus:border-[#046BD2] text-slate-900 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                      >
                        <option value="All (Google + Meta + SEO)">All (Omnichannel Scaling)</option>
                        <option value="Google Ads / PPC">Google Ads / PPC</option>
                        <option value="Meta Ads (FB & IG)">Meta Ads (Facebook &amp; Instagram)</option>
                        <option value="Search Engine Optimization">Search Engine Optimization (SEO)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Monthly Ad Budget
                    </label>
                    <select
                      value={formData.monthlyBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                      className="w-full bg-white border border-slate-300 focus:border-[#046BD2] text-slate-900 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    >
                      <option value="< ₹1 Lakh">&lt; ₹1 Lakh / month</option>
                      <option value="₹1 Lakh – ₹5 Lakh">₹1 Lakh – ₹5 Lakh / month</option>
                      <option value="₹5 Lakh – ₹20 Lakh">₹5 Lakh – ₹20 Lakh / month</option>
                      <option value="₹20 Lakh+">₹20 Lakh+ / month (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Website URL &amp; Goals
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your brand, website URL, and current growth bottlenecks..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white border border-slate-300 focus:border-[#046BD2] text-slate-900 px-4 py-3 rounded-xl text-sm outline-none transition-colors"
                    />
                  </div>

                  {/* Google reCAPTCHA v2 Invisible */}
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Lc0BVstAAAAAO2_FNzwyuFZ-aUgivoGJLFkXW8f"}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#D82C5E] hover:bg-[#bf204d] disabled:opacity-75 !text-white font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.01] cursor-pointer"
                  >
                    {loading ? "SENDING INQUIRY..." : "SUBMIT AUDIT REQUEST →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
                Got Questions?
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
