import React from 'react';

import { Star } from 'lucide-react';
import { HOMEPAGE_TESTIMONIALS } from '../data/content';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div 
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            Verified Customer Reviews
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What Our Bangalore Customers <span className="bg-gradient-to-r from-[#0c54a0] via-sky-600 to-teal-600 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Real feedback from homeowners and tenants across Bangalore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOMEPAGE_TESTIMONIALS.map((review, index) => (
            <div 
              key={review.id} 
              className="bg-white rounded-[24px] p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400">{review.date}</span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <p className="text-base font-bold text-slate-900">{review.name}</p>
                <p className="text-xs text-sky-600 font-medium">{review.locality}</p>
                <span className="inline-block mt-2 text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono">
                  {review.brandServiced}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
