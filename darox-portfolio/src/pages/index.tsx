import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ResultsBlock from '../components/ResultsBlock';
import LogoCarousel from '../components/LogoCarousel';
import About from '../components/About';
import Results from '../components/Resultados';
import Process from '../components/Proceso';
import Features from '../components/Features';
import Benefits from '../components/Beneficios';
import Services from '../components/Servicios';
import TestimonialsBlock from '../components/TestimonialsBlock';
import Questions from '../components/Questions';

export default function Home() {
  return (
    <>
      <Head>
        <title>Agencia de Branding, Web y Marketing Digital | DAROX</title>
        <meta
          name="description"
          content="Agencia de branding y diseño web en España. Creamos marcas, su branding y su web. Automatización, IA y marketing digital."
        />
        <meta name="keywords" content="agencia branding españa, diseño web empresas, automatización, marketing, branding startup, darox" />
        <link rel="canonical" href="https://darox.es/" />

        {/* Open Graph */}
        <meta property="og:title" content="Agencia de Branding, Web y Marketing Digital | DAROX" />
        <meta property="og:description" content="Agencia de branding y diseño web en España. Creamos marcas, webs y estrategias digitales." />
        <meta property="og:url" content="https://darox.es/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:image" content="https://darox.es/images/logo_horizontal.webp" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agencia de Branding, Web y Marketing Digital | DAROX" />
        <meta name="twitter:description" content="Agencia de branding y diseño web en España. Creamos marcas, webs y estrategias digitales." />
        <meta name="twitter:image" content="https://darox.es/images/logo_horizontal.webp" />

        {/* LocalBusiness Schema - Entity Disambiguation */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "DAROX Brandmaker",
              "image": "https://darox.es/images/logo_horizontal.webp",
              "url": "https://darox.es",
              "email": "daroxbrandmaker@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Burgos",
                "addressRegion": "Castilla y León",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "42.3439",
                "longitude": "-3.6969"
              },
              "priceRange": "490€ - 1950€",
              "description": "Agencia de branding, diseño web enfocado a conversión y sistemas de automatización CRM para empresas. Ofrecemos diseño UI/UX nivel startup en Burgos y toda España.",
              "sameAs": [
                "https://www.instagram.com/darox.es",
                "https://twitter.com/darox_es"
              ]
            })
          }}
        />
      </Head>

      <Navbar />
      {/* Fondo global de video animado para toda la landing */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover object-center z-[-1] opacity-80 pointer-events-none"
      >
        <source src="/images/fondo2.mp4" type="video/mp4" />
      </video>
      <Hero />
      <LogoCarousel />
      <About />
      <ResultsBlock />
      <Results />
      <Process />
      <Features />
      <Benefits />
      <Services />
      <TestimonialsBlock />
      <Questions />
    </>
  );
}

