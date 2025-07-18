import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto | DAROX</title>
        <meta
          name="description"
          content="Contacta con DAROX para resolver tus dudas o empezar tu proyecto."
        />
      </Head>

      <Navbar />

      <main className="min-h-screen w-full flex items-start justify-center pt-24 pb-16 px-4 bg-radial-darox">
        <div className="w-full max-w-4xl">
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
              ¿Tienes dudas?
              <br />
              Estamos aquí.
            </h1>
            <span className="text-base text-gray-400 text-center">
              Ya sea para resolver una pregunta, pedir ayuda o empezar un nuevo proyecto, nuestro equipo está listo para ayudarte.
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
            <form className="flex flex-col gap-6">
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
                <div className="flex flex-col flex-1 gap-2">
                  <label htmlFor="tipo" className="text-white font-medium text-sm">
                    ¿Cuál es el tipo de tu empresa?*
                  </label>
                  <select
                    id="tipo"
                    name="tipo"
                    className="bg-neutral-900 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-blue-700 transition"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona categoría
                    </option>
                    <option value="Agencia">Agencia</option>
                    <option value="SAAS">SAAS</option>
                    <option value="Banca">Banca</option>
                    <option value="Negocio">Negocio</option>
                    <option value="Otro">Otro</option>
                  </select>
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
                className="
                  mt-2
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
                "
              >
                Enviar mensaje
              </button>
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
              <span className="text-gray-400 text-base break-all">legal@darox.com</span>
            </div>
            {/* Teléfono */}
            <div className="bg-black/80 border border-white/10 rounded-2xl p-6 shadow flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {/* Icono de teléfono */}
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" className="text-white/80">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.07.72 3.06a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.99.35 2.01.59 3.06.72A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-white font-medium text-lg">Teléfono</span>
              </div>
              <hr className="border-white/10 my-1" />
              <span className="text-gray-400 text-base">+34 600 00 00 00</span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}