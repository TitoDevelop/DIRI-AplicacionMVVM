// MODELO (R2): diccionario de videojuegos indexado por su ID.
export interface Juego {
  id: string;
  nombre: string;
  plataforma: string;
  genero: string;
  anio: number;
  estado: 'Jugado' | 'Pendiente' | 'En progreso';
}

export const juegos: Record<string, Juego> = {
  vg01: { id: 'vg01', nombre: 'Hollow Knight', plataforma: 'PC', genero: 'Metroidvania', anio: 2017, estado: 'Jugado' },
  vg02: { id: 'vg02', nombre: 'Celeste', plataforma: 'Switch', genero: 'Plataformas', anio: 2018, estado: 'Jugado' },
  vg03: { id: 'vg03', nombre: 'Stardew Valley', plataforma: 'PC', genero: 'Simulación', anio: 2016, estado: 'En progreso' },
  vg04: { id: 'vg04', nombre: 'Outer Wilds', plataforma: 'PS5', genero: 'Aventura', anio: 2019, estado: 'Pendiente' },
  vg05: { id: 'vg05', nombre: 'Hades', plataforma: 'PC', genero: 'Acción', anio: 2020, estado: 'Jugado' },
  vg06: { id: 'vg06', nombre: 'Tunic', plataforma: 'Xbox', genero: 'Aventura', anio: 2022, estado: 'Pendiente' }
};
