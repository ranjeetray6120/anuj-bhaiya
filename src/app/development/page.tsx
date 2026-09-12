"use client";

import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";


const capabilities = [
  {
    category: "Web",
    title: "Modern React & Next.js Development",
    desc: "Fast, responsive, and SEO-friendly web applications built with modern frontend architectures.",
    icon: (
      <svg className="w-6 h-6 text-[#046BD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    category: "Mobile",
    title: "Android & iOS Applications",
    desc: "Production-ready mobile applications with smooth UI, API integration, and app store deployment.",
    icon: (
      <svg className="w-6 h-6 text-[#046BD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    category: "Backend",
    title: "Java, Spring Boot & REST APIs",
    desc: "Scalable backend systems, secure authentication, database architecture, and background job processing.",
    icon: (
      <svg className="w-6 h-6 text-[#046BD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    category: "AI",
    title: "AI Applications, Agents & Integrations",
    desc: "Practical LLM integrations, conversational agents, MCP tooling, and intelligent workflow automation.",
    icon: (
      <svg className="w-6 h-6 text-[#046BD2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const services = [
  {
    num: "01",
    tag: "Frontend",
    title: "Web Development",
    desc: "Build modern, responsive, SEO-friendly websites and scalable web applications designed for exceptional user experience and lightning-fast speed.",
    items: [
      "React",
      "Next.js",
      "JavaScript / TypeScript",
      "Responsive UI",
      "SEO",
      "Performance Optimization",
    ],
  },
  {
    num: "02",
    tag: "Marketing & CRO",
    title: "Landing Page Development",
    desc: "Create fast, responsive, conversion-focused landing pages engineered for campaigns, product launches, lead generation, and paid traffic.",
    items: [
      "High-Performance Landing Pages",
      "Responsive Design",
      "SEO Optimization",
      "CTA Optimization",
      "Analytics Integration",
      "Performance Optimization",
    ],
  },
  {
    num: "03",
    tag: "Backend & Systems",
    title: "Backend Development",
    desc: "Build reliable backend systems, microservices, and secure APIs engineered for high availability, security, and effortless scaling.",
    items: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "Authentication",
      "Business Logic",
      "Database Integration",
      "Scheduled Jobs",
    ],
  },
  {
    num: "04",
    tag: "Mobile",
    title: "Mobile App Development",
    desc: "Build production-ready mobile applications for Android and iOS that deliver seamless mobile experiences and clean backend communication.",
    items: [
      "Mobile UI",
      "API Integration",
      "Authentication",
      "Push Notifications",
      "Backend Integration",
      "App Deployment",
      "Google Play Store Deployment",
    ],
  },
  {
    num: "05",
    tag: "Enterprise",
    title: "Custom Business Applications",
    desc: "Build software tailored to specific business workflows instead of forcing your operations into rigid off-the-shelf software.",
    items: [
      "Billing Applications",
      "CRM Systems",
      "Management Systems",
      "Admin Panels",
      "Inventory Systems",
      "Business Dashboards",
      "Internal Tools",
      "Workflow Applications",
    ],
  },
  {
    num: "06",
    tag: "Next-Gen AI",
    title: "AI Development",
    desc: "Build practical AI-powered applications, assistants, and intelligent business workflows rather than basic chatbot widgets.",
    items: [
      "AI Chat Applications",
      "LLM Integration",
      "AI Assistants",
      "AI Agents",
      "MCP-Based Integrations",
      "AI-Powered Workflows",
      "Open-Source AI Models",
      "AI APIs",
    ],
  },
  {
    num: "07",
    tag: "Commerce",
    title: "E-Commerce Development",
    desc: "Build high-converting online stores and custom commerce solutions optimized for sales velocity, checkout speed, and order management.",
    items: [
      "Shopify",
      "Custom E-Commerce",
      "Product Management",
      "Payment Integration",
      "Order Management",
      "Customer Management",
      "API Integrations",
      "Performance Optimization",
    ],
  },
  {
    num: "08",
    tag: "Connectivity",
    title: "API & Third-Party Integrations",
    desc: "Connect your applications securely with external services, payment gateways, marketing tools, and internal microservices.",
    items: [
      "REST APIs",
      "Payment APIs",
      "Google Services",
      "Analytics",
      "Authentication Services",
      "Marketing Integrations",
      "Third-Party APIs",
      "Webhooks",
    ],
  },
  {
    num: "09",
    tag: "Data Architecture",
    title: "Database & Data Management",
    desc: "Design reliable data layers, relational schemas, and query optimization pipelines for secure and fast application data storage.",
    items: [
      "Database Design",
      "Data Modeling",
      "CRUD Operations",
      "Relationships",
      "Query Optimization",
      "Application Data Management",
    ],
  },
  {
    num: "10",
    tag: "Infrastructure",
    title: "Deployment & DevOps",
    desc: "Development does not stop after coding — we manage your complete production deployment, server provisioning, security, and DNS setup.",
    items: [
      "Linux VPS Deployment",
      "Git / GitHub",
      "Nginx",
      "PM2",
      "SSL Configuration",
      "DNS Configuration",
      "Domain Configuration",
      "Production Deployment",
      "Application Monitoring",
      "Server Configuration",
    ],
  },
];

const techStack = [
  {
    category: "Frontend",
    description: "Modern client-side frameworks and languages",
    technologies: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "Responsive UI", "SEO Optimization", "Performance Optimization"],
  },
  {
    category: "Backend",
    description: "Enterprise-grade server architecture & APIs",
    technologies: ["Java", "Spring Boot", "REST APIs", "SQL", "MongoDB", "Node.js", "Python", "Webhooks", "Database Design"],
  },
  {
    category: "AI",
    description: "Intelligent systems, models & agent protocols",
    technologies: ["LLM APIs", "Open-Source AI Models", "AI Agents", "MCP Tooling", "AI-Powered Workflows", "RAG Systems"],
  },
  {
    category: "DevOps",
    description: "Production infrastructure, hosting & deployment",
    technologies: ["Linux VPS", "Git / GitHub", "Nginx", "PM2", "SSL Certificates", "DNS Setup", "Server Hardening", "Monitoring"],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Understand",
    desc: "Understand the business, requirements, target users, and technical objectives.",
  },
  {
    step: "02",
    title: "Plan",
    desc: "Define features, system architecture, technology stack, and the development roadmap.",
  },
  {
    step: "03",
    title: "Design",
    desc: "Create the user experience, interface layouts, user flows, and application structure.",
  },
  {
    step: "04",
    title: "Develop",
    desc: "Build frontend, backend, APIs, database layers, integrations, and core application features.",
  },
  {
    step: "05",
    title: "Test",
    desc: "Test functionality, device responsiveness, API stability, performance, and user flows.",
  },
  {
    step: "06",
    title: "Deploy",
    desc: "Deploy to production, configure custom domains, SSL certificates, Nginx, and server infrastructure.",
  },
];

const customSolutions = [
  {
    title: "Business Software",
    desc: "Billing applications, CRM systems, inventory management, and tailored business operational tools.",
    badge: "Operations",
  },
  {
    title: "Customer Applications",
    desc: "Client web portals, native mobile apps, self-service dashboards, and user account centers.",
    badge: "Customer-Facing",
  },
  {
    title: "Internal Tools",
    desc: "Administrative panels, operational dashboards, workflow automation tools, and staff management systems.",
    badge: "Efficiency",
  },
  {
    title: "AI Solutions",
    desc: "Intelligent AI assistants, autonomous agent workflows, document extraction, and custom LLM integrations.",
    badge: "Automation",
  },
];

const whyUsPoints = [
  {
    title: "End-to-End Development",
    desc: "We cover every stage: frontend, backend, mobile, APIs, database, and production deployment under one roof.",
  },
  {
    title: "Business-Focused Solutions",
    desc: "Software is built around your actual operational workflows, solving concrete business problems.",
  },
  {
    title: "Modern Technology",
    desc: "We use battle-tested frameworks like Next.js, React, and Java Spring Boot with clean, scalable architectures.",
  },
  {
    title: "Custom Development",
    desc: "Every system is developed specifically for your business requirements instead of generic one-size-fits-all templates.",
  },
  {
    title: "Production Ready",
    desc: "We configure servers, domains, SSL certificates, and process managers so your software runs securely from day one.",
  },
];

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-24">
        {/* 1. Hero Section */}
        <section
          className="relative py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #168ed3 0%, #1a97db 50%, #1f9fe3 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto flex flex-col items-center gap-5 relative z-10"
          >

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              We Build Scalable{" "}
              <span className="text-[#FFDE59]">Web, Mobile &amp; Software Solutions</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-3xl leading-relaxed">
              From high-performance websites and mobile applications to custom business software, backend systems, APIs, AI solutions, and production deployment, we build complete digital products tailored to your business.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#contact"
                  className="inline-block bg-[#D82C5E] hover:bg-[#bf204d] !text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md shadow-lg transition-all duration-200 cursor-pointer"
                >
                  START YOUR PROJECT
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#services"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md backdrop-blur-md border border-white/30 transition-all duration-200 cursor-pointer"
                >
                  VIEW OUR SERVICES
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 2. Key Capabilities / Highlights */}
        <section className="py-12 px-4 sm:px-6 lg:px-12 bg-slate-50 border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {cap.icon}
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#046BD2] block mb-1">
                    {cap.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug group-hover:text-[#046BD2] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {cap.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 3. Core Development Services */}
        <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                What We Build
              </h2>
              <div className="mt-3 mx-auto w-14 h-1 bg-[#046BD2] rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-slate-50 rounded-3xl p-7 sm:p-8 border border-slate-200 hover:border-[#046BD2]/50 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-extrabold text-slate-400 font-mono">
                        {service.num}
                      </span>
                      <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-[#046BD2] border border-blue-100 group-hover:bg-[#046BD2] group-hover:text-white transition-colors">
                        {service.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#046BD2] transition-colors">{service.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                      Included Capabilities
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.items.map((item, itemIdx) => (
                        <span
                          key={itemIdx}
                          className="inline-flex items-center text-xs font-medium text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-lg"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Technology Stack */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Technology We Work With
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-2 leading-relaxed">
                Battle-tested, modern technologies and tools we use to build reliable, high-performance software.
              </p>
              <div className="mt-3 mx-auto w-14 h-1 bg-[#046BD2] rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {techStack.map((stack, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#046BD2] transition-colors">{stack.category}</h3>
                    <p className="text-xs text-slate-500 mb-5">{stack.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-50/70 text-slate-800 border border-blue-100/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. End-to-End Development Process */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                From Idea to Production
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto mt-2 leading-relaxed">
                A structured 6-step lifecycle to turn requirements into reliable production software.
              </p>
              <div className="mt-3 mx-auto w-14 h-1 bg-[#046BD2] rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {processSteps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#046BD2]/50 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-10 h-10 rounded-2xl bg-[#046BD2] text-white font-extrabold text-sm flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform">
                        {step.step}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Phase {step.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#046BD2] transition-colors">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Custom Solutions Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-slate-50 border-t border-b border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-1">
                Have a Specific Business Requirement?
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
                We can build custom software around your workflow instead of forcing your business to adapt to an off-the-shelf solution.
              </p>
              <div className="mt-3 mx-auto w-14 h-1 bg-[#046BD2] rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {customSolutions.map((sol, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-50 text-[#046BD2] border border-blue-100 mb-3 group-hover:bg-[#046BD2] group-hover:text-white transition-colors">
                      {sol.badge}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#046BD2] transition-colors">{sol.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {sol.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                <Link
                  href="/#contact"
                  className="inline-block bg-[#D82C5E] hover:bg-[#bf204d] !text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md shadow-md transition-all duration-200 cursor-pointer"
                >
                  LET&apos;S BUILD IT
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. Actionable Pre-CTA Section */}
        <section
          className="py-16 px-4 sm:px-6 lg:px-8 text-center text-white overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #168ed3 0%, #1a97db 50%, #1f9fe3 100%)",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto flex flex-col items-center gap-4 relative z-10"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Have an Idea? Let&apos;s Build It.
            </h2>
            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl">
              Tell us what you want to build. We&apos;ll help you turn the idea into a working web, mobile, AI, or business application.
            </p>
            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/#contact"
                  className="inline-block bg-[#D82C5E] hover:bg-[#bf204d] !text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md shadow-lg transition-all duration-200 cursor-pointer"
                >
                  START YOUR PROJECT
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact-us"
                  className="inline-block bg-white/20 hover:bg-white/30 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider px-8 py-3.5 rounded-md backdrop-blur-md border border-white/30 transition-all duration-200 cursor-pointer"
                >
                  TALK TO US
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
