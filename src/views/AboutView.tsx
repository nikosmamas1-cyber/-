import React from 'react';
import { Sparkles, Users, Award, ShieldCheck, Heart, ArrowRight, MapPin, Mail, Phone, Landmark, Globe, Briefcase } from 'lucide-react';
import { AGENCY_INFO } from '../data/siteContent';

interface Props {
  onNavigate: (path: string) => void;
}

export const AboutView: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero section */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f26464]/10 text-xs font-bold text-[#f26464] uppercase tracking-wider">
            About Smart Culture
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
            Σχετικά με <span className="text-[#f26464]">εμάς</span>
          </h1>
          <p className="text-xl text-slate-700 leading-relaxed max-w-3xl font-medium">
            Η Smart Culture είναι full-service Digital Agency. Συνδυάζουμε στρατηγική, δημιουργικό και διαφήμιση με εκπαίδευση, ώστε οι επιχειρήσεις να μεγαλώνουν online και οι ομάδες τους να αποκτούν την τεχνογνωσία να συνεχίσουν.
          </p>
        </div>

        {/* Brand Story & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start border-t border-slate-100 pt-12">
          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">
              Η ιστορία & η φιλοσοφία μας
            </h2>
            <p className="text-slate-800 font-medium">
              Στη <strong>Smart Culture Digital Agency</strong> προσεγγίζουμε το Marketing με έναν μοναδικό για τα ελληνικά δεδομένα τρόπο: συνδυάζουμε τη βαθιά γνώση του Ελληνικού Πολιτισμού, της ιστορίας και της αισθητικής με τις πιο σύγχρονες ψηφιακές τεχνολογίες και τη διαχείριση επιχειρηματικών διαδικασιών.
            </p>
            <p>
              Ιδρυθήκαμε με έναν απλό αλλά ουσιαστικό σκοπό: να γεφυρώσουμε το χάσμα ανάμεσα στη δημιουργική αισθητική και τα ψυχρά, μετρήσιμα νούμερα του performance marketing.
            </p>
            <p>
              Πιστεύουμε ότι <em>δεν αρκεί να διαφημίζεσαι</em>. Σε μια εποχή όπου όλοι έχουν πρόσβαση στα ίδια εργαλεία, η διαφορά βρίσκεται στη στρατηγική διαφοροποίησης (branding), στην ποιότητα του δημιουργικού και στην κατανόηση της ψυχολογίας του πελάτη.
            </p>
            <p>
              Παράλληλα, μέσω των εξειδικευμένων προγραμμάτων εκπαίδευσης της <strong>Smart Culture</strong>, απομυθοποιούμε το digital marketing και μεταλαμπαδεύουμε σύγχρονη τεχνογνωσία σε ιδιοκτήτες επιχειρήσεων και στελέχη marketing.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Οι Αξίες της Smart Culture
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Απόλυτη Διαφάνεια</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Γνωρίζετε ακριβώς πού πηγαίνει κάθε ευρώ του διαφημιστικού σας budget και τι απόδοση φέρνει.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Συνεργασία & Όχι Εργολαβία</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Γινόμαστε το εξωτερικό τμήμα marketing της επιχείρησής σας, με προσωπικό ενδιαφέρον για την κερδοφορία σας.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Συνεχής Καινοτομία</h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Προσαρμογή στις τελευταίες αλλαγές αλγορίθμων Meta, TikTok trends και AI εργαλείων.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 03 // ΑΞΙΑ - Τι μας Διακρίνει: Πολιτισμός, Τεχνολογία & Επιχειρηματικότητα */}
          <div className="md:col-span-2 pt-8 border-t border-slate-100 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f26464]/10 text-xs font-bold text-[#f26464] uppercase tracking-wider">
                03 // ΑΞΙΑ
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Τι μας Διακρίνει: Πολιτισμός, Τεχνολογία & Επιχειρηματικότητα
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:border-[#f26464]/40 hover:bg-white hover:shadow-md transition flex flex-col space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  Αυθεντικό Πολιτισμικό Storytelling & Ψηφιακή Καινοτομία
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Στη Smart Culture διαθέτουμε εξειδικευμένη τεχνογνωσία στον ελληνικό πολιτισμό, την ιστορική έρευνα και την εθνογλωσσική προσέγγιση τοπωνυμίων. Γνωρίζουμε σε βάθος πώς να χτίσουμε τον «μύθο», την ονοματοδοσία και την αυθεντικότητα του ελληνικού προϊόντος, συνδυάζοντάς τα με σύγχρονη ψηφιακή κουλτούρα και καινοτόμες τεχνολογικές λύσεις.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:border-[#f26464]/40 hover:bg-white hover:shadow-md transition flex flex-col space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  Διεθνής Τεχνογνωσία στο Digital Marketing, τον Τουρισμό & την Αισθητική
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Η μεθοδολογία μας ενσωματώνει διεθνή πρότυπα ψηφιακού μάρκετινγκ, εξειδικευμένες πρακτικές προώθησης στον κλάδο του τουρισμού και της γαστρονομίας, υψηλή αισθητική δημιουργίας και αριστεία στην εξυπηρέτηση πελατών, εξασφαλίζοντας ολοκληρωμένη εμπορική εικόνα σε κάθε σημείο επαφής.
                </p>
              </div>

              <div className="p-7 rounded-3xl bg-slate-50/80 border border-slate-200/90 hover:border-[#f26464]/40 hover:bg-white hover:shadow-md transition flex flex-col space-y-4">
                <div className="w-11 h-11 rounded-2xl bg-[#f26464]/10 text-[#f26464] flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  Διαχείριση Επιχειρηματικών Διαδικασιών & Στρατηγική Επικοινωνίας
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Πέρα από τη δημιουργική προβολή, λειτουργούμε ως στρατηγικοί σύμβουλοι ανάπτυξης. Συνδυάζουμε την οργάνωση επιχειρηματικών διαδικασιών και πωλήσεων με την τέχνη της πειθούς, της ρητορικής και των δημοσίων σχέσεων, βοηθώντας την επιχείρησή σας να διαπραγματεύεται αποτελεσματικά και να κερδίζει νέες αγορές.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact info banner */}
        <div className="p-8 rounded-3xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900">
              Ελάτε να γνωριστούμε από κοντά
            </h3>
            <p className="text-xs text-slate-500">
              {AGENCY_INFO.location} · {AGENCY_INFO.email} · {AGENCY_INFO.phoneFormatted}
            </p>
          </div>
          <button
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-[#f26464] hover:bg-[#e04e4e] transition"
          >
            <span>Ξεκινήστε τη Συνεργασία</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
