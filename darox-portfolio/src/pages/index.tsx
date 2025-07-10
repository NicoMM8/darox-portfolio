import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoCarousel from '../components/LogoCarousel';
import About from '../components/About';
import Results from '../components/Resultados';
import Process from '../components/Proceso';
import Features from '../components/Features';
import Benefits from '../components/Beneficios';
import Stats from '../components/Estadisticas';
import Portfolio from '../components/Portfolio';
import Services from '../components/Servicios';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoCarousel />
      <About />
      <Results />
      <Process />
      <Features />
      <Benefits />
      <Stats />
      <Portfolio />
      <Services />
    </>
  );
}

