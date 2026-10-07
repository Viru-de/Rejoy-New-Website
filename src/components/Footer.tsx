import React, { useState } from 'react';
import { PageType } from '../types';
import { COMPANY_DETAILS } from '../data/solarData';
import { RejoyLogo } from './RejoyLogo';
import {
  Sun,
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  CheckCircle,
  Award,
  Globe,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
  onOpenGeoModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal, onOpenGeoModal }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B132B] text-slate-300 pt-16 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Decorative ambient gradient light */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0B4F6C]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FDB813]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="inline-block bg-white p-3 sm:p-3.5 rounded-2xl shadow-md border border-slate-100 max-w-[260px]">
                <RejoyLogo variant="dark" className="h-11 sm:h-12 w-auto" />
              </div>
              <div className="pt-1 flex items-center gap-2">
                <span className="px-2 py-0.5 text-[9px] font-black uppercase bg-[#2ECC71]/20 text-[#2ECC71] border border-[#2ECC71]/40 rounded-full inline-block">
                  CREDA Approved Solar EPC
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                  {COMPANY_DETAILS.city}, CG
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Empowering residential homes, commercial estates, and megawatt industrial plants with smart solar technology, tier-1 hardware, and 25-year performance security.
            </p>

            <div className="space-y-2 text-xs text-slate-400 pt-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FDB813] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#2ECC71] shrink-0" />
                <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="hover:text-white transition">
                  {COMPANY_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="hover:text-white transition">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO 9001:2025 Certified Solar EPC</span>
            </div>
          </div>

          {/* Column 2: Services & Solutions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-poppins border-l-2 border-[#FDB813] pl-2.5">
              Solar Solutions & Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('residential')} className="hover:text-[#FDB813] transition flex items-center gap-1.5">
                  On-Grid Solar System
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solar-epc')} className="hover:text-[#FDB813] transition flex items-center gap-1.5">
                  Off-Grid Solar System
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('residential')} className="hover:text-[#FDB813] transition flex items-center gap-1.5">
                  Solar Water Heater (ETC/FPC)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('residential')} className="hover:text-[#FDB813] transition flex items-center gap-1.5">
                  Rooftop Solar Installation
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('commercial')} className="hover:text-[#FDB813] transition flex items-center gap-1.5">
                  Commercial Solar Plant
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('subsidy')} className="hover:text-[#FDB813] transition flex items-center gap-1.5">
                  Solar Water Pump (PM KUSUM)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('solar-epc')} className="hover:text-[#FDB813] transition flex items-center gap-1.5">
                  Solar Engineers Working & AMC
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-poppins border-l-2 border-[#2ECC71] pl-2.5">
              Quick Navigation & SEO
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition">
                  About Our Company
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('locations')} className="hover:text-[#FDB813] transition font-bold text-emerald-400">
                  Chhattisgarh City Locations (Bhilai, Raipur, Durg...)
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('calculator')} className="hover:text-white transition flex items-center gap-1">
                  Solar Savings Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('subsidy')} className="hover:text-white transition flex items-center gap-1">
                  Government Subsidy Checker
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('sitemap')} className="hover:text-white transition">
                  HTML Sitemap & Directory
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('llms')} className="hover:text-white transition flex items-center gap-1">
                  AI & LLM Knowledge Base (llms.txt)
                </button>
              </li>
              <li>
                <a
                  href="https://erp.rejoysolarpower.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FDB813] transition flex items-center gap-1.5 text-sky-300 font-semibold"
                >
                  Client Portal & Tracker
                  <ExternalLink className="w-3 h-3 text-sky-400" />
                </a>
              </li>
              <li>
                <button onClick={() => handleNav('privacy')} className="hover:text-white transition">
                  Privacy Policy & Compliance
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & AI Indexing */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-poppins border-l-2 border-sky-400 pl-2.5">
              Clean Energy Insights
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to our monthly newsletter for government subsidy updates, solar tech breakthroughs, and tariff forecasts.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="w-full pl-3 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FDB813] transition"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 rounded-lg bg-[#0B4F6C] hover:bg-[#083c53] text-white flex items-center justify-center transition"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Thank you for subscribing!
                </p>
              )}
            </form>

            <div className="pt-3 space-y-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FDB813] to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition"
              >
                Schedule Free Site Survey
              </button>

              <button
                onClick={onOpenGeoModal}
                className="w-full py-2 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-400 hover:text-white text-[11px] font-medium flex items-center justify-center gap-1.5 transition"
              >
                <Sparkles className="w-3 h-3 text-[#FDB813]" />
                <span>GEO & AI Engine Indexing Data</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer Credits */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {COMPANY_DETAILS.name}. All rights reserved.
          </p>

          <p className="text-slate-400 font-medium text-center">
            Designed & Developed by{' '}
            <a
              href="https://klyiatechnology.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FDB813] hover:text-amber-300 font-bold tracking-wide transition underline-offset-2 hover:underline"
            >
              {COMPANY_DETAILS.developedBy}
            </a>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button onClick={() => handleNav('privacy')} className="hover:text-slate-300 transition">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => handleNav('sitemap')} className="hover:text-slate-300 transition">
              HTML Sitemap
            </button>
            <span>•</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition flex items-center gap-1">
              sitemap.xml
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>•</span>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition flex items-center gap-1">
              llms.txt
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
