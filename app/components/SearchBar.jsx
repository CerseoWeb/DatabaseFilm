import React from 'react';

/**
 * SearchBar.jsx - Barra di ricerca (componente pronto all'uso)
 *
 * Un <input> di testo dentro un <form>, più il pulsante "Cerca". È un
 * componente "controllato": non tiene uno stato proprio, mostra solo il
 * valore ricevuto tramite `value` e segnala ogni cambiamento tramite
 * `onChange`/`onSubmit`. La logica della ricerca resta nel componente che
 * lo usa (es. pages/Cerca.jsx).
 *
 * @param {Object} props
 * @param {string} props.value - testo attualmente scritto nell'input
 * @param {(event: React.ChangeEvent<HTMLInputElement>) => void} props.onChange
 *   - chiamata a ogni carattere digitato
 * @param {(event: React.FormEvent<HTMLFormElement>) => void} props.onSubmit
 *   - chiamata quando si preme "Cerca" o Invio (l'input è dentro un <form>,
 *   che intercetta entrambi con un solo onSubmit)
 * @param {string} [props.placeholder=''] - testo grigio mostrato quando
 *   l'input è vuoto
 *
 * @example
 * <SearchBar
 *   value={query}
 *   onChange={(e) => setQuery(e.target.value)}
 *   onSubmit={handleCerca}
 *   placeholder="Cerca un film..."
 * />
 */
function SearchBar({ value, onChange, onSubmit, placeholder = '' }) {
  return (
    <form className="search-section" onSubmit={onSubmit}>
      <input
        type="text"
        className="search-bar"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="search-btn">
        Cerca
      </button>
    </form>
  );
}

export default SearchBar;
