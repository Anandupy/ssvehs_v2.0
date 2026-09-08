import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import type { NewsItem } from '../data/schoolData';

export const NewsCard: React.FC<{ news: NewsItem }> = ({ news }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
      <div className="h-48 overflow-hidden bg-slate-100 relative">
        {news.image ? (
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-sky-600/90 px-2.5 py-1 rounded-md backdrop-blur-sm">
            <Calendar className="w-3.5 h-3.5" />
            {news.date}
          </span>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="text-lg font-bold text-[#002147] group-hover:text-sky-600 transition-colors line-clamp-2 leading-snug mb-2">
            {news.title}
          </h4>
          <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
            {news.description || news.content}
          </p>
        </div>

        <Link
          to={`/details/news/${news.id}`}
          className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-800 transition-colors pt-3 border-t border-gray-100 group/link"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
