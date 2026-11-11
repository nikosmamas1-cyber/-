import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { AGENCY_INFO } from '../data/siteContent';

interface Props {
  initialBudget?: string;
  initialService?: string;
}

export const ContactFormSection: React.FC<Props> = ({ initialBudget, initialService }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [industry, setIndustry] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [collabType, setCollabType] = useState('Digital Marketing & Διαφήμιση (Agency Services)');
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'Meta Ads (Facebook & Instagram)',
    'Google Ads & YouTube',
  ]);
  const [budget, setBudget] = useState('500€ – 1.500€');
  const [projectGoals, setProjectGoals] = useState('');
  const [wantsAudit, setWantsAudit] = useState(true);

  useEffect(() => {
    if (initialBudget) {
      setBudget(initialBudget);
    }
    if (initialService) {
      setProjectGoals((prev) =>
        prev ? `${prev} | Ενδιαφέρον: ${initialService}` : `Ενδιαφέρον: ${initialService}`
      );
    }
  }, [initialBudget, initialService]);

  const allServicesList = [
    'Meta Ads (Facebook & Instagram)',
    'Google Ads & YouTube',
    'TikTok Ads & Content',
    'Ολοκληρωμένη Διαχείριση Social Media',
    'Branding & Οπτική Ταυτότητα',
    'Custom Website / E-Commerce',
    'Training: Διαχείριση Social Media & Content Strategy',
    'Training: Social Selling & Digital Sales Funnels',
  ];

  const collabTypes = [
    'Digital Marketing & Διαφήμιση (Agency Services)',
    'Εκπαίδευση στη Διαχείριση Social Media & Πωλήσεις (Training)',
    'Συνδυασμός Υπηρεσιών & Εκπαίδευσης',
  ];

  const budgetOptions = [
    'Έως 500€',
    '500€ – 1.500€',
    '1.500€ – 3.500€',
    '3.500€+',
    'Αφορά αποκλειστικά εκπαιδευτικό πρόγραμμα',
  ];

  const handleServiceToggle = (srv: string) => {
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const buildMailtoUrl = () => {
    const subject = `Αίτημα Συνεργασίας — ${name}${company ? ` (${company})` : ''}`;
    const bodyLines = [
      `Ονοματεπώνυμο: ${name}`,
      `Εταιρεία / Brand: ${company || '-'}`,
      `Επαγγελματική Ιδιότητα / Κλάδος: ${industry || '-'}`,
      `Email: ${email}`,
      `Τηλέφωνο: ${phone}`,
      `Είδος Συνεργασίας: ${collabType}`,
      `Υπηρεσίες Ενδιαφέροντος: ${selectedServices.length > 0 ? selectedServices.join(', ') : '-'}`,
      `Μηνιαίο Budget: ${budget}`,
      `Δωρεάν Digital Audit: ${wantsAudit ? 'Ναι' : 'Όχι'}`,
      '',
      'Περιγραφή Project / Στόχοι:',
      projectGoals || '-',
    ];
    return `mailto:info@smartculture.gr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = buildMailtoUrl();
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-white" id="contact-form-section">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f26464]/10 text-xs font-bold text-[#f26464] uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Ξεκινήστε Σήμερα</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Ας κάνουμε την επιχείρησή σας να ξεχωρίσει.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών με μία εξατομικευμένη πρόταση ανάπτυξης.
          </p>
        </div>

        {/* Form Container */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-10">
          {submitted ? (
            <div className="py-12 px-4 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="text-2xl font-black text-slate-900">
                  Το αίτημά σας ετοιμάστηκε για αποστολή!
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Ευχαριστούμε, <strong>{name || 'αγαπητέ συνεργάτη'}</strong>. Τα στοιχεία της φόρμας αποστέλλονται στο <strong>info@smartculture.gr</strong> και θα επικοινωνήσουμε μαζί σας εντός 24 εργάσιμων ωρών στο <strong>{email}</strong> ή τηλεφωνικά στο <strong>{phone}</strong>.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={buildMailtoUrl()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-white bg-[#f26464] hover:bg-[#e04e4e] transition shadow-md"
                >
                  <Mail className="w-4 h-4" />
                  <span>Αποστολή στο info@smartculture.gr</span>
                </a>
              </div>

              {/* Direct call banner */}
              <div className="pt-2 max-w-md mx-auto p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center gap-4 text-sm">
                <span className="text-slate-600">Βιάζεστε; Καλέστε μας απευθείας:</span>
                <a
                  href={`tel:${AGENCY_INFO.phone}`}
                  className="font-bold text-[#f26464] hover:underline"
                >
                  {AGENCY_INFO.phoneFormatted}
                </a>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-slate-400 hover:text-slate-700 underline font-medium"
              >
                Υποβολή νέου αιτήματος
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Full name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Ονοματεπώνυμο *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="π.χ. Νίκος Παπαδόπουλος"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f26464] focus:ring-2 focus:ring-[#f26464]/20 outline-none transition"
                  />
                </div>

                {/* Company name */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Εταιρεία / Brand Name
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="π.χ. My Brand / My Shop"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f26464] focus:ring-2 focus:ring-[#f26464]/20 outline-none transition"
                  />
                </div>

                {/* Industry / Role */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Επαγγελματική Ιδιότητα / Κλάδος
                  </label>
                  <input
                    type="text"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    placeholder="π.χ. E-shop, Λιανεμπόριο, Υπηρεσίες/Ιατρός, Εστίαση"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f26464] focus:ring-2 focus:ring-[#f26464]/20 outline-none transition"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.gr"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f26464] focus:ring-2 focus:ring-[#f26464]/20 outline-none transition"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    Τηλέφωνο *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="69XXXXXXXX"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f26464] focus:ring-2 focus:ring-[#f26464]/20 outline-none transition"
                  />
                </div>
              </div>

              {/* Collab type Radio */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Είδος Συνεργασίας
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {collabTypes.map((type) => (
                    <label
                      key={type}
                      className={`flex items-start gap-3 p-3.5 rounded-2xl border cursor-pointer transition ${
                        collabType === type
                          ? 'border-[#f26464] bg-[#f26464]/5 text-slate-900 font-semibold'
                          : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="collabType"
                        value={type}
                        checked={collabType === type}
                        onChange={() => setCollabType(type)}
                        className="mt-0.5 accent-[#f26464]"
                      />
                      <span className="text-xs leading-snug">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Services Checkboxes */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Υπηρεσίες / Εκπαίδευση Ενδιαφέροντος
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {allServicesList.map((srv) => {
                    const isChecked = selectedServices.includes(srv);
                    return (
                      <label
                        key={srv}
                        className={`flex items-center gap-3 p-3 rounded-2xl border cursor-pointer transition ${
                          isChecked
                            ? 'border-[#f26464] bg-[#f26464]/5 text-slate-900 font-medium'
                            : 'border-slate-200 text-slate-600 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleServiceToggle(srv)}
                          className="w-4 h-4 rounded text-[#f26464] accent-[#f26464]"
                        />
                        <span className="text-xs">{srv}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Monthly Budget Select */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Μηνιαίο Budget / Επένδυση
                </label>
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 focus:bg-white focus:border-[#f26464] focus:ring-2 focus:ring-[#f26464]/20 outline-none transition cursor-pointer"
                >
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project description textarea */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Περιγραφή Project / Στόχοι
                </label>
                <textarea
                  rows={4}
                  value={projectGoals}
                  onChange={(e) => setProjectGoals(e.target.value)}
                  placeholder="Πείτε μας λίγα λόγια για την επιχείρησή σας, τους στόχους πωλήσεων ή τις τρέχουσες προκλήσεις σας..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#f26464] focus:ring-2 focus:ring-[#f26464]/20 outline-none transition"
                />
              </div>

              {/* Free Digital Audit toggle */}
              <div className="p-4 rounded-2xl bg-rose-50/40 border border-rose-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="audit-check"
                    checked={wantsAudit}
                    onChange={(e) => setWantsAudit(e.target.checked)}
                    className="w-4 h-4 rounded accent-[#f26464] cursor-pointer"
                  />
                  <label htmlFor="audit-check" className="text-xs text-slate-700 font-medium cursor-pointer">
                    <strong>Δωρεάν Digital Audit:</strong> Επιθυμώ να γίνει αρχική ανάλυση της ιστοσελίδας ή των social profiles μου πριν το ραντεβού.
                  </label>
                </div>
                <span className="text-[11px] font-bold text-[#f26464] uppercase tracking-wider shrink-0 hidden sm:inline">
                  Δωρεάν
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2.5 py-4 px-8 rounded-full text-base font-bold text-white bg-[#f26464] hover:bg-[#e04e4e] active:scale-[0.99] transition shadow-lg shadow-[#f26464]/25 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Αποστολή Αιτήματος Συνεργασίας</span>
              </button>

              <div className="text-center text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#f26464]" />
                  Απάντηση εγγυημένα εντός 24 εργάσιμων ωρών. Σεβόμαστε απόλυτα τα δεδομένα σας.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
