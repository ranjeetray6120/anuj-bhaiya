import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/BusinessStats"; // Welcome / About
import Services from "@/components/Services";
import Features from "@/components/Features"; // Tabbed features
import WhyChooseUs from "@/components/WhyChooseUs"; // Warning contrast and Stand Out
import Testimonials from "@/components/Testimonials";
import FAQs from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot"; // Floating AI Chatbot widget

export const metadata = {
  title: "ADFORGE | Performance Digital Marketing & CRO Funnels",
  description: "ADFORGE engineers high-converting customer acquisition funnels, Google Ads, Meta campaigns, and programmatic SEO dominance.",
  keywords: ["performance marketing", "Google Ads agency", "Meta Ads scaling", "Conversion Rate Optimization", "programmatic SEO", "CRO funnels", "digital marketing agency"],
  alternates: {
    canonical: "https://adforge.agency",
  },
  openGraph: {
    title: "ADFORGE | Performance Digital Marketing & CRO Funnels",
    description: "ADFORGE engineers high-converting customer acquisition funnels, Google Ads, Meta campaigns, and programmatic SEO dominance.",
    url: "https://adforge.agency",
    siteName: "ADFORGE",
    images: [
      {
        url: "https://adforge.agency/assets/images/logo.png",
        width: 1200,
        height: 630,
        alt: "ADFORGE Agency Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADFORGE | Performance Digital Marketing & CRO Funnels",
    description: "ADFORGE engineers high-converting customer acquisition funnels, Google Ads, Meta campaigns, and programmatic SEO dominance.",
    images: ["https://adforge.agency/assets/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Unique structural flow of sections */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <Features />
        <WhyChooseUs />
        <About />
        <Testimonials />
        <FAQs />
        <Contact />
      </main>

      {/* AI Chatbot Widget (Bottom Right) */}
      <Chatbot />

      {/* Footer */}
      <Footer />
    </div>
  );
}
