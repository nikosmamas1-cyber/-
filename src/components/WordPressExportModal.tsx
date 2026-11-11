import React, { useState } from 'react';
import { X, Copy, Check, FileCode, Layers, BookOpen, ExternalLink } from 'lucide-react';
import { generateGutenbergHeroBlock, generateGutenbergGridBlock, generateWordPressPHPThemeSnippet } from '../utils/wpGenerator';
import { SERVICES, AGENCY_INFO } from '../data/siteContent';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const WordPressExportModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'gutenberg' | 'php' | 'guide'>('gutenberg');
  const [copied, setCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const gutenbergHeroCode = generateGutenbergHeroBlock(
    'Δεν αρκεί να διαφημίζεσαι. Πρέπει να ξεχωρίζεις.',
    AGENCY_INFO.heroSubtitle,
    'Κλείστε Συνάντηση',
    '/contact'
  );

  const gutenbergServicesCode = generateGutenbergGridBlock(
    'Διαφήμιση στο Internet και τα Social Media',
    SERVICES.map((s) => ({ title: s.title, description: s.shortCopy }))
  );

  const phpCode = generateWordPressPHPThemeSnippet();

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center font-bold">
              WP
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">WordPress Ready & Export Hub</h3>
              <p className="text-xs text-slate-500">
                Επεξεργαστείτε και μεταφέρετε εύκολα το περιεχόμενο στο WordPress
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Κλείσιμο παραθύρου"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-slate-200 px-6 gap-2 bg-slate-50/40">
          <button
            onClick={() => setActiveTab('gutenberg')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 flex items-center gap-2 transition ${
              activeTab === 'gutenberg'
                ? 'border-[#f26464] text-[#f26464]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            Gutenberg Blocks (HTML)
          </button>
          <button
            onClick={() => setActiveTab('php')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 flex items-center gap-2 transition ${
              activeTab === 'php'
                ? 'border-[#f26464] text-[#f26464]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileCode className="w-4 h-4" />
            functions.php & Palette
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`py-3 px-4 text-sm font-semibold border-b-2 flex items-center gap-2 transition ${
              activeTab === 'guide'
                ? 'border-[#f26464] text-[#f26464]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Οδηγός Επεξεργασίας WordPress
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {activeTab === 'gutenberg' && (
            <div className="space-y-6">
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-sm">
                <strong>Πώς λειτουργεί:</strong> Αντιγράψτε τον παρακάτω κώδικα και επικολλήστε τον απευθείας στον WordPress Block Editor (Gutenberg) επιλέγοντας <em>"Κώδικας / Custom HTML"</em> ή κάνοντας paste σε οποιαδήποτε σελίδα.
              </div>

              {/* Hero block */}
              <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Hero Section Block
                  </span>
                  <button
                    onClick={() => handleCopy(gutenbergHeroCode, 'hero')}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-white border border-slate-200 hover:border-[#f26464] hover:text-[#f26464] transition"
                  >
                    {copied === 'hero' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied === 'hero' ? 'Αντιγράφηκε!' : 'Αντιγραφή Hero HTML'}
                  </button>
                </div>
                <pre className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200 overflow-x-auto max-h-36">
                  {gutenbergHeroCode}
                </pre>
              </div>

              {/* Services block */}
              <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Services Grid Block
                  </span>
                  <button
                    onClick={() => handleCopy(gutenbergServicesCode, 'services')}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-white border border-slate-200 hover:border-[#f26464] hover:text-[#f26464] transition"
                  >
                    {copied === 'services' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied === 'services' ? 'Αντιγράφηκε!' : 'Αντιγραφή Services HTML'}
                  </button>
                </div>
                <pre className="text-xs text-slate-700 bg-white p-3 rounded-xl border border-slate-200 overflow-x-auto max-h-36">
                  {gutenbergServicesCode}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'php' && (
            <div className="space-y-4">
              <p className="text-sm text-slate-600">
                Προσθέστε το παρακάτω snippet στο <code>functions.php</code> του παιδικού σας θέματος (Child Theme) στο WordPress. Ενσωματώνει αυτόματα τις γραμματοσειρές (Plus Jakarta Sans & Outfit) και την επίσημη χρωματική παλέτα του Smart Culture (Smart Coral #f26464).
              </p>
              <div className="relative">
                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => handleCopy(phpCode, 'php')}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg bg-white border border-slate-300 hover:border-[#f26464] hover:text-[#f26464] shadow-sm transition"
                  >
                    {copied === 'php' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied === 'php' ? 'Αντιγράφηκε!' : 'Αντιγραφή PHP Snippet'}
                  </button>
                </div>
                <pre className="text-xs text-slate-800 bg-slate-900 text-slate-100 p-4 rounded-2xl overflow-x-auto">
                  {phpCode}
                </pre>
              </div>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
              <h4 className="font-bold text-base text-slate-900">
                Βήμα-προς-βήμα οδηγός επεξεργασίας σε WordPress
              </h4>
              <div className="grid gap-3">
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <strong className="block text-slate-900 mb-1">1. Επιλογή Θέματος (Theme)</strong>
                  Συνιστούμε ένα ελαφρύ σύγχρονο θέμα όπως <em>Astra</em>, <em>GeneratePress</em> ή <em>Kadence</em> που υποστηρίζει πλήρως Gutenberg blocks και ταχύτητες άνω του 95 στο Google PageSpeed.
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <strong className="block text-slate-900 mb-1">2. Χρήση του Gutenberg Block Editor</strong>
                  Το site είναι 100% σχεδιασμένο με minimal HTML & CSS logic. Μπορείτε να επικολλήσετε τα blocks απευθείας ή να χρησιμοποιήσετε έτοιμα patterns.
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <strong className="block text-slate-900 mb-1">3. Φόρμα Επικοινωνίας & Leads</strong>
                  Για τη φόρμα επικοινωνίας στο WordPress μπορείτε να χρησιμοποιήσετε το <em>WPForms</em> ή το <em>Fluent Forms</em> με τα αντίστοιχα πεδία που υπάρχουν ήδη εδώ.
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white">
                  <strong className="block text-slate-900 mb-1">4. Υποστήριξη & Εγκατάσταση</strong>
                  Εάν χρειάζεστε βοήθεια για να στήσουμε το WordPress site σας με το ακριβές design, η ομάδα της Smart Culture μπορεί να αναλάβει την πλήρη εγκατάσταση.
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 bg-slate-50/70">
          <span className="text-xs text-slate-500">
            Smart Culture &copy; 2026 · WordPress Ready Architecture
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold rounded-full bg-slate-900 text-white hover:bg-slate-800 transition"
          >
            Εντάξει, κατάλαβα
          </button>
        </div>
      </div>
    </div>
  );
};
