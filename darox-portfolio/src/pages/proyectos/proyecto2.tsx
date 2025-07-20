import Head from 'next/head'
import Navbar from '../../components/Navbar'
import Image from 'next/image'

export default function Proyecto2() {
  return (
    <>
      <Head>
        <title>Proyecto 2 | DAROX</title>
        <meta name="description" content="Detalles del Proyecto 2 realizado por DAROX." />
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
            <div
              className="
                inline-flex items-center gap-3
                px-4 py-2
                rounded-xl
                border border-white/10
                bg-white/5
                shadow
                w-fit
                animate-fade-in-up
              "
            >
              <span className="inline-block rounded-md px-3 py-1 bg-blue-600 text-xs font-bold text-white shadow">
                Portafolio
              </span>
              <span className="text-base font-medium text-white/80">
                Proyectos reales
              </span>
            </div>

            {/* Título grande */}
            <h1 className="gradient-text text-5xl md:text-6xl font-extrabold leading-tight animate-fade-in-up">
              Proyecto 2
            </h1>
            <div className="w-32 h-1 rounded-full bg-gradient-to-r from-transparent via-blue-600 to-transparent my-2 animate-pulse-slow" />
            {/* Descripción */}
            <p className="text-lg text-gray-300 max-w-xl animate-fade-in-up delay-100">
              Proyecto de branding, desarrollo y estrategia digital para una marca innovadora. Diseño, tecnología y resultados para crecer online.
            </p>
            {/* Badges de categoría */}
            <div className="flex gap-3 mt-2">
              <span className="bg-blue-900/60 text-white/90 text-base px-4 py-2 rounded-lg border border-white/10 font-medium">Branding</span>
              <span className="bg-blue-900/60 text-white/90 text-base px-4 py-2 rounded-lg border border-white/10 font-medium">Digital</span>
            </div>
          </div>
          {/* Columna derecha: Card de datos */}
          <div className="flex-1 w-full max-w-md">
            <div className="rounded-3xl bg-gradient-to-br from-[#0e1a3a]/80 to-[#1a237e]/60 border border-white/10 shadow-2xl p-8 flex flex-col gap-6 backdrop-blur-md">
              {/* Servicios */}
              <div>
                <span className="block text-gray-400 text-sm mb-1">Servicios</span>
                <span className="block text-white font-semibold">Branding, Web, Estrategia</span>
              </div>
              {/* Categoría */}
              <div>
                <span className="block text-gray-400 text-sm mb-1">Categoría</span>
                <span className="block text-white font-semibold">Negocio Digital</span>
              </div>
              {/* Cliente */}
              <div>
                <span className="block text-gray-400 text-sm mb-1">Cliente</span>
                <span className="block text-white font-semibold">Confidencial</span>
              </div>
              {/* Botón */}
              <a
                href="/contact"
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
                Reserva una llamada
              </a>
            </div>
          </div>
        </div>
        {/* Imagen principal del proyecto */}
        <div className="relative z-10 max-w-6xl mx-auto mt-16 px-4">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
            <Image
              src="/images/miel1.png"
              alt="Proyecto 2"
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
            <span className="gradient-text">Análisis</span> – <span className="gradient-text">Performance</span> y <span className="gradient-text">Responsividad</span>
          </h2>
          <hr className="border-white/10 mb-8" />
          <ul className="text-lg text-gray-300 max-w-3xl space-y-4 list-disc list-inside">
            <li className="animate-fade-in-up delay-100">
              <span className="gradient-text font-semibold">Rendimiento óptimo:</span> tiempos de carga rápidos y navegación suave en todos los dispositivos.
            </li>
            <li className="animate-fade-in-up delay-200">
              <span className="gradient-text font-semibold">Performance:</span> optimización de imágenes, scripts y recursos, código limpio y escalabilidad.
            </li>
            <li className="animate-fade-in-up delay-300">
              <span className="gradient-text font-semibold">Responsividad:</span> experiencia consistente y fluida tanto en escritorio como en móvil.
            </li>
          </ul>
          <div className="flex flex-col md:flex-row gap-12">
            {/* Bloque Performance */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white"><span className="gradient-text">Performance</span></h3>
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md">SEO</span>
              </div>
              <ul className="text-gray-200 text-base space-y-2 list-disc list-inside">
                <li><span className="gradient-text font-semibold">Carga rápida:</span> optimización de imágenes, scripts y recursos.</li>
                <li><span className="gradient-text font-semibold">Código optimizado:</span> prácticas limpias y eficientes para reducir elementos innecesarios.</li>
                <li><span className="gradient-text font-semibold">Escalabilidad:</span> diseño preparado para soportar mayor tráfico.</li>
              </ul>
            </div>
            {/* Bloque Responsividad */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2"><span className="gradient-text">Responsividad</span></h3>
              <ul className="text-gray-200 text-base space-y-2 list-disc list-inside">
                <li><span className="gradient-text font-semibold">Adaptabilidad total:</span> el sitio se ajusta perfectamente a móviles y escritorios.</li>
                <li><span className="gradient-text font-semibold">Interfaz intuitiva:</span> navegación fluida y consistente en cualquier dispositivo.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bloque de texto adicional */}
        <section className="relative z-10 max-w-6xl mx-auto mt-16 px-4 py-12 bg-black/80 rounded-3xl border border-white/10 shadow-xl animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fade-in-up">
            <span className="gradient-text">Estrategia de Marca</span> y <span className="gradient-text">Experiencia de Usuario</span>
          </h2>
          <hr className="border-white/10 mb-8" />
          <ul className="text-lg text-gray-300 max-w-3xl space-y-4 list-disc list-inside">
            <li>
              <span className="gradient-text font-semibold">Identidad visual coherente:</span> alineada con los valores de la marca.
            </li>
            <li>
              <span className="gradient-text font-semibold">Diseño UX/UI:</span> claridad, confianza y conversión en cada interacción.
            </li>
            <li>
              <span className="gradient-text font-semibold">Mensaje premium:</span> cada detalle refuerza la percepción de calidad.
            </li>
          </ul>
        </section>

        {/* Imagen grande centrada */}
        <div className="relative z-10 max-w-6xl mx-auto mt-16 px-4">
          <div className="overflow-hidden rounded-3xl shadow-2xl border border-white/10">
            <Image
              src="/images/miel1.png"
              alt="Detalle destacado Proyecto 2"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Otro bloque de texto */}
        <section className="relative z-10 max-w-6xl mx-auto mt-16 px-4 py-12 bg-black/80 rounded-3xl border border-white/10 shadow-xl animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 animate-fade-in-up">
            <span className="gradient-text">Resultados</span> y <span className="gradient-text">Aprendizajes</span>
          </h2>
          <hr className="border-white/10 mb-8" />
          <ul className="text-lg text-gray-300 max-w-3xl space-y-4 list-disc list-inside">
            <li>
              <span className="gradient-text font-semibold">Aumento de percepción de marca:</span> el proyecto mejoró significativamente la imagen y el reconocimiento.
            </li>
            <li>
              <span className="gradient-text font-semibold">Incremento en ventas online:</span> resultados tangibles tras el lanzamiento.
            </li>
            <li>
              <span className="gradient-text font-semibold">Iteración y mejora continua:</span> colaboración cercana con el cliente para una solución robusta y escalable.
            </li>
          </ul>
        </section>

        {/* Galería de dos imágenes a pantalla completa */}
        <section className="relative z-10 w-full mt-16 flex justify-center">
          <div className="flex flex-col md:flex-row gap-0 w-full max-w-6xl px-4">
            <div className="flex-1">
              <Image
                src="/images/miel1.png"
                alt="Detalle Proyecto 2 - 1"
                width={1200}
                height={800}
                className="w-full h-[350px] md:h-[500px] object-cover"
                style={{ borderTopLeftRadius: '1.5rem', borderBottomLeftRadius: '1.5rem' }}
              />
            </div>
            <div className="flex-1">
              <Image
                src="/images/miel1.png"
                alt="Detalle Proyecto 2 - 2"
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
            {/* Miel */}
            <a
              href="/proyectos/miel"
              className="group block rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 hover:scale-[1.025] transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src="/images/miel1.png"
                  alt="Miel Premium"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
                />
              </div>
              <div className="p-6">
                <span className="text-lg font-bold text-white">Miel Premium</span>
                <p className="text-gray-300 mb-2 text-base">
                  Proyecto de branding, packaging y web para una marca de miel premium.
                </p>
              </div>
            </a>
            {/* Proyecto 3 */}
            <a
              href="/proyectos/proyecto3"
              className="group block rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 hover:scale-[1.025] transition"
            >
              <div className="relative w-full h-64">
                <Image
                  src="/images/miel1.png"
                  alt="Proyecto 3"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  style={{ borderTopLeftRadius: '1.5rem', borderTopRightRadius: '1.5rem' }}
                />
              </div>
              <div className="p-6">
                <span className="text-lg font-bold text-white">Proyecto 3</span>
                <p className="text-gray-300 mb-2 text-base">
                  Proyecto integral de transformación digital y diseño avanzado para una marca líder.
                </p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </>
  )
}
