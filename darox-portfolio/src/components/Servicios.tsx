import React from "react";

interface Service {
  title: string
  description: string
  price: string
  duration: string
  features: string[]
  icon: string
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: "Start Pack",
      description: "Ideal para emprendedores que quieren lanzar su idea con una identidad profesional desde el primer día.",
      price: "490€",
      duration: "2 - 3 Semanas",
      features: ["Análisis estratégico del proyecto (revisión de mercado + definición de objetivos ,Naming + slogan (si no lo tiene), Branding visual completo:, Logo principal + adaptaciones (horizontal, vertical, responsive), Paleta de colores + tipografías, Manual visual básico (.PDF), Kit para redes sociales:, Foto de perfil, portada, plantilla de publicaciones"],
      icon: "https://framerusercontent.com/images/3fTl0jOeNCf5k69Fvi5Sj616o.svg"
    },
    {
      title: "Grow Pack",
      description: "Para emprendedores que ya tienen la idea clara y quieren construir una marca sólida, digital y preparada para escalar.",
      price: "980€",
      duration: "3 - 4 Semanas",
      features: ["Archivos + Activos de Marca", "Fácil de Editar y Acceder"],
      icon: "https://framerusercontent.com/images/3fTl0jOeNCf5k69Fvi5Sj616o.svg"
    },
    {
      title: "Real Business Pack",
      description: "Para quienes quieren lanzar un negocio con todo: imagen, presencia digital, estrategia comercial y automatización con IA.",
      price: "1.950€",
      duration: "4 - 6 Semanas",
      features: ["Código HTML + JavaScript + React", "Base de Datos y Back-End"],
      icon: "https://framerusercontent.com/images/QMirkdl4WPEe5bmSFhvVcssWj4.svg"
    }
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white bg-black overflow-hidden">
      {/* Fondo de estrellas igual que el resto de la web */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div id="stars-bg" className="stars-bg" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Tag destacado tipo Framer */}
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
            <span className="text-white/60">Personal, Agencias, Startups.</span>
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl">
            Conecta fácilmente con tus herramientas favoritas. Ya sea tu CRM, plataforma de email marketing, y más.
          </p>
        </div>
        {/* Cards estilo Framer */}
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
              {/* Tag destacado solo en la card del medio */}
              {index === 1 && (
                <div className="absolute top-4 left-4 px-4 py-1 rounded-[10px] border border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] backdrop-blur-[2.5px] text-xs font-semibold text-white shadow">
                  Más Popular
                  <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-full mt-1" />
                </div>
              )}
              {/* Icono grande con fondo y sombra */}
              <div className="flex justify-center items-center mb-6">
                <div className="bg-blue-900/10 p-5 rounded-xl border border-blue-600/15 shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.icon} alt="Icono de Servicio" className="h-12 w-12" />
                </div>
              </div>
              {/* Título y precio */}
              <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl font-bold text-blue-500">{service.price}</span>
                <span className="text-base text-white/60">{service.duration}</span>
              </div>
              {/* Descripción */}
              <p className="text-white/70 mb-6">
                {service.description}
                {index === 0 && (
                  <span className="block mt-3 text-white/80 text-sm">
                    <span className="font-semibold text-blue-400">Incluye:</span>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Análisis estratégico del proyecto (revisión de mercado + definición de objetivos)</li>
                      <li>Naming + slogan (si no lo tiene)</li>
                      <li>Branding visual completo: 
                        <ul className="list-disc ml-6">
                          <li>Logo principal + adaptaciones (horizontal, vertical, responsive)</li>
                          <li>Paleta de colores + tipografías</li>
                          <li>Manual visual básico (.PDF)</li>
                        </ul>
                      </li>
                      <li>Kit para redes sociales:
                        <ul className="list-disc ml-6">
                          <li>Foto de perfil, portada, plantilla de publicaciones</li>
                        </ul>
                      </li>
                    </ul>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xl">🎯</span>
                      <span>Este paquete te da la base profesional para lanzar tu proyecto con claridad, coherencia visual y mensaje estratégico.</span>
                    </div>
                  </span>
                )}
                {index === 1 && (
                  <span className="block mt-3 text-white/80 text-sm">
                    <span className="font-semibold text-yellow-400">Incluye:</span>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Todo lo del Start Pack</li>
                      <li>Desarrollo de propuesta de valor, tono de marca y storytelling</li>
                      <li>Página web profesional (One Page con scroll fluido)</li>
                      <li>Diseño responsive + copy estratégico</li>
                      <li>Optimizada para SEO básico</li>
                      <li>Optimización de bio y estrategia de redes sociales</li>
                      <li>Integración de herramientas básicas con IA (por ejemplo: generación de contenido, automatización de respuestas, etc.)</li>
                    </ul>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xl">🎯</span>
                      <span>Este paquete da el salto de “tengo un logo” a “tengo una marca que comunica, vende y crece en digital”.</span>
                    </div>
                  </span>
                )}
                {index === 2 && (
                  <span className="block mt-3 text-white/80 text-sm">
                    <span className="font-semibold text-blue-600">Incluye:</span>
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Todo lo del Grow Pack</li>
                      <li>Branding avanzado (motion logo, versión animada + versiones para apps/productos físicos)</li>
                      <li>Sitio web completo (hasta 5 secciones, con blog o portafolio si aplica)</li>
                      <li>Implementación de embudo de conversión con automatización (correo, CRM, IA)</li>
                      <li>Calendario editorial + asesoramiento de contenido</li>
                      <li>1 mes de seguimiento personalizado para ayudarte a lanzar todo</li>
                    </ul>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-xl">🎯</span>
                      <span>Este paquete es para quienes quieren lanzar un negocio completo y profesional, listo para crecer y automatizarse.</span>
                    </div>
                  </span>
                )}
              </p>
              {/* Features */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{feature}</span>
                  </div>
                ))}
              </div>
              {/* Botón */}
              <a
                href="#"
                className="w-full mt-auto px-6 py-3 rounded-[10px] bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition border-2 border-blue-600 text-center inline-block"
              >
                Reserva una llamada
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services