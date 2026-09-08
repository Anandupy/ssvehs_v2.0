import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ChevronRight, Award, Clock, Sparkles } from 'lucide-react';
import { schoolContact } from '../data/schoolData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#071526] text-white pt-16 pb-10 border-t-2 border-amber-500/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          
          {/* Column 1: School Identity & Accreditations (5 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3.5 group">
              <img
                src="/assets/img/logo.png"
                alt="SSVEHS Crest"
                className="h-16 w-auto object-contain bg-white/5 p-1.5 rounded-xl border border-white/10 transition-transform group-hover:scale-105"
              />
              <div>
                <h6 className="text-[11px] uppercase font-bold tracking-widest text-amber-400">
                  {schoolContact.trust}
                </h6>
                <h4 className="text-lg sm:text-xl font-black text-white leading-snug">
                  {schoolContact.name}
                </h4>
              </div>
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Established in 1981 in Vikhroli, Mumbai. Committed to holistic academic excellence, character building, and nurturing future-ready global leaders.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-300/90 bg-white/5 px-3 py-2 rounded-xl border border-white/10 w-fit">
              <Award className="w-4 h-4 text-amber-400 shrink-0" />
              <span>MSBSHSE Recognized • School Index: 31.04.018</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={schoolContact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-950 transition-all shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={schoolContact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-950 transition-all shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Academics & Admissions (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Admissions
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/admissions" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>Admission Process</span>
                </Link>
              </li>
              <li>
                <Link to="/fee-structure" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>Fee Structure</span>
                </Link>
              </li>
              <li>
                <Link to="/forms" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>Application Forms</span>
                </Link>
              </li>
              <li>
                <Link to="/holiday-list" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>Holiday Calendar</span>
                </Link>
              </li>
              <li>
                <Link to="/cod" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>Code of Conduct</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: School Community & Portals (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>About Our School</span>
                </Link>
              </li>
              <li>
                <Link to="/teachers" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>Faculty Directory</span>
                </Link>
              </li>
              <li>
                <Link to="/awards" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>Awards & Honors</span>
                </Link>
              </li>
              <li>
                <Link to="/alumni" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>Alumni Network</span>
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400/70" />
                  <span>Parent FAQs</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Hours (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <h4 className="text-sm font-bold text-amber-400 uppercase tracking-wider border-b border-slate-800 pb-2">
              Campus & Helpdesk
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{schoolContact.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${schoolContact.phone.replace(/[^0-9]/g, '')}`} className="hover:text-amber-300">
                  {schoolContact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:info@ssvehs.edu.in" className="hover:text-amber-300">
                  info@ssvehs.edu.in
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Office: Mon - Sat: 8:00 AM - 3:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-4 py-2 rounded-xl text-xs shadow transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Inquire for Admissions</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-6 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-semibold">{schoolContact.name}</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/cod" className="hover:text-amber-400 transition-colors">Code of Conduct</Link>
            <span>•</span>
            <Link to="/complaints-suggestions" className="hover:text-amber-400 transition-colors">Grievance Redressal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
