import { PORTFOLIO_CASES } from '@/lib/constants'

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-12">
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent)' }}
          >
            PORTFOLIO
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: 'var(--fg)' }}
          >
            Echte Projekte
          </h2>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {PORTFOLIO_CASES.map((project) => (
            <div
              key={project.title}
              className="rounded-xl border overflow-hidden card-hover"
              style={{ background: 'var(--card)' }}
            >
              {/* Gradient placeholder */}
              <div
                className={`h-36 sm:h-44 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                <span
                  className="text-3xl font-extrabold font-mono opacity-20"
                  style={{ color: 'var(--fg)' }}
                >
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col gap-3">
                <div>
                  <h3
                    className="text-base font-bold mb-0.5"
                    style={{ color: 'var(--fg)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs" style={{ color: 'var(--muted)' }}>
                    {project.type}
                  </p>
                </div>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2 py-0.5 rounded border"
                      style={{
                        background: 'var(--bg-elevated)',
                        color: 'var(--muted)',
                        borderColor: 'var(--border)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div
                  className="flex flex-wrap gap-4 pt-2 border-t"
                  style={{ borderColor: 'var(--border)' }}
                >
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="text-sm font-semibold"
                      style={{ color: 'var(--accent)' }}
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
