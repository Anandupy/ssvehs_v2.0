import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Search, 
  Trash2, 
  RotateCw, 
  X,
  CheckCircle2
} from 'lucide-react';
import { useAdmin } from './AdminContext';

interface GenericPageProps {
  module: 'faculty' | 'news' | 'notices' | 'events' | 'complaints' | 'forms' | 'awards' | 'alumni' | 'media';
  title: string;
  categoryName: string;
}

export const GenericManagementPage: React.FC<GenericPageProps> = ({ module, title, categoryName }) => {
  const admin = useAdmin();

  // Pick dataset and action based on module
  let dataList: any[] = [];
  let onAdd: ((item: any) => void) | undefined;
  let onDelete: ((id: string) => void) | undefined;

  switch (module) {
    case 'faculty':
      dataList = admin.faculty;
      onAdd = admin.addFaculty;
      onDelete = admin.deleteFaculty;
      break;
    case 'news':
      dataList = admin.news;
      onAdd = admin.addNews;
      onDelete = admin.deleteNews;
      break;
    case 'notices':
      dataList = admin.notices;
      onAdd = admin.addNotice;
      onDelete = admin.deleteNotice;
      break;
    case 'events':
      dataList = admin.events;
      onAdd = admin.addEvent;
      onDelete = admin.deleteEvent;
      break;
    case 'complaints':
      dataList = admin.complaints;
      break;
    case 'forms':
      dataList = admin.forms;
      break;
    case 'awards':
      dataList = admin.awards;
      break;
    case 'alumni':
      dataList = admin.alumni;
      break;
    case 'media':
      dataList = admin.mediaCoverage;
      break;
  }

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formTitle, setFormTitle] = useState('');
  const [formSub, setFormSub] = useState('');
  const [toastMsg, setToastMsg] = useState('');

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return dataList;
    return dataList.filter((item) =>
      (item.title && item.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.role && item.role.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.date && item.date.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [dataList, searchTerm]);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle) return;

    if (onAdd) {
      if (module === 'faculty') {
        onAdd({ title: formTitle, role: formSub || 'Faculty Member' });
      } else {
        onAdd({ title: formTitle, date: formSub || new Date().toISOString().substring(0, 10) });
      }
      triggerToast(`New ${title} item added!`);
    }

    setFormTitle('');
    setFormSub('');
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {toastMsg && (
        <div className="fixed top-6 right-6 bg-[#00394f] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-sm z-50 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-amber-400" />
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">{title}</h1>
          <div className="text-xs text-slate-400 font-medium mt-0.5">
            <span>Admin</span> <span className="mx-1">/</span> <span>{categoryName}</span> <span className="mx-1">/</span> <strong className="text-slate-700">{title}</strong>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00394f] w-48 sm:w-64"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          </div>

          {onAdd && (
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#00394f] hover:bg-[#002838] text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4 text-amber-400" />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700">Total {filteredData.length} records</span>
          <button
            onClick={() => { setSearchTerm(''); triggerToast('List refreshed'); }}
            className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 text-slate-600"
            title="Refresh"
          >
            <RotateCw className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-[#00394f] text-white">
                <th className="py-3 px-4 font-bold w-16">#</th>
                <th className="py-3 px-4 font-bold">Title / Subject</th>
                <th className="py-3 px-4 font-bold">{module === 'faculty' ? 'Designation' : 'Date'}</th>
                <th className="py-3 px-4 font-bold">Status</th>
                <th className="py-3 px-4 font-bold">Created At</th>
                {onDelete && <th className="py-3 px-4 font-bold text-right">Action</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-400">
                    No records found in this module.
                  </td>
                </tr>
              ) : (
                filteredData.map((row, idx) => (
                  <tr key={row.id || idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3 px-4 font-bold text-slate-500">{idx + 1}</td>
                    <td className="py-3 px-4 font-bold text-slate-800">{row.title}</td>
                    <td className="py-3 px-4 font-medium text-slate-600">{row.role || row.date || '—'}</td>
                    <td className="py-3 px-4">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {row.status || 'Active'}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-400 font-mono text-[11px]">{row.createdAt || '2026-01-10 10:00:00'}</td>
                    {onDelete && (
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => {
                            if (window.confirm(`Delete "${row.title}"?`)) {
                              onDelete!(row.id);
                              triggerToast('Entry removed.');
                            }
                          }}
                          className="p-1.5 bg-[#00394f] hover:bg-rose-700 text-white rounded-md transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="text-base font-bold text-slate-800">Add to {title}</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Title / Name *</label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#00394f] focus:outline-none"
                  placeholder="Enter title..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {module === 'faculty' ? 'Designation / Subject' : 'Date'}
                </label>
                <input
                  type="text"
                  value={formSub}
                  onChange={(e) => setFormSub(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#00394f] focus:outline-none"
                  placeholder={module === 'faculty' ? 'e.g. Primary English Teacher' : 'e.g. 2026-04-15'}
                />
              </div>

              <div className="flex justify-end gap-2 pt-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#00394f] hover:bg-[#002838] text-white text-xs font-bold rounded-xl shadow"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
