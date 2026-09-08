import React from 'react';
import type { TeacherItem } from '../data/schoolData';
import { Award, UserCheck } from 'lucide-react';

export const TeacherCard: React.FC<{ teacher: TeacherItem }> = ({ teacher }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 flex flex-col items-center group">
      <div className="w-28 h-28 sm:w-32 sm:h-32 mb-4 rounded-full overflow-hidden border-4 border-sky-100 group-hover:border-sky-500 transition-colors duration-300 bg-sky-50 flex items-center justify-center relative shadow-inner">
        {teacher.image ? (
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              // fallback if image fails
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        ) : null}
        <UserCheck className="w-12 h-12 text-sky-600/40 absolute" />
      </div>

      <h5 className="text-base sm:text-lg font-bold text-[#002147] tracking-wide mb-1 group-hover:text-sky-700 transition-colors">
        {teacher.name}
      </h5>
      
      <p className="text-xs sm:text-sm italic font-semibold text-sky-600 uppercase tracking-wider mb-2">
        {teacher.role}
      </p>

      <div className="mt-auto pt-3 border-t border-gray-100 w-full flex items-center justify-center gap-1.5 text-xs text-gray-500">
        <Award className="w-3.5 h-3.5 text-amber-500" />
        <span>P.K.K. Educational Trust Faculty</span>
      </div>
    </div>
  );
};
