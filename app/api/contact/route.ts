import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/constants'
import { sendContactEmail, sendConfirmationEmail, sendInvoiceEmail, PACKAGE_INFO } from '@/lib/resend'

// Simple in-memory rate limiter (resets per serverless instance)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60 * 60 * 1000 // 1 hour
  const maxRequests = 3

  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (entry.count >= maxRequests) {
    return true
  }

  entry.count++
  return false
}

const WEBSITE_PACKAGES = ['express-24h', 'wp-base', 'wp-premium', 'wp-pro', 'web-app']

type InvoiceData = {
  invoiceNumber: string
  total: number
  dueAt: string
  pdfBase64: string
  filename: string
}

export async function POST(req: NextRequest) {
  // Get IP for rate limiting
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte später erneut versuchen.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validierungsfehler.', details: parsed.error.flatten() },
      { status: 422 }
    )
  }

  const { name, email, package: pkg, message, timing } = parsed.data

  // 1. If website package, call kleinunternehmer to create invoice
  let invoiceData: InvoiceData | null = null

  if (WEBSITE_PACKAGES.includes(pkg)) {
    const pkgInfo = PACKAGE_INFO[pkg]
    try {
      const res = await fetch(
        `${process.env.KLEINUNTERNEHMER_API_URL}/api/internal/angebot`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.INTERNAL_API_KEY!,
          },
          body: JSON.stringify({
            name,
            email,
            packageId:   pkg,
            packageName: pkgInfo?.name ?? pkg,
            description: message,
            timing,
          }),
        }
      )
      if (res.ok) {
        const json = await res.json()
        invoiceData = json as InvoiceData
      } else {
        console.error('[invoice-integration] kleinunternehmer returned', res.status)
      }
    } catch (err) {
      console.error('[invoice-integration] kleinunternehmer call failed:', err)
      // graceful degradation → invoiceData stays null
    }
  }

  try {
    // 2. Send emails
    await Promise.all([
      sendContactEmail({ name, email, package: pkg, message, timing, invoiceNumber: invoiceData?.invoiceNumber }),
      invoiceData
        ? sendInvoiceEmail({
            name,
            email,
            package:       pkg,
            invoiceNumber: invoiceData.invoiceNumber,
            total:         invoiceData.total,
            dueAt:         invoiceData.dueAt,
            pdfBase64:     invoiceData.pdfBase64,
            filename:      invoiceData.filename,
          })
        : sendConfirmationEmail({ name, email, package: pkg }),
    ])
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json(
      { error: 'E-Mail konnte nicht gesendet werden.' },
      { status: 500 }
    )
  }
}
