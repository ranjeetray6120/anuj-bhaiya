"use client";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/adforge/HeroSection";
import { ServiceCard } from "@/components/adforge/ServiceCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Globe, Smartphone, Server, Bot, ArrowRight } from "lucide-react";

const capabilities = [
  {
    category: "Web Applications",
    title: "Modern React & Next.js Development",
    desc: "Fast, responsive, and SEO-friendly web applications built with modern frontend architectures and server-side rendering.",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    category: "Mobile Systems",
    title: "Android & iOS Applications",
    desc: "Production-ready mobile applications with smooth UI, offline capabilities, API integration, and app store deployment.",
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    category: "Backend & Cloud",
    title: "Java, Spring Boot & REST APIs",
    desc: "Scalable backend systems, secure authentication, database architecture, microservices, and background job processing.",
    icon: <Server className="w-5 h-5" />,
  },
  {
    category: "Intelligent AI",
    title: "AI Applications, Agents & Integrations",
    desc: "Practical LLM integrations, conversational agents, MCP tooling, RAG pipelines, and intelligent workflow automation.",
    icon: <Bot className="w-5 h-5" />,
  },
];

const services = [
  {
    num: "01",
    tag: "Frontend",
    title: "Modern Web Application Engineering",
    desc: "Build modern, responsive, SEO-friendly websites and scalable web applications designed for exceptional user experience and sub-second load times.",
    items: ["React & Next.js", "TypeScript", "Responsive UI/UX", "Core Web Vitals", "State Architecture"],
  },
  {
    num: "02",
    tag: "Conversion",
    title: "High-Performance Landing Pages",
    desc: "Create fast, responsive, conversion-focused landing pages engineered for marketing campaigns, product launches, and paid media traffic.",
    items: ["High-Conversion Funnels", "A/B Testing Integration", "Sub-Second Speed", "Analytics Tracking"],
  },
  {
    num: "03",
    tag: "Backend & Systems",
    title: "Enterprise Backend Architecture",
    desc: "Build reliable backend systems, microservices, and secure APIs engineered for high availability, security, and effortless scaling.",
    items: ["Java & Spring Boot", "REST & GraphQL APIs", "JWT Auth & OAuth", "PostgreSQL & Redis"],
  },
  {
    num: "04",
    tag: "Mobile",
    title: "Cross-Platform Mobile Apps",
    desc: "Build production-ready mobile applications for Android and iOS that deliver seamless mobile experiences and clean backend communication.",
    items: ["Native UI Performance", "Offline Data Sync", "Push Notifications", "Play Store & App Store"],
  },
  {
    num: "05",
    tag: "Enterprise",
    title: "Custom Business & ERP Software",
    desc: "Build software tailored to specific business workflows instead of forcing your operations into rigid off-the-shelf software.",
    items: ["Internal Dashboards", "Billing & Invoicing", "Custom CRMs", "Automated Workflows"],
  },
  {
    num: "06",
    tag: "Next-Gen AI",
    title: "AI Agents & LLM Integration",
    desc: "Build practical AI-powered applications, autonomous agents, and intelligent business workflows rather than basic chatbot widgets.",
    items: ["Custom LLM Integration", "Agentic Workflows", "Vector DB & RAG", "MCP Architecture"],
  },
];

const techStack = [
  {
    category: "Frontend Stack",
    description: "Modern client-side frameworks & reactive interfaces",
    technologies: ["React 19", "Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    category: "Backend & Systems",
    description: "Enterprise-grade server architecture & microservices",
    technologies: ["Java", "Spring Boot", "REST APIs", "Node.js", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    category: "AI & Automation",
    description: "Intelligent systems, models & agent protocols",
    technologies: ["OpenAI APIs", "Claude 3.7", "Gemini 2.5", "LangChain", "MCP Tools", "Vector Search"],
  },
  {
    category: "Cloud & DevOps",
    description: "Production infrastructure, hosting & automated deployment",
    technologies: ["Linux VPS", "Docker", "Nginx", "GitHub Actions", "PM2", "SSL / DNS", "Cloudflare"],
  },
];

const processSteps = [
  { step: "01", title: "Discovery", desc: "Define business goals, requirements, target users, and technical constraints." },
  { step: "02", title: "Architecture", desc: "Design data schemas, API contracts, tech stack, and milestone roadmap." },
  { step: "03", title: "UI/UX Design", desc: "Create high-fidelity wireframes, interactive user flows, and design systems." },
  { step: "04", title: "Engineering", desc: "Develop frontend, backend services, integrations, and core features with clean code." },
  { step: "05", title: "QA & Audit", desc: "Rigorous testing across responsiveness, API security, load performance, and edge cases." },
  { step: "06", title: "Production", desc: "Deploy to scalable servers, configure domains, SSL, and continuous monitoring." },
];

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        {/* 1. Hero Section */}
        <HeroSection
          badge="FULL-STACK SOFTWARE ENGINEERING"
          title="We Build Scalable Web, Mobile & Software Solutions"
          highlight="Web, Mobile & Software"
          subtitle="From high-performance web applications and mobile apps to custom business software, backend architectures, APIs, and AI integrations — engineered for scale from day one."
          primaryCtaText="Start Your Project"
          primaryCtaHref="/#contact"
          secondaryCtaText="Explore Capabilities"
          secondaryCtaHref="#services"
          trustPoints={[
            "Next.js, React & Java Spring Boot",
            "End-to-End Architecture & Production Deployment",
            "100% Source Code Ownership",
          ]}
        />

        {/* 2. Key Capabilities / Highlights */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-12 bg-slate-50 border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <Card
                key={idx}
                interactive
                surface="white"
                className="p-6 sm:p-7 flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#046BD2] flex items-center justify-center mb-4">
                    {cap.icon}
                  </div>
                  <Badge variant="primary" size="sm" className="mb-2">
                    {cap.category}
                  </Badge>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. Core Development Services */}
        <section id="services" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="ENGINEERING CAPABILITIES"
              badgeVariant="primary"
              title="Full-Cycle Digital Product Development"
              highlight="Product Development"
              description="We build clean, robust applications engineered to withstand high traffic and adapt seamlessly to evolving business requirements."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  tag={service.tag}
                  title={service.title}
                  description={service.desc}
                  bullets={service.items}
                  href="/#contact"
                  ctaText="Discuss Project Scope"
                />
              ))}
            </div>
          </div>
        </section>

        {/* 4. Technology Stack */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="MODERN TECH STACK"
              badgeVariant="secondary"
              title="Battle-Tested Technologies & Frameworks"
              highlight="Technologies & Frameworks"
              description="We choose modern, secure, and actively supported technologies to ensure long-term stability and effortless maintenance."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((stack, idx) => (
                <Card
                  key={idx}
                  interactive
                  surface="white"
                  className="p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">
                      {stack.category}
                    </h3>
                    <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                      {stack.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {stack.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-slate-800 border border-blue-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 5. End-to-End Development Process */}
        <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <SectionHeader
              badge="DEVELOPMENT LIFECYCLE"
              badgeVariant="primary"
              title="From Initial Architecture to Production"
              highlight="Architecture to Production"
              description="A structured 6-step lifecycle that turns complex requirements into reliable, production-ready software."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {processSteps.map((step, idx) => (
                <Card
                  key={idx}
                  interactive
                  surface="muted"
                  className="p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-xl bg-[#046BD2] text-white font-black text-sm flex items-center justify-center shadow-xs">
                        {step.step}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Phase {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Pre-CTA Banner */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-b from-blue-50/70 to-slate-50 border-t border-slate-200 text-slate-900 overflow-hidden">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 relative z-10">
            <Badge variant="primary" size="md">
              CUSTOM DEVELOPMENT
            </Badge>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Have an Idea or Technical Requirement?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Tell us what you want to build. Our senior engineering team will architect the solution, scope the roadmap, and deploy it to production.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
              <Button
                href="/#contact"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Start Your Project
              </Button>
              <Button
                href="/contact-us"
                variant="outline"
                size="lg"
              >
                Schedule Technical Call
              </Button>
            </div>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
