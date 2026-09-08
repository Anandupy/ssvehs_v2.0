import React from 'react';
import { Link } from 'react-router-dom';
import { noticesData } from '../data/schoolData';
import { Bell, Calendar, ChevronRight, Tag } from 'lucide-react';

export const NoticePage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <Bell className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Notices & Announcements
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Official administrative notices, circulars, and announcements for students, parents, and faculty.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
        {noticesData.map((notice) => (
          <div
            key={notice.id}
            className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group"
          >
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100 flex items-center gap-1">
                  <Tag className="w-3 h-3" />
                  {notice.category}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {notice.date}
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#002147] group-hover:text-sky-600 transition-colors leading-snug">
                {notice.title}
              </h2>

              <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                {notice.description}
              </p>
            </div>

            <Link
              to={`/details/notice/${notice.id}`}
              className="inline-flex items-center gap-2 bg-[#002147] group-hover:bg-sky-700 text-white font-bold text-xs sm:text-sm py-2.5 px-5 rounded-xl transition-colors shrink-0 shadow-sm self-start md:self-center"
            >
              <span>View Notice</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
