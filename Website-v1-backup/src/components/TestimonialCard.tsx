import React, { useState } from 'react';
import { Quote } from 'lucide-react';
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
    <div className="bg-[#002147] rounded-xl p-5 sm:p-6 text-white shadow-lg flex flex-col justify-between transition-all duration-300 hover:shadow-2xl border border-sky-900/50">
      <div className="bg-white text-gray-800 rounded-lg p-5 shadow-sm mb-4 relative">
        <Quote className="w-8 h-8 text-[#002147]/20 absolute top-3 right-3" />
        <p className="text-sm leading-relaxed text-gray-700 italic">
          "{displayText}"
          {isLong && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="ml-2 font-bold text-sky-600 hover:text-sky-800 underline text-xs inline-block cursor-pointer"
            >
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </p>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <div className="w-10 h-10 rounded-full bg-sky-500/20 border-2 border-sky-400 flex items-center justify-center font-bold text-sky-200 uppercase text-sm">
          {testimonial.name.slice(0, 2)}
        </div>
        <div>
          <h5 className="font-bold text-white text-base leading-tight">
            {testimonial.name}
          </h5>
          <span className="text-xs text-sky-300 font-medium">
            {testimonial.role}
          </span>
        </div>
      </div>
    </div>
  );
};
