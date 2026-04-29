import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

export default function Contact() {
  const [success, setSuccess] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const [packSelect, setPackSelect] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const packParam = urlParams.get("pack");
      if (packParam === "start") setPackSelect("Start Pack (Branding Base)");
      else if (packParam === "grow") setPackSelect("Grow Pack (Web Alta Conversión)");
      else if (packParam === "business") setPackSelect("Business Pack (Sistema Completo)");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    // Preparar payload para Web3Forms
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "29919ee5-a12c-4100-91da-959576561176");
    formData.append("subject", `Nuevo Lead DAROX: ${formData.get("pack")} - ${formData.get("nombre")}`);
    formData.append("from_name", "DAROX Web");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setIsError(false);
        setSuccess("¡Mensaje enviado correctamente! Redirigiendo al calendario...");
        form.reset();
        setTimeout(() => {
          window.location.href = "https://calendar.app.google/wDR8DyKaoJwtAtsa8";
        }, 2000);
      } else {
        const errorData = await res.json();
        setIsError(true);
        setSuccess(errorData.message || "Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch {
      setIsError(true);
      setSuccess("Error de conexión. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Contacto | DAROX - Agencia de Branding B2B</title>
        <meta
          name="description"
          content="¿Listo para escalar tu negocio? Contacta con DAROX. Especialistas en branding corporativo, diseño web de alta conversión y sistemas B2B."
        />
        <link rel="canonical" href="https://darox.es/contacto" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contacto | DAROX - Agencia de Branding y Diseño Web" />
        <meta property="og:description" content="¿Listo para escalar tu negocio? Contacta con DAROX. Especialistas en branding, diseño web de alta conversión y automatización." />
        <meta property="og:image" content="https://darox.es/images/fondo_hero.webp" />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="900" />
        <meta property="og:image:alt" content="DAROX — Contacta con la Agencia de Branding y Diseño Web" />
        <meta property="og:url" content="https://darox.es/contacto" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@DaroxBrandMaker" />
        <meta name="twitter:creator" content="@DaroxBrandMaker" />
        <meta name="twitter:title" content="Contacto | DAROX - Agencia de Branding y Diseño Web" />
        <meta name="twitter:description" content="¿Listo para escalar tu negocio? Contacta con DAROX. Especialistas en branding, diseño web de alta conversión y automatización." />
        <meta name="twitter:image" content="https://darox.es/images/fondo_hero.webp" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ContactPage",
                  "@id": "https://darox.es/contacto/#webpage",
                  "url": "https://darox.es/contacto",
                  "name": "Contacto | DAROX - Agencia de Branding B2B",
                  "description": "¿Listo para escalar tu negocio? Contacta con DAROX. Especialistas en branding corporativo, diseño web de alta conversión y sistemas B2B.",
                  "dateModified": new Date().toISOString().split('T')[0],
                  "isPartOf": { "@id": "https://darox.es/#website" },
                  "breadcrumb": { "@id": "https://darox.es/contacto/#breadcrumb" }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://darox.es/contacto/#breadcrumb",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://darox.es/" },
                    { "@type": "ListItem", "position": 2, "name": "Contacto", "item": "https://darox.es/contacto" }
                  ]
                }
              ]
            })
          }}
        />
      </Head>

      <Navbar />

      <main className="relative min-h-screen bg-black text-white pt-40 pb-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden">
        
        {/* Background Video & DAROX Ambient Glows */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20 mix-blend-screen pointer-events-none"
          >
            <source src="/images/fondo2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        {/* Brand Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-4xl w-full mx-auto relative z-10">
          
          <div className="mb-16 text-center">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-fuchsia-400 mb-4 inline-block drop-shadow-md">
              Hablemos de tu negocio
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-lg leading-tight">
              ¿Listo para dar el primer paso?
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light max-w-2xl mx-auto drop-shadow">
              Cuéntanos qué tienes en mente. No somos una agencia de volumen; nos involucramos a fondo en pocos proyectos al año para asegurar resultados reales.
            </p>
          </div>

          {/* DAROX Glassmorphism Card */}
          <div className="w-full bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">

            <form className="flex flex-col gap-10 relative z-10" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="nombre" className="text-xs uppercase tracking-widest text-gray-400 font-bold group-focus-within:text-blue-400 transition-colors">Nombre o Empresa</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    placeholder="Tu nombre..."
                    className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-600 text-base"
                  />
                </div>
                
                <div className="flex flex-col gap-2 group">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-gray-400 font-bold group-focus-within:text-blue-400 transition-colors">Email de contacto</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="email@empresa.com"
                    className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-600 text-base"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 group">
                <label htmlFor="pack" className="text-xs uppercase tracking-widest text-gray-400 font-bold group-focus-within:text-blue-400 transition-colors">¿Qué necesitas?</label>
                <div className="relative">
                  <select
                    id="pack"
                    name="pack"
                    required
                    defaultValue={packSelect}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all appearance-none cursor-pointer text-base"
                  >
                    <option value="" disabled className="bg-neutral-900">Selecciona una opción</option>
                    <option value="Start Pack" className="bg-neutral-900">Rediseño de Marca / Branding</option>
                    <option value="Grow Pack" className="bg-neutral-900">Diseño Web de Alta Conversión</option>
                    <option value="Business Pack" className="bg-neutral-900">Ecosistema Completo (Marca + Web)</option>
                    <option value="Consultoría" className="bg-neutral-900">Otra consulta</option>
                  </select>
                  <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 group">
                <label htmlFor="mensaje" className="text-xs uppercase tracking-widest text-gray-400 font-bold group-focus-within:text-blue-400 transition-colors">Detalles del proyecto</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={3}
                  required
                  placeholder="Cuéntanos brevemente qué buscas..."
                  className="bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none placeholder:text-gray-600 text-base"
                />
              </div>

              <div className="flex flex-col mt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full group relative flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-white font-bold text-lg bg-gradient-to-r from-purple-700 to-fuchsia-500 shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_35px_rgba(168,85,247,0.7)] hover:scale-[1.02] hover:from-purple-600 hover:to-fuchsia-400 transition-all duration-300 disabled:opacity-50 disabled:hover:shadow-none disabled:hover:scale-100"
                >
                  {loading ? "Procesando..." : "Enviar solicitud"}
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {success && (
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`text-center font-bold text-sm -mt-2 ${isError ? 'text-red-500' : 'text-green-400'}`}
                >
                  {success}
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </main>
    </>
  );
}