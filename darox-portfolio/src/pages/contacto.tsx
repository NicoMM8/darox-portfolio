import { useState, useEffect } from "react";
import Head from 'next/head';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [success, setSuccess] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [utmSource, setUtmSource] = useState("Desconocido/Orgánico");
  const [referrer, setReferrer] = useState("Desconocido");
  const [packSelect, setPackSelect] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const utm = urlParams.get("utm_source") || urlParams.get("ref") || "Desconocido/Orgánico";
      setUtmSource(utm);
      setReferrer(document.referrer || "Búsqueda Directa");
      
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

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setIsError(false);
        setSuccess("¡Mensaje enviado correctamente! Redirigiendo al calendario...");
        setTimeout(() => {
          window.location.href = "https://calendar.app.google/wDR8DyKaoJwtAtsa8";
        }, 2000);
      } else {
        setIsError(true);
        setSuccess("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
      }
    } catch {
      setIsError(true);
      setSuccess("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Contacto | DAROX - Agencia de Branding y Diseño Web</title>
        <meta
          name="description"
          content="¿Listo para escalar tu negocio? Contacta con DAROX. Especialistas en branding, diseño web de alta conversión y automatización para empresas en toda España."
        />
        <link rel="canonical" href="https://darox.es/contacto" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contacto | DAROX - Agencia de Branding y Diseño Web" />
        <meta property="og:description" content="¿Listo para escalar tu negocio? Contacta con DAROX. Especialistas en branding, diseño web de alta conversión y automatización." />
        <meta property="og:image" content="https://darox.es/images/fondo_hero.webp" />
        <meta property="og:url" content="https://darox.es/contacto" />
        <meta property="og:type" content="website" />
        
        {/* === SCHEMA SEO GRAPH (10/10 Interconnected Structure) === */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ContactPage",
              "@id": "https://darox.es/contacto/#webpage",
              "url": "https://darox.es/contacto",
              "name": "Contacto | DAROX - Agencia de Branding y Diseño Web",
              "description": "Página de contacto de DAROX, agencia de branding y diseño web de alto impacto.",
              "inLanguage": "es-ES",
              "isPartOf": { "@id": "https://darox.es/#website" },
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", "#contact-intro"]
              },
              "breadcrumb": { "@id": "https://darox.es/contacto/#breadcrumb" },
              "mainEntity": {
                "@type": "ContactPoint",
                "contactType": "customer support",
                "email": "contacto@darox.es",
                "availableLanguage": ["Spanish", "English"],
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "19:00"
                }
              }
            },
            {
              "@type": "BreadcrumbList",
              "@id": "https://darox.es/contacto/#breadcrumb",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://darox.es/" },
                { "@type": "ListItem", "position": 2, "name": "Contacto", "item": "https://darox.es/contacto" }
              ]
            },
            {
              "@type": "FAQPage",
              "@id": "https://darox.es/contacto/#faq",
              "isPartOf": { "@id": "https://darox.es/contacto/#webpage" },
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "¿Cuánto tardáis en responder?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Solemos responder en menos de 24 horas laborables. Si es urgente, una vez rellenes el formulario podrás agendar una llamada directa en nuestro calendario."
                  }
                },
                {
                  "@type": "Question",
                  "name": "¿Trabajáis con empresas de fuera de España?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sí. Trabajamos de forma 100% remota con empresas de cualquier parte del mundo, aunque nuestro foco principal es el mercado de habla hispana (España y Latinoamérica)."
                  }
                }
              ]
            }
          ]
        })}} />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-black text-white pt-32 pb-24 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* ─── HERO EDITORIAL ─── */}
          <div className="flex flex-col mb-24">
            <p className="text-xs font-bold tracking-[0.35em] uppercase text-blue-400 mb-10">
              Contacto — DAROX Brandmaker
            </p>
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-extrabold leading-[0.95] tracking-tighter mb-10 max-w-4xl">
              Hagamos que<br />
              tu marca sea<br />
              <span className="gradient-text">inolvidable.</span>
            </h1>
            <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-20">
              <p id="contact-intro" className="text-lg md:text-xl text-white/55 max-w-xl leading-relaxed font-light">
                Estamos aquí para convertir tu visión en una herramienta de ventas imparable. Rellena el formulario y agendaremos una consultoría estratégica gratuita.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-20">
            
            {/* ─── INFO DE CONTACTO (Izquierda) ─── */}
            <div className="lg:w-1/3 flex flex-col gap-12">
              <div>
                <p className="text-xs font-bold tracking-[0.35em] uppercase text-white/30 mb-6">Canales directos</p>
                <div className="flex flex-col gap-8">
                  <div className="group">
                    <p className="text-sm text-white/40 mb-1">Email</p>
                    <a href="mailto:contacto@darox.es" className="text-xl font-bold hover:text-blue-400 transition-colors">
                      contacto@darox.es
                    </a>
                  </div>
                  <div className="group">
                    <p className="text-sm text-white/40 mb-1">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/darox/" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-blue-400 transition-colors">
                      Darío Muñoz Miguel
                    </a>
                  </div>
                  <div className="group">
                    <p className="text-sm text-white/40 mb-1">Horario</p>
                    <p className="text-xl font-bold">Lunes a Viernes<br />09:00 — 19:00</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold tracking-[0.35em] uppercase text-white/30 mb-6">FAQ Rápida</p>
                <div className="flex flex-col border-t border-white/10">
                  {[
                    { q: "¿Tardáis mucho en responder?", a: "Menos de 24h. Garantizado." },
                    { q: "¿La consultoría es gratuita?", a: "Sí. Analizamos tu caso sin compromiso." }
                  ].map((item, i) => (
                    <div key={i} className="py-4 border-b border-white/10">
                      <p className="text-sm font-bold text-white mb-1">{item.q}</p>
                      <p className="text-sm text-white/50">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ─── FORMULARIO (Derecha) ─── */}
            <div className="lg:w-2/3">
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-12">
                <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                  <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
                  <input type="hidden" name="utm_source" value={utmSource} />
                  <input type="hidden" name="referrer" value={referrer} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="nombre" className="text-xs font-bold uppercase tracking-widest text-white/40">Tu nombre</label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        required
                        placeholder="Juan Pérez"
                        className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/10"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/40">Email corporativo</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="juan@empresa.com"
                        className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors placeholder:text-white/10"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="pack" className="text-xs font-bold uppercase tracking-widest text-white/40">¿En qué estás interesado?</label>
                    <select
                      id="pack"
                      name="pack"
                      required
                      defaultValue={packSelect}
                      className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="bg-neutral-900">Selecciona una opción</option>
                      <option value="Start Pack" className="bg-neutral-900">Start Pack (Branding Base)</option>
                      <option value="Grow Pack" className="bg-neutral-900">Grow Pack (Web Alta Conversión)</option>
                      <option value="Business Pack" className="bg-neutral-900">Business Pack (Sistema Completo)</option>
                      <option value="Consultoría" className="bg-neutral-900">Consultoría Estratégica / Otros</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="mensaje" className="text-xs font-bold uppercase tracking-widest text-white/40">Cuéntanos sobre tu proyecto</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      required
                      placeholder="Busco rediseñar mi web para captar más leads..."
                      className="bg-transparent border-b border-white/10 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none placeholder:text-white/10"
                    />
                  </div>

                  <div className="flex flex-col gap-6">
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-500 disabled:opacity-50"
                    >
                      {loading ? "Enviando..." : "Enviar propuesta"}
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                    
                    {success && (
                      <p className={`text-center font-bold p-4 rounded-xl ${isError ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-green-500/10 text-green-400 border border-green-500/20'}`}>
                        {success}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}