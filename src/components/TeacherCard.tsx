import React from 'react';
import type { TeacherItem } from '../data/schoolData';
import { UserCheck, GraduationCap } from 'lucide-react';

export const TeacherCard: React.FC<{ teacher: TeacherItem }> = ({ teacher }) => {
  return (
    <div className="bg-white rounded-2xl p-6 text-center border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-amber-400/50 transition-all duration-300 flex flex-col items-center group relative overflow-hidden">
      {/* Top subtle gold accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Avatar Container */}
      <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 rounded-full overflow-hidden border-4 border-slate-100 group-hover:border-amber-400/60 transition-all duration-300 bg-slate-50 flex items-center justify-center relative shadow-inner">
        {teacher.image ? (
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        ) : null}
        <UserCheck className="w-12 h-12 text-slate-300 absolute" />
      </div>

      {/* Teacher Name */}
      <h5 className="text-base sm:text-lg font-extrabold text-[#0B1E36] tracking-tight mb-1 group-hover:text-amber-700 transition-colors">
        {teacher.name}
      </h5>
      
      {/* Role Pill */}
      <span className="inline-block text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200/60 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
        {teacher.role}
      </span>

      {/* Trust Badge */}
      <div className="mt-auto pt-3 border-t border-slate-100 w-full flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
        <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
        <span>Certified Educator • SSVEHS</span>
      </div>
    </div>
  );
};
