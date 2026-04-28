import React from "react";
import Link from 'next/link'

interface Service {
  title: string
  description: string
  price: string
  duration: string
  features: string[]
  missingFeatures?: string[] // Para el efecto FOMO
  url: string
  contactUrl: string
  ctaText: string
  popular?: boolean
}

// Datos estáticos fuera del componente para evitar recrearlos en cada render
const services: Service[] = [
  {
    title: "Start Pack (Inicial)",
    description: "Deja de competir por precio. Una identidad visual premium estructurada para transmitir autoridad y vender desde tu primer día en el mercado.",
    price: "490€",
    duration: "2 - 3 Semanas",
    features: [
      "Identidad visual completa",
      "Logo + versiones",
      "Paleta + tipografía",
      "Kit para redes sociales"
    ],
    missingFeatures: [
      "Página web profesional",
      "Automatización CRM"
    ],
    url: "/servicios/branding-identidad",
    contactUrl: "/contacto?pack=start",
    ctaText: "Iniciar mi Marca",
    popular: false
  },
  {
    title: "Grow Pack (Crecimiento)",
    description: "Diseño web enfocado en ventas, rápida, con SEO local y textos que atacan el dolor de tu cliente.",
    price: "980€",
    duration: "3 - 4 Semanas",
    features: [
      "Todo lo incluido en el Start Pack",
      "Web One-Page de alta conversión",
      "Copywriting persuasivo",
      "SEO Básico local"
    ],
    missingFeatures: [
      "Integración de CRM Automático",
      "Embudos de Email Marketing"
    ],
    url: "/servicios/desarrollo-web",
    contactUrl: "/contacto?pack=grow",
    ctaText: "Quiero esta Web",
    popular: true
  },
  {
    title: "Business Pack (Ejecutivo)",
    description: "A tu negocio no le sirve tener visitas si gestionas clientes en un Excel. Sistema automatizado completo.",
    price: "1.950€",
    duration: "4 - 6 Semanas",
    features: [
      "Todo lo incluido en el Grow Pack",
      "Web Corporativa Completa (Múltiples páginas)",
      "Implementación de CRM y Embudo",
      "Sistema de Email Marketing",
      "Soporte Post-Lanzamiento"
    ],
    url: "/servicios/automatizacion-ia-sistemas",
    contactUrl: "/contacto?pack=business",
    ctaText: "Automatizar mi Negocio",
    popular: false
  }
]

const Services: React.FC = () => {

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white bg-black/10 overflow-hidden" id="servicios">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header de Precios */}
        <div className="mb-12 flex flex-col items-center text-center">
          <div className="
            relative inline-flex w-fit items-center gap-3 px-5 py-2 rounded-[10px]
            border border-white/10
            bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)]
            backdrop-blur-[2.5px]
            mb-4 animate-fade-in-up
            shadow
            overflow-hidden
            tag-destacado
          ">
            <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-[10px] pointer-events-none opacity-70" />
            <span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
            <span className="font-semibold text-base tag-destacado-text bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Precios y Paquetes
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            Transparencia total.<br />
            <span className="gradient-text">Elige tu vehículo de crecimiento.</span>
          </h2>
          <p id="servicios-intro" className="text-lg text-white/70 max-w-2xl">
            Sin costes ocultos. Sin presupuestos que se inflan a mitad de mes. Selecciona el sistema que tu negocio necesita hoy.
          </p>
        </div>

        {/* Cards de Precios */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                relative
                ${service.popular 
                  ? 'bg-black/90 border-blue-500/50 shadow-[0_0_30px_rgba(0,85,255,0.15)] scale-100 lg:scale-105 z-10' 
                  : 'bg-black/40 border-white/10'} 
                border rounded-2xl p-8 flex flex-col group overflow-hidden
                backdrop-blur-md
                transition-all duration-300 hover:scale-[1.02]
              `}
            >
              {/* Línea decorativa superior sutil */}
              <div className={`absolute top-0 left-0 w-full h-[2px] ${service.popular ? 'bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600' : 'bg-gradient-to-r from-transparent via-white/20 to-transparent'} rounded-t-2xl opacity-80`} />
              
              {/* Tag destacado Más Popular */}
              {service.popular && (
                <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-white text-[10px] font-extrabold text-black shadow-lg uppercase tracking-widest">
                  Más Popular
                </div>
              )}

              {/* Título y precio */}
              <div className="mb-6 mt-4">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <div className="flex items-end gap-2 mb-3">
                  <span className="text-5xl font-extrabold text-white tracking-tight">{service.price}</span>
                  <span className="text-sm text-white/50 mb-1">/ pago único</span>
                </div>
                <div className="text-xs text-white/50 font-medium uppercase tracking-widest border border-white/10 inline-block px-3 py-1.5 rounded-md w-fit">
                  ⏱️ {service.duration}
                </div>
              </div>

              <p className="text-sm text-white/70 leading-relaxed mb-8 text-left min-h-[60px]">
                {service.description}
              </p>

              {/* Features tipo check y missing */}
              <div className="mb-8 flex-1">
                <ul className="space-y-4">
                  {service.features.map((feature, i) => (
                    <li key={`active-${i}`} className="flex items-start text-white/70 group-hover:text-white transition-colors duration-300 text-sm font-medium">
                      <svg className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 transition-all duration-300 ${service.popular ? 'text-blue-500 group-hover:text-blue-400 group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]' : 'text-white/30 group-hover:text-white/80'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                  {service.missingFeatures && service.missingFeatures.map((feature, i) => (
                    <li key={`missing-${i}`} className="flex items-start text-white/50 text-sm font-medium">
                      <svg className="w-5 h-5 mr-3 flex-shrink-0 text-white/40 mt-0.5 group-hover:text-red-400/60 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="line-through decoration-white/60 decoration-[2px] leading-tight group-hover:text-white/70 transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Botones */}
              <div className="flex flex-col gap-4 mt-auto">
                <Link
                  href={service.contactUrl}
                  className={`
                    inline-flex items-center justify-center
                    px-4 py-3
                    rounded-xl
                    font-bold text-sm uppercase tracking-wider
                    transition-all duration-300 w-full text-center
                    ${service.popular 
                      ? 'bg-blue-700 about-shadow text-white hover:bg-blue-600 shadow-[0_0_20px_rgba(29,78,216,0.4)] hover:shadow-[0_0_30px_rgba(29,78,216,0.6)] hover:scale-[1.03]' 
                      : 'border border-white/20 bg-transparent text-white hover:border-blue-700/50 hover:bg-blue-700/20 hover:shadow-[0_0_15px_rgba(29,78,216,0.3)] hover:text-white hover:scale-[1.02]'}
                  `}
                >
                  {service.ctaText}
                </Link>
                <Link
                  href={service.url}
                  className="text-xs text-center text-white/40 hover:text-white transition-colors underline underline-offset-4"
                >
                  Ver todos los detalles técnicos &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Schema.org markup for AEO / Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "Offer",
                  "name": "Start Pack (Branding Inicial)",
                  "description": "Identidades visuales preparadas para vender desde el día 1.",
                  "price": "490.00",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "Offer",
                  "name": "Grow Pack (Diseño Web UX/UI)",
                  "description": "Diseño UI/UX con SEO local y copywriting persuasivo.",
                  "price": "980.00",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Offer",
                  "name": "Business Pack (CRM y Automatizaciones)",
                  "description": "Embudo de ventas con automatización y CRM integrado.",
                  "price": "1950.00",
                  "priceCurrency": "EUR"
                }
              }
            ]
          })
        }}
      />
    </section>
  )
}

export default Services