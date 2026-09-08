import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Award, Clock, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="w-full bg-white border-b border-slate-200/80">
      {/* Top micro-utility bar */}
      <div className="bg-[#071526] text-slate-100 text-xs py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          {/* Left contact info */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a 
              href="tel:+912225784567" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden sm:inline font-medium text-slate-200">+91 22 2578 4567 / 2578 1234</span>
              <span className="sm:hidden text-slate-200">Call Us</span>
            </a>
            <a 
              href="mailto:info@ssvehs.edu.in" 
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden md:inline font-medium text-slate-200">info@ssvehs.edu.in</span>
              <span className="md:hidden text-slate-200">Email</span>
            </a>
            <div className="hidden lg:flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="font-medium">Office: Mon - Sat: 8:00 AM - 3:00 PM</span>
            </div>
          </div>

          {/* Right quick badges & portals */}
          <div className="flex items-center space-x-3 text-xs">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-200 bg-white/10 px-2.5 py-0.5 rounded-full text-[11px] font-medium border border-white/20">
              <Award className="w-3 h-3 text-amber-400" />
              MSBSHSE Reg. No. 31.04.018
            </span>
            <Link 
              to="/alumni/login" 
              className="text-slate-200 hover:text-amber-300 transition-colors font-semibold"
            >
              Alumni Portal
            </Link>
            <span className="text-slate-500">|</span>
            <Link 
              to="/fee-structure" 
              className="text-amber-400 hover:text-amber-300 transition-colors font-bold flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3" />
              Pay Fees / Structure
            </Link>
          </div>
        </div>
      </div>

      {/* Main Branding Section */}
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & School Name */}
          <Link to="/" className="flex items-center gap-4 sm:gap-5 group text-left">
            <div className="relative">
              <img 
                src="/assets/img/logo.png" 
                alt="SSVEHS Crest Logo" 
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md" 
              />
              <div className="absolute -bottom-1 -right-1 bg-amber-500 text-slate-950 font-black text-[9px] px-1.5 py-0.5 rounded shadow">
                ESTD 1981
              </div>
            </div>
            
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-amber-700 uppercase bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                  P. K. Krishnan Educational Trust's
                </span>
              </div>
              <h1 
                className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight leading-tight mt-1 transition-colors"
                style={{ color: 'var(--color-navy, #0B1E36)' }}
              >
                Shree Siddhi Vinayagar English High School
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 font-medium flex items-center gap-2 mt-0.5">
                <span>Vikhroli (W), Mumbai</span>
                <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                <span>Government Recognized English Medium Institution</span>
              </p>
            </div>
          </Link>

          {/* Quick Call-to-Action Pill for Admissions */}
          <div className="hidden xl:flex items-center gap-4 border-l border-slate-200 pl-6">
            <div className="text-right">
              <div className="text-xs uppercase font-bold tracking-wider text-amber-600 flex items-center justify-end gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Admissions Open 2026–27
              </div>
              <div className="text-sm font-extrabold text-[#0B1E36]">Pre-Primary to Std. X</div>
            </div>
            <Link
              to="/admissions"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
