const Process: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-indigo-600 mb-2">¿Cómo Trabajamos?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Simplificamos el Viaje <br />
            <span className="gradient-text">Desde el Diseño Hasta el Lanzamiento.</span>
          </h3>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">
            Hacemos que sea fácil dar vida a tus ideas, guiándote desde el concepto hasta un producto completamente lanzado.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black bg-opacity-60 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <img src="https://framerusercontent.com/images/KfsUX7SjXWF8GYOil2kfkZ9e1PA.png" alt="Icono de Etapa" className="h-8 w-8" />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Etapa 1</span>
                <h4 className="text-xl font-bold text-white">Inicio</h4>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              La etapa de inicio es donde todo comienza. Nos alineamos contigo para entender tus objetivos, visión y expectativas. A través de discusiones en profundidad e investigación exhaustiva.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Consulta Integral</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Hoja de Ruta del Proyecto</span>
              </div>
            </div>
          </div>
          <div className="bg-black bg-opacity-60 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <img src="https://framerusercontent.com/images/KfsUX7SjXWF8GYOil2kfkZ9e1PA.png" alt="Icono de Etapa" className="h-8 w-8" />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Etapa 2</span>
                <h4 className="text-xl font-bold text-white">Ejecución</h4>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Con una estrategia clara en su lugar, pasamos a la fase de ejecución, donde las ideas cobran vida. Nuestro equipo trabaja de manera altamente eficiente y colaborativa para implementar el plan.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Integración Perfecta</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Colaboración en Tiempo Real</span>
              </div>
            </div>
          </div>
          <div className="bg-black bg-opacity-60 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <img src="https://framerusercontent.com/images/3fTl0jOeNCf5k69Fvi5Sj616o.svg" alt="Icono de Etapa" className="h-8 w-8" />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-500">Etapa 3</span>
                <h4 className="text-xl font-bold text-white">Entrega</h4>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Una vez que el diseño y el desarrollo están finalizados, hacemos la transición sin problemas a la etapa de entrega. Aquí, te proporcionamos todos los activos, documentación y soporte para un lanzamiento fluido.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Soporte Continuo</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Documentación</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#" className="bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition duration-300 inline-flex items-center">
            Reserva una Cita
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process