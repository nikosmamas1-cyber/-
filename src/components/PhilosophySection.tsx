import React from 'react';
import { Target, Lightbulb, Zap, BookOpenCheck, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      icon: <Target className="w-6 h-6 text-[#f26464]" />,
      title: 'Performance & ROAS First',
      copy: 'Δεν ξοδεύουμε ευρώ χωρίς μετρήσιμο στόχο. Κάθε καμπάνια δομείται πάνω σε καθαρά business KPIs: κόστος ανά απόκτηση πελάτη (CPA) και πραγματικό Return on Ad Spend (ROAS).',
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-[#f26464]" />,
      title: 'Creative-Led Marketing',
      copy: 'Στη σύγχρονη εποχή των privacy updates και των AI αλγορίθμων, το δημιουργικό είναι η νέα στόχευση. Παράγουμε native video & visual content που καθηλώνει το κοινό στο 1ο δευτερόλεπτο.',
    },
    {
      icon: <Zap className="w-6 h-6 text-[#f26464]" />,
      title: 'Conversion Architecture',
      copy: 'Υψηλή επισκεψιμότητα και μετατροπή. Σχεδιάζουμε fast-loading mobile experiences, conversion funnels και frictionless checkout που μετατρέπουν επισκέπτες σε πιστούς πελάτες.',
    },
    {
      icon: <BookOpenCheck className="w-6 h-6 text-[#f26464]" />,
      title: 'Training & Knowledge Transfer',
      copy: 'Δεν κρατάμε τα μυστικά κρυφά. Εκπαιδεύουμε την εσωτερική σας ομάδα marketing ώστε να αποκτάτε αυτόνομη ψηφιακή κουλτούρα και να εξελίσσεστε μακροπρόθεσμα.',
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f26464]/10 text-xs font-bold text-[#f26464] uppercase tracking-wider mb-3">
            Agency Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Γιατί η Smart Culture είναι ο ιδανικός σας συνεργάτης;
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Συνδυάζουμε την ψυχρή ακρίβεια των αριθμών με τη ζεστή δημιουργικότητα του brand storytelling. Δεν είμαστε εξωτερικοί εργολάβοι· λειτουργούμε ως αναπόσπαστο τμήμα ανάπτυξης της επιχείρησής σας.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-3xl border border-slate-200/90 bg-white hover:border-slate-300 hover:shadow-lg transition flex flex-col"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#f26464]/10 flex items-center justify-center mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">
                {pillar.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
