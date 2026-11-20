import { Link } from 'react-router-dom';
// R3: ruta comodín para páginas que no existen.
export default function NoEncontrada() {
 return <main className="page notfound"><div className="error-code">404</div><h1>Por aquí no hay nada.</h1><p>La dirección que has escrito no corresponde a ninguna página.</p><Link to="/">Volver al inicio</Link></main>;
}
