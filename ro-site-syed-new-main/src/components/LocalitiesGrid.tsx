import React, { useState } from 'react';

import { MapPin, Search, Check } from 'lucide-react';
import { BANGALORE_LOCALITIES } from '../data/content';

export const LocalitiesGrid: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocalities = BANGALORE_LOCALITIES.filter((loc) =>
    loc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="localities-section" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <span className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-teal-700" />
            Coverage Across Bangalore
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            RO Service Areas Serviced in <span className="bg-gradient-to-r from-[#0c54a0] via-sky-600 to-teal-600 bg-clip-text text-transparent">Bangalore</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Our local technicians are stationed across East, West, North, and South Bangalore to reach your doorstep within 60 minutes.
          </p>
        </div>

        {/* Search bar */}
        <div className="max-w-md mx-auto mb-8 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search your Bangalore locality (e.g. Whitefield, HSR, Indiranagar)..."
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-3">
          {filteredLocalities.map((loc, idx) => (
            <div
              key={idx}
              className="p-2.5 bg-slate-50 hover:bg-sky-50 border border-slate-200/70 hover:border-sky-300 rounded-xl text-xs font-semibold text-slate-800 hover:text-sky-700 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
              <span className="truncate">{loc}</span>
            </div>
          ))}
        </div>

        {filteredLocalities.length === 0 && (
          <p className="text-center text-xs text-slate-500 py-4">
            No exact match found, but we service ALL areas across Bangalore! Call 8050291180 to check technician availability.
          </p>
        )}
      </div>
    </section>
  );
};
