import { MARQUEE_ITEMS } from '@/lib/constants'

export default function MarqueeSection() {
  // Duplicate items to create seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section
      className="py-6 overflow-hidden border-y"
      style={{
        background: 'var(--bg-elevated)',
        borderColor: 'var(--border)',
      }}
      aria-label="Technologie-Stack"
    >
      <div className="flex">
        <ul
          className="marquee-track flex items-center gap-10 whitespace-nowrap"
          aria-hidden="true"
        >
          {items.map((item, i) => (
            <li
              key={`${item.label}-${i}`}
              className="flex items-center gap-2 text-sm font-mono font-medium select-none"
              style={{
                color: item.wp ? 'var(--accent-wp)' : 'var(--muted)',
              }}
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{
                  background: item.wp ? 'var(--accent-wp)' : 'var(--border)',
                }}
              />
              {item.label}
            </li>
          ))}
        </ul>
        {/* Duplicate track for seamless loop */}
        <ul
          className="marquee-track flex items-center gap-10 whitespace-nowrap"
          aria-hidden="true"
        >
          {items.map((item, i) => (
            <li
              key={`dup-${item.label}-${i}`}
              className="flex items-center gap-2 text-sm font-mono font-medium select-none"
              style={{
                color: item.wp ? 'var(--accent-wp)' : 'var(--muted)',
              }}
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{
                  background: item.wp ? 'var(--accent-wp)' : 'var(--border)',
                }}
              />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
