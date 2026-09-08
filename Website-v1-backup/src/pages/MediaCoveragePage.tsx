import React from 'react';
import { Newspaper, Calendar, Radio } from 'lucide-react';

export const MediaCoveragePage: React.FC = () => {
  const articles = [
    {
      headline: 'Mumbai Suburban School Shines with 100% Pass Percentage in SSC 2024',
      publication: 'Maharashtra Times & Regional Education Digest',
      date: 'May 31, 2024',
      snippet: 'Shree Siddhi Vinayagar English High School in Tagore Nagar, Vikhroli marked yet another milestone year by securing a 100% success rate in Maharashtra SSC board examinations.',
      category: 'Print Media',
    },
    {
      headline: 'Young Karatekas from Vikhroli School Bag 21 Medals in Pune State Championship',
      publication: 'Sports Mirror Mumbai',
      date: 'March 01, 2025',
      snippet: 'The karate team of SSVEHS brought back an impressive tally of 21 medals, with special recognition given to Ananya Jadhav and Mohit Jagtap for multiple gold-medal finishes.',
      category: 'Sports Beat',
    },
    {
      headline: '44th Annual Day Extravaganza Celebrates Indian Heritage & Student Creativity',
      publication: 'Mumbai Suburban Chronicle',
      date: 'December 23, 2024',
      snippet: 'A spectacular musical and dance presentation by primary and high school students captivated over a thousand parents and distinguished educationists in attendance.',
      category: 'Cultural Coverage',
    },
    {
      headline: 'Monsoon Illness Awareness Drive Conducted for Over 800 Families in Vikhroli',
      publication: 'Citizen Health Bulletin',
      date: 'January 10, 2025',
      snippet: 'Under the guidance of the P. K. Krishnan Educational Trust, students and staff spearheaded public health awareness on dengue and leptospirosis prevention.',
      category: 'Community News',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <Radio className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Media Coverage & Press
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Highlights of Shree Siddhi Vinayagar English High School featured across educational publications, regional press, and sports bulletins.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="space-y-6">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col md:flex-row justify-between gap-6"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded border border-sky-100">
                    {art.category}
                  </span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {art.date}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#002147] leading-snug">
                  {art.headline}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {art.snippet}
                </p>

                <div className="pt-2 text-xs font-semibold text-gray-500 flex items-center gap-1.5">
                  <Newspaper className="w-4 h-4 text-sky-600" />
                  <span>Published in: <strong className="text-gray-800">{art.publication}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
