import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Book a Free Growth Audit & Strategy Call | AdForge Tech",
  description:
    "Get in touch with AdForge Tech's senior performance specialists in Gurugram. Request a complimentary 90-day growth roadmap and ad account audit.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact AdForge Tech | Free Growth Strategy Call",
    description:
      "Speak directly with a performance marketing specialist. Fast response within 2 hours.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
