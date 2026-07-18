import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import About from "@/components/BusinessStats"; // Welcome / About
import Services from "@/components/Services";
import Features from "@/components/Features"; // Tabbed features
import WhyChooseUs from "@/components/WhyChooseUs"; // Warning contrast and Stand Out
import ProcessTimeline from "@/components/ProcessTimeline";
import Portfolio from "@/components/Portfolio";
import CaseStudies from "@/components/CaseStudies";
import IndustriesServed from "@/components/IndustriesServed";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aetheris Digital | Digital Marketing & SEO Solutions",
  description: "Aetheris Digital delivers high converting digital marketing, Google Ads, Meta Ads, and SEO solutions for your business.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Layout - Restored all sections */}
      <main className="flex-grow">
        <Hero />
        {/* <ClientLogos /> */}
        <About />
        <Services />
        <Features />
        <WhyChooseUs />
        {/* <ProcessTimeline /> */}
        {/* <Portfolio /> */}
        {/* <CaseStudies /> */}
        {/* <IndustriesServed /> */}
        {/* <Pricing /> */}
        <Testimonials />
        <FAQs />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
