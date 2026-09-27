import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

export const metadata: Metadata = {
  title: 'Cookie Policy | RO Service Centre 24x7 Bangalore',
  description: 'Cookie Policy for RO Service Centre 24x7 Bangalore. Information regarding cookies, session storage and analytics.',
  alternates: {
    canonical: 'https://www.roservicecentre24x7.in/cookie-policy',
  },
};

export default function CookiePolicyPage() {
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
              Cookie Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Effective Date / Last Updated: August 6, 2026
            </p>
          </div>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">1. What Are Cookies?</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                Cookies are small text files placed on your computer or mobile device when you browse {BUSINESS_DETAILS.name}. They allow our website to retrieve details for your visit to make browsing easier and preserve form inputs.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">2. How We Use Cookies</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                We use essential functional cookies and session storage on {BUSINESS_DETAILS.name} to:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Remember your selected RO Brand and location pincode in lead forms</li>
                <li>Maintain fast loading times and smooth mobile interface transitions</li>
                <li>Analyze anonymous site traffic patterns to optimize customer booking steps</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">3. Managing Cookie Preferences</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                You can modify or disable cookie settings in your web browser (Google Chrome, Mozilla Firefox, Apple Safari). Disabling essential cookies may affect form submission convenience.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
