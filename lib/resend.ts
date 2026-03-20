import { Resend } from 'resend'

// ─── Package lookup for confirmation emails ───────────────────────────────────

export const PACKAGE_INFO: Record<string, { name: string; price: string; features: string[] }> = {
  'express-24h': {
    name: 'Website Express 24h',
    price: 'ab 1.499 EUR',
    features: ['1-Page Landing Page', 'WordPress + Divi', 'Responsives Design', 'Kontaktformular', 'Grundlegendes SEO', '1 Revisionsrunde'],
  },
  'wp-base': {
    name: 'WP Base',
    price: 'ab 700 EUR',
    features: ['WordPress + Divi', 'Bis 5 Seiten', 'Responsives Design', 'Kontaktformular', 'SSL'],
  },
  'wp-premium': {
    name: 'WP Premium',
    price: 'ab 900 EUR',
    features: ['Alles aus WP Base', 'Individuelles Design', 'Farbpalette + Typografie', 'Amelia Buchungen'],
  },
  'wp-pro': {
    name: 'WP Pro',
    price: 'ab 1.500 EUR',
    features: ['Alles aus WP Premium', 'Google Calendar', 'Zoom', 'Stripe', 'DSGVO', '3 Monate Support'],
  },
  'web-app': {
    name: 'Web App',
    price: 'ab 3.500 EUR',
    features: ['React / Next.js Frontend', 'Backend + Auth', 'Datenbank', 'CRUD + Rollen', 'Deploy'],
  },
  'monthly': {
    name: 'Monatspflege',
    price: '99 EUR / Monat',
    features: ['WordPress & Plugin-Updates', 'Wöchentliches Backup', '1 Std. Änderungen/Monat', 'E-Mail-Support'],
  },
  'quarterly': {
    name: 'Quartalspflege',
    price: '249 EUR (3 Monate)',
    features: ['WordPress & Plugin-Updates', 'Wöchentliches Backup', '2 Std. Änderungen/Monat', 'Sicherheits-Monitoring'],
  },
  'annual': {
    name: 'Jahrespflege',
    price: '699 EUR (12 Monate)',
    features: ['Alles aus Quartalspflege', '3 Std. Änderungen/Monat', 'Tägliches Backup', 'Priorität: Antwort in 24h'],
  },
  'biennial': {
    name: '2-Jahres-Partner',
    price: '1.099 EUR (24 Monate)',
    features: ['Alles aus Jahrespflege', '4 Std. Änderungen/Monat', 'Priorität: Antwort in 12h', 'SEO-Check alle 6 Monate'],
  },
}

function getResend() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) throw new Error('RESEND_API_KEY is not configured')
  return new Resend(apiKey)
}

const FROM = 'DevOS Web <onboarding@resend.dev>' // → nach Domain-Verifizierung: info@devos-web.de

// ─── Email to Oscar ────────────────────────────────────────────────────────────

export async function sendContactEmail(data: {
  name: string
  email: string
  package: string
  message: string
  timing?: string
  invoiceNumber?: string
}) {
  const resend = getResend()
  const pkg = PACKAGE_INFO[data.package]

  return resend.emails.send({
    from: FROM,
    to: 'info@devos-web.de',
    replyTo: data.email,
    subject: `📩 Neue Anfrage: ${pkg?.name ?? data.package} — ${data.name}`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="color:#c2410c">Neue Projektanfrage</h2>
        <table style="width:100%;border-collapse:collapse">
          <tr><td style="padding:6px 0;color:#666;width:120px">Name</td><td style="padding:6px 0;font-weight:600">${data.name}</td></tr>
          <tr><td style="padding:6px 0;color:#666">E-Mail</td><td style="padding:6px 0"><a href="mailto:${data.email}">${data.email}</a></td></tr>
          <tr><td style="padding:6px 0;color:#666">Paket</td><td style="padding:6px 0;font-weight:600">${pkg?.name ?? data.package} · ${pkg?.price ?? ''}</td></tr>
          ${data.timing ? `<tr><td style="padding:6px 0;color:#666">Start</td><td style="padding:6px 0">${data.timing}</td></tr>` : ''}
          ${data.invoiceNumber ? `<tr><td style="padding:6px 0;color:#666">Rechnungsnummer</td><td style="padding:6px 0;font-weight:600;color:#c2410c">${data.invoiceNumber}</td></tr>` : ''}
        </table>
        <hr style="border:none;border-top:1px solid #eee;margin:16px 0"/>
        <p style="color:#666;font-size:13px;margin:0 0 6px">Projektbeschreibung:</p>
        <p style="background:#f5f5f5;padding:12px;border-radius:6px;font-size:14px">${data.message.replace(/\n/g, '<br/>')}</p>
        <p style="color:#999;font-size:11px;margin-top:20px">Gesendet über devos-web.de · Direkt antworten um Kontakt aufzunehmen.</p>
      </div>
    `,
  })
}

// ─── Confirmation email to client ─────────────────────────────────────────────

export async function sendConfirmationEmail(data: {
  name: string
  email: string
  package: string
}) {
  const resend = getResend()
  const pkg = PACKAGE_INFO[data.package]
  if (!pkg) return // unknown package, skip

  const featuresList = pkg.features
    .map(f => `<li style="padding:4px 0;color:#444">${f}</li>`)
    .join('')

  return resend.emails.send({
    from: FROM,
    to: data.email,
    replyTo: 'info@devos-web.de',
    subject: `Ihre Anfrage ist eingegangen — ${pkg.name} · DevOS Web`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1c1917">

        <div style="background:#f7f3ee;padding:32px;border-radius:12px;margin-bottom:24px">
          <p style="margin:0 0 4px;font-size:13px;color:#78716c;font-family:monospace;text-transform:uppercase;letter-spacing:2px">DevOS Web</p>
          <h1 style="margin:0 0 8px;font-size:24px;color:#1c1917">Vielen Dank, ${data.name}!</h1>
          <p style="margin:0;color:#78716c;font-size:15px">Ihre Anfrage ist eingegangen. Ich melde mich <strong>innerhalb von 24–48 Stunden</strong> mit einem offiziellen Angebot.</p>
        </div>

        <div style="border:1px solid #d4c9ba;border-radius:10px;padding:24px;margin-bottom:24px">
          <p style="margin:0 0 4px;font-size:11px;color:#78716c;font-family:monospace;text-transform:uppercase;letter-spacing:1.5px">Ihr gewähltes Paket</p>
          <div style="display:flex;align-items:baseline;gap:12px;margin:8px 0 16px">
            <span style="font-size:22px;font-weight:700;color:#1c1917">${pkg.name}</span>
            <span style="font-size:16px;font-weight:600;color:#c2410c">${pkg.price}</span>
          </div>
          <ul style="margin:0;padding-left:20px">
            ${featuresList}
          </ul>
        </div>

        <div style="background:#fff8f5;border:1px solid rgba(194,65,12,0.2);border-radius:10px;padding:20px;margin-bottom:24px">
          <p style="margin:0 0 12px;font-weight:600;color:#1c1917">Was passiert als Nächstes?</p>
          <div style="display:flex;flex-direction:column;gap:10px">
            <div style="display:flex;gap:12px;align-items:flex-start">
              <span style="background:#c2410c;color:#fff;font-size:11px;font-weight:700;padding:2px 7px;border-radius:999px;flex-shrink:0;margin-top:1px">1</span>
              <p style="margin:0;font-size:14px;color:#444">Ich prüfe Ihre Anfrage und bereite ein <strong>persönliches Angebot</strong> vor.</p>
            </div>
            <div style="display:flex;gap:12px;align-items:flex-start">
              <span style="background:#c2410c;color:#fff;font-size:11px;font-weight:700;padding:2px 7px;border-radius:999px;flex-shrink:0;margin-top:1px">2</span>
              <p style="margin:0;font-size:14px;color:#444">Sie erhalten das Angebot per E-Mail — mit Preisübersicht und nächsten Schritten.</p>
            </div>
            <div style="display:flex;gap:12px;align-items:flex-start">
              <span style="background:#c2410c;color:#fff;font-size:11px;font-weight:700;padding:2px 7px;border-radius:999px;flex-shrink:0;margin-top:1px">3</span>
              <p style="margin:0;font-size:14px;color:#444">Nach Ihrer Bestätigung starten wir gemeinsam mit dem Projekt.</p>
            </div>
          </div>
        </div>

        <p style="font-size:14px;color:#78716c">Fragen? Antworten Sie einfach auf diese E-Mail oder schreiben Sie direkt an <a href="mailto:info@devos-web.de" style="color:#c2410c">info@devos-web.de</a></p>

        <hr style="border:none;border-top:1px solid #e5e0d8;margin:24px 0"/>
        <p style="font-size:11px;color:#a8a29e;margin:0">DevOS Web · Leipzig, Deutschland · Gem. §19 UStG wird keine Umsatzsteuer berechnet.</p>
      </div>
    `,
  })
}

// ─── Invoice email to client (with PDF attachment) ────────────────────────────

export async function sendInvoiceEmail(data: {
  name: string
  email: string
  package: string
  invoiceNumber: string
  total: number
  dueAt: string
  pdfBase64: string
  filename: string
}) {
  const resend = getResend()
  const pkg = PACKAGE_INFO[data.package]

  const formattedTotal = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(data.total)

  const formattedDue = new Date(data.dueAt).toLocaleDateString('de-DE')

  return resend.emails.send({
    from: FROM,
    to: data.email,
    replyTo: 'info@devos-web.de',
    subject: `Ihr Angebot & Rechnung ${data.invoiceNumber} — ${pkg?.name ?? data.package} · DevOS Web`,
    attachments: [
      {
        filename: data.filename,
        content:  Buffer.from(data.pdfBase64, 'base64'),
      },
    ],
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1c1917">

        <div style="background:#f7f3ee;padding:32px;border-radius:12px;margin-bottom:24px">
          <p style="margin:0 0 4px;font-size:13px;color:#78716c;font-family:monospace;text-transform:uppercase;letter-spacing:2px">DevOS Web</p>
          <h1 style="margin:0 0 8px;font-size:24px;color:#1c1917">Vielen Dank, ${data.name}!</h1>
          <p style="margin:0;color:#78716c;font-size:15px">Im Anhang finden Sie Ihre Rechnung. Nach Zahlungseingang starten wir <strong>innerhalb von 24–48 Stunden</strong>.</p>
        </div>

        <div style="border:1px solid #d4c9ba;border-radius:10px;padding:24px;margin-bottom:24px">
          <p style="margin:0 0 16px;font-size:11px;color:#78716c;font-family:monospace;text-transform:uppercase;letter-spacing:1.5px">Rechnungsdetails</p>
          <table style="width:100%;border-collapse:collapse">
            <tr>
              <td style="padding:6px 0;color:#666;width:160px">Rechnungsnummer</td>
              <td style="padding:6px 0;font-weight:700;color:#1c1917">${data.invoiceNumber}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#666">Paket</td>
              <td style="padding:6px 0;font-weight:600">${pkg?.name ?? data.package}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#666">Betrag</td>
              <td style="padding:6px 0;font-weight:700;font-size:18px;color:#c2410c">${formattedTotal}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;color:#666">Zahlungsfrist</td>
              <td style="padding:6px 0;font-weight:600">${formattedDue}</td>
            </tr>
          </table>
        </div>

        <div style="background:#fff8f5;border:1px solid rgba(194,65,12,0.2);border-radius:10px;padding:20px;margin-bottom:24px">
          <p style="margin:0 0 8px;font-weight:600;color:#1c1917">Zahlung per Banküberweisung</p>
          <p style="margin:0;font-size:14px;color:#444">Bitte überweisen Sie den Betrag unter Angabe der Rechnungsnummer <strong>${data.invoiceNumber}</strong>. Die vollständigen Bankdaten finden Sie im PDF-Anhang.</p>
        </div>

        <div style="border:1px solid #e5e0d8;border-radius:10px;padding:20px;margin-bottom:24px">
          <p style="margin:0 0 8px;font-weight:600;color:#1c1917">📄 PDF-Rechnung im Anhang</p>
          <p style="margin:0;font-size:14px;color:#666">Die Datei <strong>${data.filename}</strong> enthält alle Pflichtangaben gemäß §14 UStG.</p>
        </div>

        <p style="font-size:14px;color:#78716c">Fragen? Antworten Sie einfach auf diese E-Mail oder schreiben Sie direkt an <a href="mailto:info@devos-web.de" style="color:#c2410c">info@devos-web.de</a></p>

        <hr style="border:none;border-top:1px solid #e5e0d8;margin:24px 0"/>
        <p style="font-size:11px;color:#a8a29e;margin:0">DevOS Web · Leipzig, Deutschland · Gem. §19 UStG wird keine Umsatzsteuer berechnet.</p>
      </div>
    `,
  })
}
