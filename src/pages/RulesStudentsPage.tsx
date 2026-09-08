import React from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export const RulesStudentsPage: React.FC = () => {
  const rules = [
    { num: 1, color: 'border-sky-500 bg-sky-50/40', text: 'Parents are requested to get themselves acquainted with rules of the school; ignorance is no excuse.' },
    { num: 2, color: 'border-emerald-500 bg-emerald-50/40', text: 'Politeness, courtesy of speech and conduct, as well as cleanliness of dress are expected from each pupil.' },
    { num: 3, color: 'border-amber-500 bg-amber-50/40', text: 'No child suffering from any contagious or infectious disease shall be permitted to attend the class.' },
    { num: 4, color: 'border-orange-500 bg-orange-50/40', text: 'The school will not be responsible for the loss of books, money etc.; the pupils must look after their own things. It is not advisable for pupils to have money or other valuable articles in their own keeping.' },
    { num: 5, color: 'border-purple-500 bg-purple-50/40', text: 'A pupil absenting himself from school without leave for seven consecutive days (including holidays) may be marked left. He/She to get re-admitted will have to pay fresh admission fees.' },
    { num: 6, color: 'border-rose-500 bg-rose-50/40', text: 'Irregular attendance, habitual idleness, disobedience or conduct injurious to the school are sufficient reason for the dismissal of a student of any class at any time of the year.' },
    { num: 7, color: 'border-blue-500 bg-blue-50/40', text: 'When the pupil has to be absent on account of sudden illness or urgent necessity, a word should be sent to school authorities by the parent.' },
    { num: 8, color: 'border-teal-500 bg-teal-50/40', text: 'Calendar month’s notice is to be given for the withdrawal of a student. Such notice should be in writing by parent or guardian.' },
    { num: 9, color: 'border-amber-500 bg-amber-50/40', text: 'The child should remain absent from the school for the whole day instead of bringing a note asking for half day leave.' },
    { num: 10, color: 'border-red-500 bg-red-50/40', text: 'Any damage done to school property must be made good by the parents.' },
    { num: 11, color: 'border-indigo-500 bg-indigo-50/40', text: 'No child will be allowed to go home during the recess.' },
    { num: 12, color: 'border-violet-500 bg-violet-50/40', text: 'There should be silence during the change of periods.' },
    { num: 13, color: 'border-sky-500 bg-sky-50/40', text: 'When moving along the corridors or stairways the rule is always keep left, walk in single line, and maintain silence.' },
    { num: 14, color: 'border-emerald-500 bg-emerald-50/40', text: 'Running, shouting, or whistling in the corridors and school buildings is strictly prohibited.' },
    { num: 15, color: 'border-green-500 bg-green-50/40', text: 'Every child should particularly avoid throwing waste paper, fruit peels etc. out of the window or in the corridors or on the school ground.' },
    { num: 16, color: 'border-yellow-500 bg-yellow-50/40', text: 'If admissions are not taken on dates told for different sections then it will be considered that parents are not interested to seek admission.' },
    { num: 17, color: 'border-cyan-500 bg-cyan-50/40', text: 'The school day begins with an assembly prayer in which all students must attend in regular class formation.' },
    { num: 18, color: 'border-pink-500 bg-pink-50/40', text: 'All notes of absence must be written by the parents of the pupil only in the leave record in the school calendar.' },
    { num: 19, color: 'border-blue-500 bg-blue-50/40', text: 'All students are expected to speak English within the school premises.' },
    { num: 20, color: 'border-rose-500 bg-rose-50/40', text: 'Applying mehendi, dyeing or colouring of hair, applying nail polish or kajal is strictly prohibited.' },
    { num: 21, color: 'border-purple-500 bg-purple-50/40', text: 'Attendance is compulsory on the re-opening day after vacation.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Rules & Regulations for Students
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Inspiring creativity, moral character, and lifelong discipline through clear institutional guidelines.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#002147] inline-block border-b-2 border-sky-500 pb-1">
            General School Rules & Notice Board
          </h2>
          <p className="text-xs text-gray-500 mt-2">
            Every pupil enrolled in SSVEHS is required to adhere strictly to the following disciplinary code.
          </p>
        </div>

        {/* Pinned cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rules.map((rule) => (
            <div
              key={rule.num}
              className={`bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 relative border-t-4 ${rule.color} border border-gray-100 flex flex-col justify-between`}
            >
              <img
                src="/assets/img/pin.png"
                alt="pin"
                className="w-8 h-8 absolute -top-3.5 right-4 drop-shadow-sm pointer-events-none"
              />
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-7 h-7 rounded-full bg-[#002147] text-white font-bold text-xs flex items-center justify-center shadow-xs">
                    {rule.num}
                  </span>
                  <h4 className="font-bold text-[#002147] text-base">
                    Rule {rule.num}
                  </h4>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {rule.text}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100/80 flex items-center gap-1.5 text-xs text-sky-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Mandatory School Policy</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
