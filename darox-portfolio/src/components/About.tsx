// src/components/About.tsx
'use client'

import Image from 'next/image'
import React from "react";

const Divider = ({ className = '' }) => (
  <div
    className={`w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-full ${className}`}
  />
)

const titleWords = ['Construimos', 'marcas', 'exitosas']
const subtitleWords = ['Estrategia,', 'diseño', 'y', 'tecnología']
const description =
  'En DAROX combinamos inteligencia artificial, creatividad humana y un enfoque estratégico para diseñar experiencias digitales que convierten visitantes en clientes y hacen crecer tu negocio.'
const metrics = [
  '500 000 € generados en proyectos reales',
  '47 % de aumento en tasa de conversión',
]

const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
    >
      {/* Línea decorativa superior */}
      <Divider className="mb-8" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        {/* Imagen con borde, blur y tilt hover */}
        <div className="md:w-1/2 flex justify-center items-center">
          <div className="rounded-[19px] overflow-hidden border border-white/20 transition-transform duration-300 hover:rotate-2 hover:scale-105 w-full max-w-[420px] md:max-w-[520px] h-[520px] md:h-[650px] bg-black/80 shadow-xl">
            <Image
              src="/images/foto_about2.png"
              alt="Persona trabajando en portátil"
              width={800}
              height={1000} // 4:5
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Texto, métricas y botón */}
        <div className="md:w-1/2 flex flex-col gap-8 justify-center">
          {/* Tag destacado */}
          <div
            className="
              relative inline-flex w-fit items-center gap-3 px-5 py-2 rounded-[10px]
              border border-white/10
              bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)]
              backdrop-blur-[2.5px]
              mb-2 animate-fade-in-up
              shadow
              overflow-hidden
              tag-destacado
            "
          >
            {/* Línea azul decorativa superior */}
            <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-[10px] pointer-events-none" />
            {/* Bullet blanco */}
            <span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
            {/* Texto con gradiente */}
            <span className="font-semibold text-base tag-destacado-text">
              Sobre DAROX
            </span>
          </div>
          {/* Título principal con gradiente claro y animación */}
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-extrabold mb-2 animate-fade-in-up gradient-text about-title"
          >
            {titleWords.map((w, i) => (
              <span key={i} className="inline-block mr-1">{w}</span>
            ))}
          </h2>

          {/* Subtítulo con color claro y animación */}
          <h3 className="text-2xl md:text-3xl font-semibold text-indigo-200 mb-4 animate-fade-in-up">
            {subtitleWords.map((w, i) => (
              <span key={i} className="inline-block mr-1">{w}</span>
            ))}
          </h3>

          {/* Párrafo descriptivo */}
          <p className="text-lg md:text-xl text-gray-100 mb-4 max-w-prose animate-fade-in-up">
            {description}
          </p>

          {/* Métricas */}
          <div className="grid grid-cols-1 gap-2 mb-4 animate-fade-in-up">
            {metrics.map((m, i) => (
              <div key={i} className="flex items-center text-base md:text-lg text-white/80 font-medium">
                <svg className="w-5 h-5 text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                {m}
              </div>
            ))}
          </div>

          {/* Botón destacado */}
          <a
            href="./about"
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
            "
          >
            Ver Sobre DAROX
          </a>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <Divider className="mt-8" />
    </section>
  )
}

export default About
