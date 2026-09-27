import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, getBrandBlogImage } from '@/src/data/blogPosts';

interface HomeBlogSectionProps {
  brandSlug?: string;
  brandName?: string;
  brandThemeColor?: string;
}

export const HomeBlogSection: React.FC<HomeBlogSectionProps> = ({
  brandSlug,
  brandName,
  brandThemeColor = '#0066cc',
}) => {
  const isBrand = Boolean(brandSlug && brandName);

  // If brand is provided, filter posts relevant to that brand
  const filteredPosts = isBrand
    ? BLOG_POSTS.filter((post) => {
        const cleanSlug = brandSlug?.toLowerCase().replace(/-service$/, '');
        const targetSlug = post.relatedBrandSlug?.toLowerCase().replace(/-service$/, '');
        const targetName = post.relatedBrandName?.toLowerCase() || '';
        const nameClean = brandName?.toLowerCase() || '';
        return (
          targetSlug === cleanSlug ||
          targetName.includes(nameClean) ||
          post.title.toLowerCase().includes(nameClean)
        );
      })
    : BLOG_POSTS.slice(0, 6);

  // Fallback if brand has fewer than 2 posts: show brand posts first, followed by other guides
  const displayPosts = isBrand && filteredPosts.length < 2
    ? [...filteredPosts, ...BLOG_POSTS.filter(p => !filteredPosts.some(fp => fp.slug === p.slug)).slice(0, 3 - filteredPosts.length)]
    : (isBrand ? filteredPosts : BLOG_POSTS);

  const sectionTitle = isBrand
    ? `${brandName} RO Purifier Care & Maintenance Guides`
    : 'Water Purifier Maintenance & Troubleshooting Guides';

  const sectionSubtitle = isBrand
    ? `Actionable maintenance schedules, fault checklists, and filter replacement guides specifically tailored for ${brandName} purifiers in Bangalore.`
    : 'Actionable maintenance schedules, DIY fault checklists, and water quality insights from Bangalore senior water purification engineers.';

  const viewAllUrl = isBrand ? `/${brandSlug?.replace(/^\//, '')}/blog` : '/blog';
  const viewAllLabel = isBrand ? `View All ${brandName} Guides & Articles` : 'View All Guides & Articles';

  return (
    <section id="homepage-blog-section" className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span
              style={{ color: brandThemeColor, backgroundColor: `${brandThemeColor}12` }}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
            >
              <BookOpen className="w-3.5 h-3.5" />
              {isBrand ? `${brandName} Expert Knowledge Base` : 'Expert RO Knowledge Base'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#002b66] tracking-tight leading-tight">
              {sectionTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
              {sectionSubtitle}
            </p>
          </div>

          <Link
            href={viewAllUrl}
            style={{ color: brandThemeColor }}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold hover:underline group cursor-pointer self-start sm:self-auto shrink-0"
          >
            <span>{viewAllLabel}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Blog Cards Grid (Strictly NO pill on cards, and brand-matched images only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayPosts.map((post, idx) => {
            const postImage = isBrand
              ? getBrandBlogImage(brandSlug, post.slug || idx, post.image)
              : post.image;
            const postHref = isBrand
              ? `/${brandSlug?.replace(/^\//, '')}/blog/${post.slug}`
              : `/blog/${post.slug}`;

            return (
              <article
                key={post.slug}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden group hover:border-blue-300/80"
              >
                {/* Thumbnail Image - Strictly only brand images used when on brand page */}
                <Link href={postHref} className="relative h-48 sm:h-52 w-full bg-slate-100 block overflow-hidden">
                  <Image
                    src={postImage}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </Link>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Meta Bar */}
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-2.5">
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

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0066cc] transition-colors leading-snug mb-2.5">
                      <Link href={postHref}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed line-clamp-2 sm:line-clamp-3 mb-5">
                      {post.description}
                    </p>
                  </div>

                  {/* Footer Link */}
                  <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between mt-auto">
                    <Link
                      href={postHref}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066cc] group-hover:text-[#0052a3] transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    {post.relatedBrandSlug && (
                      <Link
                        href={`/${post.relatedBrandSlug}`}
                        className="text-[11px] font-semibold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200/80 px-2 py-0.5 rounded transition-colors"
                      >
                        {post.relatedBrandName} →
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
