import React from 'react';

/**
 * Message.jsx - Banner di messaggio (componente pronto all'uso)
 *
 * Un piccolo banner colorato per mostrare un esito, tipo "nessun film
 * trovato" o un errore dell'API (vedi i TODO in pages/Cerca.jsx).
 *
 * `children` è tutto ciò che viene scritto TRA il tag di apertura e quello
 * di chiusura del componente, come il contenuto di un normale tag HTML
 * (il "Ciao!" in <p>Ciao!</p>) - non va passato come le altre props.
 *
 * @param {Object} props
 * @param {'success' | 'error' | 'info'} [props.tipo='info'] - decide il
 *   colore del banner
 * @param {React.ReactNode} props.children - il contenuto mostrato dentro
 *   il banner
 *
 * @example
 * <Message tipo="error">Nessun film trovato per questa ricerca.</Message>
 */
function Message({ tipo = 'info', children }) {
  return <div className={`message ${tipo}`}>{children}</div>;
}

export default Message;
