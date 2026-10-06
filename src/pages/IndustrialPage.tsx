import React from 'react';
import { PageType } from '../types';
import { SERVICES_DATA } from '../data/solarData';
import { CheckCircle2, Factory, Zap, ShieldCheck, Cpu, Gauge, Globe } from 'lucide-react';

interface IndustrialPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const IndustrialPage: React.FC<IndustrialPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const service = SERVICES_DATA.find((s) => s.id === 'industrial') || SERVICES_DATA[2];

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
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#2ECC71] text-white font-bold text-xs uppercase tracking-wider">
              <Factory className="w-4 h-4" /> Megawatt Industrial Power Plants
            </span>
            <h1 className="text-4xl sm:text-5xl font-black font-poppins leading-tight">
              Turnkey Industrial Megawatt Solar EPC & Substation Design
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Tailored for heavy industrial plants, steel mills, rice mills, cement factories, textile hubs, and logistics parks across Chhattisgarh. Achieve sub-3 year capital payback with multi-megawatt solar generation and 11kV/33kV high-voltage grid synchronization.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 rounded-2xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-xl transition"
              >
                Schedule Megawatt Technical Feasibility
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 space-y-4">
            <h3 className="text-xl font-black font-poppins text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#2ECC71]" /> Megawatt Industrial Capabilities
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-200">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Plant Capacities:</strong>
                  1 MW to 50+ MW Ground-Mounted & Metallic Sheet Rooftop.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Substation Interconnection:</strong>
                  11kV / 33kV / 66kV High Voltage Substation Step-Up Transformers.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Harmonics & Power Factor:</strong>
                  Active harmonics mitigation and APFC power factor stabilization.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#2ECC71] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">SCADA & Weather Telemetry:</strong>
                  Fiber-optic SCADA monitoring, solar pyranometers, and thermal imaging.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* INDUSTRIAL EPC WORKFLOW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-black uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest block">
            End-to-End Execution
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-poppins text-slate-900 dark:text-white">
            Industrial Megawatt EPC Standards
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
            <span className="w-10 h-10 rounded-2xl bg-[#0B4F6C] text-[#FDB813] flex items-center justify-center font-black text-sm">
              01
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
              3D Shading & PVSyst Simulation
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Drone topographic surveys and PVSyst 8.0 irradiance modeling to guarantee precise annual generation forecasts.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
            <span className="w-10 h-10 rounded-2xl bg-[#2ECC71] text-white flex items-center justify-center font-black text-sm">
              02
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
              CREDA & CSPDCL Open Access
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Full legal permitting for CSPDCL grid sync, open access power purchase agreements, and statutory electrical inspectorate clearances.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
            <span className="w-10 h-10 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm">
              03
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
              Civil Structures & Electrical
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              150 km/h wind load certified galvanized pile foundations, IP67 central string inverters, and armored underground DC cabling.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
            <span className="w-10 h-10 rounded-2xl bg-[#0B4F6C] text-white flex items-center justify-center font-black text-sm">
              04
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
              SCADA & 24/7 AMC Maintenance
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              Fiber optic telemetry, automated robotic dry cleaning systems, thermal drone inspections, and 25-year performance monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white text-center space-y-6">
          <h2 className="text-3xl font-black font-poppins">
            Transform Your Industrial Energy Cost Structure
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Schedule a high-level consultation with our Chief Solar Engineering Director to discuss megawatt open access and ground-mounted solar feasibility.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 rounded-2xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-2xl transition"
          >
            Consult Industrial EPC Engineers
          </button>
        </div>
      </section>
    </div>
  );
};
