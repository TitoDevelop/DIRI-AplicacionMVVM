import { NavLink, Outlet, Navigate } from 'react-router-dom';

export function Ayuda() {
  return <main className="page"><div className="eyebrow">SOPORTE</div><h1>Centro de ayuda<span className="period">.</span></h1><p className="intro">Información para utilizar el catálogo.</p>
    {/* R4: dos rutas anidadas, mediante Outlet. */}
    <div className="help-layout"><aside className="help-menu"><NavLink to="preguntas">Preguntas más frecuentes</NavLink><NavLink to="referencia">Referencia</NavLink></aside><article className="panel help-body"><Outlet /></article></div>
  </main>;
}
export function Preguntas() {
  return <><h2>Preguntas más frecuentes</h2><h3>¿Cómo selecciono un videojuego?</h3><p>Pulsa sobre cualquiera de las filas del listado para ver su ficha completa.</p><h3>¿Cómo funciona el buscador?</h3><p>Introduce el título completo o su ID y pulsa Buscar. Si no existe, aparece un aviso.</p><h3>¿Puedo filtrar por plataforma?</h3><p>Sí, con el campo Filtrar también puedes escribir una plataforma o un género.</p></>;
}
export function Referencia() {
  return <><h2>Referencia</h2><p>Rutas disponibles en esta práctica:</p><ul><li><code>/juegos</code> — colección completa</li><li><code>/juegos/vg01</code> — título con ese identificador</li><li><code>/ayuda/preguntas</code> — preguntas frecuentes</li><li><code>/ayuda/referencia</code> — esta página</li></ul><p>La información se guarda en un objeto local de TypeScript.</p></>;
}
export function AyudaInicio() { return <Navigate to="preguntas" replace />; }
