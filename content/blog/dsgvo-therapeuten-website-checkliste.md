---
title: "DSGVO für Therapeuten-Websites: Die Checkliste 2026"
description: "Was muss die Website einer Praxis rechtlich enthalten? Impressum, Datenschutzerklärung, Cookie-Banner, Kontaktformular — alles erklärt mit Fokus auf §9 DSGVO und Gesundheitsdaten."
date: "2026-02-25"
category: "DSGVO & Recht"
readTime: 10
affiliate: false
---

Für Therapeuten, Heilpraktiker und psychologische Berater gelten beim Thema Website-Datenschutz besondere Sorgfaltspflichten. Der Grund: Wer eine Praxis für psychische oder körperliche Gesundheit betreibt, verarbeitet potenziell Gesundheitsdaten — und die zählen nach Art. 9 DSGVO zu den **besonders schützenswerten Datenkategorien**. Diese Checkliste zeigt, was wirklich erforderlich ist, und wo in der Praxis die häufigsten Lücken stecken.

## 1. Impressum: Pflicht nach §5 TMG

Jede gewerbliche oder freiberufliche Website braucht ein Impressum — das gilt auch für Praxis-Websites von Freiberuflern. Es muss **leicht auffindbar** sein (ein klickbarer Link im Footer reicht, solange er auf jeder Seite sichtbar ist).

Ins Impressum gehört für Therapeuten:

- Name und vollständige Anschrift (Straße, PLZ, Ort)
- Telefonnummer oder E-Mail (beide zusammen sind empfehlenswert)
- Berufsbezeichnung und Staat, in dem sie verliehen wurde (z. B. "Psychologischer Psychotherapeut, verliehen in Deutschland")
- Zuständige Aufsichtsbehörde (z. B. Kassenärztliche Vereinigung Bayern, Psychotherapeutenkammer NRW)
- Kammermitgliedschaft, sofern vorhanden
- Umsatzsteuer-ID, falls vorhanden (Therapeuten sind oft umsatzsteuerbefreit — dann kann ein Hinweis darauf stehen)
- Für Heilpraktiker: Behörde, die die Erlaubnis erteilt hat (i. d. R. das Gesundheitsamt)

Ein fehlendes oder unvollständiges Impressum ist eine der häufigsten Abmahn-Ursachen. Mehr dazu im separaten Artikel zum Impressum.

## 2. Datenschutzerklärung: Was sie enthalten muss

Die Datenschutzerklärung muss **vollständig, aktuell und verständlich** sein. Sie muss auf jeder Seite über einen Link erreichbar sein (meistens Footer). Für Therapeuten-Websites sind folgende Punkte besonders wichtig:

**Pflichtbestandteile:**

- Name und Kontaktdaten des Verantwortlichen (also Sie)
- Kontaktdaten des Datenschutzbeauftragten (falls vorhanden — bei kleinen Praxen selten Pflicht)
- Welche Daten erhoben werden und warum (Rechtsgrundlage: Art. 6 DSGVO)
- Wie lange Daten gespeichert werden
- Ob Daten an Dritte weitergegeben werden (Hosting-Anbieter, E-Mail-Dienst, Buchungssystem)
- Rechte der Betroffenen (Auskunft, Löschung, Widerspruch)
- Recht auf Beschwerde bei der Aufsichtsbehörde

**Besonderheit für Therapie-Websites:**

Wenn Klienten über ein Kontaktformular anfragen und dabei ihre psychische oder körperliche Situation beschreiben, handelt es sich um **Gesundheitsdaten nach Art. 9 DSGVO**. Für solche Daten brauchen Sie entweder eine **ausdrückliche Einwilligung** oder Sie stützen die Verarbeitung auf Art. 9 Abs. 2 lit. h DSGVO (Verarbeitung für Gesundheitsversorgung).

Empfehlenswert ist ein Hinweis im Kontaktformular wie: "Bitte teilen Sie in dieser Erstanfrage noch keine medizinischen oder therapeutischen Details mit. Für Ihre erste Nachricht reichen Name, Kontaktdaten und ein kurzes Anliegen."

**Wo Datenschutzerklärungen beziehen:**

- **e-recht24.de** — bewährter Generator, kostenlose Basisversion, Premium mit automatischen Updates ca. 100 Euro/Jahr
- **Dr. Schwenke / datenschutz.org** — gute Alternative
- Bitte keine Datenschutzerklärungen einfach kopieren — das ist rechtlich riskant

## 3. Cookie-Banner: Wann er nötig ist

Nicht jede Website braucht zwingend einen aufwendigen Cookie-Banner — aber fast alle brauchen zumindest eine Grundlösung.

**Keine Einwilligung nötig für:**
- Technisch notwendige Cookies (z. B. Session-Cookie des Buchungssystems, Login)
- Cookies für Sicherheitsfunktionen

**Einwilligung vor dem Setzen des Cookies nötig für:**
- Google Analytics / Google Tag Manager
- Facebook Pixel
- Google Fonts (wenn extern geladen)
- YouTube-Einbettungen
- Booking-Widgets, die Drittanbieter-Tracking enthalten
- Soziale Sharing-Buttons

Für Therapeuten-Websites mit Gesundheitsbezug gilt besondere Vorsicht: Der EuGH und deutsche Gerichte haben mehrfach betont, dass bei Seiten, die Gesundheitsdaten verarbeiten, die Anforderungen an eine wirksame Einwilligung besonders hoch sind.

**Empfehlenswerte Cookie-Consent-Lösungen:**

- **Borlabs Cookie** (WordPress) — DSGVO-konform, deutsches Unternehmen, ca. 39 Euro/Jahr
- **Complianz** (WordPress) — ebenfalls solide Alternative
- **Matomo Consent Manager** — wenn Sie Matomo als Analyse-Tool nutzen

**Wichtig:** Ein reiner Hinweis-Banner ohne Ablehnungsmöglichkeit ist seit dem EuGH-Urteil von 2019 nicht mehr ausreichend. Klienten müssen nicht-notwendige Cookies ablehnen können, bevor sie gesetzt werden.

## 4. Google Analytics und Alternativen

Google Analytics (GA4) leitet Daten an Google-Server in den USA weiter. Das ist auf Gesundheits-Websites besonders problematisch:

Wenn jemand Ihre Therapeuten-Seite besucht und Google Analytics das aufzeichnet, kann daraus potenziell auf eine Verbindung zur therapeutischen Behandlung geschlossen werden. Das ist ein Gesundheitsdatum — und damit nach Art. 9 DSGVO besonders geschützt.

Mehrere deutsche Datenschutzbehörden (u. a. Bayern, Berlin) haben GA4 auf bestimmten Website-Typen als nicht DSGVO-konform eingestuft.

**Die sicherere Alternative: Matomo**

Matomo ist eine Open-Source-Analyseplattform, die Sie auf Ihrem eigenen Server (also in Deutschland) betreiben können. Damit bleiben alle Daten in Ihrer Hand — kein Datentransfer in die USA, volle DSGVO-Konformität. Bei korrekte Konfiguration (IP-Anonymisierung, kein Cross-Site-Tracking) ist Matomo sogar **ohne Cookie-Banner** nutzbar.

Matomo als Hosted-Lösung (ohne eigenen Server) gibt es ab ca. 19 Euro/Monat bei Matomo Cloud.

## 5. Kontaktformular

Das Kontaktformular ist eines der datenschutzrechtlich heikelsten Elemente. Details dazu finden Sie im separaten Artikel über Kontaktformulare und DSGVO — hier die Kurzfassung:

- Formular muss **SSL-verschlüsselt** sein (https://)
- E-Mail-Anbieter braucht einen **Auftragsverarbeitungsvertrag (AVV)** mit Ihnen
- Datensparsamkeitsprinzip: Fragen Sie nur, was nötig ist
- Hinweis im Formular auf Datenschutzerklärung ist Pflicht
- Für Therapeuten: Kein Feld für Diagnose, Symptome oder Therapiehistorie im öffentlichen Formular

## 6. Auftragsverarbeitungsverträge (AVV)

Immer wenn Sie Daten Ihrer Klienten oder Website-Besucher an einen Dienstleister weitergeben, brauchen Sie einen AVV. Das betrifft:

- Ihren **Hosting-Anbieter** (z. B. IONOS, Raidboxes, All-Inkl.)
- Ihren **E-Mail-Anbieter** (auch wenn Sie nur einen Posteingang haben)
- Ihr **Buchungssystem** (Amelia, Calendly etc.)
- Ihren **Newsletter-Dienst** (Mailchimp, Brevo etc.)

Die meisten seriösen Anbieter stellen AVV-Vorlagen online bereit. Bei deutschen Anbietern ist das oft in den AGB geregelt; bei US-Anbietern muss ein Data Processing Agreement (DPA) separat abgeschlossen werden.

## Kurze Checkliste zum Abhaken

- [ ] Impressum vollständig und leicht auffindbar?
- [ ] Datenschutzerklärung aktuell, vollständig und verlinkt?
- [ ] Cookie-Banner mit echter Ablehnungsmöglichkeit vorhanden?
- [ ] Keine Tracking-Cookies gesetzt vor aktiver Zustimmung?
- [ ] Kontaktformular SSL-verschlüsselt?
- [ ] AVV mit Hosting-Anbieter geschlossen?
- [ ] AVV mit E-Mail-Anbieter geschlossen?
- [ ] AVV mit Buchungssystem geschlossen?
- [ ] Google Analytics ersetzt oder korrekt einwilligungspflichtig?
- [ ] Kein Hinweis auf Gesundheitsdaten im Formular?

Wenn Sie unsicher sind, ob Ihre Website alle Punkte erfüllt, ist ein technisches Datenschutz-Audit eine sinnvolle Investition. Über die [Anfragen-Seite](/anfragen) kann ich mir Ihre bestehende Website anschauen und gezielt Rückmeldung geben, wo konkreter Handlungsbedarf besteht.
