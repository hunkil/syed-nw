import React from 'react';
import Image from 'next/image';

import { ChevronRight } from 'lucide-react';
import { BRAND_PAGES_DATA } from '../data/content';
import { PageRoute } from '../types';

interface BrandsGridProps {
  onNavigate: (route: PageRoute) => void;
}

export const BrandsGrid: React.FC<BrandsGridProps> = ({ onNavigate }) => {
  const brandKeys = Object.keys(BRAND_PAGES_DATA);

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div 
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] tracking-tight mb-4">
            Brands We Service Daily
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Our technicians are trained to repair all major water purifier brands with genuine spare parts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandKeys.map((key, index) => {
            const brand = BRAND_PAGES_DATA[key];
            return (
              <div
                key={brand.id}
                onClick={() => onNavigate(brand.slug)}
                className="group cursor-pointer bg-[#f4f7f9] border border-transparent hover:border-[#0c54a0]/20 rounded-[24px] p-8 transition-all flex flex-col justify-between hover:shadow-lg"
              >
                <div>
                  {brand.logoUrl && (
                    <div className="bg-white p-3 rounded-xl border border-slate-200/80 w-fit mb-4 shadow-sm flex items-center justify-center">
                      <Image
                        src={brand.logoUrl}
                        alt={`${brand.name} Logo`}
                        width={140}
                        height={36}
                        className="h-8 sm:h-9 w-auto object-contain max-w-[140px]"
                      />
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#0c54a0] transition-colors">
                    {brand.name}
                  </h3>

                  <p className="text-[15px] text-slate-600 line-clamp-2">
                    {brand.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/60 flex items-center justify-between text-[#0c54a0] font-bold text-[15px]">
                  <span>{brand.name} Repair & Service</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
