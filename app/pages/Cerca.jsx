/**
 * Cerca.jsx - Pagina di ricerca film (SCHELETRO da completare)
 *
 * Versione React della logica che nel progetto vanilla era in index.js.
 * L'obiettivo è cercare film tramite l'API OMDb e mostrarli in una tabella,
 * con un pulsante per aggiungerli ai preferiti.
 *
 * ========================================
 * FUNZIONALITÀ DA IMPLEMENTARE:
 * ========================================
 * 1. Leggere il testo digitato dall'utente (stato `query`)
 * 2. Alla ricerca, chiamare searchMovies(query) da scripts/omdbApi.js
 * 3. Salvare i risultati nello stato `risultati` e mostrarli nella tabella
 * 4. Per ogni film, un pulsante "Aggiungi ai Preferiti" che usa
 *    aggiungiPreferito(film) da scripts/preferiti.js
 * 5. Disabilitare il pulsante se il film è già nei preferiti (isPreferito)
 *
 * Suggerimenti:
 * - Usa useState per `query`, `risultati` e (opzionale) `messaggio`
 * - Gestisci il caso "nessun risultato" e gli errori dell'API
 * - Se il Poster è "N/A", mostra un placeholder
 */
import React, { useState } from 'react';
import { searchMovies } from '../../scripts/omdbApi.js';
import { aggiungiPreferito, isPreferito } from '../../scripts/preferiti.js';

function Cerca() {
  const [query, setQuery] = useState('');
  const [risultati, setRisultati] = useState([]);

  async function handleCerca(e) {
    e.preventDefault();
    // TODO: chiamare searchMovies(query) e salvare l'array in setRisultati
    // TODO: gestire "nessun film trovato" ed eventuali errori
  }

  function handleAggiungi(film) {
    // TODO: chiamare aggiungiPreferito(film) e aggiornare l'interfaccia
  }

  return (
    <>
      {/* BARRA DI RICERCA */}
      <form className="search-section" onSubmit={handleCerca}>
        <input
          type="text"
          className="search-bar"
          placeholder="Cerca un film (es: Matrix, Inception, Titanic)..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Cerca
        </button>
      </form>

      {/* TABELLA RISULTATI: mostrata solo se ci sono risultati */}
      {risultati.length > 0 && (
        <div className="results-section">
          <h2>Risultati della Ricerca</h2>
          <table>
            <thead>
              <tr>
                <th>Poster</th>
                <th>Titolo</th>
                <th>Anno</th>
                <th>Tipo</th>
                <th>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {risultati.map((film) => (
                <tr key={film.imdbID}>
                  <td>
                    <img className="movie-poster" src={film.Poster} alt={film.Title} />
                  </td>
                  <td>{film.Title}</td>
                  <td>{film.Year}</td>
                  <td>{film.Type}</td>
                  <td>
                    <button
                      className="btn btn-add"
                      onClick={() => handleAggiungi(film)}
                      disabled={isPreferito(film.imdbID)}
                    >
                      Aggiungi ai Preferiti
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Cerca;
