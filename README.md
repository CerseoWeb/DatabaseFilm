# 🎬 Database Film

Progetto del corso JavaScript: una web app **React** per cercare film con
l'**API OMDb** e salvarli nei preferiti con **localStorage**.

Lo scheletro (routing, componenti grafici, stile, configurazione
dell'editor) è già pronto e funzionante: l'app parte, si vede, si può
navigare tra le pagine. Quello che manca è **la logica** — le chiamate
all'API e la gestione dei preferiti — ed è quello che dovrai scrivere tu.

## 📦 Cosa trovi già pronto

- **Routing**: due pagine, "Cerca" (`/`) e "I Miei Preferiti"
  (`/preferiti`), già collegate in [app/App.jsx](app/App.jsx).
- **Componenti grafici pronti all'uso** in [app/components/](app/components/):
  `Header`, `Footer`, `SearchBar`, `MovieTable`, `EmptyState`, `Message`.
  Ogni file spiega nel commento in cima a cosa serve, quali props accetta
  e include un esempio d'uso — apriteli prima di scrivere codice nuovo,
  molto probabilmente il pezzo di interfaccia che vi serve esiste già.
- **Stile** già scritto in [app/App.css](app/App.css): non serve toccarlo.
- **Editor configurato**: autocompletamento, auto-import dei componenti,
  formattazione automatica al salvataggio e avvio automatico del progetto
  aprendo la cartella in VS Code (vedi [Come iniziare](#-come-iniziare)).

Il tuo compito **non è costruire l'interfaccia**, ma collegarci dietro la
logica mancante.

## 🧩 Cosa devi fare tu

Sono 4 file, ognuno pieno di commenti `TODO` che spiegano passo passo cosa
scrivere:

1. [scripts/omdbApi.js](scripts/omdbApi.js) — chiamare l'API OMDb e restituire i risultati
2. [scripts/preferiti.js](scripts/preferiti.js) — leggere/scrivere i preferiti in `localStorage`
3. [app/pages/Cerca.jsx](app/pages/Cerca.jsx) — collegare la ricerca e il pulsante "Aggiungi ai Preferiti"
4. [app/pages/Preferiti.jsx](app/pages/Preferiti.jsx) — mostrare e rimuovere i preferiti salvati

Più avanti trovi l'[ordine consigliato](#️-percorso-consigliato) per
affrontarli.

## 🚀 Come iniziare

### 1. Ottieni il codice

Come da indicazioni del corso: fai il **fork** di
[questo repository](https://github.com/CerseoWeb/DatabaseFilm) (oppure
crea una tua repository e caricaci i file), poi clonalo sul tuo computer e
apri la cartella con VS Code.

### 2. Avvia il progetto

Aprendo la cartella con VS Code, la prima volta comparirà una notifica
tipo _"Questa cartella contiene task automatici"_: premi **Consenti**
(**Allow**). A quel punto VS Code farà da solo `npm install` e poi
`npm run dev`, aprendo un terminale con l'indirizzo locale
(`http://localhost:5173` circa) da aprire nel browser.

Se preferisci farlo a mano, o non stai usando VS Code, da terminale:

```bash
npm install
npm run dev
```

A questo punto l'app **parte già**, solo che cercando un film non succede
ancora nulla: è normale, è il pezzo che manca e che scriverai tu.

### 3. Ottieni la chiave API di OMDb

Prima di iniziare a scrivere `scripts/omdbApi.js`, ti serve una **chiave
API gratuita**.

1. **Vai sul sito OMDb**: http://www.omdbapi.com/apikey.aspx
2. **Scegli il piano FREE (Gratis)**: seleziona _"FREE! (1,000 daily limit)"_, permette 1000 richieste al giorno senza pagare e senza carta di credito.
3. **Compila il Form**:
   - **Email Address**: un indirizzo valido (riceverai un'email)
   - **First Name / Last Name**: anche fittizi va bene
   - **Use**: "Learning JavaScript" o simile
4. **Controlla la Email**: arriva un'email "OMDb API - Free API Key" (controlla anche lo spam) con un link di attivazione e la chiave. **Se non clicchi il link di attivazione, la chiave non funziona.**
5. **Incolla la chiave** in [scripts/omdbApi.js](scripts/omdbApi.js), alla riga:

   ```javascript
   const API_KEY = 'TUA_CHIAVE_API_QUI'; // <-- sostituisci con la tua chiave
   ```

## 🗺️ Percorso consigliato

L'ordine qui sotto è pensato per farti vedere qualcosa che funziona il
prima possibile, invece di scrivere codice "alla cieca" senza controllare
se è giusto. Due fasi, ognuna finisce con un risultato che puoi vedere nel
browser.

### Fase 1 — la ricerca

1. **[scripts/omdbApi.js](scripts/omdbApi.js)** → implementa `searchMovies(termine)` (fetch all'API + `.json()` + restituire `data.Search`).
2. **[app/pages/Cerca.jsx](app/pages/Cerca.jsx)** → nel `TODO` di `handleCerca`, chiama `searchMovies(query)` e passa il risultato a `setRisultati`.

✅ **Dove lo vedi**: scrivi "matrix" nella barra di ricerca, premi Cerca, e
la tabella si riempie con i film veri restituiti dall'API.

### Fase 2 — i preferiti

3. **[scripts/preferiti.js](scripts/preferiti.js)** → implementa tutte e cinque le funzioni (`getPreferiti`, `salvaPreferiti`, `aggiungiPreferito`, `rimuoviPreferito`, `isPreferito`).
4. **[app/pages/Cerca.jsx](app/pages/Cerca.jsx)** → nel `TODO` di `handleAggiungi`, chiama `aggiungiPreferito(film)`.
5. **[app/pages/Preferiti.jsx](app/pages/Preferiti.jsx)** → nel `TODO` dentro `useEffect`, chiama `getPreferiti()` e passa il risultato a `setPreferiti`; nel `TODO` di `handleRimuovi`, chiama `rimuoviPreferito(imdbID)` e aggiorna lo stato.

✅ **Dove lo vedi**: cerchi un film, premi "Aggiungi ai Preferiti" (il
pulsante si disabilita da solo), vai su "I Miei Preferiti" e lo trovi lì;
premi "Rimuovi" e sparisce.

### Bonus (facoltativi, quando hai finito il resto)

- `getMovieDetails(imdbID)` in `omdbApi.js`, per recuperare la trama completa di un film
- Un pulsante "Rimuovi Tutti" nella pagina Preferiti
- Un contatore "Hai N film salvati"

## 👥 Lavorare in gruppo

Se siete in più persone, ci sono **due percorsi indipendenti** che si
possono fare in parallelo, perché non condividono codice:

| Persona/coppia A — "Ricerca" | Persona/coppia B — "Preferiti" |
| ---------------------------- | ------------------------------ |
| `scripts/omdbApi.js`         | `scripts/preferiti.js`         |
| (bonus: `getMovieDetails`)   | `app/pages/Preferiti.jsx`      |

Attenzione a un solo punto di contatto: **`app/pages/Cerca.jsx`** contiene
sia il `TODO` di `handleCerca` (ramo Ricerca) sia quello di
`handleAggiungi` (ramo Preferiti) — sono due funzioni diverse nello stesso
file. Per non pestarvi i piedi: lavorate su due branch Git separati e
mettetevi d'accordo su chi fa merge per primo, oppure completate prima
`handleCerca` insieme e poi dividetevi.

## 💡 Suggerimenti per l'implementazione

1. **`fetch()` verso OMDb**: costruisci l'URL con chiave API e termine di ricerca, poi `fetch()` + `.json()`. Attenzione ai nomi delle proprietà restituite dall'API, sono con la maiuscola (`Title`, `Year`, `imdbID`, `Type`, `Poster`).
2. **Poster mancanti**: se `Poster` è `"N/A"`, mostra un placeholder invece dell'URL rotto (es. `https://via.placeholder.com/60x90?text=No+Poster`).
3. **Niente `innerHTML`**: qui siamo in React, le righe della tabella le genera già `<MovieTable />` con `.map()` — a te serve solo passargli l'array di film giusto.
4. **`localStorage` salva solo stringhe**: usa `JSON.stringify()` per scrivere e `JSON.parse()` per leggere. Gestisci il caso in cui non c'è ancora nulla salvato (`localStorage.getItem` restituisce `null`).
5. **Niente duplicati nei preferiti**: prima di aggiungere un film, controlla che non ci sia già (confronta `imdbID`).

## 🐛 Debug

### La chiave API non funziona

- Hai attivato la chiave cliccando sul link nell'email?
- Hai copiato la chiave completa, senza spazi?
- Hai sostituito `'TUA_CHIAVE_API_QUI'` in `scripts/omdbApi.js`?

### I film non si vedono

- Apri la Console del browser (F12) e guarda se ci sono errori
- Guarda la tab Network: la richiesta a `omdbapi.com` parte? Che risposta torna?
- Prova l'URL della richiesta direttamente incollato nel browser

### `localStorage` non funziona

- DevTools → Application → Local Storage → controlla cosa c'è sotto la chiave `'preferiti'`
- Hai usato `JSON.stringify()` quando salvi e `JSON.parse()` quando leggi?

### La pagina Preferiti resta vuota

- `useEffect` in `Preferiti.jsx` ha l'array di dipendenze `[]`? Senza, o con dipendenze sbagliate, non parte al momento giusto.
- `getPreferiti()` restituisce davvero l'array salvato, o hai lasciato il `return []` originale?

## 📚 Risorse utili

- [OMDb API Documentation](http://www.omdbapi.com/)
- [MDN - localStorage](https://developer.mozilla.org/it/docs/Web/API/Window/localStorage)
- [MDN - Fetch API](https://developer.mozilla.org/it/docs/Web/API/Fetch_API)
- [MDN - Array Methods](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [React - useState](https://react.dev/reference/react/useState)
- [React - useEffect](https://react.dev/reference/react/useEffect)
