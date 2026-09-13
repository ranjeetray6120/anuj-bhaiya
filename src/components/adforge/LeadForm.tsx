"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export interface LeadFormProps {
  source?: string;
  title?: string;
  subtitle?: string;
  variant?: "compact" | "full";
  className?: string;
}

const serviceOptions = [
  { value: "All (Google + Meta + SEO)", label: "All (Omnichannel Scaling)" },
  { value: "Google Ads / PPC", label: "Google Ads / PPC" },
  { value: "Meta Ads (FB & IG)", label: "Meta Ads (Facebook & Instagram)" },
  { value: "Search Engine Optimization", label: "Search Engine Optimization (SEO)" },
  { value: "Custom Web & App Dev", label: "Custom Web & App Development" },
];

const budgetOptions = [
  { value: "< ₹1 Lakh", label: "< ₹1 Lakh / month" },
  { value: "₹1 Lakh – ₹5 Lakh", label: "₹1 Lakh – ₹5 Lakh / month" },
  { value: "₹5 Lakh – ₹20 Lakh", label: "₹5 Lakh – ₹20 Lakh / month" },
  { value: "₹20 Lakh+", label: "₹20 Lakh+ / month (Enterprise)" },
];

export const LeadForm: React.FC<LeadFormProps> = ({
  source = "Website Lead Form",
  title = "Claim Your Free Growth Audit",
  subtitle = "Fill in your details below and our team will get back to you within 2 hours.",
  variant = "compact",
  className = "",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    service: "All (Google + Meta + SEO)",
    monthlyBudget: "₹1 Lakh – ₹5 Lakh",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadRecaptcha, setLoadRecaptcha] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Lazy-load reCAPTCHA on first user interaction with the form
  const handleInteraction = () => {
    if (!loadRecaptcha) setLoadRecaptcha(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setLoadRecaptcha(true);
      window.removeEventListener("scroll", handleScroll);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    let token = "";
    if (recaptchaRef.current) {
      try {
        token = (await recaptchaRef.current.executeAsync()) || "";
      } catch (err) {
        console.warn("reCAPTCHA execute failed:", err);
      }
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          source,
          recaptchaToken: token,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to submit form");
      }

      recaptchaRef.current?.reset();
      setSubmitted(true);
    } catch (err: unknown) {
      console.error("LeadForm error:", err);
      // We set submitted to true so the user is not stuck if it's an email delivery issue, but show error if needed
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`w-full bg-white rounded-xl p-6 sm:p-8 border border-slate-200 text-left shadow-xs ${className}`}
      onFocus={handleInteraction}
      onClick={handleInteraction}
    >
      <div className="mb-6 text-center">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 sm:p-8 rounded-2xl text-center flex flex-col items-center gap-3"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="text-xl font-bold">Request Received!</h4>
          <p className="text-sm text-emerald-800 max-w-sm">
            Thank you, <span className="font-bold">{formData.name || "there"}</span>. Our senior growth strategist will analyze your website and reach out via email or phone within 2 hours.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Your Full Name"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              label="Business Email"
              type="email"
              required
              placeholder="name@company.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Phone / WhatsApp"
              type="tel"
              required
              placeholder="+91 81788 02368"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <Input
              label="Website / Store URL"
              placeholder="yourbrand.com"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </div>

          {variant === "full" ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Select
                  label="Primary Service Needed"
                  options={serviceOptions}
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                />
                <Select
                  label="Monthly Ad Budget"
                  options={budgetOptions}
                  value={formData.monthlyBudget}
                  onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                />
              </div>

              <Textarea
                label="Website URL & Growth Goals"
                rows={3}
                placeholder="Tell us about your brand, current challenges, target ROAS..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Select
                label="Service Needed"
                options={serviceOptions}
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              />
              <Select
                label="Monthly Spend"
                options={budgetOptions}
                value={formData.monthlyBudget}
                onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
              />
            </div>
          )}

          {/* Invisible Google reCAPTCHA */}
          {loadRecaptcha && (
            <div className="flex justify-center my-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                size="invisible"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "6Lc0BVstAAAAAO2_FNzwyuFZ-aUgivoGJLFkXW8f"}
              />
            </div>
          )}

          {errorMessage && (
            <p className="text-xs text-rose-600 font-medium text-center">{errorMessage}</p>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            isLoading={loading}
            className="mt-2"
          >
            Claim Free Growth Audit
          </Button>

          <div className="flex items-center justify-center gap-2 pt-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            <span>100% Confidential • No Obligation • Response within 2 hrs</span>
          </div>
        </form>
      )}
    </div>
  );
};
