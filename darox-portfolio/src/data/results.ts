// src/data/results.ts

export interface Result {
  id: string
  title: string
  status?: string
  imageUrl: string
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
    id: 'crimson',
    title: 'Crimson Studio',
    status: 'NUEVO',
    imageUrl:
      '/images/golf2.png',
    logoUrl:
      'https://framerusercontent.com/images/Zjhy8gzEpQFU6Fq7lSmQUHLG3k0.svg',
    description:
      'Estrategia personalizada que disparó ventas en solo seis meses.', // SOLO SEO
    webDescription:
      'Desarrollamos la identidad visual y el e-commerce de Crimson Studio, integrando fotografía de producto, copywriting persuasivo y automatización de ventas. El reto fue transmitir exclusividad y aumentar la conversión en un mercado saturado.', // SOLO WEB
    metrics: [
      { value: '30%', label: 'Aumento en Ventas' },
      { value: '40%', label: 'Impulso en Retención' },
    ],
    url: '/proyectos/miel',      
    year: 2024,                            
    categories: ['E-Commerce', 'Portfolio'] 
  },
  {
    id: 'majuelo',
    title: 'El Majuelo del Arlanza',
    imageUrl:
      '/images/miel4.png',
    logoUrl:
      '/images/miel4.png',
    description:
      'Proyecto de branding, desarrollo y estrategia digital para una marca casera.',
    webDescription:
    'Proyecto de branding, desarrollo y estrategia digital para una marca casera. Diseño, creatividad y resultados para crecer online.',
    metrics: [
      { value: '25%', label: 'Tasas de Conversión' },
      { value: '50%', label: 'Reducción en CPA' },
    ],
    url: '/proyectos/MajueloDelArlanza',
    year: 2024,
    categories: ['Estrategia de Marca', 'Marca Casera']
  },
  {
    id: 'gotham',
    title: 'Gotham Wonder',
    status: 'FRESCO',
    imageUrl:
      '/images/scaperoom.png',
    logoUrl:
      'https://framerusercontent.com/images/w0R0sHJ0c5j0Ywm5U455ynsDo.svg',
    description:
      'Aumentó el compromiso del cliente con presencia digital y campañas dirigidas.',
    webDescription:
      'Desarrollamos una campaña integral para Gotham Wonder, que incluyó desde el rediseño de su imagen de marca hasta la implementación de estrategias de marketing digital. El objetivo era aumentar el compromiso del cliente y mejorar la presencia en línea.',
    metrics: [
      { value: '60%', label: 'Aumento de Tráfico' },
      { value: '35%', label: 'Crecimiento en Ventas' },
    ],
    url: '/proyectos/proyecto3',
    year: 2022,
    categories: ['Branding', 'Campañas']
  },
]
