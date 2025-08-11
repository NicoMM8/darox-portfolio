// src/data/results.ts

export interface Result {
  id: string
  title: string
  status?: string
  imageUrl: string // Imagen por defecto
  portfolioImageUrl?: string // Imagen para /portfolio
  resultImageUrl?: string    // Imagen para Resultados del index
  logoUrl: string
  description: string         // SOLO para SEO/meta
  webDescription: string      // SOLO para mostrar en la web
  metrics: { value: string; label: string }[]
  url: string                
  year: number               
  categories: string[]       
}

export const results: Result[] = [
  {
    id: 'hole',
    title: 'Golden Hole',
    status: 'NUEVO',
    imageUrl: '/images/golf5.png', // Imagen por defecto
    portfolioImageUrl: '/images/golf1.png', // Imagen para /portfolio
    resultImageUrl: '/images/golf5.png',    // Imagen para Resultados del index
    logoUrl: '/images/golf5.png',
    description: 'Aumentó el compromiso del cliente con presencia digital y campañas dirigidas.',
    webDescription: 'Desarrollamos una campaña integral para Golden Hole, que incluyó desde el rediseño de su imagen de marca hasta la implementación de estrategias de marketing digital. El objetivo era aumentar el compromiso del cliente y mejorar la presencia en línea.',
    metrics: [
      { value: '30%', label: 'Aumento en Ventas' },
      { value: '40%', label: 'Impulso en Retención' },
    ],
    url: '/proyectos/golden-hole', 
    year: 2024,
    categories: ['Branding', 'Campañas']
  },
  {
    id: 'majuelo',
    title: 'El Majuelo del Arlanza',
    imageUrl: '/images/miel6.png',
    portfolioImageUrl: '/images/miel6.png', // Imagen para /portfolio
    resultImageUrl: '/images/miel6.png',    // Imagen para Resultados del index
    logoUrl: '/images/miel6.png',
    description: 'Proyecto de branding, desarrollo y estrategia digital para una marca casera.',
    webDescription: 'Proyecto de branding, desarrollo y estrategia digital para una marca casera. Diseño, creatividad y resultados para crecer online.',
    metrics: [
      { value: '25%', label: 'Tasas de Conversión' },
      { value: '50%', label: 'Reducción en CPA' },
    ],
    url: '/proyectos/MajueloDelArlanza', 
    year: 2024,
    categories: ['Estrategia de Marca', 'Marca Casera']
  },
  {
    id: 'codice13',
    title: 'Códice 13',
    status: 'FRESCO',
    imageUrl: '/images/scaperoom.png',
    portfolioImageUrl: '/images/golf7.png', // Imagen para /portfolio
    resultImageUrl: '/images/golf5.png',    // Imagen para Resultados del index
    logoUrl: '/images/scaperoom.png',
    description: 'Estrategia personalizada que disparó reservas y engagement en solo seis meses.',
    webDescription: 'Desarrollamos la identidad visual y la experiencia digital de Códice 13, integrando narrativa inmersiva, branding enigmático y una web que convierte visitantes en jugadores. El reto fue transmitir misterio y aumentar la conversión en un sector competitivo.',
    metrics: [
      { value: '60%', label: 'Aumento de Tráfico' },
      { value: '35%', label: 'Crecimiento en Reservas' },
    ],
    url: '/proyectos/codice-13', 
    year: 2022,
    categories: ['Entretenimiento', 'Escape Room']
  },
]
