# AC 3.4 — Aplicación sesión 3

Alumno: **José Luis Mas García**  
Asignatura: Desarrollo de Interfaces Ricos para Internet (DIRI)

## Sobre el proyecto

He realizado una pequeña aplicación para consultar una colección de videojuegos. Está hecha con React, TypeScript, Vite y React Router.

Para separar responsabilidades he utilizado un modelo (`juegos.ts`), un ViewModel (`useCatalogo.ts`) y componentes de vista. El catálogo permite buscar, filtrar y consultar la ficha de los juegos. También tiene páginas de ayuda y una página de error.

## Instrucciones

```bash
npm install
npm run dev
```

Después abre la dirección que indique Vite. Para comprobar la compilación:

```bash
npm run build
```

## Rutas para probar

- `/`
- `/juegos`
- `/juegos/vg03`
- `/ayuda/preguntas`
- `/ayuda/referencia`
- `/pagina-inventada` (404)

## Entrega

En `planificacion/` están el planteamiento de componentes y un boceto inicial en SVG para importarlo a Figma. El prototipo definitivo debe gestionarse allí. En `evidencias/README.md` dejo una lista de las capturas reales a realizar, ya que el profesor pide una por requisito.

El código tiene comentarios `R1`, `R2`, etc. para localizar dónde se cumple cada requisito.
