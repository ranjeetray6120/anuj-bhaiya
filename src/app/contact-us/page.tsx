"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/adforge/HeroSection";
import { LeadForm } from "@/components/adforge/LeadForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Mail, Phone, MapPin, ShieldCheck, Clock } from "lucide-react";

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
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* Header Hero */}
        <HeroSection
          badge="GET IN TOUCH"
          title="Ready to Amplify Your Brand's Revenue Growth?"
          highlight="Revenue Growth"
          subtitle="Book a 1-on-1 growth strategy session with our senior performance specialists. We analyze your unit economics and reply within 2 hours."
          primaryCtaText="Claim Free Growth Audit"
          primaryCtaHref="#contact-form"
          secondaryCtaText="Read Client FAQs"
          secondaryCtaHref="#faqs"
          trustPoints={[
            "Direct Access to Senior Media Buyers",
            "Confidential Audit & Unit Economics Analysis",
            "Response Guaranteed Within 2 Hours",
          ]}
        />

        {/* Contact Form & Info Grid */}
        <section id="contact-form" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-8 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2] block mb-2">
                  DIRECT CONSULTATION
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                  Speak Directly with a Senior Growth Strategist
                </h2>
                <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                  No junior account reps or aggressive sales scripts. You will speak directly with an experienced media buyer who manages multi-lakh monthly ad budgets.
                </p>
              </div>

              <div className="space-y-4">
                <Card interactive surface="muted" className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#046BD2] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Email Address
                    </span>
                    <a
                      href="mailto:adfordge.marketing@gmail.com"
                      className="block text-base font-bold text-[#046BD2] hover:underline mt-0.5"
                    >
                      adfordge.marketing@gmail.com
                    </a>
                  </div>
                </Card>

                <Card interactive surface="muted" className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#046BD2] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Phone / WhatsApp
                    </span>
                    <a
                      href="tel:+918178802368"
                      className="block text-base font-bold text-[#046BD2] hover:underline mt-0.5"
                    >
                      +91 81788 02368
                    </a>
                  </div>
                </Card>

                <Card surface="muted" className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#046BD2] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Office Location
                    </span>
                    <p className="text-base font-bold text-slate-800 mt-0.5">
                      Gurugram, Haryana, India
                    </p>
                  </div>
                </Card>

                <Card surface="muted" className="p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Official Agency Credentials
                    </span>
                    <p className="text-sm font-bold text-slate-800 mt-0.5">
                      Google Official Partner • Meta Business Partner
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Right: Standardized Lead Form */}
            <div className="lg:col-span-7">
              <LeadForm
                source="Contact Us Dedicated Page"
                title="Request a Free Growth Audit"
                subtitle="Fill out the form below to receive your custom 90-day scaling roadmap."
                variant="full"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faqs" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-slate-200 overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="FREQUENTLY ASKED QUESTIONS"
              badgeVariant="secondary"
              title="Common Questions Before Getting Started"
              highlight="Before Getting Started"
              description="Transparent answers to help you understand our agreements, deliverables, and partnership structure."
            />

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card
                  key={idx}
                  interactive
                  surface="white"
                  className="p-6 sm:p-7 flex flex-col gap-2 text-left"
                >
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
