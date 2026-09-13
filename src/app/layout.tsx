import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import FloatingWidgets from "@/components/FloatingWidgets";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adforgetech.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AdForge | Performance Driven Digital Marketing Agency",
    template: "%s | AdForge",
  },
  description:
    "AdForge is a premier performance marketing agency in Gurugram. We specialize in Google Ads, Meta Ads (Facebook & Instagram), SEO, and CRO development engineered for maximum ROI.",
  keywords: [
    "Performance Marketing Agency",
    "Digital Marketing Agency Gurugram",
    "Google Ads Management",
    "Meta Ads Agency",
    "SEO Services India",
    "E-commerce Growth Agency",
    "Lead Generation Marketing",
    "CRO Funnel Development",
  ],
  authors: [{ name: "AdForge Team", url: siteUrl }],
  creator: "AdForge",
  publisher: "AdForge",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "AdForge | Performance Driven Digital Marketing Agency",
    description:
      "Ads that forge growth. Scale your business with data-driven Google Ads, Meta Ads, and SEO with guaranteed performance milestones.",
    siteName: "AdForge",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 600,
        alt: "AdForge - Performance Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdForge | Performance Driven Digital Marketing Agency",
    description:
      "Ads that forge growth. Performance marketing, Google Ads & Meta Ads engineered for measurable ROI.",
    site: "@AdForgetech",
    creator: "@AdForgetech",
    images: ["/logo.jpeg"],
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#168ed3",
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "AdForge",
      url: siteUrl,
      logo: `${siteUrl}/logo.jpeg`,
      description:
        "AdForge is a leading performance marketing agency delivering measurable ROI via Google Ads, Meta Ads, and SEO.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8178802368",
        contactType: "customer service",
        email: "adfordge.marketing@gmail.com",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: [
        "https://www.facebook.com/adforgeofficial",
        "https://instagram.com/adforge.marketing",
        "https://x.com/AdForgetech",
        "https://linkedin.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "AdForge",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#navigation`,
      name: "AdForge Main Navigation",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "Who We Are",
          description: "Learn about AdForge, our team, and our track record.",
          url: `${siteUrl}/who-we-are`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 2,
          name: "SEO Services",
          description: "Topical authority, technical SEO, and organic revenue growth.",
          url: `${siteUrl}/seo`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 3,
          name: "Google Ads (PPC)",
          description: "Performance Max, Search ads & high-converting YouTube funnels.",
          url: `${siteUrl}/pay-per-click`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 4,
          name: "Meta Ads (FB & IG)",
          description: "Advantage+ Shopping, creative testing & ROAS scaling.",
          url: `${siteUrl}/meta-ads`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 5,
          name: "Web & CRO Development",
          description: "High-converting landing pages & SEO-friendly custom websites.",
          url: `${siteUrl}/development`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 6,
          name: "Our Clients & Portfolio",
          description: "Verified performance marketing client partnerships.",
          url: `${siteUrl}/clients`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 7,
          name: "Blogs & Playbooks",
          description: "Actionable performance marketing blueprints and case studies.",
          url: `${siteUrl}/blogs`,
        },
        {
          "@type": "SiteNavigationElement",
          position: 8,
          name: "Contact Us",
          description: "Book a 1-on-1 growth strategy audit with our senior team.",
          url: `${siteUrl}/contact-us`,
        },
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "AdForge Performance Agency",
      url: siteUrl,
      image: `${siteUrl}/logo.jpeg`,
      telephone: "+91-8178802368",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preload LCP image (logo) */}
        <link
          rel="preload"
          href="/logo.png"
          as="image"
          type="image/png"
        />

        {/* Google Tag Manager — deferred to reduce TBT */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){function l(){(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T4S8XWQM');}
if(document.readyState==='complete'){l();}else{window.addEventListener('load',l);}
})();`,
          }}
        />
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4S8XWQM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <FloatingWidgets />
      </body>
    </html>
  );
}
