import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroBanner } from '../components/HeroBanner';
import { TeacherCard } from '../components/TeacherCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { 
  newsData, 
  eventsData, 
  teachersData, 
  testimonialsData 
} from '../data/schoolData';
import { 
  Send, 
  Newspaper, 
  Calendar, 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const HomePage: React.FC = () => {
  // Testimonial tab or active index
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      {/* Campus Hero Video Banner */}
      <HeroBanner />

      {/* Main Container - 3 Column Layout Matching SSVEHS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LEFT COLUMN (lg:col-span-3) - Our Vision & Our Mission */}
          <div className="lg:col-span-3 order-2 lg:order-1 space-y-6">
            
            {/* Our Vision Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="bg-[#002147] text-white cardheader flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sky-400" />
                <span>Our Vision</span>
              </h3>
              <div className="p-4">
                <img
                  src="/assets/img/vision.png"
                  alt="Our Vision"
                  className="w-full h-auto rounded mb-4 object-contain bg-sky-50/50 p-2"
                />
                <p className="text-gray-700 text-sm leading-relaxed">
                  In the globalized Techno dominated society of the 21st Century, trends in education are changing. The Holistic Development of a child in a stimulating environment is our highest priority.
                </p>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="bg-[#002147] text-white cardheader flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-sky-400" />
                <span>Our Mission</span>
              </h3>
              <div className="p-4">
                <img
                  src="/assets/img/mission.png"
                  alt="Our Mission"
                  className="w-full h-auto rounded mb-4 object-contain bg-sky-50/50 p-2"
                />
                <p className="text-gray-700 text-sm leading-relaxed">
                  To provide an environment that lays emphasis on intellectual and emotional growth in which every student discovers and realizes their true potential and reaches the highest academic standard.
                </p>
              </div>
            </div>

            {/* Quick Admissions Info Widget */}
            <div className="bg-gradient-to-br from-sky-600 to-[#002147] rounded-lg shadow-md p-5 text-white">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-yellow-300" />
                <span>Admissions 2026–27</span>
              </h4>
              <p className="text-xs text-sky-100 mb-4 leading-relaxed">
                Admissions open for Pre-Primary, Primary & Secondary sections. Limited seats available.
              </p>
              <Link
                to="/admissions"
                className="inline-block w-full text-center bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-2 px-4 rounded text-xs transition-colors shadow-sm"
              >
                Apply / Learn More
              </Link>
            </div>

          </div>

          {/* CENTER COLUMN (lg:col-span-6) - Know About Us, FAQ, Teachers, Testimonials */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            {/* Know About Us Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <h3 className="bg-[#002147] text-white cardheader flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-400" />
                <span>Know About Us</span>
              </h3>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-5">
                    <img
                      src="/assets/img/home-page-img.png"
                      alt="SSVEHS School Campus"
                      className="w-full h-auto rounded-lg shadow-sm border border-gray-100 object-cover hover:scale-102 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:col-span-7 space-y-3">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      <strong>P. K. Krishnan Educational Trust’s SHREE SIDDHI VINAYAGAR ENGLISH HIGH SCHOOL</strong> was established on 23rd July 1981 by Honorable Trustee Shree P.K. Krishnan sir in Vikhroli — the heart of Mumbai.
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      For over four decades, our institution has fostered excellence, building ethical, confident, and scholarly youth ready to take on global opportunities.
                    </p>
                    <Link
                      to="/about"
                      className="inline-flex items-center gap-2 bg-[#17a2b8] hover:bg-[#128294] text-white font-bold py-2 px-5 rounded text-sm transition-colors shadow-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Four Quick Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-gray-100 text-center">
                  <div className="p-2 rounded bg-sky-50">
                    <span className="block font-extrabold text-[#002147] text-lg">1981</span>
                    <span className="text-[11px] text-gray-600 font-semibold uppercase">Estd. Year</span>
                  </div>
                  <div className="p-2 rounded bg-sky-50">
                    <span className="block font-extrabold text-emerald-700 text-lg">100%</span>
                    <span className="text-[11px] text-gray-600 font-semibold uppercase">SSC Result</span>
                  </div>
                  <div className="p-2 rounded bg-sky-50">
                    <span className="block font-extrabold text-[#002147] text-lg">CCTV</span>
                    <span className="text-[11px] text-gray-600 font-semibold uppercase">Campus Safety</span>
                  </div>
                  <div className="p-2 rounded bg-sky-50">
                    <span className="block font-extrabold text-sky-700 text-lg">State Bd.</span>
                    <span className="text-[11px] text-gray-600 font-semibold uppercase">Curriculum</span>
                  </div>
                </div>

              </div>
            </div>

            {/* FAQs Section */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="text-center pb-4">
                <p className="section-title px-5 pb-1 text-xs font-bold text-sky-700">
                  <span className="px-2">Find the answers for</span>
                </p>
                <h2 className="text-2xl font-extrabold text-[#002147]">FAQ</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
                  <h4 className="text-sm font-bold text-sky-700 flex items-start gap-1.5 mb-1.5">
                    <Send className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>What curriculum will the school follow?</span>
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed pl-5">
                    SSVEHS follows <strong>Maharashtra State Board</strong> curriculum.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
                  <h4 className="text-sm font-bold text-sky-700 flex items-start gap-1.5 mb-1.5">
                    <Send className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>How many terms will the school have?</span>
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed pl-5">
                    The school conducts <strong>2-unit tests and 2 semesters</strong> per academic year.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
                  <h4 className="text-sm font-bold text-sky-700 flex items-start gap-1.5 mb-1.5">
                    <Send className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>What security is offered to students?</span>
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed pl-5">
                    The school has installed CCTV in all classrooms and corridors. Students are always accompanied by teachers or monitors when moving between blocks.
                  </p>
                </div>

                <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200/80">
                  <h4 className="text-sm font-bold text-sky-700 flex items-start gap-1.5 mb-1.5">
                    <Send className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>Other than PTM, when can parents interact?</span>
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed pl-5">
                    SSVEHS considers parents partners in education. Parents are free to meet teachers with prior appointment as necessary.
                  </p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Link
                  to="/faqs"
                  className="text-xs font-bold text-sky-700 hover:text-sky-900 underline inline-flex items-center gap-1"
                >
                  <span>View all frequently asked questions</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Meet Our Teachers Section */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="text-center pb-4">
                <p className="section-title px-5 pb-1 text-xs font-bold text-sky-700">
                  <span className="px-2">Our Teachers</span>
                </p>
                <h2 className="text-2xl font-extrabold text-[#002147]">Meet Our Teachers</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {teachersData.slice(0, 4).map((teacher, idx) => (
                  <TeacherCard key={idx} teacher={teacher} />
                ))}
              </div>

              <div className="mt-4 text-center">
                <Link
                  to="/teachers"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-[#002147] hover:bg-sky-900 py-2 px-4 rounded transition-colors"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>View Full Faculty Directory &rarr;</span>
                </Link>
              </div>
            </div>

            {/* Testimonials ("What Parents Say!") Section */}
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <div className="text-center pb-4">
                <p className="section-title px-5 pb-1 text-xs font-bold text-sky-700">
                  <span className="px-2">Testimonial</span>
                </p>
                <h2 className="text-2xl font-extrabold text-[#002147]">What Parents Say!</h2>
              </div>

              {/* Testimonial slider / tabs */}
              <div className="space-y-4">
                <TestimonialCard testimonial={testimonialsData[activeTestimonialIdx]} />

                <div className="flex items-center justify-center gap-2 pt-2">
                  {testimonialsData.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonialIdx(idx)}
                      className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                        activeTestimonialIdx === idx
                          ? 'bg-[#17a2b8] w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (lg:col-span-3) - News & Events Tickers */}
          <div className="lg:col-span-3 order-3 space-y-6">
            
            {/* News Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="bg-[#002147] cardheader flex items-center justify-between">
                <h3 className="text-white text-base font-bold flex items-center gap-2 m-0">
                  <Newspaper className="w-5 h-5 text-sky-400" />
                  <span>News</span>
                </h3>
                <Link to="/news" className="text-xs text-sky-200 hover:text-white underline">
                  View All
                </Link>
              </div>

              <div className="p-3 max-h-[460px] overflow-y-auto space-y-2.5 divide-y divide-gray-100">
                {newsData.map((news) => (
                  <div key={news.id} className="pt-2.5 first:pt-0">
                    <Link
                      to={`/details/news/${news.id}`}
                      className="group flex items-start gap-2.5 hover:bg-sky-50/60 p-1.5 rounded transition-colors"
                    >
                      <Newspaper className="w-4 h-4 text-sky-600 shrink-0 mt-1 group-hover:text-sky-800" />
                      <div>
                        <p className="text-xs font-semibold text-gray-800 group-hover:text-sky-700 line-clamp-2 leading-snug">
                          {news.title}
                        </p>
                        <span className="text-[10px] text-gray-400 font-mono">
                          {news.date}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Events Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className="bg-[#002147] cardheader flex items-center justify-between">
                <h3 className="text-white text-base font-bold flex items-center gap-2 m-0">
                  <Calendar className="w-5 h-5 text-emerald-400" />
                  <span>Events</span>
                </h3>
                <Link to="/events" className="text-xs text-sky-200 hover:text-white underline">
                  View All
                </Link>
              </div>

              <div className="p-3 max-h-[460px] overflow-y-auto space-y-2.5 divide-y divide-gray-100">
                {eventsData.map((event) => (
                  <div key={event.id} className="pt-2.5 first:pt-0">
                    <Link
                      to={`/details/event/${event.id}`}
                      className="group flex items-start gap-2.5 hover:bg-emerald-50/60 p-1.5 rounded transition-colors"
                    >
                      <Calendar className="w-4 h-4 text-emerald-600 shrink-0 mt-1 group-hover:text-emerald-800" />
                      <div>
                        <p className="text-xs font-semibold text-gray-800 group-hover:text-emerald-700 line-clamp-2 leading-snug">
                          {event.title}
                        </p>
                        <span className="text-[10px] text-gray-400 font-mono">
                          {event.date}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Quick Card */}
            <div className="bg-white rounded-lg shadow-md p-4 border border-gray-100 text-center">
              <h4 className="font-bold text-sm text-[#002147] mb-1">Need Assistance?</h4>
              <p className="text-xs text-gray-600 mb-3">Our admissions & school administration office is happy to help.</p>
              <Link
                to="/contact-us"
                className="inline-block w-full py-2 px-3 text-xs font-bold rounded bg-[#17a2b8] hover:bg-[#128294] text-white transition-colors"
              >
                Contact School Office
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
