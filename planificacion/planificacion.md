# AC 3.4 — Planificación inicial

**Alumno:** José Luis Mas García

## Idea

Una pequeña aplicación para consultar mi colección personal de videojuegos. Se puede entrar al catálogo, buscar un título y ver su ficha. También hay una pantalla de ayuda.

## MVVM

- **Modelo:** `src/models/juegos.ts`. Define los campos de un videojuego y el diccionario `Record<string, Juego>`.
- **Vista:** `src/pages` y `src/components`. Solo pintan los datos y recogen eventos del usuario.
- **ViewModel:** `src/viewmodels/useCatalogo.ts`. Mantiene el estado de selección, búsqueda y filtro, y prepara los datos que necesita la vista.

## Rutas

- `/`: pantalla inicial.
- `/juegos`: todos los títulos.
- `/juegos/:id`: uno solo, por identificador.
- `/ayuda/preguntas`: preguntas frecuentes.
- `/ayuda/referencia`: referencia.
- Cualquier otra ruta: error 404.

## Componentes

| Componente | Qué hace |
| --- | --- |
| App | Define las rutas y el menú común. |
| Menu | Enlaces activos y botón Ayuda. |
| Catalogo | Tabla, buscador, filtro y cuadro de detalle. |
| Modal | Avisa cuando una búsqueda no devuelve resultados. |
| Ayuda | Contenedor de las dos subrutas. |
| Inicio / NoEncontrada | Pantalla de inicio y error 404. |

## Estado y eventos

En `useCatalogo` utilizo `useState` para el texto de búsqueda, el filtro, el título seleccionado y el aviso modal. El filtro sobre el diccionario se calcula con `useMemo`. Para navegar uso React Router.

## Prototipo

El archivo `boceto.svg` es un dibujo de baja fidelidad que se puede importar en Figma. El requisito pide crear primero un prototipo: para la entrega final se debe pasar por Figma y facilitar el enlace o evidencia de ese diseño si Moodle lo solicita.
