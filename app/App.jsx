import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Cerca from './pages/Cerca.jsx';
import Preferiti from './pages/Preferiti.jsx';

/**
 * App.jsx - Componente radice e layout dell'applicazione
 *
 * Contiene l'intestazione (header) con la barra di navigazione, il piè di
 * pagina, e definisce le rotte dell'app tramite react-router-dom:
 *   - "/"           -> pagina di ricerca film        (componente <Cerca />)
 *   - "/preferiti"  -> pagina dei film preferiti     (componente <Preferiti />)
 *
 * Per aggiungere una nuova pagina: creala in app/pages/, importala qui e
 * aggiungi una nuova <Route> dentro <Routes>.
 */
function App() {
  return (
    <>
      <Header />

      <main className="container">
        <Routes>
          <Route path="/" element={<Cerca />} />
          <Route path="/preferiti" element={<Preferiti />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
