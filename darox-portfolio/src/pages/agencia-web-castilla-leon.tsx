import Head from 'next/head';
import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function AgenciaWebCastillaLeon() {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Agencia Web en Castilla y León | DAROX Brandmaker</title>
        <meta
          name="description"
          content="Transformación digital, automatización y diseño web para empresas en Castilla y León. Especialistas en posicionamiento SEO y sistemas de alta conversión."
        />
        <meta name="keywords" content="agencia web castilla y leon, diseño web pymes castilla leon, digitalizacion empresas cyl, darox" />
        <link rel="canonical" href="https://darox.es/agencia-web-castilla-leon" />
        
        {/* LocalBusiness Schema regional */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebDesignCompany",
                  "@id": "https://darox.es/agencia-web-castilla-leon/#organization",
                  "name": "DAROX Brandmaker - Agencia Digital",
                  "image": "https://darox.es/images/logo_horizontal.webp",
                  "url": "https://darox.es/agencia-web-castilla-leon",
                  "email": "contacto@darox.es",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Burgos",
                    "addressRegion": "Castilla y León",
                    "postalCode": "09001",
                    "addressCountry": "ES"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "42.3439",
                    "longitude": "-3.6969"
                  },
                  "priceRange": "490€ - 1950€",
                  "description": "Agencia digital especializada en diseño web corporativo de alta conversión, branding y sistemas CRM con IA para empresas en Castilla y León.",
                  "areaServed": ["Burgos", "Valladolid", "León", "Salamanca", "Palencia", "Zamora", "Soria", "Segovia", "Ávila"]
                },
                {
                  "@type": "WebPage",
                  "@id": "https://darox.es/agencia-web-castilla-leon/#webpage",
                  "url": "https://darox.es/agencia-web-castilla-leon",
                  "name": "Agencia Web en Castilla y León | DAROX Brandmaker",
                  "description": "Transformación digital, automatización y diseño web para empresas en Castilla y León.",
                  "isPartOf": { "@id": "https://darox.es/#website" },
                  "breadcrumb": { "@id": "https://darox.es/agencia-web-castilla-leon/#breadcrumb" },
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", "h2", "p"]
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://darox.es/agencia-web-castilla-leon/#breadcrumb",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://darox.es/" },
                    { "@type": "ListItem", "position": 2, "name": "Agencia Web Castilla y León", "item": "https://darox.es/agencia-web-castilla-leon" }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-black text-white">
        <section className="relative pt-40 pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto overflow-hidden text-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-[100%] blur-[120px] pointer-events-none" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <span className="inline-block tracking-widest text-purple-400 uppercase font-semibold text-sm mb-6">
              Servicios Digitales Regionales
            </span>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
              Tu <span className="gradient-text">Partner Digital</span> en Castilla y León
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Ayudamos a la industria, hostelería y despachos profesionales de la región a dar el salto tecnológico que exige el mercado actual. Diseño web, identidad corporativa y automatización con IA.
            </p>
            
            <Link 
              href="/contacto" 
              className="inline-flex px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full text-lg font-bold text-center hover:scale-105 transition-transform"
            >
              Hablemos de tu proyecto →
            </Link>
          </div>
        </section>

        <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white/5 border-y border-white/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">¿Por qué elegir una agencia de la región?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Proximidad y Entendimiento",
                  desc: "Conocemos el tejido empresarial de Castilla y León. Entendemos los retos de la España vaciada y las oportunidades de digitalización que existen."
                },
                {
                  title: "Tecnología Nacional",
                  desc: "No subcontratamos a países terceros. Tu web se diseña y codifica desde nuestras oficinas utilizando las últimas herramientas (React, Next.js, n8n)."
                },
                {
                  title: "Velocidad de Carga Absoluta",
                  desc: "Un visitante de Valladolid no tiene por qué esperar 5 segundos a que tu negocio cargue. Construimos los sistemas más rápidos que existen hoy."
                }
              ].map((b, i) => (
                <div key={i} className="bg-black/50 p-8 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 border border-purple-500/30">
                    <span className="text-purple-400 font-bold">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{b.title}</h3>
                  <p className="text-white/60 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
