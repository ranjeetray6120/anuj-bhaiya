import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AdForge Tech Performance Agency",
  description:
    "Learn about AdForge Tech, our team of performance marketing engineers, our data-backed methodology, and our track record driving growth for 100+ brands.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | AdForge Tech",
    description:
      "Discover the story, mission, and team behind AdForge Tech — engineering performance marketing and sustainable business growth.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
