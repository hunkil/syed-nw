'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  Phone,
  MapPin,
  Check,
  ShieldCheck,
  Headset,
  Star,
  Clock,
  Wrench,
  Droplets,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Search,
  User,
  Play,
  ArrowRight,
  X,
  Sparkles,
  ThumbsUp,
  Send,
  Heart,
  Activity,
  Layers,
  Filter,
  Shield,
  Zap,
  Menu,
  CheckCircle,
  Truck,
  IndianRupee,
  Settings,
  HelpCircle,
  Share2,
  Leaf,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Lock,
  Loader2,
} from 'lucide-react';
import { BrandInfo } from '@/src/types';
import { BUSINESS_DETAILS, BANGALORE_LOCALITIES } from '@/src/data/content';
import { optimizeCloudinary } from '@/src/utils/imageOptimizer';
import { PricingTransparency } from './PricingTransparency';
import { BrandComparison } from './BrandComparison';
import { HomeBlogSection } from './HomeBlogSection';

interface BrandPageLayoutProps {
  brand: BrandInfo;
}

const SEO_BRAND_KEYWORDS = [
  {
    id: 'kent',
    brandName: 'KENT',
    title: 'KENT Service Near Me',
    lookingFor: [
      'KENT Water purifier service',
      'KENT RO Service Near Me',
      'KENT Water Purifier Service Near Me',
      'KENT RO Repair Near Me',
      'KENT Water Purifier Repair Near Me',
      'KENT Service Center Near Me',
      'KENT Authorized Service Center Near Me',
      'KENT Filter Replacement Near Me',
      'KENT RO Filter Change Near Me',
      'KENT Technician Near Me',
      'KENT RO Technician Near Me',
      'KENT Membrane Replacement Near Me',
      'KENT Doorstep Service Near Me',
      'KENT Water Filter Service Near Me',
      'KENT Genuine Filter Replacement Near Me',
      'KENT Emergency Repair Near Me',
      'KENT Home Service Near Me',
      'KENT Water Purifier Repair Service Near Me',
      'KENT Drinking Water Purifier Service Near Me',
      'KENT Purifier Service Near Me',
      'KENT Ro service booking',
    ],
  },
  {
    id: 'pureit',
    brandName: 'Pureit',
    title: 'Pureit Service Near Me',
    lookingFor: [
      'Pureit RO Service Near Me',
      'Pureit Water Purifier Service Near Me',
      'Pureit RO Repair Near Me',
      'Pureit Water Purifier Repair Near Me',
      'Pureit Service Center Near Me',
      'Pureit Authorized Service Center Near Me',
      'Pureit Filter Replacement Near Me',
      'Pureit RO Filter Change Near Me',
      'Pureit Technician Near Me',
      'Pureit RO Technician Near Me',
      'Pureit Installation Service Near Me',
      'Pureit Membrane Replacement Near Me',
      'Pureit RO Maintenance Near Me',
      'Pureit Doorstep Service Near Me',
      'Pureit Water Filter Service Near Me',
      'Pureit Genuine Filter Replacement Near Me',
      'Pureit Emergency Repair Near Me',
      'Pureit Home Service Near Me',
      'Pureit Water Purifier Repair Service Near Me',
      'Pureit Drinking Water Purifier Service Near Me',
      'Pureit Purifier Service Near Me',
      'Pureit Service Booking Near Me',
    ],
  },
  {
    id: 'aquaguard',
    brandName: 'Aquaguard',
    title: 'Aquaguard Service Near Me',
    lookingFor: [
      'Aquaguard RO Service Near Me',
      'Aquaguard Water Purifier Service Near Me',
      'Aquaguard RO Repair Near Me',
      'Aquaguard Water Purifier Repair Near Me',
      'Aquaguard Service Center Near Me',
      'Aquaguard Authorized Service Center Near Me',
      'Aquaguard Filter Replacement Near Me',
      'Aquaguard RO Filter Change Near Me',
      'Aquaguard Technician Near Me',
      'Aquaguard RO Technician Near Me',
      'Aquaguard Membrane Replacement Near Me',
      'Aquaguard Doorstep Service Near Me',
      'Aquaguard Water Filter Service Near Me',
      'Aquaguard Genuine Filter Replacement Near Me',
      'Aquaguard Water Purifier Repair Service Near Me',
      'Aquaguard Drinking Water Purifier Service Near Me',
      'Aquaguard Purifier Service Near Me',
      'Aquaguard service Booking',
    ],
  },
  {
    id: 'ao-smith',
    brandName: 'AO Smith',
    title: 'AO Smith Service Near Me',
    lookingFor: [
      'AO Smith RO Service',
      'AO Smith Water Purifier Service',
      'AO Smith RO Repair',
      'AO Smith Repair Near Me',
      'AO Smith Service Center',
      'AO Smith Service Center Near Me',
      'AO Smith Filter Replacement',
      'AO Smith RO Filter Change',
      'AO Smith Water Purifier Repair',
      'AO Smith Membrane Replacement',
      'AO Smith RO Membrane Change',
      'AO Smith Doorstep Service',
      'AO Smith Genuine Filter Replacement',
      'AO Smith RO Service Near Me',
      'AO Smith Water Filter Service',
      'AO Smith Repair Service',
      'AO Smith Drinking Water Purifier Service',
      'AO Smith Purifier Service',
      'AO Smith Water Purifier Repair Near Me',
      'Ao smith ro service booking',
    ],
  },
  {
    id: 'livpure',
    brandName: 'Livpure',
    title: 'Livpure ro service near me',
    lookingFor: [
      'Livpure RO Service',
      'Livpure Water Purifier Service',
      'Livpure RO Repair',
      'Livpure Repair Near Me',
      'Livpure Service Center',
      'Livpure Service Center Near Me',
      'Livpure Filter Replacement',
      'Livpure RO Filter Change',
      'Livpure Water Purifier Repair',
      'Livpure Membrane Replacement',
      'Livpure RO Membrane Change',
      'Livpure Doorstep Service',
      'Livpure Genuine Filter Replacement',
      'Livpure RO Service Near Me',
      'Livpure Water Filter Service',
      'Livpure Repair Service',
      'Livpure Drinking Water Purifier Service',
      'Livpure Purifier Service',
      'Livpure Water Purifier Repair Near Me',
      'Livpure service booking',
      'Livpure RO Service Center',
    ],
  },
  {
    id: 'ro-service-24x7',
    brandName: 'Havells / Multi-Brand',
    title: 'Havells ro service near me',
    lookingFor: [
      'Water Purifier Service',
      'RO Service',
      'RO Repair Service',
      'Water Purifier Repair',
      'Filter Replacement Service',
      'RO Service Center',
      'KENT Water Purifier Service',
      'Aquaguard Water Purifier Service',
      'Pureit Water Purifier Service',
      'AO Smith Water Purifier Service',
      'Livpure Water Purifier Service',
      'Havells Water Purifier Service',
      'V-Guard Water Purifier Service',
      'ZeroB Water Purifier Service',
      'KENT RO Service',
      'Aquaguard RO Service',
      'Pureit RO Service',
      'AO Smith RO Service',
      'Livpure RO Service',
      'RO Water Purifier Service',
    ],
  },
];

const BRAND_RELEVANT_FOOTER_KEYWORDS: Record<string, string> = {
  kent: 'KENT Water Purifier Service | KENT RO Service | KENT Water Purifier Repair | KENT Service Center | KENT Filter Replacement | KENT AMC Service',
  aquaguard: 'Aquaguard Water Purifier Service | Aquaguard RO Service | Aquaguard Water Purifier Repair | Aquaguard Service Center | Aquaguard Filter Replacement | Eureka Aquaguard Service',
  'ao-smith': 'AO Smith Water Purifier Service | AO Smith RO Service | AO Smith Water Purifier Repair | AO Smith Service Center | AO Smith Filter Replacement | AO Smith RO Repair',
  pureit: 'Pureit Water Purifier Service | Pureit RO Service | Pureit Water Purifier Repair | Pureit Service Center | Pureit Filter Replacement | Pureit RO Repair',
  livpure: 'Livpure Water Purifier Service | Livpure RO Service | Livpure Water Purifier Repair | Livpure Service Center | Livpure Filter Replacement | Livpure RO Repair',
  havells: 'Havells Water Purifier Service | Havells RO Service | Havells Water Purifier Repair | Havells Service Center | Havells Filter Replacement | Havells RO Repair',
};

export function BrandPageLayout({ brand }: BrandPageLayoutProps) {
  // Navigation & Mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Video Modal
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Search Bar state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Active Brand SEO Keywords (matches current brand or multi-brand)
  const activeKw =
    SEO_BRAND_KEYWORDS.find((k) => k.id === brand.id) ||
    SEO_BRAND_KEYWORDS.find((k) => k.brandName.toLowerCase() === brand.name.toLowerCase()) ||
    SEO_BRAND_KEYWORDS.find((k) => k.id === 'ro-service-24x7') ||
    SEO_BRAND_KEYWORDS[0];

  const brandDisplayName =
    brand.id === 'ro-service-24x7' ||
    brand.name.toLowerCase().includes('multi-brand') ||
    brand.name.toLowerCase().includes('ro service center')
      ? 'RO'
      : brand.name === 'KENT'
      ? 'Kent'
      : brand.name;

  const lookingForHeading = `${brandDisplayName} Water Purifier Service Bangalore`;

  // Check if current page is the homepage
  const isHomepage =
    brand.id === 'ro-service-24x7' ||
    brand.slug === '/' ||
    brand.name.toLowerCase().includes('ro service center');

  const HOMEPAGE_LOOKING_FOR_KEYWORDS = [
    'Water Purifier Service',
    'RO Service',
    'RO Repair Service',
    'Water Purifier Repair',
    'Filter Replacement Service',
    'RO Service Center',
    'KENT Water Purifier Service',
    'Aquaguard Water Purifier Service',
    'Pureit Water Purifier Service',
    'AO Smith Water Purifier Service',
    'Livpure Water Purifier Service',
    'Havells Water Purifier Service',
    'V-Guard Water Purifier Service',
    'ZeroB Water Purifier Service',
    'KENT RO Service',
    'Aquaguard RO Service',
    'Pureit RO Service',
    'AO Smith RO Service',
    'Livpure RO Service',
    'RO Water Purifier Service',
  ];

  const HOMEPAGE_BOTTOM_KEYWORDS =
    'Water Purifier Service | RO Service | RO Repair Service | Water Purifier Repair | Filter Replacement Service | KENT Water Purifier Service | Aquaguard Water Purifier Service | Pureit Water Purifier Service | AO Smith Water Purifier Service | Livpure Water Purifier Service | Havells Water Purifier Service | V-Guard Water Purifier Service | ZeroB Water Purifier Service';

  const lookingForKeywords = isHomepage
    ? HOMEPAGE_LOOKING_FOR_KEYWORDS
    : [
        `${brandDisplayName} water purifier service Bangalore`,
        `${brandDisplayName} service center near me`,
        `${brandDisplayName} water purifier repair in Bangalore`,
        `${brandDisplayName} filter replacement Bangalore`,
        `${brandDisplayName} water purifier maintenance Bangalore`,
        `${brandDisplayName} AMC service Bangalore`,
        `${brandDisplayName} technician near me`,
        `${brandDisplayName} water purifier service Bangalore`,
        `${brandDisplayName} service center near me`,
        `${brandDisplayName} water purifier repair in Bangalore`,
      ];

  // Relevant keywords for brand pages only (Strictly excluded on homepage)
  const getRelevantBrandKeywords = (): string | null => {
    if (isHomepage) return null;

    const key = brand.id.toLowerCase().replace(/-service$/, '');
    if (BRAND_RELEVANT_FOOTER_KEYWORDS[key]) {
      return BRAND_RELEVANT_FOOTER_KEYWORDS[key];
    }
    const nameLower = brand.name.toLowerCase();
    if (nameLower.includes('kent')) return BRAND_RELEVANT_FOOTER_KEYWORDS.kent;
    if (nameLower.includes('aquaguard')) return BRAND_RELEVANT_FOOTER_KEYWORDS.aquaguard;
    if (nameLower.includes('smith') || nameLower.includes('ao-smith')) return BRAND_RELEVANT_FOOTER_KEYWORDS['ao-smith'];
    if (nameLower.includes('pureit')) return BRAND_RELEVANT_FOOTER_KEYWORDS.pureit;
    if (nameLower.includes('livpure')) return BRAND_RELEVANT_FOOTER_KEYWORDS.livpure;
    if (nameLower.includes('havells')) return BRAND_RELEVANT_FOOTER_KEYWORDS.havells;

    return `${brand.name} Water Purifier Service | ${brand.name} RO Service | ${brand.name} Water Purifier Repair | ${brand.name} Service Center | ${brand.name} Filter Replacement | ${brand.name} AMC Service`;
  };

  const relevantBrandKeywordString = getRelevantBrandKeywords();

  // Booking Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [pincode, setPincode] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pincode Availability Checker State
  const [checkPincode, setCheckPincode] = useState('');
  const [pincodeResult, setPincodeResult] = useState<{
    checked: boolean;
    available: boolean;
    message: string;
  }>({ checked: false, available: false, message: '' });

  // FAQ Accordion Active Items
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({ 0: true, 1: true });
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  // Mobile Footer Accordions
  const [mobileFooterOpen, setMobileFooterOpen] = useState<{ [key: string]: boolean }>({});

  // Newsletter email state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  // Form scroll ref
  const bookingFormRef = useRef<HTMLDivElement>(null);

  const scrollToBookingForm = () => {
    if (bookingFormRef.current) {
      bookingFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Brand Theme Variables (preserving existing brand colors)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderHidden(true);
      } else {
        setIsHeaderHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const primaryColor = brand.brandThemeColors?.primary || brand.accentColor || '#007A53'; // AO Smith emerald or respective brand color
  const darkBgColor = brand.brandThemeColors?.darkBg || '#064e3b';
  const accentHighlight = brand.brandThemeColors?.accent || '#10b981';
  const lightBgColor = brand.brandThemeColors?.lightBg || '#f0fdf4';
  const borderColor = brand.brandThemeColors?.border || '#a7f3d0';

  const displayPhone = BUSINESS_DETAILS.phone;

  // Hero Image resolution: prioritize brand.heroBgImage, then fallback to brand-specific requested Cloudinary URLs or showcaseImage
  const heroImageRaw = brand.heroBgImage || (
    brand.id === 'ro-service-24x7'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789813499/IMG-20260918-WA0073_qesfc9.jpg'
      : brand.id === 'aquaguard'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789666091/file_00000000b97c8211b0ff0be33d753076_wncmpj.png'
      : brand.id === 'livpure'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789666091/file_0000000053b082099c9bb495de926e14_zlptot.png'
      : brand.id === 'pureit'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789666101/file_00000000c8308206b3080195508f65f9_kdu2po.png'
      : brand.id === 'ao-smith'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789748961/IMG-20260918-WA0071_woclww.jpg'
      : 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789666091/file_00000000087882078f47eb6ab54f5d99_aeo7v5.png'
  );
  const heroImageToDisplay = optimizeCloudinary(heroImageRaw, { width: 1200 });

  // Bottom Banner Image resolution (Section above footer): prioritize brand.bottomBannerImage, then fallback to brand-specific requested URLs
  const bottomBannerRaw = brand.bottomBannerImage || (
    brand.id === 'ro-service-24x7'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789744714/file_00000000c0e082118f500d75d9418d25_a6woez.png'
      : brand.id === 'pureit'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789742395/file_0000000062e4820b88f376aa9d87322a_zgjamt.png'
      : brand.id === 'ao-smith'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789742391/IMG-20260918-WA0043_lofbp9.jpg'
      : brand.id === 'livpure'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789742391/IMG-20260918-WA0045_otqkvz.jpg'
      : brand.id === 'aquaguard'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789742391/IMG-20260918-WA0044_mt8t6n.jpg'
      : 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789674504/IMG-20260918-WA0002_whpvlb.jpg'
  );
  const bottomBannerToDisplay = optimizeCloudinary(bottomBannerRaw, { width: 1200 });

  // Parts / Filters Banner Image resolution (Section just above Why Choose Us): prioritize brand.partsBannerImage, then fallback to brand-specific requested URLs
  const partsBannerRaw = brand.partsBannerImage || (
    brand.id === 'ro-service-24x7'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789744713/file_00000000be388230a7ea3fe9b5fef059_oqqijq.png'
      : brand.id === 'aquaguard'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789742669/file_00000000dca481f594fbe17b45c4fbf9_o20n4v.png'
      : brand.id === 'pureit'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789742669/file_000000006a7881f89f7423968dbdf36e_nnkyny.png'
      : brand.id === 'ao-smith'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789742670/file_0000000009ec81fdad912727b6638014_jadzuy.png'
      : brand.id === 'livpure'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789742670/file_00000000980c8230b73a31ab0aba807a_jujtjk.png'
      : 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789672646/file_0000000075fc8208a4db72abe1abf045_bakaut.png'
  );
  const partsBannerToDisplay = optimizeCloudinary(partsBannerRaw, { width: 1200 });

  const toggleFaq = (index: number) => {
    setOpenFaqs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const toggleMobileFooter = (column: string) => {
    setMobileFooterOpen((prev) => ({ ...prev, [column]: !prev[column] }));
  };

  // Handle Form Submission via FormSubmit
  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    const cleanPhone = phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!serviceType) {
      setFormError('Please select a service type.');
      return;
    }
    setFormError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/syedsmaula786@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'Customer Name': fullName.trim(),
          'Mobile Number': cleanPhone,
          'Pincode': pincode.trim() || 'Bangalore (Not specified)',
          'Service Type': serviceType,
          'Brand': brand.name,
          'Page URL': typeof window !== 'undefined' ? window.location.href : '',
          'Submitted At': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
          _subject: `New RO Lead: ${fullName.trim()} - ${brand.name} (${cleanPhone})`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (response.ok || response.status === 200) {
        setFormSubmitted(true);
      } else {
        setFormSubmitted(true);
      }
    } catch (err) {
      console.warn('FormSubmit lead sending note:', err);
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Pincode Check
  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPin = checkPincode.trim();
    if (!cleanPin || cleanPin.length !== 6 || !/^\d+$/.test(cleanPin)) {
      setPincodeResult({
        checked: true,
        available: false,
        message: 'Please enter a valid 6-digit Indian postal pincode.',
      });
      return;
    }
    // All valid pincodes are available
    setPincodeResult({
      checked: true,
      available: true,
      message: `Service is Available! Our certified ${brand.name} technician can reach your doorstep within 60 to 90 minutes.`,
    });
  };

  // Handle Newsletter Submission via FormSubmit
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    try {
      await fetch('https://formsubmit.co/ajax/syedsmaula786@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          Email: newsletterEmail.trim(),
          Brand: brand.name,
          Subscription: 'Newsletter & Updates',
          _subject: `New Newsletter Subscriber: ${newsletterEmail.trim()}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
    } catch (err) {
      console.warn('Newsletter submission:', err);
    }
    setNewsletterSubmitted(true);
  };

  // Resolve service images per brand
  const qualityImage = optimizeCloudinary('https://res.cloudinary.com/dieq3fjuv/image/upload/v1789669453/IMG-20260917-WA0018_m8dnkp.jpg', { width: 450 });

  const repairImage = optimizeCloudinary(brand.serviceImages?.repair || (
    brand.id === 'ro-service-24x7'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789744767/file_0000000072548211b75cdf8e48b91b7d_mmuame.png'
      : brand.id === 'ao-smith'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743886/IMG-20260918-WA0051_ov3w2q.jpg'
      : brand.id === 'pureit'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743886/IMG-20260918-WA0052_wlnsxq.jpg'
      : brand.id === 'livpure'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743886/IMG-20260918-WA0053_jzf7ky.jpg'
      : brand.id === 'aquaguard'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743886/IMG-20260918-WA0050_ffapvn.jpg'
      : 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789669453/IMG-20260917-WA0015_ptidj8.jpg'
  ), { width: 450 });

  const filterImage = optimizeCloudinary(brand.serviceImages?.filter || (
    brand.id === 'ro-service-24x7'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789744766/file_00000000696c8211b0e9d31b75c0009e_rpigfw.png'
      : brand.id === 'ao-smith'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743947/IMG-20260918-WA0061_tsglkw.jpg'
      : brand.id === 'pureit'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743947/IMG-20260918-WA0060_1_r10zsw.jpg'
      : brand.id === 'livpure'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743946/IMG-20260918-WA0058_fwab01.jpg'
      : brand.id === 'aquaguard'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743946/IMG-20260918-WA0059_ndexit.jpg'
      : 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789669453/IMG-20260917-WA0017_qm0y3k.jpg'
  ), { width: 450 });

  const amcImage = optimizeCloudinary(brand.serviceImages?.amc || (
    brand.id === 'ro-service-24x7'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789744767/file_000000008d20821198976eef39c910a9_dwhpb5.png'
      : brand.id === 'ao-smith'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743916/IMG-20260918-WA0055_uvysaw.jpg'
      : brand.id === 'pureit'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743917/IMG-20260918-WA0056_ayukpn.jpg'
      : brand.id === 'livpure'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743917/IMG-20260918-WA0054_qks7en.jpg'
      : brand.id === 'aquaguard'
      ? 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743917/IMG-20260918-WA0057_hnngfr.jpg'
      : 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789669453/IMG-20260917-WA0016_y94ufa.jpg'
  ), { width: 450 });

  const servicesList = [
    {
      title: 'Repair & Service',
      description: `Quick and reliable repair for all ${brand.name} RO water purifiers.`,
      image: repairImage,
      icon: Wrench,
    },
    {
      title: 'Filter Replacement',
      description: 'Replace sediment, carbon filters and RO membranes for better purification.',
      image: filterImage,
      icon: Filter,
    },
    {
      title: 'AMC Plans',
      description: 'Affordable maintenance plans for uninterrupted performance.',
      image: amcImage,
      icon: ShieldCheck,
    },
    {
      title: 'Water Quality Check',
      description: 'Get your water tested and ensure your purifier is working efficiently.',
      image: qualityImage,
      icon: Droplets,
    },
  ];

  // 4 Why Choose Points - matching reference
  const whyChoosePoints = [
    {
      title: 'Experienced Technicians',
      description: 'Professional water purifier service engineers.',
      icon: User,
    },
    {
      title: 'Genuine Compatible Parts',
      description: 'Quality-tested filters and components.',
      icon: Settings,
    },
    {
      title: 'Fast Doorstep Service',
      description: 'Same day or next day service in your area.',
      icon: Truck,
    },
    {
      title: 'Transparent Pricing',
      description: 'Affordable service charges with no hidden costs.',
      icon: IndianRupee,
    },
  ];

  // 14 Primary Reference FAQs (including 10 comprehensive expert additions)
  const primaryFaqs = [
    {
      question: `Why is my ${brand.name} water purifier not dispensing water?`,
      answer: `Possible reasons include clogged pre-filters, low inlet water pressure, a worn-out RO membrane, or power supply faults. Our certified technician conducts a comprehensive multi-point diagnostic check at your doorstep to quickly identify the blockage and restore normal flow.`,
    },
    {
      question: `How often should ${brand.name} RO filters be replaced?`,
      answer: `Sediment and activated carbon pre-filters should generally be replaced every 6 to 12 months depending on your daily usage and water quality. High-rejection RO membranes typically last 18 to 24 months. We conduct digital TDS tests before and after service to verify purification efficiency.`,
    },
    {
      question: `Do you provide ${brand.name} AMC service?`,
      answer: `Yes! Our Annual Maintenance Contract (AMC) plans include scheduled preventive maintenance visits, complete replacement of sediment and carbon cartridges, membrane health checks, and priority zero-labor breakdown support throughout Bangalore.`,
    },
    {
      question: `Do technicians provide doorstep service?`,
      answer: `Yes, we provide 60 to 90 minute fast doorstep service for ${brand.name} water purifiers across all major localities in Bangalore, equipped with genuine spare parts and specialized diagnostic tools.`,
    },
    {
      question: `What is the ideal TDS level for drinking water after ${brand.name} purification?`,
      answer: `According to WHO and Bureau of Indian Standards (BIS), ideal drinking water TDS ranges between 50 and 150 PPM. Our technician measures input raw water and treated water with a calibrated digital TDS meter, adjusting the mineralizer and TDS controller to ensure healthy essential mineral retention while filtering out heavy metals.`,
    },
    {
      question: `What causes foul odor or bitter taste in ${brand.name} purified water?`,
      answer: `Unpleasant taste or odor usually stems from an exhausted post-carbon polishing filter, bio-film accumulation in the internal storage tank, or an expired RO membrane. Our technician thoroughly sanitizes the storage tank and installs high-grade silver-impregnated carbon blocks to restore refreshing water taste.`,
    },
    {
      question: `Why does reject water continuously leak or drain from my ${brand.name} RO?`,
      answer: `Continuous drain flow even when the purified tank is full is typically caused by a failing Auto Cut-Off Solenoid Valve (SV) or low pressure cutoff switch. This wastes substantial water and strains the booster pump. Our technician carries authentic replacement solenoid valves to resolve this immediately.`,
    },
    {
      question: `Do you supply genuine booster pumps, SMPS adapters, and UV lamps for ${brand.name}?`,
      answer: `Yes, we stock certified high-pressure copper-wound booster pumps (75 GPD / 100 GPD), surge-protected SMPS power adapters, long-life quartz glass UV lamps, and leak-proof push-fit connectors with manufacturer-backed replacement warranties.`,
    },
    {
      question: `Can you uninstall, shift, and reinstall my ${brand.name} water purifier when moving homes?`,
      answer: `Absolutely! We provide safe de-installation, protective transit packaging, and complete re-installation at your new apartment or home anywhere in Bangalore, including wall drilling, plumbing inlet connections, and high-pressure leak testing.`,
    },
    {
      question: `What immediate steps should I take if my ${brand.name} RO starts leaking water?`,
      answer: `Immediately turn off the cold water divertor valve feeding the purifier and unplug the electrical adapter from the wall socket to prevent electrical hazards. Then call our Bangalore helpline at 080502 91180 for prompt 60–90 minute doorstep emergency assistance.`,
    },
    {
      question: `Is borewell or tanker water with high TDS suitable for ${brand.name} purifiers?`,
      answer: `Yes. Many Bangalore localities depend on deep borewells or private water tankers with TDS exceeding 1000–1800 PPM and high mineral hardness. We equip your ${brand.name} system with high-rejection anti-scalant membranes capable of purifying input water up to 2500 PPM TDS.`,
    },
    {
      question: `How long does a typical ${brand.name} doorstep servicing or filter change take?`,
      answer: `A standard preventive maintenance and filter cartridge change visit takes around 45 to 60 minutes. This includes multi-stage physical inspection, cartridge replacement, electrical safety check, tank disinfection, and digital pre/post TDS verification.`,
    },
    {
      question: `Are service engineers available on weekends and holidays across Bangalore?`,
      answer: `Yes, our service engineers operate 7 days a week from 8:00 AM to 9:00 PM, including Saturdays, Sundays, and public holidays across all Bangalore zones, ensuring you never run out of clean drinking water.`,
    },
    {
      question: `What payment options are available once the ${brand.name} service is completed?`,
      answer: `We provide complete post-service billing with no advance fees. Once you inspect the purifier and verify water purity, you can pay conveniently via UPI (Google Pay, PhonePe, Paytm), debit/credit card, net banking, or cash.`,
    },
    ...(brand.brandFaqs || []),
  ];

  const displayedFaqs = showAllFaqs ? primaryFaqs : primaryFaqs.slice(0, 8);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
      
      {/* ========================================================
          1. STICKY HEADER
             - Logo (left)
             - Nav links (center): Home, Services, AMC Plans, Filters & Parts, Why [Brand], FAQs (desktop)
             - Search icon + phone number w/ icon + Book Service CTA (right)
             - Mobile: hamburger menu button (hidden on desktop), collapse nav into drawer
      ======================================================== */}
      <header className={`sticky top-0 z-50 bg-white border-b border-slate-200 shadow-2xs transition-transform duration-300 ${isHeaderHidden ? '-translate-y-full' : 'translate-y-0'}`}>
        {/* Top Announcement Bar: announcement | announcement | announcement (strictly 1 line on all devices) */}
        <div className="bg-[#002b66] text-white py-1.5 sm:py-2 px-2 overflow-hidden select-none">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 min-[380px]:gap-2.5 sm:gap-4 md:gap-6 whitespace-nowrap flex-nowrap text-[9.5px] min-[360px]:text-[10.5px] sm:text-xs font-medium">
            <div className="flex items-center gap-1 shrink-0">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/90 shrink-0 hidden min-[480px]:inline" />
              <span className="hidden sm:inline">India's Most Trusted RO Service</span>
              <span className="sm:hidden">Trusted RO Service</span>
            </div>
            <span className="text-white/40 font-light shrink-0 select-none">|</span>
            <div className="flex items-center gap-1 shrink-0">
              <Truck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/90 shrink-0 hidden min-[480px]:inline" />
              <span className="hidden sm:inline">Doorstep Service in 60–90 Mins</span>
              <span className="sm:hidden">60–90 Min Doorstep</span>
            </div>
            <span className="text-white/40 font-light shrink-0 select-none">|</span>
            <div className="flex items-center gap-1 shrink-0">
              <Headset className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/90 shrink-0 hidden min-[480px]:inline" />
              <span className="hidden sm:inline">24x7 Customer Support</span>
              <span className="sm:hidden">24x7 Support</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo (left) - RO Service Center Online 24x7 Brand Identity */}
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group select-none">
                {!isHomepage && brand.logoUrl ? (
                  <div className="h-10 sm:h-12 w-auto max-w-[90px] sm:max-w-[120px] rounded-xl overflow-hidden bg-white shadow-2xs shrink-0 flex items-center justify-center p-1 border border-slate-200/80 group-hover:scale-[1.03] transition-transform">
                    <img
                      src={optimizeCloudinary(brand.logoUrl, { width: 140 })}
                      alt={`${brand.name} Logo`}
                      width={100}
                      height={40}
                      loading="eager"
                      decoding="async"
                      className="h-full w-auto max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-xs shrink-0 group-hover:scale-[1.03] transition-transform">
                    <img
                      src={optimizeCloudinary("https://res.cloudinary.com/dieq3fjuv/image/upload/v1789813995/IMG-20260918-WA0070_skegej.jpg", { width: 100 })}
                      alt="RO Service Center Online 24x7"
                      width={44}
                      height={44}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="font-extrabold text-[15px] sm:text-[18px] lg:text-[20px] text-[#002b66] tracking-tight leading-tight group-hover:text-[#0052a3] transition-colors">
                    RO Service Center
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-black tracking-wider text-[#0070e0] uppercase">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                      Online 24x7
                    </span>
                  </div>
                </div>
              </Link>
              
              <div className="hidden sm:block h-8 w-px bg-slate-200"></div>
              
              <div className="hidden sm:flex flex-col justify-center">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-0.5">
                  Doorstep Support
                </span>
                <span className="text-[11px] font-bold text-slate-700 tracking-wider uppercase leading-none">
                  {brand.id === 'ro-service-24x7' ? 'Multi-Brand Care' : `${brand.name} Service`}
                </span>
              </div>
            </div>

            {/* Right: Search + Profile + Phone + Hamburger */}
            <div className="flex items-center gap-4 sm:gap-6 text-slate-800">
              <button onClick={() => setSearchOpen(!searchOpen)} aria-label="Search Services" className="hover:text-blue-700 transition-colors">
                <Search className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              </button>

              <button
                onClick={scrollToBookingForm}
                aria-label="User Profile"
                title="Account / My Bookings"
                className="hover:text-blue-700 transition-colors"
              >
                <User className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              </button>
              
              <a href={`tel:${displayPhone}`} aria-label="Call Helpline" className="hover:text-blue-700 transition-colors">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              </a>

              {/* Hamburger Menu Button - Hidden on desktop devices (md and above) */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="md:hidden hover:text-blue-700 transition-colors focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Quick Search Drawer */}
        {searchOpen && (
          <div className="border-t border-slate-200 bg-slate-50 px-4 py-3">
            <div className="max-w-xl mx-auto flex items-center gap-2">
              <input
                type="text"
                aria-label={`Search ${brand.name} RO services`}
                placeholder={`Search ${brand.name} RO services, filter change, AMC...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-full px-4 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
              />
              <button
                onClick={scrollToBookingForm}
                aria-label="Find RO Service"
                style={{ backgroundColor: primaryColor }}
                className="text-white text-xs font-bold px-4 py-2 rounded-full cursor-pointer"
              >
                Find
              </button>
            </div>
          </div>
        )}

      </header>

      {/* Fullscreen Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[100] bg-white flex flex-col pt-4 px-6 pb-6 overflow-y-auto animate-fadeIn">
          <div className="flex justify-end mb-8">
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="p-2 text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <nav className="flex flex-col space-y-4 text-xl font-extrabold text-slate-800">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100 text-slate-900">Home</Link>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Services</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">AMC Plans</a>
            <a href="#parts" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Filters &amp; Parts</a>
            <a href="#why-choose-us" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Why {brand.name}</a>
            <a href="#support-faqs" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-slate-100">Support</a>
          </nav>

          <div className="mt-auto pt-8 flex flex-col items-start gap-4">
            <div className="w-full pt-4 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">Helpline</span>
              <a href={`tel:${displayPhone}`} className="text-lg font-black text-[#0b5cbe]">
                {displayPhone}
              </a>
            </div>
            <a
              href={`tel:${displayPhone}`}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full bg-[#0b5cbe] hover:bg-[#094fa5] text-white text-base font-bold py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Phone className="w-5 h-5 fill-current" />
              <span>Call 08050291180</span>
            </a>
          </div>
        </div>
      )}

      {/* ========================================================
          2. HERO SECTION + DOCKED BOOKING FORM
      ======================================================== */}
      <section className="relative w-full aspect-[5/3] sm:aspect-auto min-h-0 sm:min-h-[440px] max-h-none sm:max-h-[580px] lg:max-h-[640px] flex items-start sm:items-center overflow-hidden border-b border-slate-200/80 bg-white">
        {/* HERO BACKGROUND IMAGE: 16:9 background banner */}
        {heroImageToDisplay && (
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-[right_top] sm:bg-[center_top] bg-no-repeat"
              style={{ backgroundImage: `url(${heroImageToDisplay})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent sm:from-white/35 sm:via-white/15 pointer-events-none" />
          </div>
        )}

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Left Column: Title, Subheading, Description, Badges & CTAs */}
            <div className="lg:col-span-6 xl:col-span-5 space-y-2 sm:space-y-3.5 text-left">
              
              {/* Eyebrow Label */}
              <div className="text-[9px] sm:text-xs font-bold uppercase tracking-wider text-slate-600">
                {brand.id === 'ro-service-24x7' ? 'CERTIFIED BANGALORE WATER PURIFIER EXPERTS' : `CERTIFIED ${brand.name.toUpperCase()} SPECIALISTS BANGALORE`}
              </div>

              {/* Large Bold H1 */}
              <h1 className="text-xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#0c2b5e] leading-tight sm:leading-[1.15]">
                <span className="block">{brand.id === 'ro-service-24x7' ? 'RO Service Centre Online 24x7' : `${brand.name.toUpperCase()} RO Service`}</span>
                <span className="block">Fast Doorstep service in 60 mins</span>
              </h1>

              {/* Subheading / Tagline */}
              <p className="hidden sm:block text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                {brand.heroMotto || 'Pure Water. Healthy Families. Brighter Tomorrows.'}
              </p>

              {/* Short description paragraph */}
              <p className="hidden sm:block text-xs sm:text-[13px] text-slate-600 leading-relaxed max-w-md">
                {brand.id === 'ro-service-24x7'
                  ? "Bangalore's premier doorstep water purifier specialists. Certified technicians arrive in 60–90 minutes with genuine replacement cartridges, digital TDS calibration, and a 30-day labor warranty."
                  : `Bangalore's trusted doorstep specialists for ${brand.name} water purifiers. Factory-certified technicians arrive in 60–90 minutes with 100% genuine compatible spares, high-rejection membranes, and a 30-day warranty.`}
              </p>

              {/* Row of 4 small icon+text feature badges */}
              <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-0.5 max-w-lg">
                {[
                  { label: 'Same Day Service', icon: Zap },
                  { label: 'Certified Technicians', icon: ShieldCheck },
                  { label: brand.id === 'ro-service-24x7' ? 'Genuine RO Parts' : `Genuine ${brand.name.toUpperCase()} Parts`, icon: Settings },
                  { label: 'Doorstep Support', icon: Clock },
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={`marquee-item-${idx}`}
                      className="flex items-center gap-1.5 bg-white/90 border border-slate-200/90 rounded-md px-2 py-1 shadow-2xs"
                    >
                      <div className="w-4 h-4 rounded-full border border-blue-200 bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0">
                        <IconComp className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-[10px] sm:text-[10.5px] font-semibold text-slate-800 leading-tight">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
                <a
                  href={`tel:${displayPhone}`}
                  className="bg-[#0066cc] hover:bg-[#0055b3] text-white text-[10px] sm:text-sm font-bold px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg shadow-sm transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer"
                >
                  <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                  <span>Call 08050291180</span>
                </a>
              </div>

              {/* 4.5 Star Rating & 10,000+ Happy Customers Social Proof */}
              <div className="flex items-center flex-wrap gap-1.5 sm:gap-2 pt-1.5">
                <div className="flex items-center gap-1 sm:gap-1.5 bg-white/90 backdrop-blur-2xs border border-slate-200/90 rounded-full px-2 sm:px-2.5 py-0.5 sm:py-1 shadow-2xs">
                  <div className="flex items-center">
                    {[1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    <div className="relative w-2.5 h-2.5 sm:w-3.5 sm:h-3.5">
                      <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-slate-300 fill-slate-200" />
                      <div className="absolute inset-0 overflow-hidden w-1/2">
                        <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-extrabold text-slate-900">4.5</span>
                </div>

                <span className="text-[9px] sm:text-xs font-semibold text-slate-800 bg-white/70 sm:bg-transparent rounded-md px-1.5 sm:px-0 py-0.5">
                  <span className="font-bold text-slate-950">10,000+</span> happy customers
                </span>
              </div>
            </div>

            {/* Right Column: Open space so background image remains unobstructed */}
            <div className="hidden lg:block lg:col-span-6 xl:col-span-7 pointer-events-none" />

          </div>
        </div>
      </section>

      {/* LOWER HERO: THE BOOKING FORM CARD WITH BACKGROUND IMAGE */}
      <section className="bg-slate-50 py-8 sm:py-12 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={bookingFormRef}
            id="booking-section"
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 text-white relative shadow-2xl overflow-hidden border border-blue-900/50 bg-[#0c3975] bg-cover bg-center sm:bg-[center_right] bg-no-repeat"
            style={{
              backgroundImage: `url('${optimizeCloudinary("https://res.cloudinary.com/dieq3fjuv/image/upload/v1789668617/file_00000000aa70820b93ba0ee61bc6377c_prruge.png", { width: 900 })}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c2b5e]/90 via-[#0c2b5e]/60 to-transparent sm:from-[#0c2b5e]/80 sm:via-[#0c2b5e]/30 sm:to-transparent pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Form Column */}
              <div className="lg:col-span-8 xl:col-span-7 space-y-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    Schedule Instant Doorstep {brand.id === 'ro-service-24x7' ? 'RO' : brand.name} Service
                  </h2>
                  <p className="text-xs sm:text-sm text-blue-100/90 mt-1">
                    {brand.id === 'ro-service-24x7'
                      ? 'Fast technician dispatch across all Bangalore neighborhoods for fault diagnosis, urgent leak repair, and genuine filter renewals.'
                      : `Direct technician dispatch for your ${brand.name} water purifier across Bangalore. Same-day inspection, urgent leak stoppage, and certified filter renewals.`}
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 text-center space-y-2">
                    <CheckCircle className="w-9 h-9 text-emerald-400 mx-auto" />
                    <h3 className="text-base font-bold text-white">Service Request Received!</h3>
                    <p className="text-xs text-blue-100 max-w-md mx-auto">
                      Thank you, <strong className="text-white">{fullName}</strong>. A certified {brand.id === 'ro-service-24x7' ? 'RO' : brand.name.toUpperCase()} technician will contact you on <strong className="text-white">{phone}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFullName('');
                        setPhone('');
                        setPincode('');
                        setServiceType('');
                      }}
                      className="text-xs text-emerald-300 underline font-semibold mt-1 cursor-pointer"
                    >
                      Book another service
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-3">
                    {formError && (
                      <div className="bg-rose-900/80 border border-rose-400 text-rose-100 text-xs px-3 py-2 rounded-lg">
                        {formError}
                      </div>
                    )}

                    {/* Row 1: 3 Fields (Full Name, Mobile Number, Enter Your Pincode) */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <User className="w-3.5 h-3.5" />
                        </div>
                        <input
                          type="text"
                          id="booking-full-name"
                          aria-label="Full Name"
                          required
                          placeholder="Full Name"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>

                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-3.5 h-3.5" />
                        </div>
                        <input
                          type="tel"
                          id="booking-phone"
                          aria-label="Mobile Number"
                          required
                          maxLength={10}
                          placeholder="Mobile Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>

                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <MapPin className="w-3.5 h-3.5" />
                        </div>
                        <input
                          type="text"
                          id="booking-pincode"
                          aria-label="Enter Your Pincode"
                          maxLength={6}
                          placeholder="Enter Your Pincode"
                          value={pincode}
                          onChange={(e) => setPincode(e.target.value)}
                          className="w-full pl-9 pr-3 py-2.5 bg-white text-slate-900 placeholder-slate-400 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                    </div>

                    {/* Row 2: 2 Fields (Select Service Type ~60%, Submit Button ~40%) */}
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                      <div className="relative sm:col-span-7">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Wrench className="w-3.5 h-3.5" />
                        </div>
                        <select
                          id="booking-service-type"
                          aria-label="Select Service Type"
                          value={serviceType}
                          onChange={(e) => setServiceType(e.target.value)}
                          className={`w-full pl-9 pr-8 py-2.5 bg-white text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-400 appearance-none cursor-pointer ${
                            serviceType === '' ? 'text-slate-400' : 'text-slate-900'
                          }`}
                        >
                          <option value="" disabled>Select Service Type</option>
                          <option value="RO Repair & Service" className="text-slate-900">RO Repair &amp; Service</option>
                          <option value="Filter Replacement" className="text-slate-900">Filter Replacement</option>
                          <option value="AMC Maintenance Plan" className="text-slate-900">AMC Maintenance Plan</option>
                          <option value="Water Quality Check" className="text-slate-900">Water Quality Check</option>
                          <option value="Installation / Relocation" className="text-slate-900">Installation / Relocation</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                          <ChevronDown className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      <div className="sm:col-span-5">
                        <button
                          type="submit"
                          aria-label="Book Service Now"
                          disabled={isSubmitting}
                          className="w-full bg-[#0070e0] hover:bg-[#0060c5] disabled:opacity-75 text-white font-bold text-xs py-2.5 px-5 rounded-lg shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <>
                              <span>Book Service Now</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-blue-200/90 pt-1">
                      <Lock className="w-3 h-3 text-blue-200" />
                      <span>Your information is safe with us.</span>
                    </div>
                  </form>
                )}
              </div>

              <div className="hidden lg:block lg:col-span-4 xl:col-span-5 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. OUR SERVICES SECTION (Exact layout matching IMG-20260917-WA0022.jpg)
             - Left Column: Eyebrow ("OUR SERVICES"), Title ("Complete {Brand} Water Purifier Care"),
               description, and "View All Services →" link
             - 4 Service Cards:
               * 1: Repair & Service (Wrench) + "Quick and reliable repair for all {Brand} RO water purifiers."
               * 2: Filter Replacement (Filter) + "Replace sediment, carbon filters and RO membranes for better purification."
               * 3: AMC Plans (ShieldCheck) + "Affordable maintenance plans for uninterrupted performance."
               * 4: Water Quality Check (Droplets) + "Get your water tested and ensure your purifier is working efficiently."
             - Each card has top image, inline icon + title, description, and "Know More →" link
      ======================================================== */}
      <section id="services" className="py-14 sm:py-20 bg-gradient-to-b from-white via-slate-50/60 to-white border-b border-slate-100 overflow-hidden relative">
        {/* Subtle Ambient White Glow in background */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-64 bg-white rounded-full blur-3xl opacity-80 pointer-events-none -z-0" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-64 bg-white rounded-full blur-3xl opacity-80 pointer-events-none -z-0" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-36 bg-gradient-to-r from-transparent via-white to-transparent blur-2xl opacity-75 pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4 relative z-10">
          <div>
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
              COMPREHENSIVE PURIFIER SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-3xl xl:text-[28px] font-extrabold text-[#002b66] tracking-tight leading-[1.2]">
              Complete {brand.name}
              <span className="block mt-1 font-extrabold">Repair, Service &amp; AMC Solutions</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 max-w-xl leading-relaxed">
              Precision diagnostics, factory-certified filter replacements, and scheduled maintenance designed specifically for Bangalore&apos;s diverse municipal and borewell water supplies.
            </p>
          </div>
          <button
            onClick={scrollToBookingForm}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0066cc] hover:text-[#0052a3] group cursor-pointer"
          >
            <span className="underline underline-offset-4 decoration-[#0066cc] group-hover:decoration-[#0052a3]">
              View All Services
            </span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Marquee Container with Left & Right White Glowing Edge Masks */}
        <div className="relative w-full overflow-hidden pb-6 pt-2">
          {/* Left glowing fade mask */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-36 md:w-52 bg-gradient-to-r from-white via-white/95 to-transparent z-20" />
          {/* Right glowing fade mask */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-36 md:w-52 bg-gradient-to-l from-white via-white/95 to-transparent z-20" />

          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-6 relative z-10">
            {[...servicesList, ...servicesList, ...servicesList, ...servicesList].map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={`marquee-item-${idx}`}
                  className="w-[285px] sm:w-[330px] shrink-0 bg-white rounded-2xl border border-slate-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.04),0_0_20px_rgba(255,255,255,0.95)] hover:shadow-[0_16px_40px_rgba(0,102,204,0.14),0_0_35px_rgba(255,255,255,1)] hover:border-blue-300/80 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden flex flex-col group cursor-pointer relative"
                  onClick={scrollToBookingForm}
                >
                  {/* Subtle Top White Sheen */}
                  <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent z-30 opacity-90" />

                  {/* Card Image */}
                  <div className="h-44 sm:h-50 overflow-hidden bg-slate-100 relative">
                    <img
                      src={service.image}
                      alt={`${service.title} - ${brand.name} RO Water Purifier`}
                      width={330}
                      height={200}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-black/10 opacity-60 group-hover:opacity-30 transition-opacity" />
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between bg-white relative z-20">
                    <div>
                      {/* Icon + Title inline */}
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-10 h-10 rounded-xl bg-blue-50/90 border border-blue-100/80 text-[#0066cc] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 group-hover:bg-[#0066cc] group-hover:text-white transition-all duration-300">
                          <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                        </div>
                        <h3 className="text-base sm:text-[17px] font-bold text-slate-900 leading-snug group-hover:text-[#0066cc] transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      {/* Description */}
                      <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>

                    {/* Footer link / CTA */}
                    <div className="pt-3 border-t border-slate-100/90 flex items-center justify-between mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066cc] group-hover:text-[#0052a3] transition-colors">
                        <span>Book Service</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                      <span className="text-[11px] font-medium text-slate-400 group-hover:text-slate-600 transition-colors">
                        60–90 Mins
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. PRODUCTS/PARTS SECTION (Image Banner)
      ======================================================== */}
      <section id="parts" className="w-full bg-white">
        <img
          src={partsBannerToDisplay}
          alt={`${brand.name} Compatible Filters`}
          width={1200}
          height={320}
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover block"
        />
      </section>

      {/* ========================================================
          6. "WHY CHOOSE US" & BANNER SECTION
      ======================================================== */}
      <section id="why-choose-us" className="pt-16 pb-12 sm:pt-24 sm:pb-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-10 gap-6">
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
                PROVEN RELIABILITY &amp; EXCELLENCE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002b66] tracking-tight">
                Why Bangalore Families Trust Our Care
              </h2>
            </div>
            
            <div className="text-left sm:text-right">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 block mb-1">
                TRUSTED BY MILLIONS
              </span>
              {brand.logoUrl ? (
                <img 
                  src={optimizeCloudinary(brand.logoUrl, { width: 160 })} 
                  alt={brand.name} 
                  width={140}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="h-8 sm:h-10 object-contain sm:ml-auto" 
                />
              ) : (
                <div className="text-2xl sm:text-3xl font-black text-[#002b66] leading-none">
                  {brand.name}
                </div>
              )}
            </div>
          </div>

          {/* Mobile-only summary text (replacing the hidden grid) */}
          <p className="block sm:hidden text-[13px] text-slate-600 mb-6 leading-relaxed">
            Certified technicians with over a decade of field experience, authentic OEM-grade filtration spares, transparent written estimates, and an ironclad 30-day labor warranty ensuring your drinking water remains 100% safe.
          </p>

          {/* 4-column icon+title+description inline grid */}
          <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            {whyChoosePoints.map((point, idx) => {
              const IconComp = point.icon;
              return (
                <div key={`marquee-item-${idx}`} className="flex items-start gap-4">
                  <div className="text-[#0052a3] shrink-0 pt-0.5">
                    <IconComp className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-bold text-slate-900 mb-1 leading-snug">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Healthy Water Banner Image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-sm border border-slate-100">
            <img 
              src={optimizeCloudinary("https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743272/IMG-20260918-WA0049_o2bgrk.jpg", { width: 1200 })}
              alt="Healthy Water For Every Family"
              width={1200}
              height={400}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>

        </div>
      </section>

      {/* Transparent Fixed Pricing Section */}
      <PricingTransparency 
        brandName={brand.id === 'ro-service-24x7' ? 'RO' : brand.name} 
        onBookClick={scrollToBookingForm} 
      />

      {/* Brand Comparison (RO Service Centre 24x7 vs Authorized Brand Center) */}
      <BrandComparison 
        brandName={brand.id === 'ro-service-24x7' ? 'Official Brand Centers' : `${brand.name} Authorized Center`} 
        onBookClick={scrollToBookingForm} 
      />

      {/* Blog & Water Purifier Maintenance Knowledge Hub (Above FAQ, rendered on homepage and all brand pages) */}
      <HomeBlogSection
        brandSlug={isHomepage ? undefined : (brand.slug || brand.id).replace(/^\//, '')}
        brandName={isHomepage ? undefined : brand.name}
        brandThemeColor={primaryColor}
      />



      {/* ========================================================
          8. FAQ SECTION
             - Heading + "View All FAQs" link top-right
             - 2-column accordion grid (expandable +/- items)
             - Mobile: single column accordion
      ======================================================== */}
      <section id="support-faqs" className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span
                style={{ color: primaryColor }}
                className="text-xs font-bold uppercase tracking-wider block mb-1"
              >
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Common Questions About {brand.id === 'ro-service-24x7' ? 'Doorstep RO' : brand.name} Service
              </h2>
            </div>

            <button
              onClick={() => setShowAllFaqs(!showAllFaqs)}
              style={{ color: primaryColor }}
              className="text-xs sm:text-sm font-bold hover:underline flex items-center gap-1 cursor-pointer self-start sm:self-auto"
            >
              <span>{showAllFaqs ? 'Show Fewer FAQs' : `View All ${primaryFaqs.length} FAQs`}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 2-column accordion grid (expandable +/- items) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedFaqs.map((faq, idx) => {
              const isOpen = !!openFaqs[idx];
              return (
                <div
                  key={`marquee-item-${idx}`}
                  className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full p-4 sm:p-5 text-left flex items-start justify-between gap-3 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                    <span className="text-base font-mono text-slate-400 shrink-0 select-none">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div id={`faq-answer-${idx}`} className="px-4 sm:px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================
          9. LOCATION/AVAILABILITY SECTION
             - Left: heading + description + pincode input with "Check Availability" button
             - Right: map graphic with location pins + list of city names below
             - Mobile: stack vertically, map below form
      ======================================================== */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10 lg:p-12">
            <div className="max-w-2xl mx-auto items-center">
              
              {/* Heading + description + pincode input with "Check Availability" button */}
              <div className="space-y-5 text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Doorstep {brand.name} Technicians Across Bangalore
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Check real-time technician availability in your neighborhood. We serve all Bangalore localities, tech corridors, and residential apartments with 60–90 minute arrivals.
                </p>

                <form onSubmit={handlePincodeCheck} className="flex flex-col sm:flex-row items-center gap-2.5 pt-2 max-w-lg mx-auto">
                  <div className="relative w-full sm:flex-1">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    <input
                      type="text"
                      id="check-pincode-input"
                      aria-label="Enter Your Pincode to check service availability"
                      maxLength={6}
                      placeholder="Enter Your Pincode"
                      value={checkPincode}
                      onChange={(e) => setCheckPincode(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-xs focus:outline-none focus:ring-2 focus:ring-slate-900 focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    aria-label="Check Service Availability"
                    style={{ backgroundColor: primaryColor }}
                    className="w-full sm:w-auto text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-xs hover:opacity-95 transition-all whitespace-nowrap cursor-pointer"
                  >
                    Check Availability →
                  </button>
                </form>

                {pincodeResult.checked && (
                  <div
                    className={`p-3 rounded-xl border text-xs font-semibold flex items-start gap-2 ${
                      pincodeResult.available
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                        : 'bg-amber-50 border-amber-200 text-amber-800'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
                    <span>{pincodeResult.message}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. BOTTOM BANNER (Section Above Footer)
      ======================================================== */}
      <section className="w-full bg-white border-b border-slate-200">
        <img 
          src={bottomBannerToDisplay}
          alt={`${brand.name} Banner`}
          width={1200}
          height={360}
          loading="lazy"
          decoding="async"
          className="w-full h-auto object-cover block"
        />
      </section>

      {/* ========================================================
          11. MAIN FOOTER (Clean White Background)
              - 6 Columns:
                1. Brand Logo Card
                2. Our Services
                3. Company
                4. Legal & Policies
                5. Follow Us (Social Media Icons)
                6. Subscribe for Updates (Email Input + Circular Arrow Button)
              - Formal Disclaimer & Brand Notice
              - Bottom Bar:
                - Left: © 2026 RO Service Center Online 24x7. All rights reserved.
                - Right: Motto
      ======================================================== */}
      <footer className="bg-white pt-12 pb-8 text-slate-700 text-xs border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main 6-Column Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-start mb-10">
            
            {/* Col 1: Brand Identity */}
            <div className="col-span-2 sm:col-span-1 flex flex-col items-start gap-2">
              <Link href="/" className="flex flex-col group select-none">
                <div className="flex items-center gap-2 mb-1.5">
                  {!isHomepage && brand.logoUrl ? (
                    <div className="h-9 w-auto max-w-[90px] sm:max-w-[110px] rounded-lg overflow-hidden bg-white border border-slate-200/80 shadow-2xs shrink-0 flex items-center justify-center p-1">
                      <img
                        src={optimizeCloudinary(brand.logoUrl, { width: 140 })}
                        alt={`${brand.name} Logo`}
                        width={90}
                        height={36}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-auto max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-xl overflow-hidden shadow-xs shrink-0">
                      <img
                        src={optimizeCloudinary("https://res.cloudinary.com/dieq3fjuv/image/upload/v1789813995/IMG-20260918-WA0070_skegej.jpg", { width: 90 })}
                        alt="RO Service Center Online 24x7"
                        width={36}
                        height={36}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0070e0] bg-blue-50 px-2 py-0.5 rounded border border-blue-200/80 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    24x7
                  </span>
                </div>
                <span className="font-extrabold text-base text-[#002b66] tracking-tight leading-tight group-hover:text-[#0052a3] transition-colors">
                  RO Service Center
                </span>
                <span className="text-xs font-black tracking-wide text-[#0070e0] mt-0.5 uppercase">
                  Online 24x7
                </span>
              </Link>
              <p className="text-[11px] text-slate-500 mt-1 leading-relaxed max-w-[170px]">
                Certified doorstep water purifier repair &amp; maintenance service.
              </p>
            </div>

            {/* Col 2: Our Services */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-sm tracking-tight">
                Our Services
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>
                  <button onClick={scrollToBookingForm} className="hover:text-slate-950 transition-colors cursor-pointer text-left">
                    Repair &amp; Service
                  </button>
                </li>
                <li>
                  <button onClick={scrollToBookingForm} className="hover:text-slate-950 transition-colors cursor-pointer text-left">
                    AMC Plans
                  </button>
                </li>
                <li>
                  <button onClick={scrollToBookingForm} className="hover:text-slate-950 transition-colors cursor-pointer text-left">
                    Filter Replacement
                  </button>
                </li>
                <li>
                  <button onClick={scrollToBookingForm} className="hover:text-slate-950 transition-colors cursor-pointer text-left">
                    Water Quality Check
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 3: Company */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-sm tracking-tight">
                Company
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>
                  <Link href="/about-us" className="hover:text-slate-950 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-slate-950 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/warranty-policy" className="hover:text-slate-950 transition-colors">
                    Warranty Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cancellation-policy" className="hover:text-slate-950 transition-colors">
                    Cancellation Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Legal & Policies */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-sm tracking-tight">
                Policies &amp; Legal
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li>
                  <Link href="/privacy-policy" className="hover:text-slate-950 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-slate-950 transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="hover:text-slate-950 transition-colors">
                    Disclaimer &amp; Notice
                  </Link>
                </li>
                <li>
                  <Link href="/refund-policy" className="hover:text-slate-950 transition-colors">
                    Refund &amp; Return Policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="hover:text-slate-950 transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 5: Follow Us */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-sm tracking-tight">
                Follow Us
              </h3>
              <div className="flex items-center gap-3.5 text-slate-800 pt-0.5">
                <a 
                  href="#" 
                  aria-label="Facebook"
                  className="hover:text-[#1877F2] transition-colors"
                >
                  <Facebook className="w-[18px] h-[18px] fill-current" />
                </a>
                <a 
                  href="#" 
                  aria-label="Instagram"
                  className="hover:text-[#E4405F] transition-colors"
                >
                  <Instagram className="w-[18px] h-[18px]" />
                </a>
                <a 
                  href="#" 
                  aria-label="YouTube"
                  className="hover:text-[#FF0000] transition-colors"
                >
                  <Youtube className="w-[18px] h-[18px]" />
                </a>
                <a 
                  href="#" 
                  aria-label="LinkedIn"
                  className="hover:text-[#0A66C2] transition-colors"
                >
                  <Linkedin className="w-[18px] h-[18px] fill-current" />
                </a>
              </div>
            </div>

            {/* Col 6: Subscribe for Updates */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h3 className="font-bold text-slate-900 text-sm tracking-tight">
                Subscribe for Updates
              </h3>
              {newsletterSubmitted ? (
                <div className="text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
                  ✓ Subscribed for updates
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex items-center gap-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-slate-300 rounded-lg text-xs placeholder:text-slate-400 text-slate-800 focus:outline-none focus:border-slate-800 focus:ring-1 focus:ring-slate-800"
                  />
                  <button
                    type="submit"
                    aria-label="Submit newsletter subscription"
                    className="w-9 h-9 rounded-full bg-[#0d3b84] hover:bg-[#092b63] text-white flex items-center justify-center shrink-0 shadow-xs cursor-pointer transition-colors"
                  >
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* ========================================================
              LOOKING FOR (Below Footer Columns, Above Disclaimer)
          ======================================================== */}
          <div className="pt-8 pb-6 border-t border-slate-200">
            {/* Looking For Keywords Block (Redesigned with Green Ticks matching reference) */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950 tracking-tight">
                {lookingForHeading}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3.5 pt-1">
                {lookingForKeywords.map((kw, idx) => (
                  <button
                    key={`kw-tick-${idx}`}
                    onClick={scrollToBookingForm}
                    className="flex items-start gap-3 text-left group cursor-pointer transition-colors py-0.5"
                  >
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="text-sm sm:text-base font-medium text-slate-800 group-hover:text-blue-700 transition-colors">
                      {kw}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ========================================================
              FORMAL BRAND DISCLAIMER & NON-AFFILIATION NOTICE
          ======================================================== */}
          <div className="pt-6 pb-6 border-t border-slate-200">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 text-slate-600 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800 uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Formal Disclaimer &amp; Brand Notice</span>
              </div>
              <p className="text-[11px] sm:text-xs leading-relaxed text-slate-600">
                <strong>RO Service Center Online 24x7</strong> is an independent multi-brand doorstep water purifier sales, service, maintenance, and repair provider. We are <strong>not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected</strong> with Kent RO Systems Ltd., Eureka Forbes Ltd. (Aquaguard), Hindustan Unilever Ltd. (Pureit), A.O. Smith India Water Products Pvt. Ltd., Livpure Pvt. Ltd., Havells India Ltd., or any of their respective subsidiaries or affiliates.
              </p>
              <p className="text-[11px] sm:text-xs leading-relaxed text-slate-500">
                All brand names, product logos, model numbers, and registered trademarks displayed on this website belong to their respective proprietary holders. Any reference to these trademarks is strictly made for customer convenience, identification, compatibility, and descriptive purposes to indicate the types of water purifiers our certified independent technicians service. We use 100% genuine compatible spare parts and provide our own 30-day labor and service warranty on all completed repairs.
              </p>
            </div>
          </div>

          {/* Bottom Bar: Divider + Copyright (Left) + Motto (Right) */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
            <div>
              © 2026 RO Service Center Online 24x7. All rights reserved.
            </div>
            <div className="text-slate-600 font-normal">
              {brand.heroMotto || 'Pure Water. Healthy Families. Brighter Tomorrows.'}
            </div>
          </div>

          {/* Keywords at very bottom (Homepage specified keywords & Brand-specific keywords) */}
          {isHomepage ? (
            <div className="pt-3 pb-1 text-center sm:text-left">
              <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">
                {HOMEPAGE_BOTTOM_KEYWORDS}
              </p>
            </div>
          ) : relevantBrandKeywordString ? (
            <div className="pt-3 pb-1 text-center sm:text-left">
              <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">
                {relevantBrandKeywordString}
              </p>
            </div>
          ) : null}

        </div>
      </footer>

      {/* ========================================================
          VIDEO MODAL (Watch How It Works)
      ======================================================== */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl relative space-y-4">
            <button
              onClick={() => setVideoModalOpen(false)}
              aria-label="Close video modal"
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-900 bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                className="w-10 h-10 rounded-xl flex items-center justify-center"
              >
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  How {brand.name} Service Works
                </h3>
                <p className="text-xs text-slate-500">
                  Doorstep Technician Service in 4 Simple Steps
                </p>
              </div>
            </div>

            <div className="space-y-3 py-2 text-xs sm:text-sm text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span style={{ backgroundColor: primaryColor }} className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div>
                  <strong className="text-slate-900 block">Book Service Online / Call</strong>
                  <span className="text-slate-500">Share your details and purifier problem.</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span style={{ backgroundColor: primaryColor }} className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div>
                  <strong className="text-slate-900 block">Technician Assigned in Minutes</strong>
                  <span className="text-slate-500">Doorstep visit arranged with genuine spares.</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span style={{ backgroundColor: primaryColor }} className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div>
                  <strong className="text-slate-900 block">Comprehensive Multi-Point Inspection</strong>
                  <span className="text-slate-500">TDS check, pressure testing, and filter replacement.</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3">
                <span style={{ backgroundColor: primaryColor }} className="w-6 h-6 rounded-full text-white text-xs font-bold flex items-center justify-center shrink-0">
                  4
                </span>
                <div>
                  <strong className="text-slate-900 block">Post-Service Warranty</strong>
                  <span className="text-slate-500">Enjoy clean drinking water with 30-day service warranty.</span>
                </div>
              </div>
            </div>

            <a
              href={`tel:${displayPhone}`}
              onClick={() => {
                setVideoModalOpen(false);
              }}
              aria-label={`Call ${brand.name} Helpline`}
              style={{ backgroundColor: primaryColor }}
              className="w-full text-white font-bold py-3 rounded-xl text-sm shadow-xs cursor-pointer flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call 08050291180</span>
            </a>
          </div>
        </div>
      )}

    </div>
  );
}
