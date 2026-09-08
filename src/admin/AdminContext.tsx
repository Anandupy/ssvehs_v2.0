import React, { createContext, useContext, useState, useEffect } from 'react';
import excelData from '../data/excelData.json';

export interface AdminHoliday {
  id: string;
  title: string;
  date: string;
  status: 'Published' | 'Draft';
  createdAt: string;
  updatedAt: string;
  createdBy: string;
  updatedBy: string;
}

export interface AdminItem {
  id: string;
  title: string;
  date?: string;
  status?: string;
  role?: string;
  category?: string;
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
  updatedBy?: string;
  [key: string]: any;
}

interface AdminContextType {
  isAuthenticated: boolean;
  adminUser: { name: string; email: string; role: string } | null;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  
  // Data collections
  holidays: AdminHoliday[];
  addHoliday: (item: Omit<AdminHoliday, 'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'>) => void;
  updateHoliday: (id: string, item: Partial<AdminHoliday>) => void;
  deleteHoliday: (id: string) => void;

  news: AdminItem[];
  addNews: (item: any) => void;
  deleteNews: (id: string) => void;

  events: AdminItem[];
  addEvent: (item: any) => void;
  deleteEvent: (id: string) => void;

  notices: AdminItem[];
  addNotice: (item: any) => void;
  deleteNotice: (id: string) => void;

  faculty: AdminItem[];
  addFaculty: (item: any) => void;
  deleteFaculty: (id: string) => void;

  complaints: AdminItem[];
  forms: AdminItem[];
  awards: AdminItem[];
  alumni: AdminItem[];
  mediaCoverage: AdminItem[];
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('ssvehs_admin_auth') === 'true';
  });

  const [adminUser, setAdminUser] = useState<{ name: string; email: string; role: string } | null>(() => {
    const saved = localStorage.getItem('ssvehs_admin_user');
    return saved ? JSON.parse(saved) : { name: 'Principal / Admin', email: 'info@ssvehs.com', role: 'Super Admin' };
  });

  // 1. Initialize Holidays from holiday-data.xls
  const [holidays, setHolidays] = useState<AdminHoliday[]>(() => {
    const saved = localStorage.getItem('ssvehs_admin_holidays_v2');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    const raw = (excelData as any)['holiday-data.xls']?.rows || [];
    return raw.map((h: any, i: number) => ({
      id: `hol-${i + 1}`,
      title: h.title,
      date: h.date,
      status: (h.status === 'Draft' ? 'Draft' : 'Published') as 'Published' | 'Draft',
      createdAt: h.created_at || '2023-09-02 09:41:11',
      updatedAt: h.updated_at || '2026-01-07 08:55:01',
      createdBy: h.created_by || 'Admin',
      updatedBy: h.updated_by || 'Admin'
    }));
  });

  // 2. Initialize News from news-data.xls
  const [news, setNews] = useState<AdminItem[]>(() => {
    const saved = localStorage.getItem('ssvehs_admin_news_v2');
    if (saved) try { return JSON.parse(saved); } catch (e) {}
    const raw = (excelData as any)['news-data.xls']?.rows || [];
    return raw.map((n: any, i: number) => ({
      id: `news-${i + 1}`,
      title: n.title,
      description: n.description,
      image: n.image ? `/assets/news-banners/${n.image.split(',')[0].trim()}` : '',
      status: n.status || 'Published',
      date: n.created_at ? n.created_at.substring(0, 10) : '2024-10-10',
      createdAt: n.created_at || '2024-10-10 09:18:13',
      updatedAt: n.updated_at || '2026-01-07 08:55:01',
      createdBy: n.created_by || 'Admin'
    }));
  });

  // 3. Initialize Events from Events-data.xls
  const [events, setEvents] = useState<AdminItem[]>(() => {
    const saved = localStorage.getItem('ssvehs_admin_events_v2');
    if (saved) try { return JSON.parse(saved); } catch (e) {}
    const raw = (excelData as any)['Events-data.xls']?.rows || [];
    return raw.map((e: any, i: number) => ({
      id: `event-${i + 1}`,
      title: e.title,
      description: e.description,
      image: e.image ? `/assets/events-banners/${e.image.split(',')[0].trim()}` : '',
      status: e.status || 'Published',
      date: e.created_at ? e.created_at.substring(0, 10) : '2024-01-17',
      createdAt: e.created_at || '2024-01-17 10:27:03',
      updatedAt: e.updated_at || '2026-01-07 08:55:01',
      createdBy: e.created_by || 'Admin'
    }));
  });

  // 4. Initialize Notices from notice-data.xls
  const [notices, setNotices] = useState<AdminItem[]>(() => {
    const saved = localStorage.getItem('ssvehs_admin_notices_v2');
    if (saved) try { return JSON.parse(saved); } catch (e) {}
    const raw = (excelData as any)['notice-data.xls']?.rows || [];
    return raw.map((nt: any, i: number) => ({
      id: `not-${i + 1}`,
      title: nt.title,
      description: nt.description,
      status: nt.status || 'Published',
      date: nt.created_at ? nt.created_at.substring(0, 10) : '2025-11-20',
      createdAt: nt.created_at || '2025-11-20 10:00:00',
      updatedAt: nt.updated_at || '2026-01-07 08:55:01',
      createdBy: nt.created_by || 'Admin'
    }));
  });

  // 5. Initialize Faculty from faculity-admin-data.xls
  const [faculty, setFaculty] = useState<AdminItem[]>(() => {
    const saved = localStorage.getItem('ssvehs_admin_faculty_v2');
    if (saved) try { return JSON.parse(saved); } catch (e) {}
    const raw = (excelData as any)['faculity-admin-data.xls']?.rows || [];
    return raw.map((f: any, i: number) => ({
      id: `fac-${i + 1}`,
      title: f.name,
      role: f.designation,
      image: f.image ? `/assets/img/${f.image}` : '',
      status: 'Active',
      createdAt: f.created_at || '2024-07-08 11:08:14',
      updatedAt: f.updated_at || '2026-01-07 08:55:01',
      createdBy: f.created_by || 'Admin'
    }));
  });

  // 6. Initialize Complaints from complaint-data.xls
  const [complaints] = useState<AdminItem[]>(() => {
    const raw = (excelData as any)['complaint-data.xls']?.rows || [];
    return raw.map((c: any, i: number) => ({
      id: String(i + 12),
      title: c.complaint || c.name,
      name: c.name,
      email: c.email,
      phone: c.phone,
      gr: c.gr,
      date: c.created_at || '2025-09-30 00:00:00',
      status: 'Pending',
      createdAt: c.created_at || '2025-09-30 00:00:00',
      updatedAt: c.updated_at || '2026-01-07 08:55:00',
      createdBy: `${c.name} (Parent)`
    }));
  });

  // 7. Initialize Forms from form-data.xls
  const [forms] = useState<AdminItem[]>(() => {
    const raw = (excelData as any)['form-data.xls']?.rows || [];
    if (raw.length > 0) {
      return raw.map((f: any, i: number) => ({
        id: String(i + 1),
        title: f.title,
        file: f.file,
        status: 'Published',
        createdAt: f.created_at || '2026-01-15 10:00:00',
        updatedAt: f.updated_at || '2026-01-15 10:00:00'
      }));
    }
    return [
      { id: '1', title: 'Admission Application Form 2026-27', date: '2026-01-15', status: 'Published', createdAt: '2026-01-15 10:00:00', updatedAt: '2026-01-15 10:00:00' },
      { id: '2', title: 'School Bus Transport Consent Form', date: '2026-01-20', status: 'Published', createdAt: '2026-01-20 11:30:00', updatedAt: '2026-01-20 11:30:00' },
      { id: '3', title: 'Bonafide Certificate Request Form', date: '2026-02-01', status: 'Published', createdAt: '2026-02-01 09:00:00', updatedAt: '2026-02-01 09:00:00' }
    ];
  });

  // 8. Initialize Awards from Awards-data.xls
  const [awards] = useState<AdminItem[]>(() => {
    const raw = (excelData as any)['Awards-data.xls']?.rows || [];
    return raw.map((a: any, i: number) => ({
      id: `awd-${i + 1}`,
      title: a.title,
      type: a.type,
      file: a.file,
      status: 'Published',
      date: a.created_at ? a.created_at.substring(0, 10) : '2025-01-08',
      createdAt: a.created_at || '2025-01-08 11:26:09',
      updatedAt: a.updated_at || '2026-01-07 08:55:00'
    }));
  });

  // 9. Initialize Alumni from alumni-data.xls (33 alumni records)
  const [alumni] = useState<AdminItem[]>(() => {
    const raw = (excelData as any)['alumni-data.xls']?.rows || [];
    return raw.map((al: any, i: number) => ({
      id: `alumni-${i + 1}`,
      title: `${al.first_name} ${al.last_name}`.trim(),
      first_name: al.first_name,
      last_name: al.last_name,
      batch: al.batch,
      division: al.division,
      phone: al.phone,
      email: al.email,
      education: al.education,
      work_type: al.work_type,
      designation: al.designation,
      role: `${al.batch ? 'Batch ' + al.batch : ''} ${al.designation ? '• ' + al.designation : al.work_type ? '• ' + al.work_type : ''}`.trim(),
      status: al.status || 'Active',
      createdAt: al.created_at || '2024-01-10 10:00:00',
      updatedAt: al.updated_at || '2026-01-07 08:55:00'
    }));
  });

  // 10. Initialize Media Coverage from media-coverage-data.xls
  const [mediaCoverage] = useState<AdminItem[]>(() => {
    const raw = (excelData as any)['media-coverage-data.xls']?.rows || [];
    return raw.map((m: any, i: number) => ({
      id: `media-${i + 1}`,
      title: m.title,
      file: m.file,
      status: 'Published',
      date: m.created_at ? m.created_at.substring(0, 10) : '2025-11-20',
      createdAt: m.created_at || '2025-11-20 10:00:00',
      updatedAt: m.updated_at || '2026-01-07 08:55:00'
    }));
  });

  // Persist collections
  useEffect(() => {
    localStorage.setItem('ssvehs_admin_holidays_v2', JSON.stringify(holidays));
  }, [holidays]);

  // Auth methods
  const login = async (email: string, _pass: string): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    const user = { name: 'Admin User', email: email || 'info@ssvehs.com', role: 'Administrator' };
    setIsAuthenticated(true);
    setAdminUser(user);
    localStorage.setItem('ssvehs_admin_auth', 'true');
    localStorage.setItem('ssvehs_admin_user', JSON.stringify(user));
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('ssvehs_admin_auth');
    localStorage.removeItem('ssvehs_admin_user');
  };

  // Holiday actions
  const addHoliday = (item: Omit<AdminHoliday, 'id' | 'createdAt' | 'updatedAt' | 'createdBy' | 'updatedBy'>) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const newHol: AdminHoliday = {
      ...item,
      id: `hol-${Date.now()}`,
      createdAt: now,
      updatedAt: now,
      createdBy: 'Admin',
      updatedBy: 'Admin'
    };
    setHolidays((prev) => [newHol, ...prev]);
  };

  const updateHoliday = (id: string, item: Partial<AdminHoliday>) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
    setHolidays((prev) =>
      prev.map((h) => (h.id === id ? { ...h, ...item, updatedAt: now, updatedBy: 'Admin' } : h))
    );
  };

  const deleteHoliday = (id: string) => {
    setHolidays((prev) => prev.filter((h) => h.id !== id));
  };

  // News actions
  const addNews = (item: any) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
    setNews((prev) => [{ ...item, id: `news-${Date.now()}`, createdAt: now, updatedAt: now, status: 'Published' }, ...prev]);
  };
  const deleteNews = (id: string) => setNews((prev) => prev.filter((n) => n.id !== id));

  // Events actions
  const addEvent = (item: any) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
    setEvents((prev) => [{ ...item, id: `event-${Date.now()}`, createdAt: now, updatedAt: now, status: 'Published' }, ...prev]);
  };
  const deleteEvent = (id: string) => setEvents((prev) => prev.filter((e) => e.id !== id));

  // Notices actions
  const addNotice = (item: any) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
    setNotices((prev) => [{ ...item, id: `not-${Date.now()}`, createdAt: now, updatedAt: now, status: 'Published' }, ...prev]);
  };
  const deleteNotice = (id: string) => setNotices((prev) => prev.filter((n) => n.id !== id));

  // Faculty actions
  const addFaculty = (item: any) => {
    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);
    setFaculty((prev) => [{ ...item, id: `fac-${Date.now()}`, createdAt: now, updatedAt: now, status: 'Active' }, ...prev]);
  };
  const deleteFaculty = (id: string) => setFaculty((prev) => prev.filter((f) => f.id !== id));

  return (
    <AdminContext.Provider
      value={{
        isAuthenticated,
        adminUser,
        login,
        logout,
        holidays,
        addHoliday,
        updateHoliday,
        deleteHoliday,
        news,
        addNews,
        deleteNews,
        events,
        addEvent,
        deleteEvent,
        notices,
        addNotice,
        deleteNotice,
        faculty,
        addFaculty,
        deleteFaculty,
        complaints,
        forms,
        awards,
        alumni,
        mediaCoverage
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};
