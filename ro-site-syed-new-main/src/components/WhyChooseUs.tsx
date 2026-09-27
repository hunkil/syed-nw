import React from 'react';

import { UserCheck, Zap, ShieldCheck, Tag, Clock, Award } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/content';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-8 h-8 text-[#0c54a0]" />;
      case 'Zap':
        return <Zap className="w-8 h-8 text-[#0c54a0]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-8 h-8 text-[#0c54a0]" />;
      case 'Tag':
        return <Tag className="w-8 h-8 text-[#0c54a0]" />;
      case 'Clock':
        return <Clock className="w-8 h-8 text-[#0c54a0]" />;
      case 'Award':
        return <Award className="w-8 h-8 text-[#0c54a0]" />;
      default:
        return <ShieldCheck className="w-8 h-8 text-[#0c54a0]" />;
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#f4f7f9] border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] tracking-tight">
            A Legacy of <span className="bg-gradient-to-r from-[#0c54a0] via-sky-600 to-teal-600 bg-clip-text text-transparent">Trust & Quality</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3">
            The preferred choice for RO servicing across Bangalore
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US_POINTS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-[24px] bg-white border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.04)] text-center flex flex-col items-center hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-shadow group"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{item.title}</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
