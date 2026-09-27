import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

export const metadata: Metadata = {
  title: 'Refund & Return Policy | RO Service Centre 24x7 Bangalore',
  description: 'Cancellation and refund terms for doorstep RO water purifier repair, inspection fee policy, and 30-day labor warranty in Bangalore.',
  alternates: {
    canonical: 'https://www.roservicecentre24x7.in/refund-policy',
  },
};

export default function RefundPolicyPage() {
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
              Refund &amp; Return Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Effective Date / Last Updated: August 6, 2026
            </p>
          </div>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">1. Service &amp; Parts Warranty Coverage</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                {BUSINESS_DETAILS.name} provides doorstep repair services for RO water purifiers in Bangalore. All our service calls include:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>30-Day Doorstep Labor Warranty on all repairs</li>
                <li>Manufacturer-backed warranty on replacement spare parts (Pumps, SMPS Adapters, RO Membranes)</li>
                <li>Free re-inspection if the same technical fault recurs within the warranty window</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">2. Booking Cancellation &amp; Visiting Fee</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                If you cancel your booking prior to technician dispatch, 100% of pre-paid amounts (if any) are refunded immediately.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm">
                If a technician arrives at your premises and performs a physical diagnostic check, a nominal Visiting &amp; Inspection fee of ₹299 applies if you choose not to proceed with the suggested repair.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">3. Unsatisfactory Service Refunds</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                If a reported fault cannot be resolved during our 30-day warranty re-visit, a full or partial labor refund will be processed back to your original payment method within 5 to 7 business days.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">4. AMC Cancellation &amp; Refund Terms</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Annual Maintenance Contracts (AMC) canceled within 7 days of purchase without any service utilization are eligible for a 90% refund. Once periodic filter replacements or emergency visits have been utilized, AMC refunds are calculated pro-rata.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-8">
              <p className="text-xs text-slate-500 font-medium">
                For refund processing or warranty support, please call our service desk at <a href={`tel:${BUSINESS_DETAILS.phone}`} className="text-sky-600 font-bold hover:underline">{BUSINESS_DETAILS.phone}</a>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
