import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import type { FAQItem } from '../data/schoolData';

interface FAQAccordionProps {
  items: FAQItem[];
  defaultOpenIndex?: number;
  allowMultiple?: boolean;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  items,
  defaultOpenIndex = 0,
  allowMultiple = false,
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([defaultOpenIndex]);

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      if (openIndexes.includes(index)) {
        setOpenIndexes(openIndexes.filter((i) => i !== index));
      } else {
        setOpenIndexes([...openIndexes, index]);
      }
    } else {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="space-y-4">
      {items.map((faq, idx) => {
        const isOpen = openIndexes.includes(idx);
        return (
          <div
            key={idx}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? 'border-sky-500 bg-sky-50/40 shadow-sm'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-start gap-3">
                <HelpCircle
                  className={`w-5 h-5 shrink-0 mt-0.5 transition-colors ${
                    isOpen ? 'text-sky-600' : 'text-gray-400'
                  }`}
                />
                <h4
                  className={`text-base sm:text-lg font-bold transition-colors ${
                    isOpen ? 'text-sky-800' : 'text-[#002147]'
                  }`}
                >
                  {faq.question}
                </h4>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0 ${
                  isOpen ? 'rotate-180 text-sky-600' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-gray-700 text-sm sm:text-base leading-relaxed border-t border-sky-100/60 animate-fadeIn pl-12">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
