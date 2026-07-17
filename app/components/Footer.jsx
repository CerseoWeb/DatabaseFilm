import React from 'react';

/**
 * Footer.jsx - Piè di pagina (componente pronto all'uso)
 *
 * Poche informazioni essenziali: da dove arrivano i dati e dove vengono
 * salvati i preferiti. Non riceve props: il contenuto è fisso, tranne
 * l'anno, calcolato al volo con new Date().getFullYear().
 */
function Footer() {
  return (
    <footer className="app-footer">
      <p>
        Dati forniti da{' '}
        <a href="https://www.omdbapi.com/" target="_blank" rel="noopener noreferrer">
          OMDb API
        </a>
        . I preferiti sono salvati solo nel tuo browser (localStorage).
      </p>
      <p className="footer-year">Progetto didattico &middot; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
