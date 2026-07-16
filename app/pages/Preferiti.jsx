/**
 * Preferiti.jsx - Pagina dei film preferiti (SCHELETRO da completare)
 *
 * Versione React della logica che nel progetto vanilla era in preferiti.js.
 * Mostra i film salvati in localStorage e permette di rimuoverli.
 *
 * ========================================
 * FUNZIONALITÀ DA IMPLEMENTARE:
 * ========================================
 * 1. Al caricamento della pagina, leggere i preferiti con getPreferiti()
 *    da scripts/preferiti.js e salvarli nello stato `preferiti`
 *    (usa useEffect con array di dipendenze vuoto [])
 * 2. Mostrare i film in una tabella (poster, titolo, anno, tipo)
 * 3. Un pulsante "Rimuovi" per ogni film che chiama rimuoviPreferito(imdbID)
 *    e aggiorna lo stato
 * 4. Gestire lo stato vuoto: se non ci sono preferiti mostra un messaggio
 *
 * Bonus:
 * - Mostrare il numero totale di preferiti
 * - Aggiungere un pulsante "Rimuovi Tutti"
 */
import React, { useState, useEffect } from 'react'
import { getPreferiti, rimuoviPreferito } from '../../scripts/preferiti.js'

function Preferiti() {
  const [preferiti, setPreferiti] = useState([])

  useEffect(() => {
    // TODO: caricare i preferiti con getPreferiti() e salvarli con setPreferiti(...)
  }, [])

  function handleRimuovi(imdbID) {
    // TODO: chiamare rimuoviPreferito(imdbID) e aggiornare lo stato `preferiti`
  }

  // Stato vuoto: nessun film salvato
  if (preferiti.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-state-icon">⭐</div>
        <h3>Nessun film nei preferiti</h3>
        <p>Vai alla ricerca e aggiungi i tuoi film preferiti!</p>
      </div>
    )
  }

  return (
    <div className="results-section">
      <h2>I Miei Preferiti</h2>
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
          {preferiti.map((film) => (
            <tr key={film.imdbID}>
              <td>
                <img className="movie-poster" src={film.Poster} alt={film.Title} />
              </td>
              <td>{film.Title}</td>
              <td>{film.Year}</td>
              <td>{film.Type}</td>
              <td>
                <button className="btn btn-remove" onClick={() => handleRimuovi(film.imdbID)}>
                  Rimuovi
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Preferiti
