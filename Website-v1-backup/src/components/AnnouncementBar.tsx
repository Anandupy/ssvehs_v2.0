import React from 'react';
import { Link } from 'react-router-dom';
import { Megaphone } from 'lucide-react';
import { noticesData } from '../data/schoolData';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#17a2b8] text-white py-2 border-b border-sky-600/30 overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2 shrink-0 bg-[#128294] px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wider shadow-sm">
          <Megaphone className="w-4 h-4 animate-bounce" />
          <span>Notice</span>
        </div>

        <div className="ticker-wrap flex-1 ml-4">
          <div className="ticker-move flex items-center space-x-12">
            {noticesData.map((notice, idx) => (
              <Link
                key={idx}
                to={`/details/notice/${notice.id}`}
                className="inline-flex items-center text-sm font-semibold hover:underline text-white transition-colors gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-yellow-300 inline-block animate-ping"></span>
                <span>{notice.title}</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-mono">
                  {notice.date}
                </span>
              </Link>
            ))}
            {/* Repeated for continuous marquee loop */}
            {noticesData.map((notice, idx) => (
              <Link
                key={`repeat-${idx}`}
                to={`/details/notice/${notice.id}`}
                className="inline-flex items-center text-sm font-semibold hover:underline text-white transition-colors gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-yellow-300 inline-block animate-ping"></span>
                <span>{notice.title}</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full font-mono">
                  {notice.date}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <Link
          to="/notice"
          className="hidden sm:inline-block shrink-0 text-xs font-semibold underline text-sky-100 hover:text-white ml-4"
        >
          View All Notices &rarr;
        </Link>
      </div>
    </div>
  );
};
