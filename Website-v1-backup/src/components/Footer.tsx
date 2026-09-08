import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ChevronRight } from 'lucide-react';
import { schoolContact } from '../data/schoolData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#002147] text-white pt-16 pb-8 border-t-4 border-[#17a2b8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-sky-800/40">
          
          {/* Column 1: School Identity */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-start gap-4 group">
              <img
                src="/assets/img/logo.png"
                alt="SSVEHS Logo"
                className="h-20 w-auto object-contain bg-white/10 p-1.5 rounded-lg transition-transform group-hover:scale-105"
              />
              <div>
                <h6 className="text-xs uppercase font-bold tracking-widest text-sky-300">
                  {schoolContact.trust}
                </h6>
                <h4 className="text-xl font-bold text-white leading-snug">
                  {schoolContact.name}
                </h4>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              SSVEHS keeps the high standard of education. The value based education makes students conscious of their responsibilities towards the country. Established in 1981 in Vikhroli (E), Mumbai.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href={schoolContact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-sky-500 transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={schoolContact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-pink-600 transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Get in Touch */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xl font-bold text-white border-b-2 border-sky-500 pb-2 inline-block">
              Get In Touch
            </h3>

            <div className="space-y-3.5 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Address</h5>
                  <p>{schoolContact.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Email</h5>
                  {schoolContact.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-gray-300 hover:text-sky-300 transition-colors"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-white">Phone</h5>
                  <a
                    href={`tel:${schoolContact.phone.replace(/[^0-9]/g, '')}`}
                    className="hover:text-sky-300 transition-colors font-medium"
                  >
                    {schoolContact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xl font-bold text-white border-b-2 border-sky-500 pb-2 inline-block">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-gray-300">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Admissions', href: '/admissions' },
                { label: 'Our Teachers', href: '/teachers' },
                { label: 'Holidays List', href: '/holiday-list' },
                { label: 'FAQs', href: '/faqs' },
                { label: 'Contact Us', href: '/contact-us' },
                { label: 'Privacy Policy', href: '/privacy-policy' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-1.5 hover:text-sky-300 hover:translate-x-1 transition-all duration-150"
                  >
                    <ChevronRight className="w-4 h-4 text-sky-400" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 text-center text-xs sm:text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-semibold">{schoolContact.name}</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/cod" className="hover:text-white transition-colors">Code of Conduct</Link>
            <span>•</span>
            <Link to="/contact-us" className="hover:text-white transition-colors">Help Desk</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
