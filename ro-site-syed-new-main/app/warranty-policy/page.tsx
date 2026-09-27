import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

export const metadata: Metadata = {
  title: 'Warranty & Guarantee Policy | RO Service Center Online 24x7',
  description: 'Detailed warranty terms for RO water purifier repair, genuine filter replacements, and 30-day labor warranty by RO Service Center Online 24x7.',
  alternates: {
    canonical: 'https://www.roservicecentre24x7.in/warranty-policy',
  },
};

export default function WarrantyPolicyPage() {
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
              Warranty &amp; Service Guarantee Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Effective Date / Last Updated: January 1, 2026
            </p>
          </div>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                1. 30-Day Labor &amp; Service Guarantee
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Every repair, filter change, and technical service executed by {BUSINESS_DETAILS.name}&apos;s certified technicians comes with an ironclad <strong>30-day labor warranty</strong>. If the exact same problem reoccurs within 30 days of service:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>We will dispatch a technician for a free re-visit with zero visiting or inspection charge.</li>
                <li>Any workmanship defect will be rectified immediately at no added labor cost.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                2. Spare Parts &amp; Component Warranty
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                We supply high-grade, 100% compatible genuine spare parts. Replacement parts carry distinct warranty coverage from the invoice date:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <div className="text-xs font-bold text-slate-900">Booster Pumps</div>
                  <div className="text-sm font-extrabold text-blue-600 mt-1">6 - 12 Months</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Electrical replacement</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <div className="text-xs font-bold text-slate-900">SMPS Power Adapters</div>
                  <div className="text-sm font-extrabold text-blue-600 mt-1">6 Months</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Direct replacement</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
                  <div className="text-xs font-bold text-slate-900">RO Membranes</div>
                  <div className="text-sm font-extrabold text-blue-600 mt-1">Standard Warranty</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">High TDS rejection</div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600" />
                3. Exclusions from Warranty
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Warranty coverage does not apply under the following circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Damage resulting from extreme voltage fluctuations, lightning strikes, or external flooding.</li>
                <li>Physical tampering, mishandling, or third-party technician repairs after our service.</li>
                <li>Feed water TDS exceeding manufacturer operational thresholds without a pre-filter.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                4. Independent Service Center Disclaimer
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                <strong>Notice:</strong> {BUSINESS_DETAILS.name} is an independent multi-brand water purifier service center. We are not an official authorized service center, franchise, or direct subsidiary of Kent, Aquaguard, Pureit, AO Smith, Livpure, Havells, or other trademark owners. Brand names are referenced strictly for identification and compatibility purposes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
