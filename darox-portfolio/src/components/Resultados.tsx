// src/components/Results.tsx
'use client'
import { results } from '@/data/results'
import Image from 'next/image'
import React from "react";
import Link from 'next/link'

import Head from 'next/head'

const Results: React.FC = () => {
  const items = results.slice(0, 3)

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "@id": "https://darox.es/#portfolio",
              "name": "Casos de Estudio DAROX",
              "description": "Proyectos y resultados destacados de branding y diseño web de alta conversión.",
              "itemListElement": items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "CreativeWork",
                  "name": item.title,
                  "url": `https://darox.es${item.url}`,
                  "image": `https://darox.es${item.resultImageUrl || item.imageUrl}`
                }
              }))
            })
          }}
        />
      </Head>
      <section className="py-20 px-0 bg-transparent text-white">
        {/* Grid solo imágenes grandes y grises */}
      <div className="w-full px-4 sm:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 items-end">
        {items.map((item, i) => (
          <div
            key={item.id}
            className={`
              w-full
              transform transition-transform duration-300
              ${i === 1 ? 'lg:-translate-y-12' : ''}
            `}
          >
            <Link
              href={item.url}
              className="block relative w-full h-[520px] overflow-hidden rounded-xl bg-black/60 shadow-2xl group backdrop-blur-md focus:outline-none"
              aria-label={`Ver proyecto ${item.title}`}
            >
              {/* Línea azul decorativa superior, fina y sutil */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-xl pointer-events-none opacity-70" />
              <Image
                src={item.resultImageUrl || item.imageUrl}
                alt={`Vista previa del proyecto ${item.title} realizado por DAROX`}
                fill
                className="object-cover object-center filter grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
              
              {/* Overlay oscuro para asegurar la legibilidad del texto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Contenido del Proyecto (Nombre y Dato) */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col items-start translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-white/60 font-semibold text-xs tracking-widest uppercase mb-2">
                  {item.categories && item.categories[0]}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                
                {/* Dato / Métrica del proyecto */}
                {item.metrics && item.metrics.length > 0 && (
                  <div className="flex items-center gap-2 bg-black/60 border border-white/20 px-3 py-1.5 rounded">
                    <span className="text-white font-bold text-lg md:text-xl">{item.metrics[0].value}</span>
                    <span className="text-white/70 text-sm font-normal max-w-[150px] leading-tight">{item.metrics[0].label}</span>
                  </div>
                )}
              </div>
              
              {/* Botón visual (Pasa de estar en el centro a la esquina superior derecha al hacer hover) */}
              <span
                className="absolute top-5 right-5 px-5 py-2 rounded-full bg-white/10 text-white text-sm font-medium flex items-center gap-2 border border-white/20 backdrop-blur-md transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none"
              >
                Ver caso
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Link>
          </div>
        ))}
      </div>
      </section>
    </>
  )
}

export default Results
