import { useEffect } from 'react'

const About: React.FC = () => {
  useEffect(() => {
    const metrics = {
      revenue: "De $0 a $500,000",
      growth: "47%"
    }
    const metricsElement = document.getElementById('metrics')
    if (metricsElement) {
      metricsElement.innerHTML = `
        <div>
          <p class="text-3xl font-bold text-indigo-600 mb-2">${metrics.revenue}</p>
          <p class="text-gray-300">en ingresos.</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-indigo-600 mb-2">${metrics.growth}</p>
          <p class="text-gray-300">Crecimiento en nuevos clientes.</p>
        </div>
      `
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
            <h2 className="text-sm font-medium text-indigo-600 mb-2">Sobre DAROX</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Construyendo Marcas Más Fuertes <br />
              <span className="gradient-text">¡Creando Impresiones!</span>
            </h3>
            <p className="text-lg text-gray-200 mb-8">
              Entregando diseños de alta calidad y bajo demanda con precisión. Eleva tu marca sin esfuerzo, una instantánea a la vez.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-8" id="metrics"></div>
            <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800">
              Ver Sobre DAROX
              <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <div className="md:w-1/2">
            <img src="https://framerusercontent.com/images/oUAzCBZlCCsvzmsAiYQ3RDbhyg.jpeg" alt="Hombre usando portátil" className="rounded-2xl shadow-xl w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About