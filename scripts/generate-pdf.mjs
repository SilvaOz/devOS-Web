/**
 * scripts/generate-pdf.mjs
 * Erzeugt den Lead-Magnet „10 Tipps für Ihre Website" als professionelles PDF.
 *
 * Ausführen:
 *   node scripts/generate-pdf.mjs
 *
 * Ausgabe: public/10-tipps-website.pdf
 */

import PDFDocument from 'pdfkit'
import { createWriteStream, mkdirSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT   = join(__dirname, '..')
const OUTPUT = join(ROOT, 'public', '10-tipps-website.pdf')

mkdirSync(join(ROOT, 'public'), { recursive: true })

// ── Markenfarben DevOS ────────────────────────────────────────────────────────
const ANTHRAZIT = '#2E2D2A'
const ORANGE    = '#F4531E'
const CREME     = '#F7F6F3'
const MUTED     = '#6B6A67'
const BORDER    = '#D9D8D5'
const HIGHLIGHT = '#FFF4EF'
const WHITE     = '#FFFFFF'

// ── Seitenlayout (A4 in Punkten) ─────────────────────────────────────────────
const W  = 595.28
const H  = 841.89
const M  = 54          // Rand links/rechts
const CW = W - M * 2   // Nutzbreite

// ── Dokument erstellen ────────────────────────────────────────────────────────
const doc = new PDFDocument({
  size: 'A4',
  autoFirstPage: false,
  info: {
    Title:    '10 Tipps für Ihre Website',
    Author:   'DevOS Web',
    Subject:  'Websitetipps ohne Fachjargon für kleine Unternehmen und Praxen',
    Keywords: 'Website, SEO, Ladezeit, Webdesign, DSGVO',
    Creator:  'DevOS Web · devos-web.de',
  },
})

const out = createWriteStream(OUTPUT)
doc.pipe(out)

let pageNum = 0

// ── Hilfsfunktionen ───────────────────────────────────────────────────────────

function newPage(bg) {
  pageNum++
  doc.addPage()
  if (bg) doc.rect(0, 0, W, H).fill(bg)
}

function footer() {
  const fy = H - 42
  doc.save()
  doc.moveTo(M, fy - 6).lineTo(W - M, fy - 6).strokeColor(BORDER).lineWidth(0.5).stroke()
  doc.font('Helvetica').fontSize(8).fillColor(MUTED)
  doc.text('DevOS Web · devos-web.de', M, fy, { lineBreak: false })
  doc.text(`Seite ${pageNum}`, M, fy, { width: CW, align: 'right', lineBreak: false })
  doc.restore()
}

function accentLine(y, color = ORANGE, width = CW) {
  doc.rect(M, y, width, 3).fill(color)
}

function chapterStart(num, title, subtitle) {
  newPage()
  accentLine(M)
  doc.font('Helvetica-Bold').fontSize(9).fillColor(ORANGE)
     .text(`TIPP ${num} VON 5`, M, M + 14)
  doc.font('Helvetica-Bold').fontSize(22).fillColor(ANTHRAZIT)
     .text(title, M, M + 28, { width: CW })
  const titleBottom = doc.y
  if (subtitle) {
    doc.font('Helvetica').fontSize(11).fillColor(MUTED)
       .text(subtitle, M, titleBottom + 4, { width: CW })
  }
  const sepY = doc.y + 14
  doc.rect(M, sepY, CW, 0.75).fill(BORDER)
  return sepY + 18
}

function sectionTitle(text, y) {
  doc.font('Helvetica-Bold').fontSize(11).fillColor(ORANGE)
     .text(text, M, y, { width: CW })
  return doc.y + 5
}

function paragraph(text, y) {
  doc.font('Helvetica').fontSize(10.5).fillColor(ANTHRAZIT)
     .text(text, M, y, { width: CW, lineGap: 2.5 })
  return doc.y + 9
}

function bulletList(items, y) {
  for (const item of items) {
    doc.font('Helvetica-Bold').fontSize(10.5).fillColor(ORANGE)
       .text('•', M, y, { width: 12, lineBreak: false })
    doc.font('Helvetica').fontSize(10.5).fillColor(ANTHRAZIT)
       .text(item, M + 14, y, { width: CW - 14, lineGap: 2 })
    y = doc.y + 5
  }
  return y + 4
}

function highlightBox(label, text, y) {
  // Höhe berechnen
  doc.font('Helvetica').fontSize(10)
  const textH = doc.heightOfString(text, { width: CW - 22 })
  const boxH  = 14 + 16 + textH + 14  // top-pad + label-row + text + bottom-pad
  doc.rect(M, y, CW, boxH).fill(HIGHLIGHT)
  doc.rect(M, y, 3, boxH).fill(ORANGE)
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(ORANGE)
     .text(label, M + 12, y + 14)
  doc.font('Helvetica').fontSize(10).fillColor(ANTHRAZIT)
     .text(text, M + 12, y + 30, { width: CW - 22, lineGap: 2 })
  return y + boxH + 14
}

// ─────────────────────────────────────────────────────────────────────────────
// DECKBLATT
// ─────────────────────────────────────────────────────────────────────────────
newPage(CREME)

// Oranger Balken oben
doc.rect(0, 0, W, 10).fill(ORANGE)

// Marke oben links
doc.font('Helvetica-Bold').fontSize(12).fillColor(ANTHRAZIT).text('DevOS Web', M, 26)
doc.font('Helvetica').fontSize(9).fillColor(MUTED).text('devos-web.de', M, 42)

// Oranger Akzent-Strich links am Titel
doc.rect(M, 118, 4, 190).fill(ORANGE)

// Haupttitel
doc.font('Helvetica-Bold').fontSize(46).fillColor(ANTHRAZIT)
doc.text('10 Tipps', M + 20, 118)
doc.text('für Ihre',  M + 20, 170)
doc.text('Website',   M + 20, 222)

// Untertitel
doc.font('Helvetica').fontSize(22).fillColor(ORANGE).text('ohne Fachjargon', M + 20, 278)

// Tagline
doc.font('Helvetica').fontSize(12).fillColor(MUTED)
   .text(
     'Ein kostenloser Leitfaden für kleine Unternehmen,\nTherapeut:innen und Heilpraktiker:innen im DACH-Raum.',
     M + 20, 316, { width: CW * 0.76, lineGap: 4 }
   )

// Trennlinie
doc.rect(M, 398, CW, 0.75).fill(BORDER)

// Inhaltsliste
doc.font('Helvetica-Bold').fontSize(8.5).fillColor(MUTED).text('IN DIESEM LEITFADEN', M, 412)

const coverTopics = [
  'Wie Sie bei Google gefunden werden — ohne Werbung',
  'Warum Ladezeit direkt Kunden und Buchungen kostet',
  'Die 5 häufigsten Fehler auf kleinen Unternehmenswebsites',
  'Was eine Website wirklich kosten sollte (und was nicht)',
  'Wie Sie Ihre Seite selbst pflegen — ohne Programmierer',
]
let ty = 430
for (let i = 0; i < coverTopics.length; i++) {
  doc.font('Helvetica-Bold').fontSize(10).fillColor(ORANGE)
     .text(`${i + 1}.`, M, ty, { width: 16, lineBreak: false })
  doc.font('Helvetica').fontSize(10).fillColor(ANTHRAZIT)
     .text(coverTopics[i], M + 20, ty, { width: CW - 20, lineBreak: false })
  ty += 23
}

// Unterer Balken
doc.rect(0, H - 10, W, 10).fill(ORANGE)
doc.font('Helvetica').fontSize(8).fillColor(MUTED)
   .text('© DevOS Web · devos-web.de · Kostenloser Leitfaden', M, H - 30)

// ─────────────────────────────────────────────────────────────────────────────
// TIPP 1 — Wie Sie bei Google gefunden werden
// ─────────────────────────────────────────────────────────────────────────────
let y = chapterStart(
  1,
  'Wie Sie bei Google gefunden\nwerden — ohne Werbung',
  'Lokale Suchmaschinenoptimierung (SEO) für Einsteiger'
)

y = paragraph(
  'Viele kleine Unternehmen denken, dass Google-Sichtbarkeit automatisch teure Werbung bedeutet. Das stimmt nicht. Mit einigen gezielten Maßnahmen können Sie organisch — also kostenlos — gefunden werden, genau von den Menschen in Ihrer Region.',
  y
)

y = sectionTitle('Das Wichtigste: Ihr Google Unternehmensprofil', y)
y = paragraph(
  'Das Google Unternehmensprofil (früher Google My Business) ist Ihr wichtigstes lokales Aushängeschild — kostenlos, einfach einzurichten und sehr wirkungsvoll. Achten Sie auf:',
  y
)
y = bulletList([
  'Vollständige Adresse, Öffnungszeiten und Telefonnummer eintragen',
  'Fotos von Ihrer Praxis, Ihrem Betrieb oder Ihren Leistungen hinzufügen',
  'Kurze, klare Beschreibung Ihrer Angebote verfassen',
  'Aktiv auf Bewertungen antworten — auch auf kritische, freundlich und sachlich',
], y)

y = sectionTitle('Die richtigen Suchbegriffe auf Ihrer Website', y)
y = paragraph(
  'Denken Sie so, wie Ihre Kunden denken. Nicht nur „Therapeutin", sondern „Physiotherapeutin Leipzig Schleußig" oder „Rückenschmerzen Behandlung München". Verwenden Sie solche Begriffe natürlich in Ihren Texten — in Überschriften, auf der Startseite und im Über-uns-Bereich.',
  y
)

y = highlightBox(
  'PRAXIS-TIPP',
  'Bitten Sie zufriedene Kunden aktiv um eine Google-Bewertung. Schicken Sie ihnen einfach den direkten Link zu Ihrem Profil per WhatsApp oder E-Mail. Schon 10–15 gute Bewertungen machen einen spürbaren Unterschied in den Suchergebnissen.',
  y
)

footer()

// ─────────────────────────────────────────────────────────────────────────────
// TIPP 2 — Warum Ladezeit direkt Kunden kostet
// ─────────────────────────────────────────────────────────────────────────────
y = chapterStart(
  2,
  'Warum Ladezeit direkt Kunden\nund Buchungen kostet',
  'Schnelle Websites gewinnen — langsame verlieren'
)

y = paragraph(
  'Studien zeigen: 53 % der mobilen Nutzer verlassen eine Website, wenn sie länger als 3 Sekunden lädt. Das bedeutet: Eine langsame Website kostet Sie potenzielle Kunden — noch bevor diese überhaupt erfahren, was Sie anbieten.',
  y
)

y = sectionTitle('Die häufigsten Ursachen für langsame Seiten', y)
y = bulletList([
  'Bilder zu groß: Ein 4-MB-Foto bremst die Seite massiv — 200 KB reichen völlig aus',
  'Günstiges Hosting ohne ausreichende Serverleistung',
  'Zu viele unnötige Plugins oder Skripte (typisch bei WordPress)',
  'Kein Caching eingerichtet — die Seite wird bei jedem Besuch neu aufgebaut',
], y)

y = sectionTitle('Konkrete Maßnahmen — sofort umsetzbar', y)
y = bulletList([
  'Bilder vor dem Upload komprimieren — kostenlos mit TinyPNG.com oder Squoosh.app',
  'Bilder wenn möglich im modernen WebP-Format speichern statt JPG oder PNG',
  'Bei WordPress: nur die unbedingt notwendigen Plugins installieren',
  'Hosting-Anbieter wechseln, wenn die Seite chronisch langsam ist (z. B. zu All-Inkl oder Hetzner)',
], y)

y = highlightBox(
  'SO TESTEN SIE IHRE LADEZEIT',
  'Gehen Sie auf pagespeed.web.dev und geben Sie Ihre Website-Adresse ein. Google zeigt Ihnen in Sekunden, wie schnell Ihre Seite lädt und welche konkreten Verbesserungen möglich wären — kostenlos, ohne technisches Wissen.',
  y
)

footer()

// ─────────────────────────────────────────────────────────────────────────────
// TIPP 3 — Die 5 häufigsten Fehler
// ─────────────────────────────────────────────────────────────────────────────
y = chapterStart(
  3,
  'Die 5 häufigsten Fehler auf\nkleinen Unternehmenswebsites',
  'Was Besucher frustriert — und wie Sie es besser machen'
)

y = paragraph(
  'Diese fünf Fehler begegnen mir immer wieder, wenn ich Websites kleiner Unternehmen und Praxen analysiere. Die gute Nachricht: Alle sind behebbar.',
  y
)

const errors = [
  ['Kein klarer Handlungsaufruf (Call-to-Action)',
   'Jede Seite sollte Besucher zu einer klaren nächsten Handlung führen: „Termin buchen", „Angebot anfragen" oder „Jetzt anrufen". Ohne das schaut der Besucher — und geht wieder.'],
  ['Veraltete Informationen',
   'Alte Preise, überholte Öffnungszeiten oder nicht mehr angebotene Leistungen zerstören Vertrauen sofort. Planen Sie einmal im Quartal 30 Minuten für die Pflege ein.'],
  ['Nicht mobil-optimiert',
   'Über 60 % der Website-Besucher kommen heute vom Smartphone. Eine Seite, die auf dem Handy schlecht aussieht, verliert diese Besucher sofort.'],
  ['Fehlendes Impressum oder veralteter Datenschutz',
   'In Deutschland ist ein vollständiges Impressum gesetzlich Pflicht — ebenso eine aktuelle Datenschutzerklärung nach DSGVO. Beides prüfen und aktuell halten.'],
  ['Unklare Kontaktmöglichkeit',
   'Telefonnummer, E-Mail oder Kontaktformular sollten auf jeder Seite leicht erreichbar sein — am besten direkt im Header oder in der Navigation.'],
]

let ey = y
for (let i = 0; i < errors.length; i++) {
  const [title, desc] = errors[i]
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(ANTHRAZIT)
     .text(`${i + 1}. ${title}`, M, ey, { width: CW })
  ey = doc.y + 2
  doc.font('Helvetica').fontSize(10).fillColor(MUTED)
     .text(desc, M + 8, ey, { width: CW - 8, lineGap: 2 })
  ey = doc.y + 9
}

footer()

// ─────────────────────────────────────────────────────────────────────────────
// TIPP 4 — Was eine Website kosten sollte
// ─────────────────────────────────────────────────────────────────────────────
y = chapterStart(
  4,
  'Was eine Website wirklich kosten\nsollte (und was nicht)',
  'Transparenz über Preise, Optionen und versteckte Kosten'
)

y = paragraph(
  'Bei Website-Preisen gibt es eine enorme Spanne — von kostenlos bis mehrere tausend Euro. Hier ist ein ehrlicher Überblick, damit Sie einschätzen können, was für Ihr Unternehmen sinnvoll ist.',
  y
)

y = sectionTitle('Die drei Hauptoptionen im Überblick', y)

const opts = [
  ['Baukästen (Wix, Jimdo, Squarespace)',
   'Schnell einsetzbar, monatliche Kosten 10–25 EUR. Gut für sehr einfache Seiten. Einschränkungen bei Design, Funktionen und langfristiger Flexibilität.'],
  ['WordPress (selbst gehostet)',
   'Flexibler, mehr Kontrolle. Hosting ab 5–15 EUR/Monat. Erfordert etwas technisches Grundwissen oder Pflege-Unterstützung. Sehr verbreitet und erweiterbar.'],
  ['Individuelle Entwicklung / Fachmann',
   'Für professionelle Ergebnisse mit klaren Anforderungen. Einmalige Investition ab ca. 800–2.000 EUR. Dafür bekommen Sie etwas, das wirklich zu Ihrem Unternehmen passt.'],
]

let oy = y
for (const [title, desc] of opts) {
  doc.font('Helvetica-Bold').fontSize(10.5).fillColor(ORANGE)
     .text('→  ' + title, M, oy, { width: CW })
  oy = doc.y + 3
  doc.font('Helvetica').fontSize(10).fillColor(MUTED)
     .text(desc, M + 10, oy, { width: CW - 10, lineGap: 2 })
  oy = doc.y + 10
}

y = oy + 2
y = highlightBox(
  'WORAUF SIE ACHTEN SOLLTEN',
  'Hüten Sie sich vor sehr günstigen Angeboten ohne klaren Leistungsumfang. Fragen Sie immer: Was ist inklusive? Wer pflegt die Seite später? Habe ich Zugang zu meiner eigenen Domain und meinen Daten?',
  y
)

footer()

// ─────────────────────────────────────────────────────────────────────────────
// TIPP 5 — Wie Sie Ihre Seite selbst pflegen
// ─────────────────────────────────────────────────────────────────────────────
y = chapterStart(
  5,
  'Wie Sie Ihre Seite selbst pflegen\n— ohne Programmierer',
  'Einfache Schritte, die jeder meistern kann'
)

y = paragraph(
  'Eine Website ist kein Einmalprodukt — sie muss gepflegt werden. Aber das bedeutet nicht, dass Sie ständig einen Experten brauchen. Für die meisten alltäglichen Aufgaben können Sie selbst sorgen.',
  y
)

y = sectionTitle('Was Sie selbst problemlos erledigen können', y)
y = bulletList([
  'Texte aktualisieren: Preise, Leistungen, Öffnungszeiten anpassen',
  'Neue Fotos hochladen und veraltete ersetzen',
  'Blog-Beiträge oder Neuigkeiten veröffentlichen',
  'Das Kontaktformular alle paar Monate mit einer Test-Nachricht prüfen',
], y)

y = sectionTitle('Was regelmäßig im Hintergrund laufen sollte', y)
y = bulletList([
  'WordPress und Plugins stets aktuell halten — das ist der wichtigste Sicherheitsschutz',
  'Automatische Backups einrichten, z. B. täglich oder wöchentlich',
  'SSL-Zertifikat (das „https://") einmal jährlich auf Gültigkeit prüfen',
], y)

y = sectionTitle('Wann sich professionelle Unterstützung lohnt', y)
y = paragraph(
  'Für technische Änderungen, größere Design-Updates oder wenn etwas kaputt geht, ist professionelle Hilfe sinnvoll. Ein gutes Pflege-Paket nimmt Ihnen diese Aufgaben ab — zu einem festen Monatsbetrag, ohne Überraschungen.',
  y
)

y = highlightBox(
  'DEVOS WEB — PERSÖNLICHE WEBSITEBETREUUNG',
  'Ich betreue kleine Unternehmen und Praxen im DACH-Raum mit ehrlicher, verständlicher Website-Arbeit — ohne Fachjargon, ohne Versteckkosten. Besuchen Sie devos-web.de für ein kostenloses Erstgespräch.',
  y
)

footer()

// ─────────────────────────────────────────────────────────────────────────────
// ABSCHLUSSSEITE — Nächste Schritte
// ─────────────────────────────────────────────────────────────────────────────
newPage(CREME)

// Oberer Balken
doc.rect(0, 0, W, 10).fill(ORANGE)

// Überschrift
doc.font('Helvetica-Bold').fontSize(30).fillColor(ANTHRAZIT)
   .text('Nächste Schritte', M, 68, { align: 'center', width: CW })

doc.font('Helvetica').fontSize(12.5).fillColor(MUTED)
   .text(
     'Sie haben jetzt einen soliden Überblick, worauf es bei einer guten Website ankommt.\nHier ist, was Sie als Nächstes tun können:',
     M, 114, { align: 'center', width: CW, lineGap: 4 }
   )

const steps = [
  {
    nr: '1',
    title: 'Eigene Website prüfen',
    desc:  'Gehen Sie die 5 Tipps durch und schauen Sie ehrlich, wo bei Ihrer Website Verbesserungspotenzial steckt.',
  },
  {
    nr: '2',
    title: 'Ladezeit testen',
    desc:  'Öffnen Sie pagespeed.web.dev, geben Sie Ihre Adresse ein und lesen Sie die Ergebnisse — kostenlos, 2 Minuten.',
  },
  {
    nr: '3',
    title: 'Google Profil einrichten',
    desc:  'Falls noch nicht vorhanden: business.google.com aufrufen, Profil anlegen, Fotos hochladen und Öffnungszeiten eintragen.',
  },
  {
    nr: '4',
    title: 'Kostenloses Erstgespräch',
    desc:  'Wenn Sie konkrete Unterstützung möchten, sprechen wir gerne: devos-web.de — kein Druck, kein Fachjargon.',
  },
]

let sy = 192
for (const step of steps) {
  // Karte
  doc.rect(M, sy, CW, 62).fill(WHITE)
  doc.rect(M, sy, 3, 62).fill(ORANGE)
  // Nummer
  doc.font('Helvetica-Bold').fontSize(22).fillColor(ORANGE)
     .text(step.nr, M + 14, sy + 14, { lineBreak: false })
  // Titel
  doc.font('Helvetica-Bold').fontSize(11).fillColor(ANTHRAZIT)
     .text(step.title, M + 42, sy + 14, { lineBreak: false })
  // Beschreibung
  doc.font('Helvetica').fontSize(9.5).fillColor(MUTED)
     .text(step.desc, M + 42, sy + 30, { width: CW - 52, lineGap: 2 })
  sy += 72
}

// Signatur
doc.font('Helvetica').fontSize(11).fillColor(MUTED)
   .text('Herzliche Grüße aus Leipzig,', M, sy + 16, { align: 'center', width: CW })
doc.font('Helvetica-Bold').fontSize(13).fillColor(ANTHRAZIT)
   .text('Oscar · DevOS Web', M, sy + 34, { align: 'center', width: CW })

// Unterer Balken
doc.rect(0, H - 10, W, 10).fill(ORANGE)
doc.font('Helvetica-Bold').fontSize(11).fillColor(ANTHRAZIT)
   .text('devos-web.de', M, H - 36, { align: 'center', width: CW })
doc.font('Helvetica').fontSize(8.5).fillColor(MUTED)
   .text('DevOS Web · info@devos-web.de · Leipzig', M, H - 22, { align: 'center', width: CW })

// ─────────────────────────────────────────────────────────────────────────────
// PDF abschließen
// ─────────────────────────────────────────────────────────────────────────────
doc.end()

out.on('finish', () => {
  console.log(`✅  PDF erstellt: ${OUTPUT}`)
  console.log(`    Seiten: ${pageNum}`)
  console.log(`    Bereit zum Testen: Formular ausfüllen → E-Mail mit PDF-Anhang.`)
})

out.on('error', err => {
  console.error('❌  Fehler beim Schreiben:', err)
  process.exit(1)
})
