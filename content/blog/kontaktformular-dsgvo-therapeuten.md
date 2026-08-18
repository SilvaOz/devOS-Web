---
title: "Kontaktformular und DSGVO: Was Therapeuten und Heilpraktiker beachten müssen"
description: "DSGVO-konforme Kontaktformulare für Therapeuten: Verschlüsselung, Datensparsamkeit, Aufbewahrungsfristen, Einwilligungsfelder und der besondere Schutz von Gesundheitsdaten nach §9 DSGVO."
date: "2026-04-08"
category: "DSGVO & Recht"
readTime: 9
affiliate: false
---

Das Kontaktformular auf der Praxis-Website erscheint auf den ersten Blick unspektakulär. In der Praxis ist es aber eines der datenschutzrechtlich heikelsten Elemente — besonders für Therapeuten, Heilpraktiker und Coaches im Gesundheitsbereich. Denn wenn ein Klient schreibt "Ich leide unter Panikattacken und suche Hilfe", ist das ein Gesundheitsdatum im Sinne des Art. 9 DSGVO. Und dafür gelten deutlich strengere Regeln als für eine Restaurantbuchung.

## Warum das Kontaktformular besondere Aufmerksamkeit verdient

Art. 9 DSGVO schützt **besondere Kategorien personenbezogener Daten** — dazu gehören explizit Gesundheitsdaten, Daten zur körperlichen oder geistigen Gesundheit sowie Daten, aus denen Schlüsse auf den Gesundheitszustand gezogen werden können.

Wenn jemand Ihnen über ein Webformular schreibt und dabei auch nur andeutet, warum er therapeutische Hilfe sucht, handelt es sich um ein Gesundheitsdatum. Das bedeutet:

- Sie brauchen eine **besondere Rechtsgrundlage** für die Verarbeitung (Art. 9 Abs. 2 DSGVO)
- Die übliche Rechtsgrundlage für normale Kontaktformulare (berechtigtes Interesse nach Art. 6 Abs. 1 lit. f) reicht hier allein **nicht** aus
- Sie müssen besondere technische und organisatorische Schutzmaßnahmen treffen

## Die richtige Rechtsgrundlage

Für das Kontaktformular einer Therapeuten-Praxis kommen folgende Rechtsgrundlagen in Frage:

**Art. 6 Abs. 1 lit. b DSGVO** — Vertragsanbahnung: Wenn jemand Kontakt aufnimmt, um eine therapeutische Leistung zu erhalten, kann die Verarbeitung zur Durchführung vorvertraglicher Maßnahmen notwendig sein. Das deckt die Basisverarbeitung (Name, Kontaktdaten, Anliegen).

**Art. 9 Abs. 2 lit. h DSGVO** — Gesundheitsversorgung: Diese Norm erlaubt die Verarbeitung von Gesundheitsdaten, wenn sie für die medizinische Versorgung oder Behandlung erforderlich ist. Das ist die robusteste Grundlage für Therapeuten — aber sie setzt voraus, dass das Formular wirklich Teil der Behandlungsanbahnung ist.

**Art. 9 Abs. 2 lit. a DSGVO** — ausdrückliche Einwilligung: Alternativ kann eine explizite Einwilligung eingeholt werden. Der Vorteil ist, dass sie flexibel einsetzbar ist. Der Nachteil: Einwilligungen können widerrufen werden, und die Anforderungen an ihre Freiwilligkeit und Informiertheit sind hoch.

## Technische Mindestanforderungen

**SSL-Verschlüsselung (HTTPS):** Das ist keine Kür, sondern Pflicht. Ohne SSL werden die Formulardaten im Klartext übertragen — bei Gesundheitsdaten ist das ein klarer Datenschutzverstoß. Prüfen Sie: Zeigt Ihre Website in der Adressleiste **https://** mit Schloss-Symbol? Falls nicht, muss das sofort behoben werden.

**Verschlüsselte Übermittlung der E-Mail:** Wenn das Formular ausgefüllt und abgeschickt wird, landet die Nachricht in Ihrem E-Mail-Postfach. Die meisten Standard-E-Mail-Dienste übertragen diese E-Mails unverschlüsselt. Konsequente Lösung: Nutzen Sie einen E-Mail-Anbieter, der **TLS-Verschlüsselung** für den Transport garantiert — z. B. Tutanota, ProtonMail oder einen deutschen Hoster wie mailbox.org.

**Ende-zu-Ende-Verschlüsselung:** Für echte Sicherheit bei sensiblen Gesundheitsdaten wäre eine Ende-zu-Ende-Verschlüsselung ideal (z. B. über PGP oder spezielle Therapie-Kommunikationsplattformen). In der Praxis setzen das jedoch die wenigsten Praxen um — und es ist rechtlich nicht zwingend vorgeschrieben, solange andere Schutzmaßnahmen vorhanden sind.

## Datensparsamkeit: Fragen Sie nur, was nötig ist

Das Prinzip der **Datensparsamkeit** (Art. 5 Abs. 1 lit. c DSGVO) besagt: Nur die Daten erheben, die für den Zweck wirklich notwendig sind. Für eine erste Kontaktaufnahme bedeutet das:

**Erforderlich:**
- Name (Vorname reicht für den Erstkontakt)
- Kontaktdaten (E-Mail oder Telefon)
- Kurzes Anliegen (optional, aber sinnvoll)

**Nicht erforderlich im Erstformular:**
- Vollständige Adresse
- Geburtsdatum
- Diagnosen, Symptome, Vorbehandlungen
- Krankenversicherung

Formulieren Sie einen deutlichen Hinweis im oder unter dem Formular: *"Bitte schildern Sie Ihr Anliegen in wenigen Worten. Konkrete Informationen zu Symptomen oder Diagnosen teilen Sie bitte erst im persönlichen Gespräch mit."*

Dieser Hinweis dient doppelt: Er schützt die Privatsphäre des Klienten und reduziert das Risiko, unbeabsichtigt sensible Gesundheitsdaten zu empfangen, bevor ein sicherer Kanal etabliert ist.

## Pflichtfelder und Einwilligungscheckbox

**Pflichtfelder** sollten auf das Minimum reduziert werden. Felder, die für die Kontaktaufnahme nicht zwingend nötig sind (Geburtsdatum, Adresse), sollten entweder weggelassen oder als optionale Felder markiert sein.

**Einwilligungscheckbox:** Unter dem Formular — vor dem Absenden-Button — brauchen Sie ein aktives Zustimmungsfeld zur Datenschutzerklärung. Die Checkbox darf **nicht** vorangehakt sein. Der Text sollte ungefähr so aussehen:

*"Ich habe die [Datenschutzerklärung] gelesen und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verarbeitet werden."*

Das Wort "Datenschutzerklärung" verlinkt direkt auf Ihre Datenschutzseite. Diese Einwilligung muss dokumentiert werden — Ihre Formularlösung (z. B. das WordPress-Plugin Contact Form 7 mit entsprechender Erweiterung) kann das automatisch in einer Datenbank speichern.

## Aufbewahrungsfristen

Wie lange dürfen Sie Kontaktanfragen aufbewahren? Hier die Faustregeln:

- **Anfragen, die zur Behandlung führen:** Die Daten gehen in die Patientenakte über. Für diese gelten die berufsrechtlichen Aufbewahrungsfristen — bei Ärzten und Therapeuten in der Regel **10 Jahre** nach Behandlungsende (§ 630f BGB).
- **Anfragen, die nicht zur Behandlung führen:** Diese sollten nach Abschluss der Korrespondenz und Klärung des Anliegens gelöscht werden — i. d. R. nach **3–6 Monaten**.
- **Steuerrelevante Unterlagen:** Rechnungen und geschäftliche Korrespondenz unterliegen der handelsrechtlichen Aufbewahrungspflicht von **6–10 Jahren** (§§ 238, 257 HGB).

Tragen Sie Ihre Fristen in Ihre Datenschutzerklärung ein und halten Sie sie ein.

## Auftragsverarbeitungsvertrag mit dem E-Mail-Anbieter

Wenn Sie ein Webformular nutzen und die Nachrichten zu Ihrem E-Mail-Anbieter weitergeleitet werden, ist Ihr E-Mail-Anbieter ein **Auftragsverarbeiter** im Sinne der DSGVO. Sie brauchen einen Auftragsverarbeitungsvertrag (AVV) mit ihm.

- **Deutsche Anbieter** (z. B. mailbox.org, Posteo, IONOS Mail): AVV ist meist standardmäßig verfügbar oder auf Anfrage
- **Gmail / Google Workspace:** AVV vorhanden, aber Server-Standorte und Datentransfers müssen geprüft werden
- **Microsoft 365:** AVV verfügbar, Einstellungen für EU-Rechenzentrum müssen aktiv gesetzt werden
- **Kostenlose GMX / Web.de / T-Online:** Häufig kein AVV angeboten — für Therapeuten nicht empfehlenswert

## Die praktische Empfehlung

Das ideale Kontaktformular für eine Therapeuten-Praxis:

1. Nur wenige Felder: Name, E-Mail oder Telefon, kurzes Freitextfeld
2. Klarer Hinweis, keine Diagnosen im Formular zu nennen
3. Aktive Einwilligungscheckbox mit Link zur Datenschutzerklärung
4. SSL auf der gesamten Website aktiv
5. E-Mail-Weiterleitung an einen seriösen Anbieter mit AVV
6. Formular-Plugin dokumentiert Einwilligungen (z. B. Contact Form 7 + DSGVO-Modul, oder Gravity Forms)

Wenn Sie Ihre aktuelle Lösung prüfen lassen möchten, beschreiben Sie die Situation gerne auf der [Anfragen-Seite](/anfragen) — ich schaue mir das an und gebe eine konkrete Einschätzung.
