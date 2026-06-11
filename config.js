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
