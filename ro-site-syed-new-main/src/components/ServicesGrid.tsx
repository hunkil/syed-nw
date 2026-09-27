import React from 'react';

import {
  Wrench,
  Download,
  Filter,
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle,
  ChevronRight
} from 'lucide-react';
import { SERVICES_LIST } from '../data/content';

interface ServicesGridProps {
  onSelectService?: (serviceName: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-8 h-8 text-[#0c54a0]" />;
      case 'Download':
        return <Download className="w-8 h-8 text-[#0c54a0]" />;
      case 'Filter':
        return <Filter className="w-8 h-8 text-[#0c54a0]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#0c54a0]" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-[#0c54a0]" />;
      case 'Activity':
        return <Activity className="w-8 h-8 text-[#0c54a0]" />;
      default:
        return <Wrench className="w-8 h-8 text-[#0c54a0]" />;
    }
  };

  const handleBook = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    } else {
      document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="services-section" className="py-16 sm:py-24 bg-[#f4f7f9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div 
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] tracking-tight mb-4">
            Comprehensive <span className="bg-gradient-to-r from-[#0c54a0] via-sky-600 to-teal-600 bg-clip-text text-transparent">RO Services</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From basic filter changes to complete AMC plans, we ensure your purifier delivers 100% safe drinking water.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map((service, index) => (
            <div
              key={service.id}
              className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col group relative transition-shadow hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
            >
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">
                  {service.title}
                </h3>

                <ul className="space-y-4 mb-8 border-t border-slate-100 pt-6">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start justify-between gap-4 text-[15px] text-slate-700">
                      <span className="leading-snug">{feat}</span>
                      <CheckCircle className="w-6 h-6 text-[#10b981] fill-[#10b981] text-white shrink-0" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <button
                  onClick={() => handleBook(service.title)}
                  className="inline-flex items-center gap-1.5 text-[#0c54a0] font-bold text-[15px] hover:text-blue-700 transition-colors group/btn"
                >
                  <span>Book {service.title}</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
