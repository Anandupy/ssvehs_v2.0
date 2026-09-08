import React from 'react';
import { Shield, Lock, FileCheck } from 'lucide-react';
import { schoolContact } from '../data/schoolData';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <Shield className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Commitment to student and parent data protection and privacy standards at Shree Siddhi Vinayagar English High School.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8 text-gray-700 leading-relaxed text-sm sm:text-base">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-[#002147] flex items-center gap-2">
              <Lock className="w-5 h-5 text-sky-600" />
              <span>1. Information We Collect</span>
            </h2>
            <p>
              Shree Siddhi Vinayagar English High School (managed by P. K. Krishnan Educational Trust) collects personal information strictly required for academic enrollment, statutory board reporting, and school communication:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li>Student details: Name, date of birth, gender, address, Aadhaar card number, blood group, and emergency contact details.</li>
              <li>Parent/Guardian details: Names, occupation, mobile numbers, email addresses, and residential address proofs.</li>
              <li>Academic & Health records: Past report cards, attendance logs, and medical allergies/fitness certificates.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-[#002147] flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-sky-600" />
              <span>2. Use of Information</span>
            </h2>
            <p>
              All collected student information is utilized solely for legitimate educational, safety, and administrative purposes:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-xs sm:text-sm text-gray-600">
              <li>Registering students with the Maharashtra State Board of Secondary and Higher Secondary Education.</li>
              <li>Dispatching daily homework, circulars, fee reminders, and attendance updates via People Information System (PIS).</li>
              <li>Ensuring campus security, verification of auto-rickshaw/van transport drivers, and emergency medical triage.</li>
            </ul>
          </section>

          <section className="space-y-3 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-[#002147]">3. Data Security & Confidentiality</h2>
            <p>
              We enforce administrative, technical, and physical safeguards to protect student and parent records from unauthorized access, loss, or disclosure. We do not sell, lease, or commercially share personal data with external third parties under any circumstances.
            </p>
          </section>

          <section className="space-y-3 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-[#002147]">4. Photographs & Media Release</h2>
            <p>
              Photographs and videos taken during school events, cultural celebrations, sports meets, and prize distributions may be used in official school publications, website galleries, and annual magazines to celebrate student accomplishments. Parents who wish to opt out can submit a written notice to the school office.
            </p>
          </section>

          <section className="space-y-3 border-t border-gray-100 pt-6">
            <h2 className="text-xl font-bold text-[#002147]">5. Contact Us Regarding Privacy</h2>
            <p>
              If you have any questions or require updates to your personal records, please reach out to our administrative desk:
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-xs sm:text-sm text-gray-800 space-y-1 border border-gray-200">
              <p><strong>{schoolContact.name}</strong></p>
              <p>Address: {schoolContact.address}</p>
              <p>Email: <a href="mailto:info@ssvehs.com" className="text-sky-700 underline">info@ssvehs.com</a></p>
              <p>Phone: {schoolContact.phone}</p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
