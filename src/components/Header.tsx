import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { COMPANY_DETAILS, SERVICES_LIST } from '../data/solarData';
import { RejoyLogo } from './RejoyLogo';
import {
  Sun,
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Calculator,
  Building2,
  Home as HomeIcon,
  Factory,
  ShieldCheck,
  FileCheck,
  Users,
  Moon,
  SunMedium,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Info,
  FolderKanban,
  Send,
  Zap,
  LogIn,
} from 'lucide-react';

interface HeaderProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
  darkMode,
  onToggleDarkMode,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled || 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200/20 z-50 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#0B4F6C] via-[#FDB813] to-[#2ECC71] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b border-slate-200 bg-white text-slate-900 shadow-sm py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-11 sm:h-12">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 sm:gap-3 group text-left focus:outline-none shrink-0"
              id="header-brand-logo"
            >
              <RejoyLogo
                variant="dark"
                className="h-9 sm:h-11 w-auto max-h-12 group-hover:scale-102 transition-transform duration-200"
              />
              <span className="px-2 py-0.5 text-[9px] font-black uppercase bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full hidden sm:inline-block shrink-0">
                CREDA Approved
              </span>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 h-full">
              <button
                onClick={() => handleNavClick('home')}
                className={`px-3 py-1.5 h-9 rounded-lg text-sm font-semibold transition-colors flex items-center leading-none ${
                  currentPage === 'home'
                    ? 'text-[#0B4F6C] bg-[#0B4F6C]/10 font-bold'
                    : 'text-slate-700 hover:text-[#0B4F6C] hover:bg-slate-100'
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleNavClick('about')}
                className={`px-3 py-1.5 h-9 rounded-lg text-sm font-semibold transition-colors flex items-center leading-none ${
                  currentPage === 'about'
                    ? 'text-[#0B4F6C] bg-[#0B4F6C]/10 font-bold'
                    : 'text-slate-700 hover:text-[#0B4F6C] hover:bg-slate-100'
                }`}
              >
                About Us
              </button>

              {/* Mega Menu Trigger for Services */}
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen(true)}
                onMouseLeave={() => setMegaMenuOpen(false)}
              >
                <button
                  className={`px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1 transition-colors ${
                    ['residential', 'commercial', 'industrial', 'solar-epc'].includes(currentPage)
                      ? 'text-[#0B4F6C] bg-[#0B4F6C]/10 font-bold'
                      : 'text-slate-700 hover:text-[#0B4F6C] hover:bg-slate-100'
                  }`}
                >
                  Solutions & Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${megaMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Mega Menu Modal Dropdown */}
                {megaMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[820px] max-h-[82vh] overflow-y-auto p-6 bg-white dark:bg-[#0B132B] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
                      <div>
                        <p className="text-xs font-bold text-[#0B4F6C] dark:text-[#FDB813] uppercase tracking-wider">
                          Complete Clean Energy Solutions
                        </p>
                        <h4 className="text-base font-extrabold text-slate-900 dark:text-white font-poppins">
                          Solutions & Services
                        </h4>
                      </div>
                      <button
                        onClick={() => handleNavClick('calculator')}
                        className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition"
                      >
                        <Calculator className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                        <span>Solar ROI & EMI Calculator</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {SERVICES_LIST.map((srv) => (
                        <button
                          key={srv.id}
                          onClick={() => handleNavClick(srv.page)}
                          className="p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-100 dark:border-slate-800/60 transition flex items-center gap-3 text-left group"
                        >
                          <img
                            src={srv.imageUrl}
                            alt={srv.title}
                            referrerPolicy="no-referrer"
                            className="w-16 h-16 rounded-lg object-cover border border-slate-200 dark:border-slate-700 shrink-0 group-hover:scale-105 transition duration-300"
                          />
                          <div className="space-y-0.5 overflow-hidden">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#0B4F6C] dark:group-hover:text-[#FDB813] transition truncate">
                                {srv.title}
                              </span>
                            </div>
                            <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-tight">
                              {srv.shortDesc}
                            </p>
                            {srv.badge && (
                              <span className="inline-block text-[9px] font-extrabold text-emerald-600 dark:text-emerald-400 uppercase tracking-tight">
                                {srv.badge}
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => handleNavClick('calculator')}
                className={`px-3 py-1.5 h-9 rounded-lg text-sm font-semibold transition-colors flex items-center leading-none ${
                  currentPage === 'calculator'
                    ? 'text-[#0B4F6C] bg-[#0B4F6C]/10 font-bold'
                    : 'text-slate-700 hover:text-[#0B4F6C] hover:bg-slate-100'
                }`}
              >
                Solar Calculator
              </button>

              <button
                onClick={() => handleNavClick('projects')}
                className={`px-3 py-1.5 h-9 rounded-lg text-sm font-semibold transition-colors flex items-center leading-none ${
                  currentPage === 'projects' || currentPage === 'gallery'
                    ? 'text-[#0B4F6C] bg-[#0B4F6C]/10 font-bold'
                    : 'text-slate-700 hover:text-[#0B4F6C] hover:bg-slate-100'
                }`}
              >
                Projects
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className={`px-3 py-1.5 h-9 rounded-lg text-sm font-semibold transition-colors flex items-center leading-none ${
                  currentPage === 'contact'
                    ? 'text-[#0B4F6C] bg-[#0B4F6C]/10 font-bold'
                    : 'text-slate-700 hover:text-[#0B4F6C] hover:bg-slate-100'
                }`}
              >
                Contact
              </button>
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-2.5">
              <a
                href="https://erp.rejoysolarpower.com/"
                className="h-9 px-3.5 rounded-xl bg-[#0B4F6C] hover:bg-[#083a50] text-white flex items-center gap-1.5 text-xs font-bold shadow-sm transition hover:scale-102"
                aria-label="Login"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Login</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="h-9 px-3 rounded-xl border border-slate-200 text-slate-800 hover:border-[#0B4F6C] hover:bg-slate-50 flex items-center gap-1.5 text-xs font-bold transition"
                title="Call Now"
              >
                <Phone className="w-3.5 h-3.5 text-[#0B4F6C]" />
                <span className="hidden xl:inline">Call Now</span>
              </a>

              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=Hello%20Rejoy%20Solar!%20I%20would%20like%20a%20free%20solar%20consultation.`}
                target="_blank"
                rel="noreferrer"
                className="h-9 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1.5 text-xs font-bold shadow-sm transition hover:scale-102"
                title="WhatsApp Chat"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span className="hidden xl:inline">WhatsApp</span>
              </a>
            </div>

            {/* Mobile & Tablet Action Bar (Login + Phone + Menu Toggle) */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              <a
                href="https://erp.rejoysolarpower.com/"
                className="h-9 px-2.5 sm:px-3 rounded-xl bg-[#0B4F6C] text-white flex items-center gap-1.5 text-xs font-bold shadow-sm transition"
                aria-label="Login"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Login</span>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="h-9 px-2.5 sm:px-3 rounded-xl bg-[#0B4F6C]/10 text-[#0B4F6C] hover:bg-[#0B4F6C]/20 flex items-center gap-1.5 text-xs font-bold transition"
                title="Call Now"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Call</span>
              </a>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-slate-900 border border-slate-200 hover:bg-slate-100 active:scale-95 transition"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#0B4F6C]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile & Tablet Navigation Modal Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 transition-opacity duration-200"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile & Tablet Navigation Drawer Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[60px] sm:top-[65px] inset-x-0 bg-white border-b border-slate-200 shadow-2xl z-50 max-h-[calc(100vh-65px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200">
          <div className="p-4 sm:p-6 space-y-5 max-w-2xl mx-auto">
            {/* Quick Actions at Top */}
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="p-3 rounded-xl bg-gradient-to-r from-[#0B4F6C] to-[#0A3C53] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm active:scale-98 transition"
              >
                <Zap className="w-4 h-4 text-[#FDB813] fill-[#FDB813]" />
                <span>Get Solar Quote</span>
              </button>
              <button
                onClick={() => handleNavClick('calculator')}
                className="p-3 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-bold text-xs flex items-center justify-center gap-2 active:scale-98 transition"
              >
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span>Solar Calculator</span>
              </button>
            </div>

            {/* Category 1: Main Pages */}
            <div className="space-y-1.5">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                Navigation
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`p-3 rounded-xl text-left text-xs font-bold flex items-center gap-2.5 transition ${
                    currentPage === 'home'
                      ? 'bg-[#0B4F6C] text-white shadow-md'
                      : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <HomeIcon className="w-4 h-4 shrink-0" />
                  <span>Home</span>
                </button>

                <button
                  onClick={() => handleNavClick('about')}
                  className={`p-3 rounded-xl text-left text-xs font-bold flex items-center gap-2.5 transition ${
                    currentPage === 'about'
                      ? 'bg-[#0B4F6C] text-white shadow-md'
                      : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <Info className="w-4 h-4 shrink-0" />
                  <span>About Us</span>
                </button>

                <button
                  onClick={() => handleNavClick('projects')}
                  className={`p-3 rounded-xl text-left text-xs font-bold flex items-center gap-2.5 transition ${
                    currentPage === 'projects' || currentPage === 'gallery'
                      ? 'bg-[#0B4F6C] text-white shadow-md'
                      : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <FolderKanban className="w-4 h-4 shrink-0" />
                  <span>Projects</span>
                </button>

                <button
                  onClick={() => handleNavClick('contact')}
                  className={`p-3 rounded-xl text-left text-xs font-bold flex items-center gap-2.5 transition ${
                    currentPage === 'contact'
                      ? 'bg-[#0B4F6C] text-white shadow-md'
                      : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <Send className="w-4 h-4 shrink-0" />
                  <span>Contact Us</span>
                </button>

                <button
                  onClick={() => handleNavClick('subsidy')}
                  className={`p-3 rounded-xl text-left text-xs font-bold flex items-center gap-2.5 transition ${
                    currentPage === 'subsidy'
                      ? 'bg-[#0B4F6C] text-white shadow-md'
                      : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Subsidy</span>
                </button>
              </div>
            </div>

            {/* Category 2: Solar Solutions & Services */}
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-1">
                Solutions & Services
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  onClick={() => handleNavClick('residential')}
                  className={`p-3 rounded-xl text-left text-xs transition flex items-center gap-3 border ${
                    currentPage === 'residential'
                      ? 'bg-[#0B4F6C]/10 border-[#0B4F6C]/30 text-[#0B4F6C] font-bold'
                      : 'bg-slate-50/80 border-slate-200/60 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0">
                    <HomeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold">Residential Solar</p>
                    <p className="text-[10px] text-slate-500">Rooftop systems up to 78,000 subsidy</p>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('commercial')}
                  className={`p-3 rounded-xl text-left text-xs transition flex items-center gap-3 border ${
                    currentPage === 'commercial'
                      ? 'bg-[#0B4F6C]/10 border-[#0B4F6C]/30 text-[#0B4F6C] font-bold'
                      : 'bg-slate-50/80 border-slate-200/60 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold">Commercial Solar</p>
                    <p className="text-[10px] text-slate-500">For offices, hospitals & institutions</p>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('industrial')}
                  className={`p-3 rounded-xl text-left text-xs transition flex items-center gap-3 border ${
                    currentPage === 'industrial'
                      ? 'bg-[#0B4F6C]/10 border-[#0B4F6C]/30 text-[#0B4F6C] font-bold'
                      : 'bg-slate-50/80 border-slate-200/60 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-purple-100 text-purple-700 shrink-0">
                    <Factory className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold">Industrial Solar</p>
                    <p className="text-[10px] text-slate-500">MW Scale plants & accelerated depreciation</p>
                  </div>
                </button>

                <button
                  onClick={() => handleNavClick('solar-epc')}
                  className={`p-3 rounded-xl text-left text-xs transition flex items-center gap-3 border ${
                    currentPage === 'solar-epc'
                      ? 'bg-[#0B4F6C]/10 border-[#0B4F6C]/30 text-[#0B4F6C] font-bold'
                      : 'bg-slate-50/80 border-slate-200/60 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold">Solar EPC & Battery</p>
                    <p className="text-[10px] text-slate-500">Turnkey engineering & BESS storage</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Customer Portal Link & Helpline */}
            <div className="pt-2 border-t border-slate-100 space-y-2">
              <a
                href="https://erp.rejoysolarpower.com/"
                className="p-3 rounded-xl bg-[#0B4F6C] hover:bg-[#083a50] text-white font-bold text-xs flex items-center justify-between transition shadow-sm"
                aria-label="Login"
              >
                <div className="flex items-center gap-2">
                  <LogIn className="w-4 h-4 text-[#FDB813]" />
                  <span>Login</span>
                </div>
                <span className="text-[10px] text-slate-200">ERP Portal &rarr;</span>
              </a>

              <a
                href="https://crm.rejoysolarpower.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 font-bold text-xs flex items-center justify-between transition"
              >
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Client Portal & Tracker</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-100 transition"
                >
                  <Phone className="w-4 h-4 text-[#0B4F6C]" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
                <a
                  href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-500 transition shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

