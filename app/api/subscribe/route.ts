import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { Resend } from 'resend'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

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

    // Attach the PDF ebook if it exists in /public
    const pdfPath = join(process.cwd(), 'public', '10-tipps-website.pdf')
    const pdfExists = existsSync(pdfPath)
    const attachments = pdfExists
      ? [
          {
            filename: '10-Tipps-fuer-Ihre-Website-DevOS-Web.pdf',
            content: readFileSync(pdfPath),
          },
        ]
      : undefined

    await resend.emails.send({
      from: 'Oscar von DevOS Web <info@devos-web.de>',
      to: email,
      subject: 'Ihr kostenloser Leitfaden: 10 Tipps für Ihre Website',
      attachments,
      html: `
        <!DOCTYPE html>
        <html lang="de">
        <head><meta charset="UTF-8" /></head>
        <body style="margin:0;padding:0;background:#f4f4f4;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
            <tr><td align="center">
              <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;max-width:560px;">

                <!-- Header -->
                <tr>
                  <td style="background:#111111;padding:28px 36px;">
                    <span style="font-family:monospace;font-size:20px;font-weight:700;color:#f97316;">&gt;_</span>
                    <span style="font-size:18px;font-weight:600;color:#ffffff;margin-left:6px;">DevOS Web</span>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:36px 36px 28px;">
                    <h1 style="margin:0 0 16px;font-size:22px;font-weight:800;color:#111111;line-height:1.3;">
                      Ihr kostenloser Leitfaden ist hier! 🎉
                    </h1>
                    <p style="margin:0 0 16px;font-size:15px;color:#444444;line-height:1.6;">
                      Vielen Dank für Ihr Interesse — im Anhang finden Sie Ihren kostenlosen Leitfaden:
                    </p>
                    <div style="background:#fff8f5;border:1px solid #fde8d8;border-radius:8px;padding:16px 20px;margin-bottom:24px;">
                      <p style="margin:0;font-size:15px;font-weight:700;color:#2e7d7a;">
                        📄 10 Tipps für Ihre Website
                      </p>
                      <p style="margin:4px 0 0;font-size:13px;color:#666666;">
                        Was eine gute Website wirklich ausmacht — erklärt ohne Fachjargon.
                      </p>
                    </div>
                    <p style="margin:0 0 24px;font-size:14px;color:#555555;line-height:1.6;">
                      Darin erfahren Sie unter anderem:<br/>
                      <span style="color:#2e7d7a;">✓</span> Wie Sie bei Google gefunden werden — ohne Werbung<br/>
                      <span style="color:#2e7d7a;">✓</span> Warum Ladezeit direkt Kunden kostet<br/>
                      <span style="color:#2e7d7a;">✓</span> Die 5 häufigsten Fehler auf kleinen Unternehmenswebsites<br/>
                      <span style="color:#2e7d7a;">✓</span> Was eine Website wirklich kosten sollte<br/>
                      <span style="color:#2e7d7a;">✓</span> Wie Sie Ihre Seite selbst pflegen — ohne Programmierer
                    </p>
                    <p style="margin:0 0 8px;font-size:14px;color:#555555;line-height:1.6;">
                      Haben Sie Fragen zu Ihrer Website oder möchten Sie etwas verbessern?
                      Antworten Sie einfach auf diese E-Mail — ich helfe gern.
                    </p>
                    <p style="margin:0;font-size:14px;color:#555555;">
                      Herzliche Grüße,<br/>
                      <strong style="color:#111111;">Oscar</strong><br/>
                      <span style="color:#888888;font-size:12px;">DevOS Web · Leipzig</span>
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#f8f8f8;padding:20px 36px;border-top:1px solid #eeeeee;">
                    <p style="margin:0;font-size:11px;color:#999999;line-height:1.6;">
                      Sie erhalten diese E-Mail, weil Sie sich auf
                      <a href="https://devos-web.de" style="color:#2e7d7a;text-decoration:none;">devos-web.de</a>
                      eingetragen haben.<br/>
                      DevOS Web · Oscar · Leipzig · info@devos-web.de
                    </p>
                  </td>
                </tr>

              </table>
            </td></tr>
          </table>
        </body>
        </html>
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
