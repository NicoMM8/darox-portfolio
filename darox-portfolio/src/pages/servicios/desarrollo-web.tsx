import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import Questions from '../../components/Questions';
import LogoCarousel from '../../components/LogoCarousel';
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useAnimationFrame, useVelocity } from "framer-motion";


// SVG Noise Filter para matar el "look plano" de IA
const NoiseOverlay = () => (
  <div className="absolute inset-0 w-full h-full pointer-events-none z-[50] mix-blend-overlay opacity-30">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="6.5" numOctaves="3" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

// Spotlight Mouse Tracker Effect para las tarjetas
const SpotlightCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => { setIsFocused(true); setOpacity(1); };
  const handleBlur = () => { setIsFocused(false); setOpacity(0); };
  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Glow interactivo oculto en móvil (solo funciona bien con ratón físico) */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10 hidden md:block"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(37,99,235,0.15), transparent 40%)`,
        }}
      />
      {/* Glow completo estático para móviles (brilla unifórmemente "a todo") */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_80%)] opacity-0 md:hidden transition duration-300" style={{ opacity: isFocused ? 1 : 0 }} />

      {children}
    </div>
  );
};



// 1. EL CÓDIGO MAESTRO OCULTO (Flashlight Reveal Tool)
const codeSnippet = `// DAROX CORE ENGINE
export default function GenerateRevenue() {
  const { traffic } = useAnalysis();
  const conversionRate = useOptimizer({ target: 'max' });
  const uiState = useAesthetics('awwwards_level');
  
  while (competitors.areSleeping()) {
    facturar({ aggressive: true, scale: 'global' });
  }
  
  return (
     <Domination mode="absolute">
         <Sales funnel="optimized" />
     </Domination>
  );
}`;

const FlashlightCode = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!divRef.current) return;
      const rect = divRef.current.getBoundingClientRect();
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
  
    return (
      <div 
          ref={divRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full max-w-5xl mx-auto my-32 h-[350px] md:h-[450px] border border-white/5 bg-[#050505] rounded-3xl overflow-hidden cursor-crosshair shadow-[0_0_100px_rgba(0,0,0,0.5)]"
      >
         <pre className="absolute inset-0 p-8 md:p-16 text-[10px] sm:text-xs md:text-lg font-mono text-white/[0.03] whitespace-pre-wrap select-none">
          {codeSnippet}
         </pre>
         
         <div 
           className="absolute inset-0 p-8 md:p-16 text-[10px] sm:text-xs md:text-lg font-mono text-blue-400 whitespace-pre-wrap pointer-events-none transition-opacity duration-300 hidden md:block drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]"
           style={{
             opacity: isHovered ? 1 : 0,
             maskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`,
             WebkitMaskImage: `radial-gradient(300px circle at ${position.x}px ${position.y}px, black, transparent)`
           }}
         >
           {codeSnippet}
         </div>
         
         <div className="absolute inset-0 p-8 md:p-16 text-[10px] sm:text-xs md:text-lg font-mono text-blue-400 whitespace-pre-wrap pointer-events-none opacity-100 md:hidden drop-shadow-[0_0_15px_rgba(37,99,235,0.8)]" 
             style={{ maskImage: 'linear-gradient(to bottom, black 10%, transparent 80%)', WebkitMaskImage: 'linear-gradient(to bottom, black 10%, transparent 80%)' }}
          >
           {codeSnippet}
         </div>

         <div className="absolute top-6 right-6 flex items-center gap-2 z-20 opacity-50">
             <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse hidden md:block" />
             <span className="text-[10px] md:text-xs font-mono text-zinc-400 tracking-widest uppercase hidden md:inline-block">Inspección Activa</span>
         </div>
      </div>
    )
}

// 2. MAGNETIC PILLS (Físicas de arrastre tipo muelle)
const MagneticPills = () => {
    const pills = [
        "ARCH SILO SEO", "FAST LOAD", "NEURO-SALES", "NEXT.JS ENGINE", 
        "AEO OPTIMIZED", "GSAP MOTION", "HEADLESS CMS", "CONVERSION FOCUS"
    ];
    
    return (
        <div className="w-full max-w-4xl mx-auto my-20 flex flex-wrap justify-center gap-4 relative z-10 px-4">
            {pills.map((pill, i) => (
                <motion.div 
                    key={i}
                    whileHover={{ scale: 1.15, y: -5, backgroundColor: "rgba(37,99,235,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    drag
                    className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 font-mono text-xs md:text-sm tracking-widest cursor-grab active:cursor-grabbing transition-colors duration-300 shadow-[0_4px_20px_rgba(37,99,235,0.1)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.4)] z-[100]"
                >
                    {pill}
                </motion.div>
            ))}
        </div>
    )
}

// 3. CINEMATIC HYBRID (Súper Nova + Sticky Scroll Horizontal)
const CinematicHybrid = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start start", "end end"]
    });
  
    // Escala violenta del 0 al 20% del trayecto
    const dotScale = useTransform(scrollYProgress, [0, 0.2], [1, 250]);
    // Scroll horizontal del texto (100vw a -100vw)
    const textX = useTransform(scrollYProgress, [0.25, 0.8], ["100vw", "-120vw"]);
    // Brillo neón progresivo
    const glowOpacity = useTransform(scrollYProgress, [0.4, 0.7], [0.1, 1]);
  
    return (
      <div ref={container} className="h-[300vh] relative bg-[#010101] border-t border-white/5">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-transparent perspective-1000">
          
          {/* El punto expansivo (Super-Nova) */}
          <motion.div 
              style={{ scale: dotScale }} 
              className="absolute z-10 w-8 h-8 bg-zinc-100 rounded-full"
          />
  
          {/* Contenido revelado en horizontal (Sticky Scan) */}
          <motion.div 
             style={{ x: textX }} 
             className="absolute z-20 flex items-center h-full left-0"
          >
             <div className="text-[4rem] sm:text-[8rem] md:text-[14rem] font-black uppercase tracking-tighter flex items-center gap-8 md:gap-24 whitespace-nowrap px-[10vw]">
                <span className="text-zinc-900 drop-shadow-2xl">EL DISEÑO ESTÁ</span>
                <span className="italic font-serif text-zinc-900 border-4 border-zinc-900 rounded-[5rem] px-8 md:px-24">MUERTO.</span>
                <motion.span style={{ opacity: glowOpacity }} className="text-white bg-blue-600 px-8 md:px-24 rounded-full drop-shadow-[0_0_80px_rgba(37,99,235,1)]">
                    SISTEMAS VIVOS.
                </motion.span>
             </div>
          </motion.div>
        </div>
      </div>
    )
}

// 4. EL COSTE DE LA MEDIOCRIDAD (Neuro-sales Content)
const CostOfMediocrity = () => {
    return (
        <section className="relative w-full py-32 px-4 bg-[#010101] overflow-hidden">
           {/* Efecto de luz roja de advertencia en el fondo */}
           <div className="absolute top-0 left-1/4 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.05),transparent_70%)] pointer-events-none" />
           
           <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-16 items-center relative z-10">
               <div className="w-full xl:w-1/2">
                   <div className="mb-4 font-mono text-red-500 text-sm tracking-[0.3em] uppercase flex items-center gap-4">
                        <div className="w-12 h-px bg-red-500/50" />
                        Diagnóstico Crítico
                   </div>
                   <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                       El coste oculto <br/> <span className="text-red-500 font-serif italic lowercase tracking-tight">de la mediocridad.</span>
                   </h2>
                   <div className="text-lg md:text-xl text-zinc-400 font-light space-y-6">
                       <p>Una web barata de 300€ no es un ahorro. Es una hemorragia financiera mensual. Si tu web tarda más de 3 segundos en cargar, <strong className="text-red-400 drop-shadow-[0_0_10px_rgba(239,68,68,0.4)]">estás perdiendo al 53% de tus clientes potenciales</strong> antes de que lean tu primera frase.</p>
                       <p>No programamos por hobby y detestamos las plantillas. Programamos ecosistemas <strong>AEO/SEO dominantes</strong> diseñados de cero con un solo propósito: <span className="text-white font-medium">multiplicar tu tasa de conversión y secar a tu competencia local.</span></p>
                   </div>
               </div>

               <div className="w-full xl:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <SpotlightCard className="bg-[#050505] border border-red-500/10 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                       <span className="text-5xl font-black text-red-500 mb-2">-53%</span>
                       <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Caída de Ventas</span>
                   </SpotlightCard>
                   <SpotlightCard className="bg-[#050505] border border-blue-500/10 p-8 rounded-2xl flex flex-col justify-center items-center text-center">
                       <span className="text-5xl font-black text-blue-500 mb-2">{'<'}0.8s</span>
                       <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Load Time (DAROX)</span>
                   </SpotlightCard>
                   <SpotlightCard className="bg-[#050505] border border-white/5 p-8 rounded-2xl flex flex-col justify-center items-center text-center sm:col-span-2">
                       <span className="text-6xl font-black text-white mb-2">100 / 100</span>
                       <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Google Lighthouse Score</span>
                   </SpotlightCard>
               </div>
           </div>
        </section>
    );
}

// ================= MOBILE EXPERIENCES =================

const MobileDynamicIsland = () => {
    const { scrollYProgress } = useScroll();
    
    // Width expands based on scroll
    const islandWidth = useTransform(scrollYProgress, [0, 0.5, 1], ["120px", "200px", "80px"]);
    const islandColor = useTransform(scrollYProgress, [0, 0.5, 1], ["#050505", "#1e3a8a", "#050505"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.6, 0.7], [0, 0, 1, 1, 0]);

    return (
        <div className="fixed top-6 left-0 w-full flex justify-center z-[100] md:hidden pointer-events-none">
            <motion.div 
                style={{ width: islandWidth, backgroundColor: islandColor }}
                className="h-8 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10 transition-colors duration-300"
            >
                <motion.span style={{ opacity: textOpacity }} className="text-[10px] font-mono font-bold text-white tracking-widest whitespace-nowrap">
                    OPT. ACTIVA
                </motion.span>
            </motion.div>
        </div>
    )
}

const TinderCard = ({ frontCard, text, subtext, zIndex, drag }: { frontCard?: boolean, text: string, subtext: string, zIndex: number, drag?: boolean | "x" | "y" }) => {
    const [exitX, setExitX] = useState(0);
    const motionRef = useRef(null);

    return (
        <motion.div
            ref={motionRef}
            drag={drag}
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragEnd={(event, info) => {
                if (info.offset.x > 80) setExitX(300);
                if (info.offset.x < -80) setExitX(-300);
            }}
            animate={exitX !== 0 ? { x: exitX, opacity: 0, scale: 0.5 } : { x: 0 }}
            className={`absolute inset-0 w-full rounded-2xl p-6 flex flex-col justify-center items-center text-center shadow-xl ${frontCard ? 'bg-zinc-950/90 border border-white/10 cursor-grab active:cursor-grabbing backdrop-blur-md' : 'bg-[#010101] border border-blue-500/50 shadow-[0_0_50px_rgba(37,99,235,0.3)]'}`}
            style={{ zIndex }}
        >
            <h4 className="text-2xl font-black text-white mb-2">{text}</h4>
            <p className="text-sm font-mono text-zinc-400">{subtext}</p>
            {frontCard && (
                <div className="absolute bottom-6 flex gap-4 animate-pulse text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
                    <span>&larr; Desliza para descartar &rarr;</span>
                </div>
            )}
        </motion.div>
    )
}

const MobileTinderCards = () => {
    return (
        <section className="w-full py-24 px-4 md:hidden relative overflow-hidden bg-[#030303] border-t border-white/5 flex flex-col items-center">
            <div className="mb-12 font-mono text-blue-500 text-sm tracking-[0.3em] uppercase flex items-center gap-4">
                 <div className="w-12 h-px bg-blue-500/50" />
                 Filtro de Calidad
            </div>
            <div className="relative w-full max-w-[320px] h-[350px]">
                {/* Carta DAROX de fondo (la que se queda) */}
                <TinderCard zIndex={0} text="Ingeniería Web DAROX" subtext="Escalabilidad, velocidad y cierre de ventas impecable." frontCard={false} />
                
                {/* Cartas a swipear */}
                <TinderCard drag="x" zIndex={10} text="La Web de 300€" subtext="El primo de tu amigo te la deja barata." frontCard={true} />
                <TinderCard drag="x" zIndex={20} text="Agencia Clásica" subtext="6 meses de espera. 4000€ facturados." frontCard={true} />
                <TinderCard drag="x" zIndex={30} text="Plantillas Lentas" subtext="Tu cliente se fue al ver que no cargaba." frontCard={true} />
            </div>
            <p className="mt-12 text-xs font-mono text-zinc-500 text-center uppercase tracking-widest">Deshacerse de la basura es el primer paso.</p>
        </section>
    )
}

const BiometricUnlock = () => {
    const [progress, setProgress] = useState(0);
    const [unlocked, setUnlocked] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startHold = () => {
        if (unlocked) return;
        intervalRef.current = setInterval(() => {
            setProgress(p => {
                if (p >= 100) {
                    clearInterval(intervalRef.current!);
                    setUnlocked(true);
                    return 100;
                }
                return p + 5;
            });
        }, 50);
    };

    const endHold = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (!unlocked) setProgress(0);
    };

    return (
        <section className="w-full py-32 px-4 md:hidden flex flex-col items-center justify-center bg-black relative overflow-hidden">
            <h3 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-12 text-center">Protocolo de Seguridad</h3>

            <motion.div 
                onTouchStart={startHold}
                onTouchEnd={endHold}
                onMouseDown={startHold}
                onMouseUp={endHold}
                onMouseLeave={endHold}
                whileTap={{ scale: 0.95 }}
                className={`w-32 h-32 rounded-full flex items-center justify-center relative cursor-pointer select-none transition-colors duration-500 ${unlocked ? 'shadow-[0_0_50px_rgba(34,197,94,0.3)]' : ''}`}
            >
                {/* SVG Fingerprint placeholder */}
                <div className={`transition-all ${unlocked ? 'text-green-500' : 'text-blue-500/80'} drop-shadow-[0_0_10px_currentColor]`}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2a10 10 0 0 0-10 10c0 5 4 8 9 11v-1c-5-2-8-5.5-8-10A9 9 0 0 1 12 3a9 9 0 0 1 9 9c0 4.5-3 8-8 10v1c5-3 9-6 9-11A10 10 0 0 0 12 2z"/>
                        <path d="M12 6a6 6 0 0 0-6 6c0 3.5 2.5 6 6 8v-1c-3-2-5-4-5-7a5 5 0 0 1 5-5 5 5 0 0 1 5 5c0 3-2 5-5 7v1c3-2 6-4.5 6-8a6 6 0 0 0-6-6z"/>
                        <path d="M12 10a2 2 0 0 0-2 2c0 2 1 3 3 4v-1c-1.5-1-2-1.5-2-3a1 1 0 0 1 1-1 1 1 0 0 1 1 1c0 1.5-.5 2-2 3v1c2-1 3-2 3-4a2 2 0 0 0-2-2z"/>
                    </svg>
                </div>

                {/* Progress Wheel absolute */}
                <svg className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none">
                    <circle cx="64" cy="64" r="62" stroke="rgba(59,130,246,0.1)" strokeWidth="4" fill="none" />
                    <circle cx="64" cy="64" r="62" stroke={unlocked ? "#22c55e" : "#3b82f6"} strokeWidth="4" fill="none" strokeDasharray="390" strokeDashoffset={390 - (390 * progress) / 100} className="transition-all duration-75" />
                </svg>
            </motion.div>

            <p className={`mt-10 text-xs font-mono uppercase text-center max-w-[200px] transition-colors ${unlocked ? 'text-green-500' : 'text-zinc-500'}`}>
                {unlocked ? "SISTEMAS DESBLOQUEADOS. CONTINÚA AL MODO VIP." : "MANTÉN PULSADO O TOCA PARA ENTRAR"}
            </p>
        </section>
    )
}

export default function DesarrolloWeb() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 150]);
  const smoothProgress = useSpring(scrollYProgress, { damping: 15, stiffness: 50 });

  return (
    <div className="bg-[#030303] min-h-screen selection:bg-blue-600/40 relative">
      <NoiseOverlay />
      <MobileDynamicIsland />
      <Head>
        <title>Ingeniería Web de Alta Conversión | DAROX</title>
        <meta name="description" content="No hacemos webs bonitas. Construimos máquinas de facturar con tecnología de vanguardia." />
      </Head>
      
      <Navbar />

      {/* HERO KINÉTICO (Mezcla de tipografías y posiciones absolutas) */}
      <motion.section 
        style={{ opacity: heroOpacity, y: heroY }}
        className="relative min-h-[95vh] w-full flex items-center justify-center p-4 sticky top-0"
      >
        {/* Glow de fondo, ahora centrado uniformemente */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,40,250,0.1),transparent_70%)] pointer-events-none z-0" />

        
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center h-full pt-16">
            
            {/* Texto Flotante de Módulo */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeOut" }}
                className="mb-8 font-mono text-blue-500 text-sm tracking-[0.3em] uppercase flex items-center justify-center md:justify-start gap-4 w-full md:w-auto"
            >
                <div className="w-12 h-px bg-blue-500/50 hidden md:block" />
                Módulo 02 / Ingeniería Digital
            </motion.div>

            <h1 className="flex flex-col gap-0 items-center md:items-start text-center md:text-left">
                <motion.span 
                    initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: 1, delay: 0.2, ease: [0.77, 0, 0.175, 1] }}
                    className="text-5xl sm:text-[8rem] lg:text-[11rem] font-black tracking-tighter text-white leading-[0.8] uppercase origin-bottom"
                >
                    MÁQUINAS
                </motion.span>
                
                <motion.span 
                    initial={{ opacity: 0, scale: 0.9, rotate: -5 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                    className="text-4xl sm:text-7xl lg:text-[7rem] font-serif italic tracking-tight text-zinc-400 leading-[1] md:ml-32"
                >
                    que <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">facturan.</span>
                </motion.span>
            </h1>
            
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mt-12 md:mt-24 gap-12 text-center md:text-left">
                <motion.p 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 2 }}
                    className="max-w-xl text-zinc-400 text-lg md:text-2xl font-light leading-relaxed"
                >
                    Una web que solo informa es una tarjeta de visita muerta. Reemplazamos las plantillas mediocres por <strong className="text-white font-medium">sistemas de conversión brutal.</strong> Calidad startup, precio que sí puedes pagar.
                </motion.p>

                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, type: "spring" }}>
                    <Link href="/contacto" className="group relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-600 text-white overflow-hidden hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-[0_0_50px_rgba(37,99,235,0.3)]">
                        {/* Brillo uniforme y estático al hacer tap para evitar cortes visuales en Android */}
                        <span className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative z-10 text-center font-bold text-sm md:text-base uppercase tracking-widest px-4">Comenzar<br/>Sistema</span>
                    </Link>
                </motion.div>
            </div>
        </div>
      </motion.section>

      <div className="relative z-20 bg-[#030303]">        
        <div className="max-w-7xl mx-auto py-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-1000">
            <LogoCarousel />
        </div>

        {/* INYECCIÓN DE EXPERIENCIAS AWWWARDS */}
        <CinematicHybrid />
        <FlashlightCode />
        <MagneticPills />
        <CostOfMediocrity />

        {/* ESTRUCTURA ASIMÉTRICA DE PRICING (No grid estándar) */}
        <section id="precios" className="relative pb-40 px-4 pt-32 overflow-hidden">
            <div className="absolute right-0 top-1/4 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block" />
            <div className="absolute left-1/2 top-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent hidden xl:block z-0" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                
                <div className="max-w-3xl mb-24">
                    <h2 className="text-3xl md:text-7xl font-black uppercase tracking-tighter text-white leading-none">
                        Transparencia <br/> <span className="text-zinc-700 font-serif italic lowercase tracking-normal text-5xl md:text-[7rem]">absoluta.</span>
                    </h2>
                </div>
                
                <div className="flex flex-col xl:flex-row gap-6 relative">
                    
                    {/* OLD WAY CARD */}
                    <SpotlightCard className="w-full xl:w-5/12 bg-[#090909] border border-white/5 rounded-2xl p-8 xl:p-12 hover:border-white/20 transition-colors">
                        <div className="text-zinc-600 mb-12">
                            <span className="uppercase text-xs tracking-[0.2em] font-mono font-bold block mb-2">Opción A (El Standard)</span>
                            <h3 className="text-2xl text-zinc-400">Las Agencias Clásicas</h3>
                        </div>
                        
                        <div className="text-5xl md:text-7xl font-light text-zinc-700 mb-12 font-serif">~3.000€</div>
                        
                        <ul className="space-y-4 text-zinc-500 font-mono text-sm uppercase tracking-wide">
                            <li className="flex gap-4 border-b border-white/5 pb-4"><span className="text-red-900">✗</span> Diseño con plantillas pesadas</li>
                            <li className="flex gap-4 border-b border-white/5 pb-4"><span className="text-red-900">✗</span> Tú tienes que redactar los textos</li>
                            <li className="flex gap-4 border-b border-white/5 pb-4"><span className="text-red-900">✗</span> Sin estrategia de cierre comprobada</li>
                            <li className="flex gap-4"><span className="text-red-900">✗</span> Tardanza absurda (3-6 meses)</li>
                        </ul>
                    </SpotlightCard>

                    {/* NEW WAY CARD (GROW PACK) - Sobrepuesta visualmente */}
                    <SpotlightCard className="w-full xl:w-7/12 bg-[#0a0f25] border border-blue-500/20 rounded-2xl p-8 xl:p-14 relative xl:-ml-12 xl:mt-24 shadow-[0_0_80px_rgba(0,0,0,0.8)] z-20">
                        <div className="absolute top-0 right-0 bg-blue-600/20 backdrop-blur-md border-[0.5px] border-blue-500/50 text-blue-400 font-mono text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-bl-xl">El Grow Pack</div>
                        
                        <div className="text-blue-500 mb-12 mt-4 xl:mt-0">
                            <span className="uppercase text-xs tracking-[0.2em] font-mono font-bold block mb-2">Opción B (La Inteligente)</span>
                            <h3 className="text-3xl text-white font-black">El Método DAROX</h3>
                        </div>
                        
                        <div className="flex items-end gap-2 mb-12">
                            <div className="text-6xl md:text-[8rem] font-black tracking-tighter text-white leading-none">980</div>
                            <div className="text-4xl text-blue-600 font-serif pb-2 mb-1">€</div>
                        </div>
                        
                        <ul className="space-y-5 text-zinc-300 font-medium text-lg lg:text-xl">
                            <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" /> Ingeniería UI/UX de Rendimiento Startup</li>
                            <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" /> Copywriting Híbrido (Neuroventas + IA)</li>
                            <li className="flex items-center gap-4"><div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" /> Optimización Técnica AEO/SEO profunda</li>
                            <li className="flex items-center gap-4 pt-4 mt-4 border-t border-white/5"><div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" /> Llave en mano en solo 3 - 4 semanas</li>
                        </ul>
                    </SpotlightCard>
                </div>
            </div>
        </section>

        {/* FOUNDER NOTE (Estilo Editorial Raw) */}
        <section className="py-32 px-4 bg-[#010101] border-t border-white/5 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 xl:gap-24 items-center md:items-stretch">
                
                <motion.div 
                    style={{ y: useTransform(smoothProgress, [0.6, 1], [50, -50]) }}
                    className="w-full md:w-5/12 h-[40vh] md:h-[60vh] relative grayscale hover:grayscale-0 transition-all duration-[2s] rounded-xl overflow-hidden border border-white/5"
                >
                    <Image src="/images/sobre1.png" alt="Nicolás DAROX" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-6 left-6 font-mono text-xs uppercase tracking-widest text-zinc-500">
                        FUNDADOR — 2026
                    </div>
                </motion.div>

                <div className="w-full md:w-7/12 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-5xl font-serif italic text-white mb-10 leading-[1.2]">
                        "Tener una web que no convierte es como alquilar un local y <span className="text-red-500 font-sans font-black not-italic px-2">CERRAR LA PUERTA.</span>"
                    </h2>
                    
                    <div className="text-lg md:text-xl text-zinc-400 font-light space-y-6 leading-relaxed max-w-xl">
                        <p>
                            Muchos clientes llegan a nosotros quemados. Han pagado miles de euros por sitios web que parecen folletos del año 2012. 
                        </p>
                        <p className="text-zinc-200">
                            He construido la infraestructura de DAROX para acabar con eso. Nuestra obsesión no es el código; <strong className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">es la caja registradora de tu negocio.</strong> Cada píxel, cada frase y cada interacción está calculada matemáticamente para arrastrar al usuario hacia el CTA.
                        </p>
                        <p>
                            Menos ego artístico. Más facturación para ti.
                        </p>
                    </div>
                    
                    <div className="mt-16 flex items-center gap-6">
                        <div className="w-16 h-[1px] bg-white/20" />
                        <div>
                            <span className="text-2xl font-black text-white block uppercase tracking-wide">Nicolás M.</span>
                            <span className="text-sm font-mono tracking-widest text-blue-500 mt-1 block uppercase">CEO & Architect</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <MobileTinderCards />
        <BiometricUnlock />

        <Questions />
      </div>
    </div>
  );
}
