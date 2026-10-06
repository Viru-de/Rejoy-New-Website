import React, { useState, useEffect } from 'react';
import { PageType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { SEOGeoModal } from './components/SEOGeoModal';
import { SEOHeadAndSchema } from './components/SEOHeadAndSchema';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ResidentialPage } from './pages/ResidentialPage';
import { CommercialPage } from './pages/CommercialPage';
import { IndustrialPage } from './pages/IndustrialPage';
import { SolarEpcPage } from './pages/SolarEpcPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { SubsidyPage } from './pages/SubsidyPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { BlogPage } from './pages/BlogPage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { LocationsPage } from './pages/LocationsPage';
import { SitemapPage } from './pages/SitemapPage';
import { LLMsPage } from './pages/LLMsPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [isGeoModalOpen, setIsGeoModalOpen] = useState<boolean>(false);

  // Sync dark class on html document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'residential':
        return <ResidentialPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'commercial':
        return <CommercialPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'industrial':
        return <IndustrialPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'solar-epc':
        return <SolarEpcPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'calculator':
        return <CalculatorPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'subsidy':
        return <SubsidyPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'projects':
        return <ProjectsPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'gallery':
        return <GalleryPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'faq':
        return <FaqPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'locations':
        return <LocationsPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'sitemap':
        return <SitemapPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      case 'llms':
        return <LLMsPage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
      default:
        return <HomePage onNavigate={handleNavigate} onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#0B132B] text-slate-900 dark:text-slate-100 font-manrope selection:bg-[#FDB813] selection:text-slate-950 transition-colors duration-300">
      {/* Dynamic SEO Meta & Schema Injector */}
      <SEOHeadAndSchema currentPage={currentPage} />

      {/* Sticky Header with Mega Menu & Search */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Main Page View Area */}
      <main id="main-content" className="min-h-[80vh]">
        {renderPage()}
      </main>

      {/* Enterprise Dark Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenGeoModal={() => setIsGeoModalOpen(true)}
      />

      {/* Lead Generation & Survey Modal */}
      <LeadModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* GEO / SEO AI Indexing Modal */}
      <SEOGeoModal
        isOpen={isGeoModalOpen}
        onClose={() => setIsGeoModalOpen(false)}
      />
    </div>
  );
}
