'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, MapPin, Mail, Clock, Droplets, BookOpen } from 'lucide-react';
import { BUSINESS_DETAILS, BANGALORE_LOCALITIES } from '@/src/data/content';
import { PageRoute } from '@/src/types';

interface FooterProps {
  onNavigate?: (route: PageRoute) => void;
  currentRoute?: PageRoute;
  lastBrandRoute?: PageRoute | null;
}

interface BrandFooterStyle {
  bg: string;
  badgeAccent: string;
}

const BRAND_FOOTER_CONFIGS: Record<string, BrandFooterStyle> = {
  '/livpure-service': {
    bg: '#581c87',
    badgeAccent: '#d8b4fe',
  },
  '/aquaguard-service': {
    bg: '#0072BC',
    badgeAccent: '#7DD3FC',
  },
  '/pureit-service': {
    bg: '#2B2A6B',
    badgeAccent: '#4CA6DE',
  },
  '/aosmith-service': {
    bg: '#00843D',
    badgeAccent: '#6EE7B7',
  },
  '/kent-service': {
    bg: '#1B3F8C',
    badgeAccent: '#F472B6',
  },
};

export const Footer: React.FC<FooterProps> = ({ currentRoute: propCurrentRoute, lastBrandRoute }) => {
  const pathname = usePathname() || '/';
  const currentRoute = propCurrentRoute || (pathname as PageRoute);

  const activeRouteForBrand = (currentRoute && currentRoute.endsWith('-service'))
    ? currentRoute
    : (currentRoute !== '/' && lastBrandRoute ? lastBrandRoute : null);

  const brandConfig = activeRouteForBrand ? BRAND_FOOTER_CONFIGS[activeRouteForBrand] : undefined;
  const bgStyle = brandConfig?.bg || '#0c54a0';
  const badgeAccent = brandConfig?.badgeAccent || '#7dd3fc';

  // On brand pages, the brand has its own dedicated pixel-perfect footer matching the reference designs
  if (currentRoute && (currentRoute.includes('-service') || currentRoute.endsWith('-service'))) {
    return null;
  }

  return (
    <footer style={{ backgroundColor: bgStyle }} className="text-blue-100 pt-16 pb-24 md:pb-16 border-t border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden shadow-md shrink-0">
                <Image
                  src="https://res.cloudinary.com/dieq3fjuv/image/upload/v1789813995/IMG-20260918-WA0070_skegej.jpg"
                  alt="RO Service Center Online 24x7"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center font-['Outfit'] font-bold text-xl sm:text-2xl tracking-tight leading-none text-white">
                  <span>RO Service Center</span>
                </div>
                <span className="text-[11px] font-black text-cyan-200 tracking-wider uppercase mt-1 block">
                  Online 24x7
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
              Bangalore's trusted independent water purifier repair, filter replacement, installation, and AMC service center. Servicing all major RO brands with doorstep technicians.
            </p>

            <div className="flex flex-wrap gap-4 pt-1">
              <div className="flex items-center gap-2 text-xs text-white font-semibold">
                <Clock className="w-4 h-4" />
                <span>{BUSINESS_DETAILS.workingHours}</span>
              </div>
              <Link
                href="/blog"
                className="flex items-center gap-1.5 text-xs text-cyan-200 hover:text-white font-bold underline transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>RO Service Blog & Guides</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Policy Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/20 pb-2">
              Legal &amp; Policies
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white/60">›</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white/60">›</span> Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/refund-policy"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white/60">›</span> Cancellation &amp; Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white/60">›</span> Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-white/60">›</span> Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-white/20 pb-2">
              Bangalore Support &amp; Service
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                <span className="leading-tight text-white/90">
                  {BUSINESS_DETAILS.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white/80 shrink-0" />
                <a 
                  href={`tel:${BUSINESS_DETAILS.phone}`} 
                  className="text-white font-bold hover:underline"
                >
                  {BUSINESS_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white/80 shrink-0" />
                <a 
                  href={`mailto:${BUSINESS_DETAILS.email}`} 
                  className="hover:text-white break-all transition-colors"
                >
                  {BUSINESS_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Localities Tags */}
        <div className="pt-6 border-t border-white/10 mb-8">
          <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-3">
            Service Areas in Bangalore:
          </p>
          <div className="flex flex-wrap gap-1.5">
            {BANGALORE_LOCALITIES.map((loc, idx) => (
              <span 
                key={idx}
                className="text-[11px] bg-white/10 hover:bg-white/20 text-white px-2 py-0.5 rounded transition-colors"
              >
                {loc}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-6 border-t border-white/10 text-center space-y-3">
          <p className="text-[11px] text-white/70 max-w-4xl mx-auto leading-relaxed">
            {BUSINESS_DETAILS.disclaimer}
          </p>
          <p className="text-[11px] text-white/50">
            Registered MSME Enterprise (UDYAM-KR-03-0561611) • Bangalore, Karnataka
          </p>
        </div>

      </div>
    </footer>
  );
};
