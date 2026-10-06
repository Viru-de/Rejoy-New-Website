import React from 'react';
import { PageType } from '../types';
import { SERVICES_DATA } from '../data/solarData';
import { CheckCircle2, Building2, Zap, Award, ArrowRight, ShieldCheck, TrendingUp, DollarSign } from 'lucide-react';

interface CommercialPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const CommercialPage: React.FC<CommercialPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const service = SERVICES_DATA.find((s) => s.id === 'commercial') || SERVICES_DATA[1];

  return (
    <div className="pt-28 pb-16 space-y-16">
      {/* Hero Header Banner */}
      <section className="relative py-20 bg-[#0B132B] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${service.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/95 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B4F6C] text-white font-bold text-xs uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#FDB813]" /> Commercial & Corporate Solar Systems
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-poppins leading-tight">
              Lower Commercial Power Tariffs & Claim 40% Tax Depreciation
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Designed specifically for corporate office towers, IT parks, shopping malls, private hospitals, educational institutions, and commercial complexes across Chhattisgarh. Slash heavy peak daytime energy tariffs with turnkey commercial solar EPC solutions.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-2xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-xl transition"
              >
                Request Commercial Feasibility Audit
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 space-y-4">
            <h3 className="text-xl font-black font-poppins text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#2ECC71]" /> Commercial Financial Incentives
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">40% Accelerated Depreciation:</strong>
                  Write off 40% of the total solar asset value in Year 1 to lower corporate income tax liability.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Sub-3 Year ROI Payback:</strong>
                  High commercial tariffs (₹8 - ₹12/unit) enable rapid capital recovery in less than 36 months.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">ESG & Green Rating Boost:</strong>
                  Achieve LEED / IGBC green building certification and carbon offset benchmarks.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Solar Carports with EV Charging:</strong>
                  Convert parking space into dual-purpose clean power generation with EV fast chargers.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMMERCIAL SOLUTIONS BREAKDOWN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest block">
            Custom Engineering Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-poppins text-slate-900 dark:text-white">
            Tailored Commercial Solar Architectures
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0B4F6C] text-[#FDB813] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Rooftop On-Grid Commercial Plants
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Transform unused concrete slabs and elevated metallic roofs into revenue-generating solar assets. Engineered with high-efficiency 580W+ N-Type TOPCon bifacial modules and multi-MPPT string inverters.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71]" /> Capacities: 25 kW to 500 kW</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71]" /> PVSyst Shading & Wind Load Certified</li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2ECC71] text-white flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Solar Parking Carports & EV Hubs
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Upgrade corporate and mall parking lots with heavy-duty galvanized steel solar carports. Protect vehicles from heat while harvesting solar power and powering integrated 60kW DC EV fast chargers.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71]" /> Dual Purpose Energy & Parking</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71]" /> Integrated EV Charger Infrastructure</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              Hybrid Storage & DG Sync
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Intelligent solar-diesel generator synchronization controller prevents diesel generator reverse power feeding during grid blackouts, slashing diesel fuel consumption by up to 75%.
            </p>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71]" /> Zero Reverse Power Fuel Saver</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2ECC71]" /> Instant Hot-Swap Grid Transfer</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white text-center space-y-6">
          <h2 className="text-3xl font-black font-poppins">
            Ready to Cut Commercial Operating Expenses?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Our certified solar engineers will conduct a 3D drone roof analysis, evaluate your CSPDCL bill tariff structure, and present a complete 25-year financial cash flow projection.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 rounded-2xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-2xl transition"
          >
            Schedule Free Commercial Energy Audit
          </button>
        </div>
      </section>
    </div>
  );
};
