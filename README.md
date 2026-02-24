# Database Film

Questo è un progetto del corso JavaScript.
Dovrai creare una pagina web per cercare film usando l'**API OMDb** e salvarli nei preferiti con **localStorage**.

Le funzionalità principali da implementare sono:
1. **Ricerca film** - Usare `fetch` per cercare film per titolo
2. **Mostrare i risultati in una tabella** - con poster, titolo, anno, tipo e pulsante "Aggiungi ai Preferiti"
3. **Salvare nei preferiti** - Usare `localStorage` per salvare i film preferiti
4. **Gestire i preferiti** - Disabilitare il pulsante se il film è già nei preferiti, e creare una pagina separata per visualizzare e rimuovere i preferiti

## 🔑 Ottenere la Chiave API di OMDb

Prima di iniziare, devi ottenere una **chiave API gratuita** da OMDb.

### Passaggi per ottenere la chiave:

1. **Vai sul sito OMDb**: http://www.omdbapi.com/apikey.aspx
2. **Scegli il piano FREE (Gratis)**: seleziona *"FREE! (1,000 daily limit)"* che ti permette di fare 1000 richieste al giorno senza pagare. Non è necessario inserire i dati della carta di credito.
3. **Compila il Form** con dei dati:
   - **Email Address**: il tuo indirizzo email (DEVE ESSERE VALIDO, riceverai un'email)
   - **First Name**: il tuo nome (puoi mettere un nome fittizio se vuoi)
   - **Last Name**: il tuo cognome (anche questo può essere fittizio)
   - **Use**: metti "Learning JavaScript" o qualcosa di simile
   - Premi il pulsante "Submit" per inviare la richiesta
4. **Controlla la Email**: riceverai un'email da OMDb con il soggetto "OMDb API - Free API Key". Se non la vedi, controlla la cartella spam o posta indesiderata. Qui troverai un link per attivare la tua chiave API e la tua chiave API stessa. Nota che se non attivi la chiave cliccando sul link, non funzionerà!

5. **Copia la Chiave API**: dopo aver cliccato sul link di attivazione, vedrai la tua chiave API (è una stringa alfanumerica tipo `abc12345`). Copia questa chiave e incollala nel file `script.js` alla riga dove c'è la costante `API_KEY`.

   ```javascript
   const API_KEY = 'abc12345'; // <-- Sostituisci con la tua chiave
   ```

### Come Funziona l'API OMDb

URL Base
```
http://www.omdbapi.com/
```

Cercare Film per Titolo
```
http://www.omdbapi.com/?apikey=TUA_CHIAVE&s=matrix
```

**Parametri**:
- `apikey`: la tua chiave API
- `s`: termine di ricerca (search)

**Esempio di Risposta**:
```json
{
  "Search": [
    {
      "Title": "The Matrix",
      "Year": "1999",
      "imdbID": "tt0133093",
      "Type": "movie",
      "Poster": "https://..."
    },
    {
      "Title": "The Matrix Reloaded",
      "Year": "2003",
      "imdbID": "tt0234215",
      "Type": "movie",
      "Poster": "https://..."
    }
  ],
  "totalResults": "12",
  "Response": "True"
}
```

**Cosa Fare nel Codice**:
1. Costruisci l'URL con la chiave API e il termine di ricerca
2. Fai un `fetch()` all'URL
3. Usa l'array `Search` per mostrare i film


## Come Iniziare

Per iniziare il progetto ci sono due strade:

1. **Fork** del repository base. Lo trovate [qui](https://github.com/CerseoWeb/DatabaseFilm) e potete fare un fork per avere una copia personale su cui lavorare.

2. **Creare una nuova repository** seguendo i passaggi qui sotto (consigliato per chi vuole fare tutto da zero e imparare il workflow completo di GitHub).
   * **Nuova Repo**: Vai su [github.com](https://github.com) e crea una nuova repository (In alto un pulsante "+" e poi "New Repository"), con Repository Name: `DatabaseFilm`, Description: "Progetto Database Film per corso Web", Public, Initialize with README (opzionale).
   * **Aggiungi Files**: Dopo aver creato la repo, puoi aggiungere i file `index.html`, `style.css`, `script.js` e `README.md` direttamente da GitHub (usando il tasto "+" (vicino a "Code") → "Upload files". Nella pagina di upload, trascina i file o selezionali dal tuo computer, poi scrolla in basso e fai commit dei file con un messaggio chiaro come "Add initial project files".

A questo punto possiamo iniziare a lavorare localmente con VSCode e GitHub:

**Clona**: Copia l'URL della repo (es: `https://github.com/[tuonome]/DatabaseFilm.git`) e clonala localmente usando Git o direttamente dentro VSCode.

**VSCode**: Da dentro vs code, apri la cartella del progetto se non già fatto.\
*NOTA*: Prima di iniziare, assicurati di aver fatto il login a GitHub da VSCode, in modo da poter fare commit e push direttamente dall'editor.

**Ottieni la Chiave API**: Segui i passaggi sopra per ottenere la tua chiave OMDb (se non l'hai già fatto) e inseriscila in `script.js` prima di fare il commit iniziale.


## 💡 Suggerimenti per l'Implementazione

1. **Usa `fetch()` per chiamare l'API**: costruisci l'URL con la chiave API e il termine di ricerca, poi usa `fetch()` per ottenere i dati. Nella costruzione dell'URL, assicurati di includere tutti i parametri necessari. ***ATTENZIONE*** ai nomi delle proprietà che sono maiuscole negli oggetti restituiti dall'API (es. `Title`, `Year`, `imdbID`, `Type`, `Poster`).

2. **Gestisci i Poster Mancanti**: se il campo `Poster` è "N/A", mostra un'immagine di placeholder invece del poster del film. Puoi usare un'immagine generica come questa: `https://via.placeholder.com/60x90?text=No+Poster`.

3. **Crea le Righe della Tabella**: per ogni film nei risultati, crea una riga nella tabella con il poster, titolo, anno, tipo e un pulsante "Aggiungi ai Preferiti". Usa `innerHTML` per inserire i dati dinamicamente. Puoi anche aggiungere una classe CSS al pulsante per poterlo stilizzare e gestire più facilmente. Inoltre consiglio di spezzare la creazione della riga in una funzione separata rispetto alla creazione della tabella, in modo da mantenere il codice più organizzato.

4. **Salvare nei Preferiti**: quando l'utente clicca su "Aggiungi ai Preferiti", salva il film in un array di preferiti e poi salva questo array in `localStorage` usando `JSON.stringify()`. Assicurati di gestire i casi in cui `localStorage` è vuoto (devi inizializzare l'array) e di non aggiungere duplicati (controlla con l'imdbID).

6. **Gestire i Preferiti**: nella pagina `preferiti.html`, recupera i preferiti da `localStorage` usando `JSON.parse()`, e mostra la tabella dei preferiti. Aggiungi un pulsante "Rimuovi" per ogni film che, quando cliccato, rimuove il film dai preferiti e aggiorna la visualizzazione. Puoi usare `array.splice()` per rimuovere l'elemento dall'array dei preferiti in base all'indice, oppure `array.filter()` per creare un nuovo array senza il film da rimuovere.


## 🐛 Debug

### La chiave API non funziona
- Hai attivato la chiave cliccando sul link nell'email?
- Hai copiato la chiave completa senza spazi?
- Hai sostituito `'TUA_CHIAVE_API_QUI'` nel codice?

### I film non si vedono
- Apri la Console (F12)
- Cerca errori di rete (tab Network)
- Verifica che l'URL sia corretto
- Testa l'URL direttamente nel browser

### localStorage non funziona
- Controlla in DevTools → Application → Local Storage
- Verifica di usare JSON.stringify() quando salvi
- Verifica di usare JSON.parse() quando recuperi

### I preferiti non si vedono
- Controlla che la chiave sia `'preferiti'` in entrambi i file
- Verifica che `caricaPreferiti()` sia chiamata all'avvio
- Usa console.log() per vedere cosa c'è in localStorage


## Risorse Utili

- [OMDb API Documentation](http://www.omdbapi.com/)
- [MDN - localStorage](https://developer.mozilla.org/it/docs/Web/API/Window/localStorage)
- [MDN - Fetch API](https://developer.mozilla.org/it/docs/Web/API/Fetch_API)
- [MDN - Array Methods](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Array)
