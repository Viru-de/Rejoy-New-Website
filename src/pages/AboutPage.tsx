import React from 'react';
import { PageType } from '../types';
import { COMPANY_DETAILS, TEAM_MEMBERS, OUR_BEGINNINGS } from '../data/solarData';
import { Award, ShieldCheck, Zap, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="pt-28 pb-16 space-y-16">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase text-[#FDB813] tracking-widest">
            Engineering Clean Energy Standards
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-poppins max-w-4xl mx-auto">
            About Rejoy Solar Power Private Ltd
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A pioneering EPC (Engineering, Procurement, and Construction) company dedicated to transforming the energy landscape with innovative and sustainable solar solutions.
          </p>
        </div>
      </section>

      {/* Know The Directors & Our Beginnings Section (Matching Directors Board) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title Header */}
        <div className="text-center space-y-2">
          <span className="text-xs font-black uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest block">
            Executive Leadership & Board
          </span>
          <h2 className="text-3xl sm:text-5xl font-black font-poppins text-slate-900 dark:text-white">
            Know The Directors
          </h2>
        </div>

        {/* Our Beginnings Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B132B] via-[#082C43] to-[#0B132B] text-white border border-slate-800 shadow-2xl relative overflow-hidden space-y-4">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FDB813]/10 rounded-full blur-3xl pointer-events-none" />
          <span className="text-xs font-extrabold uppercase text-[#FDB813] tracking-widest block">
            Our Journey & History
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-poppins text-white">
            Our Beginnings
          </h3>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-5xl">
            {OUR_BEGINNINGS}
          </p>
          <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-6 text-xs text-[#2ECC71] font-bold">
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 shrink-0" /> Founded Nov 2019</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 shrink-0" /> CREDA Approved Solar EPC</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 shrink-0" /> 100+ kW Rooftop Capacity / Month</span>
          </div>
        </div>

        {/* 3 Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {TEAM_MEMBERS.map((member, i) => (
            <div
              key={i}
              className="p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col justify-between items-center text-center space-y-6 hover:shadow-2xl transition duration-300"
            >
              <div className="space-y-4 w-full">
                <div className="relative inline-block">
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-36 h-36 rounded-full object-cover mx-auto border-4 border-[#0B4F6C] dark:border-[#FDB813] shadow-xl"
                  />
                  <span className="absolute bottom-1 right-1 p-2 rounded-full bg-[#0B4F6C] text-[#FDB813] border-2 border-white dark:border-[#0B132B]">
                    <Zap className="w-4 h-4" />
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white font-poppins">
                    {member.name}
                  </h3>
                  <p className="text-sm font-extrabold text-[#0B4F6C] dark:text-[#FDB813]">
                    {member.role}
                  </p>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify px-2">
                  {member.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Are & Company Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest block">
              Company Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-poppins text-slate-900 dark:text-white">
              Transforming Energy for a Greener & Sustainable Future
            </h2>
          </div>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {COMPANY_DETAILS.description}
          </p>
        </div>
      </section>

      {/* Core Values & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#0B4F6C] text-[#FDB813] flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">Our Mission</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            To make clean, renewable energy accessible and affordable across India by delivering zero-defect solar engineering and sustainable solar solutions.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#2ECC71] text-white flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">Quality Assurance</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Tier-1 ALMM & DCR certified solar products, smart inverters, and precision rooftop installation services with lifetime customer liaison support.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">Innovation & Growth</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
            Pioneering franchise development, energy storage, and smart solar products for a greener and sustainable clean energy landscape.
          </p>
        </div>
      </section>
    </div>
  );
};
