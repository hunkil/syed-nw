import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Clock, ShieldCheck, HelpCircle } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

export const metadata: Metadata = {
  title: 'Cancellation & Rescheduling Policy | RO Service Center Online 24x7',
  description: 'Doorstep water purifier service booking cancellation, rescheduling, and visiting fee terms for RO Service Center Online 24x7.',
  alternates: {
    canonical: 'https://www.roservicecentre24x7.in/cancellation-policy',
  },
};

export default function CancellationPolicyPage() {
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
              Cancellation &amp; Rescheduling Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Effective Date / Last Updated: January 1, 2026
            </p>
          </div>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                1. Booking Cancellation Window
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Customers may cancel or reschedule their service request at any time prior to the technician&apos;s physical arrival at the premises without any penalty or cancellation charges.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>To cancel or reschedule, please call our 24x7 helpline at <strong>{BUSINESS_DETAILS.formattedPhone}</strong> or notify the assigned technician directly.</li>
                <li>If you have made any advance online deposit or prepaid booking, 100% of the amount will be processed for immediate refund.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                2. Doorstep Inspection &amp; Visiting Fee
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Once a certified technician arrives at your doorstep and conducts a multi-point physical diagnostic inspection of your RO system:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>If you approve the quotation and proceed with the repair or filter replacement, the inspection/visiting fee is <strong>completely waived or adjusted</strong> into the total invoice.</li>
                <li>If you choose not to proceed with the suggested repair after the technician has conducted the on-site inspection, a standard visiting fee of ₹299 applies to cover technician travel and diagnostic labor.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                3. Annual Maintenance Contract (AMC) Cancellation
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Annual Maintenance Contracts (AMC) can be cancelled within 15 days of activation if no complimentary filter replacement or major spare component has been consumed. A prorated refund will be calculated based on services delivered.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                4. Brand Disclaimer
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
