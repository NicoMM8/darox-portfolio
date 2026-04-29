// src/components/About.tsx

import Image from 'next/image'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from 'next/head';
import { Button } from './ui/Button';

const Divider = ({ className = '' }) => (
  <div
    className={`w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-full ${className}`}
  />
)

// Textos reemplazados dinámicamente en el JSX para la versión "Psicología + Sistema"

const phases = [
  "1. Análisis de Marca",
  "2. Construcción UI",
  "3. Despliegue Final"
];

const About: React.FC = () => {
  const [phase, setPhase] = useState(2); // Comienza en el diseño final estático
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      setPhase(0); // Reinicia a la fase 1 de dibujo al tocar/hover
      timer = setInterval(() => {
        setPhase((prev) => (prev + 1) % 3);
      }, 1500); // Mucho más ágil (1.5s por fase) para que resulte fluido
    } else {
      setPhase(2); // Vuelve suavemente a reposo al soltar
    }
    return () => clearInterval(timer);
  }, [isHovered]);
  return (
    <section
      id="about"
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
              "@id": "https://darox.es/#organization",
              "name": "DAROX",
              "alternateName": "DAROX Brandmaker",
              "url": "https://darox.es",
              "logo": "https://darox.es/images/logo_horizontal.webp",
              "description": "Agencia de branding y diseño web de alta conversión en Burgos.",
              "founder": {
                "@type": "Person",
                "name": "Darío Muñoz Miguel",
                "givenName": "Darío",
                "familyName": "Muñoz Miguel",
                "jobTitle": "CEO & Founder",
                "url": "https://www.linkedin.com/in/darox/",
                "sameAs": ["https://x.com/DaroxBrandMaker"]
              },
              "foundingDate": "2023",
              "slogan": "Tu cliente no recuerda lo que haces. Recuerda cómo le haces sentir."
            })
          }}
        />
      </Head>
      {/* Línea decorativa superior */}
      <Divider className="mb-8" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-12">
        {/* Animación de Logo Horizontal Orgánica y Profesional con Framer Motion */}
        <div className="md:w-1/2 flex justify-center items-center perspective-1000">
          <div
            className="relative rounded-[20px] overflow-hidden border border-white/5 w-full max-w-[420px] md:max-w-[500px] h-[400px] md:h-[500px] bg-[#030303] flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
          >

            {/* Fondo estelar muy elegante */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] z-0" />

            {/* Brillo suave de fondo que reacciona a la fase */}
            <motion.div
              animate={{
                opacity: phase === 2 ? 0.7 : phase === 1 ? 0.3 : 0.1,
                scale: phase === 2 ? 1 : 0.9,
              }}
              transition={{ duration: 1.2, ease: "circOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(30,58,138,0.3)_0%,transparent_60%)] blur-[50px] z-0"
            />

            {/* El Logo que interactúa por fases */}
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

              {/* Overlay de simulación en Fase 0 - mask interactiva */}
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
                {/* Sweep light en fase 2 (más suave gracias a Framer Motion) */}
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

            {/* Texto muy minimalista que indica la fase orgánicamente */}
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

        {/* Texto, métricas y botón */}
        <div className="md:w-1/2 flex flex-col gap-8 justify-center">
          {/* Tag destacado */}
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
            {/* Línea azul decorativa superior */}
            <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-900 to-transparent rounded-t-[10px] pointer-events-none" />
            {/* Bullet blanco */}
            <span className="w-2 h-2 rounded-full bg-white inline-block border border-white/50" />
            {/* Texto superior destacado */}
            <span className="font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] tag-destacado-text text-white/80">
              NUESTRA FILOSOFÍA
            </span>
          </div>

          {/* Título principal H2 */}
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in-up text-white leading-tight drop-shadow-md"
          >
            Tu cliente no recuerda lo que haces. <span className="gradient-text">Recuerda cómo le haces sentir.</span>
          </h2>

          {/* Párrafos descriptivos — texto GEO-citable para motores de IA generativa */}
          <div
            id="about-geo-text"
            className="flex flex-col gap-5 mb-8 max-w-prose animate-fade-in-up"
          >
            {/* P1: contexto/descripción — más discreto */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-normal">
              DAROX es una agencia de branding y diseño web con sede en Burgos, España. Nos especializamos en
              crear identidades de marca, páginas web de alta conversión y sistemas de automatización CRM
              para pymes, startups y profesionales independientes.
            </p>

            {/* P2: gancho — blockquote con acento azul */}
            <blockquote className="border-l-2 border-blue-500 pl-4 text-lg md:text-xl text-white font-normal leading-relaxed">
              Si tu web es idéntica a la de tu competencia y tu marca no transmite autoridad, terminarás
              peleando siempre por ser la opción más barata.
            </blockquote>

            {/* P3: propuesta de valor — palabras clave en blanco */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-normal">
              En DAROX vamos al grano. <strong className="text-white font-medium">No vendemos aire ni adornos innecesarios.</strong>{' '}
              Analizamos tu modelo de negocio para encontrar lo que realmente te hace diferente y diseñamos marcas y webs que{' '}
              <strong className="text-white font-medium">hablan claro, generan confianza y cierran ventas.</strong> Sin rodeos.
            </p>
          </div>

          {/* Botón destacado */}
          <Button
            href="/contacto"
            aria-label="Hablemos de tu proyecto"
            className="animate-fade-in-up mt-2 w-full sm:w-auto"
            variant="primary"
            showArrow
          >
            Hablemos de tu proyecto
          </Button>
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <Divider className="mt-8" />
    </section>
  )
}

export default About
