import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

export const metadata: Metadata = {
  title: 'Disclaimer & Brand Notice | RO Service Centre 24x7 Bangalore',
  description: 'Independent service center disclaimer and brand trademark notices for RO Service Centre 24x7 Bangalore.',
  alternates: {
    canonical: 'https://www.roservicecentre24x7.in/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 hover:text-sky-700 bg-white border border-slate-200 px-3.5 py-2 rounded-xl mb-6 shadow-2xs transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
          <div className="border-b border-slate-100 pb-6 mb-8">
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Disclaimer &amp; Brand Notice
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Effective Date / Last Updated: August 6, 2026
            </p>
          </div>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">1. Independent Service Provider Status</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                {BUSINESS_DETAILS.name} is an independent multi-brand water purifier sales, repair, and doorstep service provider operating in Bangalore, Karnataka.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm">
                We are NOT an official authorized service center, franchise, or direct subsidiary of Kent RO Systems, Eureka Forbes (Aquaguard), Pureit, AO Smith India, Livpure, or any other trademark owner unless explicitly stated.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">2. Trademarks &amp; Brand Name Usage</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                All brand names, product titles, logos, and trademarks (including Kent, Aquaguard, Pureit, AO Smith, Livpure, Havells) displayed on this website belong to their respective registered trademark owners.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm">
                Reference to these brand names is strictly for identification, compatibility, and descriptive purposes to inform customers about the types of purifiers we service.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">3. Accuracy &amp; Guarantee Disclaimer</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                While we strive to provide accurate service details and transparent pricing, actual repair costs may depend on individual machine age, TDS levels, electrical conditions, and replacement spare parts required upon physical inspection.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
