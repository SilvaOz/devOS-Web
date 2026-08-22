import { NextRequest, NextResponse } from 'next/server'
import { contactSchema, computePackageTotal, SUPPORT_PLANS } from '@/lib/constants'
import { sendContactEmail, sendConfirmationEmail, sendInvoiceEmail, PACKAGE_INFO } from '@/lib/resend'

// Simple in-memory rate limiter (resets per serverless instance)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

const RATE_LIMIT_MAX = parseInt(process.env.CONTACT_RATE_LIMIT_MAX ?? '3', 10)
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000 // 1 hora

function isRateLimited(ip: string): boolean {
  // En desarrollo o desde localhost nunca limitar
  if (process.env.NODE_ENV === 'development' || ip === '127.0.0.1' || ip === '::1') {
    return false
  }

  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return true
  }

  entry.count++
  return false
}

const WEBSITE_PACKAGES = ['express-24h', 'landing-page', 'wp-premium', 'wp-pro', 'web-app', 'praxis-digital', 'praxis-digital-design', 'startklar', 'wachstum']
const SUPPORT_PLAN_IDS = SUPPORT_PLANS.map(p => p.id)

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

  const { name, email, package: pkg, message, timing, pages, features, sections, contentReady, currentWebsite, companyName, street, zip, city, recommendedPackage } = parsed.data

  // 1. If website or support package, call kleinunternehmer to create invoice
  let invoiceData: InvoiceData | null = null

  if (WEBSITE_PACKAGES.includes(pkg) || SUPPORT_PLAN_IDS.includes(pkg)) {
    const pkgInfo = PACKAGE_INFO[pkg]
    try {
      // For support plans, price is fixed server-side — never trust client input
      let unitPrice: number
      if (SUPPORT_PLAN_IDS.includes(pkg)) {
        const plan = SUPPORT_PLANS.find(p => p.id === pkg)
        if (!plan) {
          return NextResponse.json({ error: 'Ungültiges Paket.' }, { status: 422 })
        }
        unitPrice = plan.totalPrice
      } else {
        unitPrice = computePackageTotal(pkg, features ?? [])
      }

      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 8000)
      const res = await fetch(
        `${process.env.KLEINUNTERNEHMER_API_URL}/api/internal/angebot`,
        {
          method: 'POST',
          signal: controller.signal,
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
            unitPrice,
            companyName,
            street,
            zip,
            city,
          }),
        }
      )
      clearTimeout(timeoutId)
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
      sendContactEmail({ name, email, package: pkg, message, timing, invoiceNumber: invoiceData?.invoiceNumber, pages, features, sections, contentReady, currentWebsite, recommendedPackage }),
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
