import React, { useState } from 'react';
import { PageType } from '../types';
import { PROJECTS_DATA } from '../data/solarData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [filter, setFilter] = useState<'All' | 'Residential' | 'Commercial' | 'Industrial'>('All');

  const filteredProjects = PROJECTS_DATA.filter((p) => filter === 'All' || p.category === filter);

  return (
    <div className="pt-28 pb-16 space-y-12">
      <section className="bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase text-[#FDB813] tracking-widest">
            250+ MW Engineering Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-poppins">
            Solar Case Studies & Project Portfolio
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Explore our engineering accomplishments across residential villas, corporate headquarters, and megawatt manufacturing facilities.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-2">
          {(['All', 'Residential', 'Commercial', 'Industrial'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition border ${
                filter === cat
                  ? 'bg-[#0B4F6C] text-white border-[#0B4F6C] shadow-md'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat} Projects
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((prj) => (
            <div
              key={prj.id}
              className="rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={prj.imageUrl}
                  alt={prj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0B132B]/80 text-white text-[10px] font-bold">
                  {prj.category} • {prj.capacityKw} kW
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                  {prj.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {prj.description}
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600 dark:text-slate-300">
                    <span>Location:</span>
                    <span className="font-semibold">{prj.location}</span>
                  </div>
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                    <span>Annual Savings:</span>
                    <span>{prj.annualSavings}</span>
                  </div>
                </div>

                <button
                  onClick={onOpenQuoteModal}
                  className="w-full mt-2 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-[#0B4F6C] hover:text-white text-xs font-bold text-slate-800 dark:text-slate-200 transition"
                >
                  Request Similar Project Proposal
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
