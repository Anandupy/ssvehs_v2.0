import React from 'react';
import { BookMarked, Download, CheckCircle2 } from 'lucide-react';

export const CodeOfConductPage: React.FC = () => {
  const points = [
    {
      num: 1,
      title: 'Respect and Courtesy',
      desc: 'Treat all members of the school community (teaching and non-teaching staff) with respect and courtesy, creating an environment of mutual appreciation and understanding. Respect the privacy and confidentiality of information shared by the school, teachers, staff, and other parents regarding students and school matters.',
    },
    {
      num: 2,
      title: 'Communication Guidelines',
      desc: 'Parents are welcome to make suggestions and give their valuable inputs using prescribed modes: in writing, via email (info@ssvehs.com), or in person. Any and all questions related to the administrative working of the school should be brought forth in the prescribed manner to the administrative office.',
    },
    {
      num: 3,
      title: 'Parent-Teacher Meetings (PTM)',
      desc: 'PTM meetings are intended for interactions with class teachers and should focus specifically on classroom activities, academic performance, and personal growth. Administrative queries should be addressed directly to the administrative office.',
    },
    {
      num: 4,
      title: 'Behaviour and Environment',
      desc: 'Maintain the sanctity of the school environment. Your conduct reflects directly on your children. Please uphold respectful behaviour at all times. Avoid criticizing the school or teachers in the presence of your child, as it can undermine respect for educators and the education system.',
    },
    {
      num: 5,
      title: 'Conduct Standards',
      desc: 'Avoid using loud, abusive language, or disruptive behaviour towards any school employee. Such actions will result in strict disciplinary measures in accordance with school bylaws.',
    },
    {
      num: 6,
      title: 'Group Actions',
      desc: 'Refrain from forming groups or creating a mob-like environment to address grievances. As a member of the unaided school forum, the school reserves the right to take action against such behaviour and in extreme cases legal recourse would be taken.',
    },
    {
      num: 7,
      title: 'Parental Authority and Legal Recourse',
      desc: 'Unless a legal document of guardianship is officially presented to the school administration, only parents are at liberty to approach school administration on behalf of their child.',
    },
    {
      num: 8,
      title: 'Adherence to School Policies',
      desc: 'Familiarize yourself with and adhere to the school’s policies, procedures, rules, and regulations concerning fees payment, attendance, discipline, dress code, and academic expectations.',
    },
    {
      num: 9,
      title: 'Complaint Procedure and Conflict Resolution',
      desc: 'Handle conflicts with discretion and mutual respect. Approach the class teacher first for legitimate concerns and seek an appointment with the Supervisor/Principal for further resolution.',
    },
    {
      num: 10,
      title: 'Active Participation',
      desc: 'Ensure punctual participation in school events, parent-teacher meetings, and volunteer opportunities that enrich the school community. Lead by example with integrity, honesty, and ethical behaviour, serving as a positive role model for your child.',
    },
    {
      num: 11,
      title: 'Home Environment',
      desc: 'Create a supportive home environment that encourages academic growth and reinforces school values. Encourage your child to use respectful language and courteous behaviour towards others.',
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <BookMarked className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Code of Conduct
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Ethical standards, mutual respect, and guidelines for parents and guardians of SSVEHS students.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8">
          
          <div className="bg-sky-50/60 p-5 rounded-xl border border-sky-100 text-sm text-gray-700 leading-relaxed">
            As valued members of our school community, parents play a pivotal role in shaping the educational journey of our students. We believe that fostering a culture of respect, empathy, and collaboration is crucial for the overall development of our children. Therefore, we humbly request all parents to adhere to the following code of conduct:
          </div>

          <div className="space-y-6">
            {points.map((p) => (
              <div key={p.num} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-6 h-6 rounded-md bg-[#002147] text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {p.num}
                  </span>
                  <h3 className="text-lg font-bold text-[#002147]">
                    {p.title}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed pl-9">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-emerald-900 text-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              By upholding this code of conduct, parents contribute significantly to the success of their children’s educational journey. Cooperation and adherence to these principles will ensure excellence across all areas of school life.
            </p>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => alert("The official Code of Conduct PDF can be requested or downloaded from the school administrative portal.")}
              className="inline-flex items-center gap-2 bg-[#002147] hover:bg-sky-900 text-white font-bold py-3 px-6 rounded-xl text-sm transition-colors shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Official Code of Conduct (PDF)</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
