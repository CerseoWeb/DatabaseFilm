import React, { useState, useEffect } from 'react';
import { getPreferiti, rimuoviPreferito } from '../../scripts/preferiti.js';
import EmptyState from '../components/EmptyState.jsx';
import MovieTable from '../components/MovieTable.jsx';

/**
 * Preferiti.jsx - Pagina dei film preferiti (SCHELETRO da completare)
 *
 * Versione React della logica che nel progetto vanilla era in preferiti.js.
 * Mostra i film salvati in localStorage e permette di rimuoverli.
 *
 * Componenti già pronti da usare (vedi app/components/):
 * - <EmptyState /> messaggio quando non ci sono ancora preferiti
 * - <MovieTable />  tabella dei film con colonna "Azioni" personalizzabile
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
function Preferiti() {
  const [preferiti, setPreferiti] = useState([]);

  useEffect(() => {
    // TODO: caricare i preferiti con getPreferiti() e salvarli con setPreferiti(...)
  }, []);

  function handleRimuovi(imdbID) {
    // TODO: chiamare rimuoviPreferito(imdbID) e aggiornare lo stato `preferiti`
  }

  // Stato vuoto: nessun film salvato
  if (preferiti.length === 0) {
    return (
      <EmptyState
        icona="⭐"
        titolo="Nessun film nei preferiti"
        testo="Vai alla ricerca e aggiungi i tuoi film preferiti!"
      />
    );
  }

  return (
    <MovieTable
      titolo="I Miei Preferiti"
      film={preferiti}
      azioneLabel="Rimuovi"
      azioneClasse="btn btn-remove"
      onAzione={(film) => handleRimuovi(film.imdbID)}
    />
  );
}

export default Preferiti;
