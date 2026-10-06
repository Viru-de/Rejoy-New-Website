import React, { useState } from 'react';
import {
  TrendingDown,
  TrendingUp,
  Zap,
  Leaf,
  Sun,
  Shield,
  BarChart3,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

export const BeforeAfterDashboard: React.FC = () => {
  const [monthlyBillBefore, setMonthlyBillBefore] = useState(4500);

  const annualBillBefore = monthlyBillBefore * 12;
  const billAfter = Math.round(monthlyBillBefore * 0.10); // 90% savings
  const annualBillAfter = billAfter * 12;
  const annualSavings = annualBillBefore - annualBillAfter;
  const savings25Years = Math.round(annualSavings * 25 * 1.03); // 3% tariff inflation
  const co2ReducedTons = Number((monthlyBillBefore * 0.024).toFixed(1));
  const treesEquivalent = Math.round(co2ReducedTons * 45);

  const comparisonData = [
    { metric: 'Monthly Bill (₹)', Before: monthlyBillBefore, After: billAfter },
    { metric: 'Annual Power Expense (₹)', Before: annualBillBefore, After: annualBillAfter },
    { metric: 'Grid Dependency (%)', Before: 100, After: 10 },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto bg-slate-900 text-white rounded-3xl shadow-2xl p-6 sm:p-10 my-8 border border-slate-800 relative overflow-hidden">
      {/* Decorative Light Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0B4F6C]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <span className="text-xs font-bold uppercase text-[#FDB813] tracking-widest flex items-center gap-1">
            <BarChart3 className="w-4 h-4" /> Energy & Financial Transformation
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-poppins mt-1">
            Before vs. After Solar Energy Dashboard
          </h2>
        </div>

        <div className="flex items-center gap-3 bg-slate-800/80 p-2 rounded-2xl border border-slate-700">
          <span className="text-xs text-slate-400 font-medium pl-2">Current Bill:</span>
          <input
            type="number"
            value={monthlyBillBefore}
            onChange={(e) => setMonthlyBillBefore(Number(e.target.value) || 500)}
            className="w-24 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-sm font-bold text-[#FDB813]"
          />
          <span className="text-xs text-slate-400 font-medium pr-2">₹/mo</span>
        </div>
      </div>

      {/* Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
        {/* BEFORE SOLAR CARD */}
        <div className="p-6 rounded-2xl bg-red-950/20 border border-red-900/40 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-red-400 font-poppins flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" /> BEFORE SOLAR
            </h3>
            <span className="text-xs bg-red-900/50 text-red-300 font-bold px-2.5 py-1 rounded-full">
              High Utility Expense
            </span>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center py-2 border-b border-red-900/30">
              <span className="text-xs text-slate-400">Monthly Utility Bill:</span>
              <span className="text-xl font-extrabold text-red-400">₹{monthlyBillBefore.toLocaleString()} / mo</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-red-900/30">
              <span className="text-xs text-slate-400">Annual Power Expense:</span>
              <span className="text-lg font-bold text-slate-200">₹{annualBillBefore.toLocaleString()} / yr</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-red-900/30">
              <span className="text-xs text-slate-400">Grid Dependency:</span>
              <span className="text-sm font-bold text-red-400">100% Vulnerable</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-xs text-slate-400">Carbon Footprint:</span>
              <span className="text-sm font-bold text-slate-300">{co2ReducedTons * 1.5} Tons CO2 / yr</span>
            </div>
          </div>
        </div>

        {/* AFTER SOLAR CARD */}
        <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-4 shadow-xl relative overflow-hidden">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-emerald-400 font-poppins flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" /> AFTER REJOY SOLAR
            </h3>
            <span className="text-xs bg-emerald-500 text-white font-extrabold px-2.5 py-1 rounded-full">
              90% Savings Guaranteed
            </span>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex justify-between items-center py-2 border-b border-emerald-900/30">
              <span className="text-xs text-slate-300">New Reduced Monthly Bill:</span>
              <span className="text-2xl font-black text-emerald-400">₹{billAfter.toLocaleString()} / mo</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-emerald-900/30">
              <span className="text-xs text-slate-300">Annual Financial Savings:</span>
              <span className="text-xl font-extrabold text-[#FDB813]">₹{annualSavings.toLocaleString()} / yr</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-emerald-900/30">
              <span className="text-xs text-slate-300">25-Year Financial Gain:</span>
              <span className="text-lg font-black text-emerald-300">₹{savings25Years.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-xs text-slate-300">CO2 Emissions Offset:</span>
              <span className="text-sm font-bold text-emerald-400">~{co2ReducedTons} Tons/yr ({treesEquivalent} Trees)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recharts Comparison Chart */}
      <div className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/60">
        <h4 className="text-sm font-bold text-white font-poppins mb-4 flex items-center gap-2">
          <TrendingDown className="w-4 h-4 text-[#2ECC71]" />
          Visual Expense & Grid Dependency Reduction
        </h4>
        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={comparisonData}>
              <XAxis dataKey="metric" stroke="#94a3b8" fontSize={11} />
              <YAxis stroke="#94a3b8" fontSize={11} />
              <Tooltip formatter={(val: any) => [val.toLocaleString(), 'Value']} />
              <Legend />
              <Bar dataKey="Before" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="After" fill="#2ECC71" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
