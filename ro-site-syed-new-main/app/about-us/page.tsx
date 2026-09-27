import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ShieldCheck, Droplets, MapPin, Phone, Mail } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

export const metadata: Metadata = {
  title: 'About Us | RO Service Center Online 24x7 Bangalore',
  description: 'About RO Service Center Online 24x7 - Bangalore leading independent multi-brand doorstep water purifier service, repair, and AMC provider.',
  alternates: {
    canonical: 'https://www.roservicecentre24x7.in/about-us',
  },
};

export default function AboutUsPage() {
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
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-blue-200">
              <Droplets className="w-3.5 h-3.5" />
              <span>Bangalore&apos;s Independent Multi-Brand Specialist</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              About RO Service Center Online 24x7
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Serving Bangalore Households &amp; Commercial Establishments Since 2018
            </p>
          </div>

          <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Our Mission: Pure Water for Every Family
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm">
                RO Service Center Online 24x7 was established with a singular objective: providing rapid, reliable, transparent, and affordable doorstep repair and maintenance for all domestic and commercial RO water purifiers across Bangalore.
              </p>
              <p className="text-slate-600 text-xs sm:text-sm">
                With a fleet of over 50+ background-verified, certified technicians distributed across North, South, East, and West Bangalore, we guarantee quick doorstep arrival within 60 to 90 minutes of booking.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  100% Genuine Spare Parts
                </div>
                <p className="text-xs text-slate-600">
                  We use brand-compatible genuine filters, high-pressure booster pumps, copper wound adapters, and genuine RO membranes.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  30-Day Labor Warranty
                </div>
                <p className="text-xs text-slate-600">
                  Every service visit is backed by our signature 30-day service guarantee and free re-inspection support.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-slate-900">
                Independent Brand Disclaimer
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                <strong>Disclaimer:</strong> {BUSINESS_DETAILS.name} is an independent service center and is not directly associated with, authorized by, or franchised by Kent RO Systems Ltd, Eureka Forbes (Aquaguard), Hindustan Unilever (Pureit), AO Smith India, Livpure, or Havells. All brand trademarks belong to their respective proprietary holders and are used solely for identification and compatibility descriptions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
