import React from 'react';

import { CalendarCheck, Truck, ClipboardCheck, CheckCircle } from 'lucide-react';

export const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: 'Book Service',
      description: 'Fill out our online form or call to book.',
      icon: <CalendarCheck className="w-8 h-8 text-[#0c54a0]" />,
    },
    {
      stepNumber: '02',
      title: 'Doorstep Visit',
      description: 'Technician reaches you within 60–90 mins.',
      icon: <Truck className="w-8 h-8 text-[#0c54a0]" />,
    },
    {
      stepNumber: '03',
      title: 'Diagnosis & Quote',
      description: 'Transparent quote post diagnosis.',
      icon: <ClipboardCheck className="w-8 h-8 text-[#0c54a0]" />,
    },
    {
      stepNumber: '04',
      title: 'Resolution',
      description: 'Repair finished with genuine spares.',
      icon: <CheckCircle className="w-8 h-8 text-[#0c54a0]" />,
    },
  ];

  return (
    <section id="process-section" className="py-16 sm:py-24 bg-[#f4f7f9] border-t border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-black text-[#1a1a1a] tracking-tight">
            How Our Service <span className="bg-gradient-to-r from-[#0c54a0] via-sky-600 to-teal-600 bg-clip-text text-transparent">Works</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[24px] p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] text-center flex flex-col items-center hover:shadow-lg transition-shadow group"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{step.title}</h3>
              <p className="text-[15px] text-slate-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
