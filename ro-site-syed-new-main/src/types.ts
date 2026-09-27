export type PageRoute = 
  | '/'
  | '/kent-service'
  | '/aquaguard-service'
  | '/pureit-service'
  | '/aosmith-service'
  | '/livpure-service'
  | '/privacy-policy'
  | '/terms-of-service'
  | '/refund-policy'
  | '/disclaimer'
  | '/cookie-policy'
  | '/404';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  popularTag?: string;
  startingPrice?: string;
}

export interface BrandInfo {
  id: string;
  name: string;
  slug: PageRoute;
  logoText: string;
  logoUrl?: string;
  subTagline?: string;
  tagline: string;
  accentColor: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  heroMotto?: string;
  calloutScript?: string;
  techBadge?: string;
  tollFree?: string;
  affiliationBadge?: string;
  brandThemeColors?: {
    primary: string;
    darkBg: string;
    accent: string;
    lightBg: string;
    border: string;
  };
  commonProblems: string[];
  brandFaqs: { question: string; answer: string }[];
  popularSearches?: string[];
  showcaseImage?: string;
  heroImage?: string;
  heroBgImage?: string;
  partsBannerImage?: string;
  bottomBannerImage?: string;
  serviceImages?: {
    repair?: string;
    filter?: string;
    amc?: string;
    quality?: string;
  };
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  locality: string;
  rating: number;
  brandServiced: string;
  comment: string;
  date: string;
}

export interface LeadFormData {
  fullName: string;
  mobileNumber: string;
  pinCode: string;
  selectedBrand: string;
  serviceType?: string;
  message?: string;
}
