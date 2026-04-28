import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { results } from "@/data/results";

// ─── Sección de prueba social honesta ──────────────────────────────────────
// No hay testimonios falsos. Mostramos los proyectos reales con sus métricas
// y una sección de precios de lanzamiento para los primeros clientes.
// ────────────────────────────────────────────────────────────────────────────

const cardVariants = {
  initial: { opacity: 0, y: 40, scale: 0.97 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
  whileHover: { y: -6, scale: 1.02 },
};

const TestimonialsBlock: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-semibold text-sm tracking-wide text-blue-100 uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Capacidad técnica y{" "}
            <br className="hidden md:block" />
            visión estratégica
          </h2>
          <p className="text-lg text-white/60">
            Somos una agencia en construcción de cartera. Estos son los proyectos en los
            que hemos trabajado y los resultados que hemos generado.
          </p>
        </div>

        {/* ── Cards de proyectos reales ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
              whileHover="whileHover"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative group rounded-2xl border border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] shadow-xl overflow-hidden flex flex-col"
            >
              {/* Línea decorativa top */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70" />

              {/* Imagen del proyecto */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={item.portfolioImageUrl || item.imageUrl}
                  alt={`Proyecto ${item.title} realizado por DAROX`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {item.status && (
                  <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow">
                    {item.status}
                  </span>
                )}
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-1 gap-4">
                {/* Categorías */}
                <div className="flex flex-wrap gap-2">
                  {item.categories.map((cat) => (
                    <span
                      key={cat}
                      className="bg-white/5 border border-white/10 text-white/70 text-xs font-semibold px-2 py-1 rounded-lg"
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    {item.webDescription}
                  </p>
                </div>

                {/* Métricas reales */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                  {item.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="bg-white/5 rounded-xl p-3 border border-white/5 flex flex-col"
                    >
                      <span className="text-xl font-extrabold text-white">{m.value}</span>
                      <span className="text-xs text-white/50 mt-0.5">{m.label}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={item.url}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-colors duration-200 mt-2"
                >
                  Ver caso completo →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bloque honesto: Precios de lanzamiento ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-950/40 to-black/60 backdrop-blur-md p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl"
        >
          <div className="flex-1 flex flex-col gap-4">
            <span className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-bold text-blue-300 uppercase tracking-wider w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Precios de lanzamiento
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              Somos una agencia joven.<br />
              <span className="text-white/70">Y eso es una ventaja para ti.</span>
            </h3>
            <p className="text-white/60 text-base leading-relaxed max-w-xl">
              Estamos construyendo nuestra cartera de clientes y ofrecemos precios de
              lanzamiento a cambio de la oportunidad de demostrar nuestro valor y generar casos de éxito.
              Máxima atención, cero burocracia, directo con el equipo.
            </p>
            <ul className="flex flex-col gap-2 mt-2">
              {[
                "Tratas directamente con el equipo creativo, no con un comercial",
                "Precios de lanzamiento por tiempo limitado",
                "Atención personalizada de principio a fin",
                "Entrega definida en contrato — sin sorpresas",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                  <svg className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 6.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-3 w-full md:w-auto">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-base shadow-lg about-shadow hover:from-blue-500 hover:to-indigo-500 hover:scale-105 transition-all duration-200"
            >
              Agenda una llamada gratuita →
            </Link>
            <p className="text-xs text-white/30 text-center">
              Sin compromiso. 15 minutos. Si no encajamos, te lo decimos.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TestimonialsBlock;