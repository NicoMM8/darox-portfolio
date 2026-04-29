import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useVelocity, useSpring } from "framer-motion";
import Questions from '../../components/Questions';
import LogoCarousel from '../../components/LogoCarousel';

// 1. Efecto Ruido de Película
const NoiseOverlay = () => (
  <div className="fixed inset-0 w-full h-full pointer-events-none z-[100] mix-blend-overlay opacity-30">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" /></filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

// 2. Cursor Blend Diference (Look Agencia Awwwards)
const BlendCursor = ({ isOverNavbar }: { isOverNavbar: boolean }) => {
    const { scrollYProgress } = useScroll();
    const cursorScale = useTransform(scrollYProgress, [0, 0.15, 0.7, 0.85, 0.95, 1], [1, 0.6, 0.2, 1, 1, 0.2]);
    
    // Usamos motion values para evitar conflictos entre manual transform y framer-motion scale
    const { useMotionValue } = require("framer-motion");
    const mouseX = useMotionValue(-200);
    const mouseY = useMotionValue(-200);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 100);
            mouseY.set(e.clientY - 100);
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [mouseX, mouseY]);

    return (
        <motion.div 
            style={{ 
                x: mouseX, 
                y: mouseY, 
                scale: cursorScale,
                opacity: isOverNavbar ? 0 : 1 
            }}
            className="fixed top-0 left-0 w-[200px] h-[200px] bg-white rounded-full pointer-events-none z-[90] mix-blend-difference transition-opacity duration-300 hidden lg:block"
        />
    );
};

// 3. Botón Magnético que sigue al ratón
const MagneticHover = ({ children }: { children: React.ReactNode }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 }); // Intensidad del imán
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="relative cursor-pointer inline-block"
        >
            {children}
        </motion.div>
    );
};

// 4. Texto Enmascarado Stagger (Animación premium de entrada letra a letra desfasada por línea)
const MaskedTitle = () => {
    const line1 = "DISEÑAMOS";
    const line2 = "IDENTIDADES";
    return (
        <h1 className="text-6xl md:text-[8rem] lg:text-[10rem] font-black tracking-tighter text-white leading-[0.8] uppercase flex flex-col items-center">
            <div className="overflow-hidden pt-4 -mt-4 pb-2">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.2 }}>
                    {line1}
                </motion.div>
            </div>
            <div className="overflow-hidden mt-2 md:mt-4">
                <motion.div initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.4 }} className="text-indigo-500">
                    {line2}
                </motion.div>
            </div>
        </h1>
    );
};

export default function BrandingIdentidad() {
    const { scrollY } = useScroll();
    const [isOverNavbar, setIsOverNavbar] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setIsOverNavbar(e.clientY < 80);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  

  // Skew basado en velocidad (Si el usuario escrollea rápido, la sección se inclina)
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocitySkew = useTransform(smoothVelocity, [-1000, 1000], [3, -3]); // Inclinación en grados

  return (
    <div className={`bg-[#020202] min-h-screen font-sans selection:bg-indigo-500/50 overflow-hidden ${isOverNavbar ? '' : 'cursor-none'}`}>
      {/* El atributo cursor-none fuerza al usuario a usar nuestro cursor blend en escritorio, salvo en Navbar */}
      <BlendCursor isOverNavbar={isOverNavbar} />
      <NoiseOverlay />
      
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Branding Estratégico & Identidad Visual en Burgos | DAROX</title>
        <meta name="description" content="Agencia de branding en Burgos. Construimos identidades visuales estratégicas para negocios B2B. Naming, paletas HSL, vectores y manual de marca cerrado en 3 semanas." />
        <link rel="canonical" href="https://darox.es/servicios/branding-identidad" />
        <meta name="keywords" content="branding estratégico burgos, identidad visual empresas, diseño de logo profesional, agencia branding españa, manual de marca corporativo" />
        <meta property="og:title" content="Branding Estratégico & Identidad Visual | DAROX" />
        <meta property="og:description" content="Construimos bases visuales corporativas para proyectos de alto rendimiento. Diseño de marca, logotipo y manual corporativo desde 490€." />
        <meta property="og:image" content="https://darox.es/images/fondo_hero.webp" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="DAROX — Branding Estratégico e Identidad Visual" />
        <meta property="og:url" content="https://darox.es/servicios/branding-identidad" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DaroxBrandMaker" />
        <meta name="twitter:creator" content="@DaroxBrandMaker" />
        <meta name="twitter:title" content="Branding Estratégico & Identidad Visual | DAROX" />
        <meta name="twitter:description" content="Construimos bases visuales corporativas para proyectos de alto rendimiento. Diseño de marca, logotipo y manual corporativo desde 490€." />
        <meta name="twitter:image" content="https://darox.es/images/fondo_hero.webp" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": "https://darox.es/servicios/branding-identidad/#service",
              "name": "Branding Estratégico e Identidad Visual",
              "provider": { "@id": "https://darox.es/#organization" },
              "areaServed": ["Burgos", "Castilla y León", "España"],
              "offers": {
                "@type": "Offer",
                "priceCurrency": "EUR",
                "price": "490"
              }
            },
            {
              "@type": "WebPage",
              "@id": "https://darox.es/servicios/branding-identidad/#webpage",
              "url": "https://darox.es/servicios/branding-identidad",
              "name": "Branding Estratégico & Visual | DAROX",
              "description": "Diseño de identidad estructurado.",
              "dateModified": new Date().toISOString().split('T')[0],
              "isPartOf": { "@id": "https://darox.es/#website" },
              "breadcrumb": { "@id": "https://darox.es/servicios/branding-identidad/#breadcrumb" },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "h2", "h3"]
              }
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://darox.es/servicios/branding-identidad/#breadcrumb",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://darox.es/" },
                { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://darox.es/#servicios" },
                { "@type": "ListItem", "position": 3, "name": "Branding", "item": "https://darox.es/servicios/branding-identidad" }
              ]
            }
          ]
        })}} />
      </Head>

      <Navbar />

      {/* HERO*/}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-20 px-4">
        {/* Glow Radial que respira */}
        <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none z-0" 
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8, duration: 1 }}
                className="mb-12 font-mono text-zinc-500 tracking-[0.3em] uppercase text-xs border border-white/10 px-6 py-2 rounded-full flex items-center gap-4"
            >
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" /> LEVEL_01
            </motion.div>

            <MaskedTitle />
            
            <div className="overflow-hidden mt-6 md:mt-10">
                <motion.h2 
                    initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                    className="text-3xl md:text-[5rem] lg:text-[6rem] font-serif italic text-zinc-400 leading-none"
                >
                    No más <span className="line-through decoration-white/30 decoration-[4px] whitespace-nowrap">diseño sin propósito.</span>
                </motion.h2>
            </div>

            <motion.p 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.2 }}
                className="mt-16 text-xl md:text-3xl text-zinc-300 font-light max-w-3xl text-center leading-relaxed mix-blend-difference"
            >
                Construimos bases visuales corporativas para proyectos de alto rendimiento. Todo en 3 semanas y listo para impactar.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.5 }} className="mt-20">
                {/* BOTÓN MAGNÉTICO */}
                <MagneticHover>
                    <Link href="/contacto" className="relative flex items-center justify-center w-40 h-40 rounded-full bg-white text-black hover:bg-zinc-200 hover:scale-110 transition-all duration-300 pointer-events-auto">
                        <span className="font-black uppercase tracking-widest text-sm text-center leading-tight">
                            Iniciar<br/>Marca
                        </span>
                    </Link>
                </MagneticHover>
            </motion.div>
        </div>
      </section>

      <LogoCarousel />

      {/* SECCIÓN KINÉTICA CON VELOCITY SKEW (Se deforma al scrollear rápido) */}
      <motion.section 
        style={{ skewY: velocitySkew }}
        className="py-32 px-4 bg-zinc-900 origin-center"
      >
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-12 group">
            
            {/* Tarjeta Split 1 con Zoom Parallax Interno */}
            <div className="flex-1 overflow-hidden relative rounded-[40px] bg-[#000] border border-white/5 h-[500px] flex items-center justify-center group-hover:blur-sm hover:!blur-none transition-all duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,0,0,0.1),transparent)] pointer-events-none" />
                <div className="relative z-10 text-center p-8">
                    <span className="text-red-600 font-mono text-sm tracking-widest uppercase block mb-4">Error Crítico</span>
                    <h3 className="text-5xl lg:text-7xl font-black text-zinc-500 uppercase tracking-tighter leading-none mb-8">
                        Marcas<br/>de Papel
                    </h3>
                    <p className="text-zinc-500 max-w-sm mx-auto">Logos de 5 minutos hechos sin estrategia. Se pixelan, no transmiten autoridad y mueren al imprimirse en un rótulo o verse en un móvil.</p>
                </div>
            </div>

            {/* Tarjeta Split 2 DAROX */}
            <div className="flex-1 overflow-hidden relative rounded-[40px] bg-indigo-950 border border-indigo-500/20 h-[500px] flex items-center justify-center group-hover:blur-sm hover:!blur-none transition-all duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.2),transparent)] pointer-events-none" />
                <div className="relative z-10 text-center p-8">
                    <span className="text-indigo-400 font-mono text-sm tracking-widest uppercase block mb-4 border border-indigo-500 px-4 py-1 rounded-full inline-block">El Start Pack</span>
                    <h3 className="text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                        Sistemas<br/>DAROX
                    </h3>
                    <p className="text-white max-w-sm mx-auto">Diseño milimétrico. Geometría perfecta, colores basados en psicología de ventas y un manual corporativo cerrado para que tu marca sea intocable.</p>
                </div>
            </div>

        </div>
      </motion.section>

      {/* PROCESO STICKY EDITORIAL CON CLIPPING (Improvisación extrema) */}
      <section className="relative py-40 bg-[#020202] px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 relative">
            
            {/* Columna Anclada (Sticky) */}
            <div className="w-full lg:w-1/3 relative z-10 pointer-events-none mix-blend-difference">
                <div className="lg:sticky lg:top-1/3 text-white">
                     <h2 className="text-5xl md:text-[5rem] lg:text-[7rem] font-black uppercase text-white leading-[0.8] tracking-tighter mix-blend-difference">
                        El<br/>
                        <span className="text-zinc-500 font-serif italic lowercase tracking-normal text-6xl md:text-[6rem] lg:text-[8rem]">Método.</span>
                     </h2>
                </div>
            </div>

            {/* Columna Interactiva de Scrolleos */}
            <div className="w-full lg:w-2/3 flex flex-col space-y-40">
                
                {/* Paso interactivo */}
                <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true, margin:"-20%"}} transition={{duration:0.8}} className="group relative">
                     <div className="text-[10rem] md:text-[15rem] font-serif italic text-zinc-900 leading-[0.7] mb-8 group-hover:text-transparent group-hover:text-stroke-1 transition-colors duration-700" style={{WebkitTextStroke: '2px rgba(255,255,255,0.1)'}}>
                        1
                     </div>
                     <h3 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-8">La Autopsia</h3>
                     <p className="text-2xl text-zinc-400 font-light leading-relaxed">Arrancamos con una auditoría brutal. Analizamos tu mercado, destripamos a tu competencia y definimos cómo debe verse tu empresa para posicionarse por encima de ellos.</p>
                </motion.div>

                <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true, margin:"-20%"}} transition={{duration:0.8}} className="group relative">
                     <div className="text-[10rem] md:text-[15rem] font-serif italic text-zinc-900 leading-[0.7] mb-8 group-hover:text-transparent transition-colors duration-700" style={{WebkitTextStroke: '2px rgba(255,255,255,0.1)'}}>
                        2
                     </div>
                     <h3 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-8">Arquitectura Visual</h3>
                     <p className="text-2xl text-zinc-400 font-light leading-relaxed">No hacemos dibujitos a lápiz. Vamos directos al software profesional para construir tu identidad: geometría perfecta, tipografías de pago y paletas de color diseñadas para pantallas y formatos físicos.</p>
                </motion.div>

                <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true, margin:"-20%"}} transition={{duration:0.8}} className="group relative">
                     <div className="text-[10rem] md:text-[15rem] font-serif italic text-zinc-900 leading-[0.7] mb-8 group-hover:text-transparent transition-colors duration-700" style={{WebkitTextStroke: '2px rgba(255,255,255,0.1)'}}>
                        3
                     </div>
                     <h3 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tight mb-8">Lanzamiento del Sistema</h3>
                     <p className="text-2xl text-zinc-400 font-light leading-relaxed">En 2 o 3 semanas está cerrado. Te entregamos tu manual de marca, los archivos vectoriales originales y el material para redes sociales. Un paquete cerrado, listo para salir a dominar tu sector.</p>
                </motion.div>
                
            </div>
        </div>
      </section>

      {/* FOOTER CTA MAGNÉTICO/FINTECH */}
      <section className="relative overflow-hidden bg-white text-black px-4 py-40">
         <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
             
             <h2 className="text-5xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.8] mb-12 text-center mix-blend-difference text-white">
                 DOMINA TU <br/>
                 <span className="font-serif italic lowercase tracking-normal">mercado.</span>
             </h2>

             <MagneticHover>
                 <Link href="/contacto" className="inline-flex items-center justify-center w-64 h-64 rounded-full bg-black text-white text-xl md:text-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform duration-500 shadow-[0_0_100px_rgba(0,0,0,0.5)] p-6 text-center leading-tight">
                     490€ /<br/>Empezar<br/>el proyecto
                 </Link>
             </MagneticHover>
         </div>
      </section>
      
      <div className="bg-[#020202] text-white">
        <Questions />
      </div>

    </div>
  );
}
