import React from 'react';
import { ArrowRight, GraduationCap, Video, CheckCircle2 } from 'lucide-react';
import { TRAINING_PROGRAMS, TARGET_AUDIENCES } from '../data/siteContent';

interface Props {
  onNavigate: (path: string) => void;
}

export const TrainingSection: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f26464]/10 text-xs font-bold text-[#f26464] uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Smart Culture Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Εκπαίδευση στη Διαχείριση Social Media & την Αύξηση Πωλήσεων
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Μετατρέψτε τα Social Media σε μηχανή εσόδων. Εξατομικευμένα προγράμματα εκπαίδευσης για επιχειρηματίες, στελέχη και ομάδες που θέλουν να κατακτήσουν την οργανική διαχείριση και το social selling.
          </p>
        </div>

        {/* Training Programs Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {TRAINING_PROGRAMS.map((program) => (
            <article
              key={program.id}
              className="group flex flex-col rounded-3xl border border-slate-200/90 border-t-4 border-t-[#f26464] bg-white p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300 hover:border-t-[#f26464]"
            >
              {/* Top metadata */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#f26464]/10 text-[#f26464]">
                  {program.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#f26464] transition">
                {program.title}
              </h3>

              {/* Format */}
              <div className="mt-2 text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-[#f26464]" />
                <span>{program.format}</span>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                {program.copy}
              </p>

              {/* Modules list */}
              <div className="mt-5 pt-4 border-t border-slate-100 space-y-2 flex-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Θεματολογία & Ενότητες:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {program.modules.map((mod, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f26464] shrink-0 mt-0.5" />
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Target Audience Note */}
              <div className="mt-5 p-3 rounded-xl bg-slate-50 text-[11px] text-slate-500 font-medium">
                <strong>Απευθύνεται σε:</strong> {program.targetAudience}
              </div>

              {/* CTA button */}
              <div className="mt-6 pt-2">
                <button
                  onClick={() => onNavigate('/contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold text-slate-800 bg-slate-100 hover:bg-[#f26464] hover:text-white transition group/btn cursor-pointer"
                >
                  <span>Εκδήλωση Ενδιαφέροντος</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Target Audience Pills */}
        <div className="mt-14 pt-10 border-t border-slate-200/80">
          <div className="text-center sm:text-left mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Προσαρμοσμένα Προγράμματα για:
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            {TARGET_AUDIENCES.map((audience, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-700 hover:border-[#f26464] hover:text-[#f26464] transition shadow-xs"
              >
                {audience}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
