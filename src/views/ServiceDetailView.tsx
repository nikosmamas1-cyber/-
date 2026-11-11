import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/siteContent';

interface Props {
  slug: string;
  onNavigate: (path: string) => void;
}

export const ServiceDetailView: React.FC<Props> = ({ slug, onNavigate }) => {
  const service: ServiceItem | undefined =
    SERVICES.find((s) => s.slug === slug) || SERVICES[0];

  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <button
          onClick={() => onNavigate('/services')}
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#f26464] mb-8 transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Όλες οι Υπηρεσίες</span>
        </button>

        {/* Hero Header */}
        <div className="max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f26464]/10 text-xs font-bold text-[#f26464] uppercase tracking-wider">
            {service.badge}
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
            {service.fullTitle}
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed pt-2">
            {service.shortCopy}
          </p>
        </div>

        {/* Results Banner */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {service.results.map((res, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-black text-[#f26464]">
                {res.metric}
              </div>
              <div className="text-xs font-semibold text-slate-600 mt-1">
                {res.label}
              </div>
            </div>
          ))}
        </div>

        {/* Content sections */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Why invest & Process */}
          <div className="lg:col-span-7 space-y-10">
            {/* Why Invest */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Γιατί είναι απαραίτητο για την επιχείρησή σας σήμερα;
              </h2>
              {service.whyInvest.map((p, idx) => (
                <p key={idx} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            {/* Methodology Process */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Η Μεθοδολογία μας σε 4 Βήματα
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.process.map((p, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-2xl border border-slate-200 bg-white shadow-xs space-y-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#f26464]/10 text-[#f26464] font-black text-xs flex items-center justify-center">
                      {p.step}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{p.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Deliverables Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-3xl border border-slate-200/90 bg-white p-7 shadow-xl space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-bold uppercase tracking-wider text-[#f26464]">
                  Turnkey Deliverables
                </div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Τι αναλαμβάνουμε για εσάς
                </h3>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {service.deliverables.map((del, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#f26464] shrink-0 mt-0.5" />
                    <span className="leading-snug">{del}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-bold text-white bg-[#f26464] hover:bg-[#e04e4e] transition shadow-md shadow-[#f26464]/20 cursor-pointer"
                >
                  <span>Ζητήστε Πρόταση Συνεργασίας</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('/case-studies')}
                  className="w-full text-center text-xs font-bold text-slate-600 hover:text-[#f26464] py-2 transition cursor-pointer"
                >
                  Δείτε τα Case Studies μας →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
