import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/constants'
import { sendContactEmail } from '@/lib/resend'

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

  const { name, email, package: pkg, message } = parsed.data

  try {
    await sendContactEmail({ name, email, package: pkg, message })
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('Resend error:', err)
    return NextResponse.json(
      { error: 'E-Mail konnte nicht gesendet werden.' },
      { status: 500 }
    )
  }
}
