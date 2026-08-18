---
title: "Cookies und DSGVO: Welche Tools dürfen Therapeuten auf ihrer Website nutzen?"
description: "Welche Cookies brauchen eine Einwilligung, welche nicht? Google Analytics, Matomo, Facebook Pixel, Social Plugins — und wie man einen rechtssicheren Cookie-Banner aufbaut."
date: "2026-08-05"
category: "DSGVO & Recht"
readTime: 9
affiliate: false
---

Das Thema Cookies sorgt für Verwirrung: Manche Websites begrüßen Besucher mit einem ganzseitigen Banner, andere haben gar nichts, wieder andere einen Hinweis ohne Abmelde-Möglichkeit. Was ist eigentlich rechtlich korrekt — und welche Tools darf eine Therapeuten-Website überhaupt einsetzen? Dieser Artikel gibt einen strukturierten Überblick.

## Was sind Cookies und warum ist das rechtlich relevant?

Cookies sind kleine Datendateien, die eine Website im Browser des Besuchers speichert. Sie können technisch notwendig sein (z. B. um den Login-Status oder den Warenkorb zu speichern) oder zu Analyse- und Marketingzwecken eingesetzt werden (z. B. um zu verfolgen, welche Seiten ein Besucher aufruft, oder um Werbeprofile zu erstellen).

Die DSGVO und das TTDSG (Telekommunikation-Telemedien-Datenschutz-Gesetz, das in Deutschland das Cookierecht konkretisiert) unterscheiden klar zwischen diesen Kategorien. Die Grundregel seit dem EuGH-Urteil von 2019 (Planet49-Urteil): **Nicht-notwendige Cookies dürfen erst nach aktiver Einwilligung gesetzt werden** — nicht vorher, nicht durch vorausgefüllte Kästchen, nicht durch einfaches Weitersurfen.

## Kategorie 1: Technisch notwendige Cookies — keine Einwilligung nötig

Diese Cookies können ohne Einwilligung gesetzt werden:

- **Session-Cookies** des Buchungssystems oder des Content-Management-Systems
- **Sicherheits-Cookies** (z. B. CSRF-Schutz bei Formularen)
- **Cookie-Consent-Cookies** selbst (merken sich, ob jemand dem Banner zugestimmt hat)
- **Login-Cookies** auf passwortgeschützten Bereichen

Diese Cookies brauchen zwar keinen Consent-Banner, müssen aber in der Datenschutzerklärung erklärt werden.

## Kategorie 2: Analyse-Cookies — Einwilligung erforderlich (mit Ausnahmen)

**Google Analytics (GA4):**

GA4 ist das meistgenutzte Analyse-Tool weltweit — und für Therapeuten-Websites besonders problematisch. GA4 überträgt Nutzerdaten an Google-Server in den USA. Mehrere deutsche Datenschutzbehörden (Bayern, Berlin, Sachsen) haben festgestellt, dass GA4 ohne wirksame Einwilligung nicht rechtskonform eingesetzt werden kann.

Für Gesundheitswebsites kommt hinzu: Wenn jemand Ihre Therapeuten-Seite besucht und GA4 das aufzeichnet, kann Google diese Daten theoretisch mit anderen Google-Diensten verknüpfen und Nutzerprofile mit Gesundheitsbezug erstellen. Das ist nach Art. 9 DSGVO besonders sensibel.

**Ergebnis:** Google Analytics auf einer Therapeuten-Website sollte entweder gar nicht oder nur mit expliziter, informierter Einwilligung eingesetzt werden. Und: Wer einen sauberen Cookie-Banner hat, dem GA4 erst nach Zustimmung lädt, muss damit rechnen, dass ein Großteil der Nutzer ablehnt — was GA4 weitgehend wertlos macht.

**Matomo:**

Matomo ist die Open-Source-Alternative zu Google Analytics. Der entscheidende Vorteil: Sie können Matomo auf Ihrem eigenen Server (also in Deutschland) betreiben. Dann bleiben alle Daten bei Ihnen — kein Transfer an Dritte, keine US-Server, keine Profilbildung.

Mit korrekter Konfiguration (IP-Anonymisierung aktiv, keine Daten an Matomo-Server außerhalb Ihres Servers) ist Matomo sogar **ohne Cookie-Banner** nutzbar — weil keine Daten an Dritte übertragen werden und keine Profilbildung über Websites hinweg stattfindet. Das hat die Datenschutzkonferenz (DSK) der deutschen Aufsichtsbehörden so bestätigt.

Matomo Cloud (gehostete Version): ab ca. 19 Euro/Monat. Matomo On-Premise (auf eigenem Server): kostenlos, erfordert aber technisches Setup.

**Empfehlung für Therapeuten:** Matomo statt Google Analytics. Der Aufwand ist höher, der Datenschutzgewinn erheblich.

## Kategorie 3: Marketing und Social Plugins — kritisch für Gesundheitswebsites

**Facebook Pixel / Meta Pixel:**

Der Meta Pixel ist ein Tracking-Code, der auf Ihrer Website das Verhalten von Besuchern aufzeichnet und diese Daten an Meta sendet — zum Zweck zielgerichteter Werbung auf Facebook und Instagram.

Für Therapeuten-Websites: Das ist aus mehreren Gründen problematisch.

Erstens überträgt der Pixel Daten (potenziell Gesundheitsdaten) an Meta-Server in den USA. Zweitens hat Meta in der Vergangenheit gegen eigene Versprechen verstoßen und Pixel-Daten mit Nutzer-Profilen verknüpft. Drittens haben mehrere US-Gesundheitssysteme erhebliche Strafen für den Einsatz des Meta Pixels auf Patientenportalen erhalten.

**Meine klare Empfehlung:** Kein Facebook Pixel auf Therapeuten-Websites. Das Risiko überwiegt den möglichen Vorteil bei weitem.

**Social-Media-Sharing-Buttons:**

"Gefällt mir"-Buttons und "Teilen"-Schaltflächen von Facebook, Twitter/X, LinkedIn und anderen setzen bereits beim Laden der Seite Tracking-Cookies — auch wenn der Besucher nicht klickt. Das ist ohne Einwilligung unzulässig.

**Lösung:** "2-Klick-Lösungen" verwenden. Dabei erscheint zunächst nur ein deaktivierter Button. Erst wenn der Nutzer einmal klickt (um den sozialen Button zu aktivieren), werden Cookies gesetzt. Das Plugin "Share Privacy" für WordPress implementiert das zuverlässig.

**Google Maps Einbettungen:**

Wenn Sie Google Maps auf Ihrer Kontaktseite einbetten (z. B. zur Anfahrtsbeschreibung), überträgt das beim Laden Daten an Google. Ohne Einwilligung unzulässig.

**Lösung:** Google Maps erst nach Einwilligung laden (über den Cookie-Banner), oder eine datenschutzfreundliche Alternative wie OpenStreetMap verwenden, oder statt einer Einbettung nur einen Link zu Google Maps setzen.

## Einen rechtssicheren Cookie-Banner aufbauen

Ein korrekter Cookie-Banner muss:

1. **Vor der Datenverarbeitung** angezeigt werden (nicht nach dem Laden)
2. Eine **gleichwertige Abmelde-Option** bieten (der "Ablehnen"-Button darf nicht versteckt sein)
3. Eine **klare Beschreibung** der verwendeten Cookie-Kategorien bieten
4. Die **Einwilligung dokumentieren** (wann, welche Version, IP-Hash)
5. Eine **Widerrufsmöglichkeit** bieten (z. B. Einstellungen jederzeit ändern)

**Empfehlenswerte Tools für WordPress:**

- **Borlabs Cookie** — deutsches Unternehmen, sehr DSGVO-konform, Preis ca. 39 Euro/Jahr. Meine erste Wahl für WordPress.
- **Complianz** — ebenfalls solide, günstiger, aber weniger umfangreich konfigurierbar
- **Cookie Notice by dFactory** (kostenlos) — grundlegend, aber für komplexere Setups nicht ausreichend

**Was keinen Cookie-Banner ersetzt:**

Kein Plugin kann die falsche Verwendung von Tracking-Tools "reparieren". Wenn Sie Facebook Pixel einbinden, hilft auch der beste Cookie-Banner nicht vollständig gegen die strukturellen Datenschutzprobleme. Das Tool muss zur Website passen — nicht umgekehrt.

Wenn Sie nicht sicher sind, welche Cookies auf Ihrer Website gerade aktiv sind und ob Ihr Banner korrekt konfiguriert ist, können Sie das gerne über die [Anfragen-Seite](/anfragen) klären.
