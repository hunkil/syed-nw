import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

export const metadata: Metadata = {
  title: 'Terms and Conditions | RO Service Centre 24x7 Bangalore',
  description: 'Terms and conditions for doorstep RO water purifier repair, maintenance, installation and filter replacement services by RO Service Centre 24x7 in Bangalore.',
  alternates: {
    canonical: 'https://www.roservicecentre24x7.in/terms-of-service',
  },
};

export default function TermsOfServicePage() {
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
              Terms and Conditions
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Effective Date / Last Updated: August 6, 2026
            </p>
          </div>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">Welcome to {BUSINESS_DETAILS.name}!</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                These terms and conditions outline the rules and regulations for the use of {BUSINESS_DETAILS.name}'s Website and our doorstep service platform in Bangalore.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm">
                By accessing this website we assume you accept these terms and conditions. Do not continue to use {BUSINESS_DETAILS.name} if you do not agree to take all of the terms and conditions stated on this page.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">Cookies</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                We employ the use of cookies. By accessing {BUSINESS_DETAILS.name}, you agreed to use cookies in agreement with {BUSINESS_DETAILS.name}'s Privacy Policy.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">License &amp; Intellectual Property</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Unless otherwise stated, {BUSINESS_DETAILS.name} and/or its licensors own the intellectual property rights for all material on {BUSINESS_DETAILS.name}. All intellectual property rights are reserved. You may access this from {BUSINESS_DETAILS.name} for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">Disclaimer of Warranties</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                To the maximum extent permitted by applicable law, {BUSINESS_DETAILS.name} provides independent doorstep repair services for all major RO water purifiers in Bangalore.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-8">
              <p className="text-xs text-slate-500 font-medium">
                For questions regarding these terms, contact us at <a href={`mailto:${BUSINESS_DETAILS.email}`} className="text-sky-600 font-bold hover:underline">{BUSINESS_DETAILS.email}</a>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
