import React from 'react';
import { PageType } from '../types';
import { SolarCalculator } from '../components/SolarCalculator';

interface CalculatorPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <section className="bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase text-[#FDB813] tracking-widest">
            Precision Financial Modeling
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-poppins">
            Solar ROI, Payback & EMI Calculator
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Simulate your rooftop solar capacity, government subsidies, loan tenure, and 25-year cumulative financial savings.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SolarCalculator onOpenQuoteModal={onOpenQuoteModal} />
      </section>
    </div>
  );
};
