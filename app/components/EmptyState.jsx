import React from 'react';

/**
 * EmptyState.jsx - Messaggio per liste vuote (componente pronto all'uso)
 *
 * Riquadro centrato con un'icona grande, un titolo e una riga di testo.
 * Da mostrare al posto di una tabella vuota, quando non c'è ancora nulla
 * da elencare (es. pages/Preferiti.jsx, prima di aggiungere un film).
 *
 * @param {Object} props
 * @param {string} [props.icona=''] - emoji o simbolo mostrato in grande (es. "⭐")
 * @param {string} props.titolo - il messaggio principale, in grassetto
 * @param {string} [props.testo=''] - una riga di spiegazione sotto il titolo
 *
 * @example
 * <EmptyState
 *   icona="⭐"
 *   titolo="Nessun film nei preferiti"
 *   testo="Vai alla ricerca e aggiungi i tuoi film preferiti!"
 * />
 */
function EmptyState({ icona = '', titolo, testo = '' }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">{icona}</div>
      <h3>{titolo}</h3>
      <p>{testo}</p>
    </div>
  );
}

export default EmptyState;
