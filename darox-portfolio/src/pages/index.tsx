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

export default function Home() {
  return (
    <>
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
    </>
  );
}

