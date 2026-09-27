import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

export const metadata: Metadata = {
  title: 'Privacy Policy | RO Service Centre 24x7 Bangalore',
  description: 'Privacy Policy for RO Service Centre 24x7. Learn how we handle and protect customer information for doorstep RO water purifier repair in Bangalore.',
  alternates: {
    canonical: 'https://www.roservicecentre24x7.in/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back to Home */}
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
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Effective Date / Last Updated: August 6, 2026
            </p>
          </div>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">1. Information We Collect</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                When you request an RO repair, installation, or AMC service through {BUSINESS_DETAILS.name}'s website, we collect personal contact details required to fulfill your doorstep service request:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Full Name and Contact Number</li>
                <li>Bangalore Delivery Area / Pincode &amp; Street Address</li>
                <li>Water Purifier Brand &amp; Problem Description</li>
                <li>Preferred Date &amp; Time Slot for Service Visit</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">2. How We Use Your Information</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                We use your submitted information strictly to facilitate doorstep water purifier repair and maintenance services:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Dispatching our nearest certified technician in Bangalore to your location</li>
                <li>Providing transparent service cost estimates and diagnostic quotes</li>
                <li>Verifying and tracking 30-day labor and spare part warranty claims</li>
                <li>Communicating service status updates and AMC renewal reminders</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">3. Data Sharing &amp; Security</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                We do NOT sell, trade, or rent your personal data to third-party marketers. Your contact details are shared exclusively with the assigned field technician for the sole purpose of visiting your home and executing the requested repair.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">4. Cookies &amp; Website Analytics</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                By accessing {BUSINESS_DETAILS.name}, you agree to the use of cookies in accordance with our Cookie Policy. Cookies help retrieve user preferences to enable website functionality and make navigation smoother.
              </p>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">5. Data Retention &amp; Your Rights</h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                You may request modification or complete removal of your customer service record from our database at any time by contacting our support line or email.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-6 mt-8">
              <p className="text-xs text-slate-500 font-medium">
                For questions regarding this policy or data inquiries, contact us at <a href={`mailto:${BUSINESS_DETAILS.email}`} className="text-sky-600 font-bold hover:underline">{BUSINESS_DETAILS.email}</a> or call our support line <a href={`tel:${BUSINESS_DETAILS.phone}`} className="text-sky-600 font-bold hover:underline">{BUSINESS_DETAILS.phone}</a>.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
