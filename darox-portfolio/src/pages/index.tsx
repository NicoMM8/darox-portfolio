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
        <meta property="og:image" content="https://darox.es/images/logo_horizontal.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agencia de Branding, Web y Marketing Digital | DAROX" />
        <meta name="twitter:description" content="Agencia de branding y diseño web en España. Creamos marcas, webs y estrategias digitales." />
        <meta name="twitter:image" content="https://darox.es/images/logo_horizontal.png" />
      </Head>

      <Navbar />
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

