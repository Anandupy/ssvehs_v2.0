import React, { useState } from 'react';
import { holidaysData } from '../data/schoolData';
import { Calendar, Search, Sparkles } from 'lucide-react';

export const HolidayListPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHolidays = holidaysData.filter(
    (h) =>
      h.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      h.date.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <Calendar className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Holidays of the Year
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Academic calendar holiday list and festival schedule for students of Shree Siddhi Vinayagar English High School.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Search & Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search festival or date..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <span className="text-xs text-gray-500 font-semibold">
            Showing {filteredHolidays.length} official holidays
          </span>
        </div>

        {/* Holidays Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredHolidays.map((holiday, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 flex flex-col group"
            >
              <div className="h-44 overflow-hidden bg-sky-50 relative">
                {holiday.image ? (
                  <img
                    src={holiday.image}
                    alt={holiday.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : null}
                <div className="absolute top-2 right-2">
                  <span className="bg-[#002147]/80 text-white text-[11px] font-bold px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    Festival
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-[#002147] text-base mb-2 group-hover:text-sky-700 transition-colors">
                    {holiday.title}
                  </h4>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-sky-700 bg-sky-50/60 p-2 rounded">
                  <Calendar className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{holiday.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
