import React from 'react';
import { PageType } from '../types';
import { SERVICES_DATA } from '../data/solarData';
import { CheckCircle2, Zap, ShieldCheck, Sun, ArrowRight, DollarSign, Battery, Flame, HelpCircle } from 'lucide-react';
import { SolarCalculator } from '../components/SolarCalculator';

interface ResidentialPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const ResidentialPage: React.FC<ResidentialPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const onGridService = SERVICES_DATA.find((s) => s.id === 'ongrid-solar-system') || SERVICES_DATA[0];
  const offGridService = SERVICES_DATA.find((s) => s.id === 'offgrid-solar-system') || SERVICES_DATA[1];
  const waterHeaterService = SERVICES_DATA.find((s) => s.id === 'solar-water-heater') || SERVICES_DATA[2];

  return (
    <div className="pt-28 pb-16 space-y-16">
      {/* Hero Header Banner */}
      <section className="relative py-20 bg-[#0B132B] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${onGridService.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/95 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDB813] text-slate-950 font-black text-xs uppercase tracking-wider">
              <Sun className="w-4 h-4" /> Residential Solar & Water Heating Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-poppins leading-tight">
              Slash Home Electricity Bills by Up to 90%
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Transform your home rooftop with CREDA approved On-Grid solar systems, 24/7 Off-Grid battery backup systems, and zero-electricity Solar Water Heaters. Enjoy up to ₹78,000 PM Surya Ghar direct bank subsidy and 25-year performance warranties.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-2xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-xl transition"
              >
                Schedule Free Site Survey
              </button>
              <button
                onClick={() => onNavigate('subsidy')}
                className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition"
              >
                Check PM Surya Ghar Subsidy
              </button>
            </div>
          </div>

          {/* Quick Spec Card */}
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 space-y-4">
            <h3 className="text-xl font-black font-poppins text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2ECC71]" /> Residential System Highlights
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">On-Grid Net Metering:</strong>
                  Export excess daytime power directly to CSPDCL grid & receive bill credits.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Off-Grid Power Backup:</strong>
                  100% electricity independence during power cuts with LiFePO4 Lithium batteries.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Solar Water Heater (ETC/FPC):</strong>
                  Get 24/7 steaming hot water with zero monthly electricity cost.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Government Subsidy:</strong>
                  Direct bank credit up to ₹78,000 under PM Surya Ghar Muft Bijli Yojana.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* DETAILED RESIDENTIAL SOLUTIONS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest block">
            Residential Product Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-poppins text-slate-900 dark:text-white">
            Complete Home Energy Systems
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Engineered with Tier-1 DCR ALMM-compliant components for maximum lifetime yield and zero maintenance hassle.
          </p>
        </div>

        {/* 1. On-Grid Solar System */}
        <div className="bg-white dark:bg-[#0B132B] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[300px]">
            <img
              src={onGridService.imageUrl}
              alt="On-Grid Solar System"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#2ECC71] text-white text-xs font-black uppercase">
              CSPDCL Net Metering
            </span>
          </div>
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#0B4F6C] dark:text-[#FDB813] uppercase tracking-wider block">
                Solution 01
              </span>
              <h3 className="text-2xl font-black font-poppins text-slate-900 dark:text-white">
                On-Grid Rooftop Solar System
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Connect directly to the utility power grid with CSPDCL bi-directional net metering. Any extra electricity generated by your rooftop solar panels during sunny afternoon hours is fed back into the grid, earning you energy units and reducing your monthly power bills by up to 90%.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300 font-semibold">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2ECC71]" /> Eligible for ₹78,000 Govt Subsidy</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2ECC71]" /> 25-Year Linear Power Warranty</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2ECC71]" /> No Battery Maintenance Required</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2ECC71]" /> Mobile App IoT Remote Telemetry</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-xl bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs uppercase tracking-wider transition"
              >
                Get On-Grid Quote
              </button>
              <button
                onClick={() => onNavigate('subsidy')}
                className="px-6 py-3 rounded-xl bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-[#FDB813] font-bold text-xs uppercase tracking-wider transition"
              >
                Subsidy Calculator
              </button>
            </div>
          </div>
        </div>

        {/* 2. Off-Grid Solar System */}
        <div className="bg-white dark:bg-[#0B132B] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-5 order-2 lg:order-1">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#0B4F6C] dark:text-[#FDB813] uppercase tracking-wider block">
                Solution 02
              </span>
              <h3 className="text-2xl font-black font-poppins text-slate-900 dark:text-white">
                Off-Grid Solar System with Battery Storage
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Designed for total energy independence and areas prone to power cuts or rural locations. Paired with high-efficiency Lithium LiFePO4 or long-life C10 tubular battery banks and Pure Sine Wave hybrid PCU inverters to power fans, lights, refrigerators, and air conditioners 24 hours a day.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300 font-semibold">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2ECC71]" /> 100% Uninterrupted Power Backup</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2ECC71]" /> LiFePO4 Lithium 10+ Year Lifespan</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2ECC71]" /> Automatic Grid & Solar AC Transfer</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2ECC71]" /> Surge & Short Circuit Safety Protection</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-xl bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs uppercase tracking-wider transition"
              >
                Request Off-Grid Estimate
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[300px] order-1 lg:order-2">
            <img
              src={offGridService.imageUrl}
              alt="Off-Grid Solar System"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase">
              24/7 Battery Backup
            </span>
          </div>
        </div>

        {/* 3. Solar Water Heater */}
        <div className="bg-white dark:bg-[#0B132B] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative h-72 lg:h-full min-h-[300px]">
            <img
              src={waterHeaterService.imageUrl}
              alt="Solar Water Heater"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-sky-500 text-white text-xs font-black uppercase">
              Zero Electricity Hot Water
            </span>
          </div>
          <div className="lg:col-span-7 p-8 sm:p-10 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-bold text-[#0B4F6C] dark:text-[#FDB813] uppercase tracking-wider block">
                Solution 03
              </span>
              <h3 className="text-2xl font-black font-poppins text-slate-900 dark:text-white">
                Solar Water Heater (ETC / FPC)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Eliminate heavy electric water geyser bills completely! Our high-vacuum Evacuated Tube Collector (ETC) and Flat Plate Collector (FPC) solar thermal water heaters heat water up to 80°C using solar radiation. Features SUS-304 food-grade stainless steel inner tanks and high-density PUF insulation for 24-hour heat retention.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 dark:text-slate-300 font-semibold">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2ECC71]" /> Capacities: 100 LPD to 5,000+ LPD</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2ECC71]" /> Borosilicate Triple-Layer Vacuum Glass</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2ECC71]" /> Hard Water & Anti-Scaling Coating</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2ECC71]" /> High Density PUF 24-Hour Insulation</span>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-xl bg-[#0B4F6C] hover:bg-[#083A50] text-white font-extrabold text-xs uppercase tracking-wider transition"
              >
                Inquire Solar Water Heater
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEM TECHNICAL COMPARISON TABLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest block">
            Technical Specification Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-poppins text-slate-900 dark:text-white">
            Compare Residential Solar Technologies
          </h2>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl bg-white dark:bg-[#0B132B]">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-poppins text-sm">
                <th className="p-4 font-extrabold">Feature / Parameter</th>
                <th className="p-4 font-extrabold text-[#0B4F6C] dark:text-[#FDB813]">On-Grid System</th>
                <th className="p-4 font-extrabold text-emerald-600 dark:text-emerald-400">Off-Grid System</th>
                <th className="p-4 font-extrabold text-sky-600 dark:text-sky-400">Solar Water Heater</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="p-4 font-bold bg-slate-50/50 dark:bg-slate-900/30">Primary Purpose</td>
                <td className="p-4">Reduce Monthly Electricity Bills (Up to 90%)</td>
                <td className="p-4">24/7 Uninterrupted Power Backup</td>
                <td className="p-4">Zero Electricity Hot Water Supply</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-slate-50/50 dark:bg-slate-900/30">Grid Connection</td>
                <td className="p-4">Connected to CSPDCL Utility Net Meter</td>
                <td className="p-4">Works Standalone or Hybrid Grid Sync</td>
                <td className="p-4">Direct Plumbing Connection</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-slate-50/50 dark:bg-slate-900/30">Battery Storage</td>
                <td className="p-4">Not Required (Grid acts as battery)</td>
                <td className="p-4">Lithium LiFePO4 or Tubular Battery Bank</td>
                <td className="p-4">Thermal PUF Insulated Tank (24h)</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-slate-50/50 dark:bg-slate-900/30">Govt Subsidy (PM Surya Ghar)</td>
                <td className="p-4 text-emerald-600 font-extrabold">Up to ₹78,000 Direct Bank Credit</td>
                <td className="p-4 text-slate-500">Selected Subsidy Schemes</td>
                <td className="p-4 text-slate-500">State Thermal Rebates Available</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-slate-50/50 dark:bg-slate-900/30">Average Payback Period</td>
                <td className="p-4 font-bold text-amber-600">2.5 to 3.2 Years</td>
                <td className="p-4 font-bold text-amber-600">3.5 to 4.5 Years</td>
                <td className="p-4 font-bold text-amber-600">1.5 to 2.0 Years</td>
              </tr>
              <tr>
                <td className="p-4 font-bold bg-slate-50/50 dark:bg-slate-900/30">System Lifespan</td>
                <td className="p-4">25 Years Panel Performance Warranty</td>
                <td className="p-4">25 Yr Panels / 10 Yr Lithium Battery</td>
                <td className="p-4">15 to 20 Years Thermal Life</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Savings Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SolarCalculator onOpenQuoteModal={onOpenQuoteModal} />
      </section>
    </div>
  );
};
