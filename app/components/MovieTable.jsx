import React from 'react';

/**
 * MovieTable.jsx - Tabella film (componente pronto all'uso)
 *
 * Renderizza una tabella con una riga per ogni film (poster, titolo, anno,
 * tipo) più una colonna "Azioni" con un pulsante. Il pulsante non è fisso:
 * testo, colore e cosa succede al click sono decisi da chi usa il
 * componente, tramite props. Per questo la stessa tabella serve sia per
 * "Aggiungi ai Preferiti" (pages/Cerca.jsx) sia per "Rimuovi"
 * (pages/Preferiti.jsx), senza scrivere il markup della tabella due volte.
 *
 * `onAzione` e `azioneDisabled` sono props funzione: non vengono eseguite
 * dentro MovieTable, ma passate a React (`onClick`) o richiamate durante
 * il render di ogni riga - lo stesso identico meccanismo di un onClick
 * scritto direttamente su un <button>, solo che qui la funzione arriva
 * "da fuori" invece di essere definita nel componente.
 *
 * @typedef {Object} Film
 * @property {string} imdbID - identificativo univoco su IMDb
 * @property {string} Title
 * @property {string} Year
 * @property {string} Type - es. "movie", "series"
 * @property {string} Poster - URL dell'immagine, oppure "N/A" se assente
 *
 * @param {Object} props
 * @param {string} [props.titolo=''] - testo mostrato sopra la tabella (es.
 *   "I Miei Preferiti"); se omesso non viene mostrato nessun titolo
 * @param {Film[]} props.film - elenco dei film da mostrare, uno per riga
 * @param {string} props.azioneLabel - testo del pulsante (es. "Rimuovi")
 * @param {string} props.azioneClasse - classe CSS del pulsante (es. "btn btn-remove")
 * @param {(film: Film) => void} props.onAzione - chiamata con il film della
 *   riga quando si clicca il pulsante
 * @param {(film: Film) => boolean} [props.azioneDisabled] - decide riga per
 *   riga se il pulsante è disabilitato; se omessa il pulsante è sempre attivo
 *
 * @example
 * <MovieTable
 *   titolo="I Miei Preferiti"
 *   film={preferiti}
 *   azioneLabel="Rimuovi"
 *   azioneClasse="btn btn-remove"
 *   onAzione={(film) => handleRimuovi(film.imdbID)}
 * />
 */
function MovieTable({
  titolo = '',
  film,
  azioneLabel,
  azioneClasse,
  onAzione,
  azioneDisabled = () => false,
}) {
  return (
    <div className="results-section">
      {titolo && <h2>{titolo}</h2>}
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
          {film.map((f) => (
            <tr key={f.imdbID}>
              <td>
                <img className="movie-poster" src={f.Poster} alt={f.Title} />
              </td>
              <td>
                {f.Title}
                {/* ESERCIZIO EXTRA: il titolo potrebbe collegarsi alla
                    pagina di dettaglio di questo film - vedi
                    app/pages/Dettaglio.jsx. */}
              </td>
              <td>{f.Year}</td>
              <td>{f.Type}</td>
              <td>
                <button
                  className={azioneClasse}
                  onClick={() => onAzione(f)}
                  disabled={azioneDisabled(f)}
                >
                  {azioneLabel}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieTable;
