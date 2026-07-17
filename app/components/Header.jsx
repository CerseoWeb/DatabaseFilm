import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Header.jsx - Intestazione dell'app (componente pronto all'uso)
 *
 * Titolo, sottotitolo e barra di navigazione tra le pagine.
 * Estratto da App.jsx per avere un primo esempio di componente.
 */
function Header() {
  return (
    <header>
      <div className="header-inner">
        <div className="brand">
          <h1>🎬 Database Film</h1>
          <p className="subtitle">Cerca e salva i tuoi film preferiti</p>
        </div>

        {/* NavLink aggiunge automaticamente la classe "active" alla voce corrente */}
        <nav className="navigation">
          <NavLink to="/" end className="nav-link">
            🔍 Cerca Film
          </NavLink>
          <NavLink to="/preferiti" className="nav-link">
            ⭐ I Miei Preferiti
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
