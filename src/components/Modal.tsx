export default function Modal({ cerrar }: { cerrar: () => void }) {
  return (
    // R7b: diálogo modal cuando el buscador no encuentra un videojuego.
    <div className="modal-backdrop" onMouseDown={cerrar}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="titulo-modal" onMouseDown={e => e.stopPropagation()}>
        <span className="modal-symbol">!</span>
        <h2 id="titulo-modal">No hay resultados</h2>
        <p>No hemos encontrado ese título o identificador. Prueba con otro nombre.</p>
        <button autoFocus onClick={cerrar}>Entendido</button>
      </div>
    </div>
  );
}
