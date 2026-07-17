/**
 * App.jsx - Componente radice e layout dell'applicazione
 *
 * Contiene l'intestazione (header) con la barra di navigazione e definisce
 * le rotte dell'app tramite react-router-dom:
 *   - "/"           -> pagina di ricerca film        (componente <Cerca />)
 *   - "/preferiti"  -> pagina dei film preferiti     (componente <Preferiti />)
 *
 * Per aggiungere una nuova pagina: creala in app/pages/, importala qui e
 * aggiungi una nuova <Route> dentro <Routes>.
 */
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Cerca from './pages/Cerca.jsx';
import Preferiti from './pages/Preferiti.jsx';

function App() {
  return (
    <div className="container">
      <header>
        <h1>🎬 Database Film</h1>
        <p className="subtitle">Cerca e salva i tuoi film preferiti</p>

        {/* NavLink aggiunge automaticamente la classe "active" alla voce corrente */}
        <nav className="navigation">
          <NavLink to="/" end className="nav-link">
            🔍 Cerca Film
          </NavLink>
          <NavLink to="/preferiti" className="nav-link">
            ⭐ I Miei Preferiti
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Cerca />} />
        <Route path="/preferiti" element={<Preferiti />} />
      </Routes>
    </div>
  );
}

export default App;
