import { PROCESS_STEPS } from '@/lib/constants'

export default function ProcessSection() {
  return (
    <section
      id="prozess"
      className="py-20 sm:py-28"
      style={{ background: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="mb-14">
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-3"
            style={{ color: 'var(--accent)' }}
          >
            PROZESS
          </p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold"
            style={{ color: 'var(--fg)' }}
          >
            So arbeite ich
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {PROCESS_STEPS.map((step, index) => (
            <div key={step.number} className="relative flex flex-col gap-4">
              {/* Connector line (hidden on last item and mobile) */}
              {index < PROCESS_STEPS.length - 1 && (
                <div
                  className="hidden md:block absolute top-8 left-1/2 w-full h-px"
                  style={{
                    background:
                      'linear-gradient(to right, var(--border), transparent)',
                  }}
                  aria-hidden="true"
                />
              )}

              {/* Number */}
              <div
                className="text-5xl sm:text-6xl font-extrabold font-mono leading-none select-none"
                style={{
                  background:
                    'linear-gradient(135deg, var(--accent) 0%, rgba(255,215,0,0.3) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {step.number}
              </div>

              {/* Content */}
              <div>
                <h3
                  className="text-base font-bold mb-1"
                  style={{ color: 'var(--fg)' }}
                >
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
