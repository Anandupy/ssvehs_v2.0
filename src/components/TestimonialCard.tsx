import React, { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import type { TestimonialItem } from '../data/schoolData';

export const TestimonialCard: React.FC<{ testimonial: TestimonialItem }> = ({ testimonial }) => {
  const [expanded, setExpanded] = useState(false);
  const WORD_LIMIT = 28;
  const words = testimonial.text.split(/\s+/);
  const isLong = words.length > WORD_LIMIT;

  const displayText = expanded || !isLong
    ? testimonial.text
    : words.slice(0, WORD_LIMIT).join(' ') + '...';

  return (
    <div className="bg-[#0B1E36] rounded-2xl p-6 sm:p-7 text-white shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl border border-slate-700/60 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Quote bubble */}
      <div className="bg-white/95 text-slate-800 rounded-xl p-6 shadow-md mb-6 relative">
        <Quote className="w-8 h-8 text-amber-500/20 absolute top-4 right-4" />
        
        {/* 5-star rating */}
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        <p className="text-sm leading-relaxed text-slate-700 font-medium italic">
          "{displayText}"
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-2 font-bold text-amber-600 hover:text-amber-800 underline text-xs inline-block cursor-pointer"
            >
              {expanded ? 'Show Less' : 'Read Full Quote'}
            </button>
          )}
        </p>
      </div>

      {/* Person Info */}
      <div className="flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 flex items-center justify-center font-extrabold text-sm shadow-md">
          {testimonial.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <h5 className="font-extrabold text-white text-base leading-tight">
            {testimonial.name}
          </h5>
          <span className="text-xs text-amber-300/90 font-semibold tracking-wide">
            {testimonial.role}
          </span>
        </div>
      </div>
    </div>
  );
};
