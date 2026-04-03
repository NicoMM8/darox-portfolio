import React from "react";
import Image from "next/image";
import Link from 'next/link'

interface Service {
  title: string
  description: string
  price: string
  duration: string
  features: string[]
  icon: string
}

// Datos estáticos fuera del componente para evitar recrearlos en cada render
const services: Service[] = [
  {
    title: "Start Pack (Paquete Inicial)",
    description: "No diseñamos logos bonitos para ganar premios; diseñamos identidades preparadas para vender desde el día 1. Listo en 3 semanas, sin procesos infinitos ni presupuestos sorpresa.",
    price: "490€",
    duration: "2 - 3 Semanas",
    features: [
      "Análisis estratégico del proyecto (revisión de mercado + definición de objetivos)",
      "Naming + eslogan (creación de nombre si no lo tiene)",
      "Branding visual completo (identidad corporativa)",
      "Logo principal + adaptaciones (horizontal, vertical, adaptable a móviles)",
      "Paleta de colores + tipografías",
      "Manual visual básico (.PDF)",
      "Kit para redes sociales",
      "Foto de perfil, portada, plantilla de publicaciones"
    ],
    icon: "/images/Start_Pack.png"
  },
  {
    title: "Grow Pack (Paquete Crecimiento)",
    description: "Diseño UI/UX de calidad nacional (nivel startup), a precios accesibles. Entregamos una web enfocada en ventas, rápida, con SEO local y textos persuasivos.",
    price: "980€",
    duration: "3 - 4 Semanas",
    features: [
      "Todo lo incluido en el Paquete Inicial",
      "Desarrollo de propuesta de valor, tono de marca y narrativa persuasiva (storytelling)",
      "Página web profesional (web de sección única o One Page con navegación fluida)",
      "Diseño adaptable (responsive) + textos persuasivos de venta (copy estratégico)",
      "Optimizada para posicionamiento en buscadores (SEO básico)",
      "Optimización de perfil social y estrategia de contenido",
      "Integración de herramientas básicas con Inteligencia Artificial"
    ],
    icon: "/images/Growth_Pack.png"
  },
  {
    title: "Real Business Pack (Paquete Ejecutivo)",
    description: "A tu negocio no le sirve de nada tener visitas si gestionas clientes en un Excel. Construimos un sistema (Embudo + CRM + Automatizaciones) para facturar en automático.",
    price: "1.950€",
    duration: "4 - 6 Semanas",
    features: [
      "Todo lo incluido en el Paquete Crecimiento",
      "Branding avanzado (logotipo animado o motion logo, versiones para apps)",
      "Sitio web completo (hasta 5 secciones, con blog o portafolio si aplica)",
      "Implementación de embudo de ventas con automatización (gestor de clientes CRM y email marketing)",
      "Calendario editorial + asesoramiento de contenido",
      "1 mes de seguimiento técnico y estratégico post-lanzamiento"
    ],
    icon: "/images/Business_Pack.png"
  }
]

const Services: React.FC = () => {

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white bg-black/10 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tag destacado */}
        <div className="mb-8">
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
              Precios
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text">
            Planes para todos los negocios,<br />
            <span className="gradient-text">Personal, Agencias, Startups.</span>
          </h2>
          <p className="text-lg text-white mb-8 max-w-1xl">
            Conecta fácilmente con tus herramientas favoritas. Ya sea tu CRM, plataforma de email marketing, y más.
          </p>
        </div>
        {/* Cards estilo destacado */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                relative bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)]
                border border-white/10 rounded-2xl shadow-xl p-6 flex flex-col group overflow-hidden
                backdrop-blur-[2.5px]
                transition duration-300 hover:scale-[1.03] hover:shadow-2xl
              "
            >
              {/* Línea azul decorativa superior */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-2xl" />
              {/* Tag destacado solo en la card del medio */}
              {index === 1 && (
                <div className="absolute top-4 left-4 px-4 py-1 rounded-[10px] border border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] backdrop-blur-[2.5px] text-xs font-semibold text-white shadow">
                  Más Popular
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-full mt-1" />
                </div>
              )}
              {/* Icono grande con fondo y sombra */}
              <div className="flex justify-center items-center mb-6 relative">
                <div className="bg-blue-900/10 p-5 rounded-xl border border-blue-600/15 shadow-lg">
                  <Image
                    src={service.icon}
                    alt={`Icono del servicio ${service.title} de DAROX`}
                    width={48}
                    height={48}
                    className="h-12 w-12"
                    priority={index === 0}
                  />
                </div>
                {/* Glow animado opcional */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-blue-500 opacity-20 blur-2xl rounded-full pointer-events-none group-hover:opacity-40 transition" />
              </div>
              {/* Título y precio */}
              <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-blue-500">{service.price}</span>
                <span className="text-base text-white/60">{service.duration}</span>
              </div>
              {/* Descripción y detalles para todas las tarjetas */}
              <div className="mb-6">
                <p className="text-base text-white/70 leading-relaxed mb-4 text-left">
                  {service.description}
                </p>
                {/* Badges opcionales */}
                {index === 0 && (
                  <div className="flex gap-2 mb-4">
                    <span className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-lg">100+ Proyectos</span>
                    <span className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-lg">75+ Revisiones</span>
                  </div>
                )}
                {index === 1 && (
                  <div className="flex gap-2 mb-4">
                    <span className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-lg">Web incluida</span>
                    <span className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-lg">IA Básica</span>
                  </div>
                )}
                {index === 2 && (
                  <div className="flex gap-2 mb-4">
                    <span className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-lg">Automatización</span>
                    <span className="bg-white/10 text-white/80 text-xs font-semibold px-3 py-1 rounded-lg">Seguimiento 1 mes</span>
                  </div>
                )}
                {/* Features tipo check */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/80 text-sm">
                      <Image
                        src="/images/tick.png"
                        alt=""
                        width={20}
                        height={20}
                        className="h-5 w-5 mr-2 flex-shrink-0"
                        loading="lazy"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Botón */}
              <Link
                href="/contacto"
                className="
                  inline-flex items-center justify-center
                  px-4 py-2
                  rounded-[10px]
                  border-4 border-white/15
                  bg-blue-700
                  about-shadow
                  text-white font-semibold
                  transition-all duration-300
                  hover:bg-blue-800 hover:scale-105
                  animate-fade-in-up
                  w-full mt-auto text-center
                "
              >
                Reserva una llamada
              </Link>
              {/* Imagen en la esquina inferior derecha SOLO para la última card */}
              {index === 2 && (
                <Image
                  src="/images/icon.svg"
                  alt="Icono decorativo del Real Business Pack"
                  width={96}
                  height={96}
                  className="absolute right-2 bottom-8 h-24 w-24 object-contain opacity-80 pointer-events-none"
                  loading="lazy"
                />
              )}
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
                  "description": "Identidades visuales preparadas para vender desde el día 1. Logo principal, paleta, tipografías y manual básico.",
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
                  "description": "Diseño UI/UX de calidad startup con SEO local y copywriting persuasivo.",
                  "price": "980.00",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "Offer",
                  "name": "Real Business Pack (CRM y Automatizaciones)",
                  "description": "Embudo de ventas con automatización, CRM integrado y seguimiento comercial.",
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