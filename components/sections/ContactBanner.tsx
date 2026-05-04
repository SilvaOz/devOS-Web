export default function ContactBanner() {
  return (
    <section
      className="py-24 sm:py-32"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p
          className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
          style={{ color: 'var(--muted)' }}
        >
          Kontakt
        </p>
        <h2
          className="text-4xl sm:text-5xl font-extrabold mb-5"
          style={{ fontFamily: 'var(--font-serif)', color: 'var(--fg)' }}
        >
          Bereit für Ihr Projekt?
        </h2>
        <p
          className="text-base sm:text-lg mb-10"
          style={{ color: 'var(--muted)', lineHeight: '1.7' }}
        >
          Schreiben Sie mir — ich antworte innerhalb von 24–48 Stunden
          und wir besprechen, was ich für Sie tun kann.
        </p>
        <a href="/kontakt" className="btn-primary">
          Jetzt anfragen →
        </a>
      </div>
    </section>
  )
}
