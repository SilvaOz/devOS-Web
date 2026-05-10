import { PAYPAL_LINKS, type PayPalKey } from '@/lib/constants'

interface PayPalButtonProps {
  planId: PayPalKey
  label?: string
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function PayPalButton({
  planId,
  label = 'Jetzt buchen →',
  className = '',
  variant = 'primary',
}: PayPalButtonProps) {
  const url = PAYPAL_LINKS[planId]

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`paypal-btn paypal-btn-${variant} ${className}`}
    >
      {label}
      <span className="paypal-badge">via PayPal</span>
    </a>
  )
}
