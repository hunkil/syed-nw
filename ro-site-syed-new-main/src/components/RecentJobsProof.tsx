'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2, MapPin, Wrench, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/src/data/content';

interface RecentJob {
  locality: string;
  brand: string;
  problem: string;
  solution: string;
  image: string;
  timeToReach: string;
  technician: string;
  tdsResult: string;
}

const RECENT_JOBS: RecentJob[] = [
  {
    locality: 'HSR Layout, Sector 2',
    brand: 'Kent Grand Plus',
    problem: 'Continuous beeping alarm & zero water flow',
    solution: 'Replaced choked sediment & UV lamp; calibrated auto-flush',
    image: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789669453/IMG-20260917-WA0016_y94ufa.jpg',
    timeToReach: '45 mins',
    technician: 'Ramesh K.',
    tdsResult: 'Raw 680 → Pure 85 TDS',
  },
  {
    locality: 'Whitefield, Palm Meadows',
    brand: 'Aquaguard Geneus',
    problem: 'Foul taste & water dripping from bottom chamber',
    solution: 'Replaced activated carbon + solenoid valve & O-ring seals',
    image: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743917/IMG-20260918-WA0057_hnngfr.jpg',
    timeToReach: '60 mins',
    technician: 'Syed M.',
    tdsResult: 'Raw 820 → Pure 92 TDS',
  },
  {
    locality: 'Indiranagar, 100ft Road',
    brand: 'Pureit Ultima RO',
    problem: 'GKK indicator red & pump making loud buzzing sound',
    solution: 'Installed genuine Pureit GKK-2 kit & SMPS power regulator',
    image: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789743916/IMG-20260918-WA0055_uvysaw.jpg',
    timeToReach: '50 mins',
    technician: 'Manjunath B.',
    tdsResult: 'Raw 540 → Pure 78 TDS',
  },
  {
    locality: 'Electronic City Phase 1',
    brand: 'AO Smith Z8 Green',
    problem: 'Water not heating & high mineral scale on membrane',
    solution: 'Acid-free descaling of tank & installed 80 GPD membrane',
    image: 'https://res.cloudinary.com/dieq3fjuv/image/upload/v1789669453/IMG-20260917-WA0018_m8dnkp.jpg',
    timeToReach: '55 mins',
    technician: 'Arun V.',
    tdsResult: 'Raw 950 → Pure 105 TDS',
  },
];

interface RecentJobsProofProps {
  onBookClick?: () => void;
}

export const RecentJobsProof: React.FC<RecentJobsProofProps> = ({ onBookClick }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5 text-emerald-700" />
              Real Doorstep Work
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#002b66] tracking-tight leading-tight">
              Recent RO Repairs in Bangalore
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl leading-relaxed">
              Every day our certified technicians resolve water quality and pressure issues across Bengaluru homes. Here are recent jobs completed this week:
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_DETAILS.helplineNumber}`}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0066cc] hover:text-[#0052a3] bg-blue-50 px-4 py-2.5 rounded-xl border border-blue-200"
            >
              <span>Need Quick Diagnosis?</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECENT_JOBS.map((job, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative h-44 w-full bg-slate-100">
                  <Image
                    src={job.image}
                    alt={`${job.brand} Repair in ${job.locality}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-xs text-[11px] font-bold text-[#002b66] px-2.5 py-1 rounded-lg shadow-xs flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                    <span className="truncate max-w-[170px]">{job.locality}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-extrabold text-[#0066cc]">
                      {job.brand}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <Clock className="w-3 h-3" />
                      {job.timeToReach}
                    </span>
                  </div>

                  <div className="space-y-2 mt-3 text-xs">
                    <div>
                      <span className="font-bold text-slate-900 block mb-0.5">Problem Reported:</span>
                      <p className="text-slate-600 leading-snug">{job.problem}</p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="font-bold text-slate-900 block mb-0.5">Resolution:</span>
                      <p className="text-slate-600 leading-snug">{job.solution}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer status */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="font-bold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {job.tdsResult}
                </span>
                <span className="text-slate-500 font-medium">Tech: {job.technician}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
