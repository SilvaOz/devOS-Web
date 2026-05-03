// Swap this component with <Image src="/tu-foto.jpg" ...> when you have a photo

type Props = {
  name?: string
  ratio?: string
  className?: string
}

export default function PersonPlaceholder({ name = 'Oscar', ratio = '4/5', className = '' }: Props) {
  return (
    <div
      className={className}
      aria-hidden="true"
      style={{
        aspectRatio: ratio,
        background: 'var(--card)',
        border: '1.5px dashed var(--border)',
        borderRadius: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.25rem',
        padding: '2rem',
        width: '100%',
      }}
    >
      {/* Person silhouette */}
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <circle cx="40" cy="26" r="18" fill="var(--border)" />
        <ellipse cx="40" cy="74" rx="30" ry="22" fill="var(--border)" />
      </svg>

      {/* Label */}
      <div style={{ textAlign: 'center' }}>
        <p style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--fg)' }}>
          {name}
        </p>
        <p
          style={{
            fontSize: '0.7rem',
            fontFamily: 'var(--font-jetbrains), monospace',
            color: 'var(--muted)',
            marginTop: '0.3rem',
            letterSpacing: '0.05em',
          }}
        >
          Foto folgt bald
        </p>
      </div>
    </div>
  )
}
