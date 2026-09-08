import React from 'react';
import { Quote, User, Award } from 'lucide-react';

export const MessagesPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] overflow-hidden shadow-sm">
        <img
          src="/assets/img/abt-banner-2.png"
          alt="Dignitaries Banner"
          className="w-full max-h-[360px] object-cover"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-8">
        
        <div className="text-center mb-8">
          <span className="text-sky-600 font-bold text-xs uppercase tracking-widest">
            Leadership & Vision
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#002147] mt-1">
            Messages from Dignitaries
          </h1>
          <p className="text-gray-600 text-sm max-w-xl mx-auto mt-2">
            Guiding principles and words of wisdom from our school management and leadership.
          </p>
        </div>

        {/* Message from Trustee */}
        <div className="bg-[#002147] text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <Quote className="w-20 h-20 text-sky-400/10 absolute -bottom-4 -right-4 pointer-events-none" />
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-full bg-sky-500/20 text-sky-400 border border-sky-400/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-sky-300">
                School Leadership
              </span>
              <h2 className="text-2xl font-extrabold text-white">
                MESSAGE FROM TRUSTEE
              </h2>
            </div>
          </div>

          <p className="text-sky-50 text-base sm:text-lg leading-relaxed italic relative z-10">
            &quot;As a school trustee, I take great pride in the progress and achievements of our institution. Our commitment to providing quality education and fostering a nurturing environment for our students remains unwavering. Together with the dedicated staff, parents, and students, we are shaping future leaders and responsible citizens. Let us continue this journey of excellence.&quot;
          </p>
          <div className="mt-6 pt-4 border-t border-sky-800 flex items-center justify-between text-xs text-sky-200">
            <span className="font-semibold text-white">Shree P. K. Krishnan</span>
            <span>Honorable Trustee & Founder, SSVEHS</span>
          </div>
        </div>

        {/* Message from Principal */}
        <div className="bg-[#17a2b8] text-white rounded-2xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
          <Quote className="w-20 h-20 text-white/10 absolute -bottom-4 -right-4 pointer-events-none" />
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-full bg-white/20 text-white border border-white/30">
              <User className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-sky-100">
                Academic Administration
              </span>
              <h2 className="text-2xl font-extrabold text-white">
                MESSAGE FROM PRINCIPAL
              </h2>
            </div>
          </div>

          <p className="text-white text-base sm:text-lg leading-relaxed italic relative z-10">
            &quot;It is with immense pride and gratitude that I lead this exceptional school. Our students are not just learners but also explorers, innovators, and compassionate individuals. With the support of our committed teaching staff and the unwavering trust of our parents and guardians, we are creating a community of learners that is second to none. I look forward to each day of nurturing the talents and dreams of our students.&quot;
          </p>
          <div className="mt-6 pt-4 border-t border-sky-400/40 flex items-center justify-between text-xs text-sky-100">
            <span className="font-semibold text-white">Ms. Renuka Singh</span>
            <span>Principal, Shree Siddhi Vinayagar English High School</span>
          </div>
        </div>

      </div>
    </div>
  );
};
