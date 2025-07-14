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
      title: "Sprint Completo de Sitio Web",
      description: "Al optimizar el proceso y centrarnos en hitos clave, aseguramos que tu sitio web esté listo para salir en poco tiempo, sin sacrificar la calidad.",
      price: "$2500",
      duration: "2 - 3 Semanas",
      features: ["Diseño + Desarrollo en Framer", "Elementos Interactivos"],
      icon: "https://framerusercontent.com/images/3fTl0jOeNCf5k69Fvi5Sj616o.svg"
    },
    {
      title: "Paquete Completo de Diseño",
      description: "Desde diseños de logotipos personalizados hasta guías de marca completas, diseño web y materiales de marketing, cubrimos todos los aspectos de tu presencia visual.",
      price: "$4500",
      duration: "3 - 4 Semanas",
      features: ["Archivos + Activos de Marca", "Fácil de Editar y Acceder"],
      icon: "https://framerusercontent.com/images/3fTl0jOeNCf5k69Fvi5Sj616o.svg"
    },
    {
      title: "Desarrollo Full Stack",
      description: "Ya sea que estés construyendo un sitio web simple o una aplicación web compleja, nuestro equipo proporciona soluciones escalables adaptadas a tus necesidades, asegurando que tu proyecto sea robusto.",
      price: "$7500",
      duration: "4 - 6 Semanas",
      features: ["Código HTML + JavaScript + React", "Base de Datos y Back-End"],
      icon: "https://framerusercontent.com/images/QMirkdl4WPEe5bmSFhvVcssWj4.svg"
    }
  ]

  return (
    <section className="py-10 px-2 sm:px-4 lg:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://framerusercontent.com/images/Nx7bt7sxDAxlLsAxW9jTN1wUsY.jpeg" alt="Hombre usando tablet" className="rounded-2xl shadow-xl w-full" loading="lazy" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-sm font-medium text-indigo-600 mb-2">Nuestros Servicios</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Obtén Servicios de Alta Calidad <br />
              <span className="gradient-text">Claros y Remotos.</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Descubre nuestra gama de servicios diseñados para elevar tu marca y llevar tu negocio al siguiente nivel.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 shadow-md hover:shadow-xl transition duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={service.icon} alt="Icono de Servicio" className="h-6 w-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">{service.title}</h4>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <p className="text-3xl font-bold text-indigo-600">{service.price}</p>
                  <p className="text-gray-500">/ Proyecto</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-indigo-600">{service.duration}</p>
                  <p className="text-gray-500">Duración</p>
                </div>
              </div>
              <div className="space-y-3">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition duration-300 inline-flex items-center">
            Contáctanos
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services