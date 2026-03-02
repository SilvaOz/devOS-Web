import { z } from 'zod'

// ─── Navigation ─────────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Leistungen', href: '/leistungen' },
  { label: 'Preise', href: '/#preise' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Kontakt', href: '/#kontakt' },
] as const

export const NAV_CTA = 'Projekt starten →'

// ─── Hero ────────────────────────────────────────────────────────────────────

export const HERO = {
  badge: '● Verfügbar für neue Projekte · Leipzig, DE',
  h1Line1: 'Ihre professionelle',
  h1Line2: 'Website. Fertig.',
  subtitle:
    'Ich entwickle WordPress-Websites und digitale Plattformen für Unternehmen, die online wachsen wollen.',
  ctaPrimary: 'Projekt starten →',
  ctaGhost: 'Leistungen ansehen',
  micros: [
    '● Antwort in 24–48h',
    '● Leipzig, DE',
    '● Kunden in ganz DE',
  ],
} as const

// ─── Marquee ─────────────────────────────────────────────────────────────────

export type MarqueeItem = {
  label: string
  wp: boolean
}

export const MARQUEE_ITEMS: MarqueeItem[] = [
  { label: 'React', wp: false },
  { label: 'Next.js', wp: false },
  { label: 'WordPress', wp: true },
  { label: 'Divi', wp: true },
  { label: 'TypeScript', wp: false },
  { label: 'Node.js', wp: false },
  { label: 'WooCommerce', wp: true },
  { label: 'Amelia', wp: true },
  { label: 'PostgreSQL', wp: false },
  { label: 'Tailwind CSS', wp: false },
  { label: 'MongoDB', wp: false },
  { label: 'Stripe', wp: false },
  { label: 'Google', wp: false },
  { label: 'GitHub', wp: false },
  { label: 'Docker', wp: false },
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
    icon: '⚡',
    title: 'WordPress + Divi',
    description:
      'Professionelle, editierbare Websites. Ideal für Unternehmen, die online präsent sein wollen.',
    features: [
      'Responsives Design',
      'Vom Kunden editierbar',
      'Kontaktformulare',
      'SEO-Grundlagen',
      'Amelia Buchungen',
      'WooCommerce',
    ],
    cta: 'Preise ansehen →',
    featured: true,
  },
  {
    icon: '🔄',
    title: 'Automatisierungen',
    description:
      'Buchungen mit Amelia, Zahlungen, Google Calendar und Zoom.',
    features: [],
  },
  {
    icon: '🛠️',
    title: 'Full-Stack Entwicklung',
    description:
      'Maßgeschneiderte Web-Apps mit React und Node.js. Login, Rollen, Dashboard.',
    features: [],
  },
  {
    icon: '🔗',
    title: 'APIs & Integrationen',
    description:
      'Verbindung von WordPress mit CRMs, Zahlungsgateways und externen Systemen.',
    features: [],
  },
  {
    icon: '🛒',
    title: 'E-Commerce',
    description:
      'WooCommerce-Shops mit Zahlungsgateways und Lagerverwaltung.',
    features: [],
  },
  {
    icon: '⚙️',
    title: 'Performance',
    description:
      'Geschwindigkeitsoptimierung für WordPress. Core Web Vitals.',
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
    title: 'Brief',
    description: 'Wir definieren Ziele, Zielgruppe und Kernfunktionen.',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Wireframes und Mockups. Gemeinsame Überprüfung.',
  },
  {
    number: '03',
    title: 'Entwicklung',
    description: 'Sauberer Code, Best Practices, Tests.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Deployment, Domain, Schulung inklusive.',
  },
]

// ─── About ────────────────────────────────────────────────────────────────────

export const ABOUT = {
  label: 'WARUM ICH',
  h2: 'Technik, Klarheit und Verantwortung',
  paragraph:
    'Ich bin Webentwickler aus Leipzig mit Fokus auf WordPress und Full-Stack-Entwicklung. Ich liefere saubere, performante Websites – kein Aufwand für den Kunden, keine versteckten Kosten.',
  cta: 'Projekt anfragen →',
  points: [
    {
      icon: '🔒',
      title: 'DNS, SSL, SMTP',
      description: 'Professionelle Konfiguration.',
    },
    {
      icon: '⚙️',
      title: 'Echte Integrationen',
      description: 'Amelia, Google Calendar, Stripe, Zoom.',
    },
    {
      icon: '💬',
      title: 'DE / ES',
      description: 'Ich spreche Deutsch und Spanisch.',
    },
    {
      icon: '📍',
      title: 'Leipzig',
      description: 'Projekte für Kunden in DE und Europa.',
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
    title: 'NeoBank Dashboard',
    type: 'React / Node.js',
    stack: ['React', 'Node.js', 'PostgreSQL'],
    metrics: ['50ms Ladezeit', '99.9% Uptime'],
    gradient: 'from-blue-900/60 to-cyan-900/40',
  },
  {
    title: 'Inmobiliaria',
    type: 'WordPress',
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
  ibanPlaceholder: 'DE XX XXXX XXXX XXXX XXXX XX',
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

// ─── Newsletter ────────────────────────────────────────────────────────────────

export const NEWSLETTER = {
  label: 'KOSTENLOSES PDF',
  title: '10 Tipps für Ihre Website',
  description: 'Tragen Sie sich ein und erhalten Sie sofort Ihr kostenloses PDF — direkt in Ihr Postfach.',
  placeholder: 'ihre@email.de',
  submit: 'PDF erhalten →',
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
      { icon: '⚛️', title: 'React / Next.js', description: 'Modernes Frontend mit Server-Side Rendering und TypeScript.' },
      { icon: '🛠️', title: 'Backend + Auth', description: 'Node.js, PostgreSQL, sichere Authentifizierung und Rollen.' },
      { icon: '🔗', title: 'APIs & Integrationen', description: 'Stripe, CRMs, Zoom, Google Calendar und externe Systeme.' },
      { icon: '🚀', title: 'Deploy & DevOps', description: 'Vercel, Docker, CI/CD — sauber und wartbar.' },
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
      { icon: '📅', title: 'Amelia Buchungen', description: 'Online-Terminbuchung mit automatischen Bestätigungen.' },
      { icon: '🗓️', title: 'Google Calendar', description: 'Synchronisation mit Ihrem persönlichen Kalender.' },
      { icon: '🎥', title: 'Zoom Integration', description: 'Automatische Meeting-Links bei Online-Terminen.' },
      { icon: '💳', title: 'Stripe Zahlungen', description: 'Online-Bezahlung direkt bei der Buchung.' },
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
      { icon: '🔍', title: 'Klarheit', description: 'Kein Fachjargon. Klare Kommunikation, verständliche Angebote.' },
      { icon: '⚡', title: 'Performance', description: 'Schnelle Websites, sauberer Code, messbare Ergebnisse.' },
      { icon: '📢', title: 'Direktheit', description: 'Ich sage, was möglich ist und was nicht — ohne Umwege.' },
      { icon: '✅', title: 'Zuverlässigkeit', description: 'Deadlines werden eingehalten. Ich melde mich immer innerhalb 24h.' },
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
