import { useMemo, useState } from 'react';
import { juegos, type Juego } from '../models/juegos';

// VIEWMODEL (R2, R6, R7 y opcional): aquí está la lógica, fuera de la vista.
export function useCatalogo(id?: string) {
  const [seleccionado, setSeleccionado] = useState<Juego | undefined>();
  const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState('');
  const [sinResultado, setSinResultado] = useState(false);

  // R2b: si hay parámetro de ruta, solo se muestra el item con ese ID.
  const visibles = useMemo(() => {
    const base = id ? (juegos[id] ? [juegos[id]] : []) : Object.values(juegos);
    return base.filter(j => `${j.nombre} ${j.genero} ${j.plataforma}`.toLowerCase().includes(filtro.toLowerCase()));
  }, [id, filtro]);

  function buscar() {
    // R7: se busca por ID o por nombre completo, sin distinguir mayúsculas.
    const valor = busqueda.trim().toLowerCase();
    const encontrado = Object.values(juegos).find(j => j.id.toLowerCase() === valor || j.nombre.toLowerCase() === valor);
    if (encontrado) {
      setSeleccionado(encontrado);
      setSinResultado(false);
    } else {
      setSinResultado(true);
    }
  }

  return { visibles, seleccionado, setSeleccionado, busqueda, setBusqueda, buscar, filtro, setFiltro, sinResultado, setSinResultado };
}
