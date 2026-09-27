'use client';

import React from 'react';
import { Check, Phone, ShieldCheck, Tag, ArrowRight, HelpCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

interface PricingPlan {
  title: string;
  badge?: string;
  popular?: boolean;
  highlight: string;
  subHighlight: string;
  description: string;
  features: string[];
}

const PRICING_PLANS: PricingPlan[] = [
  {
    title: 'Inspection & Diagnosis',
    badge: '100% Adjustable',
    highlight: 'Comprehensive Diagnosis',
    subHighlight: 'Adjusted in final repair bill upon approval',
    description: 'Complete fault diagnosis, raw vs purified TDS check, electrical and pump testing.',
    features: [
      'Adjusted in final repair bill',
      'Doorstep arrival in 60–90 mins',
      'Digital TDS meter testing',
      'Transparent quote before work',
    ],
  },
  {
    title: 'Routine Service & Cleaning',
    badge: 'Most Popular',
    popular: true,
    highlight: 'Deep Sanitization Care',
    subHighlight: 'Chemical tank & pipe flush',
    description: 'Comprehensive chemical sanitization, housing descaling, and high-pressure pipe flush.',
    features: [
      'Complete tank & body sanitization',
      'Sediment bowl & housing scrub',
      'Internal pressure & leak check',
      'Free raw & pure TDS verification',
      '30-day labor warranty',
    ],
  },
  {
    title: 'Filter Replacement Pack',
    badge: 'OEM Compatible',
    highlight: 'Certified OEM Filter Pack',
    subHighlight: 'Sediment, carbon & post-carbon stages',
    description: 'Essential filtration renewal for muddy, odorous, or slow-dripping water output.',
    features: [
      'High-micron PP spun sediment filter',
      'Activated pre-carbon block',
      'Post-carbon polishing cartridge',
      'O-ring & pipe connector replacement',
      'Certified genuine quality',
    ],
  },
  {
    title: 'RO Membrane & TDS Tuning',
    badge: 'High Rejection',
    highlight: 'High-Rejection RO Membrane',
    subHighlight: 'Restores sweet, safe drinking water',
    description: 'Replaces choked reverse osmosis membrane to restore sweet, pure drinking water.',
    features: [
      '75 / 80 / 100 GPD high-TDS membrane',
      'New flow restrictor (FR) valve included',
      'TDS adjusted to healthy 70–120 range',
      'Works for borewell & tanker water',
      'Up to 1-year membrane life',
    ],
  },
];

interface PricingTransparencyProps {
  brandName?: string;
  onBookClick?: () => void;
}

export const PricingTransparency: React.FC<PricingTransparencyProps> = ({
  brandName = 'RO',
  onBookClick,
}) => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#f8fbfe] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0066cc] text-xs font-bold uppercase tracking-wider mb-3">
            <Tag className="w-3.5 h-3.5" />
            Service Packages &amp; Care Plans
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#002b66] tracking-tight leading-tight">
            Specialized {brandName} Care &amp; Maintenance Packages
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Professional doorstep service tailored for all purifier models. Senior technicians carry genuine components and provide a written estimate with zero hidden extras before any repair starts.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {PRICING_PLANS.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? 'bg-white border-2 border-[#0066cc] shadow-[0_12px_40px_rgba(0,102,204,0.12)] scale-[1.02]'
                  : 'bg-white border border-slate-200/80 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0066cc] text-white text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                  {plan.badge}
                </div>
              )}

              <div>
                {!plan.popular && plan.badge && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded mb-3">
                    {plan.badge}
                  </span>
                )}
                
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {plan.title}
                </h3>
                
                <p className="text-xs text-slate-500 mt-1 mb-4 min-h-[36px]">
                  {plan.description}
                </p>

                <div className="mb-6 pt-3 pb-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-sm font-bold text-[#002b66]">
                      {plan.highlight}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1">
                    {plan.subHighlight}
                  </p>
                </div>

                <div className="space-y-2.5 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={`tel:${BUSINESS_DETAILS.helplineNumber}`}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-[#0066cc] hover:bg-[#0052a3] text-white shadow-sm'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                  }`}
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {BUSINESS_DETAILS.helplineDisplay}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
