import Head from 'next/head'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Página no encontrada | DAROX</title>
        <meta name="description" content="La página que buscas no existe. Descubre nuestros servicios de branding, web y marketing digital." />
      </Head>
      <Navbar />
      <main className="min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-16 px-4 bg-gradient-to-br from-black via-[#0a1333] to-[#1a237e] relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="w-full h-full bg-[url('/images/moon.png')] bg-cover bg-[center_top]" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-8">
          <Image
            src="/images/logo.png"
            alt="Logo DAROX"
            width={80}
            height={80}
            className="mb-4"
            priority
          />
          <h1 className="text-6xl md:text-8xl font-extrabold gradient-text mb-4 text-center animate-fade-in-up">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-white/80 mb-2 text-center animate-fade-in-up">
            ¡Ups! Página no encontrada
          </h2>
          <p className="text-lg text-white/60 mb-6 text-center max-w-xl animate-fade-in-up">
            La página que buscas no existe o fue movida.<br />
            Pero no te preocupes, puedes volver al inicio o descubrir nuestros servicios.
          </p>
          <div className="flex gap-4">
            <Link
              href="/"
              className="px-6 py-3 rounded-[10px] bg-blue-700 text-white font-semibold shadow-lg border-4 border-white/15 about-shadow transition hover:bg-blue-800 hover:scale-105 animate-fade-in-up"
            >
              Volver al inicio
            </Link>
            <Link
              href="/contacto"
              className="px-6 py-3 rounded-[10px] bg-white/10 text-white font-semibold shadow border-2 border-white/15 backdrop-blur-[2px] transition hover:bg-white/20 hover:scale-105 animate-fade-in-up"
            >
              Contactar
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}