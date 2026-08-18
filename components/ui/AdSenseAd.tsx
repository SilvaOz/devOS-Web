'use client'

import { useEffect, useRef, useState } from 'react'
import { CONSENT_KEY } from './CookieConsent'

const CLIENT = 'ca-pub-7730346462920964'

type AdFormat = 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal'

interface AdSenseAdProps {
  slot: string
  format?: AdFormat
  className?: string
  style?: React.CSSProperties
}

declare global {
  interface Window {
    adsbygoogle: unknown[]
  }
}

export function AdSenseAd({ slot, format = 'auto', className, style }: AdSenseAdProps) {
  const [consented, setConsented] = useState(false)
  const pushed = useRef(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (consent === 'accepted') setConsented(true)
  }, [])

  useEffect(() => {
    if (!consented || pushed.current) return
    try {
      pushed.current = true
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    } catch {
      // AdSense not yet loaded
    }
  }, [consented])

  // Don't render if no consent or in dev without consent
  if (!consented) return null

  return (
    <div className={className} style={{ overflow: 'hidden', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={CLIENT}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
