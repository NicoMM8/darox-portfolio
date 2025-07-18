import Head from 'next/head'
import Navbar from '../components/Navbar'
import { results } from '../data/results'
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portafolio | DAROX</title>
        <meta
          name="description"
          content="Descubre algunos de los proyectos y resultados reales de DAROX."
        />
      </Head>
      <Navbar />

      <main className="min-h-screen w-full bg-black relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="w-full h-full bg-[url('/images/moon.png')] bg-cover bg-[center_top]" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 w-full">
          {/* CABECERA tipo Framer */}
          <section className="max-w-5xl mx-auto pt-24 pb-12 px-4">
            <div className="flex flex-col items-center gap-6">
              {/* Detalle decorativo SVG */}
              <div className="w-full flex justify-between items-center mb-2">
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="hidden md:block">
                  <rect x="0" y="0" width="120" height="40" rx="20" fill="#000" fillOpacity="0.2"/>
                </svg>
                <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className="hidden md:block">
                  <rect x="0" y="0" width="120" height="40" rx="20" fill="#000" fillOpacity="0.2"/>
                </svg>
              </div>
              {/* Badge y título */}
              <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2 shadow">
                <span className="inline-block rounded-md px-3 py-1 bg-blue-600 text-xs font-bold text-white shadow">
                  Portafolio
                </span>
                <span className="text-base font-medium text-white/80">
                  Proyectos reales
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight text-center">
                Nuestros Proyectos Seleccionados
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-white/60 text-center">
                Que impulsan tu sitio web.
              </h2>
              <div className="w-32 h-1 rounded-full bg-gradient-to-r from-transparent via-blue-600 to-transparent my-2" />
              <p className="text-base text-gray-400 text-center max-w-2xl">
                Conecta fácilmente con tus herramientas favoritas. Ya sea tu CRM, plataforma de email marketing...
              </p>
            </div>
          </section>
          {/* STACKING DE IMÁGENES */}
          <div className="w-full pb-32">
            <section>
              {results.map((item, idx) => {
                const ref = useRef(null)
                const { scrollY } = useViewportScroll()
                const start = idx * window.innerHeight * 0.7
                const end = start + window.innerHeight * 0.8

                // Escalado de 0.85 a 1 según el scroll
                const scale = useSpring(
                  useTransform(scrollY, [start, end], [0.85, 1]),
                  { stiffness: 100, damping: 20 }
                )
                // Grayscale de 1 (gris) a 0 (color) según el scroll
                const grayscale = useSpring(
                  useTransform(scrollY, [start, end], [1, 0]),
                  { stiffness: 100, damping: 20 }
                )
                // Nuevo: crea un MotionValue para el filtro CSS
                const filter = useTransform(grayscale, (g: number) => `grayscale(${g})`)

                return (
                  <div
                    key={item.id}
                    className={`w-full h-screen flex justify-center ${idx !== 0 ? 'mt-[-6rem] md:mt-[-8rem]' : ''}`}
                    style={{ zIndex: results.length - idx }}
                  >
                    <motion.div
                      ref={ref}
                      className="sticky top-24 md:top-32 w-full h-[80vh] max-w-5xl rounded-3xl shadow-2xl border border-neutral-800 bg-neutral-900 overflow-hidden"
                      initial={{ opacity: 0, y: 40, scale: 0.85 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.7 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      style={{ scale }}
                    >
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full relative group focus:outline-none"
                        tabIndex={0}
                        aria-label={`Ver proyecto ${item.title}`}
                      >
                        <motion.div
                          style={{
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                            filter
                          }}
                        >
                          <Image
                            src={item.imageUrl}
                            alt={`Proyecto: ${item.title}. ${item.description || ''}`}
                            fill
                            style={{ objectFit: 'cover', objectPosition: 'center' }}
                            sizes="(max-width: 768px) 100vw, 80vw"
                            priority={idx === 0}
                            draggable={false}
                          />

                          {/* Botón "Ver ahora" (opcional, solo decorativo) */}
                          <span
                            className="absolute left-8 top-8 bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full shadow group-hover:bg-gray-100 transition pointer-events-none"
                          >
                            Ver ahora
                          </span>

                          {/* Barra inferior de información */}
                          <div className="absolute left-6 right-6 bottom-6 flex items-center gap-4 bg-black/80 rounded-2xl px-6 py-4 backdrop-blur-md border border-white/10 pointer-events-none">
                            {/* Nombre y año */}
                            <div className="flex items-center gap-2">
                              <span className="bg-neutral-900 text-white text-base font-semibold px-3 py-1 rounded-lg">{item.title}</span>
                              <span className="text-white/60 text-sm font-medium">· {item.year}</span>
                            </div>
                            {/* Barra de progreso */}
                            <div className="flex-1 mx-4">
                              <div className="w-full h-4 bg-neutral-800 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
                                  style={{ width: `${(idx + 1) / results.length * 100}%` }}
                                />
                              </div>
                            </div>
                            {/* Categorías */}
                            <div className="flex gap-2">
                              {item.categories?.map((cat: string) => (
                                <span
                                  key={cat}
                                  className="bg-neutral-800 text-white/80 text-sm px-3 py-1 rounded-lg border border-white/10"
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </a>
                    </motion.div>
                  </div>
                )
              })}
            </section>
          </div>
        </div>
      </main>
    </>
  )
}