import Link from 'next/link';
import { Phone, Home, ArrowLeft } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-3xl border border-slate-200/80 shadow-lg space-y-6">
        <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mx-auto text-2xl font-black">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-black text-slate-900">Page Not Found</h1>
          <p className="text-sm text-slate-600">
            The page you are looking for might have been moved, removed, or is temporarily unavailable.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Link
            href="/"
            className="flex-1 px-4 py-3 rounded-xl bg-[#1d63d8] hover:bg-[#154db0] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
          <a
            href={`tel:${BUSINESS_DETAILS.phone}`}
            className="flex-1 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call Support</span>
          </a>
        </div>
      </div>
    </div>
  );
}
