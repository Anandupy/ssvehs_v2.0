import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  GraduationCap, 
  BookOpen, 
  Users, 
  Trophy, 
  Tv, 
  Calendar, 
  FileText, 
  ShieldCheck, 
  BellRing, 
  Send, 
  MessageSquareQuote,
  HeartHandshake
} from 'lucide-react';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string; icon?: React.ElementType }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'Our Story & Legacy', href: '/about', description: 'Over 4 decades of building tomorrow leaders', icon: BookOpen },
      { label: 'Messages from Dignitaries', href: '/messages-from-dignitaries', description: 'Inspirations from trustees & management', icon: MessageSquareQuote },
      { label: 'Meet Our Teachers', href: '/teachers', description: 'Passionate and certified educators', icon: Users },
      { label: 'Awards & Honors', href: '/awards', description: 'State & national recognitions', icon: Trophy },
      { label: 'Media Coverage', href: '/media-coverage', description: 'SSVEHS in the news and press', icon: Tv },
    ],
  },
  {
    label: 'Academics',
    children: [
      { label: 'Curriculum & Wings', href: '/about', description: 'Pre-Primary, Primary & Secondary sections', icon: GraduationCap },
      { label: 'Academic Calendar & Holidays', href: '/holiday-list', description: 'Official list of school holidays', icon: Calendar },
      { label: 'Rules for Students', href: '/rules-regulations-students', description: 'Discipline, uniform & attendance guidelines', icon: ShieldCheck },
      { label: 'Guidelines for Parents', href: '/rules-regulations-parents', description: 'Parent-teacher collaboration rules', icon: Users },
      { label: 'Code of Conduct', href: '/cod', description: 'Ethical and moral framework', icon: FileText },
    ],
  },
  {
    label: 'Admissions',
    children: [
      { label: 'Admissions Process 2026-27', href: '/admissions', description: 'Step-by-step eligibility & entry criteria', icon: Sparkles },
      { label: 'Fee Structure & Rules', href: '/fee-structure', description: 'Transparent fee schedule & installment modes', icon: FileText },
      { label: 'Application Forms & Downloads', href: '/forms', description: 'Download admission & transport forms', icon: FileText },
    ],
  },
  {
    label: 'Notices & News',
    children: [
      { label: 'Notice Board', href: '/notice', description: 'Official announcements and circulars', icon: BellRing },
      { label: 'School News', href: '/news', description: 'Latest news, sports and cultural reports', icon: Tv },
      { label: 'Events & Celebrations', href: '/events', description: 'Upcoming workshops and annual days', icon: Calendar },
    ],
  },
  {
    label: 'Community',
    children: [
      { label: 'Alumni Network', href: '/alumni', description: 'Connect with former SSVEHS graduates', icon: HeartHandshake },
      { label: 'Alumni Membership', href: '/membership', description: 'Join the registered alumni chapter', icon: Users },
      { label: 'Alumni Portal Login', href: '/alumni/login', description: 'Access alumni directory and events', icon: ShieldCheck },
      { label: 'Complaints & Suggestions', href: '/complaints-suggestions', description: 'Grievance redressal cell for stakeholders', icon: Send },
    ],
  },
  { label: 'Contact', href: '/contact-us' },
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <nav 
      className="sticky top-0 z-50 bg-[#0B1E36]/95 backdrop-blur-md text-white shadow-lg border-b border-slate-700/50" 
      ref={navRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Mobile Logo Brand (when header scrolls away) */}
          <div className="flex items-center lg:hidden">
            <Link to="/" className="flex items-center gap-2">
              <img src="/assets/img/logo.png" alt="SSVEHS" className="h-10 w-auto" />
              <span className="font-extrabold text-sm tracking-tight text-white">SSVEHS</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item, idx) => {
              const active = isActive(item);
              const hasDropdown = Boolean(item.children && item.children.length > 0);
              const isDropdownOpen = openDropdown === item.label;

              if (!hasDropdown) {
                return (
                  <Link
                    key={idx}
                    to={item.href!}
                    style={{ color: active ? 'var(--color-gold, #E5A93C)' : '#ffffff' }}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 relative ${
                      active
                        ? 'bg-white/15 shadow-inner'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-amber-400 rounded-full"></span>
                    )}
                  </Link>
                );
              }

              return (
                <div 
                  key={idx} 
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    onClick={() => setOpenDropdown(isDropdownOpen ? null : item.label)}
                    style={{ color: active ? 'var(--color-gold, #E5A93C)' : '#ffffff' }}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      active
                        ? 'bg-white/15'
                        : 'hover:bg-white/10'
                    }`}
                  >
                    <span style={{ color: active ? 'var(--color-gold, #E5A93C)' : '#ffffff' }}>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-300'}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-72 bg-[#0B1E36] rounded-xl shadow-2xl border border-slate-700/80 p-2 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                      <div className="space-y-1">
                        {item.children!.map((child, cIdx) => {
                          const Icon = child.icon;
                          const isChildActive = location.pathname === child.href;
                          return (
                            <Link
                              key={cIdx}
                              to={child.href}
                              className={`flex items-start gap-3 p-2.5 rounded-lg transition-all group ${
                                isChildActive 
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                                  : 'hover:bg-white/10 text-white'
                              }`}
                            >
                              {Icon && (
                                <div 
                                  className={`p-1.5 rounded-md mt-0.5 shrink-0 ${isChildActive ? 'bg-amber-500 text-slate-950' : 'bg-white/15 text-amber-300'}`}
                                  style={{ color: isChildActive ? '#020617' : '#fcd34d' }}
                                >
                                  <Icon className="w-4 h-4" style={{ color: isChildActive ? '#020617' : '#fcd34d' }} />
                                </div>
                              )}
                              <div className="flex-1 min-w-0">
                                <div 
                                  className="nav-item-title text-xs font-bold leading-tight truncate text-white group-hover:text-amber-300 transition-colors"
                                  style={{ color: '#ffffff' }}
                                >
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div 
                                    className="nav-item-description text-[11px] font-medium leading-snug mt-0.5 truncate text-slate-100"
                                    style={{ color: '#f1f5f9', opacity: 0.88 }}
                                  >
                                    {child.description}
                                  </div>
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-amber-500/20 hover:scale-105 transition-all duration-200"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apply Online</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/admissions"
              className="bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1.5 rounded-lg"
            >
              Apply
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071526] border-t border-slate-800 max-h-[80vh] overflow-y-auto px-4 py-4 space-y-2">
          {navItems.map((item, idx) => {
            const hasChildren = Boolean(item.children && item.children.length > 0);
            const isSubOpen = openDropdown === item.label;

            if (!hasChildren) {
              return (
                <Link
                  key={idx}
                  to={item.href!}
                  style={{ color: isActive(item) ? '#020617' : '#ffffff' }}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${
                    isActive(item) ? 'bg-amber-500 text-slate-950 font-bold' : 'text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <div key={idx} className="border-b border-slate-800/80 pb-2">
                <button
                  onClick={() => setOpenDropdown(isSubOpen ? null : item.label)}
                  style={{ color: '#ffffff' }}
                  className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-white hover:bg-white/5 rounded-lg"
                >
                  <span style={{ color: '#ffffff' }}>{item.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isSubOpen ? 'rotate-180 text-amber-400' : 'text-slate-300'}`} />
                </button>

                {isSubOpen && (
                  <div className="ml-3 pl-3 border-l border-slate-700 space-y-1 mt-1">
                    {item.children!.map((child, cIdx) => (
                      <Link
                        key={cIdx}
                        to={child.href}
                        style={{ color: '#f1f5f9' }}
                        className="block px-3 py-2 text-xs font-medium text-slate-100 hover:text-amber-300 hover:bg-white/5 rounded-md"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <Link
              to="/alumni/login"
              className="text-center py-2.5 bg-white/10 text-white rounded-lg text-xs font-bold hover:bg-white/20"
            >
              Alumni Portal Login
            </Link>
            <Link
              to="/fee-structure"
              className="text-center py-2.5 bg-amber-500 text-slate-950 rounded-lg text-xs font-bold"
            >
              Rules & Fee Structure
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
