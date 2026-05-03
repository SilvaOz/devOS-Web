'use client'

import { useState } from 'react'

type Props = {
  planId: string
  label: string
  primary?: boolean
  ref?: string
}

export default function CheckoutButton({ planId, label, primary, ref: clientRef }: Props) {
  const [loading, setLoading] = useState(false)

  async function handleCheckout() {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ planId, ref: clientRef }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className="mt-auto inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold rounded border transition-opacity duration-150 disabled:opacity-60 cursor-pointer"
      style={
        primary
          ? { background: 'var(--accent)', color: '#fff', borderColor: 'var(--accent)' }
          : { background: 'transparent', color: 'var(--fg)', borderColor: 'var(--border)' }
      }
    >
      {loading ? 'Weiterleiten…' : label}
    </button>
  )
}
