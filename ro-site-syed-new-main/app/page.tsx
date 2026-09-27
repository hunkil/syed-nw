import type { Metadata } from 'next';
import { BrandPageLayout } from '@/src/components/BrandPageLayout';
import { BrandInfo } from '@/src/types';
import { BUSINESS_DETAILS, HOMEPAGE_FAQS } from '@/src/data/content';

export const metadata: Metadata = {
  title: 'RO Service 24x7 | Best RO Water Purifier Repair & Service Bangalore | Call 080502 91180',
  description:
    'Fastest 60–90 min doorstep RO water purifier repair, filter replacement, AMC & installation service in Bangalore. Expert technicians for Kent, Aquaguard, Pureit, AO Smith & Livpure.',
  alternates: {
    canonical: 'https://www.roservicecentre24x7.in',
  },
  openGraph: {
    title: 'RO Service 24x7 | Best RO Water Purifier Repair & Maintenance Bangalore',
    description: 'Fastest 60–90 min doorstep RO water purifier repair, filter replacement & AMC in Bangalore.',
    url: 'https://www.roservicecentre24x7.in',
    type: 'website',
  },
};

export default function HomePage() {
  const genericBrand: BrandInfo = {
    id: 'ro-service-24x7',
    name: 'RO Service Center Online 24x7',
    slug: '/',
    logoText: 'RO Service Center Online 24x7',
    logoUrl: '',
    subTagline: 'Doorstep Water Purifier Service',
    tagline: 'Expert Water Purifier Repair & Maintenance',
    description: 'Fastest 60–90 min doorstep RO water purifier repair, filter replacement, AMC & installation service in Bangalore. Expert technicians for all major brands.',
    accentColor: 'blue',
    metaTitle: metadata.title as string,
    metaDescription: metadata.description as string,
    heroMotto: 'Pure Water. Healthy Families. Brighter Tomorrows.',
    commonProblems: [
      'Water purifier not purifying water properly',
      'RO machine leakage, power failure, or tripping issues',
      'Unusual noise or vibrations',
      'Water tasting bad or having an odor',
    ],
    brandFaqs: HOMEPAGE_FAQS,
    brandThemeColors: {
      primary: '#0b5cbe',
      darkBg: '#094796',
      accent: '#1874e0',
      lightBg: '#f0f5fb',
      border: '#e1e9f2',
    },
    heroBgImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789813499/IMG-20260918-WA0073_qesfc9.jpg',
    heroImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789813499/IMG-20260918-WA0073_qesfc9.jpg',
    partsBannerImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789744713/file_00000000be388230a7ea3fe9b5fef059_oqqijq.png',
    bottomBannerImage: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789744714/file_00000000c0e082118f500d75d9418d25_a6woez.png',
    serviceImages: {
      repair: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789744767/file_0000000072548211b75cdf8e48b91b7d_mmuame.png',
      filter: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789744766/file_00000000696c8211b0e9d31b75c0009e_rpigfw.png',
      amc: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789744767/file_000000008d20821198976eef39c910a9_dwhpb5.png',
      quality: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789669453/IMG-20260917-WA0018_m8dnkp.jpg',
    },
  };

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      '@id': 'https://www.roservicecentre24x7.in/#localbusiness',
      name: BUSINESS_DETAILS.name,
      telephone: '+918050291180',
      email: BUSINESS_DETAILS.email,
      url: 'https://www.roservicecentre24x7.in',
      logo: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789813995/IMG-20260918-WA0070_skegej.jpg',
      image: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789813499/IMG-20260918-WA0073_qesfc9.jpg',
      priceRange: '₹₹',
      description: 'Certified doorstep RO water purifier repair, filter replacement, AMC and installation service in Bangalore within 60–90 minutes.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Doorstep Service Across All Bangalore Localities',
        addressLocality: 'Bangalore',
        addressRegion: 'Karnataka',
        postalCode: '560001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '12.9716',
        longitude: '77.5946',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '08:00',
          closes: '21:00',
        },
      ],
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
      '@type': 'Service',
      '@id': 'https://www.roservicecentre24x7.in/#service',
      url: 'https://www.roservicecentre24x7.in',
      name: 'Doorstep RO Water Purifier Repair & Service Bangalore',
      serviceType: 'Water Purifier Repair, Maintenance & Filter Replacement',
      provider: {
        '@type': 'LocalBusiness',
        '@id': 'https://www.roservicecentre24x7.in/#localbusiness',
      },
      areaServed: {
        '@type': 'City',
        name: 'Bangalore',
      },
      description: metadata.description,
      offers: {
        '@type': 'Offer',
        price: '299',
        priceCurrency: 'INR',
        description: 'Doorstep inspection fee, 100% adjusted against final repair bill.',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: HOMEPAGE_FAQS.map((faq) => ({
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
      <BrandPageLayout brand={genericBrand} />
    </>
  );
}

