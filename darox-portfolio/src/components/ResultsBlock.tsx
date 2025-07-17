import React from 'react'

const ResultsBlock: React.FC = () => (
  <section
    className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden resultsblock-bg"
  >
    {/* Fondo decorativo esquina inferior izquierda */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/images/bg-left.png"
      alt=""
      className="absolute bottom-0 left-0 w-[40vw] h-auto pointer-events-none select-none z-0"
      draggable={false}
    />
    {/* Fondo decorativo SVG esquina inferior derecha */}
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/images/bg-right.png"
      alt=""
      className="absolute bottom-0 right-0 w-[40vw] h-auto pointer-events-none select-none z-0"
      draggable={false}
    />

    <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 relative z-10">
      {/* Tag destacado tipo Framer */}
      <div
        className="inline-flex items-center gap-3 px-5 py-2 rounded-lg border border-white/10 backdrop-blur-md resultsblock-framer-tag"
      >
        <span className="w-2 h-2 rounded-full bg-white inline-block" />
        <span className="font-semibold text-base bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Resultados
        </span>
      </div>
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent" />

      {/* Títulos */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 animate-fade-in-up gradient-text">
        <span className="inline-block">Entregando</span>{" "}
        <span className="inline-block">Resultados</span>{" "}
        <span className="inline-block">Tangibles</span>{" "}
        <span className="inline-block">Que</span>{" "}
        <span className="inline-block">Impulsan</span>{" "}
        <span className="inline-block">Tu</span>{" "}
        <span className="inline-block">Éxito</span>
      </h2>

      {/* Texto central */}
      <p className="text-lg text-center text-white/70 mb-4 animate-fade-in-up">
        Al final de todo, lo que hacemos hay un compromiso con la entrega de resultados medibles que impulsan tu éxito.
      </p>

      {/* Botón Framer */}
      <a
        href="./contact"
        className="
          inline-flex items-center justify-center
          px-6 py-3
          rounded-[10px]
          border-4 border-white/15
          bg-blue-700
          resultsblock-shadow
          text-white font-semibold
          transition-all duration-300
          hover:bg-blue-800 hover:scale-105
          animate-fade-in-up
        "
      >
        Agenda una llamada de 15 min
      </a>
    </div>
  </section>
)

export default ResultsBlock