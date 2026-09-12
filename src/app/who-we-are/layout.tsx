import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Are | About AdForge Performance Agency",
  description:
    "Learn about AdForge, our team of performance marketing engineers, our data-backed methodology, and our track record driving growth for 100+ brands.",
  alternates: {
    canonical: "/who-we-are",
  },
  openGraph: {
    title: "Who We Are | About AdForge",
    description:
      "Discover the story, mission, and team behind AdForge — engineering performance marketing and sustainable business growth.",
  },
};

export default function WhoWeAreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
