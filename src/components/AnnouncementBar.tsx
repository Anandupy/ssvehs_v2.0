import React from 'react';
import { Link } from 'react-router-dom';
import { BellRing, ChevronRight } from 'lucide-react';
import { noticesData } from '../data/schoolData';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#16325B] text-white py-2 border-b border-slate-700/60 shadow-inner overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3">
        {/* Notice Badge */}
        <div className="flex items-center gap-2 shrink-0 bg-amber-500 text-slate-950 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-sm">
          <BellRing className="w-3.5 h-3.5 animate-pulse" />
          <span>Latest Notices</span>
        </div>

        {/* Marquee Ticker */}
        <div className="ticker-wrap flex-1 ml-2">
          <div className="ticker-move flex items-center space-x-10">
            {noticesData.map((notice, idx) => (
              <Link
                key={idx}
                to={`/details/notice/${notice.id}`}
                style={{ color: '#ffffff' }}
                className="inline-flex items-center text-xs sm:text-sm font-medium hover:text-amber-300 transition-colors gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-ping shrink-0"></span>
                <span style={{ color: '#ffffff' }} className="font-bold text-white tracking-wide">{notice.title}</span>
                <span style={{ color: '#f1f5f9' }} className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-mono">
                  {notice.date}
                </span>
              </Link>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {noticesData.map((notice, idx) => (
              <Link
                key={`repeat-${idx}`}
                to={`/details/notice/${notice.id}`}
                style={{ color: '#ffffff' }}
                className="inline-flex items-center text-xs sm:text-sm font-medium hover:text-amber-300 transition-colors gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-ping shrink-0"></span>
                <span style={{ color: '#ffffff' }} className="font-bold text-white tracking-wide">{notice.title}</span>
                <span style={{ color: '#f1f5f9' }} className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-mono">
                  {notice.date}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Action */}
        <Link
          to="/notice"
          className="hidden md:inline-flex items-center gap-1 shrink-0 text-xs font-bold text-amber-400 hover:text-amber-300 ml-4 group"
        >
          <span>All Notices</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
