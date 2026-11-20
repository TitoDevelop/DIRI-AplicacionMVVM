import { NavLink, useNavigate } from 'react-router-dom';

export default function Menu() {
  const navigate = useNavigate();
  return (
    // R1: la navegación siempre permanece visible y NavLink marca la ruta activa.
    <header className="topbar">
      <div className="brand"><span className="brand-icon">▦</span><span>LA ESTANTERÍA <small>catálogo personal</small></span></div>
      <nav aria-label="Navegación principal">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/juegos">Videojuegos</NavLink>
        {/* R5: botón que abre la página de ayuda. */}
        <button type="button" className="help-link" onClick={() => navigate('/ayuda')}>Ayuda ?</button>
      </nav>
    </header>
  );
}
