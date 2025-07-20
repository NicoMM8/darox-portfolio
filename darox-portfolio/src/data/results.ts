// src/data/results.ts

export interface Result {
  id: string
  title: string
  status?: string
  imageUrl: string
  logoUrl: string
  description: string
  metrics: { value: string; label: string }[]
  url: string                // Añadido
  year: number               // Añadido
  categories: string[]       // Añadido
}

export const results: Result[] = [
  {
    id: 'crimson',
    title: 'Crimson Studio',
    status: 'NUEVO',
    imageUrl:
      'https://framerusercontent.com/images/gJpgMqolxrZFesWkDXnNXZLWBoY.jpeg',
    logoUrl:
      'https://framerusercontent.com/images/Zjhy8gzEpQFU6Fq7lSmQUHLG3k0.svg',
    description:
      'Estrategia personalizada que disparó ventas en solo seis meses.',
    metrics: [
      { value: '30%', label: 'Aumento en Ventas' },
      { value: '40%', label: 'Impulso en Retención' },
    ],
    url: '/proyectos/miel',      // Ejemplo
    year: 2024,                            // Ejemplo
    categories: ['E-Commerce', 'Portfolio'] // Ejemplo
  },
  {
    id: 'raven',
    title: 'Raven Company Inc',
    imageUrl:
      'https://framerusercontent.com/images/JCaZzme2XYHwWAWbEWjb3W3WpE.jpeg',
    logoUrl:
      'https://framerusercontent.com/images/rQyxKxtqvKlVrHFyMDg7VnuiKNc.svg',
    description:
      'Operaciones optimizadas reduciendo costos con nuestras soluciones de automatización.',
    metrics: [
      { value: '25%', label: 'Tasas de Conversión' },
      { value: '50%', label: 'Reducción en CPA' },
    ],
    url: '/proyectos/proyecto2',
    year: 2023,
    categories: ['Automatización', 'Empresa']
  },
  {
    id: 'gotham',
    title: 'Gotham Wonder',
    status: 'FRESCO',
    imageUrl:
      'https://framerusercontent.com/images/4sfXO1JN4OBl4RWb4t9FBOXw.jpeg',
    logoUrl:
      'https://framerusercontent.com/images/w0R0sHJ0c5j0Ywm5U455ynsDo.svg',
    description:
      'Aumentó el compromiso del cliente con presencia digital y campañas dirigidas.',
    metrics: [
      { value: '60%', label: 'Aumento de Tráfico' },
      { value: '35%', label: 'Crecimiento en Ventas' },
    ],
    url: '/proyectos/proyecto3',
    year: 2022,
    categories: ['Branding', 'Campañas']
  },
]
