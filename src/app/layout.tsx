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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adforge.agency";

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
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T4S8XWQM');`,
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
