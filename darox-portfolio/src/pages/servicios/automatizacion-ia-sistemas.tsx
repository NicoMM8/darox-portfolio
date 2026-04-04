import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Questions from '../../components/Questions';
import LogoCarousel from '../../components/LogoCarousel';
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Typewriter Effect (Hacker / Terminal look)
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let isMounted = true;
        let currentIndex = 0;
        
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                if (currentIndex <= text.length - 1) {
                    if (isMounted) {
                        setDisplayedText(text.slice(0, currentIndex + 1));
                    }
                    currentIndex++;
                } else {
                    clearInterval(interval);
                }
            }, 60); // Velocidad de tecleo
            return () => clearInterval(interval);
        }, delay);
        
        return () => { isMounted = false; clearTimeout(timeout); };
    }, [text, delay]);

    return (
        <span className="inline-block relative">
            {displayedText}
            <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ duration: 0.8, repeat: Infinity }} 
                className="inline-block w-3 h-[0.8em] bg-blue-500 ml-1 translate-y-1"
            />
        </span>
    );
};

// Componente Borde Animado para el Bento Box
const GlowingBorderBento = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className={`relative rounded-3xl overflow-hidden bg-[#050505] border border-white/10 group ${className}`}
    >
        {/* Halo de luz interno */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        {/* Contenido real */}
        <div className="relative z-10 w-full h-full p-8 md:p-10 flex flex-col justify-between">
            {children}
        </div>
    </motion.div>
);

export default function AutomatizacionIA() {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className="bg-[#000] min-h-screen text-white font-sans selection:bg-purple-500/30">
      <Head>
        <title>Sistemas IA & Automatización | DAROX</title>
        <meta name="description" content="Automatiza procesos, implanta CRM y despliega IA 24/7 en tu negocio para multiplicar beneficios reduciendo personal." />
      </Head>
      
      <Navbar />

      {/* OVERLAY DE CUADRÍCULA (GRID) TÉCNICO */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] shadow-[inset_0_0_100px_rgba(0,0,0,1)]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      {/* HERO TERMINAL STYLE */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 z-10 overflow-hidden">
        
        {/* Círculo de desenfoque masivo purpura interactivo */}
        <motion.div 
            style={{ y: yParallax }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-900/20 blur-[150px] rounded-[100%] pointer-events-none" 
        />

        <div className="max-w-5xl mx-auto w-full flex flex-col relative">
            <div className="font-mono text-xs md:text-sm text-purple-400 mb-8 tracking-widest uppercase flex items-center gap-4">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-[ping_2s_infinite]" />
                Módulo 03 / Ejecución Autónoma
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.9] uppercase mb-8">
                <span className="block text-zinc-600">MENOS HUMANOS.</span>
                <span className="block text-white mt-1">MÁS <TypewriterText text="MÁRGENES." delay={1000} /></span>
            </h1>

            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
                className="max-w-2xl border-l border-purple-500/50 pl-6 mt-8"
            >
                <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
                    Las tareas manuales destruyen el beneficio de tu empresa. Implantamos <strong>Sistemas CRM y automatizaciones de Inteligencia Artificial</strong> para que tu negocio facture e interactúe con clientes mientras tú estás durmiendo.
                </p>
                
                <div className="mt-10">
                    <Link
                        href="/contacto"
                        className="inline-flex items-center gap-4 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider text-sm hover:bg-zinc-200 transition-colors"
                    >
                        <span>Solicitar Auditoría Técnica</span>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </div>
            </motion.div>
        </div>
      </section>

      {/* BENTO BOX GRID (Diseño Dashboard IA) */}
      <section className="py-24 px-4 z-10 relative">
          <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-mono tracking-tighter uppercase border-b border-white/10 pb-6 mb-2">INFRAESTRUCTURA</h2>
                    <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Lo que implementamos dentro de tu negocio:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    
                    {/* Bento 1: CRM (Ancho completo 2/3) */}
                    <GlowingBorderBento className="md:col-span-2 order-1" delay={0.1}>
                        <div className="max-w-lg relative z-10">
                            <div className="font-mono text-purple-400 text-xs mb-4">01 // DATA CENTER</div>
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white">Central de Mandos CRM</h3>
                            <p className="text-zinc-400 text-lg">Unificamos todas tus fuentes de leads (WhatsApp, Emails, Web) en un solo panel de cristal. Jamás volverás a perder una venta porque alguien &quot;se olvidó de contestar&quot;.</p>
                        </div>
                        {/* Gráfico falso estilo dashboard */}
                        <div className="absolute right-0 bottom-0 w-[40%] h-[70%] border-t border-l border-white/5 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-3xl translate-x-4 translate-y-4 flex items-end p-4">
                            <div className="w-full flex items-end gap-2 h-full opacity-30">
                                {[40, 70, 45, 90, 65, 100].map((h, i) => (
                                    <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ delay: 0.5 + i * 0.1 }} className="flex-1 bg-purple-500 rounded-t-sm" />
                                ))}
                            </div>
                        </div>
                    </GlowingBorderBento>

                    {/* Bento 2: Chatbots (Alto ratio) */}
                    <GlowingBorderBento className="md:col-span-1 md:row-span-2 order-2" delay={0.2}>
                        <div className="font-mono text-blue-400 text-xs mb-4">02 // 24/7 AGENT</div>
                        <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">Clones de Inteligencia Artificial</h3>
                        <p className="text-zinc-400">Entrenamos IAs con todos los datos de tu negocio para que atiendan al usuario, califiquen al prospecto y agenden reuniones automáticamente en tu calendario.</p>
                        
                        <div className="mt-auto pt-8">
                            <div className="p-4 bg-white/5 border border-white/10 rounded-xl space-y-4">
                                <div className="flex gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-500 flex items-center justify-center text-xs">AI</div>
                                    <div className="p-2 bg-blue-500/10 text-blue-400 rounded-r-xl rounded-bl-xl text-xs flex-1 font-mono">Detección de intención de compra: +94%</div>
                                </div>
                                <div className="flex gap-3 justify-end">
                                    <div className="p-2 bg-white/5 text-zinc-300 rounded-l-xl rounded-br-xl text-xs font-mono">Agendando...</div>
                                    <div className="w-6 h-6 rounded-full bg-zinc-800" />
                                </div>
                            </div>
                        </div>
                    </GlowingBorderBento>

                    {/* Bento 3: Stats */}
                    <GlowingBorderBento className="md:col-span-1 order-3 bg-white" delay={0.3}>
                        <div className="h-full flex flex-col justify-center text-black">
                            <div className="text-6xl md:text-[6rem] font-black tracking-tighter leading-none mb-2">9.5<span className="text-4xl">H</span></div>
                            <h3 className="text-xl font-bold uppercase">Ahorradas a la semana</h3>
                            <p className="text-zinc-500 text-sm mt-4 font-mono">Por empleado promedio con automatizaciones Make/Zapier.</p>
                        </div>
                    </GlowingBorderBento>

                    {/* Bento 4: Integraciones */}
                    <GlowingBorderBento className="md:col-span-1 order-4 bg-gradient-to-br from-[#0a0f25] to-[#020205]" delay={0.4}>
                        <div className="font-mono text-white/50 text-xs mb-4">03 // STACK</div>
                        <h3 className="text-2xl font-bold uppercase text-white mb-6">El Ecosistema</h3>
                        <div className="flex flex-wrap gap-3">
                            {['HubSpot', 'Salesforce', 'Make.com', 'Zapier', 'ChatGPT', 'Claude', 'Stripe', 'Twilio'].map((tech, i) => (
                                <span key={i} className="px-3 py-1 border border-white/10 rounded-full text-xs font-mono text-zinc-400 bg-white/5">{tech}</span>
                            ))}
                        </div>
                    </GlowingBorderBento>
                </div>
          </div>
      </section>

      {/* EL REAL BUSINESS PACK (Precio) - Diseño "Software Terminal" */}
      <section className="py-32 px-4 z-10 relative">
          <div className="max-w-4xl mx-auto">
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
                className="border-[0.5px] border-purple-500/30 p-[1px] rounded-[40px] bg-gradient-to-b from-purple-500/50 to-transparent shadow-[0_0_100px_rgba(168,85,247,0.15)]"
            >
                <div className="bg-[#020202] rounded-[39px] p-8 md:p-16 relative overflow-hidden backdrop-blur-2xl">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[100px] pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8 relative z-10">
                        <div>
                            <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full font-mono text-xs uppercase mb-6">
                                The Master Package
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase text-white">Real Business Pack</h2>
                            <p className="text-zinc-400 mt-4 max-w-sm">No vendes horas, vendes máquinas que trabajan por ti. Este es el sistema de los peces grandes.</p>
                        </div>
                        
                        <div className="text-right">
                            <div className="text-2xl text-zinc-500 font-mono line-through mb-2">Incalculable</div>
                            <div className="text-6xl md:text-7xl font-black text-white tracking-tighter">1.950<span className="text-purple-500">€</span></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
                        {[
                            "Todo lo del Grow Pack (Web Élite)",
                            "Integración de CRM Completo",
                            "Automatización de Emails / Lead Nurturing",
                            "Implementación de Chatbot IA (Soporte)",
                            "Ahorro de hasta 10h semanales de gestión",
                            "Consultoría de procesos internos"
                        ].map((m, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-1 w-4 h-4 border border-purple-500 bg-purple-500/20 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 bg-purple-400" />
                                </div>
                                <span className="text-zinc-300 font-medium">{m}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 relative z-10">
                        <Link href="/contacto" className="block w-full py-6 text-center bg-white text-black font-black uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all duration-300">
                            INICIAR SISTEMA AHORA
                        </Link>
                    </div>
                </div>
            </motion.div>
          </div>
      </section>

      <LogoCarousel />
      <Questions />
    </div>
  );
}
