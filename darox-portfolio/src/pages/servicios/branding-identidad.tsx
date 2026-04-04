import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Questions from '../../components/Questions';
import LogoCarousel from '../../components/LogoCarousel';

export default function BrandingIdentidad() {
  return (
    <>
      <Head>
        <title>Agencia de Branding Rápido | Diseño de Identidad Visual | DAROX</title>
        <meta
          name="description"
          content="Diseño de identidad visual para empresas y startups. Agencia de branding rápido, sin procesos infinitos ni presupuestos sorpresa. Tu marca lista en 3 semanas."
        />
        <meta name="keywords" content="agencia de branding rápido, diseño de identidad visual para empresas, branding startup, identidad corporativa, DAROX" />
        <link rel="canonical" href="https://darox.es/servicios/branding-identidad" />
      </Head>

      <Navbar />

      {/* Custom Hero para la Landing de Branding */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20">
        <div className="container mx-auto px-6 text-center z-10">
          <div className="relative z-20 text-center max-w-4xl mx-auto px-2 flex flex-col items-center">
            {/* Tag Destacado */}
            <div className="relative inline-flex w-fit items-center gap-3 px-5 py-2 rounded-[10px] border border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] backdrop-blur-[2.5px] mb-6 shadow overflow-hidden tag-destacado">
              <div className="absolute left-0 top-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-[10px] pointer-events-none opacity-70" />
              <span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
              <span className="font-semibold text-sm tag-destacado-text text-white">
                Agencia de Branding Estratégico
              </span>
            </div>

            <h1 className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight">
              Diseño de Identidad Visual para <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500">Empresas que quieren Vender.</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-normal text-gray-200 mb-8 max-w-3xl mx-auto drop-shadow">
              No diseñamos logos bonitos para ganar premios de arte; construimos identidades visuales preparadas para enamorar a tu cliente ideal desde el día uno. <strong>Todo listo en 3 semanas. Sin mareos.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                  href="/contacto"
                  className="px-8 py-4 rounded-[10px] text-lg font-bold shadow-xl transition-all duration-300 hover:scale-105 text-white bg-blue-700 hover:bg-blue-800 border-2 border-blue-600 about-shadow"
              >
                  Quiero modernizar mi marca
              </Link>
            </div>
          </div>
        </div>

        {/* Fondo sutil */}
        <div className="absolute inset-0 bg-[url('/images/fondo.png')] bg-no-repeat bg-center bg-[length:150%] opacity-20 pointer-events-none" />
      </section>

      <LogoCarousel />

      {/* Sección: El Problema (Vs.) / Antes y Después Espiritual */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 gradient-text">La diferencia entre una marca estancada <br/> y una marca líder.</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Muchas agencias locales te atrapan en meses de revisiones subjetivas. Nosotros nos enfocamos en lo que funciona en el mercado digital actual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjeta Negativa */}
            <div className="bg-black/60 border border-red-900/30 rounded-2xl p-8 relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900 to-transparent" />
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center gap-3">
                <span className="bg-red-900/40 p-2 rounded-full">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </span>
                Marcas Estancadas
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span> Logos anticuados que no se adaptan a pantallas móviles.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span> Identidades creadas con plantillas o generadores genéricos.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span> Agencias que tardan 3 meses en entregarte un PDF.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span> Mensajes confusos que no conectan con tu público objetivo.</li>
              </ul>
            </div>

            {/* Tarjeta Positiva (DAROX) */}
            <div className="bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] border border-blue-500/30 rounded-2xl p-8 relative overflow-hidden backdrop-blur-sm shadow-[0_0_40px_rgba(0,85,255,0.1)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <span className="bg-blue-900/40 p-2 rounded-full">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </span>
                Proyectos DAROX
              </h3>
              <ul className="space-y-4 text-gray-200">
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> Diseño Responsive y escalable, perfecto para perfiles y webs.</li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> Construcción basada en psicología del color y arquitectura de marca.</li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> Rapidez y eficacia: Entregamos tu Start Pack en solo 2 a 3 semanas.</li>
                <li className="flex items-start gap-3"><span className="text-blue-500 mt-1">✓</span> Posicionamiento premium, manual corporativo y assets listos.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Nuestro Proceso Rápido */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/40 text-white relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <div className="relative inline-flex w-fit items-center gap-3 px-5 py-2 rounded-[10px] border border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] backdrop-blur-[2.5px] mb-4 shadow overflow-hidden tag-destacado">
              <span className="font-semibold text-sm text-white">Nuestro Proceso Cero-Mareos</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Tu Identidad Visual en <span className="text-blue-500">Solo 3 Pasos</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Auditoría Estratégica", desc: "No dibujamos a ciegas. Analizamos tu sector, tu competencia y tu propuesta de valor para diseñar con lógica comercial." },
              { num: "02", title: "Concepto y Diseño", desc: "Creamos las propuestas maestras de tu identidad: Naming (si lo necesitas), Logo, Tipografías y Paletas de colores adaptadas al 2026." },
              { num: "03", title: "Entrega del Start Pack", desc: "En 2-3 semanas tienes tu Manual de Identidad y los assets de redes sociales listos para publicar y empezar a generar ventas." }
            ].map((step, i) => (
              <div key={i} className="bg-black/60 border border-white/10 p-8 rounded-2xl relative group hover:border-blue-500/50 transition-colors">
                <span className="absolute -top-6 left-8 text-5xl font-black text-white/5 group-hover:text-blue-500/20 transition-colors">{step.num}</span>
                <h3 className="text-2xl font-bold mb-4 mt-2">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final orientado al Start Pack */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-white">No dejes que una imagen amateur arruine un buen negocio.</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Consigue el <strong>Start Pack</strong> por solo 490€. Diseño de nivel startup nacional, sin letras pequeñas.</p>
          <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl border-4 border-white/15 bg-blue-700 shadow-[0_0_30px_rgba(0,100,255,0.4)] text-white text-xl font-bold transition-all duration-300 hover:bg-blue-800 hover:scale-105"
          >
              Empezar mi Branding Hoy
          </Link>
        </div>
      </section>
      
      <Questions />
    </>
  );
}
