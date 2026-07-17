import React from 'react';

/**
 * FilmDetail.jsx - Scheda dettagliata di un film (componente pronto all'uso)
 *
 * Mostra le informazioni di un film recuperate con getMovieDetails() da
 * scripts/omdbApi.js: poster grande, titolo, generi, durata, voto, trama
 * e cast. Pensato per la pagina di dettaglio dell'esercizio extra (vedi
 * app/pages/Dettaglio.jsx) una volta che il film è stato caricato dall'API.
 *
 * @typedef {Object} FilmCompleto
 * @property {string} imdbID
 * @property {string} Title
 * @property {string} Year
 * @property {string} Poster - URL dell'immagine, oppure "N/A" se assente
 * @property {string} Genre - generi separati da virgola (es. "Action, Sci-Fi")
 * @property {string} Runtime - es. "136 min"
 * @property {string} Director
 * @property {string} Actors - attori separati da virgola
 * @property {string} Plot - trama del film
 * @property {string} imdbRating - voto IMDb, es. "8.7"
 *
 * @param {Object} props
 * @param {FilmCompleto} props.film - l'oggetto restituito da getMovieDetails()
 *
 * @example
 * <FilmDetail film={film} />
 */
function FilmDetail({ film }) {
  const posterSrc =
    film.Poster && film.Poster !== 'N/A'
      ? film.Poster
      : 'https://via.placeholder.com/300x445?text=No+Poster';

  return (
    <article className="film-detail">
      <img className="film-detail-poster" src={posterSrc} alt={film.Title} />

      <div className="film-detail-info">
        <h2>
          {film.Title} <span className="film-detail-year">({film.Year})</span>
        </h2>
        <p className="film-detail-meta">
          {film.Genre} &middot; {film.Runtime} &middot; ⭐ {film.imdbRating}/10
        </p>
        <p className="film-detail-plot">{film.Plot}</p>
        <p>
          <strong>Regia:</strong> {film.Director}
        </p>
        <p>
          <strong>Cast:</strong> {film.Actors}
        </p>
      </div>

      {/* ============================================================
          ESERCIZIO BONUS
          ============================================================
          Per ora questo componente mostra solo i dettagli: non c'è modo
          di salvare il film nei preferiti da qui. Se vuoi, prova ad
          aggiungerlo tu, riusando la stessa logica già scritta per il
          pulsante "Aggiungi ai Preferiti" nella pagina di ricerca.
      */}
    </article>
  );
}

export default FilmDetail;
