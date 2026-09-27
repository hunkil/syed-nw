import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import {
  Calendar,
  Clock,
  User,
  Phone,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';
import { BRAND_PAGES_DATA, BUSINESS_DETAILS } from '@/src/data/content';
import { BLOG_POSTS, getBrandBlogImage } from '@/src/data/blogPosts';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';

interface BrandBlogPostProps {
  params: Promise<{
    brand: string;
    slug: string;
  }>;
}

function getBrand(key: string) {
  if (!key) return undefined;
  if (BRAND_PAGES_DATA[key]) return BRAND_PAGES_DATA[key];
  if (BRAND_PAGES_DATA[`${key}-service`]) return BRAND_PAGES_DATA[`${key}-service`];
  return Object.values(BRAND_PAGES_DATA).find(
    (b) =>
      b.id === key ||
      b.id === key.replace(/-service$/, '') ||
      b.slug === `/${key}` ||
      b.slug === `/${key}-service` ||
      b.name.toLowerCase() === key.toLowerCase()
  );
}

export async function generateStaticParams() {
  const brandKeys = Object.keys(BRAND_PAGES_DATA);
  const params: { brand: string; slug: string }[] = [];
  brandKeys.forEach((brandKey) => {
    BLOG_POSTS.forEach((post) => {
      params.push({ brand: brandKey, slug: post.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }: BrandBlogPostProps): Promise<Metadata> {
  const { brand: brandKey, slug } = await params;
  const brand = getBrand(brandKey);
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post || !brand) {
    return {
      title: 'Post Not Found | RO Service Centre 24x7',
    };
  }

  // Canonical URL handles both main domain and custom subdomain ad campaigns
  let canonicalUrl = `https://www.roservicecentre24x7.in/blog/${post.slug}`;

  try {
    const headersList = await headers();
    const forwardedHost = headersList.get('x-forwarded-host');
    const rawHost = forwardedHost || headersList.get('host') || '';
    const hostClean = rawHost.toLowerCase().trim();
    const hostname = hostClean.split(':')[0].trim();
    const proto = headersList.get('x-forwarded-proto') || headersList.get('x-subdomain-proto') || 'https';
    const subdomainHeader = headersList.get('x-subdomain');

    const isSubdomain =
      Boolean(subdomainHeader) ||
      (Boolean(hostname) &&
        !hostname.startsWith('www.') &&
        hostname !== 'roservicecentre24x7.in' &&
        (hostname.startsWith(`${brand.id}.`) ||
          hostname.startsWith(`${brandKey}.`) ||
          hostname.startsWith(`${brand.name.toLowerCase().replace(/\s+/g, '')}.`)));

    if (isSubdomain) {
      canonicalUrl = `${proto}://${hostClean}/blog/${post.slug}`;
    }
  } catch {
    // fallback during static prerendering
  }

  const brandPostImage = getBrandBlogImage(brand.id, post.slug, post.image);

  return {
    title: `${post.title} | ${brand.name} RO Service Bangalore`,
    description: post.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      type: 'article',
      images: [
        {
          url: brandPostImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BrandBlogPostPage({ params }: BrandBlogPostProps) {
  const { brand: brandKey, slug } = await params;
  const brand = getBrand(brandKey);
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post || !brand) {
    notFound();
  }

  const primaryColor = brand.brandThemeColors?.primary || '#0b5cbe';
  const postImage = getBrandBlogImage(brand.id, post.slug, post.image);

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: postImage,
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'RO Service Centre 24x7',
      logo: {
        '@type': 'ImageObject',
        url: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1786544412/IMG_20260812_194243_himoc3.jpg',
      },
    },
  };

  return (
    <div className="min-h-screen bg-[#f8fbfe] text-slate-900 flex flex-col font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <Header />

      <main className="flex-1 pb-16">
        {/* Breadcrumb Header */}
        <section className="bg-white border-b border-slate-200/80 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <nav className="flex items-center gap-1.5 text-xs text-slate-500 font-medium overflow-x-auto whitespace-nowrap py-1">
              <Link href="/" className="hover:text-[#0066cc] transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link
                href={`/${brand.slug.replace(/^\//, '')}`}
                className="hover:text-[#0066cc] transition-colors"
              >
                {brand.name} Service
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <Link
                href={`/${brandKey}/blog`}
                className="hover:text-[#0066cc] transition-colors"
              >
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="text-slate-800 font-semibold truncate max-w-[200px] sm:max-w-xs">
                {post.title}
              </span>
            </nav>
          </div>
        </section>

        {/* Article Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12">
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span
                style={{ color: primaryColor, backgroundColor: `${primaryColor}15` }}
                className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              >
                {post.category}
              </span>
              <span className="text-xs text-slate-400">•</span>
              <span className="text-xs font-semibold text-slate-500">
                {brand.name} Specialist Guide
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#002b66] tracking-tight leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-slate-400" />
                <span className="font-medium text-slate-700">{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>Published {post.publishedAt}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </header>

          {/* Featured Image - strictly brand page image */}
          <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden mb-8 shadow-xs border border-slate-200/80 bg-slate-100">
            <Image
              src={postImage}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Lead Paragraph */}
          <div className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal p-6 bg-blue-50/60 rounded-2xl border border-blue-100/80 mb-8">
            {post.content.lead}
          </div>

          {/* Content Sections */}
          <div className="prose prose-slate max-w-none space-y-8 text-slate-800 text-sm sm:text-base leading-relaxed">
            {post.content.sections.map((section, idx) => (
              <section key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#002b66] tracking-tight pt-2 border-b border-slate-100 pb-2">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="leading-relaxed text-slate-700">
                    {p}
                  </p>
                ))}
                {section.bulletPoints && (
                  <ul className="space-y-2.5 my-4 bg-white p-5 rounded-xl border border-slate-200/80 list-none pl-0">
                    {section.bulletPoints.map((bp, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{bp}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {/* Brand Doorstep Help Card */}
          <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-slate-900 to-blue-950 text-white rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider block">
                {brand.name} Doorstep Service Bangalore
              </span>
              <h3 className="text-xl sm:text-2xl font-black">
                Need urgent repair for your {brand.name}?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/80 max-w-md">
                Certified technicians arrive at your home within 60–90 minutes with genuine spare parts and a 30-day labor warranty.
              </p>
            </div>
            <a
              href={`tel:${BUSINESS_DETAILS.phone}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-colors shrink-0"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BUSINESS_DETAILS.phone}</span>
            </a>
          </div>

          {/* Related Posts */}
          <div className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">
              More {brand.name} Maintenance Guides &amp; Tips
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {relatedPosts.map((rPost, rIdx) => {
                const rPostImage = getBrandBlogImage(brand.id, rPost.slug || rIdx, rPost.image);
                return (
                  <Link
                    key={rPost.slug}
                    href={`/${brandKey}/blog/${rPost.slug}`}
                    className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs hover:shadow-xs transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                        {rPost.category}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mt-1 mb-2">
                        {rPost.title}
                      </h4>
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 group-hover:text-blue-600 inline-flex items-center gap-1 mt-2">
                      Read Guide →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
