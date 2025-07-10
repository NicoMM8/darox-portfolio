interface PortfolioItem {
  image: string
  title: string
  year: string
  rating: number
  category: string
  categoryColor: string
}

const Portfolio: React.FC = () => {
  const portfolioItems: PortfolioItem[] = [
    {
      image: "https://framerusercontent.com/images/6igmB60fniZZ2g62iKIWQ848llo.jpg",
      title: "Way Fields",
      year: "2024",
      rating: 3,
      category: "E-Commerce",
      categoryColor: "bg-indigo-100 text-indigo-800"
    },
    {
      image: "https://framerusercontent.com/images/oITRaXEkBVhukMYINXV2xi05PY.jpg",
      title: "Raven Studio",
      year: "2025",
      rating: 4,
      category: "Negocios",
      categoryColor: "bg-purple-100 text-purple-800"
    },
    {
      image: "https://framerusercontent.com/images/Uuz2pvRYMyIi8DgfWOh1s80jEQ.jpg",
      title: "White Stag",
      year: "2024",
      rating: 4,
      category: "SASS",
      categoryColor: "bg-green-100 text-green-800"
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-indigo-600 mb-2">Portafolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Proyectos Seleccionados <br />
            <span className="gradient-text">Que Impulsan Tu Sitio Web.</span>
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explora nuestro trabajo curado, que muestra colaboraciones con clientes visionarios en diversas industrias.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="relative group portfolio-item rounded-2xl overflow-hidden">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 portfolio-overlay transition duration-300 flex flex-col justify-end p-4">
                <div className="flex items-center mb-2">
                  <h4 className="text-xl font-bold text-white">{item.title}</h4>
                  <span className="ml-2 text-gray-300">{item.year}</span>
                </div>
                <div className="flex mb-4">
                  {Array(item.rating).fill(0).map((_, i) => (
                    <img key={i} src="https://framerusercontent.com/images/5lfBMonMhYpKxn0XVQsyZrLGY.png" alt="Estrella" className="h-4 w-4 mr-1" />
                  ))}
                </div>
                <span className={`inline-block ${item.categoryColor} text-xs font-medium px-2 py-0.5 rounded mb-3 self-start`}>{item.category}</span>
                <a href="#" className="text-white font-medium hover:text-indigo-300 inline-flex items-center">
                  Ver Proyecto
                  <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800">
            Ver Portafolio
            <svg className="ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio