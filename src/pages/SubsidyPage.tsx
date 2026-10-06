import React from 'react';
import { PageType } from '../types';
import { LiveSubsidyChecker } from '../components/LiveSubsidyChecker';

interface SubsidyPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const SubsidyPage: React.FC<SubsidyPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <section className="bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase text-[#2ECC71] tracking-widest">
            Government Clean Energy Policies
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-poppins">
            Live Solar Rooftop Government Subsidy Checker
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Check your state and national subsidy eligibility, required DISCOM documentation, and direct benefit transfer roadmap.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LiveSubsidyChecker onOpenQuoteModal={onOpenQuoteModal} />
      </section>
    </div>
  );
};
