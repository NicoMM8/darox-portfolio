import React from "react";
import Image from "next/image";

interface Testimonial {
  id: string;
  type: "Local" | "Growth" | "Design";
  name: string;
  position: string;
  image: string;
  problem: string;
  solution: string;
}

const testimonials: Testimonial[] = [
  {
    id: "local-anchor",
    type: "Local",
    name: "Luis Fernández",
    position: "Fundador de El Majuelo del Arlanza",
    image: "/images/luis.png",
    problem:
      "Buscábamos una empresa de diseño web en Burgos que entendiera nuestro negocio local y no solo nos diera una plantilla.",
    solution:
      "Darox no solo mejoró nuestra imagen, sino que el soporte técnico es inmediato y cercano. La mejor inversión para digitalizarse en la ciudad.",
  },
  {
    id: "tech-growth",
    type: "Growth",
    name: "Javier Martín",
    position: "CEO de StartUp Burgos",
    image: "/images/javi.png",
    problem:
      "Nuestros procesos de venta eran manuales y perdíamos muchas oportunidades por falta de seguimiento ágil.",
    solution:
      "Implementaron un sistema con IA que nos ahorra 20 horas semanales. No son solo diseñadores, son ingenieros de negocio.",
  },
  {
    id: "design-authority",
    type: "Design",
    name: "Marta González",
    position: "Directora de Marketing en Golden Hole",
    image: "/images/marta.png",
    problem:
      "Nuestra marca necesitaba un rebranding completo para competir a nivel nacional con estudios de diseño de primer nivel.",
    solution:
      "La visión estratégica y la calidad visual que aportó el equipo elevó nuestra percepción de valor. Un trabajo premium y estratégico.",
  },
  {
    id: "local-trust",
    type: "Local",
    name: "Dra. Elena Vega",
    position: "Directora de Clínica Dental San Pablo",
    image: "/images/Elena.png",
    problem:
      "La gente buscaba 'dentista en Burgos' y no aparecíamos. Necesitábamos transmitir confianza y cercanía.",
    solution:
      "Desde el rediseño, las citas online han subido un 40%. Los pacientes nuevos nos dicen que la web les dio mucha seguridad.",
  },
  {
    id: "growth-b2b",
    type: "Growth",
    name: "Roberto Méndez",
    position: "Gerente de Logística Norte",
    image: "/images/Roberto.png",
    problem:
      "La gestión de pedidos era un caos de excels y llamadas. Necesitábamos automatizar para no morir de éxito.",
    solution:
      "El sistema que crearon conecta la web con nuestro almacén en tiempo real. Hemos reducido errores a cero y facturamos el doble.",
  },
  {
    id: "design-aesthetics",
    type: "Design",
    name: "Sofía Aranda",
    position: "Arquitecta Principal en Atelier V",
    image: "/images/sofia.png",
    problem:
      "Nuestro portafolio antiguo no hacía justicia a la calidad de nuestras obras. Parecía una web de los años 2000.",
    solution:
      "Darox diseñó una galería minimalista que respira elegancia. Ahora mostramos nuestros proyectos con el orgullo que merecen.",
  },
];

const stats = [
  { value: "180+", label: "Proyectos de diseño completados." },
  { value: "96%", label: "Índice de satisfacción de clientes." },
  { value: "5+", label: "Sectores diferentes." },
];

const TestimonialCard: React.FC<{ t: Testimonial }> = ({ t }) => (
  <div className="relative group rounded-2xl border border-white/10 bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] shadow-xl p-6 sm:p-8 flex flex-col h-full overflow-hidden backdrop-blur-[2.5px] transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
    {/* Línea decorativa superior según tipo */}
    <div
      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-${t.type === "Local" ? "blue-500" : t.type === "Growth" ? "emerald-500" : "purple-500"
        } to-transparent opacity-70`}
    />

    {/* Header: Foto + Datos */}
    <div className="flex items-start gap-4 mb-6">
      <div className="relative flex-shrink-0">
        <div className="p-1 rounded-full border border-white/20 bg-white/5">
          <Image
            src={t.image}
            alt={`Foto de ${t.name}`}
            width={64}
            height={64}
            className="h-16 w-16 object-cover rounded-full"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-blue-900/80 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold border border-white/10 uppercase tracking-wider">
          {t.type}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-white leading-tight">{t.name}</h3>
        <p className="text-sm text-white/60 mt-1">{t.position}</p>
      </div>
    </div>

    {/* Problem Section */}
    <div className="mb-4 relative pl-4 border-l-2 border-red-500/50">
      <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">El Reto</p>
      <p className="text-sm text-white/70 italic">&quot;{t.problem}&quot;</p>
    </div>

    {/* Solution Section */}
    <div className="relative pl-4 border-l-2 border-green-500/50 mt-auto">
      <p className="text-xs font-bold text-green-400 uppercase tracking-wider mb-1">La Solución</p>
      <p className="text-base text-white font-medium">&quot;{t.solution}&quot;</p>
    </div>

    {/* Rating Stars */}
    <div className="flex gap-1 mt-6 pt-4 border-t border-white/5">
      {[...Array(5)].map((_, idx) => (
        <svg
          key={idx}
          className="w-4 h-4 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

const TestimonialsBlock: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 text-white bg-gradient-to-br from-[rgba(0,85,255,0.08)] to-[rgba(153,153,153,0.10)] backdrop-blur-[2.5px] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="font-semibold text-sm tracking-wide text-blue-100 uppercase">
              Historias de Éxito
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
            Lo que dicen los empresarios <br className="hidden md:block" /> que ya escalan con Darox
          </h2>
          <p className="text-lg text-white/60">
            Resultados reales de empresas locales, startups tecnológicas y marcas que buscan la excelencia.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center bg-white/5 rounded-2xl p-6 border border-white/5 backdrop-blur-sm"
            >
              <h3 className="text-3xl font-extrabold text-white mb-2">{s.value}</h3>
              <p className="text-sm text-white/60 text-center">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid - Problem/Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </div>
      </div>

      {/* Schema.org Implementation */}
      {testimonials.map((t) => (
        <script
          key={`schema-${t.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Review",
              itemReviewed: {
                "@type": "LocalBusiness",
                name: "DAROX",
                image: "https://darox.es/logo.png",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Burgos",
                  addressRegion: "Burgos",
                  addressCountry: "ES"
                }
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
                bestRating: "5",
              },
              author: {
                "@type": "Person",
                name: t.name,
              },
              reviewBody: `${t.problem} ${t.solution}`,
              publisher: {
                "@type": "Organization",
                name: t.position.split(" de ")[1] || t.position, // Basic extraction attempt
              },
            }),
          }}
        />
      ))}
    </section>
  );
};

export default TestimonialsBlock;