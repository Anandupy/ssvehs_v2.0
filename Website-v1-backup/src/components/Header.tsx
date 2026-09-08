import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-light-blue text-white shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 text-center sm:text-left group">
          <img 
            src="/assets/img/logo.png" 
            alt="SSVEHS Logo" 
            className="h-20 sm:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md" 
          />
          <div className="school_header">
            <h5 className="text-sm sm:text-base font-semibold tracking-wide text-sky-100 uppercase mb-0.5">
              P. K. Krishnan Educational Trust's
            </h5>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight leading-tight m-0">
              Shree Siddhi Vinayagar English High School
            </h1>
            <p className="text-xs text-sky-100 mt-1 font-medium hidden sm:block">
              Affiliated to Maharashtra State Board of Secondary and Higher Secondary Education • Estd. 1981
            </p>
          </div>
        </Link>
      </div>
    </header>
  );
};
