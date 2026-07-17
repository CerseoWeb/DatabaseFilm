import React from 'react';

/**
 * SearchBar.jsx - Barra di ricerca (componente pronto all'uso)
 *
 * Input di testo + pulsante "Cerca", completamente controllato dal genitore
 * tramite props. Non contiene logica: la ricerca vera e propria resta nella
 * pagina che lo usa (es. pages/Cerca.jsx).
 */
function SearchBar({ value, onChange, onSubmit, placeholder }) {
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
