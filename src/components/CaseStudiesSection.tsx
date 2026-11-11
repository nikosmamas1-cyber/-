import React from 'react';
import { ArrowRight, Trophy, ExternalLink } from 'lucide-react';
import { CLIENT_LOGOS } from '../data/siteContent';

interface Props {
  onNavigate: (path: string) => void;
  showAll?: boolean;
}

export const CaseStudiesSection: React.FC<Props> = ({ onNavigate, showAll = false }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f26464]/10 text-xs font-bold text-[#f26464] uppercase tracking-wider mb-3">
              <Trophy className="w-4 h-4" />
              <span>Proven Growth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Case Studies
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Επιλεγμένα έργα και τα αποτελέσματά τους. Πραγματικά δεδομένα από συνεργασίες μας — τι κάναμε και τι πέτυχε το κάθε brand.
            </p>
          </div>

          {!showAll && (
            <button
              onClick={() => onNavigate('/case-studies')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#f26464] hover:underline"
            >
              <span>Δείτε όλα τα συνεργαζόμενα brands ({CLIENT_LOGOS.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Client Logos showcase */}
        <div className="mt-12 rounded-3xl border border-slate-200/80 bg-slate-50/60 p-6 sm:p-8">
          <div className="flex items-center justify-between gap-2 pb-5">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Brands που μας εμπιστεύονται ({CLIENT_LOGOS.length})
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {CLIENT_LOGOS.map((client, idx) => (
              <div
                key={idx}
                title={client.name}
                className="group relative h-28 sm:h-32 rounded-2xl bg-white border border-slate-200/90 p-3 flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#f26464]/40 transition-all duration-300 overflow-hidden"
              >
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Partners with RayConvertous Showcase */}
        <div className="mt-14 rounded-3xl border border-slate-200/80 bg-slate-50/60 p-6 sm:p-10 text-center">
          <div className="mb-6 flex flex-col items-center justify-center gap-2">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
              Partners with RayConvertous
            </h3>
          </div>
          <a
            href="https://rayconvertous.gr/brand-identity-packaging-brand-building/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Partners with RayConvertous - Brand Identity, Packaging & Brand Building"
            className="group relative block max-w-5xl mx-auto rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
          >
            <img
              src="/assets/aistudio/Macbook-Air-rayconvertous.gr_d6ea93e0.webp"
              alt="Partners with RayConvertous"
              className="w-full h-auto object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
            />
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 group-hover:text-[#f26464] group-hover:border-[#f26464]/40 shadow-xs transition">
              <span>Δείτε τα έργα Brand Identity & Packaging της RayConvertous</span>
              <ExternalLink className="w-4 h-4 text-[#f26464]" />
            </div>
          </a>
        </div>

        {/* CTA Banner */}
        <div className="mt-14 rounded-3xl bg-slate-900 text-white p-8 sm:p-12 md:p-14 relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-80 h-80 bg-[#f26464]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
              Θέλετε αποτελέσματα σαν αυτά;
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Ας μιλήσουμε για το δικό σας brand. Αναλύουμε δωρεάν την υπάρχουσα ψηφιακή σας παρουσία και σας προτείνουμε το ακριβές πλάνο ανάπτυξης.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition shadow-lg cursor-pointer"
              >
                <span>Ξεκινήστε το δικό σας Success Story</span>
                <ArrowRight className="w-4 h-4 text-[#f26464]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
