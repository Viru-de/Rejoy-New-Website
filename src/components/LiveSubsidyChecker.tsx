import React, { useState } from 'react';
import { SUBSIDY_DATABASE } from '../data/solarData';
import {
  Award,
  CheckCircle2,
  FileText,
  Building2,
  Home,
  ShieldCheck,
  ExternalLink,
  AlertCircle,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface LiveSubsidyCheckerProps {
  onOpenQuoteModal: () => void;
}

export const LiveSubsidyChecker: React.FC<LiveSubsidyCheckerProps> = ({ onOpenQuoteModal }) => {
  const [selectedState, setSelectedState] = useState<string>('Chhattisgarh');
  const [consumerType, setConsumerType] = useState<'Residential' | 'Commercial'>('Residential');
  const [systemKw, setSystemKw] = useState<number>(3);

  const activeInfo = SUBSIDY_DATABASE[selectedState] || SUBSIDY_DATABASE['Chhattisgarh'];

  // Calculate PM Surya Ghar subsidy estimate for India
  let estimatedSubsidy = 0;
  if (consumerType === 'Residential') {
    if (systemKw <= 1) {
      estimatedSubsidy = 30000;
    } else if (systemKw <= 2) {
      estimatedSubsidy = 60000;
    } else {
      estimatedSubsidy = 78000; // Max ₹78,000 for >= 3kW
    }
  } else {
    // Commercial 40% tax depreciation savings estimate
    estimatedSubsidy = Math.round(systemKw * 55000 * 0.15);
  }

  return (
    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-[#0B132B] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#2ECC71] to-[#0B4F6C] text-white shadow-md">
            <Award className="w-6 h-6 text-[#FDB813]" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-poppins flex items-center gap-2">
              Live Government Solar Subsidy Checker
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Verify eligibility, document checklists, and direct benefit transfer for state & federal schemes
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold dark:bg-emerald-950/60 dark:text-emerald-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          2026 Active Government Schemes
        </span>
      </div>

      {/* Inputs */}
      <div className="py-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
            Select State / Region Scheme
          </label>
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
          >
            {Object.keys(SUBSIDY_DATABASE).map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
            Consumer Category
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setConsumerType('Residential')}
              className={`py-2.5 rounded-xl text-xs font-bold transition border flex items-center justify-center gap-1.5 ${
                consumerType === 'Residential'
                  ? 'bg-[#0B4F6C] text-white border-[#0B4F6C]'
                  : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              Residential
            </button>
            <button
              type="button"
              onClick={() => setConsumerType('Commercial')}
              className={`py-2.5 rounded-xl text-xs font-bold transition border flex items-center justify-center gap-1.5 ${
                consumerType === 'Commercial'
                  ? 'bg-[#0B4F6C] text-white border-[#0B4F6C]'
                  : 'bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" />
              Commercial
            </button>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
            Planned System Capacity (kW)
          </label>
          <input
            type="number"
            min="1"
            max="100"
            value={systemKw}
            onChange={(e) => setSystemKw(Number(e.target.value) || 1)}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
          />
        </div>
      </div>

      {/* Output Hero Display */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0B4F6C] via-[#0B132B] to-[#0B4F6C] text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 my-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#FDB813] font-bold uppercase tracking-wider">
              Calculated Subsidy Allowance
            </span>
            <span className="text-[10px] bg-emerald-500 text-white font-extrabold px-2 py-0.5 rounded-full">
              Verified Eligible
            </span>
          </div>
          <div className="text-3xl sm:text-4xl font-black font-poppins text-[#FDB813] mt-1">
            ₹{estimatedSubsidy.toLocaleString()}
          </div>
          <p className="text-xs text-slate-300 mt-1">
            For {systemKw}kW {consumerType} Solar Rooftop under {activeInfo.state} Policy
          </p>
        </div>

        <button
          onClick={onOpenQuoteModal}
          className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#2ECC71] to-emerald-600 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition flex items-center gap-2 shrink-0"
        >
          <span>Apply via Rejoy Solar Fast-Track</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Details Grid: Documents & Process */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {/* Documents Required */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white font-poppins flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#0B4F6C]" />
            Documents Required for Portal Application
          </h4>
          <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
            {activeInfo.documentsRequired.map((doc, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Process Steps */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white font-poppins flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#2ECC71]" />
            Step-by-Step Application Roadmap
          </h4>
          <ol className="space-y-2 text-xs text-slate-600 dark:text-slate-300 list-decimal list-inside">
            {activeInfo.processSteps.map((stepItem, idx) => (
              <li key={idx} className="leading-relaxed">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{stepItem}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Official Disclaimer */}
      <div className="mt-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-300">
        <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <p>
          <strong>Official Policy Disclaimer:</strong> Subsidy estimates are calculated based on benchmark state and national solar program guidelines. Actual subsidy approvals are subject to utility DISCOM net metering sanction and site verification. Rejoy Solar handles end-to-end liaisoning to maximize your subsidy claim.
        </p>
      </div>
    </div>
  );
};
