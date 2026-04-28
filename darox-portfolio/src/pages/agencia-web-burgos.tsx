import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function AgenciaWebBurgos() {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Agencia de Diseño Web en Burgos | Webs que Venden | DAROX</title>
        <meta
          name="description"
          content="Diseño web en Burgos para negocios locales y startups. Creamos webs rápidas, optimizadas para Google (SEO local) y enfocadas en conseguir clientes. Presupuestos desde 490€."
        />
        <meta name="keywords" content="diseño web burgos, agencia web burgos, seo local burgos, páginas web burgos, darox" />
        <link rel="canonical" href="https://darox.es/agencia-web-burgos" />

        <meta property="og:title" content="Agencia de Diseño Web en Burgos | Webs que Venden | DAROX" />
        <meta property="og:description" content="Diseño web en Burgos para negocios locales y startups. Creamos webs rápidas, optimizadas para Google (SEO local) y enfocadas en conseguir clientes. Presupuestos desde 490€." />
        <meta property="og:image" content="https://darox.es/images/fondo_hero.webp" />
        <meta property="og:image:alt" content="DAROX — Agencia de Diseño Web en Burgos" />
        <meta property="og:url" content="https://darox.es/agencia-web-burgos" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agencia de Diseño Web en Burgos | Webs que Venden | DAROX" />
        <meta name="twitter:description" content="Diseño web en Burgos para negocios locales y startups. Creamos webs rápidas, optimizadas para Google (SEO local) y enfocadas en conseguir clientes. Presupuestos desde 490€." />
        <meta name="twitter:image" content="https://darox.es/images/fondo_hero.webp" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "WebDesignCompany",
          "name": "DAROX Brandmaker - Diseño Web Burgos",
          "image": "https://darox.es/images/logo_horizontal.webp",
          "url": "https://darox.es/agencia-web-burgos", "email": "contacto@darox.es",
          "address": { "@type": "PostalAddress", "addressLocality": "Burgos", "addressRegion": "Castilla y León", "postalCode": "09001", "addressCountry": "ES" },
          "geo": { "@type": "GeoCoordinates", "latitude": "42.3439", "longitude": "-3.6969" },
          "priceRange": "490€ - 1950€",
          "description": "Agencia de diseño web en Burgos. Webs corporativas, tiendas online y automatización CRM para pymes de Castilla y León.",
          "areaServed": ["Burgos", "Castilla y León"]
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://darox.es/" },
            { "@type": "ListItem", "position": 2, "name": "Agencia Web Burgos", "item": "https://darox.es/agencia-web-burgos" }
          ]
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Cuánto cuesta una página web en Burgos?",
              "acceptedAnswer": { "@type": "Answer", "text": "Nuestros sistemas web parten desde 490€ (Start Pack) y 980€ (Grow Pack, web corporativa con SEO local). Precio cerrado por contrato, sin sorpresas." }},
            { "@type": "Question", "name": "¿Cuánto tiempo tarda en hacerse una web en Burgos?",
              "acceptedAnswer": { "@type": "Answer", "text": "Entre 3 y 4 semanas. Los plazos se firman en contrato y son inamovibles." }},
            { "@type": "Question", "name": "¿El diseño web incluye SEO local para Burgos?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sí. Schema LocalBusiness, Core Web Vitals optimizados e integración con Google Business Profile para dominar las búsquedas locales en Burgos." }},
            { "@type": "Question", "name": "¿Trabajáis con negocios de toda la provincia de Burgos?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sí. Burgos capital, Aranda de Duero, Miranda de Ebro y toda Castilla y León." }},
            { "@type": "Question", "name": "¿Podéis hacer que mi negocio aparezca en Google Maps en Burgos?",
              "acceptedAnswer": { "@type": "Answer", "text": "Sí. Implementamos el schema LocalBusiness y optimizamos tu Google Business Profile para aparecer en el pack local de Google Maps." }}
          ]
        })}} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org", "@type": "WebPage",
          "speakable": { "@type": "SpeakableSpecification", "cssSelector": ["#burgos-intro", "h1"] },
          "url": "https://darox.es/agencia-web-burgos"
        })}} />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-black text-white">

        {/* ─── HERO: tipografía masiva, sin tarjetas ─── */}
        <section className="relative pt-40 pb-20 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          {/* Blur decorativo asimétrico */}
          <div className="absolute top-20 right-[-80px] w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[160px] pointer-events-none" />

          <p className="text-xs font-bold tracking-[0.35em] uppercase text-blue-400 mb-10">
            Burgos Capital — Agencia Digital
          </p>

          <h1 className="text-[clamp(2.8rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-tighter mb-10 max-w-5xl">
            Diseño Web<br />
            en <span className="gradient-text">Burgos</span><br />
            para negocios<br />
            que no se conforman<br />
            con las sobras.
          </h1>

          <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
            <p id="burgos-intro" className="text-lg md:text-xl text-white/55 max-w-lg leading-relaxed font-light">
              Olvídate de las webs &quot;tarjeta de visita&quot; que nadie encuentra. Construimos sistemas digitales que dominan Google en tu ciudad y automatizan la captación de clientes sin que muevas un dedo.
            </p>
            <Link
              href="/contacto"
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-base font-bold hover:bg-white/90 transition-colors"
            >
              Solicitar propuesta gratuita
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ─── DIVISOR ─── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="border-t border-white/10" />
        </div>

        {/* ─── EL PROBLEMA: layout editorial con números grandes ─── */}
        <section className="py-24 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="md:w-2/5">
              <p className="text-xs font-bold tracking-[0.35em] uppercase text-white/30 mb-6">El diagnóstico</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                Mucha tradición,<br />
                <span className="text-white/40">poca conversión.</span>
              </h2>
            </div>
            <div className="md:w-3/5 flex flex-col gap-0">
              {[
                { n: "01", title: "Reliquias digitales", body: "Webs hechas hace 5 años que se rompen en cualquier móvil moderno. Tu imagen de marca lo paga." },
                { n: "02", title: "Invisibilidad orgánica", body: "Páginas tan lentas que Google las penaliza. Cuando alguien busca tu servicio en Burgos, aparece tu competencia." },
                { n: "03", title: "Fuga silenciosa de clientes", body: "Diseños genéricos que no transmiten la calidad real de lo que ofreces. El cliente entra, no se fía y se va." },
              ].map((item) => (
                <div key={item.n} className="flex gap-8 py-8 border-b border-white/10 group">
                  <span className="text-5xl font-black text-white/8 leading-none flex-shrink-0 tabular-nums group-hover:text-white/20 transition-colors duration-500">
                    {item.n}
                  </span>
                  <div>
                    <p className="text-lg font-bold text-white mb-2">{item.title}</p>
                    <p className="text-white/50 leading-relaxed text-sm">{item.body}</p>
                  </div>
                </div>
              ))}
              <p className="pt-8 text-white/70 leading-relaxed">
                Mientras tu competencia sigue con webs obsoletas, <strong className="text-white">tú tienes la oportunidad de llevarte a todos los clientes que ellos están perdiendo</strong>. Solo necesitas actuar primero.
              </p>
            </div>
          </div>
        </section>

        {/* ─── DIVISOR ─── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="border-t border-white/10" />
        </div>

        {/* ─── LA SOLUCIÓN: asimétrico, tipográfico ─── */}
        <section className="py-24 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <p className="text-xs font-bold tracking-[0.35em] uppercase text-white/30 mb-16">La solución DAROX</p>

          <div className="flex flex-col md:flex-row gap-16 md:gap-24 mb-20">
            <div className="md:w-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-8">
                SEO Local Extremo<br />+ Conversión<br />Automática.
              </h2>
              <p className="text-white/55 leading-relaxed mb-5 font-light">
                Una web bonita no sirve de nada si cuando alguien en Burgos busca <em>&quot;tu servicio + cerca de mí&quot;</em> no apareces. Construimos con <strong className="text-white font-semibold">Next.js</strong> — la infraestructura de las grandes startups — para asegurar velocidades que destrozan a tu competencia en los rankings locales.
              </p>
              <p className="text-white/55 leading-relaxed font-light">
                Y vamos un paso más: conectamos tu web con un <strong className="text-white font-semibold">CRM automatizado</strong>. Si un cliente rellena tu formulario un domingo a las 3 de la madrugada, tu sistema le responde al instante. Tu web trabajando para ti, no al revés.
              </p>
            </div>

            {/* Tabla de entregables estilo minimal */}
            <div className="md:w-1/2">
              <p className="text-xs font-bold tracking-[0.35em] uppercase text-white/30 mb-6">Lo que incluye tu sistema</p>
              <div className="flex flex-col">
                {[
                  ["Diseño UI/UX a Medida", "Cero plantillas. Tu interfaz, única."],
                  ["Dominio SEO Local", "Arquitectura técnica para rankear en Burgos y CyL."],
                  ["Ecosistema Google", "Google Business Profile + Maps integrado."],
                  ["Motor de Captación", "Formularios de alta conversión conectados a CRM."],
                  ["Fricción Cero", "WhatsApp directo, llamada a un clic."],
                  ["Infraestructura Premium", "Hosting, dominio y correos corporativos blindados."],
                ].map(([label, desc], i) => (
                  <div key={i} className="flex items-baseline gap-4 py-4 border-b border-white/8">
                    <span className="text-blue-500 font-mono text-xs flex-shrink-0">{String(i + 1).padStart(2, '0')}.</span>
                    <div>
                      <span className="text-white font-semibold text-sm">{label}</span>
                      <span className="text-white/40 text-sm"> — {desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-end justify-between">
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Sistemas desde</p>
                  <p className="text-5xl font-black tracking-tight">980€</p>
                </div>
                <Link
                  href="/#precios"
                  className="text-sm font-bold text-blue-400 hover:text-blue-300 underline underline-offset-4 transition-colors"
                >
                  Ver todos los planes →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── DIVISOR ─── */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
          <div className="border-t border-white/10" />
        </div>

        {/* ─── FAQ: formato editorial, no tarjetas ─── */}
        <section className="py-24 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="md:w-2/5 md:sticky md:top-32 md:self-start">
              <p className="text-xs font-bold tracking-[0.35em] uppercase text-white/30 mb-6">Preguntas frecuentes</p>
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-8">
                Diseño web<br />y SEO local<br />en <span className="gradient-text">Burgos.</span>
              </h2>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 rounded-full text-sm font-bold hover:bg-white/5 transition-colors"
              >
                Hablar con DAROX
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="md:w-3/5 flex flex-col">
              {[
                {
                  q: "¿Cuánto cuesta una página web en Burgos?",
                  a: "En DAROX no inflamos precios. Nuestros sistemas parten desde 490€ (Start Pack, para marcas nuevas) y 980€ (Grow Pack, web corporativa de alta conversión con SEO local incluido). Precio cerrado por contrato. Sin sorpresas."
                },
                {
                  q: "¿Cuánto tiempo tarda en hacerse una web?",
                  a: "Entre 3 y 4 semanas para una web corporativa estándar. Los plazos se firman en contrato y son inamovibles. Sin proyectos que se alargan meses."
                },
                {
                  q: "¿El diseño web incluye SEO local para Burgos?",
                  a: "Sí. Desde el código hasta los textos, todo está pensado para dominar las búsquedas locales. Incluimos schema LocalBusiness, Core Web Vitals optimizados e integración con Google Business Profile."
                },
                {
                  q: "¿Trabajáis en toda la provincia?",
                  a: "Sí. Burgos capital, Aranda de Duero, Miranda de Ebro y cualquier punto de Castilla y León. Trabajamos 100% en remoto, sin perder un ápice de calidad."
                },
                {
                  q: "¿Podéis hacer que mi negocio aparezca en Google Maps?",
                  a: "Sí. Implementamos el schema LocalBusiness correcto y optimizamos tu Google Business Profile — la clave para aparecer en el pack local de Maps cuando alguien busca tu servicio en Burgos."
                },
              ].map((item, i) => (
                <details key={i} className="group border-b border-white/10 py-6">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                    <span className="text-base font-semibold text-white leading-snug">{item.q}</span>
                    <span className="flex-shrink-0 w-5 h-5 mt-0.5 text-white/30 transition-transform duration-300 group-open:rotate-45">
                      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-4 text-white/50 leading-relaxed text-sm font-light pr-8">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA FINAL: tipográfico, sin caja ─── */}
        <section className="py-24 px-6 sm:px-8 lg:px-16 max-w-7xl mx-auto border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
            <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.95] tracking-tighter max-w-2xl">
              Tu web debería<br />
              estar trabajando<br />
              <span className="gradient-text">ahora mismo.</span>
            </h2>
            <Link
              href="/contacto"
              className="flex-shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-base font-bold hover:bg-white/90 transition-colors"
            >
              Empezar ahora
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
