import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeroBanner } from '../components/HeroBanner';
import { TeacherCard } from '../components/TeacherCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { 
  newsData, 
  eventsData, 
  teachersData, 
  testimonialsData,
  noticesData
} from '../data/schoolData';
import { 
  ArrowRight, 
  GraduationCap, 
  BookOpen, 
  Users, 
  ChevronRight,
  Sparkles,
  Calendar,
  Newspaper,
  BellRing,
  Award,
  CheckCircle2,
  HelpCircle,
  Clock,
  Compass,
  HeartHandshake
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);
  const [activeNoticeTab, setActiveNoticeTab] = useState<'notices' | 'news' | 'events'>('notices');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What curriculum does the school follow?",
      a: "SSVEHS is affiliated with the Maharashtra State Board of Secondary and Higher Secondary Education (MSBSHSE), providing an enriched English-medium curriculum designed to build strong foundations in STEM, languages, and humanities."
    },
    {
      q: "How many terms and examinations are conducted in an academic year?",
      a: "The academic session is structured across two semesters with two unit tests and two term examinations, ensuring continuous evaluation, conceptual mastery, and balanced student assessment."
    },
    {
      q: "What safety and security measures are active on campus?",
      a: "The school campus is monitored 24/7 with comprehensive high-definition CCTV surveillance covering all classrooms, corridors, and entry/exit gates. Students are always accompanied by designated staff during inter-block movements."
    },
    {
      q: "How can parents communicate with faculty and school management?",
      a: "Beyond scheduled Parent-Teacher Meetings (PTMs), SSVEHS encourages collaborative parenting. Parents may schedule appointments with class teachers or the Principal during specified visiting hours."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* 1. Hero Section with Cinematic Video & Key Metric Counters */}
      <HeroBanner />

      {/* 2. Founder's Legacy & Campus Showcase Section */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Campus Image with Trust Badges */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img
                  src="/assets/img/home-page-img.png"
                  alt="SSVEHS School Campus"
                  className="w-full h-[380px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating Stamp */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">Campus Heritage</span>
                    <h4 className="text-lg sm:text-xl font-extrabold text-white" style={{ color: '#ffffff' }}>Vikhroli, Mumbai</h4>
                  </div>
                  <div className="bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/25 text-xs font-bold text-amber-300">
                    Estd. 23rd July 1981
                  </div>
                </div>
              </div>

              {/* Floating Quote Badge */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 bg-[#0B1E36] text-white p-5 rounded-2xl shadow-xl max-w-xs border border-slate-700/80 items-center gap-3">
                <Award className="w-10 h-10 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold uppercase text-amber-400" style={{ color: 'var(--color-gold, #E5A93C)' }}>Honorable Founder</div>
                  <div className="text-xs font-medium leading-snug mt-0.5" style={{ color: '#f8fafc' }}>
                    "Education is not merely preparing for life, it is life itself." — Shree P. K. Krishnan
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 section-badge">
                <Compass className="w-3.5 h-3.5 text-amber-600" />
                <span>Our Heritage & Identity</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight leading-tight">
                Empowering Generations with Knowledge & Character Since 1981
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded by the visionary educationalist <strong>Late Shree P. K. Krishnan sir</strong>, Shree Siddhi Vinayagar English High School has served as a beacon of academic excellence for more than four decades in Mumbai.
              </p>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our institution provides a nurturing, disciplined, and technologically enriched atmosphere where every learner discovers their individual gifts, achieves 100% board proficiency, and blossoms into a responsible citizen.
              </p>

              {/* 4 Value Pillars */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-bold text-[#0B1E36]">100% SSC Results</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-bold text-[#0B1E36]">Smart Digital Classrooms</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-bold text-[#0B1E36]">24/7 CCTV Campus Safety</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-bold text-[#0B1E36]">Sports & Arts Training</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/about"
                  style={{ color: '#ffffff' }}
                  className="inline-flex items-center gap-2 bg-[#0B1E36] hover:bg-slate-800 text-white font-bold py-3 px-6 rounded-xl text-xs uppercase tracking-wider shadow transition-all"
                >
                  <span style={{ color: '#ffffff' }}>Explore Full Story</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
                <Link
                  to="/messages-from-dignitaries"
                  className="text-xs font-bold text-slate-700 hover:text-amber-700 underline"
                >
                  Dignitaries' Messages &rarr;
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Pillars of SSVEHS (Vision, Mission & Core Values) */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 section-badge">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Cornerstones of Learning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
              Guided by Vision, Driven by Values
            </h2>
            <p className="text-slate-600 text-sm">
              Our guiding principles inspire every classroom lesson, extracurricular event, and student milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Vision Card */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col hover:-translate-y-1.5 group">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0B1E36] mb-3 group-hover:text-amber-700 transition-colors">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                In the globalized, techno-dominated society of the 21st century, trends in education are rapidly evolving. The holistic development of every child in a stimulating, creative environment remains our highest priority.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600">
                <span>Holistic Growth</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col hover:-translate-y-1.5 group">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0B1E36] mb-3 group-hover:text-sky-700 transition-colors">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                To provide an environment that emphasizes intellectual curiosity and emotional resilience, in which every student discovers their true potential and reaches the highest levels of academic and moral achievement.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-600">
                <span>Academic Rigor</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Core Values Card */}
            <div className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col hover:-translate-y-1.5 group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-extrabold text-[#0B1E36] mb-3 group-hover:text-emerald-700 transition-colors">
                Core Values
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                Integrity, respect, cultural pride, and community service. We instill in our students a deep love for lifelong learning and an unyielding sense of duty towards nation and humanity.
              </p>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
                <span>Character & Ethics</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Academic Wings (Pre-Primary, Primary, Secondary) */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 section-badge">
                <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
                <span>Academic Programs</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
                Structured Pathways from Playgroup to Std. X
              </h2>
            </div>
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-700 bg-amber-50 px-4 py-2.5 rounded-xl border border-amber-200/60 hover:bg-amber-100 transition-colors"
            >
              <span>View Admission Criteria</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Wing 1 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200/90 relative overflow-hidden group hover:border-amber-400/80 transition-all">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-600 mb-1">Foundational Years</div>
              <h3 className="text-2xl font-extrabold text-[#0B1E36] mb-2">Pre-Primary Section</h3>
              <p className="text-xs text-slate-500 font-semibold mb-4">Nursery • Junior KG • Senior KG</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Activity-oriented playway curriculum nurturing early literacy, motor coordination, phonetic clarity, and natural social confidence.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Sensory development & storytelling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Playground & audio-visual activities</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  <span>Attentive child-to-teacher ratio</span>
                </li>
              </ul>
              <Link
                to="/admissions"
                className="text-xs font-bold text-[#0B1E36] group-hover:text-amber-700 flex items-center gap-1 transition-colors"
              >
                <span>Enroll in Pre-Primary</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Wing 2 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200/90 relative overflow-hidden group hover:border-amber-400/80 transition-all">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1">Building Concepts</div>
              <h3 className="text-2xl font-extrabold text-[#0B1E36] mb-2">Primary Wing</h3>
              <p className="text-xs text-slate-500 font-semibold mb-4">Standard I through IV</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Strengthening core competencies in mathematics, environmental sciences, English fluency, and regional languages through inquiry-based teaching.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  <span>Experiential science workshops</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  <span>Arts, crafts & music integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-500"></span>
                  <span>Continuous formative assessment</span>
                </li>
              </ul>
              <Link
                to="/admissions"
                className="text-xs font-bold text-[#0B1E36] group-hover:text-sky-700 flex items-center gap-1 transition-colors"
              >
                <span>Enroll in Primary</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Wing 3 */}
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200/90 relative overflow-hidden group hover:border-amber-400/80 transition-all">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">Academic Mastery</div>
              <h3 className="text-2xl font-extrabold text-[#0B1E36] mb-2">Secondary Section</h3>
              <p className="text-xs text-slate-500 font-semibold mb-4">Standard V through X (SSC)</p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Rigorous preparation for Maharashtra Board examinations, Olympiads, science laboratories, computer literacy, and inter-school athletic championships.
              </p>
              <ul className="space-y-2 text-xs text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>100% Board passing track record</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Advanced Science & IT computer labs</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>Personalized academic mentoring</span>
                </li>
              </ul>
              <Link
                to="/admissions"
                className="text-xs font-bold text-[#0B1E36] group-hover:text-emerald-700 flex items-center gap-1 transition-colors"
              >
                <span>Enroll in Secondary</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Interactive Updates Hub (Notices, Events, School News) */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 section-badge">
                <BellRing className="w-3.5 h-3.5 text-amber-600" />
                <span>Information Center</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
                Notices, Campus News & Events
              </h2>
            </div>

            {/* Tab Switches */}
            <div className="inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300/60">
              <button
                onClick={() => setActiveNoticeTab('notices')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeNoticeTab === 'notices'
                    ? 'bg-[#0B1E36] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Official Notices ({noticesData.length})
              </button>
              <button
                onClick={() => setActiveNoticeTab('news')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeNoticeTab === 'news'
                    ? 'bg-[#0B1E36] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                News Articles ({newsData.length})
              </button>
              <button
                onClick={() => setActiveNoticeTab('events')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeNoticeTab === 'events'
                    ? 'bg-[#0B1E36] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Events ({eventsData.length})
              </button>
            </div>
          </div>

          {/* Tab 1: Notices Content */}
          {activeNoticeTab === 'notices' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {noticesData.slice(0, 6).map((notice) => (
                <div 
                  key={notice.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-amber-500" />
                        {notice.date}
                      </span>
                      <span className="text-[10px] font-bold uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                        Circular
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-[#0B1E36] group-hover:text-amber-700 transition-colors line-clamp-2 mb-2 leading-snug">
                      {notice.title}
                    </h4>
                  </div>

                  <div className="pt-4 border-t border-slate-100 mt-4 flex items-center justify-between">
                    <Link
                      to={`/details/notice/${notice.id}`}
                      className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                    >
                      <span>Read Circular</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: News Articles */}
          {activeNoticeTab === 'news' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.slice(0, 6).map((news) => (
                <div 
                  key={news.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col group"
                >
                  {news.image && (
                    <div className="h-44 overflow-hidden bg-slate-100 relative">
                      <img
                        src={news.image}
                        alt={news.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center gap-1">
                        <Newspaper className="w-3.5 h-3.5 text-sky-500" />
                        <span>{news.date}</span>
                      </div>
                      <h4 className="text-base font-bold text-[#0B1E36] group-hover:text-sky-700 transition-colors line-clamp-2 leading-snug">
                        {news.title}
                      </h4>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-4">
                      <Link
                        to={`/details/news/${news.id}`}
                        className="text-xs font-bold text-sky-700 hover:text-sky-900 flex items-center gap-1"
                      >
                        <span>Full Coverage</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Events */}
          {activeNoticeTab === 'events' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventsData.slice(0, 6).map((event) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col group"
                >
                  {event.image && (
                    <div className="h-44 overflow-hidden bg-slate-100 relative">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                  <div className="p-6 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] font-mono text-slate-400 mb-2 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-emerald-500" />
                        <span>{event.date}</span>
                      </div>
                      <h4 className="text-base font-bold text-[#0B1E36] group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                        {event.title}
                      </h4>
                    </div>

                    <div className="pt-4 border-t border-slate-100 mt-4">
                      <Link
                        to={`/details/event/${event.id}`}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
                      >
                        <span>Event Details</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 text-center">
            <Link
              to={activeNoticeTab === 'notices' ? '/notice' : activeNoticeTab === 'news' ? '/news' : '/events'}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1E36] bg-white border border-slate-300 px-5 py-2.5 rounded-xl hover:bg-slate-50 transition-all shadow-sm"
            >
              <span>View All {activeNoticeTab === 'notices' ? 'Notices' : activeNoticeTab === 'news' ? 'News' : 'Events'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 6. Meet Our Educators Section */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 section-badge">
                <Users className="w-3.5 h-3.5 text-amber-600" />
                <span>Dedicated Faculty</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
                Mentored by Passionate Educators
              </h2>
            </div>
            <Link
              to="/teachers"
              className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0B1E36] hover:bg-slate-800 px-5 py-2.5 rounded-xl shadow transition-colors"
            >
              <span>View Full Faculty Directory</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teachersData.slice(0, 4).map((teacher, idx) => (
              <TeacherCard key={idx} teacher={teacher} />
            ))}
          </div>

        </div>
      </section>

      {/* 7. Voices of SSVEHS (Testimonial Showcase) */}
      <section className="py-16 sm:py-20 bg-[#071526] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-radial from-[#16325B]/20 to-transparent pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center space-y-3 mb-12">
            <div className="section-badge-dark">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Parent & Alumni Voices</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Hundreds of Mumbai Families
            </h2>
          </div>

          <div className="space-y-6">
            <TestimonialCard testimonial={testimonialsData[activeTestimonialIdx]} />

            {/* Indicator Dots */}
            <div className="flex items-center justify-center gap-2.5 pt-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonialIdx(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonialIdx === idx
                      ? 'bg-amber-400 w-8'
                      : 'bg-slate-700 hover:bg-slate-600 w-2.5'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 8. Parent FAQs Accordion */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 section-badge">
              <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
              Everything You Need to Know
            </h2>
            <p className="text-slate-600 text-sm">
              Answers to the most common questions from prospective and enrolled parents.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen 
                      ? 'border-amber-400/80 bg-amber-50/20 shadow-sm' 
                      : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
                  }`}
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-extrabold text-[#0B1E36] text-sm sm:text-base">
                      {faq.q}
                    </span>
                    <span className={`p-1.5 rounded-full text-xs transition-transform ${isOpen ? 'bg-amber-500 text-slate-950 rotate-180' : 'bg-slate-200 text-slate-700'}`}>
                      ▼
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/faqs"
              className="text-xs font-bold text-amber-700 hover:text-amber-800 underline inline-flex items-center gap-1"
            >
              <span>View full admissions and policy FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* 9. High-Conversion Admissions Callout Banner */}
      <section className="py-14 cta-banner bg-gradient-to-r from-[#071526] via-[#0B1E36] to-[#16325B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md">
            
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 section-badge-dark">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Admissions 2026–27 Open</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Secure Your Child's Future with SSVEHS
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Limited seats available for Pre-Primary, Primary, and Secondary sections. Transparent merit admission procedure with dedicated parent counseling.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full lg:w-auto">
              <Link
                to="/admissions"
                className="w-full sm:w-auto text-center bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black px-8 py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 hover:scale-105 transition-all"
              >
                Apply Online Now
              </Link>
              <Link
                to="/fee-structure"
                className="w-full sm:w-auto text-center bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3.5 rounded-xl text-xs border border-white/20 transition-all"
              >
                View Fee Structure
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
