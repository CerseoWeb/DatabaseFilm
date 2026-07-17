/**
 * omdbApi.js - Modulo per usare l'API OMDb (SCHELETRO da completare)
 *
 * Questo modulo raccoglie tutte le chiamate all'API OMDb, così i componenti
 * React (es. pages/Cerca.jsx) possono importarlo senza duplicare la logica
 * di rete.
 *
 * ========================================
 * 🔑 COME OTTENERE LA CHIAVE API OMDb
 * ========================================
 * 1. Vai su: http://www.omdbapi.com/apikey.aspx
 * 2. Seleziona "FREE! (1,000 daily limit)"
 * 3. Compila il form (email valida) e clicca "Submit"
 * 4. Attiva la chiave dal link ricevuto via email
 * 5. Copia la tua API Key e incollala qui sotto in API_KEY
 *
 * URL API:
 *   http://www.omdbapi.com/?apikey={TUA_CHIAVE}&s={TERMINE_DI_RICERCA}
 */

// TODO: sostituisci con la tua chiave API OMDb
const API_KEY = 'TUA_CHIAVE_API_QUI';
const BASE_URL = 'https://www.omdbapi.com/';

/**
 * Cerca film per titolo tramite l'API OMDb.
 * @param {string} termine - Il testo da cercare (es. "Matrix")
 * @returns {Promise<Array>} L'array di film (proprietà "Search" della risposta)
 *
 * TODO:
 * 1. Costruire l'URL: `${BASE_URL}?apikey=${API_KEY}&s=${termine}`
 * 2. Fare fetch() dell'URL e convertire la risposta con .json()
 * 3. Se data.Response === "True" restituire data.Search, altrimenti []
 * 4. Gestire gli errori (try/catch) e i casi limite
 */
export async function searchMovies(termine) {
  // TODO: implementare la chiamata fetch e restituire l'array dei risultati
  return [];
}

/**
 * Recupera i dettagli completi di un film dal suo imdbID (poster, trama,
 * regista, cast, voto...). Serve per l'esercizio extra "pagina di
 * dettaglio" (vedi app/pages/Dettaglio.jsx) - se non fai quell'esercizio,
 * puoi anche lasciarla così.
 * @param {string} imdbID - Identificatore univoco del film
 * @returns {Promise<Object|null>} L'oggetto con i dettagli del film
 *
 * TODO: costruire l'URL con il parametro `i=${imdbID}` e restituire i dati.
 */
export async function getMovieDetails(imdbID) {
  // TODO: implementare la chiamata fetch per i dettagli
  return null;
}
