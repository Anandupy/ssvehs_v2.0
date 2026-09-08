import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { eventsData } from '../data/schoolData';
import { Calendar, ArrowLeft, Share2, Sparkles, MapPin } from 'lucide-react';

export const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = eventsData.find((e) => e.id === id) || eventsData[0];
  const otherEvents = eventsData.filter((e) => e.id !== event.id).slice(0, 5);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: event.title,
        text: event.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Event link copied to clipboard!');
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Top Banner */}
      <div className="w-full bg-[#002147] py-6 px-4 text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            to="/events"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-200 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Events</span>
          </Link>
          <button
            onClick={handleShare}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Share Event"
          >
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Event Article (lg:col-span-8) */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-6">
            
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  {event.date}
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  SSVEHS Campus & Grounds
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002147] leading-tight">
                {event.title}
              </h1>
            </div>

            {event.image && (
              <div className="rounded-xl overflow-hidden bg-slate-100 shadow-sm max-h-[460px]">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="prose max-w-none text-gray-700 leading-relaxed text-base sm:text-lg space-y-4">
              <p className="font-semibold text-gray-900 border-l-4 border-emerald-500 pl-4 py-1 bg-slate-50 rounded-r">
                {event.description}
              </p>
              <div className="whitespace-pre-line text-gray-700 text-sm sm:text-base leading-relaxed">
                {event.content}
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100 text-xs text-gray-500 flex items-center justify-between">
              <span>Organized by Cultural & Sports Committee, SSVEHS</span>
              <span>P. K. Krishnan Educational Trust</span>
            </div>

          </div>

          {/* Sidebar (lg:col-span-4) - Other Events */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-[#002147] text-lg mb-4 flex items-center gap-2 border-b border-gray-100 pb-3">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Other Events</span>
              </h3>

              <div className="space-y-4 divide-y divide-gray-100">
                {otherEvents.map((ev) => (
                  <Link
                    key={ev.id}
                    to={`/details/event/${ev.id}`}
                    className="block pt-3 first:pt-0 group"
                  >
                    <span className="text-[10px] text-gray-400 font-mono block mb-0.5">
                      {ev.date}
                    </span>
                    <h4 className="text-sm font-bold text-gray-800 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                      {ev.title}
                    </h4>
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <Link
                  to="/events"
                  className="block text-center w-full py-2 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 font-bold rounded-lg text-xs transition-colors"
                >
                  View All Events &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
