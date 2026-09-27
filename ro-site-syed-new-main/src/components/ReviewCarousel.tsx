'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '@/src/types';

interface ReviewCarouselProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function ReviewCarousel({
  testimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
}: ReviewCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;

  const prevSlide = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const nextSlide = useCallback((e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  const goToSlide = (slideIndex: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const slideInterval = setInterval(() => nextSlide(), autoPlayInterval);
    return () => clearInterval(slideInterval);
  }, [autoPlay, autoPlayInterval, nextSlide]);

  if (!testimonials || totalSlides === 0) return null;

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative">
      <div className="relative w-full px-12 sm:px-16">
        
        {/* Track Container */}
        <div className="overflow-hidden rounded-2xl bg-slate-50/50">
          <div
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((review) => (
              <div key={review.id} className="w-full flex-shrink-0 p-4">
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between h-full text-left max-w-3xl mx-auto">
                  <div>
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed italic mb-6">
                      "{review.comment}"
                    </p>
                  </div>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-base font-bold text-slate-900">{review.name}</p>
                    <p className="text-sm text-slate-500 mt-1">{review.locality} &middot; {review.brandServiced}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={prevSlide}
          type="button"
          className="absolute top-1/2 -translate-y-1/2 left-0 sm:left-4 z-50 text-2xl rounded-full p-2 sm:p-3 bg-white border border-slate-200 text-slate-700 shadow-lg hover:bg-slate-50 hover:text-[#1d63d8] hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-blue-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={nextSlide}
          type="button"
          className="absolute top-1/2 -translate-y-1/2 right-0 sm:right-4 z-50 text-2xl rounded-full p-2 sm:p-3 bg-white border border-slate-200 text-slate-700 shadow-lg hover:bg-slate-50 hover:text-[#1d63d8] hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-blue-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Indicator Navigation Dots & Number */}
      <div className="mt-6 flex flex-col items-center gap-4 z-10 w-full">
        <div className="flex gap-2 flex-wrap justify-center w-full max-w-[80vw]">
          {testimonials.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={(e) => goToSlide(slideIndex, e)}
              type="button"
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
                currentIndex === slideIndex ? 'w-8 bg-[#1d63d8]' : 'w-2.5 bg-slate-300 hover:bg-slate-400 cursor-pointer'
              }`}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
        <div className="text-sm font-semibold text-slate-600 bg-white px-4 py-1.5 rounded-full tabular-nums tracking-wide shadow-sm border border-slate-200 inline-block">
          {currentIndex + 1} <span className="text-slate-400 mx-1">/</span> {totalSlides}
        </div>
      </div>
    </div>
  );
}
