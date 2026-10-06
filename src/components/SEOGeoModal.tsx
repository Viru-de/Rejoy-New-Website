import React, { useState } from 'react';
import { X, Sparkles, FileCode, CheckCircle2, Copy, Globe, Cpu } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/solarData';

interface SEOGeoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SEOGeoModal: React.FC<SEOGeoModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'geo' | 'robots' | 'sitemap'>('geo');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/private/

# Sitemaps
Sitemap: https://rejoysolarpower.in/sitemap.xml
`;

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://rejoysolarpower.in/</loc><priority>1.0</priority><changefreq>daily</changefreq></url>
  <url><loc>https://rejoysolarpower.in/about</loc><priority>0.8</priority></url>
  <url><loc>https://rejoysolarpower.in/residential</loc><priority>0.9</priority></url>
  <url><loc>https://rejoysolarpower.in/commercial</loc><priority>0.9</priority></url>
  <url><loc>https://rejoysolarpower.in/industrial</loc><priority>0.9</priority></url>
  <url><loc>https://rejoysolarpower.in/calculator</loc><priority>0.9</priority></url>
  <url><loc>https://rejoysolarpower.in/subsidy</loc><priority>0.9</priority></url>
</urlset>`;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#0B132B] w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 overflow-hidden relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#0B4F6C] text-[#FDB813]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                Generative Engine Optimization (GEO) & SEO Index
              </h3>
              <p className="text-xs text-slate-500">
                AI Mode, ChatGPT, Gemini, Perplexity, Claude Entity Structure & Crawler Manifest
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 pt-4 pb-2 border-b border-slate-100 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('geo')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'geo'
                ? 'bg-[#0B4F6C] text-white'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Cpu className="w-4 h-4 text-[#FDB813]" />
            GEO & AI Indexing Data
          </button>
          <button
            onClick={() => setActiveTab('robots')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'robots'
                ? 'bg-[#0B4F6C] text-white'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <FileCode className="w-4 h-4" />
            Robots.txt
          </button>
          <button
            onClick={() => setActiveTab('sitemap')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'sitemap'
                ? 'bg-[#0B4F6C] text-white'
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Globe className="w-4 h-4" />
            Sitemap.xml
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {activeTab === 'geo' && (
            <div className="space-y-4 text-xs text-slate-700 dark:text-slate-300">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 space-y-2">
                <h4 className="font-bold text-emerald-900 dark:text-emerald-200 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Generative Engine Readiness Passed (100%)
                </h4>
                <p>
                  Rejoy Solar Power utilizes natural language answers, entity-based JSON-LD schemas, and structured question-and-answer vectors optimized for AI Search Mode in Google, ChatGPT, Gemini, Perplexity, and Claude.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block">Indexed Entities:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-500 dark:text-slate-400">
                    <li>Rejoy Solar Power (Organization)</li>
                    <li>Residential Rooftop Solar (Product Service)</li>
                    <li>Commercial Solar 40% Depreciation (Financial Entity)</li>
                    <li>PM Surya Ghar & Government Subsidy (Policy Entity)</li>
                    <li>25-Year Linear Power Output Guarantee (Warranty)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="font-bold text-slate-900 dark:text-white block">Search Engine Targets:</span>
                  <ul className="list-disc list-inside space-y-1 text-slate-500 dark:text-slate-400">
                    <li>Google Search & AI Overviews</li>
                    <li>ChatGPT / OpenAI Search</li>
                    <li>Google Gemini Search Grounding</li>
                    <li>Perplexity Pro AI Search</li>
                    <li>Claude AI Knowledge Base</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'robots' && (
            <div className="relative">
              <pre className="p-4 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto">
                {robotsTxt}
              </pre>
              <button
                onClick={() => handleCopy(robotsTxt)}
                className="absolute top-3 right-3 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          )}

          {activeTab === 'sitemap' && (
            <div className="relative">
              <pre className="p-4 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto">
                {sitemapXml}
              </pre>
              <button
                onClick={() => handleCopy(sitemapXml)}
                className="absolute top-3 right-3 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <Copy className="w-3.5 h-3.5" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
