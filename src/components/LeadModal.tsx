import React, { useState } from 'react';
import { X, CheckCircle2, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/solarData';
import { RejoyLogo } from './RejoyLogo';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAction?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [propertyType, setPropertyType] = useState('Residential');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#0B132B] w-full max-w-xl rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 relative overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="mb-2">
              <RejoyLogo variant="dark" className="h-8 sm:h-9 w-auto dark:hidden" />
              <RejoyLogo variant="light" className="h-8 sm:h-9 w-auto hidden dark:block" />
            </div>
            <span className="text-xs font-bold uppercase text-[#0B4F6C] dark:text-[#FDB813] tracking-widest flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FDB813]" /> Rejoy Solar Energy Inquiry
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins mt-0.5">
              Request Free Solar Quote & Survey
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
              Inquiry Received Successfully!
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Thank you, <strong>{fullName}</strong>. A Rejoy Solar engineer has been assigned to your request for {address || 'your location'}. We will reach out via phone / WhatsApp (+91) within 30 minutes.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="py-4 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Mobile / WhatsApp Number (+91) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 98765 43210"
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. rahul.sharma@gmail.com"
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Address & City (India) *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="e.g. VIP Road, Raipur, Chhattisgarh"
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                Property Category
              </label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold"
              >
                <option value="Residential">Residential Villa / Independent House</option>
                <option value="Commercial">Commercial Office / Showroom</option>
                <option value="Industrial">Industrial Factory / Mill / Warehouse</option>
                <option value="Apartment">Housing Society / Apartment Complex</option>
                <option value="Government">Government / Educational Institution</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0B4F6C] via-[#0B132B] to-[#2ECC71] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition"
            >
              Submit Inquiry & Get Free Quote
            </button>

            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
              <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="hover:text-[#0B4F6C] flex items-center gap-1">
                <Phone className="w-3 h-3 text-[#2ECC71]" /> Direct Call
              </a>
              <a href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}`} target="_blank" rel="noreferrer" className="hover:text-emerald-500 flex items-center gap-1">
                <MessageCircle className="w-3 h-3 text-emerald-500" /> WhatsApp Direct
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
