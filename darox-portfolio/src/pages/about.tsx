import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import Image from 'next/image';

export default function About() {
  const [showFull, setShowFull] = useState(false)

  const features = [
    {
      icon: "/images/n8n.svg",
      title: "n8n",
      badge: "PRO",
      subtitle: "Automatización",
      description: "n8n conecta tus apps favoritas y automatiza flujos de trabajo para que todo funcione sin esfuerzo.",
      url: "https://n8n.io",
    },
    {
      icon: "/images/teams.svg",
      title: "Teams",
      badge: "",
      subtitle: "Comunicación",
      description: "Teams es nuestra plataforma para comunicación y colaboración en tiempo real.",
      url: "https://teams.microsoft.com",
    },
    {
      icon: "/images/drive.svg",
      title: "Drive",
      badge: "",
      subtitle: "Almacenamiento en la nube",
      description: "Drive nos permite compartir archivos y colaborar de forma segura y eficiente.",
      url: "https://drive.google.com",
    },
    {
      icon: "/images/stripe-logo.webp",
      title: "Stripe",
      badge: "",
      subtitle: "Pagos",
      description: "Stripe es nuestra herramienta para procesar pagos de forma segura y sencilla.",
      url: "https://stripe.com",
    },
    {
      icon: "/images/mailchimp-logo.svg",
      title: "Mailchimp",
      badge: "PRO",
      subtitle: "Email Marketing",
      description: "Mailchimp nos ayuda a crear campañas de email efectivas para nutrir a nuestros clientes.",
      url: "https://mailchimp.com",
    },
    {
      icon: "/images/github-logo.svg",
      title: "GitHub",
      badge: "",
      subtitle: "Control de versiones",
      description: "GitHub es nuestro sistema de control de versiones, facilitando la colaboración y el desarrollo ágil.",
      url: "https://github.com",
    },
  ];

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Sobre DAROX | Agencia de Branding y Web</title>
        <meta
          name="description"
          content="Conoce al equipo de DAROX, nuestra filosofía y cómo ayudamos a empresas y emprendedores a crecer con branding, diseño web y marketing digital."
        />
        <link rel="canonical" href="https://darox.es/about" />

        {/* Open Graph */}
        <meta property="og:title" content="Sobre DAROX | Agencia de Branding y Web" />
        <meta property="og:description" content="Conoce al equipo de DAROX, nuestra filosofía y cómo ayudamos a empresas y emprendedores a crecer con branding, diseño web y marketing digital." />
        <meta property="og:image" content="https://darox.es/images/fondo_hero.webp" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="DAROX — Sobre nuestra agencia de branding y web" />
        <meta property="og:url" content="https://darox.es/about" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DaroxBrandMaker" />
        <meta name="twitter:creator" content="@DaroxBrandMaker" />
        <meta name="twitter:title" content="Sobre DAROX | Agencia de Branding y Web" />
        <meta name="twitter:description" content="Conoce al equipo de DAROX, nuestra filosofía y cómo ayudamos a empresas y emprendedores a crecer con branding, diseño web y marketing digital." />
        <meta name="twitter:image" content="https://darox.es/images/fondo_hero.webp" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://darox.es/#organization",
                  "name": "DAROX",
                  "url": "https://darox.es",
                  "logo": "https://darox.es/images/logo_horizontal.webp",
                  "founder": {
                    "@type": "Person",
                    "name": "Darío Muñoz Miguel",
                    "jobTitle": "CEO",
                    "url": "https://darox.es/about",
                    "sameAs": ["https://www.linkedin.com/in/darox/"]
                  }
                },
                {
                  "@type": "AboutPage",
                  "@id": "https://darox.es/about/#webpage",
                  "url": "https://darox.es/about",
                  "name": "Sobre DAROX | Agencia de Branding y Web",
                  "description": "Conoce al equipo de DAROX, nuestra filosofía y cómo ayudamos a empresas y emprendedores a crecer con branding, diseño web y marketing digital.",
                  "dateModified": new Date().toISOString().split('T')[0],
                  "isPartOf": { "@id": "https://darox.es/#website" },
                  "about": { "@id": "https://darox.es/#organization" },
                  "breadcrumb": { "@id": "https://darox.es/about/#breadcrumb" }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://darox.es/about/#breadcrumb",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://darox.es/" },
                    { "@type": "ListItem", "position": 2, "name": "Sobre DAROX", "item": "https://darox.es/about" }
                  ]
                }
              ]
            })
          }}
        />
      </Head>
      <Navbar />
      {/* Fondo de video animado */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/images/fondo2_poster.webp"
        aria-hidden="true"
        className="fixed inset-0 w-full h-full object-cover object-top z-0 pointer-events-none"
      >
        <source src="/images/fondo.mp4" type="video/mp4" />
      </video>
      {/* Capa oscura encima del video */}
      <div className="fixed inset-0 bg-black/60 z-0 pointer-events-none" />
        <main className="min-h-screen w-full flex flex-col items-center justify-start pt-24 pb-16 px-4 relative overflow-hidden">
          <section className="w-full max-w-5xl relative z-10 flex flex-col items-center">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="flex items-center gap-3 bg-white/10 border border-white/10 rounded-xl px-6 py-2 shadow-lg backdrop-blur-md">
              <span className="inline-block rounded-md px-3 py-1 bg-blue-600 text-xs font-bold text-white shadow">
                {new Date().getFullYear()}
              </span>
              <span className="text-base font-medium text-white/80">
                Profundiza sobre nosotros
              </span>
            </span>
          </div>
          {/* Título grande */}
          <h1 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3.2rem] font-extrabold leading-[1.1] text-white text-center tracking-tight mb-6">
            No somos tu "socio creativo".<br />
            <span className="text-blue-500">Somos el motor de tu negocio.</span>
          </h1>
          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 text-center max-w-3xl mb-10 font-medium leading-relaxed">
            Olvídate de las agencias tradicionales. En DAROX BM combinamos diseño, estrategia pura y automatización para hacer una sola cosa: transformar buenas ideas en negocios que facturan. Construimos marcas potentes que se ven bien, pero que sobre todo, dan resultados tangibles.
          </p>
          {/* Botones */}
          <div className="flex justify-center mb-12">
            <Link
              href="/contacto"
              className="inline-block bg-blue-600 text-white font-bold px-10 py-4 rounded-xl shadow-lg border border-blue-500 transition hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105 text-lg"
            >
              Contacta con nosotros
            </Link>
          </div>
          {/* Bloque de presentación de Darío */}
          <section
            id="bloque-dario"
            className="w-full max-w-4xl mx-auto bg-black/80 border border-white/10 rounded-3xl shadow-xl p-8 md:p-12 mb-16 mt-4 flex flex-col md:flex-row items-center gap-8"
          >
            {/* Texto a la izquierda */}
            <div className="flex-1 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block bg-blue-700 text-white text-xs font-bold rounded-full px-3 py-1 shadow">Fundador</span>
                <span className="text-white/80 font-semibold">Darío, CEO de Darox BM</span>
              </div>
              <p
                className={`text-lg md:text-xl text-white font-semibold mb-2 ${showFull ? 'text-justify' : 'text-left'
                  }`}
              >
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
                    Soy Darío, creador de Darox BM. <br />Ayudo a emprendedores con grandes ideas a construir marcas reales que les den libertad, ingresos y visibilidad. <br />Lo hacemos combinando estrategia, diseño e inteligencia artificial. <br />No vendemos servicios. <br />Construimos negocios que funcionan.
                  </>
                }
              </p>
              <button
                className="mt-2 text-blue-400 hover:underline text-sm font-medium transition-transform duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => {
                  setShowFull(v => !v);
                  // Efecto scroll suave al bloque
                  const el = document.getElementById('bloque-dario');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                {showFull ? 'Ver versión reducida' : 'Leer mi historia completa'}
              </button>
            </div>
            {/* Imagen a la derecha */}
            <div className="flex-1 flex justify-center items-center">
              <Image
                src="/images/bio.webp"
                alt="Darío, CEO de Darox BM"
                width={320}
                height={320}
                className="rounded-2xl border border-white/10 shadow-lg max-w-xs w-full object-cover bg-black min-h-[220px]"
                loading="lazy"
              />
            </div>
          </section>
        </section>
        {/* Bloque de resultados a ancho completo */}
        <section
          className="w-full relative py-20 px-0 sm:px-0 lg:px-0 text-white overflow-hidden"
        >
          {/* Bloque de características */}
          <section className="relative w-full py-24 px-0 flex flex-col items-center justify-center overflow-visible">
            {/* Detalle decorativo SVG izquierda */}
            <div className="hidden md:block absolute left-0 top-0 h-40 w-64 -translate-y-1/2 -translate-x-1/3 pointer-events-none opacity-60">
              <svg viewBox="0 0 567 237" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M0,237 Q283.5,0 567,237" stroke="#0055FF" strokeOpacity="0.08" strokeWidth="40" fill="none" />
              </svg>
            </div>
            {/* Detalle decorativo SVG derecha */}
            <div className="hidden md:block absolute right-0 top-0 h-40 w-64 -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-60">
              <svg viewBox="0 0 567 237" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M0,237 Q283.5,0 567,237" stroke="#0055FF" strokeOpacity="0.08" strokeWidth="40" fill="none" />
              </svg>
            </div>
            <div className="relative z-10 w-full max-w-5xl mx-auto">
              {/* Tag destacado */}
              <div className="flex flex-col items-center mb-8">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent my-3 rounded-full" />
              </div>
              {/* Títulos reordenados */}
              <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2 gradient-text">
                Herramientas y Tecnologías
              </h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-center text-white/70 mb-6">
                Impulsando nuestra productividad
              </h3>
              {/* Descripción */}
              <p className="text-lg text-center text-white/60 mb-10 max-w-3xl mx-auto">
                Para consolidarnos como una destacada Agencia de Branding y Web, nuestro ecosistema está totalmente compuesto por tecnología moderna y fiable. Esto certifica que cada rincón del universo de DAROX BM dispone de la infraestructura necesaria para ejecutar tu proyecto a la perfección y acercarte al éxito real que mereces.
              </p>
              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 w-full">
                {features.map((f, idx) => (
                  <a
                    key={idx}
                    href={f.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      relative group rounded-2xl border border-white/10
                      bg-gradient-to-br from-[rgba(0,85,255,0.15)] to-[rgba(97,97,97,0.09)]
                      p-8 flex flex-col justify-between h-full
                      transition duration-300 hover:shadow-blue-800/40 cursor-pointer
                      features-card
                      w-full
                      hover:scale-[1.03]
                    "
                    title={`Visitar ${f.title}`}
                  >
                    {/* Línea azul decorativa superior */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-2xl" />
                    {/* Flecha animada en la esquina superior derecha */}
                    <span className="absolute top-5 right-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white opacity-80"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 17L17 7M7 7h10v10"
                        />
                      </svg>
                    </span>
                    {/* Icono circular con glow y sombra */}
                    <div className="flex items-center mb-6">
                      <div className="relative mr-4 features-icon-bg">
                        <div className="relative z-10 h-12 w-12 flex items-center justify-center rounded-full">
                          <Image
                            src={f.icon}
                            alt={`Logo de ${f.title}, herramienta de ${f.subtitle} utilizada por DAROX`}
                            width={48}
                            height={48}
                            className="h-12 w-12 object-contain rounded-full"
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold text-white">{f.title}</h4>
                        {f.badge && (
                          <span className="text-xs font-semibold px-3 py-1 ml-2 features-badge">
                            {f.badge}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="text-gray-300 text-base mb-1">{f.subtitle}</div>
                    {/* Línea difuminada */}
                    <div className="w-full h-0.5 my-4 rounded-full linea-difuminada" />
                    {/* Descripción */}
                    <div className="text-gray-400 text-base">{f.description}</div>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}