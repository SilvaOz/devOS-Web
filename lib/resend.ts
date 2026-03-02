import { Resend } from 'resend'

export async function sendContactEmail(data: {
  name: string
  email: string
  package: string
  message: string
}) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }

  const resend = new Resend(apiKey)

  return resend.emails.send({
    from: 'DevOS Web <onboarding@resend.dev>', // cambiar al verificar dominio
    to: 'info@devos-web.de',
    replyTo: data.email,
    subject: `📩 Neue Anfrage: ${data.package} — ${data.name}`,
    html: `
      <h2>Neue Kontaktanfrage über DevOS Web</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>E-Mail:</strong> ${data.email}</p>
      <p><strong>Paket:</strong> ${data.package}</p>
      <hr/>
      <p><strong>Nachricht:</strong></p>
      <p>${data.message.replace(/\n/g, '<br/>')}</p>
      <hr/>
      <p style="color:#999;font-size:12px">Gesendet über devos-web.de</p>
    `,
  })
}
