import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, MapPin, Mail, Clock, MessageSquare } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

export const metadata: Metadata = {
  title: 'Contact Us | RO Service Center Online 24x7 Bangalore',
  description: 'Contact RO Service Center Online 24x7. Fast doorstep RO water purifier repair, helpline numbers, and email support in Bangalore.',
  alternates: {
    canonical: 'https://www.roservicecentre24x7.in/contact',
  },
};

export default function ContactPage() {
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
              Contact Us
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              We&apos;re here 24 hours a day, 7 days a week to support your drinking water needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0066cc] flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Customer Helpline</h3>
                <p className="text-xs text-slate-500 mt-0.5">Instant booking &amp; emergency support</p>
                <a href={`tel:${BUSINESS_DETAILS.phone}`} className="text-sm font-extrabold text-[#0066cc] hover:underline mt-1 block">
                  {BUSINESS_DETAILS.formattedPhone}
                </a>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">WhatsApp Assistance</h3>
                <p className="text-xs text-slate-500 mt-0.5">Share photos, videos &amp; location pin</p>
                <a href={`https://wa.me/${BUSINESS_DETAILS.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-sm font-extrabold text-emerald-600 hover:underline mt-1 block">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Email Support</h3>
                <p className="text-xs text-slate-500 mt-0.5">For queries, AMC invoices &amp; feedback</p>
                <a href={`mailto:${BUSINESS_DETAILS.email}`} className="text-sm font-extrabold text-purple-700 hover:underline mt-1 block">
                  {BUSINESS_DETAILS.email}
                </a>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Working Hours</h3>
                <p className="text-xs text-slate-500 mt-0.5">Available every day of the week</p>
                <p className="text-sm font-bold text-slate-800 mt-1">
                  {BUSINESS_DETAILS.workingHours}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-500 leading-relaxed">
            <p className="font-semibold text-slate-700 mb-1">Brand Notice &amp; Disclaimer:</p>
            <p>
              {BUSINESS_DETAILS.name} is an independent multi-brand water purifier service center in Bangalore. We are not an authorized service center or official branch of Kent, Aquaguard, Pureit, AO Smith, Livpure, or Havells. All trademarks belong to their respective proprietary holders.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
