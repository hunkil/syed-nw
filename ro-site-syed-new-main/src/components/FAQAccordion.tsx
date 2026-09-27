'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQItem } from '@/src/types';

interface FAQAccordionProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  brandColor?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Everything you need to know about our RO repair & maintenance services in Bangalore.',
  brandColor,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full">
      {title && (
        <div 
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1d63d8] mb-2 tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm sm:text-base text-slate-600">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const activeColor = brandColor || '#0c54a0';
          return (
            <div
              key={index}
              style={isOpen ? { borderColor: `${activeColor}40` } : undefined}
              className={`rounded-[20px] transition-colors overflow-hidden border ${
                isOpen
                  ? 'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.04)]'
                  : 'bg-white border-slate-200/80 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-bold text-slate-900 text-base sm:text-lg">
                  {faq.question}
                </span>
                <span 
                  style={isOpen ? { backgroundColor: `${activeColor}15`, color: activeColor } : undefined}
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </span>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
