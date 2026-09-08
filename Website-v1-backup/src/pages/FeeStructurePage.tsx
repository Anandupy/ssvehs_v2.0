import React from 'react';
import { CreditCard, Check, AlertCircle, Phone, Clock } from 'lucide-react';

export const FeeStructurePage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      {/* Banner */}
      <div className="w-full bg-[#002147] py-12 px-4 text-center text-white border-b-4 border-[#17a2b8]">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 mb-2">
            <CreditCard className="w-6 h-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About Fees & Payment Rules
          </h1>
          <p className="text-sky-200 text-sm sm:text-base max-w-2xl mx-auto">
            Fee structure guidelines, payment due dates, and verified payment methods for Shree Siddhi Vinayagar English High School.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-10">
        
        {/* Important Rule Alert */}
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto shadow-sm">
          <h2 className="text-xl font-bold text-[#002147] mb-2">
            Important Fee Regulation
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Please get in touch with the school for specific grade-wise fee details. Fees must be paid strictly <strong>on or before 20th of every month</strong>. In case of further delay, a fine of <strong>Rs. 10 will be applicable for each day</strong> till the time of payment.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-sky-800 bg-sky-200/60 px-3 py-1.5 rounded-full">
            <Clock className="w-4 h-4" />
            <span>Fees can be paid on a monthly, quarterly, or annual basis</span>
          </div>
        </div>

        {/* 3 Payment Methods Cards */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-extrabold text-[#002147]">
              Approved Payment Methods
            </h3>
            <p className="text-xs text-gray-500 mt-1">Select your preferred mode of fee remittance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Offline Mode */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col group">
              <div className="h-48 relative overflow-hidden bg-slate-900">
                <img
                  src="/assets/img/offline-mode.jpg"
                  alt="Offline Mode"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-transparent to-transparent flex items-end p-4">
                  <h4 className="text-xl font-bold text-white">Offline Mode</h4>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Pay by cash or cheque directly at the school fees counter.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Instant printed computer receipt issued immediately.</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 text-xs text-gray-500">
                  Available Mon–Sat: 8:30 AM to 3:30 PM
                </div>
              </div>
            </div>

            {/* 2. Online Mode (QR Code) */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col group">
              <div className="h-48 relative overflow-hidden bg-slate-900">
                <img
                  src="/assets/img/online-mode.jpg"
                  alt="Online Mode"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-transparent to-transparent flex items-end p-4">
                  <h4 className="text-xl font-bold text-white">Online Mode (UPI/QR)</h4>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2 text-sm text-gray-700">
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Scan the official school UPI QR code located at the school fees counter.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Supports Google Pay, PhonePe, Paytm, and all UPI apps.</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 text-xs text-gray-500">
                  Secure instant contactless transaction
                </div>
              </div>
            </div>

            {/* 3. Bank Transfer (NEFT/RTGS/IMPS) */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col group">
              <div className="h-48 relative overflow-hidden bg-slate-900">
                <img
                  src="/assets/img/bank-mode.jpg"
                  alt="Bank Mode"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002147] via-transparent to-transparent flex items-end p-4">
                  <h4 className="text-xl font-bold text-white">Direct Bank Transfer</h4>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5 text-xs sm:text-sm text-gray-800 bg-slate-50 p-3 rounded-lg border border-slate-200">
                  <p><strong>Bank:</strong> Saraswat Co-op Bank Ltd</p>
                  <p><strong>Account Name:</strong> Shree Siddhivinayagar English High School</p>
                  <p><strong>A/C Number:</strong> 124100100103554</p>
                  <p><strong>IFSC Code:</strong> SRCB0000124</p>
                </div>

                <div className="pt-2 border-t border-gray-100 text-xs text-amber-800 font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Send receipt screenshot to WhatsApp</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* WhatsApp screenshot verification note */}
        <div className="bg-[#17a2b8] text-white p-6 rounded-2xl shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-full shrink-0">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Online Payment Confirmation WhatsApp</h4>
              <p className="text-xs sm:text-sm text-sky-50">
                After remitting payment through online or bank transfer, send screenshot along with student name, standard, and roll number to WhatsApp.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/918104986862"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white hover:bg-sky-50 text-[#002147] font-bold py-2.5 px-6 rounded-xl text-sm shrink-0 transition-colors shadow-sm"
          >
            WhatsApp: 8104986862
          </a>
        </div>

      </div>
    </div>
  );
};
