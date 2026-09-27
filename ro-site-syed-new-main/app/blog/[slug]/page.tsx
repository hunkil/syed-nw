import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Phone,
  CheckCircle,
  ShieldCheck,
  Tag,
  ChevronRight,
  ArrowRight,
  Share2,
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '@/src/data/blogPosts';
import { BUSINESS_DETAILS } from '@/src/data/content';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | RO Service Centre 24x7',
    };
  }

  const url = `https://www.roservicecentre24x7.in/blog/${post.slug}`;

  return {
    title: `${post.title} | RO Service Centre 24x7 Bangalore`,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://www.roservicecentre24x7.in/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'LocalBusiness',
      name: 'RO Service Centre 24x7',
      url: 'https://www.roservicecentre24x7.in',
      telephone: '+918050291180',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.roservicecentre24x7.in/blog/${post.slug}`,
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.roservicecentre24x7.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.roservicecentre24x7.in/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.roservicecentre24x7.in/blog/${post.slug}`,
      },
    ],
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <div className="min-h-screen bg-[#f8fbfe] text-slate-900 flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Header />

      <main className="flex-1">
        {/* Article Header */}
        <section className="bg-white border-b border-slate-200/80 py-10 sm:py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumb navigation */}
            <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 font-medium">
              <Link href="/" className="hover:text-[#0066cc] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <Link href="/blog" className="hover:text-[#0066cc] transition-colors">Blog</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-md">
                {post.title}
              </span>
            </nav>

            {/* Category badge */}
            <div className="inline-block bg-blue-50 text-[#0066cc] text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
              {post.category}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#002b66] tracking-tight leading-[1.2] mb-6">
              {post.title}
            </h1>

            {/* Metadata Bar */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0066cc] flex items-center justify-center font-bold text-xs">
                  RO
                </div>
                <span className="font-semibold text-slate-800">{post.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>Updated: {post.modifiedAt}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{post.readingTime}</span>
              </div>
            </div>

          </div>
        </section>

        {/* Article Body + Sidebar Layout */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Featured Image */}
            <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 mb-10 bg-slate-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
            </div>

            {/* Lead Intro Paragraph */}
            <div className="bg-blue-50/60 border-l-4 border-[#0066cc] rounded-r-xl p-5 sm:p-6 mb-10 text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
              {post.content.lead}
            </div>

            {/* Structured Sections */}
            <div className="space-y-10 text-slate-700 leading-relaxed text-base">
              {post.content.sections.map((sec, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/70 shadow-2xs">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#002b66] mb-4 tracking-tight leading-snug">
                    {sec.heading}
                  </h2>

                  <div className="space-y-4">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-slate-600 leading-relaxed text-[15px] sm:text-base">
                        {p}
                      </p>
                    ))}
                  </div>

                  {sec.bulletPoints && sec.bulletPoints.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2.5">
                      {sec.bulletPoints.map((bp, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-800">
                          <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{bp}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Internal Brand Link Callout */}
            {post.relatedBrandSlug && (
              <div className="mt-10 bg-white rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066cc] block mb-1">
                    Related Bangalore Service
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Need genuine maintenance for your {post.relatedBrandName} purifier?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Book certified doorstep inspection, membrane testing, and genuine replacement kits across Bengaluru.
                  </p>
                </div>
                <Link
                  href={`/${post.relatedBrandSlug}`}
                  className="shrink-0 bg-[#0066cc] hover:bg-[#0052a3] text-white text-xs sm:text-sm font-bold py-3 px-5 rounded-xl transition-colors inline-flex items-center gap-2 shadow-sm"
                >
                  <span>{post.relatedBrandName} Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )}

            {/* Quick Call & Booking Card */}
            <div className="mt-10 rounded-2xl bg-gradient-to-br from-[#002b66] to-[#004b99] p-6 sm:p-8 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-1">
                  Immediate Doorstep Support
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  Water purifier acting up? We reach within 60–90 mins.
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1">
                  Inspection fee ₹299 (fully adjusted in bill). 30-day labor guarantee.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
                <a
                  href={`tel:${BUSINESS_DETAILS.helplineNumber}`}
                  className="bg-white hover:bg-slate-100 text-[#002b66] font-bold text-xs sm:text-sm py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 fill-current text-[#0066cc]" />
                  <span>Call {BUSINESS_DETAILS.helplineDisplay}</span>
                </a>
                <Link
                  href="/"
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <span>Book Online</span>
                </Link>
              </div>
            </div>

            {/* Read Next Section */}
            {otherPosts.length > 0 && (
              <div className="mt-16 pt-12 border-t border-slate-200">
                <h3 className="text-xl font-bold text-[#002b66] mb-6">
                  Recommended Water Purifier Guides
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {otherPosts.map((op) => (
                    <Link
                      key={op.slug}
                      href={`/blog/${op.slug}`}
                      className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-300 transition-all shadow-2xs hover:shadow-sm block group"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                        {op.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors leading-snug line-clamp-2">
                        {op.title}
                      </h4>
                      <span className="inline-flex items-center gap-1 text-xs text-[#0066cc] font-semibold mt-3">
                        <span>Read article</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
