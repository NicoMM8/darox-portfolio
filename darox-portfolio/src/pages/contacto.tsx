import Head from 'next/head'
import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Contact() {
  const [success, setSuccess] = useState<string | null>(null)

  return (
    <>
      <Head>
        <title>Contacto Agencia de Branding y Web en España | DAROX</title>
        <meta
          name="description"
          content="Contacta con DAROX, agencia líder en branding, diseño web y marketing digital en España. Solicita asesoría gratuita para tu proyecto, empresa o startup. ¡Impulsa tu presencia online hoy!"
        />
        {/* Open Graph */}
        <meta property="og:title" content="Contacto Agencia de Branding y Web en España | DAROX" />
        <meta property="og:description" content="Contacta con DAROX, agencia líder en branding, diseño web y marketing digital en España. Solicita asesoría gratuita para tu proyecto, empresa o startup. ¡Impulsa tu presencia online hoy!" />
        <meta property="og:image" content="https://darox.es/images/logo_horizontal.png" />
        <meta property="og:url" content="https://darox.es/contacto" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contacto Agencia de Branding y Web en España | DAROX" />
        <meta name="twitter:description" content="Contacta con DAROX, agencia líder en branding, diseño web y marketing digital en España. Solicita asesoría gratuita para tu proyecto, empresa o startup. ¡Impulsa tu presencia online hoy!" />
        <meta name="twitter:image" content="https://darox.es/images/logo_horizontal.png" />
        <link rel="canonical" href="https://darox.es/contacto" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "DAROX",
              "url": "https://darox.es",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "daroxbrandmaker@gmail.com",
                "contactType": "customer support",
                "areaServed": "ES"
              }
            }
          }
          `}
        </script>
      </Head>

      <Navbar />

      <main className="min-h-screen w-full flex items-start justify-center pt-24 pb-16 px-4 bg-radial-darox relative overflow-hidden">
        {/* Fondo imagen */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="w-full h-full bg-[url('/images/moon.png')] bg-cover bg-[center_top]"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="w-full max-w-4xl relative z-10">
          {/* Badge y título */}
          <div className="flex flex-col items-center gap-6 mb-12">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-2 shadow">
              <span className="inline-block rounded-md px-3 py-1 bg-blue-600 text-xs font-bold text-white shadow">
                24/7
              </span>
              <span className="text-base font-medium text-white/80">
                ¡Hablemos!
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent leading-tight text-center">
              ¿Listo para dar el primer paso?
            </h1>
            <span className="text-base text-gray-400 text-center">
              Estamos aquí para ayudarte a convertir tu visión en resultados.
            </span>
            <a
              href="#form"
              className="
                inline-flex items-center justify-center
                px-6 py-3
                rounded-[10px]
                border-4 border-white/15
                bg-blue-700
                about-shadow
                text-white font-semibold
                transition-all duration-300
                hover:bg-blue-800 hover:scale-105
                animate-fade-in-up
                w-full md:w-auto text-center
                mt-2
              "
            >
              ¡Rellena el formulario!
            </a>
          </div>

          {/* Formulario de contacto */}
          <section
            id="form"
            className="bg-black/80 border border-white/10 rounded-2xl p-8 md:p-12 shadow-lg mb-12"
          >
            <form
              className="flex flex-col gap-6"
              action="https://formspree.io/f/mldljjln"
              method="POST"
              onSubmit={() => setSuccess('¡Mensaje enviado correctamente!')}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col flex-1 gap-2">
                  <label htmlFor="nombre" className="text-white font-medium text-sm">
                    Nombre*
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                    required
                  />
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <label htmlFor="apellidos" className="text-white font-medium text-sm">
                    Apellidos*
                  </label>
                  <input
                    id="apellidos"
                    type="text"
                    name="apellidos"
                    placeholder="Apellidos"
                    className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-white font-medium text-sm">
                  ¿Cómo podemos contactarte?*
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="tu@email.com"
                  className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex flex-col flex-1 gap-2">
                  <label htmlFor="pais" className="text-white font-medium text-sm">
                    ¿De dónde eres?*
                  </label>
                  <input
                    id="pais"
                    type="text"
                    name="pais"
                    placeholder="Selecciona tu país..."
                    className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                    required
                  />
                </div>
                <div className="flex flex-col flex-1 gap-2 relative">
                  <label htmlFor="tipo" className="text-white font-medium text-sm">
                    ¿Cuál es el tipo de tu empresa?*
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    className="
                      bg-neutral-900 border border-white/10 rounded-2xl px-4 py-3 pr-10
                      text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-700 transition
                      appearance-none
                      cursor-pointer
                    "
                    required
                    defaultValue=""
                  >
                    <option value="" disabled className="text-white/40">
                      Selecciona categoría
                    </option>
                    <option value="Agencia">Agencia</option>
                    <option value="SAAS">SAAS</option>
                    <option value="Banca">Banca</option>
                    <option value="Negocio">Negocio</option>
                    <option value="Otro">Otro</option>
                  </select>
                  {/* Icono flecha */}
                  <div className="pointer-events-none absolute right-3 top-11 md:top-11 flex items-center h-5">
                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="mensaje" className="text-white font-medium text-sm">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  placeholder="Escribe tu mensaje..."
                  rows={4}
                  className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                />
              </div>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center px-6 py-3 rounded-[10px] border-4 border-white/15 bg-blue-700 about-shadow text-white font-semibold transition-all duration-300 hover:bg-blue-800 hover:scale-105 animate-fade-in-up w-full md:w-auto text-center"
              >
                Enviar mensaje
              </button>
              {success && <p className="text-green-400 mt-2">{success}</p>}
            </form>
          </section>

          {/* Info de contacto */}
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {/* Email */}
            <div className="bg-black/80 border border-white/10 rounded-2xl p-6 shadow flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {/* Icono de email */}
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-white/80">
                  <path d="M4 4h16v16H4V4zm0 0l8 8 8-8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white font-medium text-lg">Email</span>
                <span className="inline-block rounded-md px-2 py-0.5 bg-blue-600 text-xs font-bold text-white ml-2">24/7</span>
              </div>
              <hr className="border-white/10 my-1" />
              <span className="text-gray-400 text-base break-all">daroxbrandmaker@gmail.com</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}