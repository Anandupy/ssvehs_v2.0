import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  ArrowUpDown, 
  RotateCw, 
  Download, 
  List, 
  LayoutGrid, 
  X,
  CheckCircle2
} from 'lucide-react';
import { useAdmin, type AdminHoliday } from './AdminContext';

export const HolidaysManagementPage: React.FC = () => {
  const { holidays, addHoliday, updateHoliday, deleteHoliday } = useAdmin();

  // Search & Filter State
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(50);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'none'>('none');
  const [filterStatus, setFilterStatus] = useState<'All' | 'Published' | 'Draft'>('All');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<AdminHoliday | null>(null);
  const [formTitle, setFormTitle] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formStatus, setFormStatus] = useState<'Published' | 'Draft'>('Published');
  const [toastMsg, setToastMsg] = useState('');

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  // Filtered and Sorted Holidays
  const processedHolidays = useMemo(() => {
    let list = [...holidays];

    if (searchTerm.trim()) {
      list = list.filter((h) =>
        h.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        h.date.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterStatus !== 'All') {
      list = list.filter((h) => h.status === filterStatus);
    }

    if (sortOrder === 'asc') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOrder === 'desc') {
      list.sort((a, b) => b.title.localeCompare(a.title));
    }

    return list.slice(0, entriesPerPage);
  }, [holidays, searchTerm, filterStatus, sortOrder, entriesPerPage]);

  const handleOpenAdd = () => {
    setEditingItem(null);
    setFormTitle('');
    setFormDate('');
    setFormStatus('Published');
    setIsModalOpen(true);
  };

  const handleOpenEdit = (h: AdminHoliday) => {
    setEditingItem(h);
    setFormTitle(h.title);
    setFormDate(h.date);
    setFormStatus(h.status);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Are you sure you want to delete holiday "${title}"?`)) {
      deleteHoliday(id);
      triggerToast(`Holiday "${title}" removed.`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle) return;

    if (editingItem) {
      updateHoliday(editingItem.id, {
        title: formTitle,
        date: formDate,
        status: formStatus
      });
      triggerToast(`Holiday "${formTitle}" updated.`);
    } else {
      addHoliday({
        title: formTitle,
        date: formDate,
        status: formStatus
      });
      triggerToast(`New holiday "${formTitle}" added.`);
    }

    setIsModalOpen(false);
  };

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      ["Title,Date,Status,CreatedAt,UpdatedAt"].concat(
        holidays.map(h => `"${h.title}","${h.date}","${h.status}","${h.createdAt}","${h.updatedAt}"`)
      ).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `ssvehs_holidays_${new Date().toISOString().substring(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    triggerToast("Holidays exported to CSV!");
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      
      {/* Toast */}
      {toastMsg && (
        <div className="fixed top-6 right-6 bg-[#00394f] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 text-sm z-50 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5 text-amber-400" />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Header & Breadcrumb matching Screenshot 4 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
            Holidays
          </h1>
          <div className="text-xs text-slate-400 font-medium mt-0.5">
            <span>Admin</span> <span className="mx-1">/</span> <strong className="text-slate-700">Holidays</strong>
          </div>
        </div>

        {/* Top Search & Add Button matching Screenshot 4 */}
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

          <button
            onClick={handleOpenAdd}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#00394f] hover:bg-[#002838] text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        
        {/* Table Controls Toolbar matching Screenshot 4 */}
        <div className="p-4 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
          
          {/* Entries dropdown */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
            <span>Holidays Show</span>
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-bold text-slate-800 focus:outline-none"
            >
              <option value={10}>10</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
            <span>entries</span>
          </div>

          {/* Action Toolbar Tools */}
          <div className="flex items-center flex-wrap gap-2 text-xs">
            
            {/* View Mode Toggle */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-lg border border-slate-200">
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === 'table' ? 'bg-[#00394f] text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Table View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md transition-all ${
                  viewMode === 'grid' ? 'bg-[#00394f] text-white shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Filter */}
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="bg-white border border-slate-200 text-slate-700 font-semibold px-2.5 py-1.5 rounded-xl hover:bg-slate-50 cursor-pointer"
            >
              <option value="All">Filter (All)</option>
              <option value="Published">Published Only</option>
              <option value="Draft">Draft Only</option>
            </select>

            {/* Sort by A-Z */}
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : sortOrder === 'desc' ? 'none' : 'asc')}
              className="inline-flex items-center gap-1.5 bg-white border border-slate-200 text-slate-700 font-semibold px-3 py-1.5 rounded-xl hover:bg-slate-50 cursor-pointer"
            >
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span>{sortOrder === 'asc' ? 'Sort A-Z' : sortOrder === 'desc' ? 'Sort Z-A' : 'Sort by A-Z'}</span>
            </button>

            {/* Reset / Refresh */}
            <button
              onClick={() => { setSearchTerm(''); setSortOrder('none'); setFilterStatus('All'); triggerToast('View reset.'); }}
              className="p-2 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 cursor-pointer"
              title="Reset Filters"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>

            {/* Export CSV */}
            <button
              onClick={handleExportCSV}
              className="inline-flex items-center gap-1.5 bg-[#4F7082] hover:bg-[#3D5B6C] text-white font-bold px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export</span>
            </button>

          </div>
        </div>

        {/* TABLE VIEW */}
        {viewMode === 'table' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#00394f] text-white">
                  <th className="py-3 px-4 font-bold w-24">Actions</th>
                  <th className="py-3 px-4 font-bold">Title</th>
                  <th className="py-3 px-4 font-bold">Date</th>
                  <th className="py-3 px-4 font-bold">Status</th>
                  <th className="py-3 px-4 font-bold">CreatedAt</th>
                  <th className="py-3 px-4 font-bold">UpdatedAt</th>
                  <th className="py-3 px-4 font-bold">Created By</th>
                  <th className="py-3 px-4 font-bold">Updated By</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {processedHolidays.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="py-8 text-center text-slate-400">
                      No holidays match your search criteria.
                    </td>
                  </tr>
                ) : (
                  processedHolidays.map((holiday) => (
                    <tr key={holiday.id} className="hover:bg-slate-50/80 transition-colors">
                      {/* Action buttons matching Screenshot 4 (Edit & Delete in dark navy chips) */}
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleOpenEdit(holiday)}
                            className="p-1.5 bg-[#00394f] hover:bg-sky-700 text-white rounded-md shadow-sm transition-colors cursor-pointer"
                            title="Edit Holiday"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(holiday.id, holiday.title)}
                            className="p-1.5 bg-[#00394f] hover:bg-rose-700 text-white rounded-md shadow-sm transition-colors cursor-pointer"
                            title="Delete Holiday"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>

                      <td className="py-3 px-4 font-bold text-slate-800">{holiday.title}</td>
                      <td className="py-3 px-4 font-medium text-slate-600">{holiday.date}</td>
                      <td className="py-3 px-4">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {holiday.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-400 font-mono text-[11px]">{holiday.createdAt}</td>
                      <td className="py-3 px-4 text-slate-400 font-mono text-[11px]">{holiday.updatedAt}</td>
                      <td className="py-3 px-4 text-slate-500">{holiday.createdBy}</td>
                      <td className="py-3 px-4 text-slate-500">{holiday.updatedBy}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        ) : (
          /* GRID VIEW */
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {processedHolidays.map((holiday) => (
              <div key={holiday.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-all space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-[#00394f]">{holiday.title}</h4>
                  <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full">
                    {holiday.status}
                  </span>
                </div>
                <div className="text-xs text-slate-600 font-medium">{holiday.date}</div>
                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-slate-400">{holiday.createdAt}</span>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleOpenEdit(holiday)}
                      className="p-1 text-sky-700 hover:bg-sky-50 rounded"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleDelete(holiday.id, holiday.title)}
                      className="p-1 text-rose-700 hover:bg-rose-50 rounded"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer Entry Count Info */}
        <div className="p-4 border-t border-slate-100 text-xs text-slate-400 flex items-center justify-between">
          <span>Showing 1 to {processedHolidays.length} of {holidays.length} entries</span>
          <span>SSVEHS Academic Calendar 2026</span>
        </div>

      </div>

      {/* Add / Edit Holiday Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
              <h3 className="text-base font-bold text-slate-800">
                {editingItem ? 'Edit Holiday' : 'Add New Holiday'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Holiday Title *</label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#00394f] focus:outline-none"
                  placeholder="e.g. Maharashtra Day"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Date String / Range *</label>
                <input
                  type="text"
                  required
                  value={formDate}
                  onChange={(e) => setFormDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#00394f] focus:outline-none"
                  placeholder="e.g. 1st May, 2026"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Status</label>
                <select
                  value={formStatus}
                  onChange={(e) => setFormStatus(e.target.value as any)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs focus:ring-2 focus:ring-[#00394f] focus:outline-none"
                >
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                </select>
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
                  {editingItem ? 'Update Holiday' : 'Save Holiday'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
