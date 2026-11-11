import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp } from 'lucide-react';
import { SERVICES, AGENCY_INFO } from '../data/siteContent';

interface Props {
  onNavigate: (path: string) => void;
}

export const ServicesView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f26464]/10 text-xs font-bold text-[#f26464] uppercase tracking-wider mb-3">
            Full-Service Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Υπηρεσίες Digital Marketing με{' '}
            <span className="text-[#f26464]">μετρήσιμο ROI</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Από τη στοχευμένη διαφήμιση σε Meta, Google και TikTok μέχρι το custom web design και το visual branding, σχεδιάζουμε ολοκληρωμένες στρατηγικές που φέρνουν πελάτες.
          </p>
        </div>

        {/* Detailed services list */}
        <div className="mt-16 space-y-12">
          {SERVICES.map((srv, index) => (
            <div
              key={srv.slug}
              className="rounded-3xl border border-slate-200/90 bg-white p-8 sm:p-10 shadow-sm hover:shadow-xl transition-all duration-300 border-l-8 border-l-[#f26464]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#f26464]/10 text-[#f26464]">
                      {srv.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      Υπηρεσία {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {srv.fullTitle}
                  </h2>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {srv.shortCopy}
                  </p>

                  {/* Why invest summary */}
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-600 space-y-2">
                    <strong className="text-slate-900 block font-bold">
                      Γιατί να επενδύσετε σήμερα:
                    </strong>
                    <p className="leading-relaxed">{srv.whyInvest[0]}</p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={() => onNavigate(`/services/${srv.slug}`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#f26464] hover:bg-[#e04e4e] transition cursor-pointer"
                    >
                      <span>Πλήρης Ανάλυση & Deliverables</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onNavigate('/contact')}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 transition cursor-pointer"
                    >
                      <span>Ζητήστε Προσφορά</span>
                    </button>
                  </div>
                </div>

                {/* Deliverables box on right */}
                <div className="lg:col-span-5 bg-slate-50/70 rounded-2xl p-6 border border-slate-200/80 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center justify-between">
                    <span>Τι περιλαμβάνει η υπηρεσία</span>
                    <span className="text-[#f26464]">100% Turnkey</span>
                  </h4>

                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {srv.deliverables.slice(0, 4).map((del, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#f26464] shrink-0 mt-0.5" />
                        <span className="leading-snug">{del}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Performance metrics banner */}
                  <div className="pt-4 border-t border-slate-200 grid grid-cols-2 gap-2 text-center">
                    {srv.results.slice(0, 2).map((res, i) => (
                      <div key={i} className="p-2 rounded-xl bg-white border border-slate-200">
                        <div className="text-base font-extrabold text-[#f26464]">{res.metric}</div>
                        <div className="text-[10px] text-slate-500 font-medium">{res.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center bg-slate-50 border border-slate-200 rounded-3xl p-10 space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">
            Χρειάζεστε εξατομικευμένο συνδυασμό υπηρεσιών;
          </h3>
          <p className="text-slate-600 max-w-xl mx-auto text-sm leading-relaxed">
            Οι περισσότεροι συνεργάτες μας επιλέγουν το Hybrid μοντέλο (π.χ. Meta Ads + TikTok + Web CRO) για μέγιστη κάλυψη όλων των σταδίων του conversion funnel.
          </p>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white bg-[#f26464] hover:bg-[#e04e4e] transition"
          >
            <span>Συζητήστε με έναν Growth Expert</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
