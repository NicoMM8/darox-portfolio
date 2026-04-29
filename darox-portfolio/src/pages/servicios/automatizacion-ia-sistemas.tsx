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
        <meta name="robots" content="index, follow" />
        <title>Automatización CRM e Inteligencia Artificial en Burgos | DAROX</title>
        <meta name="description" content="Sistemas de IA y automatización CRM para empresas en Burgos. Captura, filtra y nutre leads en piloto automático para escalar tu negocio sin fricción ni horas extra." />
        <link rel="canonical" href="https://darox.es/servicios/automatizacion-ia-sistemas" />
        <meta name="keywords" content="automatización crm burgos, inteligencia artificial pymes, make zapier empresa, agencia automatizacion españa, chatbot empresas" />
        <meta property="og:title" content="Automatización CRM e Inteligencia Artificial | DAROX" />
        <meta property="og:description" content="Sistemas de IA y automatización CRM para escalar tu negocio. Captura leads en piloto automático desde 1.950€." />
        <meta property="og:image" content="https://darox.es/images/fondo_hero.webp" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="DAROX — Automatización CRM e Inteligencia Artificial" />
        <meta property="og:url" content="https://darox.es/servicios/automatizacion-ia-sistemas" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DaroxBrandMaker" />
        <meta name="twitter:creator" content="@DaroxBrandMaker" />
        <meta name="twitter:title" content="Automatización CRM e Inteligencia Artificial | DAROX" />
        <meta name="twitter:description" content="Sistemas de IA y automatización CRM para escalar tu negocio. Captura leads en piloto automático desde 1.950€." />
        <meta name="twitter:image" content="https://darox.es/images/fondo_hero.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Service",
                  "@id": "https://darox.es/servicios/automatizacion-ia-sistemas/#service",
                  "name": "Automatización CRM e Inteligencia Artificial",
                  "provider": {
                    "@id": "https://darox.es/#organization"
                  },
                  "areaServed": "ES",
                  "description": "Sistemas de Inteligencia Artificial y automatización CRM para empresas. Captura, filtra y nutre leads en piloto automático.",
                  "offers": {
                    "@type": "Offer",
                    "price": "1950",
                    "priceCurrency": "EUR",
                    "name": "Real Business Pack",
                    "description": "Integración CRM completo, Automatización de Emails, Chatbot IA y Consultoría."
                  }
                },
                {
                  "@type": "WebPage",
                  "@id": "https://darox.es/servicios/automatizacion-ia-sistemas/#webpage",
                  "url": "https://darox.es/servicios/automatizacion-ia-sistemas",
                  "name": "Automatización CRM e Inteligencia Artificial | DAROX",
                  "description": "Sistemas de Inteligencia Artificial y automatización CRM para empresas. Captura, filtra y nutre leads en piloto automático.",
                  "dateModified": new Date().toISOString().split('T')[0],
                  "isPartOf": { "@id": "https://darox.es/#website" },
                  "about": { "@id": "https://darox.es/servicios/automatizacion-ia-sistemas/#service" },
                  "breadcrumb": { "@id": "https://darox.es/servicios/automatizacion-ia-sistemas/#breadcrumb" },
                  "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["#hero-title", "#hero-description"]
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://darox.es/servicios/automatizacion-ia-sistemas/#breadcrumb",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://darox.es/" },
                    { "@type": "ListItem", "position": 2, "name": "Servicios", "item": "https://darox.es/#servicios" },
                    { "@type": "ListItem", "position": 3, "name": "Automatización IA", "item": "https://darox.es/servicios/automatizacion-ia-sistemas" }
                  ]
                }
              ]
            })
          }}
        />
      </Head>
      
      <Navbar />

      {/* OVERLAY DE CUADRÍCULA (GRID) TÉCNICO */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] shadow-[inset_0_0_100px_rgba(0,0,0,1)]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} 
      />

      {/* HERO TERMINAL STYLE */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4 z-10 overflow-hidden">
        
        {/* Círculo de desenfoque masivo interactivo - Mix Marca DAROX */}
        <motion.div 
            style={{ y: yParallax }}
            className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-900/30 to-fuchsia-900/20 blur-[150px] rounded-[100%] pointer-events-none" 
        />

        <div className="max-w-5xl mx-auto w-full flex flex-col relative">
            <h1 className="sr-only">Agencia de Automatización CRM e Inteligencia Artificial</h1>
            
            <div className="font-mono text-xs md:text-sm text-fuchsia-400 mb-8 tracking-widest uppercase flex items-center gap-4" aria-hidden="true">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-[ping_2s_infinite]" />
                Automatización CRM e IA / Módulo 03
            </div>

            <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] font-black tracking-tighter leading-[0.9] uppercase mb-8" aria-hidden="true">
                <span className="block text-zinc-600">SISTEMAS INTELIGENTES.</span>
                <span className="block text-white mt-2">NEGOCIOS <TypewriterText text="ESCALABLES." delay={1000} /></span>
            </h2>

            <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
                className="max-w-2xl border-l border-blue-500/50 pl-6 mt-8"
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
                            <div className="font-mono text-fuchsia-400 text-xs mb-4">01 // DATA CENTER</div>
                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white">Central de Mandos CRM</h3>
                            <p className="text-zinc-400 text-lg">Unificamos todas tus fuentes de leads (WhatsApp, Emails, Web) en un solo panel de cristal. Jamás volverás a perder una venta porque alguien &quot;se olvidó de contestar&quot;.</p>
                        </div>
                        {/* Gráfico falso estilo dashboard */}
                        <div className="absolute right-0 bottom-0 w-[40%] h-[70%] border-t border-l border-white/5 bg-gradient-to-tl from-white/5 to-transparent rounded-tl-3xl translate-x-4 translate-y-4 flex items-end p-4">
                            <div className="w-full flex items-end gap-2 h-full opacity-30">
                                {[40, 70, 45, 90, 65, 100].map((h, i) => (
                                    <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} transition={{ delay: 0.5 + i * 0.1 }} className="flex-1 bg-gradient-to-t from-blue-600 to-fuchsia-500 rounded-t-sm" />
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
                            {['HubSpot', 'Salesforce', 'Make.com', 'Zapier', 'ChatGPT', 'Claude', 'Stripe', 'Twilio', 'n8n', 'Airtable', 'Notion'].map((tech, i) => (
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
                className="border-[0.5px] border-blue-500/30 p-[1px] rounded-[40px] bg-gradient-to-b from-blue-500/40 via-fuchsia-500/20 to-transparent shadow-[0_0_100px_rgba(59,130,246,0.15)]"
            >
                <div className="bg-[#020202] rounded-[39px] p-8 md:p-16 relative overflow-hidden backdrop-blur-2xl">
                    <div className="absolute top-0 right-1/4 w-96 h-96 bg-fuchsia-600/10 blur-[100px] pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8 relative z-10">
                        <div>
                            <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full font-mono text-xs uppercase mb-6">
                                Sistemas Avanzados
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black uppercase text-white">Pack Automatización Total</h3>
                            <p className="text-zinc-400 mt-4 max-w-sm">Transforma tu negocio en un ecosistema que opera y captura clientes 24/7 sin depender de tu tiempo.</p>
                        </div>
                        
                        <div className="text-right">
                            <div className="text-xl text-zinc-500 font-mono mb-2 uppercase tracking-widest">Desde</div>
                            <div className="text-6xl md:text-7xl font-black text-white tracking-tighter">1.950<span className="text-purple-500">€</span></div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
                        {[
                            "Desarrollo de Ecosistema Web Premium",
                            "Implementación de CRM Estratégico",
                            "Secuencias Automatizadas de Email Marketing",
                            "Agentes de IA para Soporte y Captación",
                            "Digitalización y Optimización de Procesos Internos",
                            "Mantenimiento Técnico y Soporte"
                        ].map((m, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="mt-0.5 flex-shrink-0">
                                    <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-zinc-300 font-medium text-lg leading-snug">{m}</span>
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
