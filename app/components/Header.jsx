import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * Header.jsx - Intestazione dell'app (componente pronto all'uso)
 *
 * Titolo, sottotitolo e barra di navigazione (Cerca / Preferiti), sempre
 * visibile in cima alla pagina. Non riceve props: il contenuto è fisso.
 *
 * Il link "attivo" nella nav (quello evidenziato) non è gestito a mano:
 * <NavLink>, di react-router-dom, aggiunge da solo la classe CSS "active"
 * al link che corrisponde alla pagina corrente, guardando l'URL.
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
