import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'Our Story', href: '/about' },
      { label: 'Messages from Dignitaries', href: '/messages-from-dignitaries' },
      { label: 'Meet Our Teachers', href: '/teachers' },
      { label: 'Awards', href: '/awards' },
      { label: 'Media Coverage', href: '/media-coverage' },
    ],
  },
  {
    label: 'Academics',
    children: [
      { label: 'Holidays of the Year', href: '/holiday-list' },
      { label: 'Rules & Regulations for Students', href: '/rules-regulations-students' },
      { label: 'Rules & Regulations for Parents', href: '/rules-regulations-parents' },
      { label: 'Code of Conduct', href: '/cod' },
    ],
  },
  {
    label: 'Admissions',
    children: [
      { label: 'Admissions Process', href: '/admissions' },
      { label: 'Rules & Fee Structure', href: '/fee-structure' },
      { label: 'Forms', href: '/forms' },
    ],
  },
  {
    label: 'News & Updates',
    children: [
      { label: 'Notice/Announcement', href: '/notice' },
      { label: 'News', href: '/news' },
      { label: 'Events', href: '/events' },
    ],
  },
  {
    label: 'Contact',
    children: [
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Complaints & Suggestions', href: '/complaints-suggestions' },
    ],
  },
  { label: 'Alumni Network', href: '/alumni' },
  { label: 'FAQs', href: '/faqs' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const isActive = (item: NavItem) => {
    if (item.href) {
      if (item.href === '/' && location.pathname === '/') return true;
      if (item.href !== '/' && location.pathname.startsWith(item.href)) return true;
    }
    if (item.children) {
      return item.children.some((child) => location.pathname === child.href);
    }
    return false;
  };

  return (
    <nav className="bg-dark-blue text-white sticky top-0 z-50 shadow-md border-b border-sky-900/40" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const active = isActive(item);

              if (item.children) {
                const isOpen = openDropdown === item.label;
                return (
                  <div 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                      className={`px-3 py-2 text-sm font-semibold rounded-md flex items-center gap-1 transition-colors duration-200 ${
                        active 
                          ? 'bg-sky-700/80 text-white' 
                          : 'text-gray-200 hover:text-white hover:bg-sky-900/50'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                      <div className="absolute left-0 mt-0 w-64 bg-white text-gray-800 rounded-md shadow-xl py-2 border border-gray-100 z-50 animate-fadeIn">
                        {item.children.map((subItem) => (
                          <Link
                            key={subItem.label}
                            to={subItem.href}
                            className={`block px-4 py-2 text-sm transition-colors duration-150 ${
                              location.pathname === subItem.href
                                ? 'bg-sky-50 text-sky-700 font-bold border-l-4 border-sky-600'
                                : 'text-gray-700 hover:bg-gray-100 hover:text-sky-800'
                            }`}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href || '/'}
                  className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                    active 
                      ? 'bg-sky-700/80 text-white' 
                      : 'text-gray-200 hover:text-white hover:bg-sky-900/50'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Quick contact badge on desktop */}
          <div className="hidden lg:flex items-center gap-3 text-xs text-sky-200 font-medium">
            <a href="tel:02225745402" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>022-2574 5402</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center justify-between w-full lg:hidden py-2">
            <span className="text-sm font-bold tracking-wide text-sky-200 truncate">
              SSVEHS Menu
            </span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-200 hover:text-white hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001733] border-t border-sky-900 px-4 pt-2 pb-6 space-y-1 shadow-inner max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => {
            if (item.children) {
              const isOpen = openDropdown === item.label;
              return (
                <div key={item.label} className="border-b border-sky-900/50 pb-1">
                  <button
                    onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                    className="w-full flex items-center justify-between py-2 text-sm font-semibold text-gray-200 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="pl-4 py-1 space-y-1 bg-black/20 rounded-md my-1">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className={`block py-1.5 px-3 text-xs rounded transition-colors ${
                            location.pathname === subItem.href
                              ? 'text-sky-300 font-bold bg-sky-900/40'
                              : 'text-gray-300 hover:text-white'
                          }`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.href || '/'}
                className={`block py-2 text-sm font-semibold border-b border-sky-900/50 ${
                  location.pathname === item.href
                    ? 'text-sky-300 font-bold'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-3 flex flex-col gap-2 text-xs text-sky-300 border-t border-sky-800/80">
            <a href="tel:02225745402" className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> 022-2574 5402
            </a>
            <a href="mailto:info@ssvehs.com" className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@ssvehs.com
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
