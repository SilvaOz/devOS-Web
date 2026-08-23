import { z } from 'zod'

// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Start', href: '/' },
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Kontakt', href: '/kontakt' },
] as const

export const NAV_CTA = 'Projekt starten →'

// ─── Hero ────────────────────────────────────────────────────────────────────

export const HERO = {
  badge: 'Leipzig · Deutschland · Persönlich betreut',
  h1Line1: 'Sie kümmern sich um Ihr Geschäft.',
  h1Line2: 'Ich kümmere mich um den Rest.',
  subtitle:
    'Professionelle Websites, Buchungen und digitale Lösungen — persönlich entwickelt, verständlich erklärt und zuverlässig betreut.',
  ctaPrimary: 'Projekt besprechen →',
  ctaGhost: 'Leistungen ansehen',
  micros: [
    'Kein technisches Wissen nötig',
    'Persönlicher Ansprechpartner',
    'Antwort in 24–48h',
  ],
} as const

// ─── Marquee ─────────────────────────────────────────────────────────────────

export type MarqueeItem = {
  label: string
  wp: boolean
}

export const MARQUEE_ITEMS: MarqueeItem[] = [
  { label: 'WordPress', wp: true },
  { label: 'Amelia', wp: true },
  { label: 'Google', wp: false },
  { label: 'Zoom', wp: false },
  { label: 'React', wp: false },
  { label: 'Next.js', wp: false },
  { label: 'TypeScript', wp: false },
  { label: 'Node.js', wp: false },
  { label: 'Tailwind CSS', wp: false },
  { label: 'GitHub', wp: false },
  { label: 'Docker', wp: false },
  { label: 'PostgreSQL', wp: false },
]

// ─── Services ─────────────────────────────────────────────────────────────────

export type ServiceCard = {
  icon: string
  title: string
  description: string
  features: string[]
  cta?: string
  featured?: boolean
}

export const SERVICES: ServiceCard[] = [
  {
    icon: 'Globe',
    title: 'Ihre Website',
    description:
      'Professionell, editierbar, ohne Programmierkenntnisse. Sie können Texte selbst ändern — kein IT-Wissen nötig.',
    features: [
      'Responsives Design (Mobil + Desktop)',
      'Sie können selbst Inhalte ändern',
      'Kontaktformular & Buchungen',
      'SEO-Grundlagen inklusive',
      'Schnell & sicher (SSL)',
      'DSGVO-Grundlage',
    ],
    cta: 'Preise ansehen →',
    featured: true,
  },
  {
    icon: 'CalendarCheck',
    title: 'Online-Buchungen',
    description:
      'Ihre Klienten buchen selbst, zahlen direkt und bekommen eine Bestätigung — automatisch. Sie müssen nichts tun.',
    features: [],
  },
  {
    icon: 'ShoppingCart',
    title: 'Online verkaufen',
    description:
      'Produkte, Kurse oder Sitzungen online anbieten. Bezahlung direkt auf Ihrer Website.',
    features: [],
  },
  {
    icon: 'Search',
    title: 'Bei Google gefunden',
    description:
      'Ihre Website lädt schnell und erscheint in den Suchergebnissen — ohne technischen Aufwand Ihrerseits.',
    features: [],
  },
  {
    icon: 'LayoutDashboard',
    title: 'Individuelle Plattformen',
    description:
      'Login-Bereiche, Dashboards, interne Tools. Für komplexere Anforderungen.',
    features: [],
  },
  {
    icon: 'HeartHandshake',
    title: 'Support & Pflege',
    description:
      'Ich bin auch nach dem Launch da. Updates, neue Inhalte, Fragen — Antwort in 24–48h.',
    features: [],
  },
]

// ─── Pricing ──────────────────────────────────────────────────────────────────

export type PricingPlan = {
  id: string
  name: string
  price: string
  target: string
  features: string[]
  excluded: string[]
  featured?: boolean
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'wp-pro',
    name: 'WP Pro',
    price: 'ab 1.990 EUR',
    target: 'Design + alle technischen Integrationen',
    features: [
      'Individuelles Design nach Ihrem Stil',
      'Bis 8 Seiten',
      'Amelia Buchungssystem',
      'Google Calendar Sync',
      'Zoom-Integration',
      'DSGVO-Grundlage',
    ],
    excluded: [],
    featured: true,
  },
  {
    id: 'web-app',
    name: 'Web App',
    price: 'ab 3.500 EUR',
    target: 'Maßgeschneiderte Plattformen & Systeme',
    features: [
      'React / Next.js Frontend',
      'Backend + Authentifizierung',
      'Datenbank & API',
      'Dashboard & Rollen',
      'Deploy & Hosting',
    ],
    excluded: [],
  },
]

export const PRICING_NOTE =
  'Alle Pakete werden per Banküberweisung bezahlt. Nach Ihrer Anfrage erhalten Sie ein detailliertes Angebot und eine Rechnung.'

// ─── Process ──────────────────────────────────────────────────────────────────

export type ProcessStep = {
  number: string
  title: string
  description: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Gespräch',
    description: 'Sie erklären mir Ihr Ziel. Ich frage alles, was ich brauche. Keine Hausaufgaben für Sie.',
  },
  {
    number: '02',
    title: 'Entwurf',
    description: 'Ich zeige Ihnen erste Designs. Sie sagen, was gefällt — ich passe an.',
  },
  {
    number: '03',
    title: 'Entwicklung',
    description: 'Ich baue Ihre Website. Sie müssen nichts Technisches wissen oder tun.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Ihre Seite ist live. Ich erkläre Ihnen alles in einem kurzen Video. Fertig.',
  },
]

// ─── About ────────────────────────────────────────────────────────────────────

export const ABOUT = {
  label: 'ÜBER MICH',
  name: 'Hallo, ich bin Oscar.',
  role: 'Gründer von DevOS Web · Leipzig',
  paragraph:
    'Ich kümmere mich persönlich um Ihre Website — von der ersten Nachricht bis zum Launch und darüber hinaus. Kein Call-Center, kein Outsourcing. Sie schreiben mir, ich antworte.',
  paragraph2:
    'Ich arbeite mit Therapeuten, Künstlern, Coaches und kleinen Unternehmen. Ich erkläre alles auf Ihre Sprache — nicht auf Programmiersprache.',
  cta: 'Lassen Sie uns sprechen →',
  points: [
    {
      icon: 'UserRound',
      title: 'Persönlicher Ansprechpartner',
      description: 'Immer ich — keine Weiterleitung, kein Ticket-System.',
    },
    {
      icon: 'MessageSquare',
      title: 'Kein Fachjargon',
      description: 'Ich erkläre alles verständlich. Auf Deutsch oder Spanisch.',
    },
    {
      icon: 'BadgeCheck',
      title: 'Deadlines werden eingehalten',
      description: 'Ich sage, was ich tue — und tue, was ich sage.',
    },
    {
      icon: 'MapPin',
      title: 'Leipzig — Europa',
      description: 'Ich arbeite mit Kunden in Deutschland und ganz Europa.',
    },
  ],
} as const

// ─── Portfolio ────────────────────────────────────────────────────────────────

export type PortfolioCase = {
  id: string
  kind: 'client' | 'own'
  title: string
  subtitle: string
  sector: string
  location: string
  problem: string
  solution: string
  result: string
  stack: string[]
  liveUrl: string | null
  featured: boolean
  badge?: string
  gradient: string
  image?: string
}

export const PORTFOLIO_CASES: PortfolioCase[] = [

  // ── Kundenprojekte ────────────────────────────────────────────────────────

  {
    id: 'lisa-saeggesser',
    kind: 'client',
    title: 'Lisa Sägesser Coaching',
    subtitle: 'Von Wix zu WordPress — vollständiges Buchungssystem',
    sector: 'Coaching / Beratung',
    location: 'Schweiz',
    problem: 'Veraltete Wix-Seite ohne Online-Buchung. Kunden konnten keine Termine buchen, kein Google Calendar Sync, keine professionelle E-Mail-Kommunikation.',
    solution: 'Kompletter Umzug auf WordPress mit Divi. Amelia Booking mit Google Calendar Sync, Schweizer Telefon-Standard, Yoast SEO auf allen Seiten, SMTP-Setup, Wix-Domain-Redirect.',
    result: 'Vollautomatisches Buchungssystem. Kunden buchen selbst, Calendar Sync in Echtzeit, Google Ads ready.',
    stack: ['WordPress', 'Divi', 'Amelia Booking', 'Yoast SEO', 'Google Calendar API', 'SMTP'],
    liveUrl: null,
    featured: true,
    gradient: 'from-teal-800 to-emerald-950',
  },

  {
    id: 'melanie-nitsch',
    kind: 'client',
    title: 'Melanie Nitsch',
    subtitle: 'Responsive-Rettung + Blog + Events',
    sector: 'Heilpraktikerin',
    location: 'Deutschland',
    problem: 'Website auf Mobilgeräten komplett kaputt. Kein Blog, kein Veranstaltungsbereich, Amelia-Benachrichtigungen nicht konfiguriert.',
    solution: 'Responsive CSS komplett überarbeitet, Aktuelles-Blogseite erstellt, Messe-Event-Eintrag hinzugefügt, Amelia-Benachrichtigungen eingerichtet, Logo aktualisiert.',
    result: 'Perfekte Darstellung auf allen Geräten. Blog und Events aktiv. Professionelle Kundenkommunikation via Amelia.',
    stack: ['WordPress', 'Divi', 'Amelia Booking', 'CSS Responsive', 'Custom Logo'],
    liveUrl: null,
    featured: false,
    gradient: 'from-stone-700 to-amber-950',
  },

  {
    id: 'elke-tegel',
    kind: 'client',
    title: 'Elke Tegel Naturheilpraxis',
    subtitle: 'Server-Rettung + Homepage-Redesign',
    sector: 'Naturheilkunde',
    location: 'Deutschland',
    problem: 'Kein Zugang zum Server — wochenlang blockiert. Veraltetes Homepage-Design, das nicht zum professionellen Angebot passte.',
    solution: 'Server-Zugangsproblem gelöst. Neues Divi JSON (v2) für die Homepage entwickelt — modernes Design mit klarer Struktur und verbesserter UX.',
    result: 'Vollständiger Server-Zugang wiederhergestellt. Neues Homepage-Design live. Wiederverwendbares Divi JSON als Template.',
    stack: ['WordPress', 'Divi', 'Divi JSON', 'IONOS Hosting', 'Server Recovery'],
    liveUrl: null,
    featured: false,
    gradient: 'from-slate-700 to-teal-950',
  },

  // ── Eigene Produkte ───────────────────────────────────────────────────────

  {
    id: 'nazca-antara',
    kind: 'own',
    title: 'Nazca Antara',
    subtitle: 'App móvil — instrumento ancestral peruano',
    sector: 'Kultur / Musik-App',
    location: 'Global',
    problem: 'Ein 2000 Jahre altes Instrument — die Nazca-Antara — existierte in keiner digitalen Form. Kein Zugang für moderne Nutzer.',
    solution: 'iOS/Android App mit authentischen Klangaufnahmen in 3 Größen (Chuli, Malta, Sanqa). Aufnahmefunktion, Demo-Melodien, Landing Page.',
    result: 'Live Landing Page. App in Entwicklung für App Store + Google Play. Authentische Samples aus Nazca, Peru.',
    stack: ['React Native', 'Next.js', 'Vercel', 'Audio Sampling', 'iOS', 'Android'],
    liveUrl: 'https://nasca-landing.vercel.app',
    featured: true,
    badge: 'Live Demo →',
    gradient: 'from-orange-900 to-red-950',
  },

  {
    id: 'kleinunternehmer-app',
    kind: 'own',
    title: 'Kleinunternehmer App',
    subtitle: 'SaaS-Tool für Rechnungsstellung ohne MwSt.',
    sector: 'FinTech / SaaS',
    location: 'DACH',
    problem: 'Kleinunternehmer in Deutschland brauchen eine einfache Lösung für §19-UStG-konforme Rechnungen — ohne teure Buchhaltungssoftware.',
    solution: 'Vollständige SaaS-Webanwendung mit Kundenverwaltung, Rechnungsgenerator (PDF), Dashboard. Intern in DevOS Web integriert.',
    result: 'Produktive App in Betrieb. Intern genutzt für DevOS-Rechnungen. Basis für zukünftiges B2B-Produkt.',
    stack: ['Next.js', 'TypeScript', 'Vercel', 'PDF Generation', 'Auth', 'Stripe'],
    liveUrl: null,
    featured: true,
    badge: 'SaaS Live →',
    gradient: 'from-blue-900 to-indigo-950',
  },

  {
    id: 'silva-journey-pipeline',
    kind: 'own',
    title: 'The Silva Journey',
    subtitle: 'KI-Content-Pipeline — 1 Video/Woche automatisch',
    sector: 'Content Automation / YouTube',
    location: 'Global',
    problem: 'YouTube-Kanal mit EMDR und Heilfrequenzen — manuelle Videoproduktion ist zeitaufwendig und nicht skalierbar.',
    solution: 'Vollautomatische Pipeline: Suno (Audio-KI) → Python/FFmpeg (Video-Assembly) → Nebula-Visuals → YouTube Data API Upload. Metadata-Templates rotieren automatisch.',
    result: '1 Video pro Woche ohne manuelle Arbeit. Slug-Konvention soundjourney_NNN. Skalierbar auf mehrere Kanäle.',
    stack: ['Python', 'FFmpeg', 'Suno AI', 'YouTube Data API', 'Task Scheduler', 'fal.ai'],
    liveUrl: 'https://youtube.com/@TheSilvaJourney',
    featured: false,
    badge: 'Kanal ansehen →',
    gradient: 'from-violet-900 to-purple-950',
  },
]

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export type FAQItem = {
  question: string
  answer: string
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Wie lange dauert die Entwicklung?',
    answer:
      'WP Base: 7–14 Werktage. WP Pro / Web App: 3–6 Wochen. Die genaue Dauer hängt vom Umfang und der Bereitstellung der Inhalte ab.',
  },
  {
    question: 'Was brauche ich zum Starten?',
    answer:
      'Logo, Texte, Fotos und ggf. Hosting-Zugang. Ich erkläre alles per E-Mail – Schritt für Schritt.',
  },
  {
    question: 'Kann ich die Website selbst bearbeiten?',
    answer:
      'Ja. WordPress + Divi ist ohne Programmierkenntnisse editierbar. Ich erkläre es in einem Video nach dem Launch.',
  },
  {
    question: 'Wie funktioniert die Bezahlung?',
    answer:
      'Per Banküberweisung nach Angebot. Kein Online-Bezahlsystem notwendig. Sie erhalten eine Rechnung per E-Mail.',
  },
  {
    question: 'Was passiert nach dem Launch?',
    answer:
      'Supportpakete ab 75 EUR/Std verfügbar. Antwort immer innerhalb 24–48h. Ich bin auch nach dem Launch erreichbar.',
  },
  {
    question: 'Sprechen Sie Deutsch?',
    answer:
      'Ja, ich kommuniziere auf Deutsch und Spanisch. Alles schriftlich, klar und nachvollziehbar.',
  },
  {
    question: 'Ich habe schon eine Website. Können Sie sie verbessern?',
    answer:
      'Ja. Schreiben Sie mir über das Kontaktformular mit Details zu Ihrer aktuellen Seite und Ihren Zielen.',
  },
  {
    question: 'Bieten Sie auch Hosting an?',
    answer:
      'Ich empfehle und konfiguriere Hosting (Hetzner, All-Inkl). Der Aufwand ist im Paket enthalten.',
  },
]

// ─── Contact ─────────────────────────────────────────────────────────────────

export const CONTACT = {
  label: 'KONTAKT',
  h2: 'Lassen Sie uns sprechen',
  paragraph:
    'Schreiben Sie mir und ich antworte innerhalb von 24–48 Stunden.',
  email: 'info@devos-web.de',
  location: 'Leipzig, Deutschland',
  hours: 'Mo–Fr, 9:00–18:00 Uhr',
  noPhone: 'Kein Telefon — alles per E-Mail. Schneller, klarer, dokumentiert.',
  paymentNote: 'Zahlung per Banküberweisung nach schriftlichem Angebot. Sie erhalten eine Rechnung per E-Mail.',
  packageOptions: [
    { value: 'praxis-digital',        label: 'Praxis Digital — Mit Funktionen (1.990 EUR)' },
    { value: 'praxis-digital-design', label: 'Praxis Digital — Nur Design (900 EUR)' },
    { value: 'ki-automation',         label: 'KI-Automatisierung (ab 500 EUR)' },
    { value: 'app-mvp',               label: 'App MVP (ab 2.500 EUR)' },
    { value: 'content-system',        label: 'Content-System (ab 1.200 EUR)' },
    { value: 'startklar',             label: 'Startklar-Paket (450 EUR)' },
    { value: 'wachstum',              label: 'Wachstumspaket (790 EUR)' },
    { value: 'express-24h',           label: 'Website Express 24h (ab 2.000 EUR)' },
    { value: 'wp-premium',            label: 'WP Design (ab 900 EUR)' },
    { value: 'wp-pro',                label: 'WP Pro (ab 1.990 EUR)' },
    { value: 'web-app',               label: 'Web App (ab 3.500 EUR)' },
    { value: 'monthly',               label: 'Monatspflege (99 EUR/Monat)' },
    { value: 'quarterly',             label: 'Quartalspflege (249 EUR / 3 Monate)' },
    { value: 'annual',                label: 'Jahrespflege (699 EUR / 12 Monate)' },
    { value: 'biennial',              label: '2-Jahres-Partner (1.099 EUR / 24 Monate)' },
    { value: 'other',                 label: 'Sonstiges / Anderes' },
  ],
  submitLabel: 'Nachricht senden →',
  successMessage:
    '✓ Nachricht gesendet! Ich melde mich innerhalb von 24–48 Stunden.',
  errorMessage:
    'Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an info@devos-web.de',
} as const

// ─── Add-on prices (used server-side to compute invoice total) ────────────────

export const WP_DESIGN_ADDON_PRICES: Record<string, number> = {
  'Amelia Buchungssystem':  199,
  'Google Calendar Sync':   99,
  'Zoom Integration':       79,
  'Newsletter / Mailchimp': 99,
  'Freebie / E-Book':       79,
  'Google Ads Tracking':    99,
  'Mehrsprachig':           149,
}

export const LANDING_ADDON_PRICES: Record<string, number> = {
  'Buchungslink einrichten (Calendly)': 49,
  'Newsletter-Anmeldung (Mailchimp)':   79,
}

export const PRAXIS_DESIGN_ADDON_PRICES: Record<string, number> = {
  'Amelia Buchungssystem':  249,
  'Google Calendar Sync':   99,
  'SEO-Grundlage + Yoast':  149,
  'Zoom-Integration':        79,
}

export const BASE_PACKAGE_PRICES: Record<string, number> = {
  'express-24h':           2000,
  'landing-page':          599,
  'wp-premium':            900,
  'wp-pro':                1990,
  'web-app':               3500,
  'praxis-digital':        1990,
  'praxis-digital-design': 900,
  'startklar':             450,
  'wachstum':              790,
}

export function computePackageTotal(packageId: string, features: string[] = []): number {
  const base = BASE_PACKAGE_PRICES[packageId]
  if (base === undefined) return 0
  if (packageId === 'wp-premium') {
    return base + features.reduce((sum, f) => sum + (WP_DESIGN_ADDON_PRICES[f] ?? 0), 0)
  }
  if (packageId === 'landing-page') {
    return base + features.reduce((sum, f) => sum + (LANDING_ADDON_PRICES[f] ?? 0), 0)
  }
  if (packageId === 'praxis-digital-design') {
    return base + features.reduce((sum, f) => sum + (PRAXIS_DESIGN_ADDON_PRICES[f] ?? 0), 0)
  }
  return base
}

// ─── Contact Form Schema ──────────────────────────────────────────────────────

export const contactSchema = z.object({
  name: z.string().min(1, 'Name ist erforderlich'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  package: z.string().min(1, 'Bitte wählen Sie ein Paket'),
  message: z.string().optional().default(''),
  timing: z.string().optional(),
  privacy: z.literal(true, {
    error: 'Bitte akzeptieren Sie die Datenschutzerklärung',
  }),
  // Qualifying fields (website packages only)
  pages: z.string().optional(),
  features: z.array(z.string()).optional(),
  sections: z.array(z.string()).optional(),
  contentReady: z.string().optional(),
  currentWebsite: z.string().optional(),
  // Billing address (for invoice)
  companyName: z.string().optional(),
  street: z.string().optional(),
  zip: z.string().optional(),
  city: z.string().optional(),
  // Recommended package if different from selected
  recommendedPackage: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>

// ContactSection uses this stricter schema (message required)
export const contactSectionSchema = contactSchema.extend({
  message: z.string().min(20, 'Nachricht muss mindestens 20 Zeichen haben'),
})
export type ContactSectionData = z.infer<typeof contactSectionSchema>

// ─── Für wen ──────────────────────────────────────────────────────────────────

export type FuerWenCard = {
  icon: string
  title: string
  description: string
  examples: string[]
}

export const FUER_WEN: FuerWenCard[] = [
  {
    icon: 'Heart',
    title: 'Therapeuten & Coaches',
    description: 'Online buchbar, DSGVO-konform, vertrauenswürdig. Ihre Klienten finden Sie — und buchen direkt.',
    examples: ['Psychotherapie', 'Coaching', 'Physiotherapie'],
  },
  {
    icon: 'Palette',
    title: 'Künstler & Kreative',
    description: 'Ein Portfolio, das Ihre Arbeit zeigt — nicht überwältigt. Einfach, schön, professionell.',
    examples: ['Fotografie', 'Illustration', 'Musik'],
  },
  {
    icon: 'Leaf',
    title: 'Gesundheit & Wellness',
    description: 'Termine online verwalten, Zahlungen automatisch. Mehr Zeit für Ihre Klienten, weniger Verwaltung.',
    examples: ['Yoga', 'Ernährungsberatung', 'Massage'],
  },
  {
    icon: 'Briefcase',
    title: 'Kleine Unternehmen',
    description: 'Bei Google gefunden werden, Anfragen bekommen, professionell wirken. Alles, was Sie brauchen.',
    examples: ['Handwerk', 'Dienstleistung', 'Beratung'],
  },
]

// ─── Footer ───────────────────────────────────────────────────────────────────

export const FOOTER = {
  tagline: 'Websites & digitale Lösungen · Leipzig, DE',
  copyright: '© 2026 DevOS Web · Leipzig · info@devos-web.de',
  vatNote: 'Gem. §19 UStG wird keine Umsatzsteuer berechnet.',
  links: [
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
  ],
} as const

// ─── Support Plans ────────────────────────────────────────────────────────────

export type SupportPlan = {
  id: string
  name: string
  tagline: string
  duration: string
  totalPrice: number
  perMonth: number
  savings?: number
  features: string[]
  featured?: boolean
  billingType: 'subscription' | 'payment'
}

export const SUPPORT_PLANS: SupportPlan[] = [
  {
    id: 'monthly',
    name: 'Monatspflege',
    tagline: 'Flexibel, monatlich kündbar.',
    duration: '1 Monat',
    totalPrice: 99,
    perMonth: 99,
    billingType: 'subscription',
    features: [
      'WordPress & Plugin-Updates',
      'Wöchentliches Backup',
      '1 Std. Inhaltsänderungen/Monat',
      'E-Mail-Support (Antwort in 48h)',
    ],
  },
  {
    id: 'quarterly',
    name: 'Quartalspflege',
    tagline: 'Für einen ruhigen Start.',
    duration: '3 Monate',
    totalPrice: 249,
    perMonth: 83,
    savings: 16,
    billingType: 'payment',
    features: [
      'WordPress & Plugin-Updates',
      'Wöchentliches Backup',
      '2 Std. Änderungen/Monat',
      'Sicherheits-Monitoring',
      'E-Mail-Support (Antwort in 48h)',
      'Monatlicher Statusbericht',
    ],
  },
  {
    id: 'annual',
    name: 'Jahrespflege',
    tagline: 'Die Wahl der meisten Kunden.',
    duration: '12 Monate',
    totalPrice: 699,
    perMonth: 58,
    savings: 41,
    billingType: 'payment',
    features: [
      'Alles aus Quartalspflege',
      '3 Std. Änderungen/Monat',
      'Tägliches Backup',
      'Priorität: Antwort in 24h',
      '1 Notfall-Intervention inklusive',
      'Halbjährlicher Performance-Bericht',
    ],
    featured: true,
  },
  {
    id: 'biennial',
    name: '2-Jahres-Partner',
    tagline: 'Für langfristige Partnerschaft.',
    duration: '24 Monate',
    totalPrice: 1099,
    perMonth: 46,
    savings: 54,
    billingType: 'payment',
    features: [
      'Alles aus Jahrespflege',
      '4 Std. Änderungen/Monat',
      'Priorität: Antwort in 12h',
      'Notfall-Interventionen unbegrenzt',
      'Quartals-Gespräch (30 Min.)',
      'SEO-Check alle 6 Monate',
    ],
  },
]

// ─── Testimonials ─────────────────────────────────────────────────────────────

export type Testimonial = {
  quote: string
  author: string
  role: string
  location: string
  metric: string
  initial: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Ich hatte null Ahnung von Websites. Oscar hat alles erklärt, alles organisiert — und 3 Wochen später war ich online buchbar. Meine Klientinnen buchen jetzt direkt, ohne dass ich eingreifen muss.',
    author: 'Maria S.',
    role: 'Heilpraktikerin',
    location: 'Leipzig',
    metric: '12 Buchungen in der ersten Woche',
    initial: 'M',
  },
  {
    quote:
      'Mein altes Portfolio war eine Katastrophe. Jetzt zeige ich es jedem. Die Seite sieht professionell aus, lädt schnell, und Oscar hat sogar meinen alten Content gerettet. Absolute Empfehlung.',
    author: 'Thomas R.',
    role: 'Fotograf',
    location: 'Dresden',
    metric: '3 neue Kundenanfragen im ersten Monat',
    initial: 'T',
  },
  {
    quote:
      'Die Online-Buchungen haben meinen Alltag komplett verändert. Kein WhatsApp-Chaos mehr, keine verlorenen Termine. Alles läuft automatisch. Ich kann mich endlich auf den Unterricht konzentrieren.',
    author: 'Karin M.',
    role: 'Yoga-Studio-Inhaberin',
    location: 'Leipzig',
    metric: '+40% Buchungen seit Launch',
    initial: 'K',
  },
]

// ─── Newsletter ────────────────────────────────────────────────────────────────

export const NEWSLETTER = {
  label: 'KOSTENLOS',
  title: '10 Tipps für Ihre Website',
  subtitle: 'Was eine gute Website wirklich ausmacht — erklärt ohne Fachjargon.',
  bullets: [
    'Wie Sie bei Google gefunden werden — ohne Werbung',
    'Warum Ladezeit direkt Kunden und Buchungen kostet',
    'Die 5 häufigsten Fehler auf kleinen Unternehmenswebsites',
    'Was eine Website wirklich kosten sollte (und was nicht)',
    'Wie Sie Ihre Seite selbst pflegen, ohne Programmierer',
  ],
  placeholder: 'ihre@email.de',
  submit: 'Tipps kostenlos erhalten →',
  privacy: 'Kein Spam. Nur diese E-Mail. Abmeldung jederzeit.',
  successMessage: '✓ Danke! Der Link ist auf dem Weg zu Ihnen.',
  errorMessage: 'Fehler. Bitte versuchen Sie es erneut.',
} as const

// ─── Express Service ──────────────────────────────────────────────────────────

export const EXPRESS_SERVICE = {
  badge: 'EXPRESS · NUR 2 TERMINE / MONAT',
  h2: 'Ihre Website in 24 Stunden.',
  subtitle:
    'Für Kunden, die keine Zeit verlieren wollen. Eine fertige Landing Page — von Briefing bis Launch in einem Werktag.',
  price: 'ab 2.000 EUR',
  priceNote: 'einmalig · Banküberweisung',
  urgency: 'Nur 2 Express-Termine pro Monat verfügbar.',
  features: [
    '1-Page Landing Page',
    'WordPress + Divi',
    'Responsives Design (Mobile + Desktop)',
    'Kontaktformular',
    'Grundlegendes SEO',
    '1 Revisionsrunde inklusive',
  ],
  timeline: [
    { time: '09:00', label: 'Briefing', desc: 'Sie erklären Ihr Ziel. Wir klären alle Details per Videocall.' },
    { time: '11:00', label: 'Design', desc: 'Ich zeige Ihnen den ersten Entwurf zur Freigabe.' },
    { time: '16:00', label: 'Entwicklung', desc: 'Die Seite wird gebaut, getestet und finalisiert.' },
    { time: 'Tag 2 · 09:00', label: 'Launch', desc: 'Ihre Website ist live. Einweisung per Kurzvideo.' },
  ],
  cta: 'Express-Termin anfragen →',
  ctaHref: '/anfragen?package=express-24h',
} as const

// ─── Leistungen Page ──────────────────────────────────────────────────────────

export const LEISTUNGEN_PAGE = {
  hero: {
    label: 'LEISTUNGEN',
    h1: 'Was ich für Sie entwickle',
    subtitle: 'Von WordPress bis Full-Stack — klare Lösungen, keine Überraschungen.',
  },
  wordpress: {
    label: 'WORDPRESS',
    h2: 'WordPress-Websites',
    description: 'Professionelle, editierbare Websites mit Divi. Ideal für Unternehmen, die online wachsen wollen.',
    plans: [
      {
        name: 'Landing Page',
        price: 'ab 599 EUR',
        features: ['1 Seite', 'Individuelles Design', 'Kontaktformular', 'Responsiv', 'SSL + SEO'],
      },
      {
        name: 'WP Design',
        price: 'ab 900 EUR',
        features: ['Individuelles Design', 'Eigene Farben & Typografie', 'Bis 8 Seiten', 'Responsiv', 'Kein Buchungssystem'],
        featured: true,
      },
      {
        name: 'WP Pro',
        price: 'ab 1.990 EUR',
        features: ['Alles aus WP Design', 'Amelia Buchungen', 'Google Calendar', 'Zoom', 'Stripe-Zahlungen'],
      },
    ],
  },
  fullstack: {
    label: 'FULL-STACK',
    h2: 'Web-Apps mit React & Node.js',
    description: 'Maßgeschneiderte Plattformen mit Login, Rollen, Dashboards und APIs.',
    features: [
      { icon: 'Code2', title: 'React / Next.js', description: 'Modernes Frontend mit Server-Side Rendering und TypeScript.' },
      { icon: 'Server', title: 'Backend + Auth', description: 'Node.js, PostgreSQL, sichere Authentifizierung und Rollen.' },
      { icon: 'Plug', title: 'APIs & Integrationen', description: 'Stripe, CRMs, Zoom, Google Calendar und externe Systeme.' },
      { icon: 'Rocket', title: 'Deploy & DevOps', description: 'Vercel, Docker, CI/CD — sauber und wartbar.' },
    ],
  },
  ecommerce: {
    label: 'E-COMMERCE',
    h2: 'WooCommerce-Shops',
    description: 'Vollständige Online-Shops mit Zahlungsgateways, Lagerverwaltung und Produktkatalogen.',
    features: ['WooCommerce Setup', 'Stripe & PayPal', 'Lagerverwaltung', 'Produktkatalog', 'DSGVO-konform'],
  },
  automatisierungen: {
    label: 'AUTOMATISIERUNGEN',
    h2: 'Buchungen & Automatisierungen',
    description: 'Amelia Buchungssystem, Google Calendar, Zoom und Stripe — vollständig konfiguriert.',
    items: [
      { icon: 'CalendarCheck', title: 'Amelia Buchungen', description: 'Online-Terminbuchung mit automatischen Bestätigungen.' },
      { icon: 'CalendarDays', title: 'Google Calendar', description: 'Synchronisation mit Ihrem persönlichen Kalender.' },
      { icon: 'Video', title: 'Zoom Integration', description: 'Automatische Meeting-Links bei Online-Terminen.' },
      { icon: 'CreditCard', title: 'Stripe Zahlungen', description: 'Online-Bezahlung direkt bei der Buchung.' },
    ],
  },
  performance: {
    label: 'PERFORMANCE & SEO',
    h2: 'Geschwindigkeit & Sichtbarkeit',
    description: 'Core Web Vitals, Caching, Bildoptimierung und technisches SEO.',
    metrics: ['LCP < 2.5s', 'CLS < 0.1', 'FID < 100ms', 'Google PageSpeed > 90'],
  },
  support: {
    label: 'SUPPORT',
    h2: 'Support & Wartung',
    description: 'Ich bin auch nach dem Launch erreichbar.',
    price: 'ab 75 EUR/Std',
    features: ['Updates & Sicherheits-Patches', 'Backup-Verwaltung', 'Neue Inhalte einfügen', 'Technischer Support per E-Mail'],
  },
  cta: {
    h2: 'Bereit anzufangen?',
    text: 'Schreiben Sie mir — ich antworte innerhalb von 24–48 Stunden.',
    button: 'Projekt anfragen →',
  },
} as const

// ─── About Page ───────────────────────────────────────────────────────────────

export const ABOUT_PAGE = {
  hero: {
    name: 'Oscar',
    tagline: 'Softwareentwickler & Webentwickler · Leipzig, DE',
    paragraph: 'Ich entwickle WordPress-Websites und digitale Plattformen für Unternehmen, die online wachsen wollen. Kein Aufwand für den Kunden — ich kümmere mich um alles, von der Domain bis zum Launch. Mein Fokus liegt auf sauberem Code, klarer Kommunikation und Lösungen, die wirklich funktionieren.',
  },
  stack: {
    label: 'TECH STACK',
    items: ['WordPress', 'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
  },
  values: {
    label: 'MEINE WERTE',
    items: [
      { icon: 'Eye', title: 'Klarheit', description: 'Kein Fachjargon. Klare Kommunikation, verständliche Angebote.' },
      { icon: 'Zap', title: 'Performance', description: 'Schnelle Websites, sauberer Code, messbare Ergebnisse.' },
      { icon: 'Megaphone', title: 'Direktheit', description: 'Ich sage, was möglich ist und was nicht — ohne Umwege.' },
      { icon: 'BadgeCheck', title: 'Zuverlässigkeit', description: 'Deadlines werden eingehalten. Ich melde mich immer innerhalb 24h.' },
    ],
  },
  languages: 'Ich spreche Deutsch und Spanisch.',
  location: 'Projekte für Kunden in Deutschland und Europa.',
  cta: {
    h2: 'Lassen Sie uns arbeiten',
    text: 'Haben Sie ein Projekt? Schreiben Sie mir.',
    button: 'Kontakt aufnehmen →',
  },
} as const
