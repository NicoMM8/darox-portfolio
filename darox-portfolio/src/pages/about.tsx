import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre nosotros | DAROX</title>
        <meta name="description" content="Conoce más sobre DAROX, nuestro equipo y nuestra filosofía de trabajo." />
        {/* Script de Framer */}
        <script
          async
          src="https://events.framer.com/script?v=2"
          data-fid="aefd7726c04c19b9dd61c595a34eab5d0eb80d0628dd45fe33b18bc0492c09e0"
          data-no-nt=""
        ></script>
      </Head>
      <Navbar />
      <main className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16">
        {/* Hero */}
        <section className="max-w-3xl w-full text-center mb-16">
          <span className="inline-block bg-blue-700/80 text-white px-4 py-1 rounded-lg mb-4 text-sm font-semibold tracking-widest">
            2025
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold gradient-text mb-4">
            Aprende más sobre <span className="text-blue-400">DAROX</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white/80 mb-6">
            ¡Vamos a profundizar!
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            DAROX es tu agencia para creatividad, estrategia y soluciones digitales. Nos especializamos en branding, desarrollo web y marketing digital.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg border-2 border-white/10 transition"
            >
              Contacta con nosotros
            </Link>
            <a
              href="#about"
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-xl border-2 border-white/10 transition"
            >
              ¿Qué es DAROX?
            </a>
          </div>
        </section>

        {/* Sobre nosotros */}
        <section id="about" className="max-w-4xl w-full bg-black/80 rounded-3xl border border-white/10 shadow-xl p-8 md:p-16 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 gradient-text">
            Una agencia con visión y talento
          </h2>
          <h3 className="text-2xl text-white/70 mb-6">Revolucionando el sector digital</h3>
          <p className="text-lg text-gray-300 mb-8">
            En DAROX creemos en potenciar a nuestros clientes para lograr sus objetivos. Nuestro equipo trabaja de cerca contigo, guiando cada paso y asegurando resultados excepcionales.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Tu éxito, nuestra prioridad</h4>
              <p className="text-gray-400">
                Nos comprometemos a acompañarte desde la idea hasta la ejecución, con soporte experto y atención personalizada.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Soporte continuo</h4>
              <p className="text-gray-400">
                Nuestro compromiso no termina con la entrega: te apoyamos con mejoras y actualizaciones siempre que lo necesites.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg border-2 border-white/10 transition w-full md:w-auto text-center"
            >
              Reserva una llamada
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="max-w-4xl w-full bg-black/80 rounded-3xl border border-white/10 shadow-xl p-8 md:p-16 mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 gradient-text">
            Preguntas frecuentes
          </h2>
          <ul className="space-y-6 text-left">
            <li>
              <span className="font-semibold text-white">¿Qué necesito para empezar?</span>
              <p className="text-gray-400">Solo tu idea y ganas de crecer. Nosotros te guiamos en todo el proceso.</p>
            </li>
            <li>
              <span className="font-semibold text-white">¿Qué tipo de personalización ofrecen?</span>
              <p className="text-gray-400">Adaptamos cada proyecto a tus necesidades, desde branding hasta desarrollo y marketing.</p>
            </li>
            <li>
              <span className="font-semibold text-white">¿Necesito saber programar?</span>
              <p className="text-gray-400">No es necesario. Nuestro equipo se encarga de todo el aspecto técnico para que tú puedas enfocarte en hacer crecer tu negocio.</p>
            </li>
            <li>
              <span className="font-semibold text-white">¿Cómo garantizan la calidad?</span>
              <p className="text-gray-400">Implementamos controles de calidad en cada etapa del proyecto y mantenemos una comunicación constante contigo.</p>
            </li>
            <li>
              <span className="font-semibold text-white">¿Qué pasa si necesito más ayuda después de que termine el proyecto?</span>
              <p className="text-gray-400">Ofrecemos soporte y mantenimiento continuos para asegurarnos de que siempre estés satisfecho y tu proyecto funcione perfectamente.</p>
            </li>
          </ul>
        </section>

        {/* Testimonios */}
        <section className="max-w-4xl w-full text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 gradient-text">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <div className="bg-black/80 p-6 rounded-3xl border border-white/10 shadow-xl max-w-xs mx-auto">
              <p className="text-gray-300 mb-4">
                "DAROX transformó nuestra presencia en línea. Su equipo es increíblemente talentoso y dedicado."
              </p>
              <p className="font-semibold text-white">- Cliente Satisfecho</p>
            </div>
            <div className="bg-black/80 p-6 rounded-3xl border border-white/10 shadow-xl max-w-xs mx-auto">
              <p className="text-gray-300 mb-4">
                "Gracias a DAROX, nuestro negocio ha crecido exponencialmente. No podríamos estar más felices con los resultados."
              </p>
              <p className="font-semibold text-white">- Empresario Exitoso</p>
            </div>
          </div>
        </section>

        {/* Llamado a la acción */}
        <section className="max-w-4xl w-full text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 gradient-text">
            ¿Estás listo para llevar tu proyecto al siguiente nivel?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            En DAROX estamos listos para ayudarte a alcanzar tus metas. No esperes más, ¡contáctanos hoy mismo!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg border-2 border-white/10 transition"
          >
            Hablemos
          </Link>
        </section>

        {/* Footer */}
        <footer className="w-full bg-black/80 rounded-3xl border border-white/10 p-8 md:p-16 text-center">
          <p className="text-gray-400 mb-4">
            © 2025 DAROX. Todos los derechos reservados.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link href="/" className="text-blue-400 hover:underline">
              Inicio
            </Link>
            <Link href="/about" className="text-blue-400 hover:underline">
              Sobre nosotros
            </Link>
            <Link href="/services" className="text-blue-400 hover:underline">
              Servicios
            </Link>
            <Link href="/contact" className="text-blue-400 hover:underline">
              Contáctanos
            </Link>
          </div>
        </footer>
      </main>
    </>
  )
}