import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight, Code2 } from 'lucide-react';
import { AGENCY_INFO, SERVICES } from '../data/siteContent';
import { BrandLogo } from './BrandLogo';

interface Props {
  onNavigate: (path: string) => void;
  onOpenWordPressModal: () => void;
}

export const Footer: React.FC<Props> = ({ onNavigate, onOpenWordPressModal }) => {
  const handleLink = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-white pt-16 pb-12 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          {/* Col 1 & 2: Brand overview */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleLink('/')}
              className="focus:outline-none block text-left cursor-pointer group"
              aria-label="Smart Culture"
            >
              <BrandLogo size="xl" className="transition-transform group-hover:scale-[1.02]" />
            </button>
            <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
              Full-service Digital Agency. Συνδυάζουμε στρατηγική, δημιουργικό, performance marketing και εκπαίδευση για επιχειρήσεις που θέλουν να ξεχωρίζουν και να αυξάνουν μετρήσιμα τον τζίρο τους.
            </p>

            {/* Direct Contact Pills */}
            <div className="pt-2 space-y-2">
              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-[#f26464] transition"
              >
                <Mail className="w-4 h-4 text-[#f26464]" />
                <span className="font-semibold">{AGENCY_INFO.email}</span>
              </a>
              <a
                href={`tel:${AGENCY_INFO.phone}`}
                className="flex items-center gap-2.5 text-xs text-slate-600 hover:text-[#f26464] transition"
              >
                <Phone className="w-4 h-4 text-[#f26464]" />
                <span className="font-semibold">{AGENCY_INFO.phoneFormatted}</span>
              </a>
              <div className="flex items-center gap-2.5 text-xs text-slate-400">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>{AGENCY_INFO.location}</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="pt-3 flex flex-wrap gap-2">
              {AGENCY_INFO.socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-600 hover:bg-[#f26464]/10 hover:border-[#f26464] hover:text-[#f26464] transition"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Υπηρεσίες Agency
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.map((srv) => (
                <li key={srv.slug}>
                  <button
                    onClick={() => handleLink(`/services/${srv.slug}`)}
                    className="text-slate-500 hover:text-[#f26464] text-left transition line-clamp-1"
                  >
                    {srv.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Training & Case Studies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Εκπαίδευση & Έργα
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-500">
              <li>
                <button
                  onClick={() => handleLink('/training')}
                  className="hover:text-[#f26464] transition"
                >
                  Εκπαιδευτικά Προγράμματα
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/case-studies')}
                  className="hover:text-[#f26464] transition"
                >
                  Case Studies & ROI
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/about')}
                  className="hover:text-[#f26464] transition"
                >
                  Σχετικά με εμάς
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/blog')}
                  className="hover:text-[#f26464] transition"
                >
                  Marketing Insights / Blog
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: WordPress & Action */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              WordPress & Εργαλεία
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              Θέλετε να μεταφέρετε ή να επεξεργαστείτε το περιεχόμενο στο δικό σας WordPress;
            </p>
            <button
              onClick={onOpenWordPressModal}
              className="w-full flex items-center justify-center gap-2 py-2 px-3 text-xs font-bold rounded-xl border border-slate-200 text-slate-700 bg-slate-50 hover:bg-[#f26464]/10 hover:border-[#f26464] hover:text-[#f26464] transition mb-4 shadow-xs"
            >
              <Code2 className="w-3.5 h-3.5 text-[#f26464]" />
              <span>WordPress Export Hub</span>
            </button>

            <a
              href={`mailto:${AGENCY_INFO.email}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#f26464] hover:bg-[#e04e4e] transition shadow-xs cursor-pointer"
            >
              <span>Ζητήστε Digital Audit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2026 Smart Culture. Με επιφύλαξη παντός δικαιώματος.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleLink('/about')}
              className="hover:text-slate-600 transition"
            >
              Πολιτική Απορρήτου
            </button>
            <button
              onClick={() => handleLink('/about')}
              className="hover:text-slate-600 transition"
            >
              Όροι Χρήσης
            </button>
            <button
              onClick={onOpenWordPressModal}
              className="hover:text-[#f26464] transition font-semibold text-slate-500"
            >
              WordPress Ready
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
