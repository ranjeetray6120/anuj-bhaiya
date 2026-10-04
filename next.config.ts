import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 31536000, // 1 year
  },

  // Security & Best Practices
  poweredByHeader: false,
  reactStrictMode: true,

  // Compression
  compress: true,

  // Performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Don't cache favicons or manifest aggressively so changes reflect immediately
        source: "/(favicon.*|icon.*|apple-icon.*|site\\.webmanifest|manifest\\.webmanifest)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
        ],
      },
      {
        // Cache static media assets and fonts for 1 year
        source: "/(images|icons|_next/static)/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // 301 Permanent SEO Redirects for canonical structure
  async redirects() {
    return [
      {
        source: "/who-we-are",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/ppc",
        destination: "/pay-per-click",
        permanent: true,
      },
      {
        source: "/google-ads",
        destination: "/pay-per-click",
        permanent: true,
      },
      {
        source: "/meta",
        destination: "/meta-ads",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/clients",
        permanent: true,
      },
      {
        source: "/work",
        destination: "/clients",
        permanent: true,
      },
      {
        source: "/case-studies",
        destination: "/clients",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/blogs",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
