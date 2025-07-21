// src/components/Results.tsx
'use client'
import { results } from '@/data/results'
import Image from 'next/image'
import React from "react";
import Link from 'next/link'

const Results: React.FC = () => {
  const items = results.slice(0, 3)

  return (
    <section className="py-20 px-0 bg-gradient-to-b from-black/80 to-black/10 text-white">
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
            <div className="relative w-full h-[520px] overflow-hidden rounded-xl bg-black/60 shadow-2xl group backdrop-blur-md">
              {/* Línea azul decorativa superior, fina y sutil */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-xl pointer-events-none opacity-70" />
              <Image
                src={item.imageUrl}
                alt=""
                fill
                className="object-cover object-center filter grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                placeholder="blur"
                blurDataURL="/placeholder.png"
              />
              <Link
                href={item.url}
                className="group resultados-btn absolute bottom-6 left-1/2 -translate-x-1/2 px-8 py-3 rounded-full bg-gray-300 bg-opacity-40 text-white text-lg font-medium flex items-center gap-2 border border-white/30 backdrop-blur-md transition hover:bg-opacity-60"
              >
                Ver Proyecto
                <span className="relative flex items-center">
                  {/* Flecha principal */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2 resultados-svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Results
