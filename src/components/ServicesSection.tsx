import React from 'react';
import { ArrowRight, Share2, Search, Video, Sparkles, Palette, MonitorSmartphone } from 'lucide-react';
import { SERVICES } from '../data/siteContent';

interface Props {
  onNavigate: (path: string) => void;
}

export const ServicesSection: React.FC<Props> = ({ onNavigate }) => {
  const getIcon = (slug: string) => {
    switch (slug) {
      case 'meta-ads':
        return <Share2 className="w-5 h-5 text-[#f26464]" />;
      case 'google-ads':
        return <Search className="w-5 h-5 text-[#f26464]" />;
      case 'tiktok-ads':
        return <Video className="w-5 h-5 text-[#f26464]" />;
      case 'social-media-management':
        return <Sparkles className="w-5 h-5 text-[#f26464]" />;
      case 'branding-identity':
        return <Palette className="w-5 h-5 text-[#f26464]" />;
      case 'web-design':
        return <MonitorSmartphone className="w-5 h-5 text-[#f26464]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#f26464]" />;
    }
  };

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f26464]/10 text-xs font-bold text-[#f26464] uppercase tracking-wider mb-3">
            Agency Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Διαφήμιση στο Internet και τα Social Media
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Αφού ορίσουμε το στόχο της επιχείρησής σας και το πλάνο online διαφήμισης, αναλαμβάνουμε τον σχεδιασμό, την υλοποίηση, την παρακολούθηση του budget και των αποτελεσμάτων και τη βελτιστοποίηση των online διαφημιστικών καμπανιών αποκλειστικά για την επιχείρησή σας!
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col rounded-3xl border border-slate-200/90 border-t-4 border-t-[#f26464] bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 hover:border-t-[#f26464] relative"
            >
              {/* Icon & Badge */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#f26464]/10 flex items-center justify-center transition-transform group-hover:scale-110">
                  {getIcon(service.slug)}
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600">
                  {service.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#f26464] transition">
                {service.title}
              </h3>

              {/* Copy */}
              <p className="mt-3 flex-1 text-sm sm:text-base text-slate-600 leading-relaxed">
                {service.shortCopy}
              </p>

              {/* Key Deliverable highlight */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-1.5">
                <div className="text-[11px] font-bold uppercase text-slate-400">
                  Highlights
                </div>
                <div className="text-xs text-slate-600 font-medium line-clamp-2">
                  • {service.deliverables[0]}
                </div>
              </div>

              {/* Link */}
              <div className="mt-6 pt-2">
                <button
                  onClick={() => onNavigate(`/services/${service.slug}`)}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#f26464] group-hover:translate-x-1 transition duration-200 cursor-pointer"
                >
                  <span>Μάθετε περισσότερα</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              Δεν είστε σίγουροι ποιο κανάλι ταιριάζει στο δικό σας brand;
            </h4>
            <p className="text-sm text-slate-500">
              Μιλήστε με έναν growth strategist της Smart Culture για μία δωρεάν ανάλυση της επιχείρησής σας.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('/case-studies')}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-bold bg-white border border-slate-300 text-slate-800 hover:border-[#f26464] hover:text-[#f26464] transition shadow-xs cursor-pointer"
            >
              Δείτε τα Case Studies
            </button>
            <button
              onClick={() => onNavigate('/contact')}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#f26464] hover:bg-[#e04e4e] transition shadow-xs cursor-pointer"
            >
              Δωρεάν Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
