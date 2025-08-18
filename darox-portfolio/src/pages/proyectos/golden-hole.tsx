import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

export default function ProyectoMiel() {
  return (
    <>
      <Head>
        <title>Golden Hole | Branding, Web y Estrategia Digital | DAROX</title>
        <meta
          name="description"
          content="Golden Hole: Proyecto de branding, desarrollo web y estrategia digital para un Club de Golf. Lujo, Precisión y Exclusividad."
        />
        {/* Open Graph */}
        <meta property="og:title" content="Proyecto Golden Hole | Branding, Web y Estrategia Digital | DAROX" />
        <meta property="og:description" content="Caso de éxito: Branding, packaging y desarrollo web para un Club de Golf. Estrategia, diseño y resultados medibles para aumentar ventas y mayor presencia." />
        <meta property="og:image" content="https://darox.es/images/golf1.png" />
        <meta property="og:url" content="https://darox.es/proyectos/golden-hole" />
        <meta property="og:type" content="article" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Proyecto Golden Hole | Branding, Web y Estrategia Digital | DAROX" />
        <meta name="twitter:description" content="Caso de éxito: Branding, estrategia digital y desarrollo web para un Club de Golf. Estrategia, diseño y resultados medibles para aumentar ventas y mayor presencia." />
        <meta name="twitter:image" content="https://darox.es/images/golf1.png" />
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Golden Hole",
            "description": "Branding, packaging y desarrollo web para un Club de Golf. Estrategia, diseño y resultados medibles para aumentar ventas y mayor presencia.",
            "image": "https://darox.es/images/golf1.png",
            "url": "https://darox.es/proyectos/golden-hole",
            "author": {
              "@type": "Organization",
              "name": "DAROX"
            },
            "datePublished": "2024-01-01"
          }
          `}
        </script>
        <link rel="canonical" href="https://darox.es/proyectos/golden-hole" />
      </Head>
      <Navbar />
      <main className="min-h-screen w-full bg-gradient-to-br from-black via-[#0a1333] to-[#1a237e] relative overflow-hidden pt-24 pb-16">
        {/* Fondo decorativo */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="w-full h-full bg-[url('/images/moon.png')] bg-cover bg-[center_top]" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -z-10 blur-3xl opacity-40 pointer-events-none animate-pulse-slow">
          <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-600 via-indigo-500 to-transparent" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center md:items-start">
          {/* Columna izquierda: Título, descripción, badges */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {/* Fecha y badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl border border-white/10 bg-white/5 shadow w-fit animate-fade-in-up">
              <span className="inline-block rounded-md px-3 py-1 bg-blue-600 text-xs font-bold text-white shadow">
                Portfolio
              </span>
              <span className="text-base font-medium text-white/80">
                Proyectos reales
              </span>
            </div>

            {/* Título grande */}
            <h1 className="gradient-text text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in-up">
              Golden Hole
            </h1>
            <div className="w-32 h-1 rounded-full bg-gradient-to-r from-transparent via-blue-600 to-transparent my-2 animate-pulse-slow" />
            {/* Subtítulo */}
            <p className="text-lg text-gray-300 max-w-xl animate-fade-in-up delay-100">
              Proyecto de branding, desarrollo web y estrategia digital para un Club de Golf. <b>Lujo, Precisión y Exclusividad.</b>
            </p>
            {/* Badges de categoría */}
            <div className="flex gap-3 mt-2">
              <span className="bg-blue-900/60 text-white/90 text-base px-4 py-2 rounded-lg border border-white/10 font-medium">Branding</span>
              <span className="bg-blue-900/60 text-white/90 text-base px-4 py-2 rounded-lg border border-white/10 font-medium">Web</span>
              <span className="bg-blue-900/60 text-white/90 text-base px-4 py-2 rounded-lg border border-white/10 font-medium">Estrategia Digital</span>
            </div>
          </div>
          {/* Columna derecha: Card de datos */}
          <div className="flex-1 w-full max-w-md">
            <div className="rounded-3xl bg-gradient-to-br from-[#0e1a3a]/80 to-[#1a237e]/60 border border-white/10 shadow-2xl p-8 flex flex-col gap-6 backdrop-blur-md">
              {/* Servicios */}
              <div>
                <span className="block text-gray-400 text-sm mb-1">Servicios</span>
                <span className="block text-white font-semibold">Branding, Identidad visual, Diseño editorial, Web corporativa, Dirección creativa</span>
              </div>
              {/* Categoría */}
              <div>
                <span className="block text-gray-400 text-sm mb-1">Categoría</span>
                <span className="block text-white font-semibold">Club de golf / Lujo y lifestyle deportivo</span>
              </div>
              {/* Cliente */}
              <div>
                <span className="block text-gray-400 text-sm mb-1">Cliente</span>
                <span className="block text-white font-semibold">Club privado de alto standing (Confidencial)</span>
              </div>
              {/* Botón de contacto */}
              <Link
                href="https://www.behance.net/gallery/222602013/Golden-Hole-Golf-Club-Visual-Identity"
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
                Ver más información
              </Link>
            </div>
          </div>
        </div>
        {/* Imagen principal del proyecto */}
        <div className="relative z-10 max-w-6xl mx-auto mt-16 px-4">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
            <Image
              src="/images/golf1.png"
              alt="Golden Hole: branding, desarrollo web y packaging para club de golf premium realizado por DAROX"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Sección tipo análisis debajo de la imagen */}
        <section className="relative z-10 max-w-6xl mx-auto mt-16 px-4 py-12 bg-black/80 rounded-3xl border border-white/10 shadow-xl animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-up">
            <span className="gradient-text">Identidad de Marca</span> – <span className="gradient-text">Origen, Valores y Propósito</span>
          </h2>
          <hr className="border-white/10 mb-8" />
          <ul className="text-lg text-gray-300 max-w-3xl space-y-4 list-disc list-inside">
            <li className="animate-fade-in-up delay-100">
              <span className="gradient-text font-semibold">Elegancia deportiva:</span> una marca donde el golf se une con el lujo y la precisión.
            </li>
            <li className="animate-fade-in-up delay-200">
              <span className="gradient-text font-semibold">Experiencia exclusiva:</span> cada detalle está diseñado para quienes valoran la excelencia.
            </li>
          </ul>
          <div className="mt-10 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4"><span className="gradient-text">Origen</span></h3>
              <p className="text-gray-200 text-base mb-2">
                <span className="gradient-text font-semibold">Nacido del juego más noble:</span> Golden Hole surge como respuesta a una necesidad: elevar el golf a una experiencia de clase mundial. Inspirado en la tradición británica y el estilo contemporáneo, el club ofrece un espacio donde la precisión, el silencio y la distinción se encuentran.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4"><span className="gradient-text">Valores</span></h3>
              <ul className="text-gray-200 text-base space-y-3 list-disc list-inside">
                <li><span className="gradient-text font-semibold">Exclusividad, precisión y excelencia:</span></li>
                <li><span className="gradient-text font-semibold">Experiencia premium:</span> instalaciones, trato y entorno diseñados para el jugador exigente.</li>
                <li><span className="gradient-text font-semibold">Cuidado por el detalle:</span> desde el castillo hasta el logotipo, todo comunica sofisticación.</li>
                <li><span className="gradient-text font-semibold">Pasión por el golf:</span> tradición deportiva como pilar de cada servicio ofrecido.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Imagen grande centrada */}
        <div className="relative z-10 max-w-6xl mx-auto mt-16 px-4">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
            <Image
              src="/images/golf3.png"
              alt="Golden Hole: detalle visual del branding y experiencia digital desarrollados por DAROX"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Estrategia de Marca y Experiencia de Usuario */}
        <section className="relative z-10 max-w-6xl mx-auto mt-16 px-4 py-12 bg-black/80 rounded-3xl border border-white/10 shadow-xl animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fade-in-up">
            <span className="gradient-text">Estrategia de Marca</span> y <span className="gradient-text">Experiencia de Usuario</span>
          </h2>
          <hr className="border-white/10 mb-8" />
          <ul className="text-lg text-gray-300 max-w-3xl space-y-4 list-disc list-inside">
            <li>
              <span className="gradient-text font-semibold">Identidad visual coherente:</span> tonos sobrios, dorado elegante y estilo contemporáneo.
            </li>
            <li>
              <span className="gradient-text font-semibold">Diseño UX/UI:</span> claridad, distinción y confianza en cada interacción.
            </li>
            <li>
              <span className="gradient-text font-semibold">Mensaje premium:</span> cada elemento visual y verbal refuerza el valor de &quot;alto standing&quot;.
            </li>
          </ul>
        </section>

        {/* Resultados y Aprendizajes */}
        <section className="relative z-10 max-w-6xl mx-auto mt-16 px-4 py-12 bg-black/80 rounded-3xl border border-white/10 shadow-xl animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fade-in-up">
            <span className="gradient-text">Resultados</span> y <span className="gradient-text">Aprendizajes</span>
          </h2>
          <hr className="border-white/10 mb-8" />
          <ul className="text-lg text-gray-300 max-w-3xl space-y-4 list-disc list-inside">
            <li>
              <span className="gradient-text font-semibold">Refuerzo de percepción de marca:</span> imagen más sólida, aspiracional y diferenciada.
            </li>
            <li>
              <span className="gradient-text font-semibold">Incremento en membresías:</span> más solicitudes tras el rediseño y nueva narrativa visual.
            </li>
            <li>
              <span className="gradient-text font-semibold">Colaboración estratégica constante:</span> evolución de marca y experiencia al nivel del público objetivo.
            </li>
          </ul>
        </section>

        {/* Galería de dos imágenes a pantalla completa */}
        <section className="relative z-10 w-full mt-16 flex justify-center">
          <div className="flex flex-col md:flex-row gap-0 w-full max-w-6xl px-4">
            <div className="flex-1">
              <Image
                src="/images/golf7.png"
                alt="Golden Hole: packaging innovador y branding para club de golf premium realizado por DAROX"
                width={1200}
                height={800}
                className="w-full h-[350px] md:h-[500px] object-cover"
                style={{ borderTopLeftRadius: '1.5rem', borderBottomLeftRadius: '1.5rem' }}
              />
            </div>
            <div className="flex-1">
              <Image
                src="/images/golf4.png"
                alt="Golden Hole: detalle de packaging y diseño visual para club de golf premium realizado por DAROX"
                width={1200}
                height={800}
                className="w-full h-[350px] md:h-[500px] object-cover"
                style={{ borderTopRightRadius: '1.5rem', borderBottomRightRadius: '1.5rem' }}
              />
            </div>
          </div>
        </section>

        {/* Otros proyectos del portfolio */}
        <section className="relative z-10 max-w-6xl mx-auto mt-24 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">
            Otros proyectos destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* El Majuelo del Arlanza */}
            <Link
              href="/proyectos/MajueloDelArlanza"
              className="group block rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 hover:scale-[1.025] transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src="/images/miel1.png"
                  alt="Vista previa del proyecto El Majuelo del Arlanza: branding, desarrollo y estrategia digital realizados por DAROX"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
                />
              </div>
              <div className="p-6">
                <span className="text-lg font-bold text-white">El Majuelo del Arlanza</span>
                <p className="text-gray-300 mb-2 text-base">
                  Branding, desarrollo y estrategia digital para una marca de miel artesanal.
                </p>
              </div>
            </Link>
            {/* Códice 13 */}
            <Link
              href="/proyectos/codice-13"
              className="group block rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 hover:scale-[1.025] transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src="/images/scaperoom.png"
                  alt="Vista previa del proyecto Códice 13: branding, web y narrativa inmersiva realizados por DAROX"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
                />
              </div>
              <div className="p-6">
                <span className="text-lg font-bold text-white">Códice 13</span>
                <p className="text-gray-300 mb-2 text-base">
                  Branding, desarrollo web y narrativa inmersiva para un escape room de misterio.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}