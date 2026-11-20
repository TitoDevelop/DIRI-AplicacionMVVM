import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import { Ayuda, AyudaInicio, Preguntas, Referencia } from './pages/Ayuda';
import NoEncontrada from './pages/NoEncontrada';

export default function App() {
  return <BrowserRouter><Menu /><Routes>
    <Route path="/" element={<Inicio />} />
    {/* R2b: la ruta admite el ID opcional con dos rutas. */}
    <Route path="/juegos" element={<Catalogo />} />
    <Route path="/juegos/:id" element={<Catalogo />} />
    {/* R4: las dos páginas hijas se renderizan dentro de Ayuda. */}
    <Route path="/ayuda" element={<Ayuda />}><Route index element={<AyudaInicio />} /><Route path="preguntas" element={<Preguntas />} /><Route path="referencia" element={<Referencia />} /></Route>
    <Route path="*" element={<NoEncontrada />} />
  </Routes><footer className="footer">PRÁCTICA AC 3.4 <span>·</span> JOSÉ LUIS MAS GARCÍA</footer></BrowserRouter>;
}
