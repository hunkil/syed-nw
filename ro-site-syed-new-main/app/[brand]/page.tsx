import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { BRAND_PAGES_DATA, BUSINESS_DETAILS } from '@/src/data/content';
import { BrandPageLayout } from '@/src/components/BrandPageLayout';

interface PageProps {
  params: Promise<{ brand: string }>;
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
  const params: { brand: string }[] = [];
  Object.keys(BRAND_PAGES_DATA).forEach((brandKey) => {
    params.push({ brand: brandKey });
    const b = BRAND_PAGES_DATA[brandKey];
    if (b?.id && b.id !== brandKey) {
      params.push({ brand: b.id });
    }
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { brand: brandKey } = await params;
  const brand = getBrand(brandKey);
  if (!brand) return {};

  let canonicalUrl = `https://www.roservicecentre24x7.in/${brandKey}`;

  try {
    const headersList = await headers();
    const forwardedHost = headersList.get('x-forwarded-host');
    const rawHost = forwardedHost || headersList.get('host') || '';
    const hostClean = rawHost.toLowerCase().trim();
    const hostname = hostClean.split(':')[0].trim();
    const proto = headersList.get('x-forwarded-proto') || headersList.get('x-subdomain-proto') || 'https';
    const subdomainHeader = headersList.get('x-subdomain');

    // Detect if page is being loaded via a brand subdomain (e.g. kent.mydomain.in)
    const isSubdomain =
      Boolean(subdomainHeader) ||
      (Boolean(hostname) &&
        !hostname.startsWith('www.') &&
        hostname !== 'roservicecentre24x7.in' &&
        (hostname.startsWith(`${brand.id}.`) ||
          hostname.startsWith(`${brandKey}.`) ||
          hostname.startsWith(`${brand.name.toLowerCase().replace(/\s+/g, '')}.`)));

    if (isSubdomain) {
      // Subdomain canonical matches root of the subdomain to prevent Google Ads canonical mismatch
      canonicalUrl = `${proto}://${hostClean}`;
    }
  } catch {
    // Fallback to static URL during prerendering
  }

  return {
    title: brand.metaTitle,
    description: brand.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: brand.metaTitle,
      description: brand.metaDescription,
      url: canonicalUrl,
      type: 'website',
      images: brand.heroImage ? [{ url: brand.heroImage }] : [],
    },
  };
}

export default async function BrandPage({ params }: PageProps) {
  const { brand: brandKey } = await params;
  const brand = getBrand(brandKey);

  if (!brand) {
    notFound();
  }

  let pageUrl = `https://www.roservicecentre24x7.in/${brandKey}`;
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
      pageUrl = `${proto}://${hostClean}`;
    }
  } catch {
    // Fallback to default during prerendering
  }

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      url: pageUrl,
      name: `${brand.name} Water Purifier Repair & Service Bangalore`,
      serviceType: 'Water Purifier Repair, Maintenance & Filter Replacement',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.roservicecentre24x7.in/#localbusiness',
        name: BUSINESS_DETAILS.name,
        telephone: `+91${BUSINESS_DETAILS.phone}`,
        url: 'https://www.roservicecentre24x7.in',
      },
      areaServed: {
        '@type': 'City',
        name: 'Bangalore',
      },
      description: brand.metaDescription,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'INR',
        description: 'Doorstep inspection and diagnosis, 100% adjusted against final repair bill upon approval.',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '10480',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: brand.brandFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BrandPageLayout brand={brand} />
    </>
  );
}
