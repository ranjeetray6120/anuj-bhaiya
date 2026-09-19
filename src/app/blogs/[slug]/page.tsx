import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { blogPosts, getBlogPost, getAllBlogPostIds } from "@/data/blogPosts";
import { ArrowLeft, Clock, Calendar, CheckCircle2, Share2, Sparkles, ArrowRight, User } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const ids = getAllBlogPostIds();
  return ids.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | AdForge Tech",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adforgetech.com";
  const postUrl = `${siteUrl}/blogs/${post.id}`;

  return {
    title: `${post.title} | AdForge Tech Growth Playbooks`,
    description: post.excerpt,
    alternates: {
      canonical: `/blogs/${post.id}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      siteName: "AdForge Tech",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@AdForgetech",
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://adforgetech.com";
  const postUrl = `${siteUrl}/blogs/${post.id}`;

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && (p.category === post.category || p.featured))
    .slice(0, 3);

  // Article JSON-LD Structured Data for Google Rich Snippets
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "AdForge Tech",
      url: siteUrl,
      logo: `${siteUrl}/android-chrome-192x192.png`,
    },
    datePublished: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-blue-100 selection:text-blue-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />

      <main className="flex-1 pt-24 pb-20">
        {/* Article Header & Breadcrumbs */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#046BD2] hover:text-[#0356A8] transition-colors mb-6 group"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              Back to All Playbooks
            </Link>

            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2] bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                {post.category}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                {post.badge}
              </span>
              {post.stats && (
                <span className="text-xs font-black uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-md border border-slate-200">
                  {post.stats}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-6">
              {post.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-8">
              {post.excerpt}
            </p>

            {/* Author Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#046BD2] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  AF
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-sm">{post.author}</p>
                  <p className="text-slate-500">{post.authorRole}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 font-medium text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  {post.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>

          {/* Key Strategic Takeaways Box */}
          <div className="bg-slate-50 rounded-xl border border-slate-200 p-6 sm:p-8 mb-12 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#046BD2]">
                EXECUTIVE SUMMARY
              </span>
            </div>
            <h2 className="text-lg font-extrabold text-slate-900 tracking-tight mb-4">
              Core Strategic Takeaways:
            </h2>
            <ul className="space-y-3">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Body Content Sections */}
          <div className="space-y-12 text-slate-800 text-base leading-relaxed">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight pt-2 border-t border-slate-100">
                  {section.heading}
                </h2>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  {section.body}
                </p>

                {section.bullets && (
                  <ul className="space-y-2.5 my-4 pl-2">
                    {section.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                        <span className="text-[#046BD2] font-bold text-base mt-[-1px]">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.callout && (
                  <div className="bg-blue-50/70 border-l-4 border-[#046BD2] p-5 sm:p-6 rounded-r-xl my-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#046BD2] mb-1">
                      {section.callout.title}
                    </p>
                    <p className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                      {section.callout.text}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Inline Conversion Box */}
          <div className="mt-16 bg-[#0A1628] text-white rounded-xl p-8 sm:p-10 border border-slate-800 relative overflow-hidden text-left">
            <div className="relative z-10 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#168ED3] block mb-2">
                SCALE YOUR PERFORMANCE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight mb-3">
                Want Our Growth Engineers to Audit Your Ad Accounts?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Stop guessing your unit economics. We inspect your tracking setup, negative keywords, creative test velocity, and deliver a custom 90-day scale roadmap.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Button
                  href="/#contact"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Claim Free 1-on-1 Growth Audit
                </Button>
                <span className="text-xs text-slate-400">
                  Zero obligation • Confidential
                </span>
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 pt-12 border-t border-slate-200">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Related Growth Playbooks
                </h2>
                <Link
                  href="/blogs"
                  className="text-xs font-bold text-[#046BD2] hover:text-[#0356A8] uppercase tracking-wider transition-colors"
                >
                  View All Guides →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((rPost) => (
                  <Link
                    key={rPost.id}
                    href={`/blogs/${rPost.id}`}
                    className="bg-white rounded-xl border border-slate-200 p-5 flex flex-col justify-between hover:border-[#046BD2] transition-colors group"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#046BD2] block mb-2">
                        {rPost.category}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug group-hover:text-[#046BD2] transition-colors mb-2">
                        {rPost.title}
                      </h3>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {rPost.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>{rPost.readTime}</span>
                      <span className="text-[#046BD2] font-bold group-hover:translate-x-1 transition-transform">
                        Read →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
}
