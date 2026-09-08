import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

// Pages
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

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen selection:bg-sky-600 selection:text-white">
        <Header />
        <Navbar />
        <AnnouncementBar />

        <main className="flex-grow">
          <Routes>
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
          </Routes>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
};

export default App;
