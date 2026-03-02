import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'

const subscribeSchema = z.object({
  email: z.string().email('Ungültige E-Mail-Adresse'),
})

// In-memory rate limiter: 5 requests per hour per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return false
  }

  if (entry.count >= 5) return true

  entry.count++
  return false
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Zu viele Anfragen. Bitte versuchen Sie es später erneut.' },
      { status: 429 }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage.' }, { status: 400 })
  }

  const parsed = subscribeSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Ungültige E-Mail.' },
      { status: 422 }
    )
  }

  const { email } = parsed.data

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    // No API key configured — return success in development
    console.warn('[subscribe] RESEND_API_KEY not set, skipping email send.')
    return NextResponse.json({ success: true })
  }

  try {
    const resend = new Resend(apiKey)

    await resend.emails.send({
      from: 'DevOS Web <onboarding@resend.dev>',
      to: email,
      subject: '📄 Ihr kostenloses PDF: 10 Tipps für Ihre Website',
      html: `
        <h2>Danke für Ihr Interesse!</h2>
        <p>Hier ist Ihr kostenloses PDF: <strong>10 Tipps für Ihre Website</strong>.</p>
        <p><a href="${process.env.NEXT_PUBLIC_BASE_URL ?? 'https://devos-web.de'}/pdf/10-tipps-website.pdf">PDF herunterladen →</a></p>
        <hr/>
        <p style="color:#999;font-size:12px">
          DevOS Web · Leipzig · info@devos-web.de<br/>
          Sie erhalten diese E-Mail, weil Sie sich auf devos-web.de eingetragen haben.
        </p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[subscribe] Resend error:', err)
    return NextResponse.json(
      { error: 'E-Mail konnte nicht gesendet werden.' },
      { status: 500 }
    )
  }
}
