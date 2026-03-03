import { z } from 'zod'

// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const

export const NAV_CTA = 'Projekt starten →'

// ─── Hero ────────────────────────────────────────────────────────────────────

export const HERO = {
  badge: '● Verfügbar für neue Projekte · Leipzig, DE',
  h1Line1: 'Ihre Website.',
  h1Line2: 'In guten Händen.',
  subtitle:
    'Ich entwickle Websites für Therapeuten, Künstler und kleine Unternehmen — persönlich, klar und ohne Fachjargon.',
  ctaPrimary: 'Projekt starten →',
  ctaGhost: 'Für wen bin ich?',
  micros: [
    '● Antwort in 24–48h',
    '● Kein technisches Wissen nötig',
    '● Leipzig · Kunden in ganz DE',
  ],
} as const

// ─── Marquee ─────────────────────────────────────────────────────────────────

export type MarqueeItem = {
  label: string
  wp: boolean
}

export const MARQUEE_ITEMS: MarqueeItem[] = [
  { label: 'WordPress', wp: true },
  { label: 'Divi', wp: true },
  { label: 'WooCommerce', wp: true },
  { label: 'Amelia', wp: true },
  { label: 'Google', wp: false },
  { label: 'Stripe', wp: false },
  { label: 'Zoom', wp: false },
  { label: 'React', wp: false },
  { label: 'Next.js', wp: false },
  { label: 'TypeScript', wp: false },
  { label: 'Node.js', wp: false },
  { label: 'Tailwind CSS', wp: false },
  { label: 'GitHub', wp: false },
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
    id: 'wp-base',
    name: 'WP Base',
    price: 'ab 700 EUR',
    target: 'Kleine Unternehmen, Startups',
    features: [
      'WordPress + Divi',
      'Bis 5 Seiten',
      'Responsives Design',
      'Kontaktformular',
      'SSL',
    ],
    excluded: ['Buchungen', 'Zahlungen', 'Integrationen'],
  },
  {
    id: 'wp-premium',
    name: 'WP Premium',
    price: 'ab 900 EUR',
    target: 'Unternehmen mit eigenem Branding',
    features: [
      'Alles aus WP Base',
      'Individuelles Design',
      'Farbpalette + Typografie',
      'Amelia konfiguriert',
    ],
    excluded: ['Kalender/Zoom Integration', 'Stripe Zahlungen'],
    featured: true,
  },
  {
    id: 'wp-pro',
    name: 'WP Pro',
    price: 'ab 1.500 EUR',
    target: 'Vollständige Automatisierung',
    features: [
      'Alles aus WP Premium',
      'Google Calendar',
      'Zoom',
      'Stripe',
      'DSGVO-Grundlage',
      '3 Monate Support',
    ],
    excluded: [],
  },
  {
    id: 'web-app',
    name: 'Web App',
    price: 'ab 3.500 EUR',
    target: 'Maßgeschneiderte Plattformen',
    features: [
      'React / Next.js Frontend',
      'Backend + Auth',
      'Datenbank',
      'CRUD + Rollen',
      'Deploy',
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
  title: string
  type: string
  stack: string[]
  metrics: string[]
  gradient: string
}

export const PORTFOLIO_CASES: PortfolioCase[] = [
  {
    title: 'Psychotherapie Praxis',
    type: 'WordPress / Amelia Buchungen',
    stack: ['WordPress', 'Divi', 'Amelia', 'DSGVO'],
    metrics: ['Online buchbar 24/7', '3 Wochen Lieferzeit'],
    gradient: 'from-teal-900/60 to-emerald-900/40',
  },
  {
    title: 'Centro Estetica',
    type: 'WordPress / Amelia',
    stack: ['WordPress', 'Divi', 'Amelia'],
    metrics: ['+340% Buchungen', '2 Wochen Lieferzeit'],
    gradient: 'from-purple-900/60 to-pink-900/40',
  },
  {
    title: 'BioVital Store',
    type: 'WooCommerce',
    stack: ['WordPress', 'WooCommerce', 'Stripe'],
    metrics: ['2.400 EUR/Monat', '150+ Produkte'],
    gradient: 'from-green-900/60 to-teal-900/40',
  },
  {
    title: 'Inmobiliaria',
    type: 'WordPress / SEO',
    stack: ['WordPress', 'Divi', 'SEO'],
    metrics: ['+200 Leads/Monat', 'Top 3 Google'],
    gradient: 'from-orange-900/60 to-red-900/40',
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
    { value: 'wp-base', label: 'WP Base (ab 700 EUR)' },
    { value: 'wp-premium', label: 'WP Premium (ab 900 EUR)' },
    { value: 'wp-pro', label: 'WP Pro (ab 1.500 EUR)' },
    { value: 'web-app', label: 'Web App (ab 3.500 EUR)' },
    { value: 'support', label: 'Support / Wartung' },
    { value: 'other', label: 'Sonstiges / Anderes' },
  ],
  submitLabel: 'Nachricht senden →',
  successMessage:
    '✓ Nachricht gesendet! Ich melde mich innerhalb von 24–48 Stunden.',
  errorMessage:
    'Fehler beim Senden. Bitte versuchen Sie es erneut oder schreiben Sie direkt an info@devos-web.de',
} as const

// ─── Contact Form Schema ──────────────────────────────────────────────────────

export const contactSchema = z.object({
  name: z.string().min(1, 'Name ist erforderlich'),
  email: z.string().email('Ungültige E-Mail-Adresse'),
  package: z.string().min(1, 'Bitte wählen Sie ein Paket'),
  message: z
    .string()
    .min(20, 'Nachricht muss mindestens 20 Zeichen haben'),
  privacy: z.literal(true, {
    error: 'Bitte akzeptieren Sie die Datenschutzerklärung',
  }),
})

export type ContactFormData = z.infer<typeof contactSchema>

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
  tagline: 'Professionelle Webentwicklung · Leipzig, DE',
  copyright: '© 2026 DevOS Web · Leipzig · info@devos-web.de',
  vatNote: 'Alle Preise zzgl. gesetzlicher MwSt.',
  links: [
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Preise', href: '/#preise' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Kontakt', href: '/#kontakt' },
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
}

export const SUPPORT_PLANS: SupportPlan[] = [
  {
    id: 'monthly',
    name: 'Monatspflege',
    tagline: 'Flexibel, monatlich kündbar.',
    duration: '1 Monat',
    totalPrice: 99,
    perMonth: 99,
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
  submit: 'PDF kostenlos erhalten →',
  privacy: 'Kein Spam. Nur diese E-Mail. Abmeldung jederzeit.',
  successMessage: '✓ Danke! Das PDF ist auf dem Weg zu Ihnen.',
  errorMessage: 'Fehler. Bitte versuchen Sie es erneut.',
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
        name: 'WP Base',
        price: 'ab 700 EUR',
        features: ['WordPress + Divi', 'Bis 5 Seiten', 'Responsives Design', 'Kontaktformular', 'SSL'],
      },
      {
        name: 'WP Premium',
        price: 'ab 900 EUR',
        features: ['Alles aus WP Base', 'Individuelles Design', 'Farbpalette + Typografie', 'Amelia Buchungen'],
        featured: true,
      },
      {
        name: 'WP Pro',
        price: 'ab 1.500 EUR',
        features: ['Alles aus WP Premium', 'Google Calendar', 'Zoom', 'Stripe', 'DSGVO', '3 Monate Support'],
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
    tagline: 'Webentwickler · Leipzig, DE',
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
