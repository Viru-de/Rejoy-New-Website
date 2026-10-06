import React, { useState } from 'react';
import { PageType } from '../types';
import { FAQ_DATA } from '../data/solarData';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';

interface FaqPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-28 pb-16 space-y-12">
      <section className="bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase text-[#FDB813] tracking-widest">
            Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-poppins">
            Solar Energy Questions & Technical Answers
          </h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {FAQ_DATA.map((faq, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900 dark:text-white font-poppins"
            >
              <span>{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                  openIndex === idx ? 'rotate-180 text-[#0B4F6C]' : ''
                }`}
              />
            </button>

            {openIndex === idx && (
              <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                {faq.answer}
              </div>
            )}
          </div>
        ))}

        <div className="pt-8 text-center bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 className="text-xl font-bold font-poppins text-slate-900 dark:text-white">
            Have a Specific Question for Our Senior Engineers?
          </h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Get personalized advice on roof structural weight limits, net metering tariffs, or battery backup wiring.
          </p>
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-3.5 rounded-2xl bg-[#0B4F6C] hover:bg-[#083c53] text-white font-bold text-xs uppercase shadow-lg transition"
          >
            Speak to a Solar Engineer
          </button>
        </div>
      </section>
    </div>
  );
};
