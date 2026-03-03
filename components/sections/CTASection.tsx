export default function CTASection() {
  return (
    <section
      className="py-24 sm:py-32"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div
        className="max-w-3xl mx-auto px-4 sm:px-6 text-center"
        data-animate
      >
        <p
          className="text-xs font-mono font-semibold uppercase tracking-widest mb-4"
          style={{ color: 'var(--accent)' }}
        >
          BEREIT ZU STARTEN
        </p>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          style={{ color: 'var(--fg)' }}
        >
          Ihre Website wartet.
        </h2>
        <p
          className="text-lg sm:text-xl mb-10 max-w-xl mx-auto leading-relaxed"
          style={{ color: 'var(--muted)' }}
        >
          Schreiben Sie mir — ich antworte innerhalb von 24–48 Stunden.
          Kostenlose Erstberatung. Kein Vorschuss.
        </p>

        <a
          href="/#kontakt"
          className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-2xl transition-opacity duration-150 hover:opacity-90"
          style={{ background: 'var(--accent)', color: '#000' }}
        >
          Jetzt Projekt anfragen →
        </a>

        <div
          className="mt-10 flex flex-wrap justify-center gap-6 text-sm"
          style={{ color: 'var(--muted)' }}
        >
          <span>✓ Kostenlose Erstberatung</span>
          <span>✓ Angebot innerhalb 48h</span>
          <span>✓ Keine Vorauszahlung</span>
        </div>
      </div>
    </section>
  )
}
