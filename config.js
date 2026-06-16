/**
 * =====================================================================
 *  NATANAELE POGLIAGHI — FILE DI CONFIGURAZIONE
 *  Modifica solo questo file per aggiornare testi, contatti,
 *  opzioni del form, API key e URL di integrazione.
 *  NON toccare il file calendarionat.html per modifiche ordinarie.
 * =====================================================================
 */

const SITE_CONFIG = {

  // ── IDENTITÀ ────────────────────────────────────────────────────────
  identity: {
    nome:        "Natanaele",
    nomeCompleto: "Natanaele Alessandro Pogliaghi",
    professione: "Tecnico Teatrale",
    citta:       "Milano",
    tagline:     "Disponibilità aggiornata in tempo reale.\nConsulta il calendario e scrivimi direttamente.",
    navLogo:     "Nat Pogliaghi",
    footerCopy:  "© 2026",
  },

  // ── CONTATTI ─────────────────────────────────────────────────────────
  contatti: {
    email:     "natpogliaghi.work@gmail.com",
    whatsapp:  "https://wa.me/393762670634",   // ← sostituisci col numero reale
    telegram:  "https://t.me/Ort_nt", // ← sostituisci
    linkCv:    "https://drive.google.com/file/d/1WUTriMKl5hmYeSRFRYb7fksYmRhyscxb/view?usp=sharing",
    zona:      "Milano e trasferte",
    tempoRisposta: "⏱ Risposta entro 48h",
  },

  // ── TESTI SEZIONE CONTATTI ────────────────────────────────────────────
  testiContatti: {
    titolo:      "Contattami",
    pitch:       "Hai verificato la disponibilità nel calendario?\nScegli il canale che preferisci per scrivermi direttamente.",
    whatsappLabel:    "WhatsApp",
    whatsappSub:      "Apri una chat diretta",
    telegramLabel:    "Telegram",
    telegramSub:      "Scrivimi su Telegram",
    emailLabel:       "Email",
    emailSub:         "Apri il tuo client di posta",
    formToggleLabel:  "Invia un messaggio dal sito",
    formToggleSub:    "Compila il modulo di contatto",
  },

  // ── TESTI SEZIONE CALENDARIO ──────────────────────────────────────────
  testiCalendario: {
    titolo: "Disponibilità",
    intro:  "Naviga il mio calendario per verificare le disponibilità. Gli eventi in verde indicano finestre libere; in rosso le date già impegnate.",
  },

  // ── FORM DI CONTATTO ──────────────────────────────────────────────────
  form: {
    // Etichette campi
    labelNome:    "Nome / Compagnia",
    labelEmail:   "Email di risposta",
    labelTipo:    "Tipo di produzione",
    labelStart:   "Data inizio",
    labelEnd:     "Data fine",
    labelVenue:   "Venue / Luogo",
    labelMsg:     "Messaggio",

    // Placeholder
    placeholderNome:  "Teatro XYZ / Mario Rossi",
    placeholderEmail: "contatto@teatro.it",
    placeholderVenue: "Nome del teatro e città",
    placeholderMsg:   "Descrivi brevemente il progetto, il ruolo tecnico richiesto e qualsiasi dettaglio utile...",

    // Opzioni select "Tipo di produzione"  ← MODIFICA QUI per aggiungere/rimuovere opzioni
    opzioniTipo: [
      "Prosa",
      "Opera lirica",
      "Danza",
      "Musical",
      "Evento / Altro",
    ],

    // Testo pulsante submit
    submitLabel: "Invia messaggio",

    // Messaggi di stato
    msgInvio:    "Invio in corso...",
    msgSuccesso: "✓ Grazie! Messaggio inviato con successo. Ti rispondo entro 48h.",
    msgErrore:   "Invio non riuscito. Prova a scrivermi direttamente via email o WhatsApp.",

    // Validazione
    errNome:  "Inserisci il nome o la compagnia.",
    errEmail: "Inserisci un indirizzo email valido.",
    errMsg:   "Scrivi un messaggio prima di inviare.",

    // Oggetto email Formspark
    oggettoEmail: "NUOVO CONTATTO DAL SITO",
  },

  // ── VIDEO HERO ────────────────────────────────────────────────────────
  //
  //  Sostituisci il file video rinominandolo (o aggiorna `src` qui sotto).
  //  I tre tempi sono in secondi e si riferiscono alla timeline del video:
  //
  //    introEnd   → il video si ferma qui dopo l'intro automatica
  //                 (frame con i fari puntati in basso, titolo già visibile)
  //    scrollStart → da questo punto in poi lo scroll muove i fari
  //                 (di solito uguale a introEnd, ma può essere diverso)
  //    scrollEnd  → frame finale quando i fari puntano in camera
  //                 (massimo scroll = questo frame)
  //
  hero_video: {
    src:         "hero.mp4",   // ← rinomina il tuo file o cambia questo percorso
    introEnd:    2,          // secondi: dove si ferma l'intro automatica
    scrollStart: 3,          // secondi: inizio del controllo via scroll
    scrollEnd:   7.8,          // secondi: fine del controllo via scroll (fari in camera)
    overlayOpacity: 0.20,      // 0 = nessun overlay scuro, 1 = completamente nero

    // ── INQUADRATURA ──────────────────────────────────────────────────
    //
    //  zoom  → scala del video rispetto al cover di default.
    //          1.0 = nessuno zoom (riempie il frame come prima).
    //          1.3 = ingrandito del 30% (zoom in, si taglia ai bordi).
    //          0.8 = rimpicciolito (dezoom, appaiono bande nere ai lati).
    //
    //  posX  → sposta il contenuto orizzontalmente, in % della larghezza video.
    //          "0%"   = centrato.
    //          "-10%" = il contenuto si sposta a sinistra
    //                   (entra nel frame la parte destra del video).
    //          "+10%" = il contenuto si sposta a destra.
    //
    //  posY  → sposta il contenuto verticalmente, in % dell'altezza video.
    //          "0%"   = centrato.
    //          "-15%" = il contenuto si sposta in alto
    //                   (entra nel frame la parte bassa del video).
    //          "+15%" = il contenuto si sposta in basso.
    //
    //  Flusso consigliato: apri il video in VLC, vai al frame chiave,
    //  poi regola queste tre variabili finché l'inquadratura ti convince.
    //
    zoom: 1.0,    // 1.0 = default  |  1.3 = zoom in 30%
    posX: "0%",   // "0%" = centro  |  "-10%" = contenuto a sinistra
    posY: "-10%",   // "0%" = centro  |  "-15%" = contenuto in alto
  },

  // ── INTEGRAZIONI ──────────────────────────────────────────────────────
  integrazioni: {
    // Formspark — endpoint del form di contatto
    formsparkUrl: "https://submit-form.com/hGu6hOL6H",

    // Google Calendar API
    // ⚠️  SICUREZZA: aggiungi sempre la restrizione referrer su Google Cloud Console
    //     oppure usa un proxy serverless (vedi commento nel file HTML)
    gcalApiKey: "AIzaSyA-O_MyTw4s97OYDkTBrETyxHqcQZ1wSQU", // ← sostituisci

    // ID dei calendari Google
    // Ogni oggetto: { id, label, type }
    // type può essere: "occupato" | "tentativo"
    calendari: [
      {
        id:    "6ffa36777c748f71faaa4bfa7db8ef0ebbfb026dac9f5be9d311fb347a2d9d95@group.calendar.google.com",
        label: "Impegnato",
        type:  "occupato",
      },
      {
        id:    "e94ea22f00a71664506c8d4303c36734c5d9e7d58f6042d4a9f0d958deb19c9a@group.calendar.google.com",
        label: "Da confermare",
        type:  "tentativo",
      },
    ],
  },

};
