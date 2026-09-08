import React from 'react';
import { Users, AlertTriangle, FileText, PhoneCall } from 'lucide-react';
import { parentRules } from '../data/schoolData';

export const RulesParentsPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <Users className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Rules & Regulations for Parents
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Fostering mutual collaboration between parents, guardians, and the school faculty for the holistic upbringing of every child.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8">
          
          <div className="border-l-4 border-sky-600 pl-4 py-1">
            <h2 className="text-xl sm:text-2xl font-bold text-[#002147]">
              Parent-School Partnership Guidelines
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Parents are requested to note and strictly comply with the following institutional procedures.
            </p>
          </div>

          <div className="space-y-4">
            {parentRules.map((rule, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-gray-200/70 hover:bg-sky-50/50 hover:border-sky-300 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                    {rule}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Transport safety alert box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div className="text-sm">
              <h4 className="font-bold text-amber-900 text-base mb-1">
                Maharashtra Government Transport Directive Notice
              </h4>
              <p className="text-amber-800 leading-relaxed">
                Parents engaging private auto-rickshaws or cabs for student transit must submit driver identification cards, commercial badges, vehicle permit, and police verification papers to the administrative office as mandated by the Maharashtra Education Department.
              </p>
            </div>
          </div>

          {/* Contact help line */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-4 h-4 text-sky-600" />
              <span>Have queries regarding student handbook? Call: <strong>022-2574 5402</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-600" />
              <span>Office hours: 8:30 AM to 3:30 PM (Mon - Sat)</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
