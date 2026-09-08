import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { noticesData } from '../data/schoolData';
import { Bell, Calendar, Tag, ArrowLeft, Share2, Printer } from 'lucide-react';

export const NoticeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const notice = noticesData.find((n) => n.id === id) || noticesData[0];

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: notice.title,
        text: notice.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Notice link copied to clipboard!');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Top Banner */}
      <div className="w-full bg-[#002147] py-8 px-4 text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link
            to="/notice"
            className="inline-flex items-center gap-2 text-xs font-semibold text-sky-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Notices</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print Notice"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Print</span>
            </button>
            <button
              onClick={handleShare}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Share Notice"
            >
              <Share2 className="w-4 h-4" />
              <span className="hidden sm:inline">Share</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-6">
          
          <div className="space-y-3 border-b border-gray-100 pb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-100 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" />
                {notice.category}
              </span>
              <span className="text-xs text-gray-500 flex items-center gap-1 font-mono">
                <Calendar className="w-4 h-4 text-gray-400" />
                {notice.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#002147] leading-snug">
              {notice.title}
            </h1>
          </div>

          <div className="prose max-w-none text-gray-700 leading-relaxed text-base space-y-4">
            <p className="font-medium text-gray-800 bg-slate-50 p-4 rounded-xl border border-slate-100">
              {notice.description}
            </p>
            <p className="whitespace-pre-line text-gray-700">
              {notice.content}
            </p>
          </div>

          <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <div>
              Issued by: <strong>Administration Office, SSVEHS</strong>
            </div>
            <div>
              Affiliated to Maharashtra State Board
            </div>
          </div>

        </div>

        {/* Sidebar other notices */}
        <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h3 className="font-bold text-[#002147] text-base mb-4 flex items-center gap-2">
            <Bell className="w-4 h-4 text-sky-600" />
            <span>Other Recent Circulars</span>
          </h3>
          <div className="space-y-3 divide-y divide-gray-100">
            {noticesData.filter((n) => n.id !== notice.id).map((other) => (
              <Link
                key={other.id}
                to={`/details/notice/${other.id}`}
                className="block pt-3 first:pt-0 group"
              >
                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-sky-600 transition-colors">
                  {other.title}
                </h4>
                <span className="text-xs text-gray-400 font-mono">{other.date}</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
