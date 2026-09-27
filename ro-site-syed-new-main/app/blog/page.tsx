import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Calendar, Clock, ArrowRight, BookOpen, Phone, ChevronRight, CheckCircle2 } from 'lucide-react';
import { BLOG_POSTS } from '@/src/data/blogPosts';
import { BUSINESS_DETAILS } from '@/src/data/content';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';

export const metadata: Metadata = {
  title: 'RO Water Purifier Service & Maintenance Blog | Bangalore Expert Guides',
  description: 'Expert guides on RO water purifier repair, filter replacement intervals, TDS tuning, membrane care, and maintenance cost comparisons for Bangalore households.',
  alternates: {
    canonical: 'https://www.roservicecentre24x7.in/blog',
  },
  openGraph: {
    title: 'RO Water Purifier Service & Maintenance Blog | Bangalore Expert Guides',
    description: 'Expert guides on RO water purifier repair, filter replacement intervals, TDS tuning, membrane care, and maintenance cost comparisons for Bangalore households.',
    url: 'https://www.roservicecentre24x7.in/blog',
    siteName: 'RO Service Centre 24x7',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://www.roservicecentre24x7.in/blog#blog',
    name: 'RO Service Centre 24x7 Bangalore Blog',
    description: 'Expert advice, water quality tips, filter maintenance schedules, and brand comparison guides for RO water purifiers in Bengaluru.',
    url: 'https://www.roservicecentre24x7.in/blog',
    publisher: {
      '@type': 'LocalBusiness',
      name: 'RO Service Centre 24x7',
      url: 'https://www.roservicecentre24x7.in',
      telephone: '+918050291180',
    },
    blogPost: BLOG_POSTS.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://www.roservicecentre24x7.in/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.modifiedAt,
      image: post.image,
      author: {
        '@type': 'Person',
        name: post.author,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-[#f8fbfe] text-slate-900 flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Universal Header */}
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white border-b border-slate-200/80 py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-xs text-slate-500 mb-6 font-medium">
              <Link href="/" className="hover:text-[#0066cc] transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 font-semibold">Blog & Maintenance Guides</span>
            </nav>

            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0066cc] text-xs font-bold uppercase tracking-wider mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                Bengaluru RO Knowledge Base
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#002b66] tracking-tight leading-tight mb-4">
                RO Service & Water Purification Guides
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Practical advice from field technicians servicing Kent, Aquaguard, Pureit, and AO Smith purifiers across Bangalore neighborhoods.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group"
                >
                  {/* Image */}
                  <Link href={`/blog/${post.slug}`} className="relative h-52 w-full bg-slate-100 block overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </Link>

                  {/* Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta badges */}
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.publishedAt}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readingTime}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors leading-snug mb-3">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                        {post.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066cc] group-hover:text-[#0052a3] transition-colors"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      {post.relatedBrandSlug && (
                        <Link
                          href={`/${post.relatedBrandSlug}`}
                          className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 bg-slate-100 px-2.5 py-1 rounded-md transition-colors"
                        >
                          {post.relatedBrandName} Service →
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* In-Content Call to Action */}
            <div className="mt-16 bg-gradient-to-r from-[#002b66] to-[#0052a3] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
              <div className="max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 block mb-2">
                  Need Help With Your Water Purifier Today?
                </span>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-3">
                  Doorstep RO Service in Bangalore in 60–90 Minutes
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  Certified technicians ready with genuine sediment filters, RO membranes, and TDS testing meters. Available 7 days a week from 8:00 AM to 9:00 PM.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 shrink-0 w-full sm:w-auto">
                <a
                  href={`tel:${BUSINESS_DETAILS.helplineNumber}`}
                  className="bg-white hover:bg-slate-100 text-[#002b66] font-extrabold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Phone className="w-4 h-4 fill-current text-[#0066cc]" />
                  <span>Call {BUSINESS_DETAILS.helplineDisplay}</span>
                </a>
                <Link
                  href="/"
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-sm py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  <span>Book Doorstep Visit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
