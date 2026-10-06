import React from 'react';
import { PageType } from '../types';
import { SERVICES_DATA } from '../data/solarData';
import { CheckCircle2, ShieldCheck, Zap, Wrench, BatteryCharging, Cpu, ArrowRight } from 'lucide-react';

interface SolarEpcPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const SolarEpcPage: React.FC<SolarEpcPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const epcService = SERVICES_DATA.find((s) => s.id === 'solar-epc') || SERVICES_DATA[3];

  return (
    <div className="pt-28 pb-16 space-y-16">
      {/* Hero Header Banner */}
      <section className="relative py-20 bg-[#0B132B] text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{ backgroundImage: `url(${epcService.imageUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/95 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FDB813] text-slate-950 font-black text-xs uppercase tracking-wider">
              <Wrench className="w-4 h-4" /> Turnkey Solar EPC & O&M AMC Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-poppins leading-tight">
              End-to-End Solar Engineering, Procurement & Construction
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Rejoy Solar Power delivers zero-defect turnkey solar EPC services, utility net metering clearances, microgrid energy storage, and 24/7 annual maintenance contracts (O&M AMC) for residential, commercial, and industrial solar projects.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-2xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-xl transition"
              >
                Inquire Turnkey EPC Services
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 space-y-4">
            <h3 className="text-xl font-black font-poppins text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#2ECC71]" /> Turnkey EPC Pillars
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Engineering & 3D Design:</strong>
                  Shadow analysis, CAD structural drawings, PVSyst irradiance modeling.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Tier-1 Procurement:</strong>
                  Direct factory sourcing of ALMM & DCR certified panels and smart inverters.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">DISCOM Sanction & Net Metering:</strong>
                  End-to-end CREDA approvals, CSPDCL net meter testing & grid commissioning.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">24/7 O&M AMC Maintenance:</strong>
                  Thermal imaging drone inspections, robotic cleaning & preventive upkeep.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CORE EPC & AMC SERVICES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest block">
            Scope of Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-poppins text-slate-900 dark:text-white">
            Full Lifecycle Solar Management
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0B4F6C] text-[#FDB813] flex items-center justify-center">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              1. Turnkey EPC Execution
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              From initial site soil testing to electrical single-line diagram (SLD) engineering, civil pile construction, and final net meter synchronization with DISCOM utilities.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-[#2ECC71] text-white flex items-center justify-center">
              <BatteryCharging className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              2. Energy Storage Systems (BESS)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Lithium iron phosphate (LiFePO4) battery integration for peak load shifting, diesel generator replacement, and grid-tied hybrid resilience.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
              3. 24/7 Operations & Maintenance
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Comprehensive AMC packages including quarterly thermal hot-spot scans, automatic robotic de-dusting, inverter firmware upgrades, and 4-hour response SLAs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white text-center space-y-6">
          <h2 className="text-3xl font-black font-poppins">
            Partner with Chhattisgarh’s Leading Solar EPC Vendor
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Contact Rejoy Solar Power Private Limited today for zero-defect engineering and CREDA registered solar execution.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 rounded-2xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-2xl transition"
          >
            Get Custom EPC Proposal
          </button>
        </div>
      </section>
    </div>
  );
};
