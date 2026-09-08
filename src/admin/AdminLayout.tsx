import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Users, 
  Bell, 
  MessageSquare, 
  Image, 
  Trophy, 
  FileSpreadsheet, 
  LogOut, 
  Menu, 
  Search, 
  User, 
  Settings, 
  X,
  Sparkles,
  Palette,
  ExternalLink
} from 'lucide-react';
import { useAdmin } from './AdminContext';

interface NavItem {
  label: string;
  path?: string;
  action?: () => void;
  icon: any;
}

interface NavSection {
  heading: string;
  items: NavItem[];
}

export const AdminLayout: React.FC = () => {
  const { adminUser, logout } = useAdmin();
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close profile dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setUserDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navSections: NavSection[] = [
    {
      heading: 'DASHBOARD',
      items: [
        { label: 'Admin Dashboard', path: '/admin/dashboard', icon: LayoutDashboard }
      ]
    },
    {
      heading: 'ACADEMIC',
      items: [
        { label: 'Faculty List', path: '/admin/faculty', icon: FileText },
        { label: 'Holidays', path: '/admin/holidays', icon: Calendar },
        { label: 'Alumni', path: '/admin/alumni', icon: Users }
      ]
    },
    {
      heading: 'COMMUNICATION',
      items: [
        { label: 'News', path: '/admin/news', icon: FileText },
        { label: 'Notices', path: '/admin/notices', icon: Bell },
        { label: 'Complaints', path: '/admin/complaints', icon: MessageSquare }
      ]
    },
    {
      heading: 'MEDIA & ACTIVITIES',
      items: [
        { label: 'Events', path: '/admin/events', icon: Calendar },
        { label: 'Media Coverage', path: '/admin/media', icon: Image },
        { label: 'Awards', path: '/admin/awards', icon: Trophy }
      ]
    },
    {
      heading: 'ADMINISTRATION',
      items: [
        { label: 'Forms', path: '/admin/forms', icon: FileSpreadsheet },
        { label: 'Theme Management', path: '/admin/theme', icon: Palette }
      ]
    },
    {
      heading: 'LOGOUT',
      items: [
        { label: 'Logout', action: handleLogout, icon: LogOut }
      ]
    }
  ];

  return (
    <div className="flex h-screen bg-[#F4F6F9] text-slate-800 font-sans antialiased overflow-hidden">
      
      {/* Sidebar */}
      <aside 
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-white border-r border-slate-200 flex flex-col transition-all duration-300 z-30 shrink-0 select-none`}
      >
        {/* Sidebar Header with School Logo */}
        <div className="h-20 flex items-center justify-between px-4 border-b border-slate-100">
          <Link to="/admin/dashboard" className="flex items-center gap-3 overflow-hidden">
            <img
              src="/assets/img/logo.png"
              alt="SSVEHS Logo"
              className="h-12 w-auto object-contain shrink-0 drop-shadow-sm"
            />
            {sidebarOpen && (
              <div className="leading-tight">
                <div className="font-extrabold text-[#00394f] text-sm tracking-tight truncate">SSVEHS Admin</div>
                <div className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Portal v2.0</div>
              </div>
            )}
          </Link>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Toggle Sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Navigation Items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-5 custom-scroll">
          {navSections.map((section, sIdx) => (
            <div key={sIdx}>
              {sidebarOpen && (
                <div className="px-3 mb-2 text-[10px] font-extrabold text-slate-400 tracking-wider uppercase">
                  {section.heading}
                </div>
              )}
              <div className="space-y-1">
                {section.items.map((item, iIdx) => {
                  const Icon = item.icon;
                  const isActive = item.path ? location.pathname === item.path : false;

                  if (item.action) {
                    return (
                      <button
                        key={iIdx}
                        onClick={item.action}
                        className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-red-600 hover:bg-red-50 transition-all ${
                          !sidebarOpen ? 'justify-center' : ''
                        }`}
                        title={item.label}
                      >
                        <Icon className="w-4 h-4 text-slate-400 group-hover:text-red-500" />
                        {sidebarOpen && <span>{item.label}</span>}
                      </button>
                    );
                  }

                  return (
                    <Link
                      key={iIdx}
                      to={item.path!}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                        isActive
                          ? 'bg-[#00394f] text-white shadow-sm'
                          : 'text-slate-600 hover:text-[#00394f] hover:bg-slate-100/80'
                      } ${!sidebarOpen ? 'justify-center' : ''}`}
                      title={item.label}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                      {sidebarOpen && <span className="truncate">{item.label}</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Website Link */}
        <div className="p-3 border-t border-slate-100">
          <Link
            to="/"
            target="_blank"
            className="flex items-center justify-center gap-2 py-2 px-3 bg-amber-50 hover:bg-amber-100 text-amber-900 rounded-xl text-xs font-bold transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            {sidebarOpen && <span>View Live School Site</span>}
          </Link>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        
        {/* Top Header Bar */}
        <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between z-20 shrink-0">
          
          {/* Search Box */}
          <div className="relative w-72 sm:w-96">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F8FAFC] border border-slate-200 rounded-xl pl-9 pr-10 py-2 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00394f] focus:border-transparent transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 text-xs"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Right Header: Actions & User Profile */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 text-xs font-bold transition-all shadow-sm"
              title="Open Public School Website"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-600" />
              <span>View School Site</span>
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="flex items-center gap-3 p-1 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              title="Admin Menu"
            >
              <div className="relative">
                <div className="w-9 h-9 rounded-xl bg-[#00394f] text-white flex items-center justify-center font-extrabold text-sm shadow">
                  A
                </div>
                {/* Green Active Dot */}
                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white absolute -top-0.5 -right-0.5"></span>
              </div>
            </button>

            {/* Profile Dropdown Menu matching Screenshot 3 */}
            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-2.5 border-b border-slate-100 flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-lg bg-[#00394f] text-white flex items-center justify-center font-bold text-xs">
                      A
                    </div>
                    <span className="w-2 h-2 bg-emerald-500 rounded-full border border-white absolute -top-0.5 -right-0.5"></span>
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold text-slate-900 truncate">{adminUser?.name || 'Administrator'}</div>
                    <div className="text-[10px] text-slate-400 truncate">{adminUser?.email || 'info@ssvehs.com'}</div>
                  </div>
                </div>

                <div className="py-1 space-y-0.5">
                  <button 
                    onClick={() => { setUserDropdownOpen(false); navigate('/admin/dashboard'); }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                  >
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>My Profile</span>
                  </button>
                  <button 
                    onClick={() => { setUserDropdownOpen(false); navigate('/admin/dashboard'); }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                  >
                    <Settings className="w-3.5 h-3.5 text-slate-400" />
                    <span>Settings</span>
                  </button>
                </div>

                <div className="pt-1 border-t border-slate-100">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            )}
            </div>
          </div>

        </header>

        {/* Dynamic Main Body Content */}
        <main className="flex-1 overflow-y-auto p-6 sm:p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
};
