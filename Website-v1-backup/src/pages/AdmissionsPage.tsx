import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Clock, HelpCircle } from 'lucide-react';

export const AdmissionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jrkg' | 'srkg' | 'std1' | 'promote1' | 'promote5'>('jrkg');

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Hero Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Admissions Process 2026–2027
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Registration Procedure & Rules for Admission to Pre-Primary, Primary, and Secondary sections at Shree Siddhi Vinayagar English High School.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        
        {/* Admission Announcement Banner */}
        <div className="bg-gradient-to-r from-sky-700 via-sky-600 to-[#002147] text-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col md:flex-row items-center justify-between gap-6 border border-sky-500/30">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-yellow-400 text-slate-900 font-extrabold text-xs rounded-full uppercase tracking-wider">
              Admissions Now Open
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Enroll Your Child for Academic Year 2026–2027
            </h2>
            <p className="text-sky-100 text-sm max-w-xl">
              Quality value-based education following the Maharashtra State Board. Collect forms from the school fees counter during working hours.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              to="/forms"
              className="bg-white hover:bg-gray-100 text-[#002147] font-bold py-3 px-6 rounded-xl text-sm transition-colors text-center shadow-sm"
            >
              Download Forms
            </Link>
            <Link
              to="/contact-us"
              className="bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm transition-colors text-center shadow-sm"
            >
              Contact Office
            </Link>
          </div>
        </div>

        {/* 3 Step Procedure */}
        <div>
          <div className="text-center mb-8">
            <span className="text-sky-600 font-bold text-xs uppercase tracking-widest">
              Simple 3-Step Journey
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002147] mt-1">
              Admission Registration Procedure
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-[#17a2b8] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase">
                    Stage 1
                  </span>
                  <h4 className="text-2xl font-black">STEP 1</h4>
                </div>
                <h5 className="font-bold text-base mb-3 border-b border-white/20 pb-2">
                  Collect Admission Form
                </h5>
                <div className="space-y-3 text-xs sm:text-sm text-sky-50 leading-relaxed">
                  <p><strong>For Grade JR.KG to Grade I:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bring Birth Certificate or previous school Result.</li>
                  </ul>
                  <p><strong>For Grade II to Grade X:</strong></p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Bring Bonafide certificate & previous academic progress report.</li>
                  </ul>
                  <p className="pt-2 font-medium">Collect admission form from the school fees counter.</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#002147] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase">
                    Stage 2
                  </span>
                  <h4 className="text-2xl font-black">STEP 2</h4>
                </div>
                <h5 className="font-bold text-base mb-3 border-b border-white/20 pb-2">
                  Document Submission
                </h5>
                <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                  Submit the completed Admission Form on the scheduled date along with necessary self-attested documents, passport photographs, and applicable registration fees.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#17a2b8] text-white rounded-2xl p-6 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-white/20 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase">
                    Stage 3
                  </span>
                  <h4 className="text-2xl font-black">STEP 3</h4>
                </div>
                <h5 className="font-bold text-base mb-3 border-b border-white/20 pb-2">
                  Processing & Confirmation
                </h5>
                <p className="text-xs sm:text-sm text-sky-50 leading-relaxed">
                  Admission will be processed and seat confirmed only after verification of eligibility, submission of mandatory certificates, and receipt of registration fees.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria Tabs */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#002147]">
              Admission Eligibility Criteria
            </h3>
            <p className="text-xs text-gray-500 mt-1">Select grade category to view age criteria & documentation details</p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {[
              { id: 'jrkg', label: 'JR. KG' },
              { id: 'srkg', label: 'SR. KG' },
              { id: 'std1', label: 'STD 1ST' },
              { id: 'promote1', label: 'STD. SR KG TO 1ST' },
              { id: 'promote5', label: 'STD. 4TH TO 5TH' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2 px-5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#002147] text-white shadow-md'
                    : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80">
            {activeTab === 'jrkg' && (
              <div className="space-y-2">
                <h4 className="text-base font-bold text-[#002147]">Junior KG Eligibility Criteria:</h4>
                <p className="text-sm text-gray-700"><strong>Birth Date Range:</strong> 01/01/2022 to 31/12/2022</p>
                <p className="text-sm text-gray-700"><strong>Age:</strong> 4 years and above as of statutory cut-off date.</p>
              </div>
            )}

            {activeTab === 'srkg' && (
              <div className="space-y-2">
                <h4 className="text-base font-bold text-[#002147]">Senior KG Eligibility Criteria:</h4>
                <p className="text-sm text-gray-700"><strong>Birth Date Range:</strong> 01/01/2021 to 31/12/2021</p>
                <p className="text-sm text-gray-700"><strong>Age:</strong> 5 years and above as of statutory cut-off date.</p>
              </div>
            )}

            {activeTab === 'std1' && (
              <div className="space-y-2">
                <h4 className="text-base font-bold text-[#002147]">Standard 1st Eligibility Criteria:</h4>
                <p className="text-sm text-gray-700"><strong>Birth Date Range:</strong> 01/01/2020 to 31/12/2020</p>
                <p className="text-sm text-gray-700"><strong>Age:</strong> 6 years and above as per Maharashtra Govt. norms.</p>
              </div>
            )}

            {activeTab === 'promote1' && (
              <div className="space-y-4">
                <h4 className="text-base font-bold text-[#002147]">In-House Promotion: Grade SR. KG to Grade I</h4>
                <p className="text-sm text-gray-700">
                  In-house admissions for promotion from Grade SR. KG to Grade I commence between <strong>9:00 AM to 3:30 PM</strong>.
                </p>
                <h5 className="font-bold text-xs uppercase tracking-wider text-sky-700 mt-3">Mandatory Documents Required:</h5>
                <ol className="list-decimal pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                  <li>Applicable term fee amount as per schedule.</li>
                  <li>Passport size coloured photographs with white background (Student, Father, and Mother).</li>
                  <li>Colourful self-attested photocopy of student's Aadhar Card.</li>
                  <li>Colourful self-attested photocopy of student's Birth Certificate.</li>
                  <li>Self-declaration by parents of religion, caste, and category (Caste certificate compulsory if other than Open category).</li>
                  <li>Parent's ID proof, Address proof, and Income proof.</li>
                </ol>
              </div>
            )}

            {activeTab === 'promote5' && (
              <div className="space-y-4">
                <h4 className="text-base font-bold text-[#002147]">Promotion from Primary to Secondary: Grade 4th to 5th</h4>
                <p className="text-sm text-gray-700">
                  Internal promotions from Standard 4 to Standard 5 take place in the secondary wing. Timings: <strong>9:00 AM to 11:00 AM</strong>.
                </p>
                <h5 className="font-bold text-xs uppercase tracking-wider text-sky-700 mt-3">Requirements:</h5>
                <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-gray-700">
                  <li>Original Std. 4th Annual Progress Report Card.</li>
                  <li>Updated parent contact numbers and residence verification.</li>
                  <li>Submission of secondary section handbook undertaking.</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Counter timings & Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <Clock className="w-8 h-8 text-sky-600 shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-[#002147] mb-1">Fees Counter & Office Hours</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Monday to Saturday: <strong>8:30 AM to 3:30 PM</strong><br />
                (Closed on Sundays and State Gazetted Holidays)
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <HelpCircle className="w-8 h-8 text-sky-600 shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-[#002147] mb-1">Admissions Helpline</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Telephone: <strong>022-2574 5402</strong><br />
                Email: <strong>info@ssvehs.com</strong> / <strong>principal@ssvehs.com</strong>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
