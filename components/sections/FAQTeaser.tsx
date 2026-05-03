import { FAQ_ITEMS } from '@/lib/constants'

export default function FAQTeaser() {
  const preview = FAQ_ITEMS.slice(0, 3)

  return (
    <section
      aria-labelledby="faq-teaser-title"
      className="py-16 border-t"
      style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 mb-8">
          <h2
            id="faq-teaser-title"
            className="text-xl font-extrabold"
            style={{ color: 'var(--fg)' }}
          >
            Häufige Fragen
          </h2>
          <a
            href="/faq"
            className="text-sm font-semibold whitespace-nowrap link-hover-accent"
          >
            Alle Fragen →
          </a>
        </div>

        <dl className="flex flex-col gap-6">
          {preview.map((item) => (
            <div key={item.question}>
              <dt className="text-sm font-semibold mb-1" style={{ color: 'var(--fg)' }}>
                {item.question}
              </dt>
              <dd className="text-sm" style={{ color: 'var(--muted)' }}>
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
