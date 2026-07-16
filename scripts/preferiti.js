/**
 * preferiti.js - Modulo per gestire i preferiti in localStorage (SCHELETRO)
 *
 * Racchiude tutta la logica di lettura/scrittura dei film preferiti nel
 * localStorage del browser, così i componenti React (pages/Cerca.jsx e
 * pages/Preferiti.jsx) la usano senza duplicare codice.
 *
 * I film vengono salvati come array JSON sotto la chiave 'preferiti'.
 * Di ogni film conviene salvare almeno: Title, Year, imdbID, Type, Poster.
 */

const STORAGE_KEY = 'preferiti'

/**
 * Legge i preferiti da localStorage.
 * @returns {Array} L'array dei film preferiti (vuoto se non ce ne sono)
 *
 * TODO: usare localStorage.getItem(STORAGE_KEY) e JSON.parse().
 * Ricorda di gestire il caso in cui non c'è ancora nulla salvato (null).
 */
export function getPreferiti() {
  // TODO: implementare la lettura da localStorage
  return []
}

/**
 * Salva l'intero array dei preferiti in localStorage.
 * @param {Array} lista - L'array di film da salvare
 *
 * TODO: usare localStorage.setItem(STORAGE_KEY, JSON.stringify(lista)).
 */
export function salvaPreferiti(lista) {
  // TODO: implementare il salvataggio in localStorage
}

/**
 * Aggiunge un film ai preferiti, evitando i duplicati.
 * @param {Object} film - Il film da aggiungere (deve avere imdbID)
 *
 * TODO:
 * 1. Leggere i preferiti attuali con getPreferiti()
 * 2. Se il film NON è già presente (controlla con isPreferito o filter su imdbID)
 *    aggiungerlo all'array
 * 3. Salvare l'array aggiornato con salvaPreferiti()
 */
export function aggiungiPreferito(film) {
  // TODO: implementare l'aggiunta senza duplicati
}

/**
 * Rimuove un film dai preferiti in base al suo imdbID.
 * @param {string} imdbID - Identificatore del film da rimuovere
 *
 * TODO:
 * 1. Leggere i preferiti con getPreferiti()
 * 2. Creare un nuovo array senza il film (array.filter su imdbID)
 * 3. Salvare con salvaPreferiti()
 */
export function rimuoviPreferito(imdbID) {
  // TODO: implementare la rimozione
}

/**
 * Controlla se un film è già nei preferiti.
 * @param {string} imdbID - Identificatore del film
 * @returns {boolean} true se è già nei preferiti
 *
 * TODO: usare getPreferiti() e array.some()/find() sull'imdbID.
 */
export function isPreferito(imdbID) {
  // TODO: implementare il controllo
  return false
}
