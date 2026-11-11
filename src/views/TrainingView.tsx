import React from 'react';
import { GraduationCap, ArrowRight, Clock, Video, Users, CheckCircle2, Award } from 'lucide-react';
import { TRAINING_PROGRAMS, TARGET_AUDIENCES } from '../data/siteContent';
import { TrainingSection } from '../components/TrainingSection';
import { ContactFormSection } from '../components/ContactFormSection';

interface Props {
  onNavigate: (path: string) => void;
}

export const TrainingView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f26464]/10 text-xs font-bold text-[#f26464] uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Smart Culture Training</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Εκπαιδευτικά Προγράμματα & <span className="text-[#f26464]">Mentoring</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Δεν προσφέρουμε απλώς υπηρεσίες. Μεταφέρουμε την τεχνογνωσία απευθείας στην ομάδα σας, ώστε να αναπτύξετε εσωτερική ψηφιακή αυτάρκεια και να αυξήσετε μετρήσιμα τις πωλήσεις σας.
          </p>
        </div>

        {/* Benefits bar */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Hands-on Εκπαίδευση</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Εκπαίδευση πάνω σε πραγματικούς λογαριασμούς και ζωντανές καμπάνιες, όχι θεωρητικές διαλέξεις.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center font-bold">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">1-on-1 Mentoring</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Προσωπική καθοδήγηση από εξειδικευμένους growth strategists της αγοράς.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Ευέλικτο Πρόγραμμα</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Online live συναντήσεις και καταγεγραμμένο υλικό για να μελετάτε με τον δικό σας ρυθμό.
            </p>
          </div>
        </div>

        {/* Training Programs grid */}
        <div className="mt-16 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Διαθέσιμα Προγράμματα 2026
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRAINING_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="rounded-3xl border border-slate-200/90 border-t-4 border-t-[#f26464] bg-white p-7 shadow-sm hover:shadow-xl transition flex flex-col"
              >
                <div className="flex justify-between items-center text-xs mb-3">
                  <span className="font-bold px-2.5 py-1 rounded-full bg-[#f26464]/10 text-[#f26464]">
                    {prog.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2">{prog.title}</h3>
                <p className="text-xs text-slate-500 mb-4">{prog.format}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{prog.copy}</p>

                <div className="pt-4 border-t border-slate-100 flex-1 space-y-1.5">
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                    Ενότητες:
                  </span>
                  {prog.modules.map((m, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#f26464] shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onNavigate('/contact')}
                    className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-white bg-[#f26464] hover:bg-[#e04e4e] transition text-center cursor-pointer"
                  >
                    Κράτηση Θέσης & Αναλυτικός Οδηγός
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Target Audiences */}
        <div className="mt-16 p-8 rounded-3xl bg-slate-50 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Σε ποιους απευθύνονται τα προγράμματα;
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {TARGET_AUDIENCES.map((aud, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-800"
              >
                {aud}
              </span>
            ))}
          </div>
        </div>

        {/* Lead form section for training */}
        <div className="mt-16">
          <ContactFormSection initialService="Εκπαίδευση στη Διαχείριση Social Media & Πωλήσεις (Training)" />
        </div>
      </div>
    </div>
  );
};
