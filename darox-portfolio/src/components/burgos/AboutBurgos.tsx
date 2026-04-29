// src/components/burgos/AboutBurgos.tsx

import Image from 'next/image'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from 'next/head';
import { Button } from '../ui/Button'; // Fixed import path

const Divider = ({ className = '' }) => (
  <div
    className={`w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-full ${className}`}
  />
)

const phases = [
  "1. Análisis de Marca",
  "2. Construcción UI",
  "3. Despliegue Final"
];

const AboutBurgos: React.FC = () => {
  const [phase, setPhase] = useState(2);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      setPhase(0);
      timer = setInterval(() => {
        setPhase((prev) => (prev + 1) % 3);
      }, 1500);
    } else {
      setPhase(2);
    }
    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <section
      id="about-burgos"
      aria-labelledby="about-title"
      className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://darox.es/agencia-web-burgos/#organization",
              "name": "DAROX Burgos",
              "alternateName": "DAROX Brandmaker Burgos",
              "url": "https://darox.es/agencia-web-burgos",
              "logo": "https://darox.es/images/logo_horizontal.webp",
              "description": "Agencia de branding y diseño web de alta conversión para la industria de Burgos.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Burgos",
                "addressRegion": "Castilla y León",
                "postalCode": "09001",
                "addressCountry": "ES"
              }
            })
          }}
        />
      </Head>
      
      <Divider className="mb-8" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        {/* Animación de Logo Horizontal */}
        <div className="md:w-1/2 flex justify-center items-center perspective-1000">
          <div 
            className="relative rounded-[20px] overflow-hidden border border-white/5 w-full max-w-[420px] md:max-w-[500px] h-[400px] md:h-[500px] bg-[#030303] flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] z-0" />

            <motion.div 
              animate={{
                opacity: phase === 2 ? 0.7 : phase === 1 ? 0.3 : 0.1,
                scale: phase === 2 ? 1 : 0.9,
              }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.3)_0%,transparent_60%)] blur-[50px] z-0" 
            />
            
            <div className="relative z-10 w-4/5 max-w-[320px]">
              <motion.div
                animate={{
                  opacity: phase === 0 ? 0.15 : phase === 1 ? 0.8 : 1,
                  filter: phase === 0 ? 'blur(3px) grayscale(100%)' : phase === 1 ? 'blur(0px) grayscale(40%)' : 'blur(0px) grayscale(0%) drop-shadow(0 0 20px rgba(255,255,255,0.15))',
                  scale: phase === 0 ? 0.95 : phase === 1 ? 1 : 1.02,
                }}
                transition={{ duration: 0.8, ease: "circOut" }}
              >
                 <Image
                    src="/images/logo_horizontal.webp"
                    alt="Logo DAROX Horizontal"
                    width={600}
                    height={200}
                    className="w-full h-auto object-contain"
                    priority
                  />
              </motion.div>
              
              <AnimatePresence>
                {phase === 0 && (
                  <motion.div
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="absolute inset-0 border-[1px] border-white/20 rounded-lg pointer-events-none"
                  />
                )}
                {phase === 2 && (
                  <motion.div
                    initial={{ left: '-100%' }}
                    animate={{ left: '200%' }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 }}
                    className="absolute top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent mix-blend-overlay rotate-12 skew-x-12 z-20 pointer-events-none"
                  />
                )}
              </AnimatePresence>
            </div>
            
            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30">
              <AnimatePresence mode="wait">
                {isHovered && (
                  <motion.span
                    key={phase}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-[11px] uppercase font-semibold text-white/60 tracking-[0.2em]"
                  >
                    {phases[phase]}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Texto hiperlocalizado Burgos */}
        <div className="md:w-1/2 flex flex-col gap-8 justify-center">
          <div
            className="
              relative inline-flex w-fit items-center gap-3 px-5 py-2 rounded-[10px]
              border border-white/10
              bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)]
              backdrop-blur-[2.5px]
              mb-2 animate-fade-in-up
              shadow
              overflow-hidden
              tag-destacado
            "
          >
            <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-[10px] pointer-events-none" />
            <span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
            <span className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] tag-destacado-text text-white/80">
              TEJIDO EMPRESARIAL LOCAL
            </span>
          </div>

          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-up text-white leading-tight drop-shadow-md"
          >
            Entendemos la industria. <span className="gradient-text">Conocemos Burgos.</span>
          </h2>

          <div
            id="about-geo-text"
            className="flex flex-col gap-5 mb-8 max-w-prose animate-fade-in-up"
          >
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-normal">
              A diferencia de las agencias de Madrid o Barcelona que te atienden por Zoom, nosotros estamos aquí y entendemos cómo funcionan las empresas de la provincia. Desde las fábricas de Villalonquéjar hasta los negocios del centro, sabemos que el salto al digital cuesta.
            </p>

            <blockquote className="border-l-2 border-fuchsia-500 pl-4 text-lg md:text-xl text-white font-normal leading-relaxed">
              Si tu empresa lleva años funcionando a base de teléfono y visitas, tu marca no puede ser invisible. Tiene que proyectar autoridad para vender por ti.
            </blockquote>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-normal">
              En DAROX sumamos la cercanía de trabajar codo con codo con el nivel de estrategia de branding que exigen hoy las grandes corporaciones. Hacemos que tu negocio <strong className="text-white font-medium">proyecte liderazgo en internet</strong> para que tus clientes confíen en ti a la primera.
            </p>
          </div>

          <Button
            href="/contacto"
            aria-label="Concertar reunión"
            className="animate-fade-in-up mt-2 w-full sm:w-auto"
            variant="primary"
            showArrow
          >
            Agendar un café en Burgos
          </Button>
        </div>
      </div>

      <Divider className="mt-8" />
    </section>
  )
}

export default AboutBurgos
