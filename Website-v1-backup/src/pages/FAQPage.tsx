import React, { useState } from 'react';
import { FAQAccordion } from '../components/FAQAccordion';
import { faqsData } from '../data/schoolData';
import { HelpCircle, Search, MessageCircleQuestion } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FAQPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = faqsData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Find answers to common queries regarding admissions, curriculum, school timings, fee payment modes, security, and examination rules.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Type question or keyword to search (e.g. timings, curriculum, fees, ptm)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-sm sm:text-base border-0 focus:outline-none text-gray-800"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-xs text-gray-400 hover:text-gray-600 font-semibold shrink-0 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* Accordion Component */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-gray-100">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
              General Queries & Procedures
            </span>
            <span className="text-xs text-gray-500">
              Showing {filteredFaqs.length} of {faqsData.length} FAQs
            </span>
          </div>

          {filteredFaqs.length > 0 ? (
            <FAQAccordion items={filteredFaqs} allowMultiple={true} />
          ) : (
            <div className="text-center py-12 space-y-3">
              <MessageCircleQuestion className="w-12 h-12 text-gray-300 mx-auto" />
              <p className="text-gray-600 font-medium">No questions matched your search.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="text-xs font-bold text-sky-600 hover:underline"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>

        {/* Still have questions banner */}
        <div className="bg-[#002147] text-white p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-lg">Still have questions?</h4>
            <p className="text-xs sm:text-sm text-sky-200 mt-1">
              Feel free to contact our administrative helpdesk or schedule an in-person meeting.
            </p>
          </div>
          <Link
            to="/contact-us"
            className="bg-[#17a2b8] hover:bg-[#128294] text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm transition-colors shrink-0 shadow-sm"
          >
            Contact Help Desk
          </Link>
        </div>

      </div>
    </div>
  );
};
