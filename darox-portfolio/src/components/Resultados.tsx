const Results: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-sm font-medium text-indigo-600 mb-2">200+ Agencias Calificadas</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Entregando Resultados Tangibles <br />
          <span className="gradient-text">Que Impulsan Tu Éxito</span>
        </h3>
        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
          En el centro de todo lo que hacemos hay un compromiso con la entrega de resultados medibles que impulsan tu éxito.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-black bg-opacity-60 rounded-2xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
          <div className="relative h-48 overflow-hidden">
            <img src="https://framerusercontent.com/images/gJpgMqolxrZFesWkDXnNXZLWBoY.jpeg" alt="Botella Blanca" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute top-4 right-4">
              <img src="https://framerusercontent.com/images/Zjhy8gzEpQFU6Fq7lSmQUHLG3k0.svg" alt="Logo Crimson Studio" className="h-10" />
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <h4 className="text-xl font-bold text-white">Crimson Studio</h4>
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">NUEVO</span>
            </div>
            <p className="text-gray-300 mb-4">
              Logró un aumento en las ventas en seis meses a través de una estrategia personalizada.
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold text-indigo-600">30%</p>
                <p className="text-sm text-gray-500">Aumento en Ventas</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-600">40%</p>
                <p className="text-sm text-gray-500">Impulso en Retención</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black bg-opacity-60 rounded-2xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
          <div className="relative h-48 overflow-hidden">
            <img src="https://framerusercontent.com/images/JCaZzme2XYHwWAWbEWjb3W3WpE.jpeg" alt="Reloj Azul" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute top-4 right-4">
              <img src="https://framerusercontent.com/images/rQyxKxtqvKlVrHFyMDg7VnuiKNc.svg" alt="Logo Raven Company" className="h-10" />
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-bold text-white mb-2">Raven Company Inc</h4>
            <p className="text-gray-300 mb-4">
              Operaciones optimizadas, reduciendo costos con nuestras soluciones de automatización.
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold text-indigo-600">25%</p>
                <p className="text-sm text-gray-500">Tasas de Conversión</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-600">50%</p>
                <p className="text-sm text-gray-500">Reducción en CPA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black bg-opacity-60 rounded-2xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
          <div className="relative h-48 overflow-hidden">
            <img src="https://framerusercontent.com/images/4sfXO1JN4OBl4RWb4t9FBOXw.jpeg" alt="Botella Negra" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute top-4 right-4">
              <img src="https://framerusercontent.com/images/w0R0sHJ0c5j0Ywm5U455ynsDo.svg" alt="Logo Gotham Wonder" className="h-10" />
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2">
              <h4 className="text-xl font-bold text-white">Gotham Wonder</h4>
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">FRESCO</span>
            </div>
            <p className="text-gray-300 mb-4">
              Aumentó el compromiso del cliente con una presencia digital y campañas dirigidas.
            </p>
            <div className="flex justify-between">
              <div>
                <p className="text-2xl font-bold text-indigo-600">60%</p>
                <p className="text-sm text-gray-500">Aumento de Tráfico</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-indigo-600">35%</p>
                <p className="text-sm text-gray-500">Crecimiento en Ventas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-12">
        <a href="#" className="bg-indigo-600 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-indigo-700 transition duration-300 inline-flex items-center">
          Reserva una llamada de 15 minutos
          <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Results