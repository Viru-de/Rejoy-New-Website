import React, { useState, useMemo } from 'react';
import { ConsumerType } from '../types';
import {
  Calculator as CalcIcon,
  DollarSign,
  TrendingUp,
  Zap,
  Sun,
  ShieldCheck,
  Percent,
  Calendar,
  PieChart as PieIcon,
  Award,
  Sparkles,
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';

interface SolarCalculatorProps {
  onOpenQuoteModal: () => void;
}

const CG_CITIES = [
  'Raipur',
  'Bhilai',
  'Durg',
  'Bilaspur',
  'Korba',
  'Rajnandgaon',
  'Jagdalpur',
  'Ambikapur',
  'Raigarh',
  'Dhamtari',
  'Mahasamund',
  'Champa',
];

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onOpenQuoteModal }) => {
  const [activeTab, setActiveTab] = useState<'estimator' | 'emi'>('estimator');

  // Estimator State
  const [selectedCity, setSelectedCity] = useState<string>('Raipur');
  const [monthlyBill, setMonthlyBill] = useState<number>(3500);
  const [roofArea, setRoofArea] = useState<number>(500);
  const [consumerType, setConsumerType] = useState<ConsumerType>('Residential');
  const [includeBattery, setIncludeBattery] = useState<boolean>(false);

  // EMI Calculator State
  const [projectCostInput, setProjectCostInput] = useState<number>(180000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(7.2);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(5);

  // Computed Solar Estimator Values for Chhattisgarh & CSPDCL
  const estimatorResults = useMemo(() => {
    // Tariff estimate for Chhattisgarh CSPDCL ~ ₹6.80 / unit (kWh)
    const tariffPerUnit = consumerType === 'Residential' ? 6.80 : 8.20;
    const unitsPerMonth = Math.round(monthlyBill / tariffPerUnit);
    
    // 1kW solar in CG yields ~125 kWh/month, requires ~80 sq ft roof
    const capacityByUnits = unitsPerMonth / 125;
    const capacityByRoof = roofArea / 80;
    const recommendedKw = Math.max(1, Math.min(Math.round(Math.min(capacityByUnits, capacityByRoof) * 10) / 10, 100));

    const annualGenKwh = Math.round(recommendedKw * 1500);
    const annualSavings = Math.round(annualGenKwh * tariffPerUnit);
    
    // Base solar cost in India ~ ₹55,000 / kW (for Tier-1 DCR Mono PERC / N-Type)
    let grossCost = Math.round(recommendedKw * 55000);
    if (includeBattery) grossCost += Math.round(recommendedKw * 25000); // Hybrid LFP Battery storage

    // PM Surya Ghar Scheme Govt Subsidy Calculation for Residential
    let estimatedSubsidy = 0;
    if (consumerType === 'Residential') {
      if (recommendedKw <= 1) {
        estimatedSubsidy = 30000;
      } else if (recommendedKw <= 2) {
        estimatedSubsidy = 60000;
      } else {
        estimatedSubsidy = 78000; // Max ₹78,000 for >= 3kW
      }
    } else {
      // Commercial 40% tax depreciation equivalent benefit estimate
      estimatedSubsidy = Math.round(grossCost * 0.15);
    }

    const netCost = Math.max(0, grossCost - estimatedSubsidy);
    const paybackYears = Number((netCost / annualSavings).toFixed(1));
    const roiPercent = Number(((annualSavings / netCost) * 100).toFixed(1));
    const savings25Years = Math.round(annualSavings * 25 * 1.05); // 5% CSPDCL tariff escalation
    const co2TreesEquivalent = Math.round(annualGenKwh * 0.05); // trees equivalent

    return {
      tariffPerUnit,
      unitsPerMonth,
      recommendedKw,
      annualGenKwh,
      annualSavings,
      grossCost,
      estimatedSubsidy,
      netCost,
      paybackYears,
      roiPercent,
      savings25Years,
      co2TreesEquivalent,
    };
  }, [monthlyBill, roofArea, consumerType, includeBattery]);

  // Computed EMI Values
  const emiResults = useMemo(() => {
    const downPaymentAmount = Math.round((projectCostInput * downPaymentPercent) / 100);
    const principal = projectCostInput - downPaymentAmount;
    const monthlyRate = interestRate / 12 / 100;
    const months = loanTenureYears * 12;

    let monthlyEmi = 0;
    if (monthlyRate > 0) {
      monthlyEmi = Math.round(
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1)
      );
    } else {
      monthlyEmi = Math.round(principal / months);
    }

    const totalPayable = monthlyEmi * months;
    const totalInterest = Math.max(0, totalPayable - principal);

    return {
      downPaymentAmount,
      principal,
      monthlyEmi,
      totalInterest,
      totalPayable,
    };
  }, [projectCostInput, downPaymentPercent, interestRate, loanTenureYears]);

  // Pie chart data for EMI
  const pieData = [
    { name: 'Down Payment', value: emiResults.downPaymentAmount, color: '#2ECC71' },
    { name: 'Loan Principal', value: emiResults.principal, color: '#0B4F6C' },
    { name: 'Total Interest', value: emiResults.totalInterest, color: '#FDB813' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-white dark:bg-[#0B132B] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-10 my-8">
      {/* Header & Tab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div>
          <span className="text-xs font-bold uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest flex items-center gap-1">
            <CalcIcon className="w-4 h-4" /> Chhattisgarh Solar ROI Engine
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-poppins mt-1">
            CSPDCL Solar Savings & PM Surya Ghar Calculator
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Calculated for Chhattisgarh State Power Distribution Co. Ltd. (CSPDCL) tariff slabs & CREDA policies.
          </p>
        </div>

        <div className="flex items-center p-1 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <button
            onClick={() => setActiveTab('estimator')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
              activeTab === 'estimator'
                ? 'bg-[#0B4F6C] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            Solar Cost & Subsidy Estimator
          </button>
          <button
            onClick={() => setActiveTab('emi')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
              activeTab === 'emi'
                ? 'bg-[#0B4F6C] text-white shadow-md'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            SBI Solar Loan EMI Calculator
          </button>
        </div>
      </div>

      {/* TAB 1: PROJECT COST ESTIMATOR */}
      {activeTab === 'estimator' && (
        <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
          {/* Sliders Input Column */}
          <div className="lg:col-span-5 space-y-6 bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-poppins">
              Select Your Location & Power Bill
            </h3>

            {/* City Selection Dropdown */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                City in Chhattisgarh
              </label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0B4F6C]"
              >
                {CG_CITIES.map((city) => (
                  <option key={city} value={city}>
                    {city} (CSPDCL Grid)
                  </option>
                ))}
              </select>
            </div>

            {/* Bill Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-slate-700 dark:text-slate-300">Monthly Electricity Bill</span>
                <span className="text-[#0B4F6C] dark:text-[#FDB813] text-sm font-black">₹{monthlyBill.toLocaleString()}/mo</span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full accent-[#0B4F6C] h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>₹500</span>
                <span>₹25,000</span>
                <span>₹50,000+</span>
              </div>
            </div>

            {/* Roof Area Slider */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-slate-700 dark:text-slate-300">Available Roof Space</span>
                <span className="text-[#0B4F6C] dark:text-[#FDB813] text-sm font-black">{roofArea} sq.ft</span>
              </div>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={roofArea}
                onChange={(e) => setRoofArea(Number(e.target.value))}
                className="w-full accent-[#0B4F6C] h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>100 sq.ft</span>
                <span>5,000 sq.ft</span>
                <span>10,000 sq.ft</span>
              </div>
            </div>

            {/* Consumer Type */}
            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Consumer Category
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['Residential', 'Commercial', 'Industrial'] as ConsumerType[]).map((type) => (
                  <button
                    key={type}
                    onClick={() => setConsumerType(type)}
                    className={`py-2 rounded-xl text-xs font-bold transition border ${
                      consumerType === type
                        ? 'bg-[#0B4F6C] text-white border-[#0B4F6C]'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Include Battery Toggle */}
            <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#FDB813]" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">Include Hybrid Battery Backup</span>
              </div>
              <input
                type="checkbox"
                checked={includeBattery}
                onChange={(e) => setIncludeBattery(e.target.checked)}
                className="w-5 h-5 accent-[#2ECC71] cursor-pointer"
              />
            </div>
          </div>

          {/* Results Output Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 font-semibold">Recommended System</span>
                <div className="text-2xl font-black text-[#0B4F6C] dark:text-[#FDB813] mt-1">
                  {estimatorResults.recommendedKw} kW
                </div>
                <span className="text-[10px] text-slate-400">~{estimatorResults.unitsPerMonth} units/mo</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 font-semibold">Annual Generation</span>
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 mt-1">
                  {estimatorResults.annualGenKwh.toLocaleString()} Units
                </div>
                <span className="text-[10px] text-slate-400">Clean power generated</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <span className="text-xs text-slate-500 font-semibold">Payback Period</span>
                <div className="text-2xl font-black text-amber-600 dark:text-[#FDB813] mt-1">
                  {estimatorResults.paybackYears} Years
                </div>
                <span className="text-[10px] text-slate-400">{estimatorResults.roiPercent}% Annual ROI</span>
              </div>
            </div>

            {/* Financial Breakdown Table */}
            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3 shadow-xl">
              <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800">
                <span className="text-slate-400">Approximate System Cost:</span>
                <span className="font-bold text-slate-200">₹{estimatorResults.grossCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-2 border-b border-slate-800 text-emerald-400 font-semibold">
                <span>PM Surya Ghar Govt. Subsidy (-):</span>
                <span>-₹{estimatorResults.estimatedSubsidy.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                <span className="text-sm font-bold text-white">Your Net Investment:</span>
                <span className="text-xl font-black text-[#FDB813]">₹{estimatorResults.netCost.toLocaleString()}</span>
              </div>

              <div className="pt-2 flex justify-between items-center text-xs text-slate-300">
                <span>25-Year Cumulative Savings:</span>
                <span className="text-emerald-400 font-extrabold text-base">₹{estimatorResults.savings25Years.toLocaleString()}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-600 text-white">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                    Direct Bank Subsidy Assistance
                  </div>
                  <div className="text-xs text-emerald-700 dark:text-emerald-400">
                    Rejoy Solar processes 100% of your PM Surya Ghar subsidy application in {selectedCity}
                  </div>
                </div>
              </div>
              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#0B4F6C] to-[#2ECC71] text-white font-bold text-xs uppercase shadow-md hover:scale-105 transition shrink-0"
              >
                Claim ₹78,000 Subsidy
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: SOLAR EMI FINANCE CALCULATOR */}
      {activeTab === 'emi' && (
        <div className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-in fade-in duration-300">
          <div className="lg:col-span-5 space-y-6 bg-slate-50 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider font-poppins">
              SBI & Nationalized Bank Solar Loan Parameters
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Total System Investment (₹)
              </label>
              <input
                type="number"
                value={projectCostInput}
                onChange={(e) => setProjectCostInput(Number(e.target.value))}
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-sm font-semibold text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-slate-700 dark:text-slate-300">Down Payment (%)</span>
                <span className="text-[#0B4F6C] dark:text-[#FDB813] font-black">{downPaymentPercent}% (₹{emiResults.downPaymentAmount.toLocaleString()})</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full accent-[#0B4F6C] h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span className="text-slate-700 dark:text-slate-300">Bank Solar Interest Rate (%)</span>
                <span className="text-[#0B4F6C] dark:text-[#FDB813] font-black">{interestRate}% p.a.</span>
              </div>
              <input
                type="range"
                min="6"
                max="12"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-[#0B4F6C] h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                Loan Tenure
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[3, 5, 7, 10].map((yrs) => (
                  <button
                    key={yrs}
                    onClick={() => setLoanTenureYears(yrs)}
                    className={`py-2 rounded-xl text-xs font-bold transition border ${
                      loanTenureYears === yrs
                        ? 'bg-[#0B4F6C] text-white border-[#0B4F6C]'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {yrs} Yrs
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0B4F6C] to-[#0B132B] text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-[#FDB813] font-bold uppercase tracking-wider">
                  Estimated Monthly EMI
                </span>
                <div className="text-3xl font-black font-poppins mt-1 text-[#FDB813]">
                  ₹{emiResults.monthlyEmi.toLocaleString()} <span className="text-xs font-normal text-slate-300">/ month</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Your monthly CSPDCL bill savings will offset this EMI completely!
                </p>
              </div>

              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2ECC71] to-emerald-600 text-white font-bold text-xs uppercase shadow-md transition hover:scale-105"
              >
                Apply for SBI Solar Loan
              </button>
            </div>

            {/* Doughnut Chart Breakdown */}
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={45} outerRadius={70} paddingAngle={4}>
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(val: any) => [`₹${val.toLocaleString()}`, 'Amount']} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Loan Principal:</span>
                  <span className="font-bold text-slate-900 dark:text-white">₹{emiResults.principal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Down Payment ({downPaymentPercent}%):</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">₹{emiResults.downPaymentAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-slate-500">Total Interest Payable:</span>
                  <span className="font-bold text-amber-600 dark:text-[#FDB813]">₹{emiResults.totalInterest.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-1.5 font-bold text-slate-900 dark:text-white text-sm">
                  <span>Total Amount Payable:</span>
                  <span>₹{emiResults.totalPayable.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
