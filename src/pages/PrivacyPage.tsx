import React from 'react';
import { PageType } from '../types';
import { ShieldCheck } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = () => {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <section className="bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase text-[#FDB813] tracking-widest">
            Data Privacy & Security
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-poppins">
            Privacy Policy & Governance
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
        <div className="p-6 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 space-y-3 shadow-md">
          <h3 className="text-base font-bold text-slate-900 dark:text-white font-poppins">
            1. Information Collection & Usage
          </h3>
          <p>
            Rejoy Solar Power collects personal information (such as name, email, phone number, electricity bill estimates, and roof dimensions) solely for evaluating solar engineering feasibility, government subsidy filing, and net metering utility sanctioning.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 space-y-3 shadow-md">
          <h3 className="text-base font-bold text-slate-900 dark:text-white font-poppins">
            2. Data Security & Encryption
          </h3>
          <p>
            All submitted energy telemetry and documents are encrypted using AES-256 standards. We never sell user data to third-party marketing brokers.
          </p>
        </div>
      </section>
    </div>
  );
};
