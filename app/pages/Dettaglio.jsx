import React, { useState, useEffect } from 'react';
import { getMovieDetails } from '../../scripts/omdbApi.js';
import FilmDetail from '../components/FilmDetail.jsx';

/**
 * Dettaglio.jsx - Pagina di dettaglio di un singolo film (ESERCIZIO EXTRA)
 *
 * Mostra tutti i dettagli di UN film (non un elenco), recuperato dall'API
 * OMDb a partire dal suo id, preso dall'URL. Il componente che disegna la
 * scheda (<FilmDetail />) è già pronto in app/components/, qui devi solo
 * procurargli il film da mostrare.
 *
 * ========================================
 * PRIMA DI QUESTO FILE (fuori da qui):
 * ========================================
 * 1. In app/App.jsx manca una <Route> per questa pagina: dovrà avere un
 *    segmento dinamico nell'URL, per sapere di quale film si tratta.
 * 2. Serve anche un modo per raggiungerla cliccando da qualche parte
 *    dell'interfaccia (guarda app/components/MovieTable.jsx, condivisa da
 *    entrambe le pagine): un collegamento verso questa pagina, con l'id
 *    del film giusto.
 *
 * ========================================
 * FUNZIONALITÀ DA IMPLEMENTARE (in questo file):
 * ========================================
 * 1. Usa useParams() di react-router-dom per leggere il parametro
 *    dall'URL - il nome che usi qui deve corrispondere a quello scelto
 *    nella <Route>.
 * 2. Usa useEffect per chiamare getMovieDetails() da scripts/omdbApi.js
 *    quando la pagina si carica, e salvare il risultato con setFilm.
 * 3. Finché il film non è ancora arrivato, mostra un messaggio di
 *    caricamento; quando è pronto, passalo a <FilmDetail film={film} />.
 *
 * Nota: getMovieDetails in scripts/omdbApi.js va completato anche lì, se
 * non l'hai già fatto come bonus.
 */
function Dettaglio() {
  // TODO: leggi l'id del film dall'URL con useParams()
  const [film, setFilm] = useState(null);

  useEffect(() => {
    // TODO: chiamare getMovieDetails() con l'id del film e salvare il risultato con setFilm
  }, []); // TODO: aggiungi la dipendenza giusta, altrimenti l'effetto non riparte se cambia il film

  if (!film) {
    return <p>Caricamento...</p>;
  }

  return <FilmDetail film={film} />;
}

export default Dettaglio;
