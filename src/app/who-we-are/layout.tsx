import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | About AdForge Tech Performance Agency",
  description:
    "Learn about AdForge Tech, our team of performance marketing engineers, our data-backed methodology, and our track record driving growth for 100+ brands.",
  alternates: {
    canonical: "/who-we-are",
  },
  openGraph: {
    title: "Who We Are | About AdForge Tech",
    description:
      "Discover the story, mission, and team behind AdForge Tech — engineering performance marketing and sustainable business growth.",
  },
};

export default function WhoWeAreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
