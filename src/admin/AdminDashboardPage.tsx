import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Users, 
  GraduationCap, 
  Calendar, 
  Newspaper, 
  Bell, 
  MessageSquare, 
  Trophy, 
  UserCheck, 
  ArrowUpRight, 
  Plus, 
  UploadCloud, 
  X,
  CheckCircle2
} from 'lucide-react';
import { useAdmin } from './AdminContext';

export const AdminDashboardPage: React.FC = () => {
  const { 
    news, 
    events, 
    notices, 
    faculty, 
    complaints, 
    awards, 
    alumni, 
    addEvent, 
    addNews,
    addNotice,
    addFaculty
  } = useAdmin();

  const navigate = useNavigate();

  // Modal controls
  const [modalType, setModalType] = useState<'event' | 'news' | 'notice' | 'faculty' | null>(null);
  const [formData, setFormData] = useState({ title: '', date: '', description: '', role: '' });
  const [successToast, setSuccessToast] = useState('');

  const handleOpenModal = (type: 'event' | 'news' | 'notice' | 'faculty') => {
    setFormData({ title: '', date: new Date().toISOString().substring(0, 10), description: '', role: '' });
    setModalType(type);
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title) return;

    if (modalType === 'event') {
      addEvent({ title: formData.title, date: formData.date, description: formData.description });
      showSuccess('New event created successfully!');
    } else if (modalType === 'news') {
      addNews({ title: formData.title, date: formData.date, description: formData.description });
      showSuccess('News article published successfully!');
    } else if (modalType === 'notice') {
      addNotice({ title: formData.title, date: formData.date, description: formData.description });
      showSuccess('Circular notice published successfully!');
    } else if (modalType === 'faculty') {
      addFaculty({ title: formData.title, role: formData.role || 'Teacher' });
      showSuccess('Faculty member added successfully!');
    }

    setModalType(null);
  };

  const showSuccess = (msg: string) => {
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(''), 3000);
  };

  const statCards = [
    { label: 'Users', count: 2, sub: 'Manage users', path: '/admin/dashboard', icon: Users, color: 'text-sky-500 bg-sky-50' },
    { label: 'Faculty', count: faculty.length, sub: 'Manage faculty', path: '/admin/faculty', icon: GraduationCap, color: 'text-emerald-500 bg-emerald-50' },
    { label: 'Events', count: events.length, sub: 'Manage events', path: '/admin/events', icon: Calendar, color: 'text-sky-500 bg-sky-50' },
    { label: 'News', count: news.length, sub: 'Manage news', path: '/admin/news', icon: Newspaper, color: 'text-amber-500 bg-amber-50' },
    { label: 'Notices', count: notices.length, sub: 'Manage notices', path: '/admin/notices', icon: Bell, color: 'text-slate-700 bg-slate-100' },
    { label: 'Complaints', count: complaints.length, sub: 'Manage complaints', path: '/admin/complaints', icon: MessageSquare, color: 'text-rose-500 bg-rose-50' },
    { label: 'Awards', count: awards.length, sub: 'Manage awards', path: '/admin/awards', icon: Trophy, color: 'text-slate-500 bg-slate-50' },
    { label: 'Alumni', count: alumni.length, sub: 'Manage alumni', path: '/admin/alumni', icon: UserCheck, color: 'text-indigo-500 bg-indigo-50' },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-6 right-6 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-sm z-50 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Breadcrumb & Main Dashboard Header */}
      <div>
        <div className="text-xs text-slate-400 font-medium mb-1">
          <span>Admin</span> <span className="mx-1">/</span> <strong className="text-slate-700">Dashboard</strong>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              Overview of key modules & recent activity
            </p>
          </div>

          {/* Quick Action Top Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => handleOpenModal('event')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-300 font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 text-slate-500" />
              <span>Add Event</span>
            </button>
            <button
              onClick={() => handleOpenModal('news')}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#00394f] hover:bg-[#002838] text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 text-amber-400" />
              <span>Add News</span>
            </button>
          </div>
        </div>
      </div>

      {/* 8 Stat Cards Grid matching Screenshot 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-semibold">{card.label}</span>
                  <div className="text-3xl font-extrabold text-slate-900 mt-1">{card.count}</div>
                </div>
                <div className={`p-3 rounded-2xl ${card.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-50 flex items-center justify-between text-xs">
                <Link
                  to={card.path}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg font-bold text-sky-700 bg-sky-50 hover:bg-sky-100 transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>View</span>
                </Link>
                <span className="text-slate-400 text-[11px] font-medium">{card.sub}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Middle Row: Recent Complaints & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Recent Complaints Table (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-800">Recent Complaints</h3>
              <p className="text-xs text-slate-400">Latest submitted issues</p>
            </div>
            <Link
              to="/admin/complaints"
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
            >
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#00394f] text-white">
                  <th className="py-2.5 px-3 rounded-l-lg font-bold">#</th>
                  <th className="py-2.5 px-3 font-bold">Title / Subject</th>
                  <th className="py-2.5 px-3 rounded-r-lg font-bold text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {complaints.slice(0, 5).map((comp) => (
                  <tr key={comp.id} className="hover:bg-slate-50">
                    <td className="py-3 px-3 font-bold text-slate-700">{comp.id}</td>
                    <td className="py-3 px-3 font-semibold text-slate-800">{comp.title}</td>
                    <td className="py-3 px-3 text-slate-400 text-right font-mono">{comp.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions (5 cols) */}
        <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="mb-4">
            <h3 className="text-base font-bold text-slate-800">Quick Actions</h3>
            <p className="text-xs text-slate-400">Common admin operations</p>
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            
            <button
              onClick={() => handleOpenModal('notice')}
              className="p-3.5 rounded-xl bg-amber-50/60 hover:bg-amber-100/80 border border-amber-200/60 text-left transition-all cursor-pointer group"
            >
              <Bell className="w-5 h-5 text-amber-600 mb-1.5 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-slate-900">Add Notice</div>
              <div className="text-[11px] text-slate-500">Publish announcement</div>
            </button>

            <button
              onClick={() => handleOpenModal('event')}
              className="p-3.5 rounded-xl bg-sky-50/60 hover:bg-sky-100/80 border border-sky-200/60 text-left transition-all cursor-pointer group"
            >
              <Calendar className="w-5 h-5 text-sky-600 mb-1.5 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-slate-900">Add Event</div>
              <div className="text-[11px] text-slate-500">Create new event</div>
            </button>

            <button
              onClick={() => handleOpenModal('faculty')}
              className="p-3.5 rounded-xl bg-emerald-50/60 hover:bg-emerald-100/80 border border-emerald-200/60 text-left transition-all cursor-pointer group"
            >
              <GraduationCap className="w-5 h-5 text-emerald-600 mb-1.5 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-slate-900">Add Faculty</div>
              <div className="text-[11px] text-slate-500">New staff entry</div>
            </button>

            <button
              onClick={() => navigate('/admin/forms')}
              className="p-3.5 rounded-xl bg-indigo-50/60 hover:bg-indigo-100/80 border border-indigo-200/60 text-left transition-all cursor-pointer group"
            >
              <UploadCloud className="w-5 h-5 text-indigo-600 mb-1.5 group-hover:scale-110 transition-transform" />
              <div className="text-xs font-bold text-slate-900">Add Form</div>
              <div className="text-[11px] text-slate-500">Upload/Publish form</div>
            </button>

          </div>
        </div>

      </div>

      {/* Bottom Row: Latest News & Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Latest News */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-800">Latest News</h3>
              <p className="text-xs text-slate-400">Recently published</p>
            </div>
            <Link
              to="/admin/news"
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
            >
              Open
            </Link>
          </div>

          <div className="space-y-3">
            {news.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-start gap-2.5 pb-2.5 border-b border-slate-100 last:border-0 last:pb-0">
                <span className="w-2 h-2 rounded-full bg-slate-800 mt-1.5 shrink-0"></span>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-800 truncate">{item.title}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">{item.createdAt || item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Events */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-800">Events</h3>
              <p className="text-xs text-slate-400">Recent / upcoming</p>
            </div>
            <Link
              to="/admin/events"
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors"
            >
              Open
            </Link>
          </div>

          <div className="space-y-3">
            {events.slice(0, 5).map((item) => (
              <div key={item.id} className="flex items-start gap-2.5 pb-2.5 border-b border-slate-100 last:border-0 last:pb-0">
                <Calendar className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-bold text-slate-800 truncate">{item.title}</div>
                  <div className="text-[11px] text-slate-400 font-mono mt-0.5">{item.createdAt || item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Creation Modal for Fast Action */}
      {modalType && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="text-base font-bold text-slate-800 uppercase tracking-wide">
                Add New {modalType}
              </h3>
              <button
                onClick={() => setModalType(null)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleModalSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Title / Name *</label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#00394f] focus:outline-none"
                  placeholder={`Enter ${modalType} title...`}
                />
              </div>

              {modalType !== 'faculty' ? (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#00394f] focus:outline-none"
                  />
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Designation / Role</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#00394f] focus:outline-none"
                    placeholder="e.g. Senior Secondary Science Teacher"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Description / Notes</label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#00394f] focus:outline-none"
                  placeholder="Optional details..."
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setModalType(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#00394f] hover:bg-[#002838] text-white text-xs font-bold rounded-xl shadow"
                >
                  Save Entry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
