import React from 'react';

/**
 * MovieTable.jsx - Tabella film (componente pronto all'uso)
 *
 * Mostra un elenco di film (poster, titolo, anno, tipo) con una colonna
 * "Azioni" personalizzabile, così può essere usata sia in pages/Cerca.jsx
 * ("Aggiungi ai Preferiti") sia in pages/Preferiti.jsx ("Rimuovi").
 *
 * Props:
 * - titolo: string opzionale, titolo sopra la tabella
 * - film: array di film { imdbID, Title, Year, Type, Poster }
 * - azioneLabel: testo del pulsante nella colonna "Azioni"
 * - azioneClasse: classe CSS del pulsante (es. "btn btn-add")
 * - onAzione(film): funzione chiamata al click del pulsante
 * - azioneDisabled(film): funzione opzionale, true per disabilitare il pulsante
 */
function MovieTable({ titolo, film, azioneLabel, azioneClasse, onAzione, azioneDisabled }) {
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
              <td>{f.Title}</td>
              <td>{f.Year}</td>
              <td>{f.Type}</td>
              <td>
                <button
                  className={azioneClasse}
                  onClick={() => onAzione(f)}
                  disabled={azioneDisabled ? azioneDisabled(f) : false}
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
