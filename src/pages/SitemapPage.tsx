import React, { useState } from 'react';
import { PageType } from '../types';
import { COMPANY_DETAILS } from '../data/solarData';
import { Globe, FileText, Search, ArrowRight, ShieldCheck, MapPin, Calculator, HelpCircle, Phone, BookOpen, Layers } from 'lucide-react';

interface SitemapPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

interface SitemapCategory {
  title: string;
  icon: React.ReactNode;
  items: {
    title: string;
    description: string;
    page: PageType;
    externalUrl?: string;
    tag?: string;
  }[];
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [search, setSearch] = useState('');

  const categories: SitemapCategory[] = [
    {
      title: 'Main Navigation & Corporate Overview',
      icon: <Layers className="w-5 h-5 text-[#0B4F6C]" />,
      items: [
        { title: 'Home Page', description: 'Rejoy Solar Power main portal, CREDA certification & PM Surya Ghar highlights.', page: 'home' },
        { title: 'About Us', description: 'Company history, executive team, 250+ MW installation track record & engineering credentials.', page: 'about' },
        { title: 'Contact Us', description: 'Headquarters address in Risali Bhilai, helpline phone numbers, email, and interactive Google Map.', page: 'contact' },
        { title: 'Privacy Policy', description: 'Data privacy practices, customer safety terms, and compliance framework.', page: 'privacy' },
      ],
    },
    {
      title: 'Solar EPC Services & Solutions',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
      items: [
        { title: 'Residential Rooftop Solar', description: 'On-grid rooftop solar systems with up to ₹78,000 PM Surya Ghar subsidy and CSPDCL net metering.', page: 'residential', tag: 'Up to ₹78k Subsidy' },
        { title: 'Commercial Solar Energy', description: 'Corporate offices, colleges, hospitals, and commercial complex solar with 40% tax depreciation.', page: 'commercial', tag: '40% Tax Benefit' },
        { title: 'Industrial Solar EPC', description: 'Megawatt power plants, steel mill captive solar, and sub-3 year financial ROI payback.', page: 'industrial', tag: 'MW Scale' },
        { title: 'Solar EPC & Battery Storage (BESS)', description: 'Turnkey engineering, procurement, construction, lithium battery storage & 24/7 AMC O&M.', page: 'solar-epc' },
      ],
    },
    {
      title: 'Calculators, Subsidy & GEO Tools',
      icon: <Calculator className="w-5 h-5 text-[#FDB813]" />,
      items: [
        { title: 'Solar Financial & EMI Calculator', description: 'Estimate system kW size, annual bill savings, net investment, and bank EMI breakdown.', page: 'calculator', tag: 'Interactive Tool' },
        { title: 'PM Surya Ghar Subsidy Checker', description: 'Check central government & Chhattisgarh CREDA subsidy eligibility by rooftop area and monthly bill.', page: 'subsidy', tag: 'Live Subsidy' },
        { title: 'Chhattisgarh City Locations Hub', description: 'City-specific solar irradiance data for Bhilai, Durg, Raipur, Bilaspur, Korba, and Rajnandgaon.', page: 'locations', tag: 'Local SEO' },
        { title: 'AI Knowledge Base & LLMs Index', description: 'Generative Engine Optimization (GEO) raw specs, JSON-LD schemas, and LLM text manifest.', page: 'llms', tag: 'GEO & AI' },
      ],
    },
    {
      title: 'Portfolio, Gallery & Educational Resources',
      icon: <BookOpen className="w-5 h-5 text-sky-600" />,
      items: [
        { title: 'Projects & Case Studies', description: 'Detailed case studies of completed residential, commercial, and industrial installations.', page: 'projects' },
        { title: 'Drone Photography Gallery', description: 'High-resolution aerial photography of completed solar rooftops across Chhattisgarh.', page: 'gallery' },
        { title: 'Blog & Clean Energy News', description: 'Solar rooftop guides, CSPDCL tariff updates, and step-by-step subsidy application tutorials.', page: 'blog' },
        { title: 'Frequently Asked Questions (FAQs)', description: 'Net metering policies, panel warranties, winter power yield, and maintenance tips.', page: 'faq' },
      ],
    },
    {
      title: 'Public Crawlers & Machine Manifests',
      icon: <FileText className="w-5 h-5 text-purple-600" />,
      items: [
        { title: 'Robots.txt Crawlers File', description: 'Instructions for Googlebot, Bingbot, GPTBot, ClaudeBot, and PerplexityBot.', page: 'home', externalUrl: '/robots.txt', tag: 'Static Manifest' },
        { title: 'XML Sitemap Feed', description: 'Machine-readable XML urlset mapping for search engine indexing.', page: 'home', externalUrl: '/sitemap.xml', tag: 'XML Sitemap' },
        { title: 'LLMs Knowledge Index (llms.txt)', description: 'Standard LLM summary for AI search engines and natural language queries.', page: 'home', externalUrl: '/llms.txt', tag: 'llms.txt' },
        { title: 'Full Technical Spec (llms-full.txt)', description: 'Exhaustive corporate specification for LLM AI scrapers and indexers.', page: 'home', externalUrl: '/llms-full.txt', tag: 'llms-full.txt' },
      ],
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 pb-16 space-y-10 sm:space-y-12">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FDB813]/20 text-[#FDB813] border border-[#FDB813]/30">
            <Globe className="w-3.5 h-3.5" />
            Website Structure & Search Engine Sitemap
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-poppins tracking-tight">
            HTML Sitemap & Navigation Index
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Complete architectural directory of Rejoy Solar Power pages, service offerings, solar calculators, state subsidy guides, and machine-readable crawlers.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <Search className="w-5 h-5 text-[#0B4F6C]" />
          <input
            type="text"
            placeholder="Search sitemap pages (e.g. Subsidy, Calculator, Bhilai, Commercial, LLMs)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white outline-none"
          />
        </div>
      </section>

      {/* Sitemap Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {categories.map((cat) => {
          const filteredItems = cat.items.filter(
            (item) =>
              item.title.toLowerCase().includes(search.toLowerCase()) ||
              item.description.toLowerCase().includes(search.toLowerCase())
          );

          if (filteredItems.length === 0) return null;

          return (
            <div key={cat.title} className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-lg space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800">{cat.icon}</div>
                <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-poppins">
                  {cat.title}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredItems.map((item) => (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-[#0B4F6C]/40 transition group flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-[#0B4F6C] dark:group-hover:text-[#FDB813] transition">
                          {item.title}
                        </span>
                        {item.tag && (
                          <span className="px-2 py-0.5 rounded text-[9px] font-bold uppercase bg-[#0B4F6C]/10 text-[#0B4F6C] dark:bg-[#FDB813]/20 dark:text-[#FDB813]">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
                    </div>

                    <div>
                      {item.externalUrl ? (
                        <a
                          href={item.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4F6C] dark:text-[#FDB813] hover:underline pt-1"
                        >
                          <span>Open File ({item.externalUrl})</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <button
                          onClick={() => onNavigate(item.page)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B4F6C] dark:text-[#FDB813] hover:underline pt-1"
                        >
                          <span>Visit Page</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Footer Contact Prompt */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm">
              Need assistance finding a specific solar solution?
            </h4>
            <p className="text-xs text-slate-500">
              Our Chhattisgarh solar engineering office in Risali Bhilai is ready to answer your queries.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="px-4 py-2.5 rounded-xl bg-[#0B4F6C] text-white font-bold text-xs flex items-center gap-1.5 hover:bg-[#083c53] transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#FDB813]" />
              <span>Call Helpline</span>
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500 transition"
            >
              <span>Get Free Survey</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
