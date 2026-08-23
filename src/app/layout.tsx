import type { Metadata } from "next";
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
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
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
        "https://linkedin.com",
        "https://instagram.com",
        "https://youtube.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
        <FloatingWidgets />
      </body>
    </html>
  );
}
