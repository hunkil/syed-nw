'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';
import { PageRoute } from '@/src/types';
import { getBrandTheme } from '@/src/utils/brandTheme';

interface CallWidgetsProps {
  currentRoute?: PageRoute;
  lastBrandRoute?: PageRoute | null;
  customPhone?: string;
}

export const CallWidgets: React.FC<CallWidgetsProps> = ({
  currentRoute: propCurrentRoute,
  lastBrandRoute,
  customPhone,
}) => {
  const pathname = usePathname() || '/';
  const currentRoute = propCurrentRoute || (pathname as PageRoute);
  const phone = customPhone || BUSINESS_DETAILS.phone;
  const telLink = `tel:${phone}`;
  const theme = getBrandTheme(currentRoute, lastBrandRoute);

  return (
    <>
      {/* Minimal & Aesthetic Floating Call Button */}
      <div 
        id="floating-call-widget" 
        className="fixed bottom-6 sm:bottom-7 right-4 sm:right-6 z-50 select-none"
      >
        <a
          href={telLink}
          aria-label={`Call ${phone}`}
          title={`Call ${phone}`}
          className="group relative flex items-center"
        >
          {/* Minimalist Hover Tooltip */}
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/90 text-white text-xs font-semibold shadow-md backdrop-blur-sm mr-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none whitespace-nowrap">
            <span>Call {phone}</span>
          </span>

          {/* Minimalist Circular Button with Subtle Glow */}
          <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white/95 backdrop-blur-md flex items-center justify-center border border-blue-200/80 animate-subtle-glow group-hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
            {/* Soft Ambient Aura */}
            <div 
              style={{ backgroundColor: theme.primary || '#0047ba' }} 
              className="absolute inset-0 rounded-full opacity-15 blur-sm -z-10 group-hover:opacity-30 transition-opacity" 
            />

            {/* Subtle Side-to-Side Rocking Tilt Phone Icon */}
            <div className="flex items-center justify-center animate-phone-rock">
              <Phone 
                style={{ fill: theme.primary || '#0047ba', color: theme.primary || '#0047ba' }}
                className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-300 group-hover:scale-110" 
              />
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
