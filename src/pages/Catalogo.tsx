import { Link, useParams } from 'react-router-dom';
import { useCatalogo } from '../viewmodels/useCatalogo';
import Modal from '../components/Modal';

export default function Catalogo() {
  const { id } = useParams<{ id?: string }>();
  const vm = useCatalogo(id);
  return (
    // VISTA (R2): tabla de items que lee el ViewModel, sin acceder al modelo directamente.
    <main className="page catalogo">
      <div className="eyebrow">COLECCIÓN / VIDEOJUEGOS</div>
      <h1>Mis videojuegos<span className="period">.</span></h1>
      <p className="intro">Un pequeño registro de los títulos que tengo pendientes y los que ya he terminado.</p>

      <section className="panel">
        <div className="panel-heading"><div><h2>Listado de títulos</h2><p>Selecciona uno para consultar su ficha completa.</p></div><span className="count">{vm.visibles.length} resultados</span></div>
        <div className="tools">
          <form className="search" onSubmit={e => {e.preventDefault(); vm.buscar();}}>
            <label className="sr-only" htmlFor="busqueda">Buscar título o ID</label>
            <input id="busqueda" value={vm.busqueda} onChange={e => vm.setBusqueda(e.target.value)} placeholder="Buscar por título o ID..." />
            <button type="submit">Buscar</button>
          </form>
          {/* Requisito opcional: filtro instantáneo por contenido. */}
          <label className="filter-label">Filtrar <input value={vm.filtro} onChange={e => vm.setFiltro(e.target.value)} placeholder="Título, género..." /></label>
        </div>
        <div className="table-wrap"><table><thead><tr><th>ID</th><th>Nombre</th><th>Plataforma</th><th>Estado</th></tr></thead>
          <tbody>{vm.visibles.map(j => <tr key={j.id} onClick={() => vm.setSeleccionado(j)} tabIndex={0} onKeyDown={e => {if(e.key === 'Enter') vm.setSeleccionado(j);}}><td className="mono">{j.id}</td><td className="name">{j.nombre}</td><td>{j.plataforma}</td><td><span className={'status '+(j.estado==='Jugado'?'done':j.estado==='Pendiente'?'pending':'progress')}>{j.estado}</span></td></tr>)}</tbody></table>
          {vm.visibles.length === 0 && <div className="empty">No hay títulos que coincidan con el filtro o ID.</div>}
        </div>
        <div className="panel-footer">Prueba el parámetro de URL: <Link to="/juegos/vg03">/juegos/vg03</Link> · <Link to="/juegos">ver todos</Link></div>
      </section>

      {/* R6: cuadro de detalle al seleccionar un elemento. */}
      {vm.seleccionado && <section className="detail"><div className="detail-top"><div><span className="eyebrow">FICHA SELECCIONADA</span><h2>{vm.seleccionado.nombre}</h2></div><button onClick={() => vm.setSeleccionado(undefined)} aria-label="Cerrar ficha">×</button></div><dl><div><dt>ID</dt><dd>{vm.seleccionado.id}</dd></div><div><dt>Plataforma</dt><dd>{vm.seleccionado.plataforma}</dd></div><div><dt>Género</dt><dd>{vm.seleccionado.genero}</dd></div><div><dt>Año</dt><dd>{vm.seleccionado.anio}</dd></div><div><dt>Estado</dt><dd>{vm.seleccionado.estado}</dd></div></dl></section>}
      {vm.sinResultado && <Modal cerrar={() => vm.setSinResultado(false)} />}
    </main>
  );
}
