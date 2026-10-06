import React, { useState } from 'react';
import { ConsumerType, SolarRecommendationResult } from '../types';
import {
  Sparkles,
  Building2,
  Home,
  Factory,
  GraduationCap,
  Hospital,
  Building,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  Zap,
  DollarSign,
  Sun,
  ShieldCheck,
  Award,
  Download,
  Calendar,
  BarChart2,
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

interface SolarRecommendationWizardProps {
  onOpenQuoteModal: () => void;
}

export const SolarRecommendationWizard: React.FC<SolarRecommendationWizardProps> = ({ onOpenQuoteModal }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [propertyType, setPropertyType] = useState<ConsumerType>('Residential');
  
  // Step 2 Form
  const [monthlyBill, setMonthlyBill] = useState('4500');
  const [unitsConsumed, setUnitsConsumed] = useState('650');
  const [roofArea, setRoofArea] = useState('600');
  const [roofType, setRoofType] = useState<'Concrete Flat' | 'Metal Shed' | 'Tiled Slanted' | 'Open Ground'>('Concrete Flat');
  const [city, setCity] = useState('Raipur');
  const [provider, setProvider] = useState('CSPDCL (Chhattisgarh Power)');

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SolarRecommendationResult | null>(null);

  const propertyOptions: { type: ConsumerType; label: string; icon: any; desc: string }[] = [
    { type: 'Residential', label: 'Residential Home / Villa', icon: Home, desc: 'Single-family rooftop solar with net metering' },
    { type: 'Commercial', label: 'Commercial Office / Tech Park', icon: Building2, desc: 'Corporate roof solar with 40% depreciation' },
    { type: 'Industrial', label: 'Industrial Factory / Hub', icon: Factory, desc: 'Megawatt power plant for manufacturing units' },
    { type: 'Apartment', label: 'Apartment Complex / HOA', icon: Building, desc: 'Shared rooftop solar with virtual net metering' },
    { type: 'School', label: 'School / University Campus', icon: GraduationCap, desc: 'Educational institution green power' },
    { type: 'Hospital', label: 'Hospital / Healthcare Facility', icon: Hospital, desc: '24/7 critical solar power with battery backup' },
  ];

  const handleGenerateRecommendation = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/solar-recommendation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          propertyType,
          billAmount: Number(monthlyBill) || 8000,
          unitsConsumed: Number(unitsConsumed) || 1000,
          roofArea: Number(roofArea) || 800,
          roofType,
          city,
          provider,
        }),
      });

      const data = await res.json();
      setResult(data);
      setStep(3);
    } catch (err) {
      console.error("API call error, computing calculation client-side:", err);
      const bill = Number(monthlyBill) || 8000;
      const roof = Number(roofArea) || 800;
      const estUnits = Number(unitsConsumed) || Math.round(bill / 7.5);
      const recommendedKw = Math.max(1, Math.min(Math.round((estUnits / 120) * 10) / 10, Math.floor(roof / 80)));
      const panelsCount = Math.ceil((recommendedKw * 1000) / 540);
      const estRoofNeeded = panelsCount * 30;
      const estAnnualGen = Math.round(recommendedKw * 1450);
      const estAnnualSavings = Math.round(estAnnualGen * 8.5);
      const estCost = Math.round(recommendedKw * 52000);
      const estSubsidy = recommendedKw <= 3 ? Math.round(estCost * 0.35) : Math.round(estCost * 0.25);
      const netCost = estCost - estSubsidy;
      const paybackYears = (netCost / estAnnualSavings).toFixed(1);
      const co2ReductionTons = (estAnnualGen * 0.00082).toFixed(1);

      setResult({
        propertyType,
        recommendedKw,
        panelsCount,
        estRoofNeeded,
        inverterSizeKw: Math.ceil(recommendedKw * 1.1),
        batteryRecommendation: recommendedKw > 5 ? "10kWh Lithium LFP Smart Storage" : "Optional 5kWh LFP Battery Backup",
        estAnnualGenKwh: estAnnualGen,
        co2ReductionTons,
        estGrossCost: estCost,
        estSubsidy,
        netInvestment: netCost,
        estAnnualSavings,
        est25YrSavings: Math.round(estAnnualSavings * 25 * 1.03),
        paybackYears,
        timelineDays: propertyType === "Industrial" ? "14 - 21 Days" : "5 - 7 Days",
        aiAnalysis: `• Excellent solar potential identified for your ${propertyType} property in ${city || "Chhattisgarh"}.\n` +
          `• A ${recommendedKw} kW grid-tied solar system with ${panelsCount} high-efficiency bifacial panels will offset up to 90% of your energy costs.\n` +
          `• Your estimated payback period is approx ${paybackYears} years, yielding 20+ years of free clean energy.`,
      });
      setStep(3);
    } finally {
      setLoading(false);
    }
  };

  // Chart data for 25-year financial savings preview
  const chartData = result
    ? [
        { year: 'Yr 1', savings: Math.round(result.estAnnualSavings) },
        { year: 'Yr 5', savings: Math.round(result.estAnnualSavings * 5.3) },
        { year: 'Yr 10', savings: Math.round(result.estAnnualSavings * 11.2) },
        { year: 'Yr 15', savings: Math.round(result.estAnnualSavings * 17.8) },
        { year: 'Yr 20', savings: Math.round(result.estAnnualSavings * 25.1) },
        { year: 'Yr 25', savings: Math.round(result.est25YrSavings) },
      ]
    : [];

  return (
    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-[#0B132B] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 relative overflow-hidden my-8">
      {/* Top Banner Indicator */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-[#0B4F6C] to-[#2ECC71] text-white shadow-md">
            <Sparkles className="w-6 h-6 text-[#FDB813]" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-poppins flex items-center gap-2">
              AI-Powered Solar Recommendation Wizard
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Generates tailored solar design, panel counts, battery capacity & financial yield
            </p>
          </div>
        </div>

        {/* Step Progress Pills */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold">
          <div className={`px-3 py-1.5 rounded-full ${step === 1 ? 'bg-[#0B4F6C] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
            1. Property Type
          </div>
          <span className="text-slate-300 dark:text-slate-700">→</span>
          <div className={`px-3 py-1.5 rounded-full ${step === 2 ? 'bg-[#0B4F6C] text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
            2. Energy Profile
          </div>
          <span className="text-slate-300 dark:text-slate-700">→</span>
          <div className={`px-3 py-1.5 rounded-full ${step === 3 ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
            3. AI Results
          </div>
        </div>
      </div>

      {/* STEP 1: Property Type Selection */}
      {step === 1 && (
        <div className="py-8 space-y-6 animate-in fade-in duration-300">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest">
              Step 1 of 3
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Select Your Property Category
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Solar engineering specs vary significantly between residential homes, corporate offices, and industrial plants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {propertyOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = propertyType === opt.type;
              return (
                <button
                  key={opt.type}
                  onClick={() => setPropertyType(opt.type)}
                  className={`p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group ${
                    isSelected
                      ? 'border-[#0B4F6C] bg-[#0B4F6C]/5 dark:bg-[#0B4F6C]/20 shadow-lg ring-2 ring-[#0B4F6C]'
                      : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-[#0B4F6C] text-[#FDB813]' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-slate-200'}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {isSelected && <CheckCircle2 className="w-5 h-5 text-[#0B4F6C] dark:text-[#FDB813]" />}
                  </div>
                  <div className="mt-4">
                    <h4 className="font-bold text-sm text-slate-900 dark:text-white font-poppins">
                      {opt.label}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {opt.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-6 flex justify-end">
            <button
              onClick={() => setStep(2)}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0B4F6C] to-[#2ECC71] text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition flex items-center gap-2"
            >
              <span>Continue to Energy Inputs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Energy & Site Inputs */}
      {step === 2 && (
        <div className="py-8 space-y-6 animate-in fade-in duration-300">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest">
              Step 2 of 3
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Enter {propertyType} Consumption & Site Details
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Provide your average power bill, roof square footage, and location to run AI solar analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Average Monthly Power Bill (₹)
              </label>
              <input
                type="number"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Monthly Units Consumed (kWh)
              </label>
              <input
                type="number"
                value={unitsConsumed}
                onChange={(e) => setUnitsConsumed(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Available Unshaded Roof Area (sq. ft)
              </label>
              <input
                type="number"
                value={roofArea}
                onChange={(e) => setRoofArea(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Roof Surface Structure
              </label>
              <select
                value={roofType}
                onChange={(e: any) => setRoofType(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
              >
                <option value="Concrete Flat">Reinforced Concrete Flat Roof</option>
                <option value="Metal Shed">Industrial Metal Tin Shed</option>
                <option value="Tiled Slanted">Clay / Concrete Tiled Roof</option>
                <option value="Open Ground">Open Ground / Carport Field</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                City / Region
              </label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Electricity Provider Company
              </label>
              <input
                type="text"
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
              />
            </div>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold text-sm flex items-center gap-2 hover:bg-slate-100 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>

            <button
              onClick={handleGenerateRecommendation}
              disabled={loading}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0B4F6C] via-[#0B132B] to-[#2ECC71] text-white font-bold text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#FDB813]" />
                  <span>AI Analyzing Solar Engineering...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#FDB813]" />
                  <span>Generate AI Recommendation</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: AI Recommendation Results */}
      {step === 3 && result && (
        <div className="py-6 space-y-6 animate-in zoom-in-95 duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gradient-to-r from-[#0B4F6C] to-[#0B132B] text-white p-6 rounded-2xl shadow-xl">
            <div>
              <span className="text-xs text-[#FDB813] font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> AI Solar System Design Completed
              </span>
              <h3 className="text-2xl font-black font-poppins mt-1">
                Recommended System: {result.recommendedKw} kW ({result.propertyType})
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Engineered for {city} • Estimated Payback in {result.paybackYears} Years
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition hover:scale-105"
              >
                Book Site Survey
              </button>
            </div>
          </div>

          {/* Key Metric Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500 font-semibold">Recommended Capacity</span>
              <div className="text-xl font-extrabold text-[#0B4F6C] dark:text-[#FDB813] mt-1">
                {result.recommendedKw} kW
              </div>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                {result.panelsCount} x 540W Panels
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500 font-semibold">Roof Area Needed</span>
              <div className="text-xl font-extrabold text-slate-900 dark:text-white mt-1">
                {result.estRoofNeeded} sq.ft
              </div>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                Out of {roofArea} sq.ft available
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500 font-semibold">Annual Energy Generation</span>
              <div className="text-xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-1">
                {result.estAnnualGenKwh.toLocaleString()} kWh
              </div>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                ~{result.co2ReductionTons} Tons CO2 Reduced/yr
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs text-slate-500 font-semibold">Estimated Subsidy</span>
              <div className="text-xl font-extrabold text-amber-600 dark:text-[#FDB813] mt-1">
                ₹{result.estSubsidy.toLocaleString()}
              </div>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                Govt Direct Benefit Eligibility
              </span>
            </div>
          </div>

          {/* AI Analysis Narrative & Financial Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-poppins flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FDB813]" />
                AI Engineering Insights & Advice
              </h4>
              <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed space-y-2 whitespace-pre-line bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/50">
                {result.aiAnalysis}
              </div>

              <div className="pt-2 space-y-2 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Inverter Specs:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{result.inverterSizeKw} kW Smart String Inverter</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
                  <span className="text-slate-500">Battery Storage:</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">{result.batteryRecommendation}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500">Est. Installation Timeline:</span>
                  <span className="font-bold text-slate-900 dark:text-white">{result.timelineDays}</span>
                </div>
              </div>
            </div>

            {/* Financial Chart */}
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white font-poppins flex items-center gap-2 mb-2">
                  <BarChart2 className="w-4 h-4 text-[#0B4F6C]" />
                  25-Year Savings Projection (₹)
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Lifetime Cumulative Savings: <strong className="text-emerald-600 dark:text-emerald-400">₹{result.est25YrSavings.toLocaleString()}</strong>
                </p>
              </div>

              <div className="h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <XAxis dataKey="year" stroke="#94a3b8" fontSize={10} />
                    <YAxis stroke="#94a3b8" fontSize={10} />
                    <Tooltip formatter={(val: any) => [`₹${val.toLocaleString()}`, 'Savings']} />
                    <Bar dataKey="savings" fill="#0B4F6C" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 mt-2">
                <div>
                  <span className="text-[11px] text-slate-400 block">Net Investment</span>
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                    ₹{result.netInvestment.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 transition"
                >
                  Modify Inputs
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
