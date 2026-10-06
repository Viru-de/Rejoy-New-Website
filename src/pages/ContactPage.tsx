import React, { useState } from 'react';
import { PageType } from '../types';
import { COMPANY_DETAILS } from '../data/solarData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, Navigation, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  onOpenQuoteModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenQuoteModal }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '', service: 'Residential Solar' });

  const mapSearchQuery = encodeURIComponent(`${COMPANY_DETAILS.name}, Pragati Nagar, Risali, Bhilai, Chhattisgarh 490006`);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapSearchQuery}`;
  const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent("Pragati Nagar, Near Samaira Inn, Risali, Bhilai, Chhattisgarh 490006")}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '', service: 'Residential Solar' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 sm:pt-28 pb-16 space-y-10 sm:space-y-12">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0B132B] via-[#0B4F6C] to-[#0B132B] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FDB813]/20 text-[#FDB813] border border-[#FDB813]/30">
            <Sparkles className="w-3.5 h-3.5" />
            24/7 Clean Energy Support in Chhattisgarh
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-poppins tracking-tight">
            Contact Rejoy Solar Power
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
            Get in touch with our solar engineering team in Bhilai for free rooftop site surveys, PM Surya Ghar subsidy processing, and turnkey EPC solar solutions.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info & Message Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Contact Info (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#0B4F6C] dark:text-[#FDB813] uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-poppins">
              Headquarters & Contact Details
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Our solar engineering consultants are available for site visits, 3D drone solar layout design, and net metering approval consultations across Chhattisgarh.
            </p>
          </div>

          <div className="space-y-3.5 text-xs">
            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:border-[#0B4F6C]/40 transition">
              <div className="p-3 rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <strong className="text-slate-900 dark:text-white font-bold block text-sm">
                  Corporate Headquarters
                </strong>
                <span className="text-slate-600 dark:text-slate-400 block leading-relaxed">
                  {COMPANY_DETAILS.address}
                </span>
                <span className="text-[11px] text-amber-700 dark:text-amber-400 font-semibold inline-block pt-1">
                  Landmark: Near Samaira Inn, Risali
                </span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:border-[#0B4F6C]/40 transition">
              <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <strong className="text-slate-900 dark:text-white font-bold block text-sm">
                  Direct Helpline & WhatsApp
                </strong>
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="text-slate-700 dark:text-slate-300 hover:text-[#0B4F6C] font-semibold text-sm block"
                >
                  {COMPANY_DETAILS.phone}
                </a>
                <p className="text-[11px] text-slate-500">Available Mon - Sat (9:00 AM - 7:00 PM)</p>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4 hover:border-[#0B4F6C]/40 transition">
              <div className="p-3 rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <strong className="text-slate-900 dark:text-white font-bold block text-sm">
                  Engineering & Support Email
                </strong>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-slate-700 dark:text-slate-300 hover:text-[#0B4F6C] font-semibold block"
                >
                  {COMPANY_DETAILS.email}
                </a>
                <a
                  href={`mailto:${COMPANY_DETAILS.emailSecondary}`}
                  className="text-slate-500 hover:text-[#0B4F6C] block"
                >
                  {COMPANY_DETAILS.emailSecondary}
                </a>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-50 text-purple-600 dark:bg-purple-950/40 dark:text-purple-400 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <strong className="text-slate-900 dark:text-white font-bold block text-sm">
                  Office Hours
                </strong>
                <p className="text-slate-600 dark:text-slate-400">Monday - Saturday: 9:00 AM – 7:00 PM</p>
                <p className="text-[#2ECC71] font-semibold text-[11px]">Sunday: Emergency Site Visits On Call</p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-xs font-bold text-slate-900 dark:text-white">CREDA Registered EPC</p>
                <p className="text-[10px] text-slate-500">Empaneled under PM Surya Ghar Muft Bijli Yojana</p>
              </div>
            </div>
            <button
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shrink-0 transition"
            >
              Get Quote
            </button>
          </div>
        </div>

        {/* Message Form (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B132B] border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-poppins">
              Send an Online Consultation Request
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Fill out the form below and our Chhattisgarh solar engineer will contact you within 1 hour.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Ramesh Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0B4F6C] outline-none transition"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="ramesh@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0B4F6C] outline-none transition"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0B4F6C] outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Solar Solution Interest
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0B4F6C] outline-none transition font-semibold"
              >
                <option value="Residential Solar">Residential Rooftop Solar (Up to ₹78,000 Subsidy)</option>
                <option value="Commercial Solar">Commercial Solar (Offices, Hospitals, Colleges)</option>
                <option value="Industrial Solar">Industrial Solar (Factories, Steel & MW Scale)</option>
                <option value="Solar EPC & Battery">Solar EPC & BESS Energy Storage</option>
                <option value="Solar Water Pump">Solar Water Pumping System</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
                Message / Requirement Details *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Share your rooftop area, monthly power bill amount, or location details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#0B4F6C] outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-[#0B4F6C] hover:bg-[#083c53] text-white font-bold uppercase tracking-wider text-xs shadow-lg hover:shadow-xl active:scale-98 transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>

            {submitted && (
              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-2 text-xs animate-in fade-in">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-600" />
                <span>Thank you! Your message was sent. An engineer will call you shortly.</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Google Maps Location Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-[#0B4F6C] dark:text-[#FDB813] uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4" /> Office Location & Map
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-poppins mt-1">
              Visit Our Head Office in Risali, Bhilai
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-[#0B4F6C] hover:bg-[#083c53] text-white font-bold text-xs flex items-center gap-2 shadow-sm transition shrink-0"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Embedded Interactive Google Map Container */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-900 group">
          <iframe
            title="Rejoy Solar Power Office Location Map"
            src={googleMapsEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[380px] sm:h-[450px] filter grayscale-[10%] hover:grayscale-0 transition-all duration-300"
          ></iframe>

          {/* Floating Location Card Overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-md bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  CREDA Headquarters
                </span>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base mt-1">
                  {COMPANY_DETAILS.name}
                </h4>
              </div>
              <MapPin className="w-5 h-5 text-[#0B4F6C] dark:text-[#FDB813] shrink-0" />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {COMPANY_DETAILS.address}
            </p>

            <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="text-xs font-bold text-[#0B4F6C] dark:text-[#FDB813] hover:underline flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-[#0B4F6C] flex items-center gap-1"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

