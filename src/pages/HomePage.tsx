import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { HERO_SLIDES, COMPANY_STATS, SERVICES_DATA, PROJECTS_DATA, FAQ_DATA } from '../data/solarData';
import { ThreeBackground } from '../components/ThreeBackground';
import { SolarRecommendationWizard } from '../components/SolarRecommendationWizard';
import { SolarCalculator } from '../components/SolarCalculator';
import { LiveSubsidyChecker } from '../components/LiveSubsidyChecker';
import {
  Sun,
  ShieldCheck,
  Zap,
  ArrowRight,
  TrendingUp,
  Award,
  CheckCircle2,
  ChevronDown,
  Building2,
  Home,
  Factory,
  BarChart2,
  Sparkles,
  PhoneCall,
  Download,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Hero auto-slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentHeroSlide];

  return (
    <div className="space-y-16 pb-12">
      {/* CINEMATIC HERO SECTION WITH THREE.JS & HIGH-RES IMAGES */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0B132B] pt-28 pb-16">
        {/* Ambient background glow spots from Sleek Interface design */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#0B4F6C] rounded-full blur-[120px] opacity-30 pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#2ECC71] rounded-full blur-[150px] opacity-10 pointer-events-none" />

        {/* 3D Particle Canvas Overlay */}
        <ThreeBackground />

        {/* Dynamic Solar Installation Background Image for All Slides */}
        {HERO_SLIDES.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out pointer-events-none ${
              idx === currentHeroSlide ? 'opacity-65 scale-105' : 'opacity-0 scale-100'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            />
          </div>
        ))}

        {/* Ambient Dark Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-[#0B132B]/80 to-[#0B132B]/50 pointer-events-none" />

        {/* Hero Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-white w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2ECC71] mr-2.5 animate-ping" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2ECC71]">
                Chhattisgarh's CREDA Approved Solar EPC Provider
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-poppins tracking-tight leading-[1.1] text-white">
              {slide.title.includes('Surya Ghar') ? (
                <>
                  PM Surya Ghar:{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] to-[#2ECC71]">
                    Get ₹78,000 Subsidy
                  </span>
                </>
              ) : slide.title.includes('Commercial') ? (
                <>
                  Cut Factory Bills By{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] to-[#2ECC71]">
                    Up To 90%
                  </span>
                </>
              ) : (
                <>
                  Chhattisgarh's Most Trusted{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FDB813] to-[#2ECC71]">
                    Solar Power Partner
                  </span>
                </>
              )}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl font-light leading-relaxed">
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate(slide.ctaPage as PageType)}
                className="px-7 py-3.5 bg-[#0B4F6C] border border-[#2ECC71]/30 rounded-xl font-extrabold text-xs uppercase tracking-wider text-white shadow-xl hover:bg-[#2ECC71] hover:text-[#0B132B] transition-all flex items-center gap-2 group"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('calculator')}
                className="px-7 py-3.5 bg-[#FDB813] text-[#0B132B] rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-[#FDB813]/20 hover:bg-white hover:scale-105 transition-all flex items-center gap-2"
              >
                <Zap className="w-4 h-4 text-[#0B132B]" />
                <span>Calculate Solar Savings</span>
              </button>

              <button
                onClick={onOpenQuoteModal}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#2ECC71]" />
                <span>Free Site Survey</span>
              </button>
            </div>

            {/* Enterprise Trust Badges */}
            <div className="pt-4 flex items-center gap-4 text-xs text-slate-400">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#0B4F6C] border-2 border-[#0B132B] flex items-center justify-center font-bold text-[10px] text-white">4.9★</div>
                <div className="w-8 h-8 rounded-full bg-[#FDB813] border-2 border-[#0B132B] flex items-center justify-center font-bold text-[10px] text-[#0B132B]">CREDA</div>
                <div className="w-8 h-8 rounded-full bg-[#2ECC71] border-2 border-[#0B132B] flex items-center justify-center font-bold text-[10px] text-white">100MW</div>
              </div>
              <span className="font-semibold text-slate-300">
                Trusted by 5,000+ Families & Commercial Businesses Across Chhattisgarh
              </span>
            </div>

            {/* Slide Indicator Dots */}
            <div className="pt-4 flex items-center gap-2">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentHeroSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentHeroSlide ? 'w-8 bg-[#FDB813]' : 'w-2 bg-slate-600 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Column Glassmorphism Feature Panel */}
          <div className="lg:col-span-5 relative hidden lg:block">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative space-y-6">
              <div className="absolute -top-3.5 -right-3.5 bg-[#2ECC71] text-[#0B132B] text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-lg tracking-wider">
                AI-Powered 2026
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#FDB813] text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4" /> Real-time Telemetry Engine
                </div>
                <h3 className="text-xl font-extrabold text-white font-poppins">
                  Solar ROI & Grid Savings Preview
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase text-slate-400 font-bold">Avg. Bill Reduction</span>
                  <div className="text-2xl font-black text-[#2ECC71]">Up to 90%</div>
                  <span className="text-[10px] text-slate-400">Net Metering Enabled</span>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-[10px] uppercase text-slate-400 font-bold">Govt. Subsidy</span>
                  <div className="text-2xl font-black text-[#FDB813]">₹78,000</div>
                  <span className="text-[10px] text-slate-400">Direct Bank Transfer</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0B4F6C]/40 border border-[#2ECC71]/30 flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-white">Instant Solar Assessment</div>
                  <div className="text-[11px] text-slate-300">Get customized capacity & roof layout in 60s</div>
                </div>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="px-3.5 py-2 rounded-lg bg-[#2ECC71] hover:bg-emerald-400 text-[#0B132B] font-extrabold text-xs uppercase tracking-wider shrink-0 transition"
                >
                  Start
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* STATS HIGHLIGHT BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-30">
        <div className="bg-white dark:bg-[#0B132B] rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {COMPANY_STATS.map((st, i) => (
            <div key={i} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black font-poppins text-[#0B4F6C] dark:text-[#FDB813]">
                {st.value}
              </div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">{st.label}</div>
              <div className="text-[11px] text-slate-500">{st.sublabel}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AI SOLAR RECOMMENDATION WIZARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SolarRecommendationWizard onOpenQuoteModal={onOpenQuoteModal} />
      </section>

      {/* CORE SERVICES & SOLAR OFFERINGS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest">
            CREDA Approved Clean Energy Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Solar Energy Solutions
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            End-to-end engineered solar solutions featuring high-resolution AI imagery, complete technical specifications, and CREDA & PM Surya Ghar government subsidies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((srv) => (
            <div
              key={srv.id}
              className="rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden flex flex-col justify-between hover:-translate-y-2 transition duration-300 group"
            >
              <div>
                {/* Image Container with AI Badge */}
                <div className="relative h-52 overflow-hidden bg-slate-950">
                  <img
                    src={srv.imageUrl}
                    alt={srv.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  {srv.badge && (
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0B4F6C] text-[#FDB813] border border-[#FDB813]/40 text-[11px] font-bold shadow-md">
                      {srv.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <h3 className="text-xl font-black font-poppins drop-shadow-md">
                      {srv.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                    {srv.shortDesc}
                  </p>

                  <p className="text-[11px] text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800/80 leading-relaxed">
                    {srv.detailedDesc}
                  </p>

                  {/* Technical Specifications Grid */}
                  {srv.techSpecs && (
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {srv.techSpecs.map((spec, sIdx) => (
                        <div key={sIdx} className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/50 dark:border-slate-700/50">
                          <span className="block text-[10px] text-slate-400 dark:text-slate-400 font-semibold uppercase tracking-wider">{spec.label}</span>
                          <span className="text-[11px] font-extrabold text-slate-900 dark:text-white leading-tight block">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features List */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold uppercase text-[#0B4F6C] dark:text-[#FDB813] block mb-2 tracking-wider">Key Highlights</span>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {srv.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2 mt-4">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0B4F6C] via-[#0B132B] to-[#2ECC71] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition flex items-center justify-center gap-2"
                >
                  <Sun className="w-4 h-4 text-[#FDB813]" />
                  <span>Get Free Quote & Survey</span>
                </button>
                <button
                  onClick={() => onNavigate(srv.page as PageType)}
                  className="w-full py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-[#0B4F6C] text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#0B4F6C] flex items-center justify-center gap-1.5 transition"
                >
                  <span>Explore {srv.title} Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FINANCIAL CALCULATOR EMBED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SolarCalculator onOpenQuoteModal={onOpenQuoteModal} />
      </section>

      {/* LIVE GOVERNMENT SUBSIDY CHECKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LiveSubsidyChecker onOpenQuoteModal={onOpenQuoteModal} />
      </section>

      {/* FEATURED PROJECTS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest">
              Proven Track Record
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins mt-1">
              Featured Solar Installations
            </h2>
          </div>

          <button
            onClick={() => onNavigate('projects')}
            className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-xs font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2 transition"
          >
            <span>View All Projects Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.slice(0, 3).map((prj) => (
            <div
              key={prj.id}
              className="rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={prj.imageUrl}
                  alt={prj.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0B132B]/80 backdrop-blur-md text-white text-[10px] font-bold">
                  {prj.category} • {prj.capacityKw} kW
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white font-poppins">
                  {prj.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {prj.description}
                </p>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between text-[11px] font-semibold text-[#0B4F6C] dark:text-[#FDB813]">
                  <span>Annual Savings: {prj.annualSavings}</span>
                  <span>ROI: {prj.paybackPeriod}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest">
            Got Questions?
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Frequently Asked Solar Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900 dark:text-white font-poppins"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                    openFaqIndex === idx ? 'rotate-180 text-[#0B4F6C]' : ''
                  }`}
                />
              </button>

              {openFaqIndex === idx && (
                <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT PORTAL BANNER CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#0B4F6C] via-[#0B132B] to-[#2ECC71] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs text-[#FDB813] font-bold uppercase tracking-wider flex items-center gap-1">
              <Sparkles className="w-4 h-4" /> Client Portal & Solar Tracking
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins">
              Track Your Live Installation & Energy Production
            </h3>
            <p className="text-xs text-slate-300">
              Access engineering blue-prints, DISCOM net metering sanction letters, real-time hourly telemetry, and 25-year warranty certificates.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://crm.rejoysolarpower.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#FDB813] hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition hover:scale-105 inline-block text-center"
            >
              Open Client Portal
            </a>
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition"
            >
              Schedule Free Site Survey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
