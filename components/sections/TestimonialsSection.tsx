import AnimatedTestimonials from '@/components/ui/AnimatedTestimonials'

export default function TestimonialsSection() {
  return (
    <section
      id="stimmen"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg-elevated)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header — same style as all other sections */}
        <div className="mb-16">
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent)' }}
          >
            KUNDENSTIMMEN
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: 'var(--fg)' }}
          >
            Was meine Kunden sagen
          </h2>
        </div>

        {/* Animated stacked carousel — large photos */}
        <AnimatedTestimonials />

        {/* Footer note */}
        <p className="mt-14 text-xs" style={{ color: 'var(--muted)' }}>
          Namen abgekürzt zum Schutz der Privatsphäre.{' '}
          <a href="/#kontakt" className="link-hover-accent font-semibold">
            Fragen Sie mich nach Referenzen →
          </a>
        </p>

      </div>
    </section>
  )
}
