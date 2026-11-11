import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data/siteContent';

interface Props {
  onNavigate: (path: string) => void;
}

export const Hero: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-[#fafbfc] to-slate-50/50">
      {/* Subtle background ambient circles */}
      <div className="absolute top-0 right-1/4 -translate-y-12 w-96 h-96 bg-[#f26464]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Content */}
          <div className="lg:col-span-10 xl:col-span-9 space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f26464]/10 border border-[#f26464]/20 text-xs sm:text-sm font-bold text-[#f26464] animate-in fade-in slide-in-from-bottom-2 duration-300">
              <Sparkles className="w-4 h-4" />
              <span>{AGENCY_INFO.heroBadge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Πρέπει να{' '}
              <span className="relative inline-block text-[#f26464]">
                ξεχωρίζεις.
                <span className="absolute bottom-1.5 left-0 w-full h-2 bg-[#f26464]/15 rounded-full -z-10" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              {AGENCY_INFO.heroSubtitle}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-base font-bold text-white bg-[#f26464] hover:bg-[#e04e4e] active:scale-[0.98] transition shadow-lg shadow-[#f26464]/25 cursor-pointer"
              >
                <span>Κλείστε Συνάντηση</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => onNavigate('/services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-base font-bold text-slate-800 bg-white border border-slate-200 hover:border-[#f26464] hover:text-[#f26464] hover:bg-slate-50 transition shadow-xs cursor-pointer"
              >
                <span>Δείτε τις Υπηρεσίες</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee Banner */}
      <div className="mt-14 border-y border-slate-200/80 bg-white py-4 overflow-hidden">
        <div className="animate-marquee font-extrabold text-xl sm:text-2xl text-slate-800 tracking-wide uppercase">
          {[...AGENCY_INFO.channels, ...AGENCY_INFO.channels, ...AGENCY_INFO.channels].map(
            (channel, idx) => (
              <span key={idx} className="mx-6 inline-flex items-center">
                <span>{channel}</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};
