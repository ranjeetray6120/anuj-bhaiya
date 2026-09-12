import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web & Mobile App Development Services | AdForge",
  description:
    "Custom web development, mobile applications, backend systems, and AI-powered business software engineered for speed, scale, and high conversion.",
  alternates: {
    canonical: "/development",
  },
  openGraph: {
    title: "Web & Mobile App Development Services | AdForge",
    description:
      "Modern React/Next.js development, mobile apps, custom business software, and practical AI integrations.",
  },
};

export default function DevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
