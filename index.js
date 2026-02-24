/**
 * Progetto JS - Database Film con OMDb API
 * 
 * ========================================
 * 🔑 COME OTTENERE LA CHIAVE API OMDb
 * ========================================
 * 
 * OMDb API è GRATUITA e molto semplice da usare, ma richiede una chiave
 * API per funzionare. Segui i passaggi qui sotto per ottenere la tua chiave.
 * 
 * PASSAGGI:
 * 1. Vai su: http://www.omdbapi.com/apikey.aspx
 * 2. Seleziona "FREE! (1,000 daily limit)"
 * 3. Compila il form con:
 *    - Email (vera, dato che vi deve arrivare la chiave)
 *    - First Name (puoi mettere il tuo nome o un nickname)
 *    - Last Name (puoi mettere il tuo cognome o un nickname)
 *    - Use ("Testing" va benissimo o "For School Project" se preferisci)
 * 4. Clicca su "Submit"
 * 5. Controlla la tua email e clicca sul link di attivazione (altrimenti la chiave non funzionerà)
 * 6. Copia la tua API Key (dalla mail) e incollala nel codice
 * 
 * NOTA: La chiave gratuita permette al massimo 1000 richieste al giorno (più che sufficienti)
 * 
 * ========================================
 * URL API:
 * http://www.omdbapi.com/?apikey={TUA_CHIAVE}&s={TERMINE_DI_RICERCA}
 * 
 * Nota la struttura della query:
 * - apikey: la tua chiave API
 * - s: termine di ricerca (es. "Matrix")
 * ========================================
 * 
 * Risposta (esempio):
 * {
 *   "Search": [
 *     { "Title": "The Matrix", "Year": "1999", "imdbID": "tt0133093", "Type": "movie", "Poster": "url" }
 *   ],
 *   "Response": "True"
 * }
 * 
 * ========================================
 * FUNZIONALITÀ DA IMPLEMENTARE:
 * ========================================
 * 
 * 1. Creare una variabile per la chiave API (dove mettere la tua chiave) e l'URL base
 * 2. Recuperare gli elementi del DOM (input ricerca, bottone, tabella, ecc.)
 * 3. Creare una funzione per cercare film dall'API OMDb (usa fetch)
 * 4. Creare una funzione per mostrare i risultati in una tabella (spezzala in più funzioni se vuoi)
 * 5. Creare una funzione per gestire i preferiti in localStorage (aggiungere i film se non sono già presenti)
 * 6. Aggiungere pulsante "Aggiungi ai Preferiti" per ogni film
 * 7. Disabilitare il pulsante se il film è già nei preferiti
 * 
 * Suggerimenti per l'implementazione:
 * - Usa fetch() per chiamare l'API con il termine di ricerca
 * - Usa data.Search per ottenere l'array di film
 * - Crea le righe della tabella dinamicamente con innerHTML o createElement)
 * - Usa localStorage.setItem() e localStorage.getItem() per i preferiti
 * - Salva i preferiti come JSON: JSON.stringify() e JSON.parse()
 * - Salva almeno questi dati dei film (titolo, anno, imdbID, tipo, poster)
 * - Controlla se un film non è già nei preferiti prima di aggiungerlo (controlla con l'imdbID)
 * - Aggiungi event listener al pulsante di ricerca e all'input (per Enter)
 * 
 * Bonus:
 * - Gestisci il caso in cui la chiave API non è stata inserita e mostra un messaggio di errore
 * - Gestisci il caso in cui non ci sono risultati per la ricerca e mostra un messaggio "Nessun film trovato"
 */
