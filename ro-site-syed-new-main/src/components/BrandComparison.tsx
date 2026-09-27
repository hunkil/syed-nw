'use client';

import React from 'react';
import { Check, X, ShieldAlert, Zap, Phone, Award, Clock } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

interface ComparisonRow {
  metric: string;
  ourService: string;
  brandCenter: string;
  ourHighlight?: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    metric: 'Doorstep Response Time',
    ourService: '60–90 Minutes Express Arrival (Anywhere in Bangalore)',
    brandCenter: '3 to 5 Business Days Waiting Queue',
    ourHighlight: true,
  },
  {
    metric: 'Visiting & Inspection Charge',
    ourService: '100% Adjusted against final repair bill upon approval',
    brandCenter: 'Costly non-refundable inspection fee',
    ourHighlight: true,
  },
  {
    metric: 'Same-Day Filter Replacement',
    ourService: 'Yes — Technician carries stock of genuine membranes & filters',
    brandCenter: 'Usually requires a second visit after placing part request',
  },
  {
    metric: 'Pricing Transparency',
    ourService: 'Itemized quote upfront before technician touches the purifier',
    brandCenter: 'Fixed high-bracket pricing without component flexibility',
  },
  {
    metric: 'Post-Service Warranty',
    ourService: '30-Day Doorstep Labor Warranty + Genuine Part Guarantees',
    brandCenter: 'Often limited to replacement parts only, visiting fees re-applied',
  },
  {
    metric: 'Multi-Brand Expertise',
    ourService: 'Servicing Kent, Aquaguard, Pureit, AO Smith, LG, Livpure in 1 call',
    brandCenter: 'Only handles their single brand; separate technicians required',
  },
  {
    metric: 'Weekend & Evening Support',
    ourService: 'Open 8:00 AM – 9:00 PM All 7 Days (Including Sundays & Holidays)',
    brandCenter: 'Limited Monday–Saturday 10:00 AM – 5:00 PM corporate hours',
  },
];

interface BrandComparisonProps {
  brandName?: string;
  onBookClick?: () => void;
}

export const BrandComparison: React.FC<BrandComparisonProps> = ({
  brandName = 'Official Brands',
  onBookClick,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#f8fbfe] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0066cc] text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            Specialist Advantage
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#002b66] tracking-tight leading-tight">
            Why Bangalore Households Choose Our {brandName} Care
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Skip the 3 to 5 day call-center backlogs and inflated corporate rates. Get same-day certified doorstep attention with transparent quotes and direct technician accountability.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden mb-12">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-50/80 border-b border-slate-200 p-4 sm:p-6 font-bold text-xs sm:text-sm">
            <div className="col-span-4 sm:col-span-4 text-slate-700">Service Feature</div>
            <div className="col-span-4 sm:col-span-4 text-[#0066cc] flex items-center gap-1.5 font-extrabold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              RO Service Centre 24x7
            </div>
            <div className="col-span-4 sm:col-span-4 text-slate-500">
              {brandName} Call Center
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100">
            {COMPARISON_DATA.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 items-center text-xs sm:text-sm hover:bg-blue-50/30 transition-colors"
              >
                <div className="col-span-4 sm:col-span-4 font-bold text-slate-900 pr-2">
                  {row.metric}
                </div>

                <div className="col-span-4 sm:col-span-4 text-[#002b66] font-semibold pr-2 flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span className={row.ourHighlight ? 'text-[#0066cc] font-bold' : ''}>
                    {row.ourService}
                  </span>
                </div>

                <div className="col-span-4 sm:col-span-4 text-slate-500 flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{row.brandCenter}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* CTA Banner */}
        <div className="text-center pt-2">
          <a
            href={`tel:${BUSINESS_DETAILS.phone}`}
            id="speak-technician-cta"
            aria-label={`Speak with Bangalore Technician on ${BUSINESS_DETAILS.formattedPhone}`}
            className="inline-flex items-center justify-center gap-2.5 bg-[#0066cc] hover:bg-[#0052a3] text-white font-extrabold text-xs min-[420px]:text-sm sm:text-base py-3.5 sm:py-4 px-5 sm:px-8 rounded-xl shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer max-w-full"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-current shrink-0" />
            <span className="truncate">Speak with Bangalore Technician: <strong className="underline underline-offset-2">{BUSINESS_DETAILS.formattedPhone}</strong></span>
          </a>
          <p className="text-xs text-slate-500 mt-2.5 font-medium">
            Average technician arrival time across Bangalore: 60–90 minutes
          </p>
        </div>

      </div>
    </section>
  );
};
