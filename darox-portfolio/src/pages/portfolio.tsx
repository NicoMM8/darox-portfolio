import Head from 'next/head'
import Navbar from '../components/Navbar'
import { results, Result } from '../data/results'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

function PortfolioItem({ item, idx, total }: { item: Result, idx: number, total: number }) {
  const ref = useRef(null)
  const [vh, setVh] = useState(0)
  const { scrollY } = useScroll() 

  useEffect(() => {
    setVh(window.innerHeight)
  }, [])

  const start = vh ? idx * vh * 0.7 : 0
  const end = vh ? start + vh * 0.8 : 1

  const scale = useSpring(
    useTransform(scrollY, [start, end], [0.85, 1]),
    { stiffness: 100, damping: 20 }
  )
  const grayscale = useSpring(
    useTransform(scrollY, [start, end], [1, 0]),
    { stiffness: 100, damping: 20 }
  )
  const filter = useTransform(grayscale, (g: number) => `grayscale(${g})`)

  // Asigna el enlace según el orden de aparición
  let href = '#'
  if (idx === 0) href = '/proyectos/miel'
  else if (idx === 1) href = '/proyectos/proyecto2'
  else if (idx === 2) href = '/proyectos/proyecto3'

  return (
    <div
      key={item.id}
      className={`w-full h-screen flex justify-center ${idx !== 0 ? 'mt-[-6rem] md:mt-[-8rem]' : ''}`}
      style={{ zIndex: total - idx }}
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
        <Link
          href={href}
          className="block w-full h-full relative group focus:outline-none"
          tabIndex={0}
          aria-label={`Ver proyecto ${item.title}`}
        >
          <motion.div
            className="portfolio-img-anim"
            style={{ filter }}
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

            {/* Botón "Ver ahora" */}
            <span
              className="absolute left-8 top-8 bg-white text-black text-sm font-semibold px-4 py-1.5 rounded-full shadow group-hover:bg-gray-100 transition pointer-events-none"
            >
              Ver ahora
            </span>

            {/* Barra inferior de información */}
            <div className="absolute left-4 right-4 bottom-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-4 bg-black/80 rounded-2xl px-4 md:px-6 py-4 backdrop-blur-md border border-white/10 pointer-events-none">
              {/* Nombre y año */}
              <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 w-full md:w-auto justify-center md:justify-start text-center md:text-left">
                <span className="bg-neutral-900 text-white text-base font-semibold px-3 py-1 rounded-lg">{item.title}</span>
                <span className="text-white/60 text-sm font-medium">· {item.year}</span>
              </div>
              {/* Barra de progreso */}
              <div className="w-full md:flex-1 mx-0 md:mx-4 mt-2 md:mt-0">
                <div className="w-full h-4 bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
                    style={{ width: `${(idx + 1) / total * 100}%` }}
                  />
                </div>
              </div>
              {/* Categorías */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full md:w-auto">
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
        </Link>
      </motion.div>
    </div>
  )
}

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
          {/* CABECERA */}
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
              <h1 className="gradient-text text-5xl md:text-7xl font-extrabold leading-tight text-center">
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
              {results.map((item, idx) => (
                <PortfolioItem key={item.id} item={item} idx={idx} total={results.length} />
              ))}
            </section>
          </div>
        </div>
      </main>
    </>
  )
}