import React from 'react';
import { PageType } from '../types';
import { PROJECTS_DATA, HERO_SLIDES } from '../data/solarData';

interface GalleryPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const images = [
    ...HERO_SLIDES.map((s) => ({ title: s.title, image: s.image, category: 'Hero Showcase' })),
    ...PROJECTS_DATA.map((p) => ({ title: p.title, image: p.imageUrl, category: p.category })),
  ];

  return (
    <div className="pt-28 pb-16 space-y-12">
      <section className="bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-bold uppercase text-[#FDB813] tracking-widest">
            High-Definition Media Gallery
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-poppins">
            Solar Engineering Aerial Drone & Site Gallery
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="group relative h-64 rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800"
            >
              <img
                src={img.image}
                alt={img.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] bg-[#FDB813] text-slate-950 font-bold px-2 py-0.5 rounded uppercase">
                  {img.category}
                </span>
                <h3 className="text-sm font-bold font-poppins mt-1">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
