import React, { useState } from 'react';
import { searchMovies } from '../../scripts/omdbApi.js';
import { aggiungiPreferito, isPreferito } from '../../scripts/preferiti.js';
import SearchBar from '../components/SearchBar.jsx';
import MovieTable from '../components/MovieTable.jsx';
import Message from '../components/Message.jsx';

/**
 * Cerca.jsx - Pagina di ricerca film (SCHELETRO da completare)
 *
 * Versione React della logica che nel progetto vanilla era in index.js.
 * L'obiettivo è cercare film tramite l'API OMDb e mostrarli in una tabella,
 * con un pulsante per aggiungerli ai preferiti.
 *
 * Componenti già pronti da usare (vedi app/components/):
 * - <SearchBar />   barra di ricerca (input + pulsante)
 * - <MovieTable />  tabella dei film con colonna "Azioni" personalizzabile
 * - <Message />     banner per messaggi di errore/info/successo
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
 * - Gestisci il caso "nessun risultato" e gli errori dell'API, mostrandoli
 *   con <Message tipo="error">...</Message> o tipo="info"
 * - Se il Poster è "N/A", mostra un placeholder
 */
function Cerca() {
  const [query, setQuery] = useState('');
  const [risultati, setRisultati] = useState([]);
  const [messaggio, setMessaggio] = useState(null); // { tipo: 'error' | 'info', testo: '...' } oppure null

  async function handleCerca(e) {
    e.preventDefault();
    // TODO: chiamare searchMovies(query) e salvare l'array in setRisultati
    // TODO: gestire "nessun film trovato" ed eventuali errori con setMessaggio(...)
  }

  function handleAggiungi(film) {
    // TODO: chiamare aggiungiPreferito(film) e aggiornare l'interfaccia
  }

  return (
    <>
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSubmit={handleCerca}
        placeholder="Cerca un film (es: Matrix, Inception, Titanic)..."
      />

      {messaggio && <Message tipo={messaggio.tipo}>{messaggio.testo}</Message>}

      {/* TABELLA RISULTATI: mostrata solo se ci sono risultati */}
      {risultati.length > 0 && (
        <MovieTable
          titolo="Risultati della Ricerca"
          film={risultati}
          azioneLabel="Aggiungi ai Preferiti"
          azioneClasse="btn btn-add"
          onAzione={handleAggiungi}
          azioneDisabled={(film) => isPreferito(film.imdbID)}
        />
      )}
    </>
  );
}

export default Cerca;
