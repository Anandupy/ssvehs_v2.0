import React from 'react';
import { Sparkles, Target, FileText } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const facilities = [
    {
      img: '/assets/img/school.png',
      title: 'Quality Education',
      desc: 'Providing top-notch educational experiences to nurture young minds and build a strong foundation for their future.',
    },
    {
      img: '/assets/img/certificate.png',
      title: 'Certified Teachers',
      desc: 'A team of dedicated and experienced educators committed to fostering holistic development in students.',
    },
    {
      img: '/assets/img/classroom.png',
      title: 'Modern Facilities',
      desc: 'Equipped with modern infrastructure, laboratories, and technology to enhance the learning environment.',
    },
    {
      img: '/assets/img/medal2--v1.png',
      title: 'Co-Curricular Activities',
      desc: 'A rich spectrum of activities, including sports, martial arts, arts, and clubs, to encourage well-rounded growth.',
    },
    {
      img: '/assets/img/individual-behavior.png',
      title: 'Character Building',
      desc: 'Focusing on instilling strong values and ethics in students, nurturing them to be responsible citizens.',
    },
    {
      img: '/assets/img/connected-people.png',
      title: 'Parent-Teacher Collaboration',
      desc: 'Creating a strong partnership between parents and teachers to ensure holistic development and success for every student.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Top Banner */}
      <div className="w-full bg-[#002147] overflow-hidden shadow-sm">
        <img
          src="/assets/img/abt-banner.png"
          alt="About SSVEHS Banner"
          className="w-full max-h-[360px] object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* About Info Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="section-badge">
                Our Heritage & Ideals
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B1E36] tracking-tight">
                Know More About Us
              </h1>
              <p className="text-slate-600 leading-relaxed text-base">
                <strong>P. K. Krishnan Educational Trust’s SHREE SIDDHI VINAYAGAR ENGLISH HIGH SCHOOL</strong> was established on <strong>23rd July 1981</strong> by Honorable Trustee <strong>Shree P.K. Krishnan sir</strong> in Vikhroli — the heart of Mumbai. It is a Co-Educational English Medium School affiliated with the <strong>MAHARASHTRA STATE BOARD</strong>. Its main objective is Education — aiming at the overall integral development of the children. No discrimination of Caste, Creed or race.
              </p>
              <p className="text-slate-600 leading-relaxed text-base">
                SSVEHS keeps the high standard of education. The value based education makes students conscious of their responsibilities towards the country. It also helps to infuse in them the higher values of life such as love, peace, justice, patriotism, generosity, service-mindedness and love towards hard work. Close attention is paid to the many facets of education to provide them an education that is relevant, meaningful, and transformative.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm flex flex-col items-center">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl z-10 bg-slate-50">
                  <img
                    src="/assets/img/abt1.jpg"
                    alt="SSVEHS Building"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex justify-between w-full -mt-16 z-20 px-2">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                    <img
                      src="/assets/img/abt2.jpg"
                      alt="SSVEHS Classroom"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">
                    <img
                      src="/assets/img/abt3.jpg"
                      alt="SSVEHS Activity"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="mb-14">
          <div className="text-center mb-8 space-y-2">
            <span className="section-badge">
              Why Choose SSVEHS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1E36]">
              Our Pillars of Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((fac, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all border border-slate-200/80 flex items-start gap-4 hover:-translate-y-1"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-amber-50 p-2.5 flex items-center justify-center border border-amber-200/60">
                  <img
                    src={fac.img}
                    alt={fac.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#002147] mb-1.5">
                    {fac.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {fac.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-36 h-36 shrink-0 bg-sky-50 rounded-xl p-4 flex items-center justify-center">
              <img
                src="/assets/img/vision.png"
                alt="Our Vision"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-sky-600">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-2xl font-extrabold text-[#002147]">Our Vision</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                In the globalized Techno dominated society of the 21st Century, trends in education are changing. The Holistic Development of a child in a stimulating environment is our highest priority.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-36 h-36 shrink-0 bg-sky-50 rounded-xl p-4 flex items-center justify-center">
              <img
                src="/assets/img/mission.png"
                alt="Our Mission"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2 text-sky-600">
                <Target className="w-5 h-5" />
                <h3 className="text-2xl font-extrabold text-[#002147]">Our Mission</h3>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                To provide an environment that lays emphasis on intellectual and emotional growth in which every student discovers and realizes their potential and attains the highest academic standard.
              </p>
            </div>
          </div>
        </div>

        {/* Mediclaim Policy Link */}
        <div className="bg-sky-50 border border-sky-200 rounded-xl p-6 text-center shadow-sm">
          <p className="text-sm text-sky-900 font-semibold mb-2">Student Health & Welfare Coverage</p>
          <a
            href="#mediclaim"
            onClick={(e) => {
              e.preventDefault();
              alert("Student Group Mediclaim policy document is accessible at the school administration office.");
            }}
            className="inline-flex items-center gap-2 text-sky-700 hover:text-sky-900 font-bold underline text-base"
          >
            <FileText className="w-5 h-5" />
            <span>View Group Mediclaim Policy Details</span>
          </a>
        </div>

      </div>
    </div>
  );
};
