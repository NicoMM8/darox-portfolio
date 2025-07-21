import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function About() {
  const [showVideo, setShowVideo] = useState(false)
  const [showFull, setShowFull] = useState(false)

  // Cierra el modal si se hace click fuera del iframe
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowVideo(false)
    }
  }

  return (
    <>
      <Head>
        <title>Sobre nosotros | DAROX</title>
        <meta name="description" content="Conoce más sobre DAROX, nuestro equipo y nuestra filosofía de trabajo." />
      </Head>
      <Navbar />
      {/* Fondo de video animado */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{ objectPosition: 'center top' }}
      >
        <source src="https://framerusercontent.com/assets/lr4LSmXa1klevAvb0jf1i2zsDE.mp4" type="video/mp4" />
      </video>
      {/* Capa oscura encima del video */}
      <div className="fixed inset-0 bg-black/60 z-0 pointer-events-none" />
      <main className="min-h-screen w-full flex flex-col items-center justify-start pt-24 pb-16 px-4 relative overflow-hidden">
        <section className="w-full max-w-5xl relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl px-6 py-2 shadow-lg backdrop-blur-md">
              <span className="inline-block rounded-md px-3 py-1 bg-blue-600 text-xs font-bold text-white shadow">
                2025
              </span>
              <span className="text-base font-medium text-white/80">
                Profundiza sobre nosotros
              </span>
            </span>
          </div>
          {/* Título grande */}
          <h1 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3.2rem] font-extrabold leading-[1.1] text-white text-center tracking-tight mb-6" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
            Aprende más sobre DAROX<br />
            <span className="text-white/80">¡Vamos a profundizar!</span>
          </h1>
          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-10 font-medium">
            DAROX es tu agencia para creatividad, estrategia y soluciones digitales. Nos especializamos en branding, desarrollo web y marketing digital.
          </p>
          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/contacto"
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-xl shadow-lg border-2 border-white/10 transition hover:bg-blue-700 hover:text-white hover:border-blue-700 text-base"
            >
              Contacta con nosotros
            </Link>
            <a
              href="#testimonios"
              className="inline-block bg-black/70 text-white font-semibold px-8 py-3 rounded-xl border-2 border-white/10 transition hover:bg-white/10 text-base"
            >
              ¿Qué es DAROX?
            </a>
          </div>
          {/* Imagen clicable con botón de play */}
          <div className="w-full flex justify-center mb-20">
            <button
              className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black relative group focus:outline-none"
              onClick={() => setShowVideo(true)}
              aria-label="Reproducir vídeo"
              type="button"
            >
              <img
                src="https://img.youtube.com/vi/nziHP21GXRw/maxresdefault.jpg"
                alt="DAROX video"
                className="w-full h-full object-cover group-hover:brightness-75 transition"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/60 rounded-full p-6">
                  <svg className="w-16 h-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="32" fill="currentColor" opacity="0.3"/>
                    <polygon points="26,20 50,32 26,44" fill="#fff"/>
                  </svg>
                </span>
              </span>
            </button>
          </div>
          {/* Modal de vídeo */}
          {showVideo && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
              onClick={handleOverlayClick}
            >
              <button
                className="absolute top-6 right-8 text-white text-4xl font-bold z-50 hover:text-blue-400 transition"
                onClick={() => setShowVideo(false)}
                aria-label="Cerrar vídeo"
                type="button"
              >
                &times;
              </button>
              <div className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 bg-black relative">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/nziHP21GXRw?autoplay=1"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          )}

          {/* Bloque de presentación de Darío, alineado a la izquierda con imagen a la derecha */}
          <section className="w-full max-w-4xl mx-auto bg-black/80 border border-white/10 rounded-3xl shadow-xl p-8 md:p-12 mb-16 mt-4 flex flex-col md:flex-row items-center gap-8">
            {/* Texto a la izquierda */}
            <div className="flex-1 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block bg-blue-700 text-white text-xs font-bold rounded-full px-3 py-1 shadow">Fundador</span>
                <span className="text-white/80 font-semibold">Darío, CEO de Darox BM</span>
              </div>
              <p className="text-lg md:text-xl text-white font-semibold mb-2">
                {showFull
                  ? <>
                      Soy Darío, fundador y CEO de Darox BM.<br /><br />
                      No nací con contactos, ni con presupuesto, ni con un máster en negocios. Lo que sí tenía era algo que probablemente tú también tienes:<br />
                      una idea potente, una ambición que no se apaga y unas ganas inmensas de vivir de lo mío.<br /><br />
                      Creé Darox BM para ayudar a personas como tú: emprendedores con visión, con talento, pero sin un sistema claro para hacer que su idea funcione.<br /><br />
                      En Darox BM no vendemos servicios sueltos.<br />
                      No hacemos “logos bonitos” ni webs que no convierten.<br />
                      Creamos marcas reales, estratégicas, con una identidad clara, presencia profesional y una base sólida para crecer.<br /><br />
                      Y lo hacemos aplicando diseño, estrategia de negocio e inteligencia artificial como herramientas prácticas para un solo objetivo:<br />
                      que tu marca no solo se vea bien…<br />
                      sino que te dé clientes, ingresos y libertad real.<br /><br />
                      Aquí, no eres un número.<br />
                      Eres alguien que quiere construir algo que le cambie la vida.<br />
                      Y eso, créeme, también me importa a mí.
                    </>
                  : <>
                      Soy Darío, creador de Darox BM. Ayudo a emprendedores con grandes ideas a construir marcas reales que les den libertad, ingresos y visibilidad. Lo hacemos combinando estrategia, diseño e inteligencia artificial. No vendemos servicios. Construimos negocios que funcionan.
                    </>
                }
              </p>
              <button
                className="mt-2 text-blue-400 hover:underline text-sm font-medium"
                onClick={() => setShowFull(v => !v)}
              >
                {showFull ? 'Ver versión reducida' : 'Leer mi historia completa'}
              </button>
            </div>
            {/* Imagen a la derecha */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src="/images/bio.png"
                alt="Darío, CEO de Darox BM"
                className="rounded-2xl border border-white/10 shadow-lg max-w-xs w-full object-cover bg-black"
                style={{ minHeight: 220 }}
                loading="lazy"
              />
            </div>
          </section>
        </section>
      </main>
    </>
  )
}