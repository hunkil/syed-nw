import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { headers } from 'next/headers';
import {
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Wrench,
  BookOpen,
  Phone,
} from 'lucide-react';
import { BRAND_PAGES_DATA, BUSINESS_DETAILS } from '@/src/data/content';
import { BLOG_POSTS, BlogPost, getBrandBlogImage } from '@/src/data/blogPosts';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';

interface BrandBlogProps {
  params: Promise<{
    brand: string;
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
  return brandKeys.map((brand) => ({
    brand,
  }));
}

export async function generateMetadata({ params }: BrandBlogProps): Promise<Metadata> {
  const { brand: brandKey } = await params;
  const brand = getBrand(brandKey);

  if (!brand) {
    return {
      title: 'Brand Blog Not Found | RO Service Centre 24x7',
    };
  }

  // Handle subdomain-specific canonical URLs for Google Ads and SEO
  let canonicalUrl = `https://www.roservicecentre24x7.in/${brandKey}/blog`;

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
      canonicalUrl = `${proto}://${hostClean}/blog`;
    }
  } catch {
    // fallback during prerender
  }

  const brandOgImage = getBrandBlogImage(brand.id, 0);

  return {
    title: `${brand.name} RO Purifier Service Guides & Maintenance Blog | Bangalore`,
    description: `Complete maintenance guides, troubleshooting tips, cartridge replacement intervals, and TDS guides for ${brand.name} water purifiers in Bangalore.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${brand.name} RO Purifier Service Guides & Maintenance Blog`,
      description: `Expert repair advice, filter maintenance schedules, and troubleshooting for ${brand.name} purifiers in Bangalore.`,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: brandOgImage,
          width: 1200,
          height: 630,
          alt: `${brand.name} RO Service Guides`,
        },
      ],
    },
  };
}

export default async function BrandBlogPage({ params }: BrandBlogProps) {
  const { brand: brandKey } = await params;
  const brand = getBrand(brandKey);

  if (!brand) {
    notFound();
  }

  // Filter posts related to this brand
  const cleanKey = brand.id.toLowerCase().replace(/-service$/, '');
  const brandNameLower = brand.name.toLowerCase();

  const brandPosts = BLOG_POSTS.filter((post) => {
    const postBrandSlug = post.relatedBrandSlug?.toLowerCase().replace(/-service$/, '');
    const postBrandName = post.relatedBrandName?.toLowerCase() || '';
    return (
      postBrandSlug === cleanKey ||
      postBrandName.includes(brandNameLower) ||
      post.title.toLowerCase().includes(brandNameLower)
    );
  });

  // If brand has fewer than 3 posts, backfill with general high-value posts
  const postsToShow: BlogPost[] =
    brandPosts.length >= 2
      ? brandPosts
      : [
          ...brandPosts,
          ...BLOG_POSTS.filter((p) => !brandPosts.some((bp) => bp.slug === p.slug)).slice(
            0,
            3 - brandPosts.length
          ),
        ];

  const brandPrimaryColor = brand.brandThemeColors?.primary || '#0b5cbe';
  const brandDarkBg = brand.brandThemeColors?.darkBg || '#083c7d';

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `https://www.roservicecentre24x7.in/${brandKey}/blog#blog`,
    name: `${brand.name} RO Purifier Service Blog - RO Service Centre 24x7`,
    description: `Expert repair advice, filter maintenance schedules, and troubleshooting for ${brand.name} purifiers in Bangalore.`,
    url: `https://www.roservicecentre24x7.in/${brandKey}/blog`,
    publisher: {
      '@type': 'LocalBusiness',
      name: 'RO Service Centre 24x7',
      telephone: '+918050291180',
      url: 'https://www.roservicecentre24x7.in',
    },
    blogPost: postsToShow.map((post, idx) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      url: `https://www.roservicecentre24x7.in/${brandKey}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.modifiedAt,
      image: getBrandBlogImage(brand.id, post.slug || idx, post.image),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      <Header />

      <main className="flex-1">
        {/* Breadcrumb Header */}
        <section className="bg-white border-b border-slate-200/80 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-slate-800 font-semibold">{brand.name} Blog &amp; Guides</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section
          style={{
            background: `linear-gradient(135deg, ${brandDarkBg} 0%, ${brandPrimaryColor} 100%)`,
          }}
          className="py-12 sm:py-16 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-xs">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{brand.name} Knowledge Base &amp; Troubleshooter</span>
              </div>
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
                {brand.name} RO Purifier Guides &amp; Care
              </h1>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-6">
                Certified technician guides, cartridge replacement schedules, and immediate troubleshooting solutions specifically tailored for {brand.name} water purifiers in Bangalore.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href={`/${brand.slug.replace(/^\//, '')}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm hover:bg-slate-100 transition-colors shadow-xs"
                >
                  <Wrench className="w-4 h-4 text-blue-600" />
                  <span>Book {brand.name} Service</span>
                </Link>

                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_DETAILS.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Blog Posts Grid */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                  Articles &amp; Troubleshooting Guides for {brand.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Practical maintenance insights from Bangalore technicians
                </p>
              </div>

              <Link
                href="/blog"
                className="text-xs sm:text-sm font-bold text-blue-600 hover:underline flex items-center gap-1 shrink-0"
              >
                <span>All Brands Blog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Grid of Posts - strictly NO pill on cards, and using brand-matched images only */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {postsToShow.map((post, idx) => {
                const brandImage = getBrandBlogImage(brand.id, post.slug || idx, post.image);
                const postUrl = `/${brandKey}/blog/${post.slug}`;

                return (
                  <article
                    key={post.slug}
                    className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group hover:border-blue-300"
                  >
                    {/* Thumbnail Image - NO pill, using strictly brand-matched images */}
                    <Link
                      href={postUrl}
                      className="relative h-52 w-full bg-slate-100 block overflow-hidden"
                    >
                      <Image
                        src={brandImage}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </Link>

                    {/* Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Meta */}
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

                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                          <Link href={postUrl}>{post.title}</Link>
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3 mb-6">
                          {post.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                        <Link
                          href={postUrl}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                        >
                          <span>Read Full Guide</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <span className="text-[11px] font-semibold text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">
                          {brand.name}
                        </span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Doorstep Emergency Assistance Box */}
            <div className="mt-16 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  Bangalore Certified Technicians
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                  Facing an issue with your {brand.name} RO?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                  Our certified independent technicians reach anywhere in Bangalore within 60 to 90 minutes. Transparent pricing and genuine spare parts.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 shrink-0">
                <a
                  href={`tel:${BUSINESS_DETAILS.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {BUSINESS_DETAILS.phone}</span>
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
