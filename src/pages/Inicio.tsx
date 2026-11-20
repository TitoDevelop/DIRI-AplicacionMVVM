import { Link } from 'react-router-dom';
export default function Inicio() {
  return <main className="page home"><div className="eyebrow">MI BIBLIOTECA DIGITAL</div><h1>Cada juego tiene<br/>su historia<span className="period">.</span></h1><p className="intro">Una forma sencilla de organizar lo que juego, lo que termino y lo que todavía quiero descubrir.</p><Link className="primary-link" to="/juegos">Abrir colección <span>↗</span></Link><div className="home-art"><span>01 / EXPLORAR</span><b>PLAY<br/>LIST</b><small>UNA COLECCIÓN PERSONAL</small></div></main>;
}
