import type { Metadata, Viewport } from "next";
import { Montserrat, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import FloatingWidgets from "@/components/FloatingWidgets";
import ThemeWatcher from "@/components/ThemeWatcher";

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
    default: "AdForge Tech | Performance Driven Digital Marketing Agency",
    template: "%s | AdForge Tech",
  },
  description:
    "AdForge Tech is a premier performance marketing and digital growth agency in Gurugram. We specialize in Google Ads, Meta Ads (Facebook & Instagram), SEO, and CRO development engineered for maximum ROI.",
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
  authors: [{ name: "AdForge Tech Team", url: siteUrl }],
  creator: "AdForge Tech",
  publisher: "AdForge Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      // Light Mode Favicons (Pure transparent high-contrast brand symbol)
      { url: "/favicon-light.ico?v=5", media: "(prefers-color-scheme: light)", sizes: "any" },
      { url: "/favicon-light-16x16.png?v=5", media: "(prefers-color-scheme: light)", type: "image/png", sizes: "16x16" },
      { url: "/favicon-light-32x32.png?v=5", media: "(prefers-color-scheme: light)", type: "image/png", sizes: "32x32" },
      { url: "/favicon-light-48x48.png?v=5", media: "(prefers-color-scheme: light)", type: "image/png", sizes: "48x48" },

      // Dark Mode Favicons
      { url: "/favicon-dark.ico?v=5", media: "(prefers-color-scheme: dark)", sizes: "any" },
      { url: "/favicon-dark-16x16.png?v=5", media: "(prefers-color-scheme: dark)", type: "image/png", sizes: "16x16" },
      { url: "/favicon-dark-32x32.png?v=5", media: "(prefers-color-scheme: dark)", type: "image/png", sizes: "32x32" },
      { url: "/favicon-dark-48x48.png?v=5", media: "(prefers-color-scheme: dark)", type: "image/png", sizes: "48x48" },

      // Universal fallbacks
      { url: "/android-chrome-192x192.png?v=5", type: "image/png", sizes: "192x192" },
      { url: "/android-chrome-512x512.png?v=5", type: "image/png", sizes: "512x512" },
    ],
    shortcut: [
      { url: "/favicon-light.ico?v=5", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.ico?v=5", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=5", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "AdForge Tech | Performance Driven Digital Marketing Agency",
    description:
      "Ads that forge growth. Scale your business with data-driven Google Ads, Meta Ads, and SEO with guaranteed performance milestones.",
    siteName: "AdForge Tech",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "AdForge Tech - Ads that forge growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdForge Tech | Performance Driven Digital Marketing Agency",
    description:
      "Ads that forge growth. Performance marketing, Google Ads & Meta Ads engineered for measurable ROI.",
    site: "@AdForgetech",
    creator: "@AdForgetech",
    images: ["/og-image.jpeg"],
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#168ed3" },
    { media: "(prefers-color-scheme: dark)", color: "#060d1f" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "AdForge Tech",
      legalName: "AdForge Tech",
      slogan: "Ads that forge growth",
      url: siteUrl,
      logo: `${siteUrl}/logo.jpeg`,
      description:
        "AdForge Tech is a leading performance marketing and digital growth agency delivering measurable ROI via Google Ads, Meta Ads, and SEO.",
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
      name: "AdForge Tech",
      alternateName: [
        "AdForge",
        "AdForgeTech",
        "AdForge Tech Agency",
        "AdForge Performance Marketing"
      ],
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/blogs?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#navigation`,
      name: "AdForge Tech Main Navigation",
      itemListElement: [
        {
          "@type": "SiteNavigationElement",
          position: 1,
          name: "About",
          description: "Learn about AdForge Tech, our team, and our track record.",
          url: `${siteUrl}/about`,
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
      name: "AdForge Tech",
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
    <html lang="en" suppressHydrationWarning className={`${montserrat.variable} ${inter.variable}`}>
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

        {/* Explicit Cache-Busted Favicons for Instant Browser Refresh */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground transition-colors duration-200">

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T4S8XWQM');`,
          }}
        />

        <ThemeWatcher />
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
