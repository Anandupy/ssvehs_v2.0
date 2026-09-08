import React from 'react';
import { Trophy, Award, Medal, Star, Shield } from 'lucide-react';

export const AwardsPage: React.FC = () => {
  const awardsList = [
    {
      title: 'State Level Karate Championships (Pune)',
      year: '2025',
      category: 'Martial Arts & Sports Excellence',
      description: 'Remarkable tally of 21 medals (5 Gold, 3 Silver, 13 Bronze) secured by our students in Kata and Kumite events.',
      icon: Trophy,
      badge: '5 Gold Medals',
    },
    {
      title: '100% Passing Record in SSC Board Examinations',
      year: '2024',
      category: 'Academic Distinction',
      description: 'Continuous legacy of achieving 100% pass percentage in Maharashtra SSC Board Examinations with multiple distinction toppers.',
      icon: Award,
      badge: 'Academic Honor',
    },
    {
      title: 'District Level School Games (DSO) Athletics Trophy',
      year: '2024-25',
      category: 'Athletics & Track Events',
      description: 'Top podium finishes in 400m sprint, Under-17 and Under-19 categories, qualifying for divisional and state level meets.',
      icon: Medal,
      badge: 'DSO Champions',
    },
    {
      title: 'Mumbai Suburban District Weightlifting Championship',
      year: '2024',
      category: 'Strength & Conditioning',
      description: 'Championship gold and silver medals won by SSVEHS student athletes in suburban district divisions.',
      icon: Trophy,
      badge: 'District Honors',
    },
    {
      title: 'National Open Karate Championship',
      year: '2024',
      category: 'National Sports',
      description: 'National podium recognition with participants competing against top martial arts athletes from across 12 states.',
      icon: Star,
      badge: 'National Medalists',
    },
    {
      title: 'Best Eco-Campus & Environmental Vigilance Award',
      year: '2023-24',
      category: 'Social Responsibility',
      description: 'Recognized for school-wide tree plantation drives, plastic-free initiatives, and community health awareness programs.',
      icon: Shield,
      badge: 'Civic Excellence',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 mb-2">
            <Trophy className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Awards & Accolades
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Honoring the dedication, grit, and scholastic accomplishments of the students and faculty at Shree Siddhi Vinayagar English High School.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awardsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 border border-gray-100 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-amber-50 text-amber-600 border border-amber-100 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-sky-800 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                      {item.year}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600 block mb-1">
                    {item.category}
                  </span>
                  
                  <h3 className="text-lg font-bold text-[#002147] group-hover:text-sky-700 transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                  <span className="text-gray-400 font-medium">SSVEHS Honor</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
