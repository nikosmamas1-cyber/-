import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data/siteContent';
import { ContactFormSection } from '../components/ContactFormSection';

interface Props {
  initialBudget?: string;
  initialService?: string;
}

export const ContactView: React.FC<Props> = ({ initialBudget, initialService }) => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Contact direct cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href={`mailto:${AGENCY_INFO.email}`}
            className="p-6 rounded-3xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-[#f26464] hover:shadow-lg transition flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center shrink-0 group-hover:scale-110 transition">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Email
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#f26464] transition">
                {AGENCY_INFO.email}
              </div>
              <div className="text-[11px] text-slate-500">Απάντηση εντός 24 ωρών</div>
            </div>
          </a>

          <a
            href={`tel:${AGENCY_INFO.phone}`}
            className="p-6 rounded-3xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-[#f26464] hover:shadow-lg transition flex items-center gap-4 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center shrink-0 group-hover:scale-110 transition">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Τηλέφωνο
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#f26464] transition">
                {AGENCY_INFO.phoneFormatted}
              </div>
              <div className="text-[11px] text-slate-500">Δευτ - Παρ: 09:00 - 19:00</div>
            </div>
          </a>

          <div className="p-6 rounded-3xl border border-slate-200 bg-slate-50/60 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Έδρα
              </div>
              <div className="text-sm sm:text-base font-bold text-slate-900">
                {AGENCY_INFO.location}
              </div>
              <div className="text-[11px] text-slate-500">Ελλάδα & Κύπρος</div>
            </div>
          </div>
        </div>
      </div>

      <ContactFormSection initialBudget={initialBudget} initialService={initialService} />
    </div>
  );
};
