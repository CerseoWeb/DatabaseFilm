import React from 'react';

/**
 * Message.jsx - Banner di messaggio (componente pronto all'uso)
 *
 * Utile per mostrare esiti tipo "nessun film trovato" o errori dell'API
 * (vedi i TODO in pages/Cerca.jsx). Il contenuto del messaggio è deciso
 * dal genitore, qui c'è solo lo stile in base al tipo.
 *
 * Props:
 * - tipo: "success" | "error" | "info"
 * - children: il testo del messaggio
 */
function Message({ tipo = 'info', children }) {
  return <div className={`message ${tipo}`}>{children}</div>;
}

export default Message;
