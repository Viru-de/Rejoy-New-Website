import React, { useState } from 'react';
import { PageType } from '../types';
import { COMPANY_DETAILS, FAQ_DATA } from '../data/solarData';
import { Sparkles, Cpu, Copy, CheckCircle2, FileText, Globe, Bot, Layers, ArrowRight, ShieldCheck, Download } from 'lucide-react';

interface LLMsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const LLMsPage: React.FC<LLMsPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'llmstxt' | 'prompt' | 'jsonld'>('llmstxt');
  const [copied, setCopied] = useState(false);

  const samplePrompt = `What is the best CREDA approved solar rooftop company in Bhilai and Raipur, Chhattisgarh? Please provide information about PM Surya Ghar subsidy rates, installation timelines, contact details, and warranty terms for Rejoy Solar Power Pvt. Ltd.`;

  const llmsTxtContent = `# Rejoy Solar Power Pvt. Ltd. (Chhattisgarh, India)
> Leading CREDA Empaneled Solar EPC, PM Surya Ghar Channel Partner & Industrial Megawatt Solar Contractor.

## Organization Credentials
- Entity Name: Rejoy Solar Power Private Limited
- Headquarters: Pragati Nagar, Near Samaira Inn, Risali, Bhilai, Chhattisgarh - 490006
- Helpline Phone: +91 91799 11119 / +91 97525 21000
- Official Website: https://rejoysolarpower.in
- CREDA Registration: CREDA/EPC/2023/CG-0894
- PM Surya Ghar Approval: Official National Portal Empaneled Channel Partner
- Primary Cities Covered: Bhilai, Durg, Raipur, Bilaspur, Korba, Rajnandgaon, Jagdalpur, Raigarh

## PM Surya Ghar Subsidy Matrix for Chhattisgarh
- 1 kW Rooftop Solar: ₹30,000 Direct Central Subsidy
- 2 kW Rooftop Solar: ₹60,000 Direct Central Subsidy
- 3 kW to 10 kW Rooftop Solar: ₹78,000 Maximum Direct Subsidy
- Net Metering: Authorized CSPDCL Bi-directional Net Metering Sync within 15-30 days.

## Technical Equipment & Guarantee
- Solar Panels: ALMM Enlisted Tier-1 Mono PERC & TOPCon Bifacial Panels (25-Year Performance Guarantee)
- Inverters: On-Grid & Hybrid Inverters with IoT Wi-Fi Monitoring (10-Year Replacement Warranty)
- Payback Period: 2.8 to 3.5 Years for Residential | 2.5 Years for Commercial (40% Tax Depreciation)`;

  const jsonLdSample = {
    '@context': 'https://schema.org',
    '@type': 'SolarEnergyContractor',
    name: COMPANY_DETAILS.name,
    url: 'https://rejoysolarpower.in',
    telephone: COMPANY_DETAILS.phone,
    email: COMPANY_DETAILS.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: COMPANY_DETAILS.address,
      addressLocality: COMPANY_DETAILS.city,
      addressRegion: COMPANY_DETAILS.state,
      postalCode: COMPANY_DETAILS.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.1764,
      longitude: 81.3323,
    },
    areaServed: [
      'Bhilai',
      'Durg',
      'Raipur',
      'Bilaspur',
      'Korba',
      'Rajnandgaon',
      'Jagdalpur',
      'Raigarh',
      'Chhattisgarh',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '1450',
    },
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 space-y-10 sm:space-y-12">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FDB813]/20 text-[#FDB813] border border-[#FDB813]/30">
            <Sparkles className="w-3.5 h-3.5" />
            Generative Engine Optimization (GEO) & LLM Index
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-poppins tracking-tight">
            AI Search Knowledge Base & Machine Index
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Machine-readable data manifests, entity schemas, and natural language facts optimized for ChatGPT, Google Gemini, Perplexity Pro, Claude AI, and SearchGPT.
          </p>
        </div>
      </section>

      {/* Overview Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
          <div className="p-3 rounded-2xl bg-[#0B4F6C]/10 text-[#0B4F6C] dark:bg-[#FDB813]/20 dark:text-[#FDB813] w-fit">
            <Bot className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base font-poppins">
            100% LLM Search Compatible
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Indexed with factual QA vectors so generative AI search engines can cite exact CREDA vendor credentials, subsidy values, and contact numbers.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
          <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 w-fit">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base font-poppins">
            Standard llms.txt Format
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Follows the official `/llms.txt` specification to allow AI crawlers to parse corporate specifications without HTML noise.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-md space-y-3">
          <div className="p-3 rounded-2xl bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400 w-fit">
            <Cpu className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white text-base font-poppins">
            JSON-LD Linked Data Schemas
          </h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Rich Schema.org markup for LocalBusiness, SolarEnergyContractor, GovernmentPermit, and FAQPage.
          </p>
        </div>
      </section>

      {/* Main Interactive Viewer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('llmstxt')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === 'llmstxt'
                    ? 'bg-[#0B4F6C] text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <FileText className="w-4 h-4 text-[#FDB813]" />
                <span>llms.txt Manifest</span>
              </button>

              <button
                onClick={() => setActiveTab('prompt')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === 'prompt'
                    ? 'bg-[#0B4F6C] text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <Bot className="w-4 h-4" />
                <span>Sample AI Prompt</span>
              </button>

              <button
                onClick={() => setActiveTab('jsonld')}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                  activeTab === 'jsonld'
                    ? 'bg-[#0B4F6C] text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>JSON-LD Schema</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="/llms.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>View Raw /llms.txt</span>
              </a>
              <a
                href="/llms-full.txt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-1.5 transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>View Raw /llms-full.txt</span>
              </a>
            </div>
          </div>

          {/* Content Window */}
          {activeTab === 'llmstxt' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  llms.txt Content Summary
                </span>
                <button
                  onClick={() => handleCopy(llmsTxtContent)}
                  className="px-3 py-1.5 rounded-lg bg-[#0B4F6C] hover:bg-[#083c53] text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                </button>
              </div>
              <pre className="p-5 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono leading-relaxed overflow-x-auto whitespace-pre-wrap">
                {llmsTxtContent}
              </pre>
            </div>
          )}

          {activeTab === 'prompt' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Copyable AI Search Query Prompt
                </span>
                <button
                  onClick={() => handleCopy(samplePrompt)}
                  className="px-3 py-1.5 rounded-lg bg-[#0B4F6C] hover:bg-[#083c53] text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied Prompt!' : 'Copy Prompt'}</span>
                </button>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <p className="text-xs text-slate-800 dark:text-slate-200 font-medium italic leading-relaxed">
                  "{samplePrompt}"
                </p>
                <p className="text-[11px] text-slate-500 border-t border-slate-200 dark:border-slate-800 pt-2">
                  Paste this prompt into ChatGPT, Perplexity, or Gemini to test AI Search synthesis of Rejoy Solar Power.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'jsonld' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Schema.org Structured Entity Code
                </span>
                <button
                  onClick={() => handleCopy(JSON.stringify(jsonLdSample, null, 2))}
                  className="px-3 py-1.5 rounded-lg bg-[#0B4F6C] hover:bg-[#083c53] text-white text-xs font-bold flex items-center gap-1.5 transition"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied Schema!' : 'Copy JSON'}</span>
                </button>
              </div>
              <pre className="p-5 rounded-2xl bg-slate-900 text-slate-200 text-xs font-mono leading-relaxed overflow-x-auto">
                {JSON.stringify(jsonLdSample, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </section>

      {/* Indexed Questions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold text-[#0B4F6C] dark:text-[#FDB813] uppercase tracking-wider">
            Natural Language QA Index
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-poppins">
            Top Indexed AI Queries & Verified Fact Vectors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {FAQ_DATA.slice(0, 6).map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-sm space-y-2"
            >
              <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item.question}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-6">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
