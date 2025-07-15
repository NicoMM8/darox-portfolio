import React from "react";

const Benefits: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            {/* Tag destacado tipo Framer igual que en About, Features y Proceso */}
            <div
              className="
                relative inline-flex w-fit items-center gap-3 px-5 py-2 rounded-[10px]
                border border-white/10
                bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)]
                backdrop-blur-[2.5px]
                mb-4 animate-fade-in-up
                shadow
                overflow-hidden
                tag-destacado
              "
            >
              {/* Línea azul decorativa superior, fina y sutil */}
              <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-[10px] pointer-events-none opacity-70" />
              {/* Bullet blanco */}
              <span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
              {/* Texto con gradiente */}
              <span className="font-semibold text-base tag-destacado-text">
                Beneficios
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              No Solo Diseñamos, <br />
              <span className="gradient-text">Construimos.</span>
            </h3>
            <p className="text-lg text-gray-200 mb-8">
              Si puedes soñarlo, ¡podemos hacerlo realidad!
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                "Mejorada UX",
                "Conversiones Aumentadas",
                "Carga Rápida",
                "Optimización SEO",
                "Personalizable",
                "Escalable",
                "Compromiso Aumentado",
                "Expandable",
                "Seguro",
                "Fácil de Usar"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <svg className="h-6 w-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <a href="#" className="bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition duration-300 inline-flex items-center">
                Contáctanos
                <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://framerusercontent.com/images/nt3TDX5zl4zsmwO69xL44yiUM.jpg" alt="Abstracto 3D Azul" className="rounded-2xl shadow-xl w-full" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg max-w-xs">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Envía Solicitudes Ilimitadas</h4>
                <p className="text-gray-600 mb-4">
                  Disfruta de la libertad de enviar solicitudes ilimitadas sin restricciones. Ya sea que necesites ajustes en el diseño, estamos aquí para ayudarte en cada paso.
                </p>
                <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center">
                  Reserva una Cita
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Benefits