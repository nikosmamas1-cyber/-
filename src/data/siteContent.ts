export interface ServiceItem {
  slug: string;
  title: string;
  shortCopy: string;
  badge: string;
  fullTitle: string;
  whyInvest: string[];
  deliverables: string[];
  results: { metric: string; label: string }[];
  process: { step: string; title: string; desc: string }[];
}

export interface TrainingProgram {
  id: string;
  title: string;
  badge: string;
  duration: string;
  format: string;
  copy: string;
  modules: string[];
  targetAudience: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  service: string;
  tags: string[];
  resultHighlight: string;
  copy: string;
  story: string;
  metrics: { value: string; label: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
}

export const AGENCY_INFO = {
  name: 'Smart Culture',
  tagline: 'Digital Agency',
  heroBadge: 'Δεν αρκεί να διαφημίζεσαι. Πρέπει να ξεχωρίζεις.',
  heroTitlePrefix: 'Πρέπει να ',
  heroTitleHighlight: 'ξεχωρίζεις.',
  heroSubtitle:
    'Facebook, Instagram, TikTok, Google, LinkedIn, YouTube — Όπου είναι το κοινό σας, είστε κι εσείς. Διαφημίσεις που αποδίδουν, περιεχόμενο που εμπνέει, στρατηγική που κάνει τη διαφορά. Δημιουργούμε, βελτιστοποιούμε και διαχειριζόμαστε ολοκληρωμένες digital καμπάνιες που χτίζουν την εικόνα σας και ενισχύουν τις πωλήσεις σας.',
  email: 'info@smartculture.gr',
  phone: '693 665 9229',
  phoneFormatted: '+30 693 665 9229',
  location: 'Αθήνα, Ελλάδα',
  logoUrl: '/assets/aistudio/Sm_Culture__6__ffba761b.png',
  socials: [
    { name: 'Instagram', url: 'https://instagram.com/smartculture.gr' },
    { name: 'Facebook', url: 'https://facebook.com/smartculture.gr' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nikos-mamas/' },
  ],
  stats: [
    { value: '+180%', label: 'Μέσος Όρος ROAS' },
    { value: '€2.4M+', label: 'Διαχειριζόμενο Ad Spend' },
    { value: '45+', label: 'Ενεργά Brands & Projects' },
    { value: '98%', label: 'Ικανοποίηση Πελατών' },
  ],
  channels: [
    'Facebook',
    'Instagram',
    'TikTok',
    'Google',
    'LinkedIn',
    'YouTube',
    'Branding',
    'Training',
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    slug: 'meta-ads',
    title: 'Facebook & Instagram Ads',
    badge: 'META GROWTH',
    shortCopy:
      'Online Διαφημιστικές Καμπάνιες στο Facebook και στο Instagram με pixels και εξειδικευμένους τρόπους για να γίνει γνωστή η επιχείρηση και για να πουλήσετε online.',
    fullTitle:
      'Διαφήμιση Meta (Facebook & Instagram Ads): Στοχευμένη Μετατροπή σε μια Privacy-First Εποχή',
    whyInvest: [
      'Το τοπίο της διαφήμισης έχει αλλάξει ριζικά. Μετά τις αλλαγές στο tracking (iOS updates, περιορισμοί cookies), η παραδοσιακή "τυφλή" διαφήμιση απλώς σπαταλάει κεφάλαιο. Σήμερα, η Meta λειτουργεί μέσω προηγμένων αλγορίθμων τεχνητής νοημοσύνης (Advantage+) και απαιτεί δύο θεμελιώδη στοιχεία: βαθιά τεχνική παραμετροποίηση (Conversions API, First-Party Data) και δημιουργικό υλικό (creative-led marketing) που σταματά το scroll.',
      'Επενδύοντας σε μια επαγγελματικά δομημένη καμπάνια Meta, δεν αγοράζετε απλά clicks. Χτίζετε ένα ολοκληρωμένο conversion funnel που προσεγγίζει τον καταναλωτή τη στιγμή που ανακαλύπτει ανάγκες, εκπαιδεύει το κοινό σας και μετατρέπει το ενδιαφέρον σε άμεση αγορά με μετρήσιμο ROAS.',
    ],
    deliverables: [
      'Ρύθμιση Conversions API & Meta Pixel για 100% ακρίβεια μετρήσεων χωρίς απώλειες.',
      'A/B testing δημιουργικών (Reels, Carousels, Static high-converting visuals).',
      'Dynamic Product Ads (DPA) για e-shops και Retargeting audiences υψηλής πρόθεσης.',
      'Συνεχής εποπτεία ROAS και καθημερινή βελτιστοποίηση κόστους ανά απόκτηση πελάτη (CPA).',
      'Δημιουργία custom funnels (Cold Audience -> Warm Consideration -> Hot Conversion).',
      'Αναλυτικό μηνιαίο reporting με metrics που καταλαβαίνετε, όχι ανούσιους αριθμούς.',
    ],
    results: [
      { metric: '3.8x - 6.2x', label: 'Μέσο ROAS σε E-Commerce' },
      { metric: '-38%', label: 'Μείωση Κόστους CPA' },
      { metric: '100%', label: 'Pixel & CAPI Data Match' },
    ],
    process: [
      { step: '01', title: 'Audit & Tracking Setup', desc: 'Έλεγχος λογαριασμού, pixels, καταλόγων και setup Conversions API.' },
      { step: '02', title: 'Creative Strategy', desc: 'Σχεδιασμός video ads και visuals που κεντρίζουν το ενδιαφέρον στα feeds.' },
      { step: '03', title: 'Launch & Testing', desc: 'Εκκίνηση καμπανιών με στοχευμένα ad sets και Advantage+ scaling.' },
      { step: '04', title: 'Scale & Optimize', desc: 'Επανεπένδυση στα νικηφόρα ads και αύξηση καθαρού κέρδους.' },
    ],
  },
  {
    slug: 'google-ads',
    title: 'Google Ads',
    badge: 'High-Intent Search & Shopping',
    shortCopy:
      'Online διαφημιστικές καμπάνιες στη Google με λέξεις κλειδιά για να πετύχετε online πωλήσεις (Search network), με banners σε σχετικά sites (Display network) και Video, αλλά και remarketing δίκτυο.',
    fullTitle:
      'Google Ads: Κυριαρχήστε στη Στιγμή της Απόλυτης Πρόθεσης Αγοράς (High Intent)',
    whyInvest: [
      'Ενώ τα social media δημιουργούν ζήτηση, η Google είναι το μέρος όπου η ζήτηση εξαργυρώνεται. Όταν ένας χρήστης αναζητά ενεργά τη λύση, το προϊόν ή την υπηρεσία σας, η επιχείρησή σας οφείλει να βρίσκεται στην πρώτη θέση. Με την έλευση του AI Search (AI Overviews) και των Performance Max καμπανιών, η επιτυχία απαιτεί άρτια δομημένη στρατηγική λέξεων-κλειδιών, αστραπιαία landing pages και έξυπνη κατανομή budget.',
      'Η επένδυση στα Google Ads προσφέρει άμεση προβλεψιμότητα: στοχεύετε μόνο χρήστες έτοιμους να αγοράσουν, ελαχιστοποιώντας τη διαρροή budget και εξασφαλίζοντας σταθερή ροή leads και πωλήσεων.',
    ],
    deliverables: [
      'Search Network Campaigns βασισμένες σε υψηλής αξίας εμπορικές λέξεις-κλειδιά.',
      'Google Performance Max & Shopping Ads για e-commerce με βέλτιστο feed.',
      'YouTube Video Ads & Google Display Network για ισχυρή αναγνωρισιμότητα.',
      'Στρατηγική Remarketing σε χρήστες που εγκατέλειψαν το καλάθι ή την ιστοσελίδα.',
      'Negative Keyword lists για αποφυγή σπατάλης σε άσχετα clicks.',
      'Conversion tracking με GA4 και Google Tag Manager για πλήρη διαφάνεια.',
    ],
    results: [
      { metric: 'Top 3', label: 'Κατάταξη σε εμπορικά searches' },
      { metric: '+45%', label: 'Αύξηση Conversion Rate' },
      { metric: '< 24h', label: 'Ενεργοποίηση & πρώτα leads' },
    ],
    process: [
      { step: '01', title: 'Keyword Research', desc: 'Εντοπισμός των λέξεων με υψηλή εμπορική πρόθεση και χαμηλό άχρηστο κόστος.' },
      { step: '02', title: 'Setup & Ad Copy', desc: 'Συγγραφή πειστικών responsive ads και διαμόρφωση επεκτάσεων.' },
      { step: '03', title: 'Smart Bidding', desc: 'Αξιοποίηση Target CPA / Target ROAS αλγορίθμων της Google.' },
      { step: '04', title: 'CRO Alignment', desc: 'Συντονισμός της σελίδας προορισμού για μέγιστη μετατροπή.' },
    ],
  },
  {
    slug: 'tiktok-ads',
    title: 'Προώθηση & Ads στο TikTok',
    badge: 'Viral Native Video Growth',
    shortCopy:
      'Στοχευμένες καμπάνιες και παραγωγή dynamic vertical video περιεχομένου στην ταχύτερα αναπτυσσόμενη πλατφόρμα, σχεδιασμένα για άμεση αύξηση της οργανικής απήχησης και των πωλήσεων.',
    fullTitle:
      'TikTok Promotion & Ads: Η Νέα Μηχανή Αναζήτησης και Αυθόρμητης Αγοράς',
    whyInvest: [
      'Το TikTok δεν είναι πλέον μια πλατφόρμα ψυχαγωγίας για εφήβους, αλλά η κυρίαρχη μηχανή ανακάλυψης προϊόντων και τάσεων για όλες τις ηλικιακές ομάδες. Οι σύγχρονοι καταναλωτές χρησιμοποιούν το TikTok ως μηχανή αναζήτησης πριν αποφασίσουν πού θα φάνε, τι θα αγοράσουν ή ποιον επαγγελματία θα εμπιστευτούν.',
      'Η επένδυση στο TikTok είναι η πιο αποδοτική κίνηση σήμερα, καθώς το κόστος προβολής παραμένει ανταγωνιστικότερο σε σύγκριση με τα παλαιότερα δίκτυα, ενώ το video content δημιουργεί απαράμιλλη συναισθηματική σύνδεση. Αν η επιχείρησή σας δεν παράγει native vertical video, χάνει καθημερινά το πιο ενεργό αγοραστικό κοινό.',
    ],
    deliverables: [
      'Παραγωγή short-form native video περιεχομένου (UGC style & polished branding).',
      'Στήσιμο TikTok Ads Manager, TikTok Pixel & Event API.',
      'Spark Ads για ενίσχυση οργανικών viral βίντεο με απευθείας links.',
      'Συνεχής στόχευση βάσει ενδιαφερόντων, συμπεριφορών και search queries.',
      'Trending audio & hook curation για μέγιστο retention rate.',
      'E-commerce integration & Lead Gen forms άμεσης συμπλήρωσης.',
    ],
    results: [
      { metric: '5x', label: 'Μεγαλύτερο Engagement από static' },
      { metric: '€0.03', label: 'Μέσο κόστος ανά video view' },
      { metric: 'Gen Z + Millennials', label: 'Άμεση διείσδυση σε αγοραστικό κοινό' },
    ],
    process: [
      { step: '01', title: 'Trend & Hook Ideation', desc: 'Ανακάλυψη trends και ανάπτυξη hooks που σταματούν το swipe στο 1ο δευτερόλεπτο.' },
      { step: '02', title: 'Content Production', desc: 'Σκηνοθεσία, παραγωγή και μοντάζ γρήγορου native 9:16 περιεχομένου.' },
      { step: '03', title: 'TikTok Ads Launch', desc: 'Εκκίνηση Spark Ads, In-Feed Ads και Lead Generation campaigns.' },
      { step: '04', title: 'Community Spark', desc: 'Μετατροπή των σχολίων και του virality σε πωλήσεις.' },
    ],
  },
  {
    slug: 'social-media-management',
    title: 'Διαχείριση Social Media (Facebook, Instagram, TikTok)',
    badge: 'Authority & Community Building',
    shortCopy:
      'Ολοκληρωμένη διαχείριση προφίλ, σχεδιασμός στρατηγικής περιεχομένου υψηλής αισθητικής, επιμέλεια κοινότητας και ενίσχυση της αναγνωρισιμότητας του brand σας.',
    fullTitle:
      'Ολοκληρωμένη Διαχείριση Social Media: Χτίζοντας Ψηφιακό Κύρος και Κοινότητα',
    whyInvest: [
      'Στην εποχή του ψηφιακού κορεσμού, οι καταναλωτές δεν αγοράζουν από ανώνυμες επιχειρήσεις· αγοράζουν από brands που εμπνέουν αξιοπιστία, αισθητική και συνέπεια. Τα προφίλ σας στα social media αποτελούν την πρώτη βιτρίνα της επιχείρησής σας. Ένα παραμελημένο προφίλ απομακρύνει πιθανούς πελάτες, ενώ μια στρατηγικά δομημένη παρουσία δημιουργεί φανατικούς υποστηρικτές.',
      'Η επένδυση στην επαγγελματική διαχείριση διασφαλίζει ότι κάθε ανάρτηση, story ή interaction αντικατοπτρίζει την ποιότητα της δουλειάς σας, απαντά σε απορίες και χτίζει τη μακροχρόνια αξία πελάτη (Customer Lifetime Value).',
    ],
    deliverables: [
      'Μηνιαίο πλάνο περιεχομένου (Content Calendar) υψηλής αισθητικής.',
      'Copywriting με ξεκάθαρο Tone of Voice προσαρμοσμένο στο brand σας.',
      'Παραγωγή καθημερινών Stories, Reels, Carousels και Highlights.',
      'Active Community Management (άμεση διαχείριση σχολίων, μηνυμάτων και reviews).',
      'Συντονισμός διαγωνισμών (Giveaways) και influencer micro-collabs.',
      'Μηνιαίο αναλυτικό report ανάπτυξης κοινού, reach και engagement.',
    ],
    results: [
      { metric: '+320%', label: 'Αύξηση οργανικών followers' },
      { metric: '< 15min', label: 'Χρόνος απόκρισης σε πελάτες στα DMs' },
      { metric: 'Consistent', label: '100% σταθερή καθημερινή παρουσία' },
    ],
    process: [
      { step: '01', title: 'Brand Aesthetic Audit', desc: 'Καθορισμός οπτικής ταυτότητας και ύφους επικοινωνίας (tone of voice).' },
      { step: '02', title: 'Content Production', desc: 'Σχεδιασμός posts, reels και carousels για ολόκληρο το μήνα.' },
      { step: '03', title: 'Publishing & Interaction', desc: 'Δημοσίευση στις ώρες αιχμής και ενεργή συνομιλία με followers.' },
      { step: '04', title: 'Monthly Analysis', desc: 'Αξιολόγηση των κορυφαίων posts και προσαρμογή στρατηγικής.' },
    ],
  },
  {
    slug: 'branding-identity',
    title: 'Branding & Creative Identity',
    badge: 'Premium Visual Moat',
    shortCopy:
      'Σχεδιασμός εταιρικής ταυτότητας, visual guidelines, packaging και storytelling που προσδίδουν κύρος, διαφοροποίηση και διαχρονική αξία στην επιχείρησή σας.',
    fullTitle:
      'Branding & Creative Identity: Η Ασπίδα σας Απέναντι στον Ανταγωνισμό Τιμών',
    whyInvest: [
      'Όταν όλα τα προϊόντα και οι υπηρεσίες μοιάζουν μεταξύ τους, η μόνη πραγματική διαφοροποίηση είναι το brand. Αν δεν επενδύσετε στη δική σας οπτική και αφηγηματική ταυτότητα, θα αναγκάζεστε να ανταγωνίζεστε διαρκώς σε επίπεδο τιμής (price war).',
      'Το ισχυρό branding επιτρέπει στην επιχείρησή σας να χρεώνει premium τιμές, να προσελκύει πελάτες ανώτερου επιπέδου και να εδραιώνεται στη συνείδηση της αγοράς. Δημιουργούμε οπτικά συστήματα που αποπνέουν ποιότητα από το πρώτο δευτερόλεπτο επαφής.',
    ],
    deliverables: [
      'Σχεδιασμός λογοτύπου (Primary Logo, Secondary variations, Favicon & App Icon).',
      'Πλήρες Visual Identity Guide & Brand Guidelines (Τυπογραφία, Χρώματα, Grid).',
      'Σχεδιασμός έντυπων και ψηφιακών εφαρμογών (packaging, εταιρικές κάρτες, banners).',
      'Brand Voice Guidelines & Storytelling Framework για ομοιογενή επικοινωνία.',
      'Social Media Templates (Canva/Figma) έτοιμα προς χρήση από την ομάδα σας.',
      'Εμπορικά assets για εκθέσεις, presentations και προωθητικό υλικό.',
    ],
    results: [
      { metric: 'Premium', label: 'Δυνατότητα τιμολόγησης ανώτερης αξίας' },
      { metric: '100% Vector', label: 'Ready for print, web, app & signage' },
      { metric: 'Iconic', label: 'Άμεση αναγνωρισιμότητα σε 3 δευτερόλεπτα' },
    ],
    process: [
      { step: '01', title: 'Brand Discovery', desc: 'Ανάλυση ανταγωνισμού, κοινού και αξιών της επιχείρησής σας.' },
      { step: '02', title: 'Moodboard & Concepts', desc: 'Παρουσίαση 3 διαφορετικών δημιουργικών κατευθύνσεων λογοτύπου.' },
      { step: '03', title: 'Design Execution', desc: 'Τελειοποίηση του επιλεγμένου design, χρωματικής παλέτας και γραμματοσειρών.' },
      { step: '04', title: 'Brand Book Delivery', desc: 'Παράδοση πλήρους οδηγού και όλων των αρχείων για παραγωγή.' },
    ],
  },
  {
    slug: 'web-design',
    title: 'Custom Web Design & E-Commerce',
    badge: 'Conversion Rate Optimized',
    shortCopy:
      'Κατασκευή γρήγορων, mobile-first websites και e-shops με επίκεντρο το άψογο UI/UX και τη μετατροπή των επισκεπτών σε πιστούς πελάτες.',
    fullTitle:
      'Custom Web Design & CRO: Η Ψηφιακή Έδρα που Μετατρέπει Επισκέπτες σε Πελάτες',
    whyInvest: [
      'Όλες οι διαφημίσεις και οι προσπάθειες marketing καταλήγουν στο website σας. Αν η ιστοσελίδα σας είναι αργή, δυσνόητη στο κινητό ή ξεπερασμένης αισθητικής, το διαφημιστικό σας budget χάνεται. Σήμερα, το 80%+ της κίνησης προέρχεται από κινητές συσκευές και οι χρήστες αποφασίζουν μέσα σε 3 δευτερόλεπτα αν θα παραμείνουν.',
      'Επενδύοντας σε ένα custom website βελτιστοποιημένο για μετατροπές (CRO), εξασφαλίζετε ταχύτητα, άψογη εμπειρία χρήστη (UX) και ξεκάθαρη διαδρομή αγοράς, μετατρέποντας την απλή επισκεψιμότητα σε μετρήσιμα έσοδα.',
    ],
    deliverables: [
      'Responsive, mobile-first αρχιτεκτονική με άριστη βαθμολογία σε Core Web Vitals.',
      'UI/UX σχεδιασμός με ψυχολογία μετατροπών (Conversion Rate Optimization).',
      'Πλήρης διασύνδεση με Analytics, Pixels, CRM και συστήματα πληρωμών (Stripe, Viva, Iris).',
      'SEO-friendly δομή για κορυφαία κατάταξη στις μηχανές αναζήτησης.',
      'Συμβατότητα για εύκολη διαχείριση σε WordPress / WooCommerce ή headless CMS.',
      'Ασφάλεια SSL, GDPR Compliance & Cloudflare acceleration.',
    ],
    results: [
      { metric: '< 1.2s', label: 'Χρόνος φόρτωσης σε mobile' },
      { metric: '95+', label: 'Google PageSpeed Score' },
      { metric: '+65%', label: 'Αύξηση Checkout Completion' },
    ],
    process: [
      { step: '01', title: 'Wireframing & UX', desc: 'Σχεδιασμός διαδρομής χρήστη και τοποθέτηση των conversion triggers.' },
      { step: '02', title: 'High-Fidelity UI', desc: 'Minimalist & modern design προσαρμοσμένο στην εταιρική ταυτότητα.' },
      { step: '03', title: 'Development & Speed', desc: 'Καθαρός κώδικας, responsive testing σε 10+ συσκευές, SEO optimization.' },
      { step: '04', title: 'Launch & Training', desc: 'Εκπαίδευση της ομάδας σας για αυτόνομη διαχείριση περιεχομένου.' },
    ],
  },
];

export const TRAINING_PROGRAMS: TrainingProgram[] = [
  {
    id: 'social-media-content',
    title: 'Πρακτική Διαχείριση Social Media (Content, Community & Brand Building)',
    badge: 'Hands-on Practice',
    duration: '4 Εβδομάδες (16 Ώρες)',
    format: 'Live Online Workshops & 1-on-1 Mentoring',
    copy:
      'Μάθετε πώς να χτίζετε ένα αυθεντικό brand που κερδίζει την εμπιστοσύνη του κοινού. Στρατηγικός σχεδιασμός περιεχομένου, format reels/shorts, αλγοριθμική ανάπτυξη σε Instagram, TikTok & LinkedIn, και εργαλεία αυτοματοποίησης χωρίς σπατάλη χρόνου.',
    modules: [
      'Ανάλυση αλγορίθμου Instagram, TikTok & LinkedIn το 2026',
      'Δημιουργία μηνιαίου Content Matrix & Content Calendar',
      'Σκηνοθεσία και γρήγορο editing Reels/Shorts από smartphone',
      'Copywriting που πουλάει και storytelling hooks',
      'Community management, διαχείριση κρίσεων & customer delight',
    ],
    targetAudience: 'Επαγγελματίες, Brand Owners & Content Creators',
  },
  {
    id: 'social-selling-funnels',
    title: 'Σύγχρονες Ψηφιακές Πωλήσεις & Social Selling (TikTok, Meta & LinkedIn)',
    badge: 'Revenue Focused',
    duration: '3 Εβδομάδες (12 Ώρες)',
    format: 'Διαδραστικό Masterclass & Roleplay Sessions',
    copy:
      'Η εποχή του "παθητικού post" τελείωσε. Εκπαιδευτείτε στις τεχνικές μετατροπής ακολούθων σε πιστούς πελάτες, closing deals μέσω DMs, B2B lead generation στο LinkedIn και αξιοποίηση live shopping/short video funnels για άμεση αύξηση τζίρου.',
    modules: [
      'DM Closing Framework: Πώς να κλείνετε συμφωνίες στο inbox',
      'B2B Outbound & Inbound Lead Gen στο LinkedIn χωρίς spam',
      'High-converting bio & links funnel architecture',
      'Retargeting & nurturing παλιών επαφών με conversational commerce',
      'Ψυχολογία αγοραστή & χειρισμός αντιρρήσεων τιμής',
    ],
    targetAudience: 'Στελέχη Πωλήσεων, Σύμβουλοι & B2B Επιχειρηματίες',
  },
  {
    id: 'performance-ads-masterclass',
    title: 'Performance Marketing Masterclass (Meta & Google Ads)',
    badge: 'Data & Scaling',
    duration: '6 Εβδομάδες (24 Ώρες)',
    format: 'Live Screen-sharing & Real Campaign Setups',
    copy:
      'Μάθετε να διαχειρίζεστε το διαφημιστικό σας budget σαν επαγγελματίας media buyer. Στήσιμο καμπανιών, Conversions API, A/B creative testing, Advantage+ και Google Search / PMax για μετρήσιμο ROAS.',
    modules: [
      'Τεχνικό setup Pixel, Conversions API & GA4',
      'Δομή λογαριασμού και κατανομή budget για e-commerce & leads',
      'Creative-first marketing: Πώς να φτιάχνετε winning ad creatives',
      'Ανάλυση δεδομένων, metrics interpretation και scaling strategies',
    ],
    targetAudience: 'Ιδιοκτήτες E-Shop & In-house Marketing Managers',
  },
];

export const TARGET_AUDIENCES = [
  'Στελέχη Marketing & Πωλήσεων',
  'Ιδιοκτήτες E-Shop',
  'Τοπικές Επιχειρήσεις & Retail',
  'Επαγγελματίες Παροχής Υπηρεσιών (Ιατροί, Ψυχολόγοι, Σύμβουλοι)',
  'Startups & Scale-ups',
  'Hospitality & Premium Gastro Brands',
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'ecommerce-fashion',
    title: 'E-Commerce Growth Case Study',
    client: 'Nordic Aurelia E-Shop',
    industry: 'E-Commerce · Fashion & Accessories',
    service: 'Meta Ads + Google Ads + CRO',
    tags: ['+180% ROAS', 'Meta Ads', 'Google Shopping'],
    resultHighlight: '+180% Αύξηση ROAS & 3.4x Online Τζίρος',
    copy: 'Κλιμάκωση online πωλήσεων με στοχευμένες καμπάνιες και βελτιστοποίηση e-shop.',
    story:
      'Το e-shop αντιμετώπιζε υψηλό κόστος ανά αγορά και χαμηλό conversion rate. Αναδιαρθρώσαμε πλήρως τις καμπάνιες Advantage+, εγκαταστήσαμε το Conversions API και βελτιστοποιήσαμε το checkout funnel, μειώνοντας τις εγκαταλείψεις καλαθιού κατά 40%.',
    metrics: [
      { value: '+180%', label: 'ROAS' },
      { value: '3.4x', label: 'Online Τζίρος' },
      { value: '-35%', label: 'Κόστος / Αγορά' },
    ],
  },
  {
    id: 'hospitality-branding',
    title: 'High-End Hospitality & Gastro Branding',
    client: 'Kafeneio Concept & Gastro Bar',
    industry: 'Εστίαση & Hospitality · Αθήνα',
    service: 'Rebranding + Social Media + Reels',
    tags: ['Rebranding', '+320% Followers', 'Viral Reels'],
    resultHighlight: '+320% Organic Followers & Fully Booked',
    copy: 'Νέα ταυτότητα και social media περιεχόμενο για premium εστίαση.',
    story:
      'Αναδείξαμε την καθημερινότητα και την ατμόσφαιρα του μαγαζιού με επαγγελματικά cinematic reels και stories. Δημιουργήσαμε σταθερό πρόγραμμα δημοσιεύσεων και στοχευμένη τοπική διαφήμιση που γέμισε τα τραπέζια κάθε Σαββατοκύριακο.',
    metrics: [
      { value: '+180%', label: 'Engagement' },
      { value: '+12K', label: 'Νέοι Followers' },
      { value: '35%', label: 'Κρατήσεις από Social' },
    ],
  },
  {
    id: 'healthcare-branding',
    title: 'Healthcare Professional Personal Branding & Ads',
    client: 'Dr. Ioannis P. Medical Clinic',
    industry: 'Υγεία & Ιατρικές Υπηρεσίες',
    service: 'Personal Branding + Google Ads',
    tags: ['Personal Branding', 'Google Ads', 'Local SEO'],
    resultHighlight: '50+ Νέα Ραντεβού / Μήνα με Σταθερό Κόστος',
    copy: 'Αναγνωρισιμότητα και νέα ραντεβού για επαγγελματία υγείας.',
    story:
      'Επαναπροσδιορίσαμε το ψηφιακό κύρος του ιατρού με εκπαιδευτικό περιεχόμενο που απαντά σε συχνές απορίες ασθενών. Συνδυάσαμε στοχευμένες Google Search καμπάνιες για ασθενείς με άμεση ανάγκη, επιτυγχάνοντας πλήρες ημερολόγιο ραντεβού.',
    metrics: [
      { value: '50+', label: 'Ραντεβού / μήνα' },
      { value: 'Top 1', label: 'Σε τοπικές αναζητήσεις' },
      { value: '-48%', label: 'Κόστος ανά lead' },
    ],
  },
  {
    id: 'fitness-studios',
    title: 'FitZone Studios Lead Generation',
    client: 'FitZone Boutique Studios',
    industry: 'Fitness & Wellness · Πανελλαδικά',
    service: 'Meta Ads + Landing Page CRO',
    tags: ['3x Εγγραφές', 'Meta Ads', 'Landing Pages'],
    resultHighlight: '3x Περισσότερες Εγγραφές με το Ίδιο Budget',
    copy: 'Στοχευμένες καμπάνιες Meta & Google με νέα creative και A/B testing σε σελίδες εγγραφής.',
    story:
      'Δημιουργήσαμε ειδικές landing pages δοκιμαστικής προπόνησης και καμπάνιες lead generation με direct WhatsApp / Call triggers. Το κόστος ανά εγγραφή μειώθηκε κατακόρυφα, επιτρέποντας στο studio να ανοίξει 2ο παράρτημα.',
    metrics: [
      { value: '3x', label: 'Νέες Εγγραφές' },
      { value: '-42%', label: 'CPA / Εγγραφή' },
      { value: '1.2M', label: 'Αποτυπώσεις' },
    ],
  },
  {
    id: 'bloom-skincare',
    title: 'Bloom Skincare Influencer & TikTok Blitz',
    client: 'Bloom Natural Skincare',
    industry: 'E-Shop · Καλλυντικά',
    service: 'Content Creation + TikTok Ads + Influencers',
    tags: ['Sell-out Launch', 'TikTok Ads', 'Influencer Collabs'],
    resultHighlight: 'Sell-Out της Νέας Σειράς σε 14 Ημέρες',
    copy: 'Συνεργασίες με 8 beauty creators και συνεχές content σε TikTok & Instagram.',
    story:
      'Οργανώσαμε ένα viral TikTok launch με unboxing, before/after reviews και Spark Ads. Το traffic στο e-shop εκτοξεύτηκε και η πρώτη παρτίδα 2.000 τεμαχίων εξαντλήθηκε σε λιγότερο από δύο εβδομάδες.',
    metrics: [
      { value: '8', label: 'Top Creators' },
      { value: '+250%', label: 'Online Πωλήσεις' },
      { value: '2M+', label: 'Reel & TikTok Views' },
    ],
  },
];

export interface ClientLogo {
  name: string;
  category: string;
  logoUrl: string;
}

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Midea', category: 'Home Appliances', logoUrl: '/assets/aistudio/1_b67244f4.jpg' },
  { name: 'Aquarius', category: 'Hospitality', logoUrl: '/assets/aistudio/2_c6a172f7.jpg' },
  { name: 'Studio 265 Art Space', category: 'Art & Culture', logoUrl: '/assets/aistudio/3_8bb4f51f.jpg' },
  { name: 'Εκδόσεις Ανάμνηση', category: 'Publishing', logoUrl: '/assets/aistudio/4_693d1e64.jpg' },
  { name: 'Cultivos Coffee', category: 'Coffee & F&B', logoUrl: '/assets/aistudio/5_7d6e440b.jpg' },
  { name: 'Σάιμον says...', category: 'Hospitality', logoUrl: '/assets/aistudio/6_9c9fca07.jpg' },
  { name: 'Braxton', category: 'Gastro & Bar', logoUrl: '/assets/aistudio/7_fdf4cc2d.jpg' },
  { name: 'Gaston', category: 'Hospitality', logoUrl: '/assets/aistudio/8_2c882bf0.jpg' },
  { name: 'Vissente Italian Restaurant', category: 'Gastronomy', logoUrl: '/assets/aistudio/9_28dc4b05.jpg' },
  { name: 'Νόστος Μεζέ', category: 'Gastronomy', logoUrl: '/assets/aistudio/10_ea2ab73e.jpg' },
  { name: 'Δυο Δεκάρες η Οκά', category: 'Gastronomy', logoUrl: '/assets/aistudio/11_583a0c0c.jpg' },
  { name: 'Coffee King', category: 'Coffee & More', logoUrl: '/assets/aistudio/12_9b334e9c.jpg' },
  { name: 'Benji', category: 'Lifestyle', logoUrl: '/assets/aistudio/13_82aedb77.jpg' },
  { name: 'Το Γνήσιον 1922', category: 'Gastronomy', logoUrl: '/assets/aistudio/14_c3b16cb5.jpg' },
  { name: 'Εν Καρδία', category: 'Organic Products', logoUrl: '/assets/aistudio/15_72f1e2ff.jpg' },
  { name: 'Skeleton Key Taproom', category: 'Taproom & Bar', logoUrl: '/assets/aistudio/16_592c0516.jpg' },
  { name: 'Les Naturelles', category: 'Cosmetics', logoUrl: '/assets/aistudio/17_23784560.jpg' },
  { name: 'Καφενείον Ακροπόλεως', category: 'Hospitality & Gastro', logoUrl: '/assets/aistudio/18_7050cfde.jpg' },
  { name: 'Bonbon', category: 'Fashion Accessories', logoUrl: '/assets/aistudio/19_b0cee24b.jpg' },
  { name: 'Αιγηΐς', category: 'Culture & Heritage', logoUrl: '/assets/aistudio/20_b1122845.jpg' },
  { name: 'Μελετώ', category: 'Education', logoUrl: '/assets/aistudio/21_c82883b8.jpg' },
  { name: 'Onar', category: 'Fitness & Performance', logoUrl: '/assets/aistudio/22_c23868b6.jpg' },
  { name: 'Eurofood Quality', category: 'Food & Quality', logoUrl: '/assets/aistudio/eurofood_logo_7daa8cca.jpeg' },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: '5-lathi-meta-ads-2026',
    title: '5 λάθη στις διαφημίσεις Meta που κοστίζουν ακριβά το 2026',
    category: 'Διαφήμιση & Meta',
    readTime: '5 λεπτά',
    date: '10 Μαρτίου 2026',
    summary:
      'Γιατί η παλιά στρατηγική των 50 μικρών ad sets αποτυγχάνει και πώς να δομήσετε καμπάνιες Advantage+ με μέγιστο ROAS.',
    content: [
      'Η διαφήμιση στο Facebook και το Instagram έχει αλλάξει ριζικά τα τελευταία χρόνια. Πολλοί διαφημιζόμενοι συνεχίζουν να εφαρμόζουν πρακτικές του 2020, με αποτέλεσμα να βλέπουν το κόστος ανά κλικ (CPC) να αυξάνεται και τις πωλήσεις να μειώνονται.',
      'Λάθος 1: Μικρο-στόχευση και υπερβολικός τεμαχισμός κοινού. Οι αλγόριθμοι μηχανικής μάθησης της Meta χρειάζονται όγκο δεδομένων. Όταν κατακερματίζετε το budget σας σε 10 διαφορετικά ad sets των €5, καμία καμπάνια δεν βγαίνει από τη φάση εκμάθησης (Learning Phase).',
      'Λάθος 2: Παραμέληση του Conversions API (CAPI). Βασιζόμενοι μόνο στο κλασικό browser pixel, χάνετε έως και 30% των μετρήσεων λόγω ad-blockers και περιορισμών iOS. Η σύνδεση server-side μέσω CAPI είναι πλέον υποχρεωτική.',
      'Λάθος 3: Στατικά banners χωρίς hook. Το creative είναι η νέα στόχευση ("Creative is the new targeting"). Αν το πρώτο 1.5 δευτερόλεπτο του video δεν καθηλώσει το βλέμμα, το ad προσπερνάται.',
    ],
  },
  {
    id: '2',
    slug: 'pos-na-poulite-meso-tiktok',
    title: 'Πώς να πουλήσετε μέσω TikTok το 2026: Από το video στο checkout',
    category: 'TikTok & Video',
    readTime: '6 λεπτά',
    date: '28 Φεβρουαρίου 2026',
    summary:
      'Η στρατηγική των native short-form videos και πώς να μετατρέψετε τους θεατές σε ενεργούς αγοραστές χωρίς να φαίνεστε πιεστικοί.',
    content: [
      'Το TikTok δεν είναι απλώς μια εφαρμογή χορευτικών βίντεο. Για εκατομμύρια καταναλωτές, αποτελεί την 1η μηχανή αναζήτησης προϊόντων και τάσεων.',
      'Ο κανόνας των 3 hooks: Κάθε βίντεο πρέπει να έχει visual hook, text overlay hook και audio hook μέσα στα 2 πρώτα δευτερόλεπτα.',
      'UGC (User Generated Content): Οι καταναλωτές εμπιστεύονται αληθινούς ανθρώπους περισσότερο από γυαλισμένες τηλεοπτικές παραγωγές. Δείξτε το προϊόν σε χρήση, λύστε μια καθημερινή δυσκολία και κατευθύνετε στο bio link.',
    ],
  },
  {
    id: '3',
    slug: 'linkedin-gia-b2b-leads',
    title: 'LinkedIn για B2B: Από το απλό προφίλ σε μηχανή leads',
    category: 'B2B & Social Selling',
    readTime: '4 λεπτά',
    date: '15 Φεβρουαρίου 2026',
    summary:
      'Πώς στελέχη και εταιρείες παροχής υπηρεσιών κλείνουν ραντεβού υψηλής αξίας μέσα από στρατηγική περιεχομένου και επαγγελματικό outreach.',
    content: [
      'Το προφίλ σας στο LinkedIn δεν πρέπει να διαβάζεται σαν βιογραφικό· πρέπει να λειτουργεί σαν landing page για τον ιδανικό σας πελάτη.',
      'Πώς να γράφετε αναρτήσεις με actionable συμβουλές που αναδεικνύουν την εμπειρία σας χωρίς να περιαυτολογείτε.',
      'Η τέχνη του ευγενικού DM outreach: Ξεκινήστε συζήτηση με βάση κοινά ενδιαφέροντα ή περιεχόμενο του άλλου χρήστη, πριν καν αναφέρετε τις υπηρεσίες σας.',
    ],
  },
  {
    id: '4',
    slug: 'giati-ta-eshops-xanoun-poliseis',
    title: 'Γιατί το 80% των e-shops χάνουν πωλήσεις λόγω mobile UX',
    category: 'Web Design & CRO',
    readTime: '5 λεπτά',
    date: '2 Φεβρουαρίου 2026',
    summary:
      'Μικρές αλλαγές στο checkout, στην ταχύτητα φόρτωσης και στα call-to-actions που αυξάνουν άμεσα το conversion rate κατά 30%+',
    content: [
      'Πάνω από το 82% των επισκεπτών σε ένα ελληνικό e-shop έρχονται από smartphone. Αν το mobile experience είναι δυσκίνητο, οι χρήστες απλώς εγκαταλείπουν.',
      'Ταχύτητα: Κάθε δευτερόλεπτο καθυστέρησης μειώνει τις μετατροπές κατά 7%.',
      'One-click payments: Η ενσωμάτωση Apple Pay, Google Pay και άμεσης τραπεζικής πληρωμής (Iris) αυξάνει θεαματικά το ποσοστό ολοκλήρωσης παραγγελίας.',
    ],
  },
];

export const FAQS = [
  {
    question: 'Πόσο σύντομα μπορώ να δω αποτελέσματα από τις διαφημίσεις;',
    answer:
      'Στις καμπάνιες Google Ads και Meta Ads τα πρώτα clicks και leads ξεκινούν μέσα στις πρώτες 24-48 ώρες από το λανσάρισμα. Ωστόσο, η φάση βελτιστοποίησης και σταθερού scaling απαιτεί 4-6 εβδομάδες συλλογής δεδομένων για την επίτευξη του μέγιστου ROAS.',
  },
  {
    question: 'Τι κάνει τη Smart Culture διαφορετική από άλλα digital agencies;',
    answer:
      'Δεν πουλάμε απλώς "likes" ή "followers". Συνδυάζουμε performance διαφήμιση με ισχυρό branding και εκπαίδευση. Μεταφέρουμε τεχνογνωσία στην ομάδα σας, προσφέρουμε απόλυτη διαφάνεια στα κόστη και αναλαμβάνουμε μόνο project όπου μπορούμε να φέρουμε πραγματική απόδοση επένδυσης.',
  },
  {
    question: 'Πώς παρακολουθώ την απόδοση του budget μου;',
    answer:
      'Λαμβάνετε μηνιαία λεπτομερή reports με metrics που έχουν νόημα για την επιχείρησή σας: κόστος ανά απόκτηση πελάτη (CPA), Return on Ad Spend (ROAS), συνολικός τζίρος και ποσοστό μετατροπής.',
  },
  {
    question: 'Μπορώ να συνδυάσω υπηρεσίες agency και εκπαίδευση της ομάδας μου;',
    answer:
      'Απολύτως. Ένα από τα πιο δημοφιλή μοντέλα συνεργασίας μας είναι το Hybrid: αναλαμβάνουμε τη διαχείριση των διαφημίσεων, ενώ ταυτόχρονα εκπαιδεύουμε την ομάδα σας σε συνεργασία με την Rayconvertous να παράγει native περιεχόμενο και να διαχειρίζεται τα social media αυτόνομα.',
  },
  {
    question: 'Μπορώ να επεξεργαστώ το website αργότερα σε WordPress;',
    answer:
      'Ναι! Όλα τα layouts, τα κείμενα και οι δομές σχεδιάζονται ώστε να μπορείτε να μεταφέρετε και να επεξεργαστείτε τα πάντα στο WordPress περιβάλλον σας με απόλυτη ευκολία.',
  },
];
