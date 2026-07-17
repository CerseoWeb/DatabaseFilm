import React from 'react';

/**
 * EmptyState.jsx - Messaggio per liste vuote (componente pronto all'uso)
 *
 * Riquadro centrato con icona, titolo e testo. Usato ad esempio in
 * pages/Preferiti.jsx quando non ci sono ancora film salvati.
 */
function EmptyState({ icona, titolo, testo }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">{icona}</div>
      <h3>{titolo}</h3>
      <p>{testo}</p>
    </div>
  );
}

export default EmptyState;
