import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AdForge Tech - Digital Growth & Performance Marketing",
    short_name: "AdForge Tech",
    description:
      "Ads that forge growth. Performance marketing, Google Ads, Meta Ads & SEO engineered for measurable ROI.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#046BD2",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
