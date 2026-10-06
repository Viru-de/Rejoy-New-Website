import React from 'react';
import { PageType } from '../types';
import { BLOG_ARTICLES } from '../data/solarData';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  return (
    <div className="pt-28 pb-16 space-y-12">
      <section className="bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase text-[#FDB813] tracking-widest">
            Clean Energy Knowledge Hub
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-poppins">
            Solar Technology, Subsidies & Energy Blog
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((art) => (
            <div
              key={art.id}
              className="rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col justify-between"
            >
              <div>
                <img
                  src={art.imageUrl}
                  alt={art.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="bg-[#0B4F6C] text-white font-bold px-2 py-0.5 rounded uppercase">
                      {art.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#FDB813]" /> {art.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {art.snippet}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-4">
                <button
                  onClick={onOpenQuoteModal}
                  className="text-xs font-bold text-[#0B4F6C] dark:text-[#FDB813] hover:underline flex items-center gap-1"
                >
                  Read Full Article & Policy Guide <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
