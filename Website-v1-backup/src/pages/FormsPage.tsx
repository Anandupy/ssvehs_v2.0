import React from 'react';
import { FileText, Download, CheckCircle, Clock } from 'lucide-react';

export const FormsPage: React.FC = () => {
  const formList = [
    {
      title: 'School Admission Application Form (2026–2027)',
      category: 'Admissions',
      size: '1.2 MB',
      description: 'Standard admission registration form for Nursery, Jr. KG, Sr. KG, Primary (1st to 4th), and Secondary (5th to 10th).',
    },
    {
      title: 'Bonafide Certificate Application Form',
      category: 'Administrative Certificates',
      size: '340 KB',
      description: 'Official requisition form required for passport, railway concessions, scholarship, or residential proof.',
    },
    {
      title: 'School Leaving Certificate (LC / TC) Form',
      category: 'Transfer & Leaving',
      size: '420 KB',
      description: 'Application for issuance of School Leaving Certificate / Transfer Certificate (one calendar month prior notice required).',
    },
    {
      title: 'Student Leave & Absence Requisition Slip',
      category: 'Attendance & Leave',
      size: '210 KB',
      description: 'Medical leave or emergency absence sanctioned declaration form to be submitted with the student handbook.',
    },
  ];

  const handleDownload = (formTitle: string) => {
    alert(`Downloading ${formTitle}. Physical copies are also available at the school fee counter.`);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <FileText className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Official School Forms
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Downloadable official admission forms, certificate applications, and undertakings for parents and guardians.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <h2 className="text-xl font-bold text-[#002147]">
              Available Downloadable Documents
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Print and fill the forms clearly in capital letters before submitting to the school administrative counter.
            </p>
          </div>

          <div className="space-y-4">
            {formList.map((form, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-gray-200/80 hover:border-sky-300 hover:bg-sky-50/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-sky-100 text-sky-700 rounded-xl shrink-0 mt-1">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100">
                      {form.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-[#002147] mt-1">
                      {form.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                      {form.description}
                    </p>
                    <span className="text-[11px] text-gray-400 font-mono mt-1 block">
                      PDF Document • {form.size}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => handleDownload(form.title)}
                  className="inline-flex items-center gap-2 bg-[#002147] hover:bg-sky-900 text-white text-xs sm:text-sm font-bold py-2.5 px-5 rounded-xl transition-colors shrink-0 shadow-sm cursor-pointer self-end sm:self-center"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Form</span>
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 bg-slate-50 p-4 rounded-xl flex items-center justify-between flex-col sm:flex-row gap-2 text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Forms are also available physically at the school fees counter.</span>
            </div>
            <div className="flex items-center gap-1.5 text-sky-700 font-medium">
              <Clock className="w-4 h-4" />
              <span>Submission timings: 9:00 AM - 3:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
