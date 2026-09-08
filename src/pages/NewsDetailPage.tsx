import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newsData } from '../data/schoolData';
import { Calendar, ArrowLeft, Share2, Newspaper } from 'lucide-react';

export const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsData.find((n) => n.id === id) || newsData[0];
  const otherNews = newsData.filter((n) => n.id !== article.id).slice(0, 5);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Top Banner */}
      <div className="w-full bg-[#002147] py-6 px-4 text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All News</span>
          </Link>
          <button
            onClick={handleShare}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Share Article"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Article (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-6">
            
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 bg-sky-50 px-3 py-1 rounded-full border border-sky-100 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002147] leading-tight">
                {article.title}
              </h1>
            </div>

            {article.image && (
              <div className="rounded-xl overflow-hidden bg-slate-100 shadow-sm max-h-[460px]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="prose max-w-none text-gray-700 leading-relaxed text-base sm:text-lg space-y-4">
              <p className="font-semibold text-gray-900 border-l-4 border-sky-500 pl-4 py-1 bg-slate-50 rounded-r">
                {article.description}
              </p>
              <div className="whitespace-pre-line text-gray-700 text-sm sm:text-base leading-relaxed">
                {article.content}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 text-xs text-gray-500 flex items-center justify-between">
              <span>Shree Siddhi Vinayagar English High School Media Desk</span>
              <span>Vikhroli (E), Mumbai</span>
            </div>

          </div>

          {/* Sidebar (lg:col-span-4) - Recent News */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#002147] text-lg mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
                <Newspaper className="w-5 h-5 text-sky-600" />
                <span>Recent News</span>
              </h3>

              <div className="space-y-4 divide-y divide-gray-100">
                {otherNews.map((news) => (
                  <Link
                    key={news.id}
                    to={`/details/news/${news.id}`}
                    className="block pt-3 first:pt-0 group"
                  >
                    <span className="text-[10px] text-gray-400 font-mono block mb-0.5">
                      {news.date}
                    </span>
                    <h4 className="text-sm font-bold text-gray-800 group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug">
                      {news.title}
                    </h4>
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  to="/news"
                  className="block text-center w-full py-2 bg-sky-50 text-sky-700 hover:bg-sky-100 font-bold rounded-lg text-xs transition-colors"
                >
                  View All News &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
