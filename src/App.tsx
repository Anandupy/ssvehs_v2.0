import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

// Admin Imports
import { AdminProvider } from './admin/AdminContext';
import { ThemeProvider } from './context/ThemeContext';
import { AdminLayout } from './admin/AdminLayout';
import { AdminLoginPage } from './admin/AdminLoginPage';
import { AdminDashboardPage } from './admin/AdminDashboardPage';
import { HolidaysManagementPage } from './admin/HolidaysManagementPage';
import { GenericManagementPage } from './admin/GenericManagementPage';
import { ThemeManagementPage } from './admin/ThemeManagementPage';

// Public Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MessagesPage } from './pages/MessagesPage';
import { TeachersPage } from './pages/TeachersPage';
import { AwardsPage } from './pages/AwardsPage';
import { MediaCoveragePage } from './pages/MediaCoveragePage';
import { HolidayListPage } from './pages/HolidayListPage';
import { RulesStudentsPage } from './pages/RulesStudentsPage';
import { RulesParentsPage } from './pages/RulesParentsPage';
import { CodeOfConductPage } from './pages/CodeOfConductPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { FeeStructurePage } from './pages/FeeStructurePage';
import { FormsPage } from './pages/FormsPage';
import { NoticePage } from './pages/NoticePage';
import { NoticeDetailPage } from './pages/NoticeDetailPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { ContactUsPage } from './pages/ContactUsPage';
import { ComplaintsPage } from './pages/ComplaintsPage';
import { AlumniPage } from './pages/AlumniPage';
import { MembershipPage } from './pages/MembershipPage';
import { AlumniLoginPage } from './pages/AlumniLoginPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

const PublicLayout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <AnnouncementBar />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AdminProvider>
        <BrowserRouter>
          <Routes>
            
            {/* Admin Login Route matching Screenshot 1 */}
            <Route path="/login" element={<AdminLoginPage />} />
            <Route path="/admin/login" element={<Navigate to="/login" replace />} />

            {/* Admin Panel Layout matching Screenshots 2, 3, 4, 5 */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="/admin/dashboard" replace />} />
              <Route path="dashboard" element={<AdminDashboardPage />} />
              
              {/* Academic */}
              <Route path="faculty" element={<GenericManagementPage module="faculty" title="Faculty List" categoryName="Academic" />} />
              <Route path="holidays" element={<HolidaysManagementPage />} />
              <Route path="alumni" element={<GenericManagementPage module="alumni" title="Alumni" categoryName="Academic" />} />

              {/* Communication */}
              <Route path="news" element={<GenericManagementPage module="news" title="News" categoryName="Communication" />} />
              <Route path="notices" element={<GenericManagementPage module="notices" title="Notices" categoryName="Communication" />} />
              <Route path="complaints" element={<GenericManagementPage module="complaints" title="Complaints" categoryName="Communication" />} />

              {/* Media & Activities */}
              <Route path="events" element={<GenericManagementPage module="events" title="Events" categoryName="Media & Activities" />} />
              <Route path="media" element={<GenericManagementPage module="media" title="Media Coverage" categoryName="Media & Activities" />} />
              <Route path="awards" element={<GenericManagementPage module="awards" title="Awards" categoryName="Media & Activities" />} />

              {/* Administration */}
              <Route path="forms" element={<GenericManagementPage module="forms" title="Forms" categoryName="Administration" />} />
              <Route path="theme" element={<ThemeManagementPage />} />
            </Route>

          {/* Public School Portal */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            
            {/* About Us */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/messages-from-dignitaries" element={<MessagesPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/awards" element={<AwardsPage />} />
            <Route path="/media-coverage" element={<MediaCoveragePage />} />
            
            {/* Academics */}
            <Route path="/holiday-list" element={<HolidayListPage />} />
            <Route path="/rules-regulations-students" element={<RulesStudentsPage />} />
            <Route path="/rules-regulations-parents" element={<RulesParentsPage />} />
            <Route path="/cod" element={<CodeOfConductPage />} />
            
            {/* Admissions */}
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/fee-structure" element={<FeeStructurePage />} />
            <Route path="/forms" element={<FormsPage />} />
            
            {/* News & Updates */}
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/details/notice/:id" element={<NoticeDetailPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/details/news/:id" element={<NewsDetailPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/details/event/:id" element={<EventDetailPage />} />
            
            {/* Contact & Community */}
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/complaints-suggestions" element={<ComplaintsPage />} />
            <Route path="/alumni" element={<AlumniPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/alumni/login" element={<AlumniLoginPage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </AdminProvider>
    </ThemeProvider>
  );
};

export default App;
