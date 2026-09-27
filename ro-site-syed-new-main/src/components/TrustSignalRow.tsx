import React from 'react';
import { Award, Clock, ShieldCheck, Users, Wrench } from 'lucide-react';

export const TrustSignalRow: React.FC = () => {
  const signals = [
    {
      icon: Clock,
      title: '60–90 Min Arrival',
      subtitle: 'Fast Doorstep Tech',
    },
    {
      icon: ShieldCheck,
      title: '30-Day Warranty',
      subtitle: '100% Labor Guarantee',
    },
    {
      icon: Wrench,
      title: '100% Genuine Spares',
      subtitle: 'OEM Grade Filters',
    },
    {
      icon: Users,
      title: '10,000+ Serviced',
      subtitle: '4.8★ Rated in Bangalore',
    },
    {
      icon: Award,
      title: 'Govt. Certified',
      subtitle: 'UDYAM-KR-03-0561611',
    },
  ];

  return (
    <div className="w-full bg-[#f8fbff] border-y border-blue-100/80 py-3 sm:py-3.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {signals.map((signal, idx) => {
            const Icon = signal.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-1.5 sm:p-2 rounded-xl bg-white/80 border border-slate-200/60 shadow-2xs"
              >
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-blue-50 text-[#0066cc] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs sm:text-[13px] font-bold text-slate-900 leading-tight truncate">
                    {signal.title}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium truncate">
                    {signal.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
